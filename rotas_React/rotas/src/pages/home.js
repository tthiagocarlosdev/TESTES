import React from 'react';
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  
  const handleGoAbout = () => {
    navigate('./about')
  }

  const handleGoUser = () => {
    navigate('./user')
  }

  return ( 
    <div>
      <h1> Home </h1>
      <button onClick={handleGoAbout} > About </button>
      <button onClick={handleGoUser} > User </button>
    </div>
   );
}
 
export default Home;