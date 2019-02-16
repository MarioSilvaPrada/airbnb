const Location = require('../models/location');
const Home = require('../models/home');

const db = require('../utilities/db/db');

const createHome = (req, res) => {
    let location = req.params.location;

    Location.findOne({ name: location }).populate('houses').then((result) => {
        res.render('homes', { location: location, data: result['houses'], navbar: 'white_navbar', style: 'style.css' });
    });
}

const createRoom = async (req, res) => {
    let id = req.params.id;

    let home = await db.getFromDB('home', {_id: id});


    res.render('home', { navbar: 'white_navbar', data: home[0], style: 'home-style.css' })

    // Home.findById(id).then((result) => {
    //     console.log(result);
    //     console.log(id)
    //     res.render('home', { navbar: 'white_navbar', data: result, style: 'home-style.css' })
    // })
}

module.exports = {
    createHome: createHome,
    createRoom: createRoom
}