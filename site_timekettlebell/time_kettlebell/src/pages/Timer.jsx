import React, { useState } from 'react';

import './pages.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import AthleteName from '../components/AthleteName'
import Repetitions from '../components/Repetitions'
import Time from '../components/Time'
import Button from '../components/Button'

const Timer = () => {

  let [ time, setTime ] = useState()

  const TEMPO_TOTAL = 30;
  let [tempoRestante, setTempoRestante] = useState(TEMPO_TOTAL)
  
  const startTimer = () => {
    setTimeout(() => {
        if (tempoRestante > 0) {
            setTempoRestante(tempoRestante -= 1);
        }
    }, 1000)
  }

  const formataTempo = (time) => {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
      if (seconds < 10) {
          seconds = `0${seconds}`;
      }

      setTime(`${minutes}:${seconds}`);
  }

  formataTempo(tempoRestante)

  return (
  
      <div className="container-body">
        <Header />
        <AthleteName> Thiago Carlos </AthleteName>
        <div className="container-operator">
          <div className="time-and-reps">
            <Repetitions> 100 </Repetitions>
            <Time> { time } </Time>
          </div>
          <div className="operation-button">
            <Button className="child" onClick={startTimer()} > Start </Button>
            <Button className="child" > Click </Button>
          </div>
        </div>
        <Footer />
      </div>

   );
}
 
export default Timer;