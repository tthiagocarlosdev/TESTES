import React from 'react';

import HookUseState from './components/HookUseState'
import HookUseEffect from './components/HookUseEffect'
import HookUseRef from './components/HookUseRef'
import HookUseReducer from './components/HookUseReducer'

import ThemeContextProvider from './components/HookUseContext-theme-context'
import Greeting from './components/HookUseContext-Greeting'
import Message from './components/HookUseContext-Message'

import HookUseMemo from './components/HookUseMemo'
import HookUseCallback from './components/HookUseCallback'

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
          <HookUseReducer />
        </div>
        <div className="third-container">
          <div className="container-useContext">
            <ThemeContextProvider>
              <Message />
              <Greeting />
            </ThemeContextProvider>
          </div>
          <div>
            <HookUseMemo />
          </div>
        </div>
        <div className="fourth-container">
          <HookUseCallback />
        </div>
      </div>
    </>
   );
}
 
export default App;