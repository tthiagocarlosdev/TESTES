var readlineSync = require('readline-sync')

//header
function header(){
    console.log("=========================")
    console.log(" RANDOM STRING GENERATOR ")
    console.log("=========================")
}

//FUNCTION RANDOM STRING GENERATOR
function randomStringGenerator(stringSize){
    //random number generator function
    function getRandomIntInclusive(min, max){
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    //variable declaration
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    //var stringSize = Number(readlineSync.question("Digite o tamanho da string: "))
    var randomString = ""

    //calculations with charAt method and number generator function
    for(counter = 1; counter <= stringSize; counter++){
        randomString += characters.charAt(getRandomIntInclusive(0, 52))
    }

    return randomString
}

//program
header()
var stringSize = randomStringGenerator(Number(readlineSync.question("Digite o tamanho da string: ")))
console.clear()
header()
console.log(`Generated string: ${stringSize}`)
console.log("=========================")