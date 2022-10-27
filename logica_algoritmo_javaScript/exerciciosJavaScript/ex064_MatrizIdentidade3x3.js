var input = require('readline-sync')

//declaração de funções
function header(){
  console.log(`------------------------------`)
  console.log(`   ex064_MatrizIdentidade3x3`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

function mostrarMatriz(matriz){
  for(let i = 0; i < matriz.length; i++){
    console.log(matriz[i])
  }
}

function criarMatrizIdentidade(nLinha, nColuna){
  let matriz = []
  let array = []

  for(let i = 0; i < nLinha; i++){
    for(let j = 0; j < nColuna; j++){
      if(i == j){
        array.push(1)
      } else {
        array.push(0)
      }
    }
    matriz.push(array)
    array = []
  }
  return matriz
}

//declaração de variáveis
let matrizIdentidade = []
const NUMERO_DE_LINHAS = 3
const NUMERO_DE_COLUNAS = 3

//processamento de dados
matrizIdentidade = criarMatrizIdentidade(NUMERO_DE_LINHAS, NUMERO_DE_COLUNAS)

//saída de dados
header()
mostrarMatriz(matrizIdentidade)
rodape()
