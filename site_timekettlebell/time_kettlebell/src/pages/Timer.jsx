import React, { useState, useEffect } from 'react';

import './pages.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import AthleteName from '../components/AthleteName'
import Repetitions from '../components/Repetitions'
import Time from '../components/Time'
import Button from '../components/Button'

const Timer = () => {

  const [tempoEmMinutos, setTempoEmMinutos] = useState(0)
  let [gameTime, setGameTime] = useState('00:00')

  console.log(`TEMPO EM MINUTOS: ${tempoEmMinutos}`)

  useEffect(( ) => {
    Stopwatch()
    const Stopwatch = async () => {
      
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
        console.log(`TIME: ${minute}:${seconds}`)
        setGameTime(`${minute}:${seconds}`) 
         
      }
      
      let tempoEmSegundos = TimeSeconds(tempoEmMinutos)
      console.log(`TEMPO EM SEGUNDOS: ${tempoEmSegundos}`)
      
      while(tempoEmSegundos > 0){
        tempoEmSegundos -= 1
        syncDelay(1000)
        FormatTime(tempoEmSegundos)
      }
      
    }

  },[tempoEmMinutos])

  const changeTime = () => {
    setTempoEmMinutos(1)
  }

  return (
  
      <div className="container-body">
        <Header />
        <AthleteName> Thiago Carlos </AthleteName>
        <div className="container-operator">
          <div className="time-and-reps">
            <Repetitions> 100 </Repetitions>
            <Time> { gameTime } </Time>
          </div>
          <div className="operation-button">
            <Button className="child" onClick={() => changeTime()}> Start </Button>
            <Button className="child" > Click </Button>
          </div>
        </div>
        <Footer />
      </div>

   );
}
 
export default Timer;