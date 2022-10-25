var input = require('readline-sync')

//declaração de funções
function header(){
  console.log(`------------------------------`)
  console.log(`         ex057_soComC`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

//declaração de variáveis
const QTDE_DE_NOMES = 10
let nomesUsuarios = []
let nomesComC = []

//entrada de dados
header()
for(let contador = 0; contador < QTDE_DE_NOMES; contador++){
  nomesUsuarios[contador] = input.question(`Digite o ${contador + 1}º nome: `)
}

//processamento de dados
for(let contador = 0; contador < QTDE_DE_NOMES; contador++){
  if(nomesUsuarios[contador].toUpperCase().indexOf("C") == 0){
    nomesComC.push(nomesUsuarios[contador].toUpperCase())
  }
}

//saída de dados
console.clear()
header()
console.log("Nomes só com C")
rodape()
console.log(nomesComC)
rodape()