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

function mostrarMatriz(matriz){
  console.log(matriz)
  for(let i = 0; i < matriz.lenght; i++){
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
let numeroDeLinhas = 3
let numeroDeColunas = 3
let matrizPar = []
let totalPar = 0

header()
matriz3x3 = criarMatriz(numeroDeLinhas, numeroDeColunas)
console.clear()
console.log(matriz3x3.length)
mostrarMatriz(matriz3x3)
totalPar = somaMatrizPar(matriz3x3)
matrizPar = matrizComPar(matriz3x3)


header()

mostrarMatriz(matrizPar, numeroDeLinhas)
console.log(`Total dos valores Pares: ${totalPar}`)
rodape()