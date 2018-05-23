// crear fecha actual
var today = new Date();
console.log(new Date().getDate())
// si la fecha actual es posterior a la navidad de este año sumar un año a la fecha de la proxima navidad
if (today.getMonth() === 11 && today.getDate() > 25) {
  var nextChristmas = new Date(today.getFullYear() +1, 11, 25);
} else {
  var nextChristmas = new Date(today.getFullYear(), 11, 25);
}

// restarle la fecha actual a la fecha de la proxima navidad - JavaScript devuelve el resultado en milisegundos
var millisecondsTillChristmas = nextChristmas - today

// pasar el resultado de milisegundos a días
// definir cuantos milisegundos hay en un dia (hay 1000 milisegundos por segundo)
var millisecondsInADay = 1000 * 60 * 60 * 24

// dividir los milisegundos restantes para navidad por la cantidad de milisegundos en un dia
var daysTillChristmas = Math.floor(millisecondsTillChristmas / millisecondsInADay)

console.log(daysTillChristmas + " days until next christmas")
