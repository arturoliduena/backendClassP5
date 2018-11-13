const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')

let count = 1;

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
    res.render('home.ejs', { products })
})

app.get('/add/:code', (req, res) => {
    let product = null;
    if(req.params.code != 0){
        product = products.find(function(element) {
            return element.id == req.params.code;
          });
    } else {
        product = {
            id: 0,
            nombre: '',
            precio: 0,
            descripcion: '',
            url: ''
        }
    }
    
    res.render('form.ejs', product)
})

const urlencoded = bodyParser.urlencoded({extend: false}) 
app.post('/add/:code', urlencoded, (req, res) => {
    if(req.params.code != 0) {
        let found = products.find(function(element) {
            return element.id == req.params.code;
        });
        
        found = Object.assign(found, req.body)
        
    } else {
        products.push(req.body);
        req.body.id = ++count
    }
    
    res.redirect('/')
})

app.get('/product/:code', (req, res) => {
    const found = products.find(function(element) {
        return element.id == req.params.code;
      });
      res.render('item.ejs', found)
})

app.get('/delete/:prodId', (req, res) =>{
    const index = products.findIndex(element => element.id == req.params.prodId)
    products.splice(index, 1)
    res.redirect('/')
})
app.listen(4000, () => console.log('listening in port 4000'))