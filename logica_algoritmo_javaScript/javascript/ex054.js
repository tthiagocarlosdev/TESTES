var readlineSync = require('readline-sync')

function header(){
    console.log("=========================")
    console.log("         SÓ COM C        ")
    console.log("=========================")
}

var nome = ""
var nomes = []

header()
for(contador = 1; contador <= 10; contador++){
    nome = readlineSync.question(`Digite o ${contador}º nome: `)
    if(nome.toUpperCase().indexOf("C") == 0){
        nomes[contador] = nome
    }
}

console.clear()
header()
console.log("Nomes só com C")
console.log("-------------------------")
for(contador in nomes){
    console.log(`${contador}º: ${nomes[contador]}`)
}
console.log("=========================")