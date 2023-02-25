var input = require('readline-sync');

const { basicFunctions } = require('./basicFunctions');

//declaração de funções
//Conditional (ternary) operator - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
function itsJustNumber(stringValue, regex){
    return regex.RegExpNumber.test(stringValue) && !regex.RegRexLyrics.test(stringValue) ? true : false;
};

function errorMessage(){
    console.log("[ERROR]: Digite um valor válido!");
};

function validateNumberOfCharacters(numberValue){
    return (numberValue < 8 || numberValue > 40 ? false : true);
};

//declaração de variáveis
let numberOfCharactersTyped = 0;
let itsNumber = true;
let regularExpressionObject = {
    RegExpNumber : new RegExp("[0-9]", "i"),
    RegRexLyrics : new RegExp("[a-z]", "i"),
}
let validNumber = true;

//entrada e validação de dados
do {
    console.clear();
    basicFunctions.header("passwordGenerator");
    if ( !itsNumber || !validNumber ){
        errorMessage() 
    };
    numberOfCharactersTyped = input.question("Digite o número de caracteres [8 a 40]: ");
    itsNumber = itsJustNumber(numberOfCharactersTyped, regularExpressionObject);
    itsNumber == false ? validNumber = false : validNumber = validateNumberOfCharacters(numberOfCharactersTyped);

} while ( !itsNumber || !validNumber );

//saída de dados
console.clear();
basicFunctions.header("passwordGenerator");
console.log(numberOfCharactersTyped);
basicFunctions.line("passwordGenerator");

//documentar do início