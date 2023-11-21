var express = require('express');
var router = express.Router();
const Modalidad_Controller = require('../controllers/Modalidad_Controller');

/* GET modalidades */
router.get('/', function (req, res, next) {
    //console.log('router GET')
    Modalidad_Controller.ver_modalidad()
        .then((resultados) => {
            //console.log('router bien')
            res.send(resultados.resultado);
        })
        .catch((error) => {
            //console.log('router mal')
            res.status(error.codigo).send(error.mensaje);
        })
});
router.get('/:index', function (req, res, next) {
    Modalidad_Controller.ver_modalidad_y_categoria(req.params.index)
    .then((resultados) => {
        res.send(resultados.resultado);
    })
    .catch((error) => {
        res.status(error.codigo).send(error.mensaje);
    })
}); 
router.post('/', function (req, res, next) {
    //console.log('en routes', req.body);
    Modalidad_Controller.ingresar_modalidad(req.body)
    .then((resultados) => {
        res.send(resultados.resultado);
    })
    .catch((error) => {
        res.status(error.codigo).send(error.mensaje);
    })
});

module.exports = router; 