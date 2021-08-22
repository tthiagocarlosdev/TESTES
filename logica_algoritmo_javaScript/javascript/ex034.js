var readlineSync = require('readline-sync')

function header(){
    console.log(`--------------------`)
    console.log(`   SUPER CONTADOR   `)
    console.log(`--------------------`)
}

function input(){
    console.log(`Escolha: `)
    console.log(`[1] contar de 0 a 10`)
    console.log(`[2] contar de 10 a 0`)
    console.log(`[3] cancelar`)
    return escolha = (readlineSync.question(''))
}

function valida_numero(numero){
    while(numero != '1' && numero != '2' && numero != '3'){
        console.clear()
        header()
        console.log(`[ERROR] Digite um número válido!`)       
        var numero = input()
    }
    A = Number.parseInt(numero)
    return A
}

header()
var opcao = input()
var x = valida_numero(opcao)

console.clear()
header()

if(x == 1){
    contador = 0
    do{
        console.log(`${contador}`)
        contador++
    } while (contador <= 10)
    console.log(`FIM`)
    console.log(`--------------------`)
} else if (x == 2){
    contador = 10
    do{
        console.log(`${contador}`)
        contador--
    } while (contador >=0)
    console.log(`FIM`)
    console.log(`--------------------`)
} else if (x == 3){
    console.log(`PROGRAMA ENCERRADO!`)
    console.log(`--------------------`)
}

