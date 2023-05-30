var express = require('express');
var router = express.Router();
var Planta = require('../controllers/index')

// GET: os vários pedidos

router.get('/plantas', function(req, res, next) {
  if (req.query.especie){
    var especie = req.query.especie
    Planta.getEspecie(especie)
    .then(listas => {res.status(201).jsonp(listas)})
    .catch(err => res.status(501).jsonp({erro:err, message: "Erro na obtenção das lista de registos da espécie"}))

  }
  else if (req.query.implant){
    var implant = req.query.implant
    Planta.getImplant(implant)
    .then(listas => {res.status(201).jsonp(listas)})
    .catch(err => res.status(502).jsonp({erro:err, message: "Erro na obtenção das lista de registos da implantação "}))
    
  }
  else{

    Planta.list()
    .then(listas => {res.status(201).jsonp(listas)})
    .catch(err => res.status(503).jsonp({erro:err, message: "Erro na obtenção das lista de registos"}))
  }
});


router.get('/plantas/freguesias', function(req, res, next) {
  Planta.getFreguesias()
  .then(response => res.status(201).jsonp(response))
  .catch(err => res.status(504).jsonp({erro:err,message:"Erro na obtenção da lista de Freguesias"}));
});


router.get('/plantas/especies', function(req, res, next) {
  Planta.getEspecies()
  .then(response => res.status(201).jsonp(response))
  .catch(err => res.status(505).jsonp({erro:err,message:"Erro na obtenção da lista de Espécies"}));
});

router.get('/plantas/especies/:id', function(req, res, next) {
  Planta.getPlantaId()
  .then(response => res.status(201).jsonp(response))
  .catch(err => res.status(505).jsonp({erro:err,message:"Erro na obtenção da Espécie da planta"}));
});


router.get('/plantas/:id', function(req, res, next) {
  var ID = req.params.id;
  Planta.getId(ID)
  .then(response => res.status(201).jsonp(response))
  .catch(err => res.status(506).jsonp({erro:err,msg:"Erro na obtenção da informação da Planta"}));
});


router.post('/plantas', function(req, res) {
  Planta.addPlanta(req.body)
  .then(response => {res.status(201).jsonp(response)})
  .catch(err => res.status(507).jsonp({erro:err,message:"Erro na inserção da Planta"}));
  
})

router.delete('/plantas/:id', function(req, res) {
  var id = req.params.id;
  Planta.deletePlanta(id)
  .then(dados => {res.status(201).jsonp(dados)})
  .catch(err => {res.status(508).jsonp({erro:err,message:"Erro na remoção da Planta"})}) 
})

module.exports = router;
