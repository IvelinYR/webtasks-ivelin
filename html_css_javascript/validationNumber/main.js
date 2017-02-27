function validateFraction() {
    const number = document.getElementById('number').value
     if(isFractionValid(number)) {
         document.getElementById('answer').innerHTML = 'Number is CORECT'
         document.getElementById('answer').style.color = 'green'
     }else{
         document.getElementById('answer').innerHTML = 'Number is INCORECT'
         document.getElementById('answer').style.color = 'red'
     }
}

function isFractionValid(value) {
    const re = new RegExp(/^-?[0-9]{1,10}([,.][0-9]{1,5})?$/)
    return re.test(value);
}