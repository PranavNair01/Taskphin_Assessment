const jwt = require('jsonwebtoken');
const User = require('../models/user');
require('dotenv').config();

const requireAuth = async (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                console.log(err);
                res.locals.user = null;
                res.redirect('/login');
            }
            else {
                console.log(decodedToken);
                res.locals.user = decodedToken;
                next();
            }
        })
    }
    else {
        res.locals.user = null;
        res.redirect('/login');
    }
}

module.exports = { requireAuth };