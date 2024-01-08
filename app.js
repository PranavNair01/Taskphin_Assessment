const express = require('express');
const { sq, testDbConnection } = require('./config/db');
const { User } = require('./models/user');
const authController = require('./controllers/authController');

// Server App Configuration
const app = express();
const port = process.env.PORT || 3000;

// View Engine
app.set('view engine', 'ejs');

// Server and DB Initialization
testDbConnection().then(() => {
    app.listen(port, () => {
        console.log('Listening on port ' + port.toString());
    });
});

// Authentication Routes
app.get('/register', authController.register_get);
app.post('/register', authController.register_post);
app.get('/login', authController.login_get);
app.post('/login', authController.login_post);

// Homepage Route
app.get('/', (req, res) => {
    res.render('home');
})