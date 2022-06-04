import React from 'react';

import './Components.css'

const Header = ( { children }) => {
  return ( 
    <div className="header">
      <h1> { children } </h1>
    </div>
    
   );
}
 
export default Header;