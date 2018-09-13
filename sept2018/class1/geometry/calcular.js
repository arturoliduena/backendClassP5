var rectangle = require('./rectangle.js');
var circle = require('./circle.js');

function calcular (arg1, arg2, arg3, arg4){
    if(arg2 == 'rectangulo'){
        if( arg1 == 'perímetro'){
            return rectangle.calculatePerimeterRectangle(arg3, arg4)
        }else if(arg1 == 'area'){
            return rectangle.calculateAreaRectangle(arg3, arg4)
        }else {
            return 'error'
        }
    }else if (arg2 == 'circulo'){
        if( arg1 == 'perímetro'){
            return circle.calculatePerimeterCircle(arg3)
        }else if(arg1 == 'area'){
            return circle.calculateAreaCircle(arg3)
        }else {
            return 'error este es el error de la funcion'
        }
    }else {
        return 'error'
    }
}

module.exports = calcular