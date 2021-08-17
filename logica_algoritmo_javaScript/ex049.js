var readlineSync = require('readline-sync')
function header(){
    console.log("===========================")
    console.log("   ANALISADOR DE STRINGS   ")
    console.log("===========================")
}
header()
var name = String(readlineSync.question("Digite seu nome: "))
console.log("===========================")
console.log(`Seu nome tem ${name.length} letras.`) 

