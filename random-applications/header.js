function header(text) {
  let textSize = text.length;
  let lineSize = textSize * 2;
  let spaceSize = Math.ceil(textSize / 2)
  let textWithSpace = ""

  for (let index = 0; index <= spaceSize; index++) {
    if (index < spaceSize) {
      textWithSpace += " "
    } else if (index == spaceSize) {
      textWithSpace += text
    }
  }

  function line(size) {
    let line = ""

    for (let index = 0; index <= size; index++) {
      line += "-"
    }

    console.log(line)
  }

  line(lineSize)
  console.log(textWithSpace)
  line(lineSize)
}

header("título da aplicação")