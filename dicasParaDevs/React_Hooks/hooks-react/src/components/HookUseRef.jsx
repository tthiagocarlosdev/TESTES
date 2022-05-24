import React, { useState, useEffect, useRef} from 'react';

import './Components.css'

const HookUseRef = () => {
  const [name, setName] = useState("")
  
  const previousName = useRef()

  useEffect(() =>{
    previousName.current = name
  }, [name])

  return ( 
    <div className="container-useRef">
      <h1>useRef</h1>
      <div className="useRef">
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p> Hello! My name is { name }</p>
        <p>An may name was {previousName.current}</p>
      </div>
    </div>
   );
}
 
export default HookUseRef;