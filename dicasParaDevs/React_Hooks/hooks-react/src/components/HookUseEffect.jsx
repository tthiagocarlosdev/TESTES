import React, { useState, useEffect } from 'react';

import './Components.css'

const HookUseEffect = () => {
  const [items, setItems] = useState([])
  const [resourceType, setResourceType] = useState("posts")

  useEffect(() => {
    const fetchResourceTypes = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      const responseJSON = await response.json()
      
      setItems(responseJSON)
    }
    // fetchResourceTypes()
  }, [resourceType])

  //componentDidMount
  useEffect(() => {
    console.log("componentDidMount")

    return () => {
      // componentWillUnmount
      console.log("componentWillUnmount")
    }
  },[])

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
      {items.map((item) => (
        <div>
          <p>{item.title}</p>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
   );
}
 
export default HookUseEffect;