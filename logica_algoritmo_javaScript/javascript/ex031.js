var readlineSync = require('readline-sync')
function header(){
    console.log(`------------------`)
    console.log(`     FATORIAL     `)
    console.log(`------------------`)
}
header()
var numero = Number(readlineSync.question(`Digite um valor: `))
var contador = numero - 1
var fatorial = numero
do{
    fatorial *= contador
    contador--
}while(contador != 0)
console.clear()
header()
console.log(`O fatorial de ${numero} é igual a ${fatorial}`)
console.log(`------------------`)