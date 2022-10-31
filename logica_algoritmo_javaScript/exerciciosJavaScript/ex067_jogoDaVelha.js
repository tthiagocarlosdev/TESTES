var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`      ex067_Jogo Da Velha`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

function criarMatriz(nLinha, nColuna){
  let matriz = []
  let array = []
  let x = 1

  for(let i = 0; i < nLinha; i++){
    for(let j = 0; j < nColuna; j++){
      array.push(`${x}`)
      x++
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
let matriz = []
const NUMERO_DE_LINHAS = 3
const NUMERO_DE_COLUNAS = 3
let jogadaX = 0
let jogada0 = 0


matriz = criarMatriz(NUMERO_DE_LINHAS, NUMERO_DE_COLUNAS)

cabecalho()
mostrarMatriz(matriz)
jogadaX = input.question(`Vai jogar [x] em qual posição? `)
verificaJogada(matriz, jogadaX)
jogada0 = input.question(`Vai jogar [0] em qual posição? `)
verificaJogada(matriz, jogada0)

function verificaJogada(matriz, jogada){
  for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz.length; j++){
      if(jogada == matriz[i][j]){
        matriz[i][j] = `x`
      } else if(jogada != matriz[i][j]){
        console.log(`Jogada inválida!`)
      }
    }
  }
  mostrarMatriz(matriz)
}



rodape()