var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`  ex055_valoresParesVetores2`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

//declaração de variáveis
const QTDE_VALORES = 7
let valores = []
let valorPar = 0

//entrada de dados
cabecalho()
for(let contador = 0; contador < QTDE_VALORES; contador++){
    valores[contador] = (input.question(`Digite o ${contador + 1}º valor: `))
}

//processamento de dados
for(let contador = 0; contador < QTDE_VALORES; contador++){
  if (valores[contador] % 2 == 0) {
    valorPar++
  }
}

//saída de dados
console.clear()
cabecalho()
console.log(`Foram digitados ${valorPar} valores pares!`)
rodape()
console.log("Posição => Valor Par: ")
for(let contador = 0; contador < QTDE_VALORES; contador++){
  if (valores[contador] % 2 == 0) {
    console.log(`${contador} => ${valores[contador]}`)
  }
}
rodape()