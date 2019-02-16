let express = require('express');
const app = express.Router();

const { createHome,createRoom } = require('../controllers/home');

// HOUSES PAGE - homes page

app.get('/s/:location/homes', createHome);

// Rooms

app.get('/rooms/:id', createRoom);

module.exports = app;