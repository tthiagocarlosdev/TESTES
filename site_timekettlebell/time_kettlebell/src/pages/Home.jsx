import React from 'react';
import { useNavigate } from 'react-router-dom'

import Header from '../components/Header'
import Button from '../components/Button'

import './pages.css'

const Home = () => {
  let navigate = useNavigate()
  return ( 
    <>
      <Header/>
      <div className="container-buttons">
        <div className="button-registration">
          <Button onClick={() => navigate('/registration')} > Registration </Button>
        </div>
        <div className="button-start">
          <Button onClick={() => navigate('/timer')} > Start </Button>
        </div>
      </div>
      
    </>
   );
}
 
export default Home;