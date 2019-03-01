const renderHomePage = (req, res) => {
    res.render('homePage', { navbar: 'mainpicture__header--head',style: 'style.css', user: req.user });
}

module.exports = {
    renderHomePage: renderHomePage
}