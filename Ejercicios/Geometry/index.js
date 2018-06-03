const circle = require('./circle');
const rectangle = require('./rectangle');

console.log('init app', circle, rectangle);

let circleArea = circle.calculateAreaCircle(5);
let circlePerimeter = circle.calculatePerimeterCircle(6);
let rectangleArea = rectangle.calculateAreaRectangle(2, 2);
let rectanglePerimeter = rectangle.calculatePerimeterRectangle(5, 5);
console.log('result', circleArea, circlePerimeter, rectangleArea, rectanglePerimeter)