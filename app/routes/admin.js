const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const Admin = require('./../model/admin');
const jwt = require('jsonwebtoken');
const withAuth = require('./../middleware');

const router = express.Router();
const secret = 'mysecrettoken';

// https://mherman.org/blog/user-authentication-with-passport-dot-js/
// https://github.com/joeLloyd/MEANBoilerPlate/blob/master/backend/models/user.js
// https://medium.com/@faizanv/authentication-for-your-react-and-express-application-w-json-web-tokens-923515826e0
// http://devsmash.com/blog/password-authentication-with-mongoose-and-bcrypt

// router.post('/register', (req, res) => {
//     const { username, password } = req.body;
//     const admin = new Admin({ username, password });
//     admin.save((err) => {
//         if (err) {
//             res.status(500)
//                 .send(err);
//         } else {
//             res.status(200).send("Welcome to the club!");
//         }
//     });
// });

router.post('/authenticate', (req, res) => {
    const { username, password } = req.body;
    Admin.findOne({ username }, function (err, user) {
        if (err) {
            res.send({ status: 200, userfound: false, description: 'Something wend wrong!' });
        }
        if (!user) {
            res.send({ status: 200, userfound: false, description: 'User not found' });
        } else {
            user.isCorrectPassword(password, (err, isMatch) => {
                if (err) res.send({ status: 200, userfound: false, description: 'Could not match user' });
                if (isMatch) {
                    const payload = { username };
                    const token = jwt.sign(payload, secret, {
                        expiresIn: '1h'
                    });
                    res.cookie('token', token, { httpOnly: true }).send({ status: 200, userfound: true });
                } else {
                    res.send({ status: 200, userfound: false, description: 'Credentials are incorrect' });
                }
            });
        }

    });

});

router.get('/checkToken', withAuth, (req, res) => {
    res.status(200).send('authenticated');
});

module.exports = router;