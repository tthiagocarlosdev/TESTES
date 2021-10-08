var readlineSync = require('readline-sync')
console.log("========================")
console.log("ALUNO APROVADO REPROVADO")
console.log("========================")
var notaA = Number(readlineSync.question("Digite a 1ª nota: "))
var notaB = Number(readlineSync.question("Digite a 2ª nota: "))
var media = ((notaA + notaB) / 2)
console.clear()
console.log("========================")
console.log("ALUNO APROVADO REPROVADO")
console.log("========================")
console.log(`Média do aluno: ${media}`)
if (media >= 7) {
    console.log("Aluno Aprovado!")
} else if (media >= 5) {
    console.log("Aluno em Recuperação!")
} else {
    console.log("Aluno Reprovado!")
}
console.log("========================")