var input = require('readline-sync')

//declaração de funções
function header(){
  console.log(`------------------------------`)
  console.log(`    ex059_campeonatoFutebol`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}


// declaração de variáveis
let quantidadeDeTimes = 0
let listaDeTimes = []

//entrada de dados
header()
quantidadeDeTimes = Number(input.question("Informe a quantidade de times: "))
rodape()
for(let contador = 0; contador < quantidadeDeTimes; contador++){
  listaDeTimes[contador] = input.question(`Digite o ${contador + 1}º time: `)
}

//processamento e saída de dados
console.clear()
header()
console.log(" Tabela Final")
rodape()
for(let timeA = 0; timeA < quantidadeDeTimes; timeA++){
  for(let timeB = 0; timeB < quantidadeDeTimes; timeB++){
    if(timeA != timeB){
      console.log(`${listaDeTimes[timeA]} x ${listaDeTimes[timeB]}`)
    }      
  }   
}
rodape()