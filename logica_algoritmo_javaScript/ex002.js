var readlineSync = require('readline-sync')
var number1 = Number(readlineSync.question("Digite o primeiro número: "))
console.clear()
var number2 = Number(readlineSync.question("Digite o segundo número: "))
console.clear()
console.log(`A soma entre ${number1} e ${number2} é igual a ${number1 + number2}`)