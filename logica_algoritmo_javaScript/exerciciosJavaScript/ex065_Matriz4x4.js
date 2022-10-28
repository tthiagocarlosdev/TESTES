var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`       ex065_Matriz4x4`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

function getRandomIntInclusive(min, max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function criarMatriz(nLinha, nColuna){
  let matriz = []
  let array = []

  for(let i = 0; i < nLinha; i++){
    for(let j = 0; j < nColuna; j++){
      // array.push(input.question(`Digite valor [${i}][${j}]: `))
      array.push(getRandomIntInclusive(10, 99))
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

function somaDiagonalPrincipal(matriz){
  let somaValores = 0
  for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz.length; j++){
      if(i == j){
        somaValores += Number(matriz[i][j])
      }
    }
  }
  return somaValores
}

function produtoSegundaLinha(matriz){
  let produtoValores = 0
  for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz.length; j++){
      if(i == 1){
        produtoValores += Number(matriz[i][j])
      }
    }
  }
  return produtoValores
}

function maiorValorTerceiraColuna(matriz){
  let maiorValor = 0
  for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz.length; j++){
      if(j == 2){
        if(maiorValor < Number(matriz[i][j])){
          maiorValor = Number(matriz[i][j])
        }
      }
    }
  }
  return maiorValor
}

//declaração de variáveis
let matriz4x4 = []
const NUMERO_DE_LINHAS = 4
const NUMERO_DE_COLUNAS = 4
let somaDaDiagonalPrincipal = 0
let produtoDaSegundaLinha = 0
let maiorValorDaTerceiraColuna = 0

//entrada dos dados
cabecalho()
matriz4x4 = criarMatriz(NUMERO_DE_LINHAS, NUMERO_DE_COLUNAS)

//processamento dos dados
somaDaDiagonalPrincipal = somaDiagonalPrincipal(matriz4x4)
produtoDaSegundaLinha = produtoSegundaLinha(matriz4x4)
maiorValorDaTerceiraColuna = maiorValorTerceiraColuna(matriz4x4)

//saída dos dados
console.clear()
cabecalho()
mostrarMatriz(matriz4x4)
rodape()
console.log(`Soma da diagonal principal: ${somaDaDiagonalPrincipal}`)
console.log(`Produto da segunda linha: ${produtoDaSegundaLinha}`)
console.log(`Maior valor da terceira coluna: ${maiorValorDaTerceiraColuna}`)
rodape()