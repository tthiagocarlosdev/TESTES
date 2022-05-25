import React from 'react';
import { useState } from 'react'

import './Components.css'

const HookUseState = () => {
  const [count, setCount] = useState(0)
  const[theme, setTheme] = useState("light")

  const incrementCount = () => {
    setCount((prevState) => prevState + 1)
    setTheme("dark")
  }

  return ( 
    <>
      <div className="container-useState">
        <h1>useState</h1>
        <div className="useState">
          <h2 > { count } </h2>
          <p> { theme }</p>
          <button onClick={ incrementCount } > Increment </button>
        </div>
        
      </div>
      
    </>
   );
}
 
export default HookUseState;