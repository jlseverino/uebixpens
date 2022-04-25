const mongoose = require('mongoose')
const { Schema } = mongoose;

const gastosSchema = new Schema({
    id: { type: String, required: true },
    fecha: { type: String, required: true },
    hora: { type: String, required: true },
    categoria: { type: String, required: true },
    subcategoria: { type: String, required: true },
    valor: { type: Number, required: true },
})

module.exports = mongoose.model('Gastos', gastosSchema);