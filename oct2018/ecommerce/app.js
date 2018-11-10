const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')

let products = [
    {
        id: 1,
        nombre: 'Iphone x',
        precio: 1000,
        descripcion: 'muy caro',
        url: 'https://wmstatic.global.ssl.fastly.net/ml/060918-f-fc4fc6d5-a060-4bd5-b0da-280d97ae5ae5.png?width=165&height=300'
    }
];

app.get('/', (req, res) => {
    res.render('home', { products })
})

app.get('/create', (req, res) => {
    res.render('form')
})

const urlencoded = bodyParser.urlencoded({extend: false}) 
app.post('/create', urlencoded, (req, res) => {
    products.push(req.body)    
    req.body.id = products.length
    res.redirect('/')
})

app.get('/product/:id', (req, res) => {
    var found = products.find(function(element) {
        return element.id == req.params.id;
      });
      res.render('item', found)
})
app.listen(4000, () => console.log('listening in port 4000'))