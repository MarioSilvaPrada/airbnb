const User = require('../models/user');


const newUser = (req, res) => {
    let data = req.body;

    User.register(new User({ username: data.username }), data.password,
        function (err, user) {
            if (err) {
                res.status(401).send(err);
            }
            else {
                res.send(user);
            }
        })
}


const login = (req, res) => {

}

module.exports = {
    newUser: newUser,
    login: login
}
