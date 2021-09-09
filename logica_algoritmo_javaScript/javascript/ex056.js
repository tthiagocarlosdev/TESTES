var readlineSync = require('readline-sync')
function header(){
    console.log("=========================")
    console.log("    CAMPEONATO FUTEBOL   ")
    console.log("=========================")
}
header()
var numberOfTeams = Number(readlineSync.question("Informe a quantidade de times: "))
var team = []

console.clear()
header()
for(counter = 1; counter <= numberOfTeams; counter++){
    team[counter] = readlineSync.question(`Digite o ${counter}º time: `)
}

console.clear()
header()
console.log(" Tabela Final")
console.log("-------------------------")
for(i = 1; i <= numberOfTeams; i++){
    for(j = 1; j <= numberOfTeams; j++){
        if(i != j){
            console.log(`${team[i]} x ${team[j]}`)
        }
        
    }   
}
console.log("=========================")