import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Purchases from './pages/Purchases';
import Password from './pages/Password';


export default function MainRoutes () {
  return (
    <Routes>
      <Route path="/" element={ <Dashboard /> } />

      <Route path="/profile" element={ <Profile /> }>
        <Route path="/profile/purchases" element={ <Purchases /> } />
        <Route path="/profile/password" element={ <Password /> } />
      </Route>

      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}