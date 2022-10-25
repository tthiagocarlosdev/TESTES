var input = require('readline-sync')

//declaração de funções
function header(){
  console.log(`------------------------------`)
  console.log(`       ex048_somaFuncao`)
  console.log(`------------------------------`)
}

function somaValores(numberA, numberB){
    return numberA + numberB
}

//declaração de variáveis
let valorA = 0
let valorB = 0
let soma = 0

//entrada de dados
header()
valorA = Number(input.question("Digite um valor: "))
valorB = Number(input.question("Digite outro valor: "))
soma = somaValores(valorA, valorB)

//processamento e saída de dados
console.log(`A soma entre ${valorA} e ${valorB} é igual a ${soma}`)
console.log(`------------------------------`)