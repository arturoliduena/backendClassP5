var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('<h1>Estoy expresseando como un campeón!</h1>');
});

app.get('/alentar/:equipo', function(req, res) {
	var aliento = {
		boca: "Dale dale dale booooooo!!",
		racing: "Vamo vamoo lacadeeeee!!",
		independiente: "Disculpe, este club no tiene aguante"
	};
	res.send(aliento[req.params.equipo]);
});

app.get('/repetir/:palabra/:veces', function(req, res) {
	var palabra = req.params.palabra;
	var veces = Number(req.params.veces);
	var respuesta = ''
	for (var i = 0; i < veces; i++) {
		respuesta += palabra + ' '
	}
	res.send(respuesta);
});



app.listen(3001, function() {
	console.log("Server escuchando en el puerto 3001");
});

