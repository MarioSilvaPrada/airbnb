const User = require('../models/user');


const newUser = (req, res) => {
    let data = req.body;

    User.register(new User({ username: data.username }), data.password,
        function (err, user) {
            if (err) {
                console.log(err);
                res.status(401).send(err);
            }

            res.send(user);

            // res.render('profile');
        })


}

module.exports = {
    newUser: newUser
}
