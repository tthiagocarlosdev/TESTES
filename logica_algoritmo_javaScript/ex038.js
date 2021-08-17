var readlineSync = require('readline-sync')
function header(){
    console.log('===================')
    console.log('   VALORES PARES   ')
    console.log('===================')
}
header()
var valor = Number(readlineSync.question('Digite um valor: '))
console.clear()
header()
console.log('CONTAGEM PROGRESSIVA')
for(let contador = 0; contador <= valor; contador += 2){
        console.log(`${contador}`)
}
console.log('CONTAGEM REGRESSIVA')
for(let contador = valor; contador >= 0; contador--){
    if(contador % 2 == 0){
        console.log(`${contador}`)
    }
}
console.log('===================')
console.log(`Valor digitado: ${valor}`)
console.log('===================')