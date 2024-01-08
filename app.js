const express = require('express');
const { sq, testDbConnection } = require('./config/db');
const { User } = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

testDbConnection().then(() => {
    app.listen(port, () => {
        console.log('Listening on port ' + port.toString());
    });
});
