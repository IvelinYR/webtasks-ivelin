function validateIsNumber(value) {
    let isString = /^-?\d+\.?\d*$/.test(value)
    if (isString) {
        return true
    }
}

function sum(arrey) {
    let sum = 0
    for (let x of arrey) {
        if (validateIsNumber(x)) {
            sum += Number(x)
        } else {
            return "Error"
        }
    }
    return sum
}

function multiplication(arrey) {
    let mult = 1
    for (let x of arrey) {
        if (validateIsNumber(x)) {
            mult *= Number(x)
        }
        else {
        return "Error"
        }
    }
    return mult
}

function division(arrey) {
    let result = arrey[0]
    for (let i = 0; i < arrey.length; i++) {
        let currentSymbol = (arrey[i])

        if (arrey[i + 1] == 0){
            return "Error"
        }
        else if (validateIsNumber(currentSymbol) && arrey[i + 1] != undefined ) {
            result /= Number(arrey[i + 1])
        }
        else if(!(validateIsNumber(currentSymbol))){
            return "Error"
        }
    }
    return result
}

function subtraction(arrey) {
    let result = arrey[0]
    for (let i = 0; i < arrey.length; i++) {
        let currentSymbol = (arrey[i])

        if (validateIsNumber(currentSymbol) && arrey[i + 1] != undefined ) {
            result -= Number(arrey[i + 1])
        }
        else if (!(validateIsNumber(currentSymbol))) {
            return "Error"
        }
    }
    return result
}

export {sum, division, multiplication, subtraction}