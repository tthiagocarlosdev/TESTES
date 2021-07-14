var readlineSync = require('readline-sync')
//var x = readlineSync.question('x:')
function header(){
    console.log('======================')
    console.log('  ESCOLHENDO PESSOAS  ')
    console.log('======================')
}

var totalHomem = 0
var totalMulher = 0

do{
    header()
    console.log('Sexo: ')
    console.log('[1] Homem')
    console.log('[2] Mulher')
    var sexo = Number(readlineSync.question(''))
    console.clear()
    header()
    var idade = Number(readlineSync.question('Digite a idade: '))
    console.clear()
    header()
    console.log('Cor cútis:')
    console.log('[1] Preto')
    console.log('[2] Castanho')
    console.log('[3] Loiro')
    console.log('[4] Ruivo')
    var cutis = Number(readlineSync.question(''))
    console.clear()
    header()
    console.log(`Cadastrar mais alguém?`)
    var cadastro = String(readlineSync.question('[s] sim / [n] não\n'))
    console.clear()

    switch (sexo){
        case 1:
            if(idade >= 18 && cutis == 2){
                totalHomem++
            }
            break
        case 2:
            if(idade > 24 && idade <= 30 && cutis == 3){
                totalMulher++
            }
            break
    }
} while (cadastro == 's')

header()
console.log(`Total de homens com mais de 18 anos e cabelos castanhos é ${totalHomem}.`)
console.log(`Total de mulheres entre 25 e 30 anos e cabelos loiros é ${totalMulher}.`)
    
