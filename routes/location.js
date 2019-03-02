let express = require('express');
const app = express.Router();

const { renderLocation, getLocation, postLocation } = require('../controllers/location');
const { isLoggedIn } = require('../middlewares/auth')

// LOCATION PAGE - all page

app.get('/s/:location/all', renderLocation);

// FORM PAGE
// GET
app.get('/:location/homes/new',isLoggedIn, getLocation);

// POST
app.post('/:location/homes/', postLocation);

module.exports = app;