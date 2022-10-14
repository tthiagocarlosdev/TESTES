function header(text){
  
  const line_size = 50
  let text_size = text.length
  //A função Math.ceil(x) retorna o menor número inteiro maior ou igual a "x".
  let space_size = Math.ceil(((line_size - text_size) / 2))
  let text_with_space = ""

  for (let counter = 1; counter < line_size; counter++) {
    if (counter < space_size) {
      text_with_space += " "
    } else if (space_size == counter){
      text_with_space += text
    }
  }

  function line(){
    let line = ""

    for (let counter = 1; counter < line_size; counter++) {
      line += "-"
    }

    console.log(line)
  }
  


  line()
  console.log(text_with_space)
  line()
  
}

header("triangulo_inicio")