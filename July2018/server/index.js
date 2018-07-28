var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    console.log(req.url)

    if(req.url == '/api'){
        var newObj = {
            nombre: 'arturo------',
            apellido: 'liduena',
            curso: 'backend'
        }
        res.writeHead(200, { 'Content-Type': 'application/json'})
        res.end(JSON.stringify(newObj))
    
    }

    if(req.url == '/home'){
        var fileHtml = fs.readFileSync(__dirname + '/index.html')
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(fileHtml)
    }
    
}).listen(3000, 'localhost')