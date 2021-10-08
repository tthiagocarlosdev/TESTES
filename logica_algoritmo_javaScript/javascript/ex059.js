var readlineSync = require('readline-sync')
function header(){
    console.log("=========================")
    console.log("        MATRIZ 3x2       ")
    console.log("=========================")
}
header()
matriz = [[]]
for(i = 1; i <= 3; i++){
    for(j = 1; j <= 3; j++){
        matriz[[j]].push("x")
    }
}
for(i = 1; i <= 3; i++){
    for(j = 1; j <= 3; j++){
        console.log(`${matriz[i],[j]}`)
    }
    console.log(`\n`)
}