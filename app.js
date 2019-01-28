let express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.use(express.static('public/style'));

app.get('/', function(req, res) {
    // res.send('Welcome to Home Page');
    res.render('homePage');
});

app.get('/houses', function(req, res) {
    // res.send('Welcome to house search Page');
    res.render('house-search');
});

// app.get('/houses', function(req, res) {
//     res.render('search');
// });

app.listen(3000);