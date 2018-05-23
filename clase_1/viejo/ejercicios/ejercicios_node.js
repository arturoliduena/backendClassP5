// crea una funcion llamada echo que tome dos argumentos: una palabra y un numero, e imprima en la consola la palabra ese numero de veces
// ej.  echo("vamo vamo la acade", 10) deberia imprimir 10 veces eso en la consola

function echo(palabra, numero) {
	// para repetir uso un for
	for (var i = 0; i < numero; i++) {
		// escribir la palabra en cada vuelta
		console.log(palabra);
	}
}

echo("Vamo vamo la acadee", 10);

// crea una funcion llamada promedio que tome un arreglo de numeros como parametro y devuelva su promedio redondeado al numero entero mas cercano

function promedio(array) {
	// recorro el array
	var suma = 0
	for (var i = 0; i < array.length; i++) {
		suma = suma + array[i]
	}
	return Math.round(suma	/ array.length)
}

console.log(promedio([2,5,9]));