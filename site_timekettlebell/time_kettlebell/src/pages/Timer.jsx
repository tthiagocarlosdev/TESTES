import React, { useState, useEffect } from 'react';

import './pages.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import AthleteName from '../components/AthleteName'
import Repetitions from '../components/Repetitions'
import Time from '../components/Time'
import Button from '../components/Button'

const Timer = () => {

  const [timeInSeconds, setTimeInSeconds] = useState(0)
  // const [tempoEmMinutos, setTempoEmMinutos] = useState(0)
  const [gameTime, setGameTime] = useState('00:00')

  // console.log(`TEMPO EM MINUTOS: ${tempoEmMinutos}`)

  function startStopWatch(time) {
      
    // function timeSeconds (timeInMinutes) {
    //   return Math.round(timeInMinutes * 60)
    // }

    function syncDelay(){
      var start = new Date().getTime();
      var end=0;
      while( (end-start) < 1000){
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
      console.log(`TIME: ${minute}:${seconds}`)
      setGameTime(`${minute}:${seconds}`)
    }

    let tempoEmSegundos = time
    console.log(`TEMPO EM SEGUNDOS: ${tempoEmSegundos}`)
    
    while(tempoEmSegundos > 0){
      
      syncDelay()
      FormatTime(tempoEmSegundos)
      console.log(`TEMPO EM SEGUNDOSS: ${tempoEmSegundos}`)
      tempoEmSegundos--         
    }

  }

  useEffect(() => {
     
    startStopWatch(timeInSeconds)

  },[timeInSeconds])

  const changeTime = () => {
    setTimeInSeconds(5)
  }

  // repetitions

  const [repetitions, setRepetitions] = useState(0)

  const changeRepetitions = () => {
    setRepetitions((prevState)=> prevState + 1)
    console.log(`REPETIÇÕES: ${repetitions}`)
  }

  return (
  
      <div className="container-body">
        <Header />
        <AthleteName> Thiago Carlos </AthleteName>
        <div className="container-operator">
          <div className="time-and-reps">
            <Repetitions> { repetitions } </Repetitions>
            <Time/>
          </div>
          <div className="operation-button">
            <Button className="child" onClick={changeTime}> Start </Button>
            <Button className="child" onClick={changeRepetitions}> Click </Button>
          </div>
        </div>
        <Footer />
      </div>

   );
}
 
export default Timer;