import React from 'react';
import { useNavigate } from 'react-router-dom'

// Components
import Button from './components/Button';
import Header from './components/Header';

import './App.css'

const App = () => {
  const navigate = useNavigate();

  const handlePersonalData = () => {
    navigate('/components/PersonalData')
  }
  
  return ( 
    <div className="app">
      <div className="header">
      <Header> Physical Assessment System </Header>
    </div>
    <div className="start-assessment-button">
      <Button onClick={handlePersonalData} > Start Assessment </Button>
    </div>
    <div className="finish-assessment-button">
      <Button> Finish Assessment </Button>
    </div>
    </div>
   );
}
 
export default App;

// https://ateliware.com/blog/react-router