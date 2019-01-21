const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser')

app.use('/assets/', express.static(__dirname + '/public'))

let productos = [
    {
        name: 'iphone',
        price: 1000
    },
    {
        name: 'nokia',
        price: 10
    }
]
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.send('hello world');
});

app.get('/api', (req, res) => {
    const obj = {
        name: 'Arturo',
        age: 26
    }
    res.json(obj)
})

app.get('/home', (req, res) => {
    console.log(req.query)
    const file = fs.readFileSync(__dirname + '/index.html');
    res.end(file)
})

app.get('/producto/:id', (req, res) => {
    res.json(productos[req.params.id] ? productos[req.params.id] : { response: null })
})

app.get('/query', (req, res) => {
    productos.push(req.query)
    res.redirect('/productos')
})

app.get('/productos', (req, res) => {
    res.json(productos)
})

app.get('/formulario', (req, res) => {
    const file = fs.readFileSync(__dirname + '/form.html');
    res.end(file)
})

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/formulario', urlencodedParser, (req, res) => {
    productos.push(req.body)
    res.redirect('/productos')
})

var parserObj = bodyParser.json()
app.post('/api', parserObj, (req, res) => {
    console.log(req.body)
    res.send('todo bien')
})

app.listen(8080);