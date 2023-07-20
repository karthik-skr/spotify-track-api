const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const YAML = require("yamljs");

const options = {
  swaggerDefinition: YAML.load('swagger.yaml'),
  apis: ['./controllers/tracks.controller.js'],
};

const serverUrl =  `http://localhost:${process.env.PORT || 8080}`;

options.swaggerDefinition.servers[0].url = serverUrl;


const swaggerSpec = swaggerJSDoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};