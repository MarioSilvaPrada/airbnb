const User = require('../models/user');


const newUser = (req, res) => {
    let data = req.body;

    User.register(new User({ username: data.username, image: data.userImage }), data.password,
        function (err, user) {
            if (err) {
                res.status(401).send(err);
            }
            req.login(user, function (error) {
                if (error) {
                    return res.status(401).send(error);
                }
                return res.send({success: 'success'})
            });
        })
}

module.exports = {
    newUser: newUser
}
