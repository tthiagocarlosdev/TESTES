var input = require('readline-sync')

//declaração de funções
function header(){
  console.log(`------------------------------`)
  console.log(`     ex049_parImparFuncao`)
  console.log(`------------------------------`)
}

function parOuImpar(valor){
    if(valor % 2 == 0){
        return `PAR`
    } else {
        return `IMPAR`
    }
}

//declaração de variáveis
let numero = 0 

//entrada de dados
header()
numero = Number(input.question("Digite um valor: "))

//processamento  saída de dados
console.log(`O valor ${numero} é ${parOuImpar(numero)}`)
console.log(`------------------------------`)