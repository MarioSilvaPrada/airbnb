let express = require('express');
const app = express.Router();

// const Location = require('../models/location');
const Homes = require('../models/home');

app.delete('/rooms/:id/delete', (req, res) => {
    let id = req.params.id;

    // Homes.findByIdAndRemove(id).then(result => result.save());
    Homes.findByIdAndRemove(id).then(result => result.save())

    res.send();
});

module.exports = app;