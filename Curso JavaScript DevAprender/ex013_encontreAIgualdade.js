var readlineSync = require('readline-sync')
function header(){
    console.log('--------------------------')
    console.log(' ex013_encontreAIgualdade ')
    console.log('--------------------------')
}

function Endereco(rua, cidade, cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

function cadastro(){ 
    rua = readlineSync.question("Informe o nome da rua: ")
    cidade = readlineSync.question("Digite a cidade: ")
    cep = Number(readlineSync.question("Digite o cep: "))
}

function exibirEndereco(endereco){
    for(indice in endereco){
        console.log(indice, endereco[indice])
    }
}

function saoIguais(endereco1, endereco2){
    return  endereco1.rua === endereco2.rua && 
            endereco1.cidade === endereco2.cidade && 
            endereco1.cep === endereco2.cep        
}

function temEnderecoMemoriaIguais(endereco1, endereco2){
    return endereco1 === endereco2
}

header()
cadastro()    
const endereco1 = new Endereco(rua, cidade, cep)
console.clear()
header()
cadastro()
const endereco2 = new Endereco(rua, cidade, cep)
console.log(`Endereço igual? ${saoIguais(endereco1, endereco2)}`)
exibirEndereco(endereco1)
exibirEndereco(endereco2)
console.log(`Ocupa o mesmo espaço na memória? ${temEnderecoMemoriaIguais(endereco1, endereco2)}`)
console.log('--------------------------')