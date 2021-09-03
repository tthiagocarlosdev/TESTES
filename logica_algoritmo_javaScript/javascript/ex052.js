var readlineSync = require('readline-sync')
function header(){
    console.log("================================")
    console.log("     VALORES PARES VETORES 2    ")
    console.log("================================")
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
console.log("Posição => Valor Par: ")
for(contador in valores){
    if(valores[contador] % 2 == 0){
        console.log(`\t${(Number(contador) + 1)}° => ${valores[contador]}`)
        valorPar++
    }
}
console.log("================================")
console.log(`Foram digitados ${valorPar} valores pares!`)
console.log("================================")
