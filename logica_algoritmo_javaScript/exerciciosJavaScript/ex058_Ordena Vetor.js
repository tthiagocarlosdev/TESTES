var input = require('readline-sync')

//declaração de funções
function header(){
  console.log(`------------------------------`)
  console.log(`      ex058_Ordena Vetor`)
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

//declaração de variáveis
const QTDE_DE_VALORES = 10
let listaDeValores = []

header()
for(let contador = 0; contador < QTDE_DE_VALORES; contador++){
  // valor[contador] = Number(input.question(`Insira o ${contador + 1}º valor: `))
  listaDeValores[contador] = Number(getRandomIntInclusive(0, 100))
}

//saída de dados
console.clear()
header()
console.log("Valores inseridos: ")
for(let contador = 0; contador < QTDE_DE_VALORES; contador++){
  console.log(listaDeValores[contador])
}

//processamento de dados - bubble sort
for(let A = 0; A < QTDE_DE_VALORES; A++){
  for(let B = A+1; B < QTDE_DE_VALORES; B++){
    if(listaDeValores[A] > listaDeValores[B]){
      let x = listaDeValores[A]            
      listaDeValores[A] = listaDeValores[B]
      listaDeValores[B] = x
    }
  }
}

//saídad de dados
rodape()
console.log("Valores ordenados: ")
for(let contador = 0; contador < QTDE_DE_VALORES; contador++){
  console.log(listaDeValores[contador])
}
rodape()