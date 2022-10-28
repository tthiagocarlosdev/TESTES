var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`        ex062_matriz3x2`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

function criarMatriz(nLinha, nColuna){
  let matriz = []
  let array = []
  // let x = 1

  for(let i = 0; i < nLinha; i++){
    for(let j = 0; j < nColuna; j++){
      array.push(input.question(`Digite valor [${i}][${j}]: `))
      // array.push(x)
      // x += 1
    }
    matriz.push(array)
    array = []
  }
  return matriz
}

function mostrarMatriz(matriz){
  for(let i = 0; i < matriz.length; i++){
    console.log(matriz[i])
  }
}

//declaração de variáveis
let matriz3x2 = []
const NUMERO_DE_LINHAS = 3
const NUMERO_DE_COLUNAS = 2

//entrada de dados
cabecalho()
matriz3x2 = criarMatriz(NUMERO_DE_LINHAS, NUMERO_DE_COLUNAS)
console.clear()

//processamento e saida de dados
cabecalho()
mostrarMatriz(matriz3x2)
rodape()