let express = require('express');
let app = express();
let bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Location = require('./models/location');
const Home = require('./models/home');


// ROUTES
const generalPagesRoutes = require('./routes/generalPages');
const locationRoutes = require('./routes/location');
const homeRoutes = require('./routes/home');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/airbnbV11');

mongoose.connection.once('open', function () {
    console.log('Connection has been made...');


}).on('error', function (error) {
    console.log('Connection error:', error);
});

// const romeArr = [
//     {
//         'main_image': 'https://a0.muscache.com/4ea/air/v2/pictures/c9db035f-7239-4b52-a8fa-b3e8622c8171.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
//         'name': 'Splendido Loft Appartamento Vicino a Piazza Dei Spagna',
//         'price': '169',
//         'rating': 5,
//         'beds': 3
//     },
//     {
//         'main_image': 'https://a0.muscache.com/4ea/air/v2/pictures/c44a74c2-df6a-4e0b-8300-6b18ae6901cd.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
//         'name': 'Romantico Appartamento con Vista sulla Fontana',
//         'price': '79',
//         'rating': 5,
//         'beds': 3
//     },
//     {
//         'main_image': 'https://a0.muscache.com/4ea/air/v2/pictures/b8262e99-4f56-4c42-adc6-6f0a0d2a4d2d.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
//         'name': 'Modern Apartment with View of Piazza Del Popolo',
//         'price': '89',
//         'rating': 5,
//         'beds': 3
//     },
//     {
//         'main_image': 'https://a0.muscache.com/4ea/air/v2/pictures/ae327b04-5ed4-4017-84ba-4744ce5dc43e.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
//         'name': "Campo de' Fiori Deluxe Apartment",
//         'price': '149',
//         'rating': 5,
//         'beds': 3
//     }
// ];

// let locationHouse = new Location({
//     name: 'rome',
//     houses: []
// });

// romeArr.forEach((home, i) => {

//     new Home(home).save().then((result) => {
//         locationHouse.houses.push(result)

//         if(i === romeArr.length - 1){
//             locationHouse.save()
//         }
//     })

// })



app.use(generalPagesRoutes);

app.use(locationRoutes);

app.use(homeRoutes);


app.listen(process.env.PORT || 3000, process.env.IP);