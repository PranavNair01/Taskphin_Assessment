const Movie = require('../models/movie');

module.exports.home_get = async (req, res) => {
    const movies = [
        { name: 'Inception', rating: 9.0, cast: ['Leonardo DiCaprio', 'Ellen Page'], genre: 'Sci-Fi', releaseDate: '2010-07-16' },
        { name: 'The Shawshank Redemption', rating: 9.3, cast: ['Tim Robbins', 'Morgan Freeman'], genre: 'Drama', releaseDate: '1994-09-23' },
    ];

    // const movies = await Movie.findAll({
    //     where: { email: res.locals.user.email }
    // });

    res.render('home', { movies });
}