let express = require('express');
const app = express.Router();

const { renderLocation, getLocation, postLocation } = require('../controllers/location');

// LOCATION PAGE - all page

app.get('/s/:location/all', renderLocation);

// FORM PAGE
// GET
app.get('/:location/homes/new', getLocation);

// POST
app.post('/:location/homes/', postLocation);

module.exports = app;