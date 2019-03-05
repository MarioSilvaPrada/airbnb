let express = require('express');
const app = express.Router();

const { editHome } = require('../controllers/editHome');

app.get('/rooms/:id/edit', editHome);

app.put('rooms/:id', (req, res) => {
    let id = req.params.id;



})

module.exports = app;

