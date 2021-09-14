var readlineSync = require('readline-sync')
var activities = [[]]
do{
    let coluna = readlineSync.question("Digite o valor da coluna: ")
    let linha = readlineSync.question("Digite o valor da linha: ")
    let conteudo = readlineSync.question("Digite o conteúdo coluna: ")
    let conteúdo = Number(readlineSync.question("Digite o conteúdo da linha: "))
    activities.splice(coluna,linha, [conteudo,conteúdo])
    console.log("===================")
    console.table(activities)    
    var resposta = readlineSync.question("Quer inserir mais dados? [y][n]: ")
} while (resposta == 'y')
