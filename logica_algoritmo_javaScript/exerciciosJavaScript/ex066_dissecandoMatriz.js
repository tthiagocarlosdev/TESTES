var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`    ex066_dissecandoMatriz`)
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
    //   array.push(input.question(`Digite valor [${i}][${j}]: `))
      array.push(getRandomIntInclusive(10, 99))
    }
    matriz.push(array)
    array = []
  }
  return matriz
}

function menu(){
    console.log("Escolha: ")
    console.log("[1] Matriz completa")
    console.log("[2] Diagonal Esquerda-Direita")
    console.log("[3] Triângulo Superior Direito")
    console.log("[4] Triângulo Inferior Esquerdo")
    console.log("[5] Diagonal Direita-Esquerda")
    console.log("[6] Triângulo Inferior Direito")
    console.log("[7] Triângulo Superior Esquerdo")
    console.log("[8] Gerar outra Matriz")
    console.log("[9] Encerrar Programa")
}

function mostrarMatriz(matriz){
  for(let i = 0; i < matriz.length; i++){
    console.log(matriz[i])
  }
}

function mostrarDiagonalTriangulo(matriz, numero){
    let matrizTSE = []
    let array = []
    let condicao = 0
    let diagonalEsquerdaDireita = numero == 2
    let trianguloSuperiorDireito = numero == 3
    let trianguloInferiorEsquerdo = numero == 4
    let diagonalDireitaEsquerda = numero == 5
    let trianguloInferiorDireito = numero == 6
    let trianguloSuperiorEsquerdo = numero == 7

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz.length; j++){

            if(diagonalEsquerdaDireita){
                condicao = i == j
            } else if(trianguloSuperiorDireito){
                condicao = j > i
            } else if(trianguloInferiorEsquerdo){
                condicao = i > j
            } else if(diagonalDireitaEsquerda){
                condicao = i + j == matriz.length - 1
            }else if(trianguloInferiorDireito){
                condicao = i + j >= matriz.length
            }else if(trianguloSuperiorEsquerdo){
                condicao = i + j < matriz.length - 1
            }

            if( condicao ){
                array.push(matriz[i][j])
            } else {
                array.push(``)
            }
        }
        matrizTSE.push(array)
        array = []
    }
    mostrarMatriz(matrizTSE)
}

//delaração de variáveis
let matriz4x4 = []
const NUMERO_DE_LINHAS = 4
const NUMERO_DE_COLUNAS = 4
let escolha = 0

//entrada de dados
cabecalho()
matriz4x4 = criarMatriz(NUMERO_DE_LINHAS, NUMERO_DE_COLUNAS)
console.clear()

// Processamento e saída de dados
do {
    cabecalho()
    menu()
    escolha = Number(input.question())

    switch (escolha) {
        case 1:
            console.clear()
            cabecalho()
            mostrarMatriz(matriz4x4)
        break;
        case 2:
            console.clear()
            cabecalho()
            mostrarDiagonalTriangulo(matriz4x4, 2)
        break;
        case 3:
            console.clear()
            cabecalho()
            mostrarDiagonalTriangulo(matriz4x4, 3)
        break;
        case 4:
            console.clear()
            cabecalho()
            mostrarDiagonalTriangulo(matriz4x4, 4)
        break;
        case 5:
            console.clear()
            cabecalho()
            mostrarDiagonalTriangulo(matriz4x4, 5)
        break;
        case 6:
            console.clear()
            cabecalho()
            mostrarDiagonalTriangulo(matriz4x4, 6)
        break;
        case 7:
            console.clear()
            cabecalho()
            mostrarDiagonalTriangulo(matriz4x4, 7)        
        break;
        case 8:
            console.clear()
            cabecalho()
            matriz4x4 = criarMatriz(NUMERO_DE_LINHAS, NUMERO_DE_COLUNAS)
            console.clear()
            cabecalho()
            console.log(`Nova matriz criada!`)
        break;
        case 9:
            console.clear()
            cabecalho()
            console.log(`Programa encerrado!`)
            rodape()
        break;
        default:
            console.clear()
            cabecalho()
            console.log(`Número inválido!`)
        break;
    }
    
} while (escolha != 9)