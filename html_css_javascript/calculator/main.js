function validateSign(value) {
    let input = document.Calculator.display.value
    let check = input.substr(input.length - 1)
    if(input.length == 0){
        return
    }
    else if (check == '+'|| (check == '-')|| (check == '*') || (check == '/') ||(check == '.')){
        return
    }else
        {
            document.Calculator.display.value += value
    }
}

function onDotPressed() {
    let current = document.Calculator.display.value
    let separators = ['\\\+', '-', '\\*', '/']
    let tokens = current.split(new RegExp(separators.join('|'), 'g'))
    let splited = tokens[tokens.length-1]

    if ( current.length == 0) {
        document.Calculator.display.value = '0.'
    }
    else if ( splited.indexOf(".") !== -1) {
       return
    }

    validateSign('.')
}

function btnPlus() {
    validateSign('+')
}

function btnSub() {
    validateSign('-')
}

function btnMult() {
    validateSign('*')
}

function btnDiv () {
    validateSign('/')
}

function clearAll() {
    document.Calculator.display.value = ''
    document.Calculator.display.style.textAlign = 'right'
}
function deleteLastDigit () {
    let makeDelete = document.Calculator.display.value
    let newDel = makeDelete.substring(0, makeDelete.length - 1)
    document.Calculator.display.value = newDel
    document.Calculator.display.style.textAlign = 'right'
}
