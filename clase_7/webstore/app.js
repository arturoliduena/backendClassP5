var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose'); // Importamos el módulo Mongoose.
mongoose.connect("mongodb://localhost/productos") // Connect se conecta a la bd

app.set('view engine', 'ejs'); //Seteamos el template engine para que sea EJS.

var ProductoSchema = new mongoose.Schema({
    nombre: { type: String, required: true},
    precio: { type: String, required: true},
    descripcion: { type: String, required: true},
    fotoUrl: { type: String, required: true},
    date: { type: Date, default: Date.now }
  })

var Producto  = mongoose.model('Productos', ProductoSchema);

app.get('/', function(req, res) {
    Producto.find(function(err, result){
        if(err) res.send(err)
        console.log('result',result)
        if(result) res.render('index', {productos: result}); 
    })
	
})

app.get('/producto/:idProd', function(req, res) {
    Producto.findById(req.params.idProd, function(err, result){
        res.render('producto', result)
    })

})

app.get('/formulario', function(req, res) {
    res.render('formulario')
})

app.get('/editar/:id', function(req, res) {
    Producto.findById(req.params.id, function(err, result){
        res.render('formEdit', result)
    })
    
})

app.get('/eliminar/:id', function(req, res){
    Producto.remove({_id: req.params.id}, function(err, producto){
        res.redirect('/')
    })
})

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/newProduct', urlencodedParser, function (req, res) {
    console.log(req.body)
    Producto.create({ nombre: req.body.nombre, precio: req.body.precio, descripcion: req.body.descripcion, fotoUrl: req.body.fotoUrl }, function (err, producto) {
        if (err) return res.send(err);
        // Guardado!
        res.redirect('/')
      })
});

app.post('/editProduct', urlencodedParser, function (req, res) {
    Producto.update({ _id: req.body.id }, {$set: { nombre: req.body.nombre, precio: req.body.precio, descripcion: req.body.descripcion, fotoUrl: req.body.fotoUrl } }, function(err, result){
        console.log('editProduct', result)
        res.redirect('/')
    });
});

app.listen(3000, function(){
    console.log('listen port 3000')
})