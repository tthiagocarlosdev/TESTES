var readlineSync = require('readline-sync')
console.log("IDADE DE CREUZA")
var now = new Date()
var currentYear = now.getFullYear()
var yearOfBirth = Number(readlineSync.question("Digite seu ano de nascimento [yyyy]: "))
if(yearOfBirth > currentYear){
    console.log("[ERROR] Ano de nascimento inválido!")
} else {
    console.log(`Sua idade é ${currentYear - yearOfBirth} anos!`)
}