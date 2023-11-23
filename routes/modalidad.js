var express = require('express');
var router = express.Router();
const Modalidad_Controller = require('../controllers/Modalidad_Controller');
const { checkLogin, checkAdmin, checkRoot, checkDatetime } = require('../auth/auth');

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
/* VIEWS */
router.get('/nuevaModalidad',function(req,res, next){
    Modalidad_Controller.ver_modalidad().then((resultados)=>{
        let nombre_modalidad = resultados;
        res.render('nuevaModalidad',{title: 'Crear una Modalidad', nombre_modalidad:nombre_modalidad});
    }).catch((error)=>{
        if (error.codigo && error.mensaje) { res.status(error.codigo).send(error.mensaje) }
        else {res.status(500).send(error)}
    })

});
/* VIEWS POST */
router.post('/nuevaModalidad', function (req, res, next) {
    //console.log('en routes', req.body);
    Modalidad_Controller.ingresar_modalidad(req.body)
    .then((resultados) => {
        res.send(resultados.resultado);
    })
    .catch((error) => {
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
router.post('/', checkAdmin, function (req, res, next) {
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