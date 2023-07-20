require('dotenv').config();
const express = require("express");
const tracksController = require('./controllers/tracks.controller');
const {authenticateApiKey} = require("./middleware/auth.middleware");
const setupSwagger = require('./swagger');

const app = express();

app.use(express.json());

// Endpoint for creating a track
app.post('/tracks', tracksController.createTrack);

// Endpoint for retrieving track metadata by ISRC
app.get('/tracks/:isrc', tracksController.getTrackByISRC);

// Endpoint for retrieving track metadata by artist name
app.get('/tracks-by-artist', tracksController.getTracksByArtist);

// endpoint for searching tracks from Spotify
app.get('/search-tracks', authenticateApiKey ,tracksController.searchTracks);


const PORT = process.env.PORT || 8080;

setupSwagger(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
