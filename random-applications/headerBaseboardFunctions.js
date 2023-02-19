const headerBaseboardFunctions = {
    
  header(text) {
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
    
      function line() {
        let line = ""
    
        for (let index = 0; index <= lineSize; index++) {
          line += "-"
        }
    
        console.log(line)
      }
    
      line()
      console.log(textWithSpace)
      line()
    },

    line(text){
      let textSize = text.length;
      let lineSize = textSize * 2;
      let line = ""
  
      for (let index = 0; index <= lineSize; index++) {
        line += "-"
      }
  
      console.log(line)
    },
}

module.exports = {
    headerBaseboardFunctions
}
    
