var readlineSync = require('readline-sync')
console.log("===================")
console.log("    PAR OU ÍMPAR   ")
console.log("===================")
var numero = Number(readlineSync.question("Digite um número: "))
console.log("===================")
if(numero % 2 == 0){
    console.log(`${numero} é PAR!`)
} else {
    console.log(`${numero} é ÍMPAR!`)
}
console.log("===================")