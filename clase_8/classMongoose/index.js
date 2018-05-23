var express = require('express');
var app = express();

var mongoose = require('mongoose'); // Importamos el módulo Mongoose.
mongoose.connect("mongodb://localhost/alumnos") // Connect se conecta a la bd

var AlumnoSchema = new mongoose.Schema({
    nombre: { type: String, required: true},
    apellido: { type: String, required: true},
    date: { type: Date, default: Date.now }
  })
  
var CursoSchema = new mongoose.Schema({
alumnos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Alumnos"
    }],
nombre: String,
date: { type: Date, default: Date.now }
})

var Curso  = mongoose.model('Cursos', CursoSchema);
var Alumno = mongoose.model('Alumnos', AlumnoSchema);

// var juan = new Alumno({  nombre: 'Juan', apellido: 'Perez' });
// var martin = new Alumno({ nombre: 'Martin', apellido: 'Perez' });


// var cur = new Curso({
//     nombre: "1ero B",
//     alumnos: [juan, martin]
//   });

// juan.save(function (err) {
//   if (err) return handleError(err);
//   martin.save(function (err) {
//     if (err) return handleError(err);
//     // listo!
//     cur.save(function (err) {
//         if (err) return handleError(err);
//         // listo!
//         Curso.find(function(err, result){
//             console.log('curso', result)
//         })
//       });
//   });
// });

Curso.find().populate('alumnos').exec(function(err, result){
    console.log(result[0])
})

app.listen(3000, function(){
    console.log('listen port 3000')
})