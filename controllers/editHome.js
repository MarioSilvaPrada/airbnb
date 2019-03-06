const { getFromDB } = require('../utilities/db/db');

const editHome = async (req, res) => {

    let id = req.params.id;

    const homeData = await getFromDB('home', {_id: id});

    res.render('edit_home', { style: 'form-style.css', navbar: 'white_navbar', data: homeData[0] })

}

module.exports = {
    editHome: editHome
}