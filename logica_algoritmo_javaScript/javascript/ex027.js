var readlineSync = require('readline-sync')
console.log("=========================")
console.log("  CONTADOR INTELIGENTE:  ")
console.log("=========================")
var inicio = Number(readlineSync.question("Digite o valor inicial: "))
var final = Number(readlineSync.question("Digitte o valor final: "))
console.clear()
console.log("=========================")
console.log("  CONTADOR INTELIGENTE:  ")
console.log("=========================")
if (inicio < final){
    while(inicio <= final){
        console.log(`${inicio}`)
        inicio++
    }
} else if (inicio > final){
    while (inicio >= final){
        console.log(`${inicio}`)
        inicio--
    }
} else {
    console.log(`Valores iguais!`)
}
console.log("=========================")