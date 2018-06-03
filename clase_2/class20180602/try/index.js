var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){

    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        var html = fs.readFileSync(__dirname + '/index.html', 'utf-8');
        var nombre = 'Plataforma 5';
        html = html.replace('{nombre}', nombre);
        res.end(html)
    }

    if( req.url === '/api'){
        res.writeHead(200, {'Content-Type': 'application/json'})
        var json = {
            name: 'Arturo',
            job: 'Develop'
        }
        res.end(JSON.stringify(json));    
    }

}).listen(3000, 'localhost', res => console.log('listen in port 3000'))