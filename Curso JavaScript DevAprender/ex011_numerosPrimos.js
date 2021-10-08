var readlineSync = require('readline-sync')

function header(){
    console.log('-------------------------')
    console.log('   ex011_numerosPrimos   ')
    console.log('-------------------------')
}

function numerosPrimos(limite){
    
    for(indice = 0; indice <= limite; indice++){
        let primo = 0
        for(contador = 0; contador <= limite; contador++){
            if(indice % contador === 0){
                primo++
            }
        }
        if(primo === 2){
            console.log(indice)
        }
    }
}


header()
var numero = Number(readlineSync.question('Digite o limite: '))
numerosPrimos(numero)
console.log('-------------------------')

/*
var readlineSync = require('readline-sync')

function header(){
    console.log('-------------------------')
    console.log('   ex011_numerosPrimos   ')
    console.log('-------------------------')
}

function numerosPrimos(limite){
    
    for(indice = 0; indice <= limite; indice++){
        if(ehPrimo(indice)) console.log(indice)
    }
}

function ehPrimo(numero){
    let primo = 0    
    for(contador = 0; contador <= numero; contador++){
        if(numero % contador === 0){
            primo++
        }
    }
    if(primo === 2){
        return true
    } else {
        return false
    }
}

header()
var numero = Number(readlineSync.question('Digite o limite: '))
numerosPrimos(numero)
console.log('-------------------------')
*/