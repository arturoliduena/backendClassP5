function calculatePerimeterRectangle (l1, l2) {
    return 2 * (l1 + l2)
}

function calculateAreaRectangle (l1, l2) {
    return l1 * l2
}

module.exports = {
    calculateAreaRectangle,
    calculatePerimeterRectangle
}