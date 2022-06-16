import React from 'react';

import Header from '../components/Header'
import Button from '../components/Button'

const Home = () => {
  return ( 
    <>
      <Header/>

      <div className="buttons">
        <div className="button-registration">
          <Button> Registration </Button>
        </div>
        <div className="button-start">
          <Button> Start </Button>
        </div>
      </div>
      
    </>
   );
}
 
export default Home;