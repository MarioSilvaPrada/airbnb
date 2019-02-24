const express = require('express');
const app = express.Router();

const { newUser } = require('../controllers/user')



app.post('/newuser', newUser);

module.exports = app;