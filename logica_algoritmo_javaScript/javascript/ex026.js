var readlineSync = require('readline-sync')
console.log("=========================")
console.log(" CONVERSÃO MOEDA N VEZES ")
console.log("=========================")
var quantidadeConversao = readlineSync.question("Quantas vezes você quer converter? ")
contador = 1
while (contador <= quantidadeConversao){
    var valorReal = Number(readlineSync.question(`Digite seu ${contador}º valor em R$`))
    console.log(`Você tem ${(valorReal / 5.17).toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})}`)
    contador++
}
