

const isLoggedIn = (req, res, next) => {

    if(req.isAuthenticated()) {

        // next() em node js quer dizer continua para o próxima etapa
        // que neste caso é a callback funcion da route do secret
        return next();
    }

}

module.exports = {
    isLoggedIn: isLoggedIn
}