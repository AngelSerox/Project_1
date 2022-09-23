const { text } = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Valor = new Schema({
    Instrumento: String,
    Modelo: String,
    Tipo: String,
    Cantidad: String,
    Precio: String
}); 
module.exports =mongoose.model('Info', Valor);



