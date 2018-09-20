const express = require('express');
const app = express();
const fs = require('fs');

app.use('/assets/', express.static(__dirname + '/public'))

app.get('/', function(req, res){
    res.send('hola mundo');    
});

app.get('/api', function(req, res){
    let obj = {
        nombre: 'Arturo',
        apellido: 'Liduena'
    }
    res.json(obj)
})

app.get('/home', function(req, res){
    const file = fs.readFileSync(__dirname + '/html/index.html')
    res.end(file)
})

app.get('/alumno/:name', function(req, res){
    const info = req.params.name
    const objAlumno = {
        arturo: {
            nombre: 'arturo',
            apellido: 'liduena',
            curso: 'backend'
        },
        adrian: {
            nombre: 'adrian',
            apellido: 'cottrell',
            curso: 'backend'
        }
    }

    objAlumno[info] ? res.json(objAlumno[info]) : res.send('no se encontro el alumno');
})


app.listen(2000, () => {
    console.log('listen in port 2000')
})