var readlineSync = require('readline-sync')
console.log("=========================")
console.log(" DEPENDENTES FUNCIONÁRIO ")
console.log("=========================")
var nome = String(readlineSync.question("Digite seu nome: "))
var salario = Number(readlineSync.question("Digite seu salário: R$"))
var dependentes = Number(readlineSync.question("Digite a quantidade de dependentes: "))
if (dependentes == 0) {
    salario += salario * 0.05
} else if (dependentes <= 3) {
    salario += salario * 0.10
} else if (dependentes <= 6){ 
    salario += salario * 0.15
} else {
    salario += salario * 0.18
}
console.log(`Olá ${nome}, você tem ${dependentes} dependentes e seu novo salário será de R$${salario.toFixed(2)}`)
console.log("=========================")