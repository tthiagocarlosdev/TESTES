import React from 'react';

import './pages.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import AthleteName from '../components/AthleteName'
import Repetitions from '../components/Repetitions'
import Time from '../components/Time'

const Timer = () => {

  return (
  
      <div className="container">
        <Header />
        <AthleteName> THIAGO CARLOS </AthleteName>
        <div className="box-time-reps">
          <Time/>
          <Repetitions/>
        </div>
        <Footer />
      </div>

   );
}
 
export default Timer;