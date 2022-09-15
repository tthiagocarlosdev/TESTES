import React, { useState } from 'react';

import './pages.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import AthleteName from '../components/AthleteName'
import Repetitions from '../components/Repetitions'
import Time from '../components/Time'

const Timer = (props) => {
  const {userName} = props.props
  
  console.log(userName)

  return (
  
      <div className="container">
        <Header />
        <div className="box-athlete-name">
          <h2> {userName} </h2>
        </div>
        {/* <AthleteName> { athlete.name } </AthleteName>  */}
        <div className="box-time-reps">
          <Time/>
          <Repetitions/>
        </div>
        <Footer />
      </div>

   );
}
 
export default Timer;