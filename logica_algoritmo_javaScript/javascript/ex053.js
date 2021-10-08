var readlineSync = require('readline-sync')

function header(){
    console.log("=========================")
    console.log("    LISTAGEM DA TURMA    ")
    console.log("=========================")
}

var nome = []
var notaA = []
var notaB = []
var media = []
var status = []
var totalTurma = 0
var mediaTurma = 0
var alunoAcimaDaMedia = 0

for(contador = 1;contador <= 4; contador++){
    header()
    nome[contador] = readlineSync.question(`Nome do aluno nº ${contador}: `)
    notaA[contador] = Number(readlineSync.question("Digite a 1ª nota: "))
    notaB[contador] = Number(readlineSync.question("Digite a 2ª nota: "))
    media[contador] = ((notaA[contador] + notaB[contador]) / 2)
    if(media[contador] >= 7){
        status[contador] = `APROVADO`
    } else {
        status[contador] = `REPROVADO`
    }
    totalTurma += media[contador]
    console.clear()
}
mediaTurma = totalTurma / 4
for(contador in media){
    if(media[contador] > mediaTurma){
        alunoAcimaDaMedia++
    }
}

header()
console.log(`NOME => MÉDIA`)
console.log("-------------------------")
for(contador in nome){
    console.log(`${nome[contador]} => ${media[contador]}`)
}
console.log("=========================")
console.log(`NOME => STATUS`)
console.log("-------------------------")
for(contador in nome){
    console.log(`${nome[contador]} => ${status[contador]}`)
}
console.log("=========================")
console.log(`MÉDIA DA TURMA`)
console.log("-------------------------")
console.log(`Média da Turma: ${mediaTurma.toFixed(2)}`)
console.log(`Alunos acima da média: ${alunoAcimaDaMedia}`)
console.log("=========================")