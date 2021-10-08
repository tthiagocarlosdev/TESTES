var readlineSync = require('readline-sync')
console.log("--------------------")
console.log("    MAIOR NÚMERO    ")
console.log("--------------------")

function maiorNumero(valorA, valorB){
    return valorA > valorB ? valorA : valorB
}

var numeroA = Number(readlineSync.question("Digite um número: "))
var numeroB = Number(readlineSync.question("Digite outro número: "))

console.log("--------------------")
console.log(`Maior valor: ${maiorNumero(numeroA, numeroB)}`)
console.log("--------------------")

