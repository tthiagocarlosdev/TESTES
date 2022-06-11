import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const Profile = ( { match } ) => {
  const navigate = useNavigate();

  return ( 
    <>
      <h1> Profile </h1>

      <button onClick={() => navigate('/')} > Dashboard </button>

      <Outlet /> 
    </>
    
   );
}
 
export default Profile;