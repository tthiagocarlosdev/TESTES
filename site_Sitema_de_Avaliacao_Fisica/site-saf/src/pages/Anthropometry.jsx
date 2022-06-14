import React from 'react';
import { useNavigate } from 'react-router-dom';

// components
import Header from '../components/Header'
import Button from '../components/Button'

const Anthropometry = () => {
  const navigate = useNavigate();

  return ( 
    
    <div className="cardiorespiratory">
      <div className="header">
          <Header > Physical Assessment System </Header>
      </div>
      
      <div className="container">   
        <div className="pate-title">
          <h1> Anthropometry </h1>
        </div>  
      </div>
      <div className="button-next">
          <Button onClick={() => navigate('/neuromuscular')} > Next </Button>
      </div>
      
    </div>
   );
}
 
export default Anthropometry;