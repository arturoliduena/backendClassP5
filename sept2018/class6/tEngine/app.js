const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
let products = [
    {
        id: 1,
        nombre: 'Iphone X',
        precio: 1000,
        descripcion: 'el nuevo iphone',
        color: 'black',
        url: 'https://clipart.info/images/ccovers/1505918647iphone-x-png.png'
    },
    {   
        id: 2,
        nombre: 'nokia 1100',
        precio: 50,
        descripcion: 'indestructible',
        color: 'blue',
        url:'http://wpc.72c72.betacdn.net/8072C72/lvi-images/sites/default/files/styles/landscape_1020_560/public/nota_periodistica/Nokia1100.jpg'
    },
    {
        id: 3,
        nombre: 'blu',
        precio: 1,
        descripcion: 'anda bien pero se calienta',
        color: 'blue',
        url:'https://cdn.shopify.com/s/files/1/1612/7137/products/BLU-Grand-5.5-HD-Gray-Image-HD-3-newst8_800x.jpg?v=1499968011'
    }
]
app.get('/', function(req, res){
    let obj = {
        nombre: 'Arturo',
        isSubscribe: true,
        materias: ['matematica', 'fisica', 'castellano', 'quimica'],
        notas: [10, 15, 20, 10, 5, 1]
    };

    let suma = obj.notas.reduce(function(acc, valor){
        return acc + valor
    })
    let promedio = suma/obj.notas.length
    obj.promedio = promedio;
    console.log(obj)
    res.render('index', obj)
});

app.get('/products', function(req, res){
    res.render('products.ejs', { listProduct: products})
})

app.get('/item/:id', function(req, res){
    let id = req.params.id
    let product = null;
    products.forEach(item => {
        if(id == item.id) product = item
    })
    res.render('item', {item: product})
})

app.get('/create', function(req, res){
    let product = {
        id: 0,
        nombre: '',
        precio: 0,
        descripcion: '',
        color: '',
        url:''
    }
    res.render('form', {item: product})
})

app.get('/update/:id', function(req, res){
    let id = req.params.id
    let product = null;
    products.forEach(item => {
        if(id == item.id) product = item
    })
    res.render('form', {item: product})
})


var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/createOrUpdate/:id', urlencodedParser,function(req, res){
    let id = Number(req.params.id);
    if(!id){
        products.push(req.body)
        req.body.id = products.length;    
    }else {
        let product = null;
        products.forEach(item => {
            if(id == item.id) {
                item.nombre = req.body.nombre;
                item.color = req.body.color;
                item.descripcion = req.body.descripcion;
                item.precio = req.body.precio;
                item.url = req.body.url;
            }
        }) 
    }
    res.redirect('/products')
})

app.get('/delete/:id', function(req, res){
    let id = Number(req.params.id);
    let index = products.findIndex(function(element){
        return id == element.id
    })
    products.splice(index, 1)
    res.redirect('/products')
})






app.listen(3000, () => console.log('port 3000'))