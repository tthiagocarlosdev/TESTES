import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1)
  }

  const handleGoUser = () => {
    navigate('/user')
  }

  return ( 
    <>
      <h1>About</h1>
      <button onClick={handleGoBack}> Go back </button>
      <button onClick={handleGoUser} > User </button>
    </>
   );
}
 
export default About;