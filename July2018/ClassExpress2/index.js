var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var alumnos = [
    {
        nombre: 'arturo',
        apellido: 'liduena',
        curso: 'backend'
    },
    {
        nombre: 'servando',
        apellido: 'reyes',
        curso: 'intro'
    },
    {
        nombre: 'tomi',
        apellido: 'niño de cobre',
        curso: 'backend'
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

app.get('/alumnos', function (req, res) {
    res.render('lista', {list: alumnos, bool: false})
})
app.listen(3000);