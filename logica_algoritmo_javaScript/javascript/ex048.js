var readlineSync = require('readline-sync')
function header(){
    console.log("========================")
    console.log("    FIBONACCI FUNÇÃO    ")
    console.log("========================")
}
function fibonacci(valorA, valorB){
        let string = " "
        for(contador = 1; contador <= 8; contador++){
            valorC = valorA + valorB
            valorA = valorB
            valorB = valorC
            string += valorC + " "
        }
        return string
        
        
}
header()
var numeroA = Number(readlineSync.question("Digite um valor: "))
var numeroB = Number(readlineSync.question("Digite outro valor: "))
console.clear()
header()
var meuFibonacci = numeroA+" "+numeroB
meuFibonacci += fibonacci(numeroA, numeroB)
console.log(meuFibonacci)
console.log("========================")