var express = require("express");
var app = express();
var fs = require("fs");


app.get('/', function(req, res) {
	console.log("Alguien hizo un request de /")
	res.send('<h1>Homepage con Express!</h1>')
});

app.get('/hola', function(req, res) {
	console.log("Alguien hizo un request de /hola")
	res.send('Hola Mundo! *con express')
})

app.get('/chau', function(req, res) {
	console.log("Alguien hizo un request de /chau")
	res.send('Chau Mundo! (?)')
})

app.get('*', function(req, res) {
	console.log("Alguien hizo un request de una pagina que no existe")
	res.send('Esta página no existe!')
})

app.listen(3000, function() {
	console.log("Server *con express* escuchando en el puerto 3000")
});