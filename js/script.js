'use strict'

const input = document.getElementById('tox')
const ansure = document.getElementById('result')

function number(num){
    switch(num){
        case 1:
            input.value += '1'
            break;
        case 2:
            input.value += '2'
            break;
        case 3:
            input.value += '3'
            break;
        case 4:
            input.value += '4'
            break;

        case 5:
            input.value += '5'
            break;
        case 6:
            input.value += '6'
            break;
        case 7:
            input.value += '7'
            break;
        case 8:
            input.value += '8'
            break;
         case 9:
            input.value += '9'
            break;
         case 0:
            input.value += '0'
            break;
            
    }
    
}

function operator(y){
    switch(y){
       
        case '←':
            input.value += '←'
            break;
        case '/':
            input.value += '/'
            break;

        case '*':
            input.value += '*'
            break;
        case '-':
            input.value += '-'
            break;
        case '+':
            input.value += '+'
            break;
        case '.':
            input.value += '.'
            break;
     
    }
}
function result(){
    ansure.value = eval(input.value)
}

function c (){
    input.value = ''
    ansure.value = ''
}





function sun(){
var x = document.getElementById('calculator2')
    x.style.background = 'white';
}

function moon(){
    var x = document.getElementById('calculator2')
    x.style.background = 'black';
}