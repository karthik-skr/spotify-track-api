const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
});

sequelize.sync({ force: false })
.then(() => {
    console.log('Database synchronized');
})
.catch((error) => {
    console.error('Failed to synchronize database:', error);
});

const Track = sequelize.define('track', {
  isrc: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  imageUri: Sequelize.STRING,
});

const Artist = sequelize.define('artist', {
  name: Sequelize.STRING,
});

Track.hasMany(Artist, { foreignKey: 'trackIsrc', as: 'artists' });
Artist.belongsTo(Track, { foreignKey: 'trackIsrc' });

module.exports = {
  Track,
  Artist,
  sequelize,
};
