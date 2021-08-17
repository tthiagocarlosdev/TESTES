console.log('Números entre 0 e 1(excluse)')
var numeroAleatorio = Math.random()
console.log(numeroAleatorio)
console.log('-------------------')
console.log('Números entre 0 e 10(excluse) com decimais')
var numeroDecimais = Math.random() * 10
console.log(numeroDecimais)
console.log('-------------------')
console.log('Números enter 0 e 10(excluse) sem decimais')
var numeroSemDecimais = Math.floor(Math.random() * 10)
console.log(numeroSemDecimais)
console.log('-------------------')
console.log('Número randômico até um valor máximo qualquer')
var numeroRadomicoMaximo = Math.floor(Math.random() * 10 + 11)
console.log(numeroRadomicoMaximo)
console.log('-------------------')
console.log('Função onde recebemos como parâmetro o valor máximo aleatório')
function getRandom(max){
    return Math.floor(Math.random() * max + 1)
}
console.log(getRandom(133))
console.log('-------------------')
console.log('Número randômico booleano (entre 0 e 1)')
var numeroBooleano = Math.floor(Math.random() * 2)
console.log(numeroBooleano)
console.log('-------------------')
console.log('Gerando um número aleatório entre dois valores')
function numeroIntervalo(max, min){
    return Math.random() * (max - min) + min
}
console.log(numeroIntervalo(6, 1))
console.log('-------------------')
console.log('Gerando um número inteiro aleatório entre dois valores')
function getRandomInteiro(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}
console.log(getRandomInteiro(33, 133))
console.log('-------------------')
console.log('Gerando um número inteiro aleatório entre dois valores, inclusive')
function getRandomIntInclusive(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(getRandomIntInclusive(1, 5))