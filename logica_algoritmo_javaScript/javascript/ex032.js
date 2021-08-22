var readlineSync = require('readline-sync')
function header(){
    console.log(`----------------------`)
    console.log(`  FATORIAL REPETICAO  `)
    console.log(`----------------------`)
}
do{
    header()
    var numero = Number(readlineSync.question(`Digite um valor: `))
    var contador = numero - 1
    var fatorial = numero
    do{
        fatorial *= contador
        contador--
    }while(contador != 0)
    console.clear()
    header()
    console.log(`O fatorial de ${numero} é igual a ${fatorial}`)
    console.log(`----------------------`)
    var repetir = (String(readlineSync.question(`Quer repetir? [s]-sim [n]-não:`)).toUpperCase())
    console.clear()
}while(repetir == "S")
header()
console.log(`Programa finalizado!`)
console.log(`----------------------\n`)