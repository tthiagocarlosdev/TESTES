import React from 'react';
import { useNavigate } from 'react-router-dom';

// components
import Header from '../components/Header'
import Button from '../components/Button'

const Neuromuscular = () => {
  const navigate = useNavigate();

  return ( 
    
    <div className="cardiorespiratory">
      <div className="header">
          <Header > Physical Assessment System </Header>
      </div>
      
      <div className="container">   
        <div className="pate-title">
          <h1> Neuromuscular </h1>
        </div>  
      </div>
      <div className="button-next">
          <Button onClick={() => navigate('/aerobic')} > Next </Button>
      </div>
      
    </div>
   );
}
 
export default Neuromuscular;