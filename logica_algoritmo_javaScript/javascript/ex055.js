var readlineSync = require('readline-sync')
function header(){
    console.log("=========================")
    console.log("       ORDENA VETOR      ")
    console.log("=========================")
}

function getRandomIntInclusive(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function compararNumeros(a, b) {
    return a - b;
  }

var valor = []

header()
for(contador = 1; contador <= 10; contador++){
    valor[contador] = Number(getRandomIntInclusive(0, 100))
}

console.log("--------------------------")
console.log("Valores inseridos: ")
for(contador in valor){
    console.log(valor[contador])
}

//bubble sort
for(A = 1; A <= 10; A++){
    for(B = A+1; B <= 10; B++){
        if(valor[A] > valor[B]){
            let x = valor[A]            
            valor[A] = valor[B]
            valor[B] = x
        }
    }
}
//valor.sort(compararNumeros)
console.log("--------------------------")
console.log("Valores ordenados: ")
for(contador in valor){
    console.log(valor[contador])
}
console.log("=========================")