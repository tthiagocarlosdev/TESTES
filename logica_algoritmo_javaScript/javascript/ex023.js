var readlineSync = require('readline-sync')
console.log("============================")
console.log(" CONTE DE 0 ATÉ ONDE QUISER ")
console.log("============================")
var valor = Number(readlineSync.question("Digite até quanto quer contar: "))
var pulo = Number(readlineSync.question("De quanto será o pulo? "))
console.clear()
console.log("============================")
console.log(" CONTE DE 0 ATÉ ONDE QUISER ")
console.log("============================")
var contador = 0
while(contador <= valor){
    console.log(`${contador}`)
    contador += pulo
}
console.log("============================")