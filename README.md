# Spotify Track API

## Description

The Spotify Track API is a RESTful API that allows users to store metadata of music tracks to a Relational Database and fetch metadata from the external Spotify REST API. It provides endpoints to create tracks, retrieve track metadata by ISRC or artist, and uses the Spotify API to obtain additional track information.

## Framework and ORM

The API is implemented using Node.js with Express.js as the lightweight framework and Sequelize as the ORM.

## API Documentation

The API is documented using Swagger.io. You can check the API documentation [here](https://github.com/karthik-skr/spotify-track-api/files/12116961/api_doc_v1.pdf)

## Installation & Setup

#### 1. Clone the repository:

  ```bash
  git clone https://github.com/karthik-skr/spotify-track-api.git
  ```

  Navigate to the project directory and install dependencies:

  ```bash
  cd spotify-track-api
  npm install
  ```

#### 2. Set up the database:
- Create a MySQL database for the API.
- Update the database credentials in the .env file (As mentioned in the following step 4).

#### 3. Obtain a Spotify API Client ID and Client Secret: 

- Create a developer account at Spotify: https://developer.spotify.com/ 
- Follow the [Spotify documentation](https://developer.spotify.com/documentation/web-api/tutorials/getting-started) to obtain the Client ID and Client Secret for the API.
- Update the Spotify Client ID and Secret in the .env file (As mentioned in the following step 4).

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

![api_doc](https://github.com/karthik-skr/spotify-track-api/assets/33262979/3c1f4c35-ae09-4710-ba5b-5b2d1836c78e)


## Contact

For any inquiries, please contact on [LinkedIn](https://www.linkedin.com/in/karthik-reddy-s-92a727b5)

