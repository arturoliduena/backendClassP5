function calculatePerimeterCircle (r) {
    return 2 * Math.PI * r
}

function calculateAreaCircle (r) {
    return Math.PI * Math.pow(r,2)
}

module.exports = { calculateAreaCircle, calculatePerimeterCircle }