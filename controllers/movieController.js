const Movie = require('../models/movie');

// Add a Movie entry
module.exports.movie_post = async (req, res) => {
    try {
        const movieEntry = await Movie.create(req.body);
        res.status(201).json(movieEntry);
    }
    catch (err) {
        res.status(400).json({ errors: err.toString() }); 
    }
}

// Edit/Update a Movie entry
module.exports.movie_put = async (req, res) => {
    try {
        const { id, name, rating, cast, genre, releaseDate } = req.body;
        console.log(req.body);
        const movieEntry = await Movie.update(
            { name, rating, cast, genre, releaseDate },
            { 
                where: { id }
            }
        );
        res.status(200).json(movieEntry);
    }
    catch (err) {
        res.status(500).json({ errors: err.toString() }); 
    }
}

// Delete a movie entry
module.exports.movie_delete = async (req, res) => {
    try {
        const { id } = req.body;
        console.log(req.body);
        const movieEntry = await Movie.destroy({
            where: { id }
        });
        res.status(200).json(movieEntry);
    }
    catch (err) {
        res.status(500).json({ errors: err.toString() }); 
    }
}