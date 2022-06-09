import React from 'react';
import { useNavigate } from 'react-router-dom'

import Header from '../components/Header'
import Button from '../components/Button'

import PersonalData from '../pages/PersonalData'

const Home = () => {
  let navigate = useNavigate()

  const handlePersonalData = () => {
    navigate('PersonalData')
  }

  return ( 
    <>
      <div className="header">
        <Header> Physical Assessment System </Header>
        </div>
        <div className="start-assessment-button">
          <Button onClick={() => handlePersonalData} > Start Assessment </Button>
        </div>
        <div className="finish-assessment-button">
          <Button> Finish Assessment </Button>
        </div>
    </>
   );
}
 
export default Home;