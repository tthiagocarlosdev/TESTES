var input = require('readline-sync')

//declaração de funções
function header(){
  console.log(`------------------------------`)
  console.log(`   ex054_valoresParesVetores`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

//declaração de variáveis
const QTDE_VALORES = 7
var valores = []
var valorPar = 0

//entrada de dados
header()
for(let contador = 0; contador < QTDE_VALORES; contador++){
  valores[contador] = input.question(`Digite o ${contador + 1}º valor: `)
}

//processamento de dados
for(let contador = 0; contador < QTDE_VALORES; contador++){
  if (valores[contador] % 2 == 0) {
    valorPar++
  }
}

//saída de dados
console.clear()
header()
console.log("Valores digitados: ")
console.log(valores)
rodape()
console.log(`Foram digitados ${valorPar} valores pares!`)
rodape()