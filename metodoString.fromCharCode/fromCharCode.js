//variáveis
var readlineSync = require('readline-sync')
var codigoAscii = []
var senha = ""

//funções
    //função geradora de números aleatórios
    function getRandomIntInclusive(min, max){
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    //função cabeçalho
    function header(){
        console.log('================================')
        console.log('        GERADOR DE SENHA        ')
        console.log('================================')
    }
//inicio do programa
header()
var tamanhoSenha = readlineSync.question("Digite o tamanho de sua senha: ")
console.clear()

//sorteio dos valores aleatórios
<<<<<<< HEAD
for (contador = 1; contador <= tamanhoSenha; contador++){
=======
for (contador = 1; contador <= tamanhoSenha; contador++){    
>>>>>>> 78f4db0bb75cf69f4d6d12be6cc3d9d92d7cd66f
    codigoAscii[contador] = getRandomIntInclusive(33, 126)
}
// conversão dos valores numéricos em caracteres usando 'String.fromCharCode()'
for (contador in codigoAscii){
    senha += String.fromCharCode(codigoAscii[contador])
}

//final do programa
header()
console.log(`Sua senha possue ${tamanhoSenha} caracteres!`)
console.log('================================')
console.log(`Sua senha é: ${senha}`)
console.log('================================')