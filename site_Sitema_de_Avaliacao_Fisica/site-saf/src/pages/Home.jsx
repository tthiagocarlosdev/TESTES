import React from 'react';
import { useNavigate } from 'react-router-dom'

//components
import Header from '../components/Header'
import Button from '../components/Button'

import '../App.css'

const Home = () => {
  let navigate = useNavigate()

  return ( 
    <>
      <div className="header">
        <Header> Physical Assessment System </Header>
        </div>
        <div className="start-assessment-button">
          <Button onClick={() => navigate('/personalData')} > Start Assessment </Button>
        </div>
        <div className="finish-assessment-button">
          <Button onClick={() => navigate('/finalResult')} > Finish Assessment </Button>
        </div>
    </>
   );
}
 
export default Home;