var express = require('express');
var router = express.Router();
var axios = require('axios');
var env = require('../config/config');

/* GET Lista plantas. */
router.get('/', function(req, res, next) {
  var date = new Date().toISOString().substring(0, 19)
  axios.get(env.api)
  .then(response => {
    console.log(response.data)
    res.render('index', {plantas: response.data, d:date},)})
  .catch(err=> {res.render('error',{error:err,message:'Impossivel aceder à lista de Plantas'})})
});

router.get('/especies/:id', function(req, res, next) {
  var date = new Date().toISOString().substring(0, 19)
  axios.get(env.api+'/especies/'+req.params.id)
  .then(response => {res.render('especie', {planta: response.data, d:date},)})
  .catch(err=> {res.render('error',{error:err,message:'Impossivel aceder à lista de Plantas'})})
});

router.get('/:id', function(req, res, next) {
  var date = new Date().toISOString().substring(0, 19)
  var id = parseInt(req.params.id)
  axios.get(env.api+'/'+id)
  .then(response => {
    res.render('planta', {planta: response.data,d: date })})
  .catch(err => {res.render('error', { error:err })})
});

module.exports = router;
