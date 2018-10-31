console.log('estoy en el modulo')

const fn = () => {
    let suma = 5 + 6

    console.log('suma', suma)
}

const otraFn = () => {
    console.log('otra fn')
}

module.exports = {fn, otraFn}
// fn();