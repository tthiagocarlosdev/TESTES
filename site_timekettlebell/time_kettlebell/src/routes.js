import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Registration from './pages/Registration'
import Timer from './pages/Timer'

const MainRoutes = () => {
  return ( 
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/registration" element={ <Registration /> } />
      <Route path="/timer" element={ <Timer props={{AthleteName:'Thiago Carlos'}} /> } />
    </Routes>
   );
}
 
export default MainRoutes;