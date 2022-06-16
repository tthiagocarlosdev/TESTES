var input = require('readline-sync')

const Header = () => {
  console.log(`===================`)
  console.log(` TIMER KETTLEBEL `)
  console.log(`===================`)
}

const Stopwatch = (timeInMinutes) => {
  
  const TimeSeconds = (time) => {
    return time * 60
  }
  
  const SyncDelay= (milliseconds) => {
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
    Header()
    console.log(`${minute}:${seconds}`)
  }
  
  let timeSeconds = TimeSeconds(timeInMinutes)
  
  while(timeSeconds > 0){
    timeSeconds -= 1
    SyncDelay(1000)
    FormatTime(timeSeconds)
  }
}

const PickUpKey = () => {
  let key = input.question(`rep: `)
  return key
}


Header()
const timeMinutes = input.question(`Digite o tempo em minutos: `)
console.log(timeMinutes)
Stopwatch(timeMinutes)
