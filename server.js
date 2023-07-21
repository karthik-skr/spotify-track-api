require('dotenv').config();
const express = require("express");
const tracksController = require('./controllers/tracks.controller');
const {authenticateApiKey} = require("./middleware/auth.middleware");
const setupSwagger = require('./swagger');

const app = express();

app.use(express.json());

// Endpoint for creating a track
app.post('/api/tracks', tracksController.createTrack);

// Endpoint for retrieving track metadata by ISRC
app.get('/api/tracks/:isrc', tracksController.getTrackByISRC);

// Endpoint for retrieving track metadata by artist name
app.get('/api/tracks-by-artist', tracksController.getTracksByArtist);

// endpoint for searching tracks from Spotify
app.get('/api/search-tracks', authenticateApiKey ,tracksController.searchTracks);


const PORT = process.env.PORT || 8080;

setupSwagger(app);

// Define a route for the root path
app.get('/', (req, res) => {
  res.redirect("/api-docs");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
