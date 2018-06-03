const circle = require('./circle');
const rectangle = require('./rectangle');

function geometry (calc, fig, arg1, arg2) {
    if (fig == 'circle') {
        if(calc == 'area'){
            return circle.calculateAreaCircle(arg1)
        } else
        {
            return circle.calculatePerimeterCircle(arg1)
        }
    }

    if (fig == 'rectangle') {
        if (calc == 'area') {
            return rectangle.calculateAreaRectangle(arg1, arg2)
        }
        else {
            return rectangle.calculatePerimeterRectangle(arg1, arg2)
        }
    }
}

var resultado = geometry ('perimeter', 'rectangle', 40, 15);

console.log('resultado', resultado);