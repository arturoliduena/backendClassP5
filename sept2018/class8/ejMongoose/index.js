const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/test")

let alumnoModel = new mongoose.Schema({
    nombre: {type: String, required: true},
    edad: Number,
    sex: {type: String, enum: ["M", "F"]},
    nacionalidad: {type: String, default: 'Argentina'}
});

let cursoModel = new mongoose.Schema({
    nombre: String,
    date: {type: Date, default: Date.now},
    alumnos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'alumno'
    }]
})


const Alumno = mongoose.model('alumno', alumnoModel);
const Curso = mongoose.model('curso', cursoModel);


// Curso.create({nombre: 'Backend', alumnos: []}, function(err, result){
//     console.log(result)
// })

// Alumno.find({nombre: 'Arturo'}, function(err, alumnosResult){
//     Curso.update({_id: '5baeb8ab07b85a2653b63be2'},{alumnos: alumnosResult}, function(err, result){
//         console.log(result)
//     })
// })

Curso.find({}).populate('alumnos').exec((err, result) => {
    // console.log(result[0].alumnos)
    result[0].alumnos.forEach(element => console.log(element))
} )

// Alumno.create({
//     nombre: 'Juan',
//     edad: 20,
//     sex: 'M'
// }, (err, result) => {
//     if(err) console.log('error', err)

//     console.log('resultado', result)

//     Alumno.find({}, (err, result) => {
//         if(err) console.log('error', err)
    
//         console.log('resultado', result)
//     })

// })

// let Arturo = new Alumno({
//     nombre: 'Arturo',
//     edad: 26,
//     nacionalidad: 'Venezuela'
// })

// Arturo.save((err, result) => {
//     if(err) console.log('error', err)

//     console.log('resultado', result)
// })

// Alumno.update({_id: '5baea9a0c8a0741db77b1743'}, {edad: 50000}, (err, result) => {
//     console.log(result)
    
//     Alumno.find({}, (err, result) => {
//         console.log(result)
//     })
// })


// Alumno.remove({_id: '5bac18e6cb9a3632d7676ebd'}, (err, result) => {
//     if(err) console.log('error', err)

//     console.log('resultado', result)
// })

