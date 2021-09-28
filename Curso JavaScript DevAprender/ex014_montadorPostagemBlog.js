var readlineSync = require('readline-sync')
function header(){ 
    console.log('----------------------------')
    console.log(' ex014_montadorPostagemBlog ')
    console.log('----------------------------')    
}

function Postagem(titulo, mensagem, autor, visualizacoes, comentarios, estaAoVivo){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = visualizacoes,
    this.comentarios = comentarios,
    this.estaAoVivo = estaAoVivo
}

function cadastro(){
    titulo = readlineSync.question("Digite o título: ")
    mensagem = readlineSync.question("Digite uma mensagem: ")
    autor = readlineSync.question("Digite o nome do autor: ")
    visualizacoes = readlineSync.question("Digite as visualizações: ")
    comentarios = readlineSync.question("Digite um comentário: ")
    estaAoVivo = readlineSync.question("Está ao vivo? ")
}

header()
cadastro()
const postagem1 = new Postagem(titulo, mensagem, autor, visualizacoes, comentarios, estaAoVivo)
console.log(postagem1)
console.log('----------------------------')