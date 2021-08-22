//npm install readline-sync
var readlineSync = require('readline-sync')
function cabecalho(){
    console.log(`------------------------------`)
    console.log(`            ESCOLA            `)
    console.log(`------------------------------`)
}
cabecalho()
quantidadeAlunos = readlineSync.question(`Quantos alunos a turma tem? `)
console.clear()
var contador = 0
var melhorNota = 0
var melhorAluno = ''
//var nomeAluno = ''
while(contador < quantidadeAlunos){
    var nomeAluno = String(readlineSync.question(`Nome do aluno: `))
    var notaAluno = Number(readlineSync.question(`Nota do aluno: `))
    if(notaAluno > melhorNota){
        melhorNota = notaAluno
        melhorAluno = nomeAluno
    }
    console.clear()
    //console.log(`Melhor nota: ${melhorNota}`)
    contador++
}
cabecalho()
console.log(`A turma tem ${quantidadeAlunos} alunos!`)
console.log(`O melhor aproveitamento foi de ${melhorAluno} com a nota ${melhorNota}`)
console.log(`------------------------------`)