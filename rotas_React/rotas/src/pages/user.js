import React from 'react';
import { useNavigate } from 'react-router-dom'

const User = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/')
  }

  return ( 
    <>
      <h1> User </h1>
      <button onClick={handleGoHome} > Home </button>  
    </>
   );
}
 
export default User;