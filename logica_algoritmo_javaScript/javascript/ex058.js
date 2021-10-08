var readlineSync = require('readline-sync')

//declaração de funções
function header(){
    console.log("=========================")
    console.log("      RESERVAR CINEMA    ")
    console.log("=========================")
}

function cadeirasCinema(){
    cinema = ""
    for(c = 1; c <= 10; c++){
        cinema += `| ${reserva[c]}`
    }
    console.log(cinema)
}

function cadeiraReservada(numero){
    for(c = 1; c <= 10; c++){
        if(reserva[numero] == "#"){
            return false
        } else {
            return true
        }        
    }    
}
//declaração de variáveis
var reserva = []
var cadeira = 0
var cinema = ""

//inserção de valores no array
for(c = 1; c <= 10; c++){
    reserva[c] = c
}

//cálculo do programa
do{
    header()
    cadeirasCinema()
    console.log("-------------------------")
    cadeira = Number(readlineSync.question("Informe uma cadeira: "))
    
    console.clear()
    while (cadeiraReservada(cadeira) == false) {
        console.clear()
        header()
        cadeirasCinema()
        console.log("-------------------------")
        console.log("Cadeira Reservada!")
        cadeira = Number(readlineSync.question("Informe uma cadeira: "))
    }

    
    for(c = 1; c <= 10; c++){
        if(reserva[c] == cadeira){
            reserva[cadeira] = "#"
        }   
    }
    
    console.clear()
    header()
    cadeirasCinema()
    console.log("=========================")

    var resposta = readlineSync.question("Quer continuar? [s][n]: ")
    console.clear()
    
} while (resposta == "s")

//final do programa
console.clear()
header()
console.log("Programa encerrado!")
console.log("=========================")