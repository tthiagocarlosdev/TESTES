var readlineSync = require('readline-sync')
function header(){
    console.log("===========================")
    console.log("      PAR IMPAR FUNÇÃO     ")
    console.log("===========================")
}
function parOuImpar(valor){
    if(valor % 2 == 0){
        return `PAR`
    } else {
        return `IMPAR`
    }
}
header()
var numero = Number(readlineSync.question("Digite um valor: "))
parOuImpar(numero)
console.log(`O valor ${numero} é ${parOuImpar(numero)}`)
console.log("===========================")