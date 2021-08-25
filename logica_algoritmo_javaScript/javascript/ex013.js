var readlineSync = require('readline-sync')
console.log("===================")
console.log("   APTO CARTEIRA   ")
console.log("===================")
var anoNascimento = Number(readlineSync.question("Digite seu ano de nascimento [yyyy]: "))
var agora = new Date()
var anoAtual = agora.getFullYear()
var idade = anoAtual - anoNascimento
console.clear()
console.log("===================")
console.log("   APTO CARTEIRA   ")
console.log("===================")
console.log(`Sua idade é ${idade} anos!`)
if(idade >= 18){
    console.log("STATUS: Apto a tirar a Carteira!")
} else{
    console.log("STATUS: Inapto a tirar a Carteira!")
}
console.log("===================")