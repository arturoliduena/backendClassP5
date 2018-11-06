const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    if(req.url == '/'){
        fs.readFile(__dirname + '/index.html', function(err, html){
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(html)
        })
    } else if ( req.url == '/home') {
        res.writeHead(200, { 'Content-Type': 'text/plain'});
        res.end('hola mundo');
    } else if ( req.url == '/api'){
        const obj = {
            nombre: 'Arturo',
            clase: 'Backend'
        }
    
        res.writeHead(200, { 'Content-Type': 'application/json'})
        const string = JSON.stringify(obj)
        res.end(string)
    } else {
        res.writeHead(404)
        res.end()
    }
    
}).listen(4000, 'localhost')