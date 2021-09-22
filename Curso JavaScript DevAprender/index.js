var readlineSync = require('readline-sync')
/*var name = readlineSync.question('Whats is your name? ')
var name = "Thiago Carlos"
console.log(`Welcome ${name}!`)
let pessoa = {
    nome: 'Silva',
    idade: 33
}
console.log(`Meu nome é ${pessoa.nome}!`)
console.log(`Minha idade: ${pessoa.idade} anos!`)

// Arrays
console.log("Arrays")
let familia =[true, 45, 'jhonatan', 17]
console.log(familia)


// Operador tenário
var idade = readlineSync.question("Digite sua idade: ")
let maioridade = idade >= 18 ? 'Maior de idade!' : 'Menor de idade!'
console.log("===================")
console.log(maioridade)

for(let i = 0; i < 5; i++){
    console.log("Estou aprendendo!")
}


const cores = ['Vermelho', 'Azul', 'Verde']
for(let cor in cores){
    console.log(cor, cores[cor])
}

const cores = ['Vermelho', 'Azul', 'Verde']
for(let cor of cores){
    console.log(cor)
}


//factoryFunctions → Funções de Fábrica
console.log('---------------------------------------')
console.log(' factoryFunctions → Funções de Fábrica ')
console.log('---------------------------------------')
function criarCelular(marcaCelular, tamanhoTela, capaciadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capaciadeBateria,
        ligar(){
            console.log('Fazendo ligação...')
        }
    }
}
let marca = readlineSync.question('Qual a marca do celular: ')
let tamanho = Number(readlineSync.question('Qual o tamanho da tela: '))
let bateria = Number(readlineSync.question('Qual a capacidade da bateria: '))
console.log(criarCelular(marca, tamanho, bateria))
console.log('---------------------------------------')

//Constructor Functions → Função de Construtor

console.log('----------------------------------------------')
console.log(' Constructor Functions → Função de Construtor ')
console.log('----------------------------------------------')
function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log('fazendo ligação...')
    }
}
let marca = readlineSync.question('Qual a marca do celular: ')
let tamanho = Number(readlineSync.question('Qual o tamanho da tela: '))
let bateria = Number(readlineSync.question('Qual a capacidade da bateria: '))
console.log(new Celular(marca, tamanho, bateria))
console.log('----------------------------------------------')
*/

//Natureza dinâmica de Objetos
console.log('Objeto original:')
const mouse = {
    cor: 'red',
    marcar: 'dazz',
}
console.log(mouse)

console.log('-------------------')
console.log('Adicionando Propriedades:')
mouse.velocidade = 5000
mouse.trocarDPI = function () {
    console.log('mudando DPI')
}
console.log(mouse)

console.log('-------------------')
console.log('Deletando Propriedades:')
delete mouse.velocidade
delete mouse.trocarDPI
console.log(mouse)