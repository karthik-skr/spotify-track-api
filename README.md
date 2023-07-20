# Spotify Track API

## Description

The Spotify Track API is a RESTful API that allows users to store metadata of music tracks to a Relational Database and fetch metadata from the external Spotify REST API. It provides endpoints to create tracks, retrieve track metadata by ISRC or artist, and uses the Spotify API to obtain additional track information.

## Framework and ORM

The API is implemented using Node.js with Express.js as the lightweight framework and Sequelize as the ORM.

## API Documentation

The API is documented using Swagger.io. You can check the API documentation [here](https://github.com/karthik-skr/spotify-track-api/files/12112740/api_doc.pdf)

## Installation & Setup

#### 1. Clone the repository:

  ```bash
  git clone https://github.com/your-username/spotify-track-api.git
  ```

  Navigate to the project directory and install dependencies:

  ```bash
  cd spotify-track-api
  npm install
  ```

#### 2. Set up the database:
- Create a MySQL database for the API.
- Update the database credentials in the .env file.

#### 3. Obtain a Spotify API Client ID and Client Secret: 

- Create a developer account at Spotify: https://developer.spotify.com/ 
- Follow the Spotify documentation to obtain the Client ID and Client Secret for the API.


#### 4. Set up environment variables:
   
- Create a .env file in the root directory of the project. 
- Add the following environment variables to the .env file:

  ```bash
  DB_HOST=mysql_host
  DB_USER=mysql_user
  DB_PASSWORD=mysql_pwd
  DB_NAME=db_name
  SPOTIFY_CLIENT_ID=your-spotify-client-id
  SPOTIFY_CLIENT_SECRET=your-spotify-client-secret
  ```
## Usage

- Run the API:

```bash
npm start
```

- The API will be available at http://localhost:8080 and you can see the API documentation at http://localhost:8080/api-docs

## API Endpoints

![api_doc](https://github.com/karthik-skr/spotify-track-api/assets/33262979/04aa60a8-a896-435d-a163-ebf8e6435921)

## Contact
For any inquiries, please contact karthik.skreddy24@gmail.com

