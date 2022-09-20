function snakeCase(){
  const typed_text = document.querySelector('input#typed-text').value;
  const final_result = document.querySelector('.final-result');

  let lowercaseText = typed_text.toLowerCase();
  let underlined_text = lowercaseText.replace(/ /gi, "_");
  let text_size = underlined_text.length;
  let array_without_accent = [];
  let text_snake_case = ''
  

  //extraindo cada caracter da string para um array
  array_without_accent = underlined_text.split('')

  // processando cada caracter do array para detectar um acento ou símbolo e fazer a substituição
  for( let counter = 0; counter < text_size; counter++ ){
    
    //conditions
    let letter_e = underlined_text.charCodeAt(counter) >= 232 && underlined_text.charCodeAt(counter) <= 235;
    let special_characters_1 = underlined_text.charCodeAt(counter) >= 33 && underlined_text.charCodeAt(counter) <= 47;
    let special_characters_2 = underlined_text.charCodeAt(counter) >= 58 && underlined_text.charCodeAt(counter) <= 64;
    let special_characters_3 = underlined_text.charCodeAt(counter) >= 123 && underlined_text.charCodeAt(counter) <= 191;
    //letras apenas minusculas
    let letter_A = underlined_text.charCodeAt(counter) >= 192 && underlined_text.charCodeAt(counter) <= 198;
    let letters_Cc = underlined_text.charCodeAt(counter) === 199 || underlined_text.charCodeAt(counter) === 231;
    let letter_E = underlined_text.charCodeAt(counter) >= 200 && underlined_text.charCodeAt(counter) <= 203;
    let letter_I = underlined_text.charCodeAt(counter) >= 204 && underlined_text.charCodeAt(counter) <= 207;
    let letter_D = underlined_text.charCodeAt(counter) === 240;

    
    if (letter_e) {
      array_without_accent[counter] = 'e'
    } else if (special_characters_1) {
      array_without_accent[counter] = ''
    } else if (special_characters_2) {
      array_without_accent[counter] = ''
    } else if (special_characters_3) {
      array_without_accent[counter] = ''
    } else if (letter_A) {
      array_without_accent[counter] = 'a'
    } else if (letters_Cc) {
      array_without_accent[counter] = 'c'
    } else if (letter_E) {
      array_without_accent[counter] = 'e'
    } else if (letter_I) {
      array_without_accent[counter] = 'i'
    } else if (letter_D) {
      array_without_accent[counter] = 'd'
    }

  }

  //criando a nova string a partir dos novos valores do array
  text_snake_case = array_without_accent.toString().replace(/,/gi, "");

  final_result.innerHTML = text_snake_case;
}
/*

TABELA ASCII
https://www.ime.usp.br/~glauber/html/acentos.htm

 */
