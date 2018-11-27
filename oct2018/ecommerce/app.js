const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const Products = require('./src/models/Product');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs')

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log(err);
        process.exit();
    }
})

app.get('/', (req, res) => {
    Products.find({}, (err, products) => {
        if (err) throw err;
        console.log('Productos de Base de datos: ', products);
        
            res.render('home.ejs', { products })
        
    })
})

app.get('/add', (req, res) => {
    res.render('form.ejs')
})

app.get('/edit/:prodId', (req, res) => {
    Products.findById(req.params.prodId, (err, result) => {
        res.render('formedit', result)
    })
})

app.post('/add/:prodId', (req, res, next) => {
    if(req.params.prodId == 0){
        Products.create(req.body, (err, result) => {
            console.log(err, result)
            res.redirect('/')
        })    
    } else {
        Products.update({ _id: req.params.prodId}, req.body, (err, result) => {
            res.redirect('/product/' + req.params.prodId)
        })
    }

})



app.post('/add/:code', (req, res) => {
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
    Products.findById(req.params.code, (err, result) => {
        if(result){
            res.render('item.ejs', result)            
        }else{
            res.json(err.message)
        }
    })              
})

app.get('/delete/:prodId', (req, res) =>{
    Products.deleteOne({ _id: req.params.prodId}, (err, result) => {
        if(!err)
        res.redirect('/')
    })
})
app.listen(4000, () => console.log('listening in port 4000'))