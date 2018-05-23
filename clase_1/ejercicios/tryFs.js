var fs = require('fs');

fs.appendFile('input.txt', 'Hello content!!!!!!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());