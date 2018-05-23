var fs = require('fs');

var archivoLeido = fs.readFileSync("./app.js");

console.log(archivoLeido);