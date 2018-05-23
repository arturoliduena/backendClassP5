var express = require('express');
var app = express();

app.listen(3000)
app.use('/assets/', express.static(__dirname+'/public'));
app.set('view engine', 'ejs'); //Seteamos el template engine para que sea EJS.


app.get('/', function(req, res) {
	res.render('index', {nombre: 'EJS PRUEBA', mensaje: "Estes es mi mensaje"});
})

app.get('/hola', function(req, res){
    res.send('hola')
})

app.get('/api', function(req, res){
	var obj = {
		nombre: 'prueba',
		framework: 'express',
		ventaja: 'serializó por nosotros'
	}
	res.json( obj );
});

app.get('/api/:id', function(req, res) {
	res.json( { parametro: req.params.id } );
});

app.get('/static', function(req, res) {
	res.send( '<html><head> \
			<link href="/assets/style.css" rel="stylesheet"> \
			</head><body> \
				<p>Archivos estaticos rapido y facil!!</p>\
				<img src="/assets/images.jpg">\
			</body></html>' );
});
