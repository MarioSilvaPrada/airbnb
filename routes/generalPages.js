let express = require('express');
const app = express.Router();

const { renderHomePage } = require('../controllers/generalPages');

// HOME PAGE

app.get('/', renderHomePage);

module.exports = app;