var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/home', function (req, res){

})

var alumnos = [
    {
        nombre: 'luis',
        curso: 'backend'
    },
    {
        nombre: 'alejando',
        curso: 'backend'
    },
    {
        nombre: 'brenda',
        curso: 'backend'
    }
]
app.get('/api', function(req, res){
    
    res.json(alumnos)
})

app.get('/alumno/:id', function(req, res){
    var respuesta
    for(var i = 0; i < alumnos.length ; i++){
        if(alumnos[i].nombre == req.params.id) respuesta = alumnos[i] 
    }
    if(!respuesta) respuesta = {alumno: 'no'}
    res.json(respuesta)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});