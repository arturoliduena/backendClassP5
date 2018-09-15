const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    console.log(req.url)
    if(req.url === '/inicio'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        let file = fs.readFileSync(__dirname + '/html/home.html')
        res.end(file)
    }else if(req.url == '/api'){
        res.writeHead(200, { 'Content-Type' : 'application/json'})
        let obj = {
            nombre: 'Arturo',
            apellido: 'Liduena'
        }
        res.end(JSON.stringify(obj))    
    }else {
        res.writeHead(404)
        res.end()
    }
}).listen(3001, '127.0.0.1')