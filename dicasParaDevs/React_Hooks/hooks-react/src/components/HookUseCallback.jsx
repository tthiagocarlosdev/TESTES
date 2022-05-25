import { useState, useCallback } from 'react';

import List from './HookUseCallback-list';

const HookUseCallback = () => {
  const [text, setText] = useState("")
  const [ resourceType, setResourceType] = useState("posts")

  const getItems = useCallback(async() =>{
      console.log("getItems is being called!");
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${resourceType}`
      );
      const responseJSON = await response.json();
  
      return responseJSON
  }, [resourceType])

  return ( 
    <div className="container-useCallback">
      <h1>useCallback</h1>
      <div className="useCallback">
        <input value={text} onChange={(e)=> setText(e.target.value)} />

        <button onClick={() =>setResourceType("posts")}>Posts</button>
        <button onClick={() =>setResourceType("comments")}>Comments</button>
        <button onClick={() =>setResourceType("todos")}>Todos</button>

        <List getItems={getItems} />
      </div>
    </div>
   );
}
 
export default HookUseCallback;