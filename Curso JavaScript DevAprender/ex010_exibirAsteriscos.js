var readlineSync = require('readline-sync')

function header(){
    console.log('------------------------')
    console.log(' ex010_exibirAsteriscos ')
    console.log('------------------------')
}

function exibirAsteristicos(linhas){
    let asteristico = ''
    for(indice = 1; indice <= linhas; indice++){
        asteristico += '*'
        console.log(asteristico)
    }
}

header()
var quantidadeDeLinhas = Number(readlineSync.question('Digite a quantidade de linhas: '))
console.clear()
header()
console.log(exibirAsteristicos(quantidadeDeLinhas))
console.log('------------------------')