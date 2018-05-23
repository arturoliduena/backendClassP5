var express = require('express');
var app = express();
var fs = require('fs');

app.set('view engine', 'ejs'); //Seteamos el template engine para que sea EJS.

app.get('/', function( req, res){
    res.send('hola')
});
app.get('/prueba', function(req, res){
    res.render('index', {nombre: 'arturo'})
})

var DBalumnos = {
    arturo : {
        nombre : "arturo",
        apellido : "Liduena",
        profesion : "Ing.",
        notas: [10, 10, 10, 10, 10, 10, 10, 10]
    },
    andres : {
        nombre : "andres",
        apellido: "kazez",
        profesion : "vago",
        notas: [0, 1, 5, 10]
    },
    jairo : {
        nombre : "jairo",
        apellido : "carrasquero",
        profesion : "profesor",
        notas: [7, 1, 5, 10, 2, 5, 6]
    }
}
app.get('/alumnos/:nombre', function(req, res){
    res.render('indexAlumno', DBalumnos[req.params.nombre])
})

app.listen(2000, function(){
    console.log('listen port 2000')
})