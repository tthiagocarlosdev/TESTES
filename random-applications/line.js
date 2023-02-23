function line(text){
    let textSize = text.length;
    let lineSize = textSize * 2;
    let line = ""

    for (let index = 0; index <= lineSize; index++) {
      line += "-"
    }

    console.log(line)
  }

  line("título da aplicação")