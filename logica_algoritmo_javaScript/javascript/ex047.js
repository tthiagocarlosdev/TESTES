var readlineSync = require('readline-sync')
function header(){
    console.log("=======================")
    console.log("    FATORIAL FUNÇÃO    ")
    console.log("=======================")
}
function fatorial(valor){
    contador = valor
    var fatorial = 1
    do{
        fatorial *= contador
        contador--
    }while(contador > 0)
    return fatorial
}

header()
var numero = Number(readlineSync.question("Digite um número: "))
console.log(`O fatorial de ${numero} é igual a ${fatorial(numero)}`)
console.log("=======================")