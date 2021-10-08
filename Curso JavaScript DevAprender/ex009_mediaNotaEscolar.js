var readlineSync = require('readline-sync')

function header(){
    console.log('------------------------')
    console.log(' ex009_mediaNotaEscolar ')
    console.log('------------------------')
}

function somaArray(numeroDeAlunos){
    let array = []
    let totalArray = 0
    for(indice = 1; indice <= numeroDeAlunos; indice++){
        array[indice] = Number(readlineSync.question(`Digite a nota do ${indice}º aluno: `))
        totalArray += array[indice]
    }
    return totalArray
}

function mediaArray(totalValores){
    let mediaArray = totalValores / quantidadeDeAlunos
    return mediaArray
}

function conceitoMedia(mediaTurma){
    if(mediaTurma < 60){
        return 'F'
    } else if(mediaTurma < 70){
        return 'D'
    } else if(mediaTurma < 80){
        return 'C'
    } else if(mediaTurma < 90){
        return 'B'
    } else {
        return 'A'
    }
}

header()
let quantidadeDeAlunos = Number(readlineSync.question('Digite a quantidade de alunos: '))
console.clear()
header()
let total = somaArray(quantidadeDeAlunos)
let media = mediaArray(total)
console.clear()
header()

console.log(`O conceito da turma é ${conceitoMedia(media)}`)
console.log('------------------------')