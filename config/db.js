const { Sequelize } = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.POSTGRESQL_DB_URI, {
    dialect: 'postgres'
});

const testDbConnection = async () => {
    await sequelize.authenticate().then(() => {
        console.log('PostgreSQL database connected successfully.');
    }).catch(err => {
        console.error("Unable to connect to PostgreSQL database: " + err);
    });
}

module.exports = { sq: sequelize, testDbConnection };