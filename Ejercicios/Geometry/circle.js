function calculatePerimeterCircle (radio) {
    return 2 * Math.PI * radio;
}

function calculateAreaCircle (radio) {
    return Math.PI * Math.pow(radio, 2);
}

module.exports = {
    calculateAreaCircle,
    calculatePerimeterCircle
}