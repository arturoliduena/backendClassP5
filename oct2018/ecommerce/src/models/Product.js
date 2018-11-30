const mongoose = require('mongoose');

const ProductModel = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  descripcion: { type: String, require:true },
  url: { type: String, required: true },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'

    }
  ]
})

module.exports = mongoose.model('Productos', ProductModel);