var express = require('express');
var router = express.Router();
const Equipos_Controller = require('../controllers/Equipos_Controller')
const Modalidad_Controller = require('../controllers/Modalidad_Controller');
const { checkLogin, checkAdmin } = require('../auth/auth');
const { checkLoginView, checkAdminView, checkRootView } = require('../auth/authViews')

/* GET */

router.get('/',checkAdmin, function (req, res, next) {
    Equipos_Controller.ver_equipos().then((resultados) => {
        res.json(resultados);
    }).catch((error) => {
        res.status(error.codigo).send(error.mensaje);
    })
});


/* POST */
router.post('/',checkLogin, function (req, res, next) {
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
router.delete('/:index',checkAdmin, function (req, res, next) {
    Equipos_Controller.eliminar_equipo(req.params.index).then((resultados) => {
        res.status(resultados.codigo).send(resultados.mensaje);
    }).catch((error) => {
        res.status(error.codigo).send(error.mensaje);
    })
});


/*Ver padrinos*/
router.get('/padrinos',checkAdmin, function (req, res, next) {
    Equipos_Controller.ver_padrinos().then((resultados) => {
        res.json(resultados);
    }).catch((error) => {
        res.status(error.codigo).send(error.mensaje);
    })
});

/*Eliminar categoria inscrita*/ 
router.delete('/sin_categoria/:index/:index2',checkLogin,function (req, res, next) {
    Equipos_Controller.eliminar_categoria_inscrita(req.params.index, req.params.index2).then((resultados) => {
        res.status(resultados.codigo).send(resultados.mensaje);
    }).catch((error) => {
        res.status(error.codigo).send(error.mensaje);
    })
});


/* Views */

router.get('/verEquipo', checkAdminView, function (req, res, next) {
    Equipos_Controller.ver_equipos_views().then((resultados) => {
        if (resultados == null) { res.status(404).send("No se han registrado equipos") } else {
            let equipos = resultados;
            //console.table(equipos)
            res.render('verEquipos', { title: 'Ingresar Equipo', tabla: equipos });
        };
    }).catch((error) => {
        res.status(500).send(error)
    })
});


/*Editar equipo*/
router.put('/editar_equipo/:editar',checkLogin,function (req, res, next) {
    Equipos_Controller.editar_equipo(req.params.editar, req.body)
        .then((resultados) => {
            res.status(resultados.codigo).send(resultados.mensaje);
        })
        .catch((error) => {
            res.status(error.codigo).send(error.mensaje);
        })
    console.table(req.body)
});

/* VIEWS */

router.get('/nuevoEquipo',checkLoginView, function (req, res, next) {
    Modalidad_Controller.poder_inscribir().then((resultados) => {
        let inscripciones = resultados
        res.render('nuevoEquipo', { title: 'Crear un Equipo', categorias: inscripciones});
     }).catch((error) => {
        if (error.codigo && error.mensaje) { res.status(error.codigo).send(error.mensaje) }
        else { res.status(500).send(error) }
     })  
 }) 

 router.post('/nuevoEquipo', function (req, res, next) {
    if(req.body.categorias){
        if(req.body.categorias.length == 1){
            req.body.categorias = [req.body.categorias]
        }
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
    }else{
        res.status(400).send("Inscribete en alguna categoría")
    }
 }) 

module.exports = router; 