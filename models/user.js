const { sq } = require('../config/db');
const { DataTypes } = require('sequelize');

const User = sq.define('user', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

User.sync().then(() => {
    console.log('User Model Synced');
}).catch(err => {
    console.error('Unable to sync User Model: ' + err);
});

module.exports = User;