const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Home Schema

const HomeSchema = new Schema({
    name: String,
    beds: Number,
    price: Number,
    rating: Number,
    main_image: String
});

const Home = mongoose.model('home', HomeSchema);

module.exports = Home;