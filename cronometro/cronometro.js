var input = require('readline-sync')

//functions
function TimeSeconds (time) {
  return time * 60
}

function syncDelay(milliseconds){
  var start = new Date().getTime();
  var end=0;
  while( (end-start) < milliseconds){
      end = new Date().getTime();
  }
 } 

 const FormatTime = (time) => {
  const minute = Math.floor(time / 60)
  let seconds = time % 60
  if( seconds < 10 ){
    seconds = `0${seconds}`
  }
  console.clear()
  console.log(`${minute}:${seconds}`) 
}

const tempoEmMinutos = input.questionInt('Digite o tempo em minutos: ')
let tempoEmSegundos = TimeSeconds(tempoEmMinutos)

while(tempoEmSegundos > 0){
  tempoEmSegundos -= 1
  syncDelay(1000)
  // console.log(tempoEmSegundos)
  FormatTime(tempoEmSegundos)
}



















//  syncDelay(1000);

function Cronometro() {
  

}

function tempoEmMilisegundos(tempoEmMinutos){
  return tempoEmMinutos * 60000
}