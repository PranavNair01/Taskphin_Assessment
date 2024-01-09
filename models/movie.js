const { sq } = require('../config/db');
const { DataTypes } = require('sequelize');

const Movie = sq.define('movie', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    cast: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    releaseDate: {
        type: DataTypes.DATE,
        allowNull: false,
    }
});

Movie.sync().then(() => {
    console.log('Movie Model Synced');
}).catch(err => {
    console.error('Unable to sync Movie Model: ' + err);
});

module.exports = Movie;