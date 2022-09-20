function snakeCase(){
  const typed_text = document.querySelector('input#typed-text').value;
  const final_result = document.querySelector('.final-result');

  let lowercaseText = typed_text.toLowerCase();
  let underlined_text = lowercaseText.replace(/ /gi, "_");
  let text_size = underlined_text.length;
  let array_string = [];
  let text_snake_case = ''

  //extraindo cada caracter da string para um array
  for( let counter = 0; counter < text_size; counter++ ){
    array_string[counter] = underlined_text.substr(counter, 1)
  }

  // processando cada caracter do array para detectar um acento ou símbolo e fazer a substituição
  for( let counter = 0; counter < text_size; counter++ ){

    //letra e
    if(underlined_text.charCodeAt(counter) >= 232 && underlined_text.charCodeAt(counter) <= 235){
      array_string[counter] = 'e'
    }

  }

  //criando a nova string a partir dos novos valores do array
  for( const value of array_string){
    text_snake_case += value
  }

  final_result.innerHTML = text_snake_case;
}
/*

TABELA ASCII
https://www.ime.usp.br/~glauber/html/acentos.htm

 */
