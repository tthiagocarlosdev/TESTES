var readlineSync = require('readline-sync')
function header(){
    console.log("========================")
    console.log("    FIBONACCI FUNÇÃO    ")
    console.log("========================")
}
function fibonacci(valorA, valorB){
        let contador = 0
        valorC = 0
        string = ""
        for(contador = 3; contador <= 10; contador++){
            valorC = valorA + valorB
            string += " "+valorC
            valorA = valorB
            valorB = valorC
            return string
        }
        
}
header()
var numeroA = Number(readlineSync.question("Digite um valor: "))
var numeroB = Number(readlineSync.question("Digite outro valor: "))
console.clear()
header()
var string = numeroA +" "+ numeroB
string += fibonacci(numeroA, numeroB)
console.log(string)



