var input = require('readline-sync');

const { basicFunctions } = require('./basicFunctions')

//declaração de variáveis
let typed_text
let arrayLowerCamelCaseText = []
let lowerCamelCaseText

//entrada de dados
basicFunctions.header("lowerCamelCase")
typed_text = input.question("Enter the text: ")

//procesamento de dados
arrayLowerCamelCaseText = typed_text.split('')

for(let counter = 0; counter < typed_text.length; counter++){
    if(counter == 0){
        arrayLowerCamelCaseText[counter] = arrayLowerCamelCaseText[counter].toLowerCase()
    }else if(arrayLowerCamelCaseText[counter] == ' '){
        arrayLowerCamelCaseText[counter + 1] = arrayLowerCamelCaseText[counter + 1].toUpperCase()
    }
}

// processando cada caracter do array para detectar um acento ou símbolo e fazer a substituição
for(let counter = 0; counter < typed_text.length; counter++) {
    //conditions
    let numbers =
      typed_text.charCodeAt(counter) >= 48 &&
      typed_text.charCodeAt(counter) <= 57

    let capital_letters =
      typed_text.charCodeAt(counter) >= 65 &&
      typed_text.charCodeAt(counter) <= 90

    let small_letters =
      typed_text.charCodeAt(counter) >= 97 &&
      typed_text.charCodeAt(counter) <= 122

    let underline = typed_text.charCodeAt(counter) === 95

    let letter_a =
      (typed_text.charCodeAt(counter) >= 192 &&
        typed_text.charCodeAt(counter) <= 197) ||
      (typed_text.charCodeAt(counter) >= 224 &&
        typed_text.charCodeAt(counter) <= 229)

    let letter_e =
      (typed_text.charCodeAt(counter) >= 200 &&
        typed_text.charCodeAt(counter) <= 203) ||
      (typed_text.charCodeAt(counter) >= 232 &&
        typed_text.charCodeAt(counter) <= 235)

    let letter_i =
      (typed_text.charCodeAt(counter) >= 204 &&
        typed_text.charCodeAt(counter) <= 207) ||
      (typed_text.charCodeAt(counter) >= 236 &&
        typed_text.charCodeAt(counter) <= 239) ||
      typed_text.charCodeAt(counter) === 305

    let letter_o =
      (typed_text.charCodeAt(counter) >= 210 &&
        typed_text.charCodeAt(counter) <= 214) ||
      typed_text.charCodeAt(counter) === 216 ||
      (typed_text.charCodeAt(counter) >= 242 &&
        typed_text.charCodeAt(counter) <= 246) ||
      typed_text.charCodeAt(counter) === 248

    let letter_u =
      (typed_text.charCodeAt(counter) >= 217 &&
        typed_text.charCodeAt(counter) <= 220) ||
      (typed_text.charCodeAt(counter) >= 249 &&
        typed_text.charCodeAt(counter) <= 252)

    let letter_c =
      typed_text.charCodeAt(counter) === 199 ||
      typed_text.charCodeAt(counter) === 231 ||
      typed_text.charCodeAt(counter) === 162

    let letter_y =
      typed_text.charCodeAt(counter) === 221 ||
      typed_text.charCodeAt(counter) === 253 ||
      typed_text.charCodeAt(counter) === 255 ||
      typed_text.charCodeAt(counter) === 376

    let letter_n =
      typed_text.charCodeAt(counter) === 209 ||
      typed_text.charCodeAt(counter) === 241

    let letter_d =
      typed_text.charCodeAt(counter) === 208 ||
      typed_text.charCodeAt(counter) === 240

    let letter_sz = typed_text.charCodeAt(counter) === 223

    let letter_ae =
      typed_text.charCodeAt(counter) === 198 ||
      typed_text.charCodeAt(counter) === 230

    let letter_x = typed_text.charCodeAt(counter) === 215

    //processing
    if (numbers && capital_letters && small_letters && underline) {
    } else if (letter_a) {
      arrayLowerCamelCaseText[counter] = 'a'
    } else if (letter_e) {
      arrayLowerCamelCaseText[counter] = 'e'
    } else if (letter_i) {
      arrayLowerCamelCaseText[counter] = 'i'
    } else if (letter_o) {
      arrayLowerCamelCaseText[counter] = 'o'
    } else if (letter_u) {
      arrayLowerCamelCaseText[counter] = 'u'
    } else if (letter_c) {
      arrayLowerCamelCaseText[counter] = 'c'
    } else if (letter_y) {
      arrayLowerCamelCaseText[counter] = 'y'
    } else if (letter_n) {
      arrayLowerCamelCaseText[counter] = 'n'
    } else if (letter_d) {
      arrayLowerCamelCaseText[counter] = 'd'
    } else if (letter_sz) {
      arrayLowerCamelCaseText[counter] = 'sz'
    } else if (letter_ae) {
      arrayLowerCamelCaseText[counter] = 'ae'
    } else if (letter_x) {
      arrayLowerCamelCaseText[counter] = 'x'
    } else if (!numbers && !capital_letters && !small_letters && !underline) {
      arrayLowerCamelCaseText[counter] = ''
    }
}

//inserindo os caracteres do array numa string
lowerCamelCaseText = arrayLowerCamelCaseText
    .toString()
    .replace(/,/gi, '')

//saída de dados
console.clear()
basicFunctions.header("lowerCamelCase")
console.log(typed_text)
basicFunctions.line("lowerCamelCase")
console.log(lowerCamelCaseText)
basicFunctions.line("lowerCamelCase")
