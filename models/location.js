const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Location Schema

const LocationSchema = new Schema({
    name: String,
    houses: []
});

const Location = mongoose.model('location', LocationSchema);

module.exports = Location;