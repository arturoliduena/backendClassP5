const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){

    if(req.url === '/home'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        var html = fs.readFileSync(__dirname + '/index.html', 'utf8')
        var nombre = 'Arturo Lidueña';
        html = html.replace( '{nombre}', nombre)
        res.end(html)    
    } else if ( req.url === '/api') {
        res.writeHead(200, {"Content-Type": "application/json"})
        obj = {
            nombre: 'Arturo',
            apellido: 'Lidueña'
        }
        res.end(JSON.stringify(obj));
    
    } else {
        res.writeHead(404);
        res.end()
    }

}).listen(3000, 'localhost', res => console.log('listen to port 3000 localhost'))