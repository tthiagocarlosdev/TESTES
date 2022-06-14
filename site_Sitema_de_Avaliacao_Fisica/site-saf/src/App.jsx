import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes';

// import './App.css'

const App = () => {

  return ( 
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
   );
}
 
export default App;

// https://ateliware.com/blog/react-router