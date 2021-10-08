var readlineSync = require('readline-sync')
console.log("============================")
console.log(" APROVEITAMENTO DE UM ALUNO ")
console.log("============================")
var nota1 = Number(readlineSync.question("Digite a 1ª nota: "))
var nota2 = Number(readlineSync.question("Digite a 2ª nota: "))
var media = ((nota1 + nota2) / 2)
var aproveitamento = ""
console.clear()
if(media >= 9){
    aproveitamento = "A"
} else if (media >= 7){
    aproveitamento = "B"
} else if (media >= 5){
    aproveitamento = "C"
} else if (media >= 3){
    aproveitamento = "D"
} else if (media >= 1){
    aproveitamento = "E"
} else {
    aproveitamento = "F"
}
console.log("============================")
console.log(" APROVEITAMENTO DE UM ALUNO ")
console.log("============================")
console.log(`Média do aluno: ${media}`)
console.log(`Aproveitamento: ${aproveitamento}`)
console.log("============================")