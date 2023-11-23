var express = require('express');
var router = express.Router();
const UsuarioController = require('../controllers/Usuario_Controller');


/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home/register', function(req, res, next) {
  res.render('./userViews/register', { title: 'Express' });
});

router.post('/home/register', function(req, res, next) {
  res.render('./userViews/register', { title: 'Express' });
  let data = req.body;
  if (data != null) {
    UsuarioController.registrar_usuario(req.body).then(resultados) 
  }
});


router.get('/home/login', function(req, res, next) {
  res.render('./userViews/login', { title: 'Express' });
});

router.post('/home/login', function(req, res, next) {
  //res.render('./userViews/login', { title: 'Express' });
  let data = req.body;
  UsuarioController.login(req.body).then((token)=>{ 
    res.cookie("jwt", token.token, {maxAge: 3600000})
    res.send("Bienvenido")
  }).catch((error)=>{
    res.status(error).send(error)
  })
});




module.exports = router;
