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

// Clonando Objetos

const celular = {
    marcaCelular: 'ASUS',
    tamanhoTela:{
        vertivcal: 155,
        horizontal: 75
    },
    ligar: function () {
        console.log('Fazendo ligação...')
    }
}
console.log('-------------------')
console.log('Objeto original')
console.log('-------------------')
console.log(celular)
console.log('-------------------')
console.log('Clonando Objeto!') // Object.assign
console.log('-------------------')
const novoObjeto = Object.assign({
    bateria: 5000
}, celular)
console.log(novoObjeto)
console.log('-------------------')
console.log('Clonando Objeto!') // ...
console.log('-------------------')
const objeto2 = {...celular}
console.log(objeto2)

//Math
// Math.random -> gera um número aleatório entre 0 e 1
console.log(Math.random())
//Math.max -> retorna o maior valor de um intervalo de valore passado para a função.
console.log(Math.max(3,6,15,8,10))
//Math.min -> retorna o menor valor de um intervalo de valore passado para a função.
console.log(Math.min(3,6,15,2,8,10))

//String
// Tipo primitivo
const mensagem = ' minha primeira mensagem '
//Tipo Objeto
const outraMensagem = new String('bom dia')
// length -> informa a quantidade de caracteres da string.
console.log(outraMensagem.length)
// acessando um caracter a partir do índice.
console.log(outraMensagem[2])
// procurando algum caracter ou palavra dentro da string.
console.log(mensagem.includes('primeira'))
// procurando pelo caracter ou palavra que a string começa.
console.log(mensagem.startsWith('minha'))
// procurandopelo caracter ou palavra que a string termina.
console.log(mensagem.endsWith('mensagem'))
// para saber qual o índice de algum caracter ou palavra dentro da string.
console.log(mensagem.indexOf('primeira'))
// replace para substituir um termo dentro da string.
console.log(mensagem.replace('minha', 'sua'))
// para remover os espaço excedentes no início e no final da string.
console.log(mensagem.trim())
// para separar o conteúdo da string.
console.log(mensagem.split(' '))

// Template Literal
const mensagem = 
'Oi isso é a minha\n' +
'\'primeira\' mensagem'
console.log(mensagem)
// Object {}
// Boolean true,false
// string '', ""
// Template ``
const outra = `oi isso é a minha
'primeira' mensagem`
console.log(outra)
const nome = 'Thiago'
const email = 
`ola ${nome}

Obrigado por se inscrever no canal

Para acompanhar os vídeos não se esqueça de ativar o sino.

Obrigago,
Bill.`
console.log(email)*/

// Date

const data1 = new Date()
console.log(data1)
const data2 = new Date('septembre 06 2022 07:30')
console.log(data2)
const data3 = new Date(2022,08,27,7,30)
console.log(data3)
console.log(data1.toDateString()) // para apresentar como string.
console.log(data1.toTimeString()) // para apresentar o padrão.
console.log(data1.toISOString()) // como visualiza no banco de dados.
