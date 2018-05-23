var _ = require('underscore');

var arreglo = ['a', 'b', 'c']

// console.log(_)
console.log( _.first(arreglo) )
console.log( _.last(arreglo) )

var beatles = ['John', 'Paul', 'Ringo', 'el otro..']
console.log( _.rest(beatles, 2) )

// FILTER
var arreglo2 = [1, 2, 3, 4, 5, 6]
console.log( _.filter(arreglo2, function(num){ return num % 2 == 0; }))


var beatlesInfo = [
	{
		nombre: "John",
		rol: 'Cantante',
		esImpostor: false,
		fortuna: 100000000
	},
	{
		nombre: "Paul",
		rol: 'Bajista/cantante',
		esImpostor: true,
		fortuna: 34537000
	},
	{
		nombre: "Ringo",
		rol: 'Batero',
		esImpostor: false,
		fortuna: 4
	}
]

console.log( _.filter(beatlesInfo, function(objeto) { 
	return objeto.esImpostor === true 
})  )


var sum = _.reduce(beatlesInfo, function(memo, beatle){ return memo + beatle.fortuna; }, 0);

console.log(sum)