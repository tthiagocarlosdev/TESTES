var readlineSync = require('readline-sync')
var string = ""
var somaValores = 0
var divisivelPorCinco = 0
var nulo = 0
var somaPar = 0
function header(){
    console.log('=======================')
    console.log(' ANALISADOR DE VALORES ')
    console.log('=======================')
}
header()

for(contador = 1; contador <= 5; contador++){
    var valores = Number(readlineSync.question(`Digite o ${contador}º valor: `))
    string += " " + valores
    somaValores += valores
    if(valores % 5 == 0){
        divisivelPorCinco++
    }
    if(valores === 0){
        nulo++
    }
    if(valores % 2 == 0){
        somaPar += valores
    }
}
console.clear()
header()
console.log(`Valores digitados ${string}`)
console.log(`A soma dos valores é igual a ${somaValores}`)
console.log(`A média entre os valores é igual a ${(somaValores / (contador - 1))}`)
console.log(`Valores divisíveis por 5: ${divisivelPorCinco}`)
console.log(`Valores nulos: ${nulo}`)
console.log(`A soma dos valores pares é igual a ${somaPar}`)
console.log('=======================')
