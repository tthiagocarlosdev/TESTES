var input = require('readline-sync');

const { basicFunctions } = require('./basicFunctions');

//declaração de funções
function isRegularExpression(stringValue, regex){
    return regex.test(stringValue) ? true : false
};

function errorMessage(){
    console.log("[ERROR]: Digite um valor válido!");
};

//declaração de variáveis
let numberOfCharacters = 0;
let itsNumber = false;
let RegExpNumber = /\d/gi;

//entrada de dados
basicFunctions.header("passwordGenerator");
numberOfCharacters = input.question("Digite o número de caracteres: ");

//processamento de dados
itsNumber = isRegularExpression(numberOfCharacters, RegExpNumber);

while (!itsNumber) {
    console.clear();
    basicFunctions.header("passwordGenerator");
    errorMessage();
    numberOfCharacters = input.question("Digite o número de caracteres: ");
    itsNumber = isRegularExpression(numberOfCharacters, RegExpNumber);
};

//saída de dados
console.clear();
basicFunctions.header("passwordGenerator");
console.log(numberOfCharacters);
console.log(itsNumber);
basicFunctions.line("passwordGenerator");

//number Of Characters Typed - número de caracteres digitados