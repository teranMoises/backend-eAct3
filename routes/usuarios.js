var express = require('express');
var router = express.Router();
const UsuarioController = require('../controllers/Usuario_Controller');
const { checkLogin, checkAdmin } = require('../auth/auth');

/* GET user. */
router.get('/', checkLogin ,function(req, res, next){
  UsuarioController.ver_usuarios().then((resultados)=>{
    res.json(resultados);
  }).catch((error)=>{
        res.status(500).send(error)
  })
});

router.get('/:index', function(req, res, next){
  UsuarioController.encontrar_usuario(req.params.index).then((resultado)=>{
    res.json(resultado);
  }).catch((error)=>{
    res.status(500).send(error)
  })
});

/* POST new user. */
router.post('/crear', function(req, res, next){
  UsuarioController.registrar_usuario(req.body).then(()=>{ //token
      //res.send(token)
      res.send()
    }).catch((error)=>{
      res.status(500).send(error)
    })
});

router.post('/login', function(req, res, next) {
  UsuarioController.login(req.body).then((token)=>{ 
      res.send(token)
    }).catch((error)=>{
      res.status(500).send(error)
    })
});

/* PUT user. */
router.put('/:index',checkAdmin, function(req, res, next) {
  UsuarioController.modificar_usuario(req.params.index, req.body).then((token)=>{ 
    res.send(token)
  }).catch((error)=>{
    res.status(500).send(error)
  })
});

/* DELETE user. */
router.delete('/:index',checkAdmin, function(req, res, next){
  UsuarioController.borrar_usuario(req.params.index).then(()=>{ 
    res.send()
  }).catch((error)=>{
    res.status(500).send(error)
  })
}); 

module.exports = router;
