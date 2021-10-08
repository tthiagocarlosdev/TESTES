var readlineSync = require('readline-sync')
console.log("===================")
console.log("    CÁLCULO IMC    ")
console.log("===================")
var peso = Number(readlineSync.question("Digite seu peso (kg): "))
var altura = Number(readlineSync.question("Digite a sua altura (m): "))
console.clear()
console.log("===================")
console.log("    CÁLCULO IMC    ")
console.log("===================")
var IMC = (peso / (altura * altura)).toFixed(2)
console.log(`Seu IMC é igual a ${IMC}`)
if(IMC >= 18.5 && IMC <= 25){
    console.log(`Seu peso está ideal!`)
} else {
    console.log(`Seu peso está fora do ideal!`)
}