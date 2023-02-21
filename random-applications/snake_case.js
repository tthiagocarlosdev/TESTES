var input = require('readline-sync');

const { basicFunctions } = require('./basicFunctions')

basicFunctions.header("snake_case")

let inserted_text, lowercase_text, underlined_text

//entrada de dados
inserted_text = input.question("Enter the text: ")

//procesamento de dados
lowercase_text = inserted_text.toLowerCase()
underlined_text = lowercase_text.replace(/ /gi, "_")

//saída de dados
console.clear()
basicFunctions.header("snake_case")
console.log(underlined_text)
basicFunctions.line("snake_case")