const { basicFunctions } = require('../random-applications/basicFunctions.js') 

basicFunctions.header("Gerando um número aleatório")


console.log('Números entre 0 e 1(excluse)')
basicFunctions.line("Gerando um número aleatório")
let numeroAleatorio = Math.random()
console.log(numeroAleatorio)
basicFunctions.line("Gerando um número aleatório")


console.log("Número aleatório entre dois valores")
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
basicFunctions.line("Gerando um número aleatório")
console.log(getRandomArbitrary(0, 10)) 
basicFunctions.line("Gerando um número aleatório")


console.log("Número inteiro aleatório entre dois valores")
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
basicFunctions.line("Gerando um número aleatório")
console.log(getRandomInt(1, 10))
basicFunctions.line("Gerando um número aleatório")


console.log("Número inteiro aleatório entre dois valores, inclusive")
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
basicFunctions.line("Gerando um número aleatório")
console.log(getRandomIntInclusive(1, 10))
basicFunctions.line("Gerando um número aleatório")  
