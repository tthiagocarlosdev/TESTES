var readlineSync = require('readline-sync')
function header(){ 
    console.log('------------------')
    console.log('    parOuImpar    ')
    console.log('------------------')    
}

function parImpar(valor){
    for(contador = 0; contador <= valor; contador++){
        if(contador % 2 === 0){
            console.log(`${contador} é PAR!`)
        } else {
            console.log(`${contador} é IMPAR!`)
        }    
    }    
    
}

header()
let numero = Number(readlineSync.question("Digite um número: "))
console.clear()
header()
parImpar(numero)

console.log('------------------')