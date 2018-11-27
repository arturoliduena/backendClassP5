const mongoose = require('mongoose');

const ProductModel = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  descripcion: { type: String, require:true },
  url: { type: String, required: true }
})

module.exports = mongoose.model('Productos', ProductModel);