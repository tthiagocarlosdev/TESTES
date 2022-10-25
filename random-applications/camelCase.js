var input = require('readline-sync')

function header() {
  console.log(`------------------------------`)
  console.log(`           camelCase`)
  console.log(`------------------------------`)
}

let text, lowercaseText, underlined_text
let arrayText = [],
  arrayNumbers = []

header()

//entrada de dados
text = input.question('Enter the text: ')

// //procesamento de dados
lowercaseText = text.toLowerCase()
underlined_text = lowercaseText.replace(/ /, '_')
arrayText = underlined_text.split('')

// //saída de dados
// console.clear()
// header()
// console.log(arrayText)
// for(let letter of arrayText) {
//   console.log(letter.charCodeAt())
// }

// for (let counter = 0; counter < arrayText.length; counter++) {
//   arrayNumbers[counter] = arrayText[counter].charCodeAt()
// }

// console.log(arrayNumbers)

// for (let counter = 0; counter < arrayNumbers.length; counter++) {
//   if ( arrayNumbers[counter] < 97 || arrayNumbers[counter] > 122 ) {
//     arrayText[counter] = '*'
//   } 
// }

// console.log(arrayText)
// console.log(`------------------------------`)

// text = input.question("Enter the text: ")
// console.log(text.charCodeAt(0))


/*
arrayNumbers[counter] == 95
arrayNumbers[counter] < 48 || arrayNumbers[counter] > 57
arrayNumbers[counter] < 65 || arrayNumbers[counter] > 90

*/

console.log(arrayText)
console.log(underlined_text)
console.log(underlined_text.indexOf(" "))