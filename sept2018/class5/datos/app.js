const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use('/assets/', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.send('hola mundo!')
})
app.get('/query', function(req, res){
    console.log(req.query)
    res.send(req.query)
})

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post('/formulario', urlencodedParser, function(req, res){
    console.log(req.body)
    res.send(req.body)
})

var jsonBodyparser = bodyParser.json();
app.post('/testPostman', jsonBodyparser, function(req, res){
    console.log(req.body)
    res.json({status: 'ok'})
})

let obj = [
    {
        nombre: 'Arturo',
        apellido: 'liduena',
    },
    {
        nombre: 'jose',
        apellido: 'perez'
    },
    {
        nombre: 'otroNombre',
        apellido: 'otroApellido'
    }
]

app.get('/testEngine', function(req, res){
    res.render('tengine.ejs', {nombre: 'Arturo', info: 'esto es una prueba con ejs'})
})

app.get('/alumno/:codigo', function(req, res){
    res.render('alumno', obj[req.params.codigo])
})

app.get('/alumnos', function(req, res){
    res.render('alumnos', {list: obj})
})
app.listen(3000, () => console.log('listen in port 3000'))