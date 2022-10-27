var input = require('readline-sync')

//declaração de funções
function header(){
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

function mostrarMatriz(matriz, linha){
  for(let i = 0; i < linha; i++){
    console.log(matriz[i])
  }
}

function matrizComPar(matriz, nLinha, nColuna){
  for(let i = 0; i < nLinha; i++){
    for(let j = 0; j < nColuna; j++){
      if(Number(matriz[i][j]) % 2 == 0){
        matriz[i][j] = `(${matriz[i][j]})`
      }
    } 
  }
  return matriz
}

function somaMatrizPar(matriz, nLinhas, nColunas){
  let soma = 0
  for(let i = 0; i < nLinhas; i++){
    for(let j = 0; j < nColunas; j++){
      if(Number(matriz[i][j]) % 2 == 0){
        soma++ 
      }
    } 
  }
  return soma
}

//declaração de variáveis
let matriz3x3 = []
let numeroDeLinhas = 3
let numeroDeColunas = 3
let matrizPar = []
let totalPar = 0

//entrada de dados
header()
matriz3x3 = criarMatriz(numeroDeLinhas, numeroDeColunas)
console.clear()

//processamento de dados
totalPar = somaMatrizPar(matriz3x3, numeroDeLinhas, numeroDeColunas)
matrizPar = matrizComPar(matriz3x3, numeroDeLinhas, numeroDeColunas)

//saída de dados
header()
mostrarMatriz(matrizPar, numeroDeLinhas)
rodape()
console.log(`Total dos valores Pares: ${totalPar}`)
rodape()