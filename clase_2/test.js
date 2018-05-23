var http = require('http');
var fs   = require('fs');

http.createServer(function(req, res) {
	var html = fs.readFileSync("./index.html");
	res.writeHead(200, { 'Content-Type':'text/html' })
	res.end(html);
}).listen(1400, '127.0.0.1', function() {
  console.log("SERVER ESCUCHANDO EN EL PUERTO 1400")
});