// services/spotifyAuth.js

const axios = require('axios');

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

/**
 * The function `getAccessToken` is an asynchronous function that makes a POST request to the Spotify
 * API to obtain an access token using client credentials.
 * @returns The function `getAccessToken` returns a Promise that resolves to the access token obtained
 * from the Spotify API.
 */
const getAccessToken = async() => {
  try {
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      method: 'post',
      headers: {
        'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))
      },
      data: new URLSearchParams({
        grant_type: 'client_credentials'
      }).toString()
    };

    const response = await axios(authOptions);

    if (response.status === 200) {
      const token = response.data.access_token;
      return token;
    } else {
      throw new Error('Failed to obtain access token');
    }
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAccessToken
};
