import { useState, useEffect } from 'react';

import Button from './Button'

import '../components/Components.css'

const Time = () => {
  const [time, setTime] = useState(10 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  function startTime(){
    setActive(true);
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }
  },[active, time])

  return ( 
    <div className="box-time">
      <div className="timeContainer">
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      
      <Button onClick={startTime}>
        Iniciar Tempo
      </Button>
    </div>
    
   );
}
 
export default Time;