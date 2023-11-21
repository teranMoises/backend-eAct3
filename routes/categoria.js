var express = require('express');
var router = express.Router();
const Categoria_Controller = require('../controllers/Categoria_Controller');

/* GET  */
router.get('/', function (req, res, next) {
    Categoria_Controller.ver_categorias().then((resultados) => {
        res.json(resultados);
    }).catch((error) => {
        res.status(error.codigo).send(error.mensaje);
    })
});

/* POST */
router.post('/', function (req, res, next) {
    Categoria_Controller.ingresar_categoria(req.body)
        .then(() => {
            Categoria_Controller.ver_categorias()
                .then((resultados) => {
                    res.json(resultados);
                })
                .catch((error) => {
                    res.status(error.codigo).send(error.mensaje);
                })
        })
        .catch((error) => {
            res.status(error.codigo).send(error.mensaje);
        })
});

router.get('/equipos/:index', function (req, res, next) {
    //console.log('CAT ROUTER:', req.params.index, req.body);
    Categoria_Controller.ver_equipos_por_categoria(req.params.index, null).then((resultados) => {
        res.json(resultados);
        
    }).catch((error) => {
        res.status(error.codigo).send(error.mensaje);
    })
});

router.get('/participantes', function (req, res, next) {
    //console.log('CAT ROUTER:', req.params.index, req.body);
    Categoria_Controller.ver_equipos_por_categoria(null, req.body).then((resultados) => {
        res.json(resultados);
    }).catch((error) => {
        res.status(error.codigo).send(error.mensaje);
    })
});

router.put('/:editar', function (req, res, next) {
    //console.log('en routes', req.params.editar, req.body);
    Categoria_Controller.editar_categoria(req.params.editar, req.body)
        .then((resultados) => {
            //console.info(resultados);
            res.json(resultados);
        })
        .catch((error) => {
            //console.info(error);
            res.status(error.codigo).send(error.mensaje);
        })
});

router.patch('/:editar', function (req, res, next) {
    //console.log('en routes', req.params.editar, req.body);
    Categoria_Controller.modificar_categoria(req.params.editar, req.body)
        .then((resultados) => {
            //console.info(resultados);
            res.send(resultados);
        })
        .catch((error) => {
            //console.info(error);
            res.status(error.codigo).send(error.mensaje);
        })
});
/* DELETE */
router.delete('/:index', function (req, res, next) {
    Categoria_Controller.eliminar_categoria(req.params.index).then((resultados)=>{
        res.status(resultados.codigo).send(resultados.mensaje);
    }).catch((error)=>{
        res.status(error.codigo).send(error.mensaje);
    }) 
}); 


module.exports = router; 