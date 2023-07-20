// In real time API_KEY will be unique which is the private key for client.
const  API_KEY = "test-api-key";


// Middleware to validate API key and authenticate users
exports.authenticateApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey || apiKey !== API_KEY) {
    return res.status(401).send('Unauthorized: Invalid API key');
  }

  next();
};
