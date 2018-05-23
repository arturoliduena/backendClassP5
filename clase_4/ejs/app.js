// requerimos express (habiendolo instalado primero con npm install express --save )
var express = require('express');
var app = express();

// con esto le decimos a express que todos los recursos estaticos (archivos que no tienen javascript, como los .css o las imagenes) tiene que buscarlos en la carpeta public, que tiene que estar en el mismo directorio que nuesto app.js
app.use(express.static(__dirname + '/public'));

// esto es un detalle menor y opcional. Le avisa a express que vamos a usar ejs, y nos permite no poner .ejs como extensión cada vez que llamamos a un archivo de ese tipo. Por ejemplo podríamos poner res.render('index') en vez de res.render('index.ejs')
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
	res.render('index.ejs', {nombre: "Robin"})
});

// usando :nombre capturamos como variable ese fragmento de la url que pone el usuario en esa parte, y podemos accederlo a través de req.params.nombre  (podemos ponerle cualquier nombre a la variable)
app.get('/gustos/:nombre', function(req, res) {
	// dentro de esta función (callback) escribimos el javascript que querramos para ir construyendo la response que vamos a enviar al cliente que nos hizo el request

	// extraemos el valor de la parte de la url correspondiente al nombre y la guardamos en una variable
	var nombre = req.params.nombre

	// creamos una variable gustos con un arreglo de gustos
	var gustos = ["gatos", "papas fritas", "motos"]

	// como respuesta, le indicamos a express que renderee el archivo gustos.ejs que se encuentra dentro de la carpeta views. La carpeta views esta en la misma carpeta que app.js
	res.render('gustos.ejs', {'nombre' : nombre, gustos: gustos}) /* ademas de indicarle que renderee gustos.ejs, le mandamos data a gustos.ejs con la forma de un objeto javascript. dentro de gustos.ejs podemos acceder a esas propiedades como variables */
});

app.get('/blog/:nombre', function(req, res) {
	var nombre = req.params.nombre

	var posteos = [{
		titulo: "El ataque de los simios",
		contenido: "Los simios se volvieron locos y se chorearon un bondi.."
	},
	{
		titulo: "El ataque de los gatos",
		contenido: "Lo vieron a piter y se asustaron.."
	},
	{
		titulo: "Recetas para tu torta de casamiento",
		contenido: "Que te importa la torta.. ya perdiste.."
	}
	]

	res.render('blog.ejs', {nombre: nombre, posteos: posteos});
});

app.listen(3000, function() {
	console.log("escuchando en el puerto 3000")
});