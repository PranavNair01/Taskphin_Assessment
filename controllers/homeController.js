const Movie = require('../models/movie');

module.exports.home_get = async (req, res) => {
    const movies = await Movie.findAll({
        where: { email: res.locals.user.email }
    });

    res.render('home', { movies });
}