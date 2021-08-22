var readlineSync = require('readline-sync')
function cabecalho(){
    console.log(`----------------------`)
    console.log(`       TABUADA        `)
    console.log(`----------------------`)
}
cabecalho()

var valor = Number(readlineSync.question(`Digite um valor: `))
var contador = 1
do{    
    console.log(`${valor} x ${contador} = ${valor * contador}`)
    contador++
}while(contador <= 10)