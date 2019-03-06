let express = require('express');
const app = express.Router();

const { updateDB } = require('../utilities/db/db');

const { editHome } = require('../controllers/editHome');

app.get('/rooms/:id/edit', editHome);

app.put('/rooms/:id', (req, res) => {
    let id = req.params.id;
    let data = req.body;

    updateDB('home', id, { name: data.title, beds: data.beds, main_image: data.image, price: data.price });

    // Homes.findByIdAndUpdate(id, { name: data.title, beds: data.beds, main_image: data.image, price: data.price })
    //     .then(result => result.save())

    res.send();

})

module.exports = app;

