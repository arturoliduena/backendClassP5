var util = require('util'); // No usamos ./ porque es un modulo core

var nombre = 'Toni';
var saludo = util.format('Hola, %s', nombre);
util.log(saludo);
