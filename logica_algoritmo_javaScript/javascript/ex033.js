var readlineSync = require('readline-sync')
function header(){
    console.log(`--------------------`)
    console.log(`    NUMERO PRIMO    `)
    console.log(`--------------------`)
}
header()
var numero = Number(readlineSync.question('Digite um número: '))
var contador = numero
var ehPrimo = 0
do{
    if(numero % contador == 0){
        ehPrimo++
    }
    contador--
} while (contador > 0)
console.clear()
header()
if(ehPrimo == 2){
    console.log(`O número ${numero} é Primo!`)
} else {
    console.log(`O número ${numero} não é Primo!`)
}
console.log(`--------------------`)