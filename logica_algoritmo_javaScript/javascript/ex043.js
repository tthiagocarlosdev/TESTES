var readlineSync = require('readline-sync')

function header(){
    console.log("===========================")
    console.log(" PAR OU IMPAR PROCEDIMENTO ")
    console.log("===========================")
}
header()

function parOuImpar(valor){
    console.clear()
    header()
    if(valor % 2 == 0){
        console.log(`${valor} é par!`)
    } else {
        console.log(`${valor} é ímpar!`)
    }
}
var valor = readlineSync.question("Digite um valor: ")
parOuImpar(valor)
console.log("===========================")