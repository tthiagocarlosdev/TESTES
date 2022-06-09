import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// Pages
import Home from './pages/Home';
import PersonalData from './pages/PersonalData'

import './App.css'

const App = () => {

  
  return ( 
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/PersonalData' element={<PersonalData />} />
        </Routes>
      </div>
    </BrowserRouter>
    
   );
}
 
export default App;

// https://ateliware.com/blog/react-router