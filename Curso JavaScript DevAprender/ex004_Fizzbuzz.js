var readlineSync = require('readline-sync')

console.log('--------------------')
console.log('      Fizzbuzz      ')
console.log('--------------------')

function fizzbuzz(valor){
    if(Number.isNaN(valor) === true) {
        return 'Não é um número!'
    } else if (valor % 3 === 0 && valor % 5 === 0) {
        return "FizzBuzz"
    } else if (valor % 5 === 0) {
        return "Buzz"
    } else if (valor % 3 === 0) {
        return "Fizz"
    } else {
        return valor
    }
}

var numero = Number(readlineSync.question("Insira um número: "))
console.log(`Mensagem: ${fizzbuzz(numero)}`)
console.log('--------------------')

/*
Number.isNaN() method
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
*/