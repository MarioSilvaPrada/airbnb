const { getFromDB } = require('../utilities/db/db');

module.exports.isHomeHost = async(req, res, next) => {

    // console.log(req.params.id);  ÎD HOUSE
    // console.log(req.user._id); USER LOGGEDIN

    const userLoggedIn = req.user._id;

    const home = await getFromDB('home', {_id: req.params.id });

    const host = home[0]['host'][0];

    console.log(userLoggedIn, host)

    if (host.toString() == userLoggedIn.toString()) {
        return next();
    } else {
        return res.status(401).send('error');
    }
}