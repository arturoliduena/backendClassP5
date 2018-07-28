const fs = require('fs');


fs.appendFileSync('input.txt', 'Hello content!', function (err) {
    
    if (err) console.log(err)

    console.log('Saved!')
})

var data = fs.readFileSync('input.txt');

console.log("data: " + data.toString());