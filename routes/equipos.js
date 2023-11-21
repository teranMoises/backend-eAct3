var express = require('express');
var router = express.Router();
const Equipos_Controller = require('../controllers/Equipos_Controller')

/* GET */

router.get('/', function (req, res, next) {
    Equipos_Controller.ver_equipos().then((resultados) => {
        res.json(resultados);
    }).catch((error) => {
        res.status(error.codigo).send(error.mensaje);
    })
});


/* POST */
router.post('/', function (req, res, next) {
    Equipos_Controller.ingresar_equipo(req.body).then((inscripcion) => {
        Equipos_Controller.ingresar_inscripcion(inscripcion).then(() => {
            Equipos_Controller.ver_equipos().then((resultados) => {
                res.json(resultados);
            }).catch((error) => {
                res.status(error.codigo).send(error.mensaje);
            })
        }).catch((error) => {
            res.status(error.codigo).send(error.mensaje);
        })
    }).catch((error) => {
        res.status(error.codigo).send(error.mensaje);
    })
});

/* DELETE */
router.delete('/:index', function (req, res, next) {
    Equipos_Controller.eliminar_equipo(req.params.index).then((resultados) => {
        res.status(resultados.codigo).send(resultados.mensaje);
    }).catch((error) => {
        res.status(error.codigo).send(error.mensaje);
    })
});


/*Ver padrinos*/
router.get('/padrinos', function (req, res, next) {
    Equipos_Controller.ver_padrinos().then((resultados) => {
        res.json(resultados);
    }).catch((error) => {
        res.status(error.codigo).send(error.mensaje);
    })
});

router.delete('/sin_categoria/:index/:index2', function (req, res, next) {
    Equipos_Controller.eliminar_categoria_inscrita(req.params.index, req.params.index2).then((resultados) => {
        res.status(resultados.codigo).send(resultados.mensaje);
    }).catch((error) => {
        res.status(error.codigo).send(error.mensaje);
    })
});


/* Views */

router.get('/verEquipo', function (req, res, next) {
    Equipos_Controller.ver_equipos_views().then((resultados) => {
        if (resultados == null) { res.status(404).send("No se han registrado equipos") } else {
            let equipos = resultados;
            //console.table(equipos)
            res.render('verEquipos', { title: 'Ingresar Equipo', equipos: equipos });
        };
    }).catch((error) => {
        res.status(500).send(error)
    })
});


/*Editar equipo*/
router.put('/editar_equipo/:editar', function (req, res, next) {
    Equipos_Controller.editar_equipo(req.params.editar, req.body)
        .then((resultados) => {
            res.status(resultados.codigo).send(resultados.mensaje);
        })
        .catch((error) => {
            res.status(error.codigo).send(error.mensaje);
        })
    console.table(req.body)
});

module.exports = router; 