var readlineSync = require('readline-sync')
//var x = readlineSync.question('x:')
function header(){
    console.log('======================')
    console.log('  ESCOLHENDO PESSOAS  ')
    console.log('======================')
}
header()
console.log('Digite: ')
console.log('[1] Homem')
console.log('[2] Mulher')
var sexo = readlineSync.question('')
if( sexo == 1){
    
    console.log('Homem')
} else if (sexo == 2){
    console.log('Mulher')
}