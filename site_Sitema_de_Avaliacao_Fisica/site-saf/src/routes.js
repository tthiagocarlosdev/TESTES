import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import PersonalData from './pages/PersonalData';
import FinalResult from './pages/FinalResult';

export default function MainRoutes () {
  return ( 
    <Routes>
      <Route path="/" element={ <Home/> } />

      <Route path="/personalData" element={ <PersonalData /> } />
      <Route path="/finalResult" element={ <FinalResult /> } />

      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
   );
}