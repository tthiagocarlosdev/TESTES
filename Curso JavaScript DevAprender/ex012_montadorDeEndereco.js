var readlineSync = require('readline-sync')
function header(){
    console.log('--------------------------')
    console.log(' ex012_montadorDeEndereco ')
    console.log('--------------------------')
}

function exibirEndereco(endereco){
    for(let indice in endereco){
        console.log(indice, endereco[indice])
    }
}

let endereco = {
    rua: '',
    cidade: '',
    CEP: '',
}

header()

endereco.rua = readlineSync.question('Digite o nome da rua: ')
endereco.cidade = readlineSync.question('Digite a cidade: ')
endereco.CEP = readlineSync.question('Digite o CEP: ')

console.clear()
header()
console.log(exibirEndereco(endereco))
console.log('--------------------------')