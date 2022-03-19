var readlineSync = require('readline-sync')
function header(){
    console.log("=========================")
    console.log("        MATRIZ 3x3       ")
    console.log("=========================")
}
header()
matriz = []
for(i = 1; i <= 3; i++){
    for(j = 1; j <= 3; j++){
        matriz.push("x")
    }
}
console.log(matriz)

matrizZ = []
for(i = 1; i <= 3; i++){
    for(j = 1; j <= 3; j++){
        if(i = j){
            matrizZ.push("z")
        } else {
            matrizZ.push("0")
        }
    }
}
console.log(matrizZ)