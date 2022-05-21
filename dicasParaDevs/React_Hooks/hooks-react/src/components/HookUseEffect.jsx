import React, { useState} from 'react';

import './Components.css'

const HookUseEffect = () => {
  const [resourceType, setResourceType] = useState("posts")

  const changeResourceType = (resourceType) => {
    setResourceType(resourceType)
  }

  return ( 
    <div className="container-useEffect">
      <h1>useEffect</h1>
      <div className="useEffect">
        <h2> { resourceType } </h2>
        <div className="buttons-useEffect" style={ {display: "flex", alignItems: "center" }}>
          <button onClick={() => changeResourceType("posts")}>Posts</button>
          <button onClick={() => changeResourceType("comments")}>Comments</button>
          <button onClick={() => changeResourceType("todos")}>Todos</button>
        </div>
      </div>
    </div>
   );
}
 
export default HookUseEffect;