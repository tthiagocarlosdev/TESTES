var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`       ex053_testeVetor`)
  console.log(`------------------------------`)
}

//declaração de variáveis
var array = []

// entrada de dados
cabecalho()
for(contador = 0; contador <= 5; contador++){
    array[contador] = input.question(`Digite o ${contador+1}º valor: `)
}

//processamento e saída de dados
console.clear()
cabecalho()
for(contador = 0; contador <= 5; contador++){
    console.log(array[contador])
}
console.log(`------------------------------`)