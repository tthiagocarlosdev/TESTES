var readlineSync = require('readline-sync')
console.log('-----------------------')
console.log(' Medidor de Velocidade ')
console.log('-----------------------')
var velocidade = Number(readlineSync.question('Informe a velocidade(km/h): '))

function verificarVelocidade(speed){
    const velocidadeMaxima = 70
    const kmPorPonto = 5
    if (speed < 75) {
        let pontos = 0
        return `Velocidade Normal, ${Math.floor(pontos)} pontos!`
    } else if(speed < 135){
        pontos = ((speed - velocidadeMaxima) / kmPorPonto)
        return `Velocidade acima da permitida, ${Math.floor(pontos)} pontos!`
    } else {
        pontos = ((speed - velocidadeMaxima) / kmPorPonto)
        return `Velocidade acima da permitida, ${Math.floor(pontos)} pontos! Carteira Suspensa!`
    }
}

console.log(`Velocidade: ${velocidade}km/h`)
console.log(`Resultado: ${verificarVelocidade(velocidade)}`)
console.log('-----------------------')
/*
Math.floor() function
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
*/