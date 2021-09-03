var readlineSync = require('readline-sync')
console.log("=====================")
console.log(" SOMADOR NUMÉRICO ")
console.log("=====================")
var contador = 1
var somaValor = 0
while (contador <= 5) {
    somaValor += Number(readlineSync.question(`Digite o ${contador}º valor: `))
    contador++
}
console.clear()
console.log("=====================")
console.log(" SOMADOR NUMÉRICO ")
console.log("=====================")
console.log(`Total dos valores: ${somaValor}`)
console.log("=====================")