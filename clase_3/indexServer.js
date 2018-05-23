var http = require('http'); // importamos el módulo http para poder trabajar con el protocolo
var fs = require('fs');

http.createServer( function(req, res){ // Creamos una serie de events listener, que van a escuchar por requests que ocurren en este socket
	console.log(req.url)
	if(req.url == '/home'){
		res.writeHead(200, { 'Content-Type':'text/html' })
		var html = fs.readFileSync(__dirname +'/Clase3Server.html');
		res.end(html);	
	}
	if(req.url == '/api'){
	res.writeHead(200, { 'Content-Type':'application/json' }) //Vamos a devolver texto en formato JSON
	var obj = {
		nombre: 'Juan',
		apellido: 'Perez'
	}; //Creamos un objeto de ejemplo para enviar como response
	
	res.end( JSON.stringify(obj) ); //Antes de enviar el objeto, debemos parsearlo y transformarlo a un string JSON
	} else {
//Para crear un response empezamos escribiendo el header
	res.writeHead(200, { 'Content-Type':'text/plain' }) //Le ponemos el status code y algunos pair-values en el header
    res.end('404 mucho estilo');
	
	}

}).listen(3000, '127.0.0.1'); //Por último tenemos que especificar en que puerto y en qué dirección va a estar escuchando nuestro servidor