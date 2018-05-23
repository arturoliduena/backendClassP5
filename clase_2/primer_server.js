var http = require('http');

// =============== EJEMPLO SERVER SIMPLE ====================
// http.createServer( function(req, res) {
// 	res.writeHead(200, {'Content-Type': 'text/html'})
// 	res.end('<h1>Hola Mundo!</h1> <p>*primer server!<p>')
// }).listen(1338, '127.0.0.1', function(){
// 	console.log("SERVER ESCUCHANDO EL PUERTO 1338!")
// });


var fs   = require('fs'); //Importamos el módulo fs que nos permite leer y escribir archivos del file system

http.createServer( function(req, res){ 
	
	// SI LA URL DEL REQUEST es "/" DEVOLVER LA HOME
	if(req.url === '/') {
	res.writeHead(200, { 'Content-Type':'text/html' })
	var html = fs.readFileSync(__dirname +'/index.html');
	res.end(html);
	} else if(req.url === '/api') {
		res.writeHead(200, { 'Content-Type':'application/json' })
		var obj = {
			nombre: 'Juan',
			apellido: 'Perez'
		}; //Creamos un objeto de ejemplo para enviar como response
		res.end(JSON.stringify(obj))
	} else {
		res.writeHead(404, { 'Content-Type':'text/html' })
		res.end("<h1>Te equivocaste macho</h1>");
	}

}).listen(1337, '127.0.0.1', function() {
	console.log('Escuchando en el puerto 1337!')
});