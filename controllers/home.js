
const db = require('../utilities/db/db');
const { isLoggedin } = require('../middlewares/auth')

const createHome = async (req, res) => {
    let location = req.params.location;

    let houses = await db.getFromDB('location', { name: location }, 'houses' );

    res.render('homes', { location: location, data: houses[0]['houses'], navbar: 'white_navbar', style: 'style.css' });

    // Location.findOne({ name: location }).populate('houses').then((result) => {
    //     res.render('homes', { location: location, data: result['houses'], navbar: 'white_navbar', style: 'style.css' });
    // });
}

const createRoom = async (req, res) => {
    let id = req.params.id;

    let room = await db.getFromDB('home', { _id: id } );

    let ownerRoom = await db.getFromDB('user', { _id: room[0]['host'] });


    res.render('home', { navbar: 'white_navbar', data: room[0], style: 'home-style.css', owner:ownerRoom[0], user: req.user ? req.user._id : 'null' })

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