const Location = require('../models/location');

const renderLocation = (req, res) => {
    let location = req.params.location;

    Location.findOne({ name: location }).populate('houses').then((result) => {

        res.render('search', { location: location, data: result['houses'], navbar: 'white_navbar', style: 'style.css' });
    });
}

const getLocation = (req, res) => {
    let location = req.params.location;
    res.render('new_home', { location: location });
}

const postLocation = (req, res) => {
    let data = req.body;
    let loc = req.params.location;

    Location.findOne({ name: loc }).then((location) => {
        let home = new Home({
            name: data.title,
            beds: data.beds,
            price: data.price,
            rating: 5,
            main_image: data.url
        })

        home.save()
            .then(result => {
                location.houses.push(result);
                location.save();
            })
    })

    res.redirect('/');
}

module.exports = {
    renderLocation: renderLocation,
    getLocation: getLocation,
    postLocation: postLocation
}
