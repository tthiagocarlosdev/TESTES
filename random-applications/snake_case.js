var input = require('readline-sync');

const { basicFunctions } = require('./basicFunctions')

//function declaration
function snakeCase(text){

    let underlined_text = text.replace(/ /gi, '_')
    let input_text_size = underlined_text.length
    let array_without_accent = []
    let textData = {
      text_snake_case: "",
      output_text_size: 0,
    }
  
    //extraindo cada caracter da string para um array
    array_without_accent = underlined_text.split('')
    console.log(array_without_accent)
  
    // processando cada caracter do array para detectar um acento ou símbolo e fazer a substituição
    for (let counter = 0; counter < input_text_size; counter++) {
  
      //conditions
      let numbers =
        underlined_text.charCodeAt(counter) >= 48 &&
        underlined_text.charCodeAt(counter) <= 57
  
      let capital_letters =
        underlined_text.charCodeAt(counter) >= 65 &&
        underlined_text.charCodeAt(counter) <= 90
  
      let small_letters =
        underlined_text.charCodeAt(counter) >= 97 &&
        underlined_text.charCodeAt(counter) <= 122
  
      let underline = underlined_text.charCodeAt(counter) === 95
  
      let letter_a =
        (underlined_text.charCodeAt(counter) >= 192 &&
          underlined_text.charCodeAt(counter) <= 197) ||
        (underlined_text.charCodeAt(counter) >= 224 &&
          underlined_text.charCodeAt(counter) <= 229)
  
      let letter_e =
        (underlined_text.charCodeAt(counter) >= 200 &&
          underlined_text.charCodeAt(counter) <= 203) ||
        (underlined_text.charCodeAt(counter) >= 232 &&
          underlined_text.charCodeAt(counter) <= 235)
  
      let letter_i =
        (underlined_text.charCodeAt(counter) >= 204 &&
          underlined_text.charCodeAt(counter) <= 207) ||
        (underlined_text.charCodeAt(counter) >= 236 &&
          underlined_text.charCodeAt(counter) <= 239) ||
        underlined_text.charCodeAt(counter) === 305
  
      let letter_o =
        (underlined_text.charCodeAt(counter) >= 210 &&
          underlined_text.charCodeAt(counter) <= 214) ||
        underlined_text.charCodeAt(counter) === 216 ||
        (underlined_text.charCodeAt(counter) >= 242 &&
          underlined_text.charCodeAt(counter) <= 246) ||
        underlined_text.charCodeAt(counter) === 248
  
      let letter_u =
        (underlined_text.charCodeAt(counter) >= 217 &&
          underlined_text.charCodeAt(counter) <= 220) ||
        (underlined_text.charCodeAt(counter) >= 249 &&
          underlined_text.charCodeAt(counter) <= 252)
  
      let letter_c =
        underlined_text.charCodeAt(counter) === 199 ||
        underlined_text.charCodeAt(counter) === 231 ||
        underlined_text.charCodeAt(counter) === 162
  
      let letter_y =
        underlined_text.charCodeAt(counter) === 221 ||
        underlined_text.charCodeAt(counter) === 253 ||
        underlined_text.charCodeAt(counter) === 255 ||
        underlined_text.charCodeAt(counter) === 376
  
      let letter_n =
        underlined_text.charCodeAt(counter) === 209 ||
        underlined_text.charCodeAt(counter) === 241
  
      let letter_d =
        underlined_text.charCodeAt(counter) === 208 ||
        underlined_text.charCodeAt(counter) === 240
  
      let letter_sz = underlined_text.charCodeAt(counter) === 223
  
      let letter_ae =
        underlined_text.charCodeAt(counter) === 198 ||
        underlined_text.charCodeAt(counter) === 230
  
      let letter_x = underlined_text.charCodeAt(counter) === 215
  
      //processamento
      if (numbers && capital_letters && small_letters && underline) {
      } else if (letter_a) {
        array_without_accent[counter] = 'a'
      } else if (letter_e) {
        array_without_accent[counter] = 'e'
      } else if (letter_i) {
        array_without_accent[counter] = 'i'
      } else if (letter_o) {
        array_without_accent[counter] = 'o'
      } else if (letter_u) {
        array_without_accent[counter] = 'u'
      } else if (letter_c) {
        array_without_accent[counter] = 'c'
      } else if (letter_y) {
        array_without_accent[counter] = 'y'
      } else if (letter_n) {
        array_without_accent[counter] = 'n'
      } else if (letter_d) {
        array_without_accent[counter] = 'd'
      } else if (letter_sz) {
        array_without_accent[counter] = 'sz'
      } else if (letter_ae) {
        array_without_accent[counter] = 'ae'
      } else if (letter_x) {
        array_without_accent[counter] = 'x'
      } else if (!numbers && !capital_letters && !small_letters && !underline) {
        array_without_accent[counter] = ''
      }
    }
  
    console.log(array_without_accent)
    //criando a nova string a partir dos novos valores do array
    textData.text_snake_case = array_without_accent
      .toString()
      .replace(/,/gi, '')
      .toLowerCase()
  
    //determinando a quantidade de caracteres
    textData.output_text_size = textData.text_snake_case.length
  
    return textData
  
  }

//variable declaration
let inserted_text = "";
let text_information = {};

//data input
basicFunctions.header("snake_case")
inserted_text = input.question("Enter the text: ")

//data processing
text_information = snakeCase(inserted_text)

//data output
console.clear()
basicFunctions.header("snake_case")
console.log(`Texto de entrada: ${inserted_text}`)
basicFunctions.line("snake_case")
console.log(`Texto snake_case: ${text_information.text_snake_case}`)
console.log(`Nº de caracteres: ${text_information.output_text_size}`)
basicFunctions.line("snake_case")