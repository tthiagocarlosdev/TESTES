var readlineSync = require('readline-sync')
function header(){
    console.log("============================")
    console.log("    FIBONACCI REFERENCIA    ")
    console.log("============================")
}
header()
const numberA = 0
const numberB = 1
function fibonacci(valorA, valorB){
    let valorC = 0
    let contador = 1
    while(contador <= 8){
        valorC = valorA + valorB
        valorA = valorB
        valorB = valorC
        console.log(`${valorC}`)
        contador++
    }
    
}
console.log(`${numberA}`)
console.log(`${numberB}`)
fibonacci(numberA, numberB)