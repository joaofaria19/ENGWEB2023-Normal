const mongoose = require('mongoose')

var plantaSchema = new mongoose.Schema({
    _id: Number,
    NumeroDeRegisto: String,
    CodigoDerua: Number,
    Rua: String,
    Local: String,
    Freguesia: String,
    Especie: String,
    NomeCientifico: String,
    Origem: String,
    DataDePlantação: String,
    Estado: String,
    Caldeira: String,
    Tutor: String,
    Implantacao: String,
    Gestor: String,
    DataDeActualizacao: String,
    NumeroDeIntervencoes: Number
});

module.exports = mongoose.model('planta', plantaSchema)