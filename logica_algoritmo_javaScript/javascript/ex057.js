var readlineSync = require('readline-sync')
function header(){
    console.log("=========================")
    console.log("     CORRIGINDO PROVAS   ")
    console.log("=========================")
}
header()

var gabaritoQuestoes = []
var alunos = []
var gabaritoAluno = []
var mediaAluno = []
var totalMediaTurma = 0

//cadastro gabarito
for(counter = 1; counter <= 5; counter++){
    gabaritoQuestoes[counter] = readlineSync.question(`Gabarito da ${counter}ª questão: `)
}
console.clear()
header()

//cadastro do aluno
for(i = 1; i <= 3; i++){
    alunos[i] = readlineSync.question(`Informe o nome do ${i}º aluno: `)
    mediaAluno[i] = 0
    for(j = 1; j <= 5; j++){        
        //cadastro gabarito de cada aluno
        gabaritoAluno[j] = readlineSync.question(`Resposta da ${j}º questão:`)
        if(gabaritoAluno[j] == gabaritoQuestoes[j]){
            mediaAluno[i] += 2
        }
    }
    console.clear()
    header()
    totalMediaTurma += mediaAluno[i]
}


console.clear()
header()
for(counter in alunos){
    console.log(`A média de ${alunos[counter]} = ${mediaAluno[counter]}`)
}
console.log(`A média da turma é: ${(totalMediaTurma/3).toFixed(2)}`)
console.log("=========================")