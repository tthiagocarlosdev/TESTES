var readlineSync = require('readline-sync')
console.log("=====================")
console.log(" BANGU x MADUREIRA ")
console.log("=====================")
var bangu = Number(readlineSync.question("Placar do Bangu: "))
var madureira = Number(readlineSync.question("Placar do Madureira: "))
var diferenca = Math.abs(bangu - madureira)
var status = ""
console.clear()
if (diferenca === 0){
    status = "EMPATE"
} else if (diferenca <= 3){
    status = "NORMAL"
} else {
    status = "GOLEADA"
}
console.log("=====================")
console.log(" BANGU x MADUREIRA ")
console.log("=====================")
console.log("      PLACAR       ")
console.log(`Bangu ${bangu} x ${madureira} Madureira`)
console.log(`STATUS: ${status}`)
console.log("=====================")