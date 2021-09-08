var readlineSync = require('readline-sync')

//header
function header(){
    console.log("=========================")
    console.log(" RANDOM STRING GENERATOR ")
    console.log("=========================")
}

//random number generator function
function getRandomIntInclusive(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

header()

//variable declaration
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
var stringSize = Number(readlineSync.question("Digite o tamanho da string: "))
var String = ""

//calculations with charAt method and number generator function
for(counter = 1; counter <= stringSize; counter++){
    String += characters.charAt(getRandomIntInclusive(0, 52))
}

//final program report
console.clear()
header()
console.log(`Generated string: ${String}`)
console.log("=========================")