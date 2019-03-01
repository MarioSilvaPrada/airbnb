const express = require('express');
const app = express.Router();

const { newUser } = require('../controllers/user');
const { isLoggedIn } = require('../middlewares/auth')



app.post('/newuser', newUser);

app.get('/profile',isLoggedIn, (req, res) => {
    res.render('profile');
})

module.exports = app;