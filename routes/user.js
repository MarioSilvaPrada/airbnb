const express = require('express');
const app = express.Router();

const { newUser } = require('../controllers/user')



app.post('/newuser', newUser);

app.get('/profile', (req, res) => {
    res.render('profile');
})

module.exports = app;