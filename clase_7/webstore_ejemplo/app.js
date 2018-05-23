var express = require('express');
var app = express();
var faker = require('faker');
var bodyParser = require('body-parser');

// =================== SETEOS ====================
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

// ==================== RUTAS ====================
var productos = []

for (var i = 0; i < 8; i++) {

	productos.push({
		precio: Number((Math.random() * 100).toFixed(2)),
		nombre: faker.commerce.product(),
		descripcion: "Un producto excelente que nunca le fallará, asegurando por sus fabricantes chinos y millones de personas más.",
		foto: faker.image.technics() + "/" + Math.floor(Math.random() * 11),
		reviews: Math.round(Math.random() * 100),
	});
}

app.get('/', function(req, res) {
	console.log("Alguien pidio la homepage");
	console.log(req.headers['cookie']);
	res.render('index', {productos: productos});
})

// cuando alguien hace un get a la ruta agregarproducto le mostramos una pagina con un formulario
app.get('/agregarproducto', function(req, res) {
	res.render('agrega_producto');
});

// el formulario envia (post) informacion a la ruta agregarproducto. con app.post le indicamos lo que tiene que hacer con esa informacion
app.post('/agregarproducto', function(req, res) {
	console.log(req.body)
	console.log(req.body.precio_producto)
	// cada vez que se recibe un envio de informacion de un nuevo producto, creamos un objeto nuevo con los valores y lo pusheamos en el arreglo de productos. ojo que el arreglo de productos tiene que estar fuera de las funciones callback, antes de las rutas, para que pueda ser accedido desde cualquier lado
	productos.push({
		// la data viene dentro del objeto req.body y el nombre de cada campo lo definimos en el atributo name de cada input html del formulario
		precio: Number(req.body.precio_producto),
		nombre: req.body.nombre_producto,
		descripcion: req.body.descripcion_producto,
		foto: req.body.imagen_producto,
		reviews: Math.round(Math.random() * 100),
	})
	// despues de procesar la informacion redirigimos al usuario a la home page (hace un get a '/') 
	res.redirect('/');
});


// HAY QUE CREAR UN ARCHIVO ejemplo_post.ejs EN VIEWS PARA RENDEREAR EN ESTA RUTA
app.get("/ejemplopost", function(req, res) {
	res.render("ejemplo_post")
});

app.post("/ejemplopost", function(req, res) {
	console.log(req.body)
	var nombre = req.body.nombre
	res.send(nombre)
});

// =============== ESCUCHAR PUERTO ===============
app.listen(3001, function() {
	console.log('WEBSTORE v2 EN PUERTO 3001');
})