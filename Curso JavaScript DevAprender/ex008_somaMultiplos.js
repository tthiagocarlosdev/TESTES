var readlineSync = require('readline-sync')

function header(){
    console.log('---------------------')
    console.log(' ex008_somaMultiplos ')
    console.log('---------------------')
}

function somarMultiplos(valor){
    let multiploTres = 0
    let multiploCinco = 0
    for(contador = 0; contador <= valor; contador++){
        if(contador % 3 === 0){
            multiploTres += contador
        }
        if(contador % 5 === 0){
            multiploCinco += contador
        }
    }
    return multiploTres + multiploCinco
}

header()
let numero = Number(readlineSync.question('Digite um número: '))
console.clear()
header()
console.log(`A soma dos Múltiplos de 3 e 5 é ${somarMultiplos(numero)}`)
console.log('---------------------')