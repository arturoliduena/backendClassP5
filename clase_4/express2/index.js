var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function( req, res){
    res.send('hola')
})

app.get('/home', function( req, res){
    var html = fs.readFileSync(__dirname +'/view/home.html');
    res.end(html); 
})

app.get('/newPag', function(req, res){
    var html = fs.readFileSync(__dirname +'/view/newPag.html');
    res.end(html);
} )

app.get('/api', function(req, res){
    var obj = {
        nombre: 'Arturo',
        apellido: 'Liduena',
        prof: 'Ing.'
    }
    res.json(obj)
})

var DBalumnos = {
    arturo : {
        nombre : "arturo",
        apellido : "Liduena",
        profesion : "Ing."
    },
    andres : {
        nombre : "andres",
        apellido: "kazez",
        profesion : "vago"
    },
    jairo : {
        nombre : "jairo",
        apellido : "carrasquero",
        profesion : "profesor"
    }
}

app.get('/alumnos/:nombre', function(req, res){
    console.log(req.params.nombre,DBalumnos[req.params.nombre])
    if(!DBalumnos[req.params.nombre]){
        res.send('Alumno no reg.')
    }else {
        res.json(DBalumnos[req.params.nombre])
    }
})

app.listen(3000, function(){
    console.log('listen port 3000')
})