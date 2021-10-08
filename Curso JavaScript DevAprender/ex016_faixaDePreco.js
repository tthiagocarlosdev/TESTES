var readlineSync = require('readline-sync')
function header(){ 
    console.log('----------------------------')
    console.log('     ex016_faixaDePreco     ')
    console.log('----------------------------')    
}

//opção 1
let faixas = [
    {tooltip: 'até R$700', minimo: 0, maximo: 700},
    {tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 999999}
]

//factory function
function criaFaixaPreco (tooltip, minimo, maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixa2 = [
    criaFaixaPreco('a', 1, 100),
    criaFaixaPreco('b', 100, 1000),
    criaFaixaPreco('c', 1000, 10000)
]

//constructor function

function FaixaPreco(tooltip, minimo, maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixa3 = [
    new FaixaPreco('d', 0, 20),
    new FaixaPreco('e', 20, 40),
    new FaixaPreco('f', 40, 60)
]
header()
console.log(faixas)
console.log('----------------------------')
console.log('factory function')
console.log(faixa2)
console.log('----------------------------')
console.log('constructor function')
console.log(faixa3)
console.log('----------------------------')
