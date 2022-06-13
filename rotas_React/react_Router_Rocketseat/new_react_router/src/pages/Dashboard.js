import React from 'react';
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();

  return ( 
    <>
      <h1>Dashboard</h1>
      <button onClick={() => navigate('/profile')} > Profile </button>
    </>
    
   );
}
 
export default Dashboard;