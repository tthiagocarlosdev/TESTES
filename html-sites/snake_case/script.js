function snakeCase(){
  const typed_text = document.querySelector('input#typed-text').value;
  const string_final = document.querySelector('.string_final');
  const string_lenght = document.querySelector('.string_lenght')

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
    let special_characters_1 = underlined_text.charCodeAt(counter) >= 33 && underlined_text.charCodeAt(counter) <= 47;
    let special_characters_2 = underlined_text.charCodeAt(counter) >= 58 && underlined_text.charCodeAt(counter) <= 64;
    let special_characters_3 = underlined_text.charCodeAt(counter) >= 91 && underlined_text.charCodeAt(counter) <= 94 || underlined_text.charCodeAt(counter) === 96;
    let special_characters_4= underlined_text.charCodeAt(counter) >= 123 && underlined_text.charCodeAt(counter) <= 191;


    
    if (special_characters_1) {
      array_without_accent[counter] = ''
    } else if (special_characters_2) {
      array_without_accent[counter] = ''
    } else if (special_characters_3) {
      array_without_accent[counter] = ''
    } else if (special_characters_4) {
      array_without_accent[counter] = '1'}
    // } else if (letters_Cc) {
    //   array_without_accent[counter] = 'c'
    // } else if (letter_E) {
    //   array_without_accent[counter] = 'e'
    // } else if (letter_I) {
    //   array_without_accent[counter] = 'i'
    // } else if (letter_D) {
    //   array_without_accent[counter] = 'd'
    // }

  }
  

  //criando a nova string a partir dos novos valores do array
  text_snake_case = array_without_accent.toString().replace(/,/gi, "");

  string_final.innerHTML = text_snake_case;
  string_lenght.innerHTML = text_size;
}
/*

TABELA ASCII
https://www.ime.usp.br/~glauber/html/acentos.htm
special_characters_1: 33 a 47 - !"#$%&'()*+,-./
special_characters_2: 58 a 64 - :;<=>?@
special_characters_3: 91 a 96 - [\]^_` 95
special_characters_4: 123 a 191 - {|}~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·,¹º»¼½¾¿
letter_a: 224 a 230 ou 256 - à á â ã ä å æ Ā
letter_c: 231
letter_e: 232 a 235 - è é ê ë 
letter_i: 236 a 239 - ì í î ï
letter_d: 240 - ð
letter_n: 241 - ñ
letter_o: 242 a 246 ou 248 - ò ó ô õ ö ø
letter_x: 215 ou 247 - × ÷
letter_u: 249 a 252 - ù ú û ü
letter_y: 253 ou 255 - ý
letter_b: 254 - þ


 */
