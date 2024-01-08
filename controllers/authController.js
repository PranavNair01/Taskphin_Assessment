const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
require('dotenv').config();

// Creation of JSON Web Token
const maxAge = 3 * 60 * 60; // 3 hours in seconds
const createJWT = (email) => {
    return jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: maxAge
    });
}

// Login Validation of User
const validateUser = async (email, password) => {
    const user = await User.findOne({
        where: { email }
    });
    if (user) {
        const auth = await bcrypt.compare(password, user.dataValues.password);
        if (auth) {
            return user;
        }
        throw Error('Incorrect password');
    }
    throw Error('Incorrect email');
}

module.exports.register_get = (req, res) => {
    res.render('register');
}

module.exports.register_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ email, password: hashedPassword });
        const token = createJWT(email);
        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: maxAge * 1000
        });
        res.status(201).json(user);
    }
    catch (err) {
        res.status(400).json(err);
    }
}

module.exports.login_get = (req, res) => {
    res.render('login');
}

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await validateUser(email, password);
        const token = createJWT(email);
        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: maxAge * 1000
        });
        res.status(201).json(user);
    }
    catch (err) {
        res.status(400).json({ errors: err.toString() });
    }
}

module.exports.logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
}