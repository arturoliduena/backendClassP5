var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/assets/', express.static(__dirname+'/public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/home', function(req, res) {
    var html = fs.readFileSync('./index.html')
    res.end(html)
})

app.get('/form', function(req, res){
    var form = fs.readFileSync('./form.html')
    res.end(form)
})

app.post('/form', urlencodedParser, function(req, res){
    console.log('into post form', req.body)
    res.send('formulario enviado')
})

var jsonParser = bodyParser.json()

app.post('/postmanobj', jsonParser, function(req, res){
    console.log('into postmanObj', req.body)
    res.send('enviado')
})

app.get('/api', function(req, res) {
    var obj = {
        nombre: "Arturo",
        apellido: "Lidueña"
    }
    res.json(obj)
})
var db = [
    {
        dni: 1234,
        nombre: 'Arturo'
    },
    {
        dni: 4321,
        nombre: 'Rodrigo'
    }
]
app.get('/alumnos/:dni', (req, res) => {
    for(i=0; i<db.length; i++){
        if(req.params.dni == db[i].dni){
            res.json(db[i])
        }
    }
    res.send('not found')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});