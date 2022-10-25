var input = require('readline-sync')

//declaração de funções
function header(){
  console.log(`------------------------------`)
  console.log(`   ex052_analisadorDeStrings`)
  console.log(`------------------------------`)
}

//declaração de variáveis
let name = ""

//entrada de dados
header()
name = String(input.question("Digite seu nome: "))

//processamento saída de dados
console.log(`------------------------------`)
console.log(`Seu nome tem ${name.replace(/ /g, "").length} letras.`)
console.log(`Seu nome em maiúsculo: ${name.toUpperCase()}`)
console.log(`Seu nome em minúsculo: ${name.toLowerCase()}`)
console.log(`A primeira letra do seu nome é: ${name.charAt()}`)
console.log(`A última letra do seu nome é: ${name.charAt(name.length - 1)}`)
console.log(`A posição da letra 'a' é: ${name.indexOf("a")+1}`)
console.log(`O código ascii da letra 'a' é : ${name.charCodeAt(name.indexOf("a"))}`)
console.log(`O código ascii 65 corresponde a: ${String.fromCharCode(65)}`)
console.log(`------------------------------`)