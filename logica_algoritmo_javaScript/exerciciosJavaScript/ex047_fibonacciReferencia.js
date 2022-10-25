//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`   ex047_fibonacciReferencia`)
  console.log(`------------------------------`)
}

function fibonacci(valorA, valorB){
  let valorC = 0
  let contador = 1
  while(contador <= 8){
    valorC = valorA + valorB
    valorA = valorB
    valorB = valorC
    console.log(`${valorC}`)
    contador++
  }
  
}

//declaração de variáveis
const numberA = 0
const numberB = 1

//saída de dados
cabecalho()
console.log(`${numberA}`)
console.log(`${numberB}`)
fibonacci(numberA, numberB)