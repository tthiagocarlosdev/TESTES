var readlineSync = require('readline-sync')
var listaDeConvidados = ['THIAGO', 'JOAO', 'JUNIOR', 'SILVA', 'JOSE']
function header(){
    console.log('------------------------')
    console.log(' ex017_segurançaVirtual ')
    console.log('------------------------')
}

function verificar(nome){
    listaDeConvidados.includes(nome.toUpperCase()) === true ? console.log('Você pode entrar!'): console.log('Você não pode entrar!')
}

header()
let nomeConvidado = readlineSync.question('Qual é o seu nome? ')
console.clear()
header()
verificar(nomeConvidado)
console.log('------------------------')