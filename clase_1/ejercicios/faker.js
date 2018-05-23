var Faker = require('faker');

for (var i = 0; i < 10 ; i++) {
  console.log(Faker.commerce.productName() + ": " + Faker.commerce.price())
}

var products = []

for (var i = 0; i < 10 ; i++) {
  var product = {}
  product[Faker.commerce.productName()] = Faker.commerce.price()
  products.push(product);
}

console.log(products);
