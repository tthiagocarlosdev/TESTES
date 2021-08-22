var readlineSync = require('readline-sync')
var valor = 0
function header(){
    console.log('==================')
    console.log('   SOMA VALORES   ')
    console.log('==================')
}
for(let contador = 1;contador <= 5; contador++){
    header()
    valor += Number(readlineSync.question(`Digite o ${contador}º valor: `))
    console.clear()
}
header()
console.log(`A soma dos valores digitados é: ${valor}`)
console.log('==================')