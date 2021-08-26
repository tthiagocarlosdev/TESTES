var readlineSync = require('readline-sync')
console.log("=========================")
console.log("       CÁLCULO IMC       ")
console.log("=========================")

var peso = Number(readlineSync.question("Digite seu peso (kg): "))
var estatura = Number(readlineSync.question("Digite sua altura (m): "))
var imc = (peso / (estatura * estatura))
var status = ``

if (imc < 17) {
    status = `MUITO ABAIXO DO PESO`
} else if (imc < 18.5) {
    status = `ABAIXO DO PESO`
} else if (imc < 25) {
    status = `PESO IDEAL`
} else if (imc < 30) {
    status = `SOBREPESO`
} else if (imc < 35) {
    status = `OBESIDADE`
} else if (imc < 40) {
    status = `OBESIDADE SEVERA`
} else {
    status = `OBESIDADE MORBIDA`
}

console.clear()
console.log("=========================")
console.log("       CÁLCULO IMC       ")
console.log("=========================")
console.log(`Seu IMC é igual a ${imc.toFixed(2)}`)
console.log(`STATUS: ${status}!`)
console.log("=========================")