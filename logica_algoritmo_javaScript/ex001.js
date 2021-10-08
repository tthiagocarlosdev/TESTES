var readlineSync = require('readline-sync')
var nome = String(readlineSync.question("Olá, qual é o seu nome? "))
console.clear()
console.log(`Muito prazer ${nome}, seja bem-vindo!\n`)