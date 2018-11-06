const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

app.use('/assets/', express.static(__dirname + '/public'))

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


let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/formulario', urlencodedParser, (req, res) => {
    console.log(req.body)
    res.send('usuario registrado')
})

app.listen(3000, () => console.log('listening in port 3000'));