var http = require('http'); // importamos el módulo http para poder trabajar con el protocolo
var fs = require('fs');

http.createServer( function(req, res){ // Creamos una serie de events listener, que van a escuchar por requests que ocurren en este socket
	// //Para crear un response empezamos escribiendo el header
	// res.writeHead(200, { 'Content-Type':'text/plain' }) //Le ponemos el status code y algunos pair-values en el header
    // res.end('Hola, Mundo!\n');
    
    if(req.url == '/'){
        res.writeHead(200, { 'Content-Type':'text/html' })
        var html = fs.readFileSync(__dirname +'/index.html');
        res.end(html);    
    }
    if(req.url == '/api'){
        res.writeHead(200, {'Content-Type':'application/json'})
        var obj = {
            name: 'arturo',
            Apellido: 'Lidueña'
        }
        res.end(JSON.stringify(obj))
    } else{
		res.writeHead(404); //Ponemos el status del response a 404: Not Found
		res.end(); //No devolvemos nada más que el estado.
	}


}).listen(1337, '127.0.0.1'); //Por último tenemos que especificar en que puerto y en qué dirección va a estar escuchando nuestro servidor