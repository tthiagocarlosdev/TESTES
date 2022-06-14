import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import PersonalData from './pages/PersonalData';
import Anamnesis from './pages/Anamnesis';
import Cardiorespiratory from './pages/Cardiorespiratory';
import Anthropometry from './pages/Anthropometry';
import Neuromuscular from './pages/Neuromuscular';
import Aerobic from './pages/Aerobic';
import FinalResult from './pages/FinalResult';

export default function MainRoutes () {
  return ( 
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/personalData" element={ <PersonalData /> } />
      <Route path="/anamnesis" element={ <Anamnesis /> } />
      <Route path="/cardiorespiratory" element={ <Cardiorespiratory /> } />
      <Route path="/anthropometry" element={ <Anthropometry /> } />
      <Route path="/neuromuscular" element={ <Neuromuscular /> } />
      <Route path="/aerobic" element={ <Aerobic /> } />
      <Route path="/finalResult" element={ <FinalResult /> } />
      <Route path="*" element={ <h1>Not Found</h1> } />
    </Routes>
   );
}