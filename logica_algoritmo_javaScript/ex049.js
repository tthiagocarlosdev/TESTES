var readlineSync = require('readline-sync')
function header(){
    console.log("===========================")
    console.log("   ANALISADOR DE STRINGS   ")
    console.log("===========================")
}
header()
var name = String(readlineSync.question("Digite seu nome: "))
console.log("===========================")
console.log(`Seu nome tem ${name.replace(" ", "").length} letras.`)
console.log(`Seu nome em maiúsculo: ${name.toUpperCase()}`)
console.log(`Seu nome em minúsculo: ${name.toLowerCase()}`)
console.log(`A primeira letra do seu nome é: ${name.charAt()}`)
console.log(`A última letra do seu nome é: ${name.charAt(name.replace(" ", "").length)}`)
console.log(`A posição da letra 'a' é: ${name.indexOf("a")+1}`)
console.log(`O código ascii da letra 'a' é : ${name.charCodeAt(name.indexOf("a"))}`)
console.log(`O código ascii 65 corresponde a: ${String.fromCharCode(65)}`)

