const {basicFunctions} = require('./basicFunctions')

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function getRandomIntInclusive(min, max) {
//     console.log(`min antes: ${min}`)
//     console.log(`max antes: ${max}`)
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     console.log(`min depois: ${min}`)
//     console.log(`max depois: ${max}`)
//     console.log()
//     let numberRandom = Math.random()
//     console.log(`Número aleatório: ${numberRandom}`)
//     console.log(`min - max = ${max - min}`)
//     console.log(`min - max + 1 = ${max - min + 1}`)
//     console.log(`Número aleatório * numberRandom: ${numberRandom * (max - min + 1)}`)
//     console.log(`com math.floor: ${Math.floor(numberRandom * (max - min + 1))}`)
//     console.log(`mais o min: ${Math.floor(numberRandom * (max - min + 1)) + min}`)
//     return Math.floor(numberRandom * (max - min + 1)) + min;
// }

console.log(getRandomIntInclusive(1, 10))