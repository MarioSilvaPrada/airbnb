const express = require('express');
const app = express.Router();
const passport = require("passport");

const { loginUser } = require ('../controllers/login');

app.post('/login',passport.authenticate("local"), loginUser);

module.exports = app;