const Homes = require('../models/home');
const Location = require('../models/location');


let express = require('express');
const app = express.Router();

app.delete('/rooms/:location/:id/delete', async (req, res) => {
    let id = req.params.id;
    let city = req.params.location;


    await Homes.findByIdAndRemove(id);

    await Location.findOneAndUpdate(
        { name: city },
        { $pull: { houses: id } }
    );

    res.send();
});

module.exports = app;