var input = require('readline-sync');

const { basicFunctions } = require('./basicFunctions');

//declaração de variáveis
let numA = 0, numB = 1, numC  = 0
let numeroLimite = 0
let fibonacci = ""
		

//entrada de dados
basicFunctions.header("Fibonacci ate x")
numeroLimite = input.question("Digite o número limite: ")

//procesamento de dados
fibonacci += numA + " " + numB
numC = numA + numB
while(numC <= numeroLimite){
    fibonacci += " " + numC
    numA = numB
    numB = numC
    numC = numA + numB
}

// saída de dados
console.clear()
basicFunctions.header("Fibonacci ate x")
console.log(`Número limite: ${numeroLimite}`)
console.log(fibonacci)
basicFunctions.line("Fibonacci ate x")