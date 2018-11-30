const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const multer = require('multer');

const Products = require('./src/models/Product');
const Comments = require('./src/models/Comment');

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, __dirname + "/public");
    },
    filename: function(req, file, cb) {
      cb(null, file.fieldname + Math.random() + ".jpg");
    }
  });
  
var upload = multer({ storage: storage });
  
app.use("/assets/", express.static(__dirname + "/public"));

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

app.post('/add/:prodId', upload.single('imgProduct'), (req, res) => {
    console.log(req.body, req.file)
    let product = Object.assign(req.body, { url: "assets/" + req.file.filename });
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


app.get('/product/:code', (req, res) => {
    Products.findById(req.params.code).populate('comments').exec((err, result) => {
        console.log('productos', result)
        if(result){
            res.render('item.ejs', result)            
        }else{
            res.json(err.message)
        }
    })
    
    /*, (err, result) => {
        if(result){

            console.log('producto', result)
            res.render('item.ejs', result)            
        }else{
            res.json(err.message)
        }
    })*/              
})

app.get('/delete/:prodId', (req, res) =>{
    Products.deleteOne({ _id: req.params.prodId}, (err, result) => {
        if(!err)
        res.redirect('/')
    })
})

app.post('/addcomment/:prodId', (req, res) => {
    Products.findById(req.params.prodId, (err, producto) => {
        Comments.create(req.body, (err, result) => {
            producto.comments.push(result)
            producto.save()
            res.redirect('/product/'+producto._id)
        })
    
    })
    
})

app.listen(4000, () => console.log('listening in port 4000'))