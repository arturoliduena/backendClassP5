const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

let alumnos = []

app.use('/assets/', express.static(__dirname + '/public'))
app.set('view engine', 'ejs');

app.get('/home', (req, res) => {
    let file = fs.readFileSync(__dirname + '/index.html')
    res.end(file)
})


app.get('/querystring', (req, res) => {
    console.log(req.query)
    res.send('ok')
})

app.get('/formulario', (req, res) => {
    const file = fs.readFileSync(__dirname + '/form.html')
    res.end(file)
})


const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/formulario', urlencodedParser, (req, res) => {
    alumnos.push(req.body)
    res.redirect('/testengine')
})

const jsonParser = bodyParser.json()
app.post('/formulariojson', jsonParser, (req, res) => {
    console.log(req.body)
    alumnos.push(req.body)
    res.send('ok')
})

app.get('/alumnos', (req, res) => {
    res.json(alumnos)
})

app.get('/testengine', (req, res) => {
    res.render('listalum', {list: alumnos})
})

app.listen(3000, () => console.log('listening in port 3000'));