/**
 * Created by clouway on 09.02.17.
 */
function validation(sing) {
    let value = document.Calculator.display.value
    let check = value.substr(value.length - 1)
    if(value.length == 0){
        return
    }
    else if (check == '+'|| (check == '-')|| (check == '*') || (check == '/') ||(check == '.')){
        return
    }else
        {
            document.Calculator.display.value += sing
    }
}

function point() {
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

    validation('.')
}

function btnPlus() {
    validation('+')
}

function btnSub() {
    validation('-')
}

function btnMult() {
    validation('*')
}

function btnDiv () {
    validation('/')
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
