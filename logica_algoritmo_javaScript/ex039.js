var readlineSync = require('readline-sync')
var valorMenor10 = 0
var somaImpar = 0
function header(){
    console.log('======================')
    console.log(' QUANTOS ENTRE 0 E 10 ')
    console.log('======================')
}

header()
for(let contador = 1; contador <= 6; contador++){
    var valores = Number(readlineSync.question(`Digite o ${contador}º valor: `))
    if(valores >= 0 && valores <= 10){
        valorMenor10++
        if(valores % 2 == 1){
            somaImpar += valores
        }
    }
}
console.log(`Foram digitados ${valorMenor10} valores entre 0 e 10!`)
console.log(`A soma dos valores ímpares entre 0 e 10 é igual a ${somaImpar}!`)