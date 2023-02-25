var input = require('readline-sync');

const { basicFunctions } = require('./basicFunctions');

//declaração de funções
//Conditional (ternary) operator - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
function isRegularExpression(stringValue, regex){
    console.log(`string value: ${stringValue}`);
    console.log(regex.test(stringValue))
    // if( regex.test(stringValue) ){
    //     return false;
    // } else {
    //     return true;
    // }
    return regex.test(stringValue) ? false : true
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
let RegExpNumber = /[0-9]/gi;
let validNumber = true;
    
//entrada e validação de dados
do {
    // console.clear();
    basicFunctions.header("passwordGenerator");
    if ( !itsNumber || !validNumber ){
        errorMessage() 
    };
    numberOfCharactersTyped = input.question("Digite o número de caracteres [8 a 40]: ");
    console.log(numberOfCharactersTyped);
    itsNumber = isRegularExpression(numberOfCharactersTyped, RegExpNumber);
    console.log(`itsNumber: ${itsNumber}`)
    validNumber = validateNumberOfCharacters(numberOfCharactersTyped);
    console.log(`validNumber: ${validNumber}`)

} while ( !itsNumber || !validNumber );

//saída de dados
// console.clear();
basicFunctions.header("passwordGenerator");
console.log(numberOfCharactersTyped);
console.log(itsNumber);
basicFunctions.line("passwordGenerator");

//number Of Characters Typed - número de caracteres digitados