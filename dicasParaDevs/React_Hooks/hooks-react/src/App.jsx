import React from 'react';
import HookUseState from './components/HookUseState'
import HookUseEffect from './components/HookUseEffect'

import './App.css'

const App = () => {
  return ( 
    <>
      <div className="container">
        <HookUseState />
        <HookUseEffect />
      </div>
    </>
   );
}
 
export default App;