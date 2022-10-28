var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`     ex061_reservarCinema`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

function cadeirasCinema(){
  cinema = ""
  for(c = 1; c <= QTDE_CADEIRAS; c++){
    cinema += `| ${reserva[c]}`
  }
  console.log(cinema)
}

function cadeiraReservada(numero){
  for(c = 1; c <= QTDE_CADEIRAS; c++){
    if(reserva[numero] == "#"){
      return false
    } else {
      return true
    }        
  }    
}

//declaração de variáveis
const QTDE_CADEIRAS = 10
let reserva = []
let cadeira = 0
let cinema = ""
let resposta = ""

//inserção de valores no array
for(c = 1; c <= QTDE_CADEIRAS; c++){
  reserva[c] = c
}

//cálculo do programa
do{
  cabecalho()
  cadeirasCinema()
  rodape()
  cadeira = Number(input.question("Informe uma cadeira: "))
  
  console.clear()
  while (cadeiraReservada(cadeira) == false) {
    console.clear()
    cabecalho()
    cadeirasCinema()
    rodape()
    console.log("Cadeira Reservada!")
    cadeira = Number(input.question("Informe uma cadeira: "))
  }

  for(c = 1; c <= QTDE_CADEIRAS; c++){
    if(reserva[c] == cadeira){
      reserva[cadeira] = "#"
    }   
  }
  
  console.clear()
  cabecalho()
  cadeirasCinema()
  rodape()

  resposta = input.question("Quer continuar? [s][n]: ")
  console.clear()
    
} while (resposta == "s")

//final do programa
console.clear()
cabecalho()
console.log("Programa encerrado!")
rodape()