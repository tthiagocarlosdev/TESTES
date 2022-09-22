function snakeCase(){
  const typed_text = document.querySelector('input#typed-text').value;
  const string_final = document.querySelector('.string_final');
  const string_size = document.querySelector('.string_size')

  let underlined_text = typed_text.replace(/ /gi, "_");
  let text_size = underlined_text.length;
  let array_without_accent = [];
  let text_snake_case = '';
  let array_numbers = [];
  

  //extraindo cada caracter da string para um array
  array_without_accent = underlined_text.split('')

  // processando cada caracter do array para detectar um acento ou símbolo e fazer a substituição
  for( let counter = 0; counter < text_size; counter++ ){
    
    //conditions
    array_numbers.push(underlined_text.charCodeAt(counter)) 
    
    let numbers = underlined_text.charCodeAt(counter) >= 48 && underlined_text.charCodeAt(counter) <= 57;
    let capital_letters = underlined_text.charCodeAt(counter) >= 65 && underlined_text.charCodeAt(counter) <= 90;
    let small_letters = underlined_text.charCodeAt(counter) >= 97 && underlined_text.charCodeAt(counter) <= 122;
    let underline = underlined_text.charCodeAt(counter) === 95
    let letter_c = underlined_text.charCodeAt(counter) === 199 || underlined_text.charCodeAt(counter) === 231 || underlined_text.charCodeAt(counter) === 162;


    if(numbers && capital_letters && small_letters && underline){
      
    } else if (letter_c){
      array_without_accent[counter] = 'c'
    } else if (!numbers && !capital_letters && !small_letters && !underline) {
      array_without_accent[counter] = ''
    }
    

  }
  
  console.log(array_numbers);

  //criando a nova string a partir dos novos valores do array
  text_snake_case = array_without_accent.toString().replace(/,/gi, "").toLowerCase();

  string_final.innerHTML = `Final string: ${text_snake_case}`;
  string_size.innerHTML = `String size: ${text_snake_case.length}`;
}
/*

TABELA ASCII
https://www.matematica.pt/util/resumos/tabela-ascii.php

special_characters_1: 33 a 47 ou 59 a 64 - !"#$%&'()*+,-./
numbers: 48 a 57 - 0123456789
special_characters_2: 58 a 64 - :;<=>?@
capital_letters: 65 a 90 - ABCDEFGHIJKLMNOPQRSTUVWXYZ
special_characters_3: 91 a 96 - [\]^_`
small_letters: 97 a 122 - abcdefghijklmnopqrstuvwxyz
special_characters_4: 123 a 127 - {|}~
letter_c: 128 ou 135 - Çç
letter_u: 129 ou 150 a 151 - üûù
letter_e: 130 ou 136 a 138 - éêëè
letter_a: 131 a 134 - âäàå
letter_i: 139 a 141 - ïîì
letter_A: 142 a 143 - ÄÅ
letter_E: 144 - É
letter_aeAE: 145 e 146 - æÆ
letter_o: 147 a 149 - ôöò
letter_y: 152 - ÿ
letter_O: 153 - Ö
letter_U: 154 - Ü
letter_o: 155 ou 157 - øØ
special_characters_5: 156 - £
letter_x: 158 - ×
letter_a: 160 - á
letter_u: 161 ou 163 - ùú
letter_o: 162 - ó
letter_n: 164 a 165 - ñÑ
special_characters_6: 166 a 180 ªº¿®¬½¼¡«»░▒▓│┤
letter_A: 181 a 183 - ÁÂÀ
special_characters_7: 184 a 188 - ©╣║╗╝
letter_c: 189 - ¢
special_characters_8: 190 a 197 - ¥┐└┴┬├─┼
letter_a: 198 a 199 - ãÃ
special_characters_9: 200 - 207 - ╚╔╩╦╠═╬¤
letter_d: 208 a 209 - ðÐ
letter_E: 210 a 212 - ÊËÈ
letter_I: 213 a 216 - ıÍÎÏ
special_characters_10: 217 a 223 - ┘┌█▄¦
letter_i: 222 -	Ì
special_characters_11: 223 - ▀
letter_O: 224 - Ó
letter_sz: 225 - ß
letter_O: 226 a 229 - ÔÒõÕ
special_characters_12: 230 a 232 - µþÞ
letter_U: 233 a 235 - ÚÛÙ
letter_y: 236 a 237 - ýÝ
special_characters_13: 238 a 255 - ¯´ ±‗¾¶§÷¸°¨·¹³²■ 

 */
