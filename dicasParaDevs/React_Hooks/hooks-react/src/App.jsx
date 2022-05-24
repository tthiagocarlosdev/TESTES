import React from 'react';
import HookUseState from './components/HookUseState'
import HookUseEffect from './components/HookUseEffect'
import HookUseRef from './components/HookUseRef'

import './App.css'

const App = () => {
  return ( 
    <>
      <div className="container">
        <h1 className="title">Hooks React</h1>
        <div className="first-container">
          <HookUseState />
          <HookUseEffect />
        </div>
        <div className="second-container">
          <HookUseRef />
        </div>
      </div>
    </>
   );
}
 
export default App;