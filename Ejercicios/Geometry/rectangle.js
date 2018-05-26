function calculatePerimeterRectangle (ladoA, ladoB) {
    return 2 * (ladoA + ladoB);
}

function calculateAreaRectangle (ladoA, ladoB) {
    return ladoA * ladoB;
}

module.exports = {
    calculateAreaRectangle,
    calculatePerimeterRectangle
}