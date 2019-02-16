const renderHomePage = (req, res) => {
    res.render('homePage', { navbar: 'mainpicture__header--head',style: 'style.css' });
}

module.exports = {
    renderHomePage: renderHomePage
}