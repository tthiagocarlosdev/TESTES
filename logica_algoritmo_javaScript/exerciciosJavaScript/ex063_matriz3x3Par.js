var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`      ex063_matriz3x3Par`)
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

function matrizComPar(matriz){
  for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz.length; j++){
      if(Number(matriz[i][j]) % 2 == 0){
        matriz[i][j] = `(${matriz[i][j]})`
      }
    } 
  }
  return matriz
}

function somaMatrizPar(matriz){
  let soma = 0
  for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz.length; j++){
      if(Number(matriz[i][j]) % 2 == 0){
        soma++ 
      }
    } 
  }
  return soma
}

//declaração de variáveis
let matriz3x3 = []
const NUMERO_DE_LINHAS = 3
const NUMERO_DE_COLUNAS = 3
let matrizPar = []
let totalPar = 0

//entrada de dados
cabecalho()
matriz3x3 = criarMatriz(NUMERO_DE_LINHAS, NUMERO_DE_COLUNAS)
console.clear()

//processamento de dados
totalPar = somaMatrizPar(matriz3x3)
matrizPar = matrizComPar(matriz3x3)

//saída de dados
cabecalho()
mostrarMatriz(matrizPar)
rodape()
console.log(`Total dos valores Pares: ${totalPar}`)
rodape()