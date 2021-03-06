var express = require('express');
var app = express();
var db = require('./db/db.js');

var bodyParser = require('body-parser');

app.use('/assets/', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/querystring', function (req, res){
    console.log(req.query)
    res.json(req.query)
})

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/formulario', urlencodedParser,function (req, res) {
    alumnos.push(req.body)
    res.redirect('/alumnos')
})

app.get('/celulares', function (req, res) {
    res.render('lista', {list: db})
});

app.get('/celulares/:code', function (req, res){
    var item;
    for(var i=0; i < db.length; i++){
        if(db[i].id == req.params.code){
            item = db[i]
        }
    }

    res.render('item', { producto: item })
})
app.get('/edit/:code', function (req, res){
    var item;
    for(var i=0; i < db.length; i++){
        if(db[i].id == req.params.code){
            item = db[i]
        }
    }

    res.render('formEdit', { producto: item })
})

app.post('/edit/:id', urlencodedParser, function (req, res){
    var item;
    for(var i=0; i < db.length; i++){
        if(db[i].id == req.params.id){
            item = db[i]
        }
    }
    console.log(req.body)
    item.nombre = req.body.nombre;
    item.descripcion = req.body.descripcion;
    item.precio = req.body.precio;
    res.redirect('/celulares')
})
app.listen(3000);