var express = require('express');
var app = express();

var mongoose = require('mongoose'); // Importamos el módulo Mongoose.
mongoose.connect("mongodb://localhost/dbBack") // Connect se conecta a la bd

var alumnoModel = new mongoose.Schema({	// Antes de poder escribir en la DB, tenemos que especificar un modelo
    nombre: String,						// para los datos, explicaremos esto más adelante en detalle
    edad: Number,						// Básicamente, decime el nombre y el tipo de datos que vamos a necesita
    });

var Alumno = mongoose.model('alumno', alumnoModel); // Creamos una clase Alumno basado en el modelo que definimos
                                                    // este objeto va a tener todo el comportamiento de mongoose

//Creamos un alumno usando la clase Alumno
/*
var diego = new Alumno({
    nombre: 'sol',
    edad: 22
})

diego.save((err, result) => {
    if(err) console.log('ERR', err)

    console.log('result', result)
})*/

Alumno.create({nombre: 'Toni', edad: 45}, function(err, res) {console.log(err, res)})

Alumno.where('edad').gt(21).exec((err, res) => {
    console.log(err, res)
})

app.listen(3000, function(){
    console.log('listen port 3000')
})