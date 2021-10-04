var readlineSync = require('readline-sync')
function header(){ 
    console.log('----------------------------')
    console.log(' ex014_montadorPostagemBlog ')
    console.log('----------------------------')
}

function cadastro(){
    titulo = readlineSync.question("Digite o título: ")
    mensagem = readlineSync.question("Digite uma mensagem: ")
    autor = readlineSync.question("Digite o nome do autor: ")
    visualizacoes = readlineSync.question("Digite as visualizações: ")
    estaAoVivo = readlineSync.question("Está ao vivo [sim][não]: ")
}

header()
cadastro()

let postagem = {
    titulo: titulo,
    mensagem: mensagem,
    autor: autor,
    visualizacoes: visualizacoes,
    comentarios: [
        {autor: autor, mensagem: mensagem,}
    ],
    estaAoVivo: estaAoVivo
}

console.clear()
header()
console.log(postagem)
console.log('----------------------------')