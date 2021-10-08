var readlineSync = require('readline-sync')
console.log("=====================")
console.log(" SOMADOR MAIOR MENOR ")
console.log("=====================")
var contador = 1
var somaValor = 0
var maior = 0
var menor = 0
while (contador <= 5) {
    var valor = Number(readlineSync.question(`Digite o ${contador}º valor: `))
    if (valor > maior) {
        maior = valor
    }
    if(contador == 1){
        menor = valor
    }
    if(valor < menor){
        menor = valor
    }
    somaValor += valor
    contador++
}
console.clear()
console.log("=====================")
console.log(" SOMADOR MAIOR MENOR ")
console.log("=====================")
console.log(`Total dos valores: ${somaValor}`)
console.log(`Maior valor: ${maior}`)
console.log(`Menor valor: ${menor}`)
console.log("=====================")