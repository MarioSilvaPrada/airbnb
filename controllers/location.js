const Location = require('../models/location');

const db = require('../utilities/db/db');

const Home = require('../models/home');

const renderLocation = (req, res) => {
    let location = req.params.location;

    Location.findOne({ name: location }).populate('houses').then((result) => {

        res.render('search', { location: location, data: result['houses'], navbar: 'white_navbar', style: 'style.css' });
    });
}

const getLocation = (req, res) => {
    let location = req.params.location;
    res.render('new_home', { location: location, style: 'form-style.css' });
}

const postLocation = async (req, res) => {
    let data = req.body;
    let loc = req.params.location;

    // POST
    let home = await db.postToDB('home', new Home({
        name: data.title,
        beds: data.beds,
        price: data.price,
        rating: 5,
        main_image: data.url
    }));

    // GET
    let location = await db.getFromDB('location', { name: loc });

    location[0].houses.push(home);

    location[0].save();

    res.redirect('/');

}

module.exports = {
    renderLocation: renderLocation,
    getLocation: getLocation,
    postLocation: postLocation
}
