
const axios = require('axios');
const { Track, Artist } = require('../models');
const {getAccessToken} = require("../services/spotifyAuth.service");

/* The `exports.createTrack` function is responsible for creating a new track in the database based on
the provided ISRC (International Standard Recording Code). */
exports.createTrack = async (req, res) => {
  const { isrc } = req.body;
  const access_token = await getAccessToken();
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/search?q=isrc:${isrc}&type=track`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    const { items } = response.data.tracks;
    if(!items.length){
        throw new Error('Tracks not found for the requested ISRC');
    }
    const track = items.reduce((prev, current) =>
      prev.popularity > current.popularity ? prev : current
    );
    const { name: title, album, artists } = track;
    const { images } = album;
    const createdTrack = await Track.create({
      isrc,
      title,
      imageUri: images[0].url,
    });

    await Artist.bulkCreate(
      artists.map((artist) => ({ name: artist.name, trackIsrc: createdTrack.isrc }))
    );

    const trackWithArtists = await Track.findByPk(createdTrack.isrc, {
        include: [{ model: Artist, as: 'artists',attributes: ["name"] }],
        attributes: ["isrc","title","imageUri"]
    });

    res.json(trackWithArtists);
  } catch (error) {
    if(error?.original?.code == "ER_DUP_ENTRY"){
        return res.status(500).json({ error: "The requested track data already added to the database" });
    }
    res.status(500).json({ error: error.message });
  }
};

/* The `exports.getTrackByISRC` function is responsible for retrieving a track from the database based
on the provided ISRC (International Standard Recording Code). */
exports.getTrackByISRC = async (req, res) => {
  const { isrc } = req.params;
  try {
    const track = await Track.findOne({
      where: { isrc },
      include: [{ model: Artist, as: 'artists',attributes: ["name"] }],
      attributes: ["isrc","title","imageUri"]
    });
    if(!track){
        throw new Error('No Data found for the requested for ISRC');
    }
    res.json(track);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* The `exports.getTracksByArtist` function is responsible for retrieving all tracks from the database
that are associated with a specific artist. */
exports.getTracksByArtist = async (req, res) => {
  const { artist } = req.query;

  try {
    const tracks = await Track.findAll({
      include: [{ model: Artist, as: 'artists', where: { name: artist },attributes: ["name"]}],
      attributes: ["isrc","title","imageUri"]
    });
    if(!tracks){
        throw new Error('No Data found for the requested for ISRC');
    }
    res.json(tracks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* The `exports.searchTracks` function is responsible for searching tracks on Spotify based on a
provided query. */
exports.searchTracks = async (req, res) => {
    const { query } = req.query;
    const access_token = await getAccessToken();
  
    try {
      const config = {
        method: 'get',
        url: `https://api.spotify.com/v1/search?q=${encodeURIComponent(
          query
        )}&type=track`,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      };
  
      const response = await axios(config);
      const { items } = response.data.tracks;
      res.json(items);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to search tracks' });
    }
};