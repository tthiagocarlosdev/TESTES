import { useState, useMemo } from 'react';

const HookUseMemo = () => {
  const [number, setNumber] = useState(1)
  const [text, setText] = useState("")

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return ( 
    <div className="conteiner-useMemo">
      <h1>useMemo</h1>
      <div className="useMemo">
        <p>{ number }</p>
        <input value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={()=> setNumber(2)}> Increment </button>
        <p>text: {text}</p>
      </div>
    </div>
    
   );
}

const slowFunction = (num) => {
  console.log("Slow function is being called!");
  for(let i = 0; i <= 10000; i++){}
  return num * 2;
 };
 
export default HookUseMemo;