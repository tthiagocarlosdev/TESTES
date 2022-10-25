var input = require('readline-sync')

//declaração de funções
function header(){
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

function mostrarMatriz(matriz, linha){
  for(let i = 0; i < linha; i++){
    console.log(matriz[i])
  }
}

//declaração de variáveis
let matriz3x2 = []
let numeroDeLinhas = 0
let numeroDeColunas = 0

header()
numeroDeLinhas = input.question(`Digite a quantidade de linha: `)
numeroDeColunas = input.question(`Digite a quantidade de coluna: `)
matriz3x2 = criarMatriz(numeroDeLinhas, numeroDeColunas)
console.clear()
header()
mostrarMatriz(matriz3x2, numeroDeLinhas)
rodape()