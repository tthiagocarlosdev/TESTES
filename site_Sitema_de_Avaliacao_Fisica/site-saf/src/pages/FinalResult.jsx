import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button'

const FinalResult = () => {
  const navigate = useNavigate();
  const [ userData, setUserData ] = useState([
    {
      userName: 'Limeira',
    }
  ])

  console.log(userData)
  return ( 
    <>
      <h1> Final Result </h1>
      <p> Name: { userData.userName } </p>
      <Button onClick={() => navigate('/')} > New Assessment </Button>
    </>
   );
}
 
export default FinalResult;