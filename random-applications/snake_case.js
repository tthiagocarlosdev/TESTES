var input = require('readline-sync');

function header(){
	console.log("=========================")
	console.log("        snake_case")
	console.log("=========================")
}

let text, tiny, underlined_text

header()

//entrada de dados
text = input.question("Enter the text: ")

//procesamento de dados
tiny = text.toLowerCase()
underlined_text = tiny.replace(/ /gi, "_")

//saída de dados
console.clear()
header()
console.log(underlined_text)
console.log("=========================")