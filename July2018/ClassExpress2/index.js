var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var celulares = [
    {
        nombre: 'iphone 6',
        descripcion: 'soy un iphone 6',
        precio: 600,
        fotoUrl: '/assets/iphone6.png'
    },
    {
        nombre: 'iphone x',
        descripcion: 'soy el ultimo iphone',
        precio: 'muy caro',
        fotoUrl: '/assets/Iphonex.png'
    },
    {
        nombre: 'nokia 110',
        descripcion: 'viejo',
        precio: 'muy barato',
        fotoUrl: '/assets/Nokia-110.jpg'
    }
]
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
    res.render('lista', {list: celulares})
})
app.listen(3000);