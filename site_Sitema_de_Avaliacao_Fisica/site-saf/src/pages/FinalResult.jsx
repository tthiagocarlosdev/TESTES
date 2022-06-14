import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button'

const FinalResult = () => {
  const navigate = useNavigate();
  
  return ( 
    <>
      <h1> Final Result </h1>
      <Button onClick={() => navigate('/')} > New Physical Assessment </Button>
    </>
   );
}
 
export default FinalResult;