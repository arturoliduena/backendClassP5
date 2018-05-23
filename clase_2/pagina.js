var http = require('http');
var fs   = require('fs');

// ================== LEER ARCHIVOS ==================
// === forma SINCRONICA
//var discos = fs.readFileSync('./templates/html/discos.html');

// puedo console loguearlo porque lo leyó sincrónicamente, es decir no avanzó en el código hasta no haber terminado de leer el archivo.
// console.log(discos);

// === forma ASINCRONICA
// fs.readFile('./templates/html/discos.html', function(err, file) {
//   console.log(file);
// })
// ====================================================

http.createServer( function(req, res){
    if (req.url === '/') {
      var file = fs.readFileSync(__dirname +'/templates/html/index.html')
        res.writeHead(200, { 'Content-Type':'text/html' })
        console.log("leyendo archivo asincronico")
        res.end(file);
    } else if (req.url === '/discos') {
      console.log(req.url);
      var file = fs.readFileSync(__dirname +'/templates/html/discos.html')
        res.writeHead(200, { 'Content-Type':'text/html' })
        
        res.end(file);
      } else if (req.url === '/libros') {
      console.log(req.url);
      var file = fs.readFileSync(__dirname +'/templates/html/libros.html')
        res.writeHead(200, { 'Content-Type':'text/html' })
        
        res.end(file);
      } else if (req.url === '/verTodo') {
      console.log(req.url);
      var file = fs.readFileSync(__dirname +'/templates/html/ver_todo.html')
        res.writeHead(200, { 'Content-Type':'text/html' })
        
        res.end(file);
      } else if (req.url === '/new') {
      console.log(req.url);
      var file = fs.readFileSync(__dirname +'/templates/html/new.html')
        res.writeHead(200, { 'Content-Type':'text/html' })
        res.end(file);
    } else {
      res.writeHead(404, { 'Content-Type':'text/html' })
      console.log("else")
      res.end("la pagina no existe");
    }
}).listen(1337, '127.0.0.1', function() {
  console.log("SERVER ESCUCHANDO EN EL PUERTO 1337")
});
