
var readlineSync = require('readline-sync')
function cabecalho(){
    console.log(`-------------------`)
    console.log(`  NÚMERO NEGATIVO  `)
    console.log(`-------------------`)
}
var numerosNegativos = 0
var contador = 1
do{
    cabecalho()
    var numero = Number(readlineSync.question(`Digite o ${contador}º número: `))
    if(numero < 0){
        numerosNegativos++
    }
    contador++
    console.clear()
}while(contador <= 5)
cabecalho()
console.log(`Foram digitados ${numerosNegativos} números negativos!`)
console.log(`-------------------`)