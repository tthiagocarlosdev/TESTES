var readlineSync = require('readline-sync')
var array = []
function header(){
    console.log("=======================")
    console.log("      TESTE VETOR      ")
    console.log("=======================")
}
header
for(contador = 1; contador <= 6; contador++){
    array.push(readlineSync.question(`Digite o ${contador}º valor: `))        
}
console.clear()
header()
for(contador = 0; contador <= 5; contador++){
    console.log(array[contador])
}
console.log("=======================")