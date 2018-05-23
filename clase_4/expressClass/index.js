var express = require('express');
var app = express();

app.listen(3000);
app.set('view engine', 'ejs');

app.get('/', function(req, res){ 
    res.send('hola')
});

app.get('/objPrueba', function(req, res){
	var obj = {
		nombre: 'prueba',
		framework: 'express',
		ventaja: 'serializó por nosotros'
	}
	res.json( obj );
});

app.get('/ruta/:id', function(req, res){
    console.log(req.params.pV1, req.params.pV2)
    if(req.params.id > 2){
        res.send('id invalido')
    }else {
        var db ={
            a : {
                nombre: 'coca',
                precio: 1000
            },
            b : {
                nombre: 'agua',
                precio: 500
            }
        }
        res.render('productos', {nombre: db[req.params.id].nombre, precio: db[req.params.id].precio})
    }

})
