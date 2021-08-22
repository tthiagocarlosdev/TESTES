var readlineSync = require('readline-sync')
function header(){
    console.log("===========================")
    console.log("        SOMA FUNÇÃO        ")
    console.log("===========================")
}
function soma(numberA, numberB){
    return numberA + numberB
}

header()
var valorA = Number(readlineSync.question("Digite um valor: "))
var valorB = Number(readlineSync.question("Digite outro valor: "))
console.log(`A soma entre ${valorA} e ${valorB} é igual a ${soma(valorA, valorB)}`)
console.log("===========================")