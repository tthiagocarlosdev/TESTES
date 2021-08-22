var readlineSync = require('readline-sync')
function header(){
    console.log("=======================")
    console.log(" VALORES PARES VETORES ")
    console.log("=======================")
}

function itNumber(x){
    let ascii = x.charCodeAt(0)
    if(ascii < 48 || ascii > 57){
        return 'false'
    } else {
        return 'true'
    }
}
var valores = []
var valorPar = 0
var valor = 0

header()
for(contador = 1; contador <= 7; contador++){
    valor = (readlineSync.question(`Digite o ${contador}º valor: `))
    if(itNumber(valor) == 'false'){
        do{
            console.clear()
            valor = 0
            console.log("[ERROR] Digite um número válido!")
            valor = (readlineSync.question(`Digite o ${contador}º valor: `))
        }while(itNumber(valor) == 'false')
        
    }
    valores.push(Number(valor))
}

console.clear()

header()
console.log("Valores digitados: ")
for(contador in valores){
    console.log(`${valores[contador]}`)
}
console.log("=======================")
for(contador = 0; contador <= 6; contador++){
    if(valores[contador] % 2 == 0){
        valorPar++
    }
}
console.log(`Foram digitados ${valorPar} valores pares!`)
console.log("=======================")