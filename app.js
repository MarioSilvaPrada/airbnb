let express = require('express');
let app = express();
let bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Location = require('./models/location');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/airbnbV6');

mongoose.connection.once('open', function () {
    console.log('Connection has been made...');
}).on('error', function (error) {
    console.log('Connection error:', error);
});

const romeArr = [
    {
        'url': 'https://a0.muscache.com/4ea/air/v2/pictures/c9db035f-7239-4b52-a8fa-b3e8622c8171.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
        'title': 'Splendido Loft Appartamento Vicino a Piazza Dei Spagna',
        'price': '169'
    },
    {
        'url': 'https://a0.muscache.com/4ea/air/v2/pictures/c44a74c2-df6a-4e0b-8300-6b18ae6901cd.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
        'title': 'Romantico Appartamento con Vista sulla Fontana',
        'price': '79'
    },
    {
        'url': 'https://a0.muscache.com/4ea/air/v2/pictures/b8262e99-4f56-4c42-adc6-6f0a0d2a4d2d.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
        'title': 'Modern Apartment with View of Piazza Del Popolo',
        'price': '89'
    },
    {
        'url': 'https://a0.muscache.com/4ea/air/v2/pictures/ae327b04-5ed4-4017-84ba-4744ce5dc43e.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
        'title': "Campo de' Fiori Deluxe Apartment",
        'price': '149'
    }
]

let rome = new Location({
    name: 'Rome',
    houses: romeArr
})

rome.save()


// HOME PAGE

app.get('/', function (req, res) {
    res.render('homePage', { navbar: 'mainpicture__header--head' });
});

// LOCATION PAGE

app.get('/s/:location/all', function (req, res) {
    let location = req.params.location;

    if (location.toLowerCase() !== 'rome') {
        res.send('We found no results for that query');
    }

    Location.findOne({ name: 'Rome' }).then((result) => {
        res.render('search', { location: location, data: result['houses'], navbar: 'white_navbar' });
    });

});

// HOMES PAGE 

app.get('/s/:location/homes', function (req, res) {
    let location = req.params.location;

    Location.findOne({ name: 'Rome' }).then((result) => {
        res.render('homes', { location: location, data: result['houses'], navbar: 'white_navbar' });
    });
});

// FORM PAGE
// GET
app.get('/test', function (req, res) {
    res.render('new_home');
});

// POST
app.post('/test2', function (req, res) {
    let data = req.body;
    console.log(data);
    rome.push({ 'url': data.url, 'title': data.title, 'price': data.price });

    console.log(rome);

    res.redirect('/')
});

app.listen(process.env.PORT || 3000, process.env.IP);