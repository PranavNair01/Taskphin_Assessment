const express = require('express');
const cookieParser = require('cookie-parser');
const { sq, testDbConnection } = require('./config/db');
const { requireAuth } = require('./controllers/authMiddleware');
const authController = require('./controllers/authController');
const homeController = require('./controllers/homeController');
const movieController = require('./controllers/movieController');

// Server App Configuration
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cookieParser());

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
app.get('/logout', authController.logout_get);

// Homepage Route
app.get('/', requireAuth, homeController.home_get);

// Movie Operation Routes
app.post('/movie', movieController.movie_post);
app.put('/movie', movieController.movie_put);
app.delete('/movie', movieController.movie_delete);