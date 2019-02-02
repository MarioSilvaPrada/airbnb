let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded());

const rome = [
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

app.get('/', function (req, res) {
    res.render('homePage');
});


app.get('/s/:location/all', function (req, res) {
    let location = req.params.location;

    if (location.toLowerCase() !== 'rome') {
        res.send('We found no results for that query');
    }
    res.render('search', { location: location, data: rome });
});

app.get('/s/:location/homes', function(req, res) {
    let location = req.params.location;
    
    res.render('homes', { location: location, data: rome });
});

app.get('/test', function(req, res) {
    res.render('new_home');
});

app.post('/test2', function(req, res) {
    let data = req.body;
    console.log(data);
    rome.push({'url': data.url, 'title': data.title, 'price': data.price});

    console.log(rome);
    
    res.redirect('/')
});

app.listen(3000);