const fs = require('fs')

// fs.writeFileSync('./file.txt', 'hola')

// fs.appendFile('./file.txt', 'chao', (err, res) => console.log(err, res))

fs.readFile('./file.txt', 'utf-8', (err, res) => console.log(err, res))

console.log('linea 9')