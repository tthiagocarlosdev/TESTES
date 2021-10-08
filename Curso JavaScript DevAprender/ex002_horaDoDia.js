var readlineSync = require('readline-sync')
console.log('-------------------')
console.log('    HORA DO DIA    ')
console.log('-------------------')
let horaDoDia = readlineSync.question('Digite que horas são agora: ')

if(horaDoDia > 6 && horaDoDia < 12){
    console.log("Bom dia!")
} else if (horaDoDia > 12 && horaDoDia < 18){
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}
console.log('-------------------')