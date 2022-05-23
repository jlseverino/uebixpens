const mongoose = require('mongoose');
const {Schema} = mongoose;

const categoriasSchema = new Schema({
    categoria: {type: String, required: true},
    subcategoria: {type: String, required: false},
    icon: {type: String, required: false},
    usuario: {type: String, required: false}
});

module.exports = mongoose.model('Categorias', categoriasSchema);