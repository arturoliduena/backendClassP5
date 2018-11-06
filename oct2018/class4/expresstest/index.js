const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
    res.send('hola mundo')
})

app.get('/api', (req, res) => {
    let obj = {
        nombre: 'arturo',
        curso:'backend'
    }
    res.json(obj)
})

app.get('/home', (req, res) => {
    let file = fs.readFileSync(__dirname + '/index.html');
    res.end(file)
})

let productos = [
    {
        nombre: 'iphone',
        precio: 99999
    },
    {
        nombre: 'nokia',
        precio: 1
    },
    {
        nombre: 'sony',
        precio: 5
    }
]
app.get('/producto/:id', (req, res) => {
    res.json(productos[req.params.id] || {err: 'no se encontro producto'})
})

app.listen(3000, () => console.log('listen in port 3000'))