const express = require('express');
const app = express.Router();

app.post('/logout', (req, res) => {
    req.logout();

    res.send();
});

module.exports = app;