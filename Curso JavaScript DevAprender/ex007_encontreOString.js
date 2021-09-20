var readlineSync = require('readline-sync')
function header(){
    console.log('-------------------')
    console.log('  encontreOString  ')
    console.log('-------------------')
}

function exibirPropriedades(objeto){
    for (propriedades in objeto){
        if(typeof objeto[propriedades] === 'string'){
            console.log(propriedades, objeto[propriedades])
        }
    }
    
}

let biblioteca = {
    titulo: '',
    ano: 0,
    autor: '',
    genero:'' 
}

header()
biblioteca.titulo = readlineSync.question("Digite o título do livro: ")
biblioteca.ano = Number(readlineSync.question("Digite o ano do livro: "))
biblioteca.autor = readlineSync.question("Digite o autor do livro: ")
biblioteca.genero = readlineSync.question("Digite o gênero do livro: ")

exibirPropriedades(biblioteca)
console.log('-------------------')
