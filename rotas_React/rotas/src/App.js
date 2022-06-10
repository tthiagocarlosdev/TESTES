import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import User from './pages/user';

const Rotas = () => {

  return ( 
    
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/user' element={ <User />} />
        <Route path='*' element={ <h1> Not Found </h1> } />
      </Routes>
    </div>
  
   );
}
 
export default Rotas;

// https://www.youtube.com/watch?v=k8uLyrYJBYQ