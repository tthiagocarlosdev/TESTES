const basicFunctions = {
    
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

  loading(){
  
    function syncDelay(milliseconds){
      let start = new Date().getTime();
      let end=0;
      while( (end-start) < milliseconds){
          end = new Date().getTime();
      }
     }  
    
    let toLoad = `....`
    let percentage = 20

    while (percentage <= 100) {
        console.clear()
        console.log(`loading ${toLoad} ${percentage}%`)
        syncDelay(1000);
        toLoad += `....`
        percentage += 20
    }
},

  getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  },

}

module.exports = { basicFunctions }