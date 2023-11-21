require('dotenv').config()
var jwt = require('jsonwebtoken');

function checkLevel(rolToken) {
    if (rolToken == 'admin') {
        console.log('Es administrador');
    } else {
        console.log('Es usuario');
    }
}

function check(token) {
    token = token.replace('Bearer ', '');
    //console.log('TOKEN',token);
    try {
        var decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        if (decoded.rol) checkLevel(decoded.rol);
        return { valLogin: true, Utoken: decoded };
    } catch (err) {
        return { valLogin: err };
    }
}

function checkLogin(req, res, next) {
    //console.log(req.headers.authorization);
    let reqToken = req.headers.authorization;
    if (reqToken == undefined) return res.status(401).send('Debe ingresar un Token');

    const { valLogin } = check(reqToken);
    if (valLogin !== true) return res.status(401).send('Token inválido:  \n' + valLogin);
    next();
}

function checkAdmin(req, res, next) {
    //console.log(req.headers.authorization);
    let reqToken = req.headers.authorization;
    if (reqToken == undefined) return res.status(401).send('Debe ingresar un Token');

    const { valLogin, Utoken } = check(reqToken);
    if (valLogin !== true) return res.status(401).send('Token inválido:  \n' + valLogin);
    
    if (Utoken.rol !== 'admin') {
        return res.status(403).send(['Usted no posee permisos de administrador:', Utoken]);
    };

    if (Utoken.id == req.body.cedula_user) return res.status(403).send(['No puede cambiarse a sí mismo de rol:', Utoken]);

    next();
}

//FALTA INVALIDAR TOKENS POR DATETIME

module.exports = { checkLogin, checkAdmin };