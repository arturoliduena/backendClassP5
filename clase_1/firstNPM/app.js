var faker = require('faker');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); 

console.log('random', randomName, randomEmail, randomCard)



// for (var i = 0; i < 10 ; i++) {
//   console.log(Faker.commerce.productName() + ": " + Faker.commerce.price())
// }

// var products = []

// for (var i = 0; i < 10 ; i++) {
//   var product = {}
//   product[Faker.commerce.productName()] = Faker.commerce.price()
//   products.push(product);
// }

// console.log(products);
