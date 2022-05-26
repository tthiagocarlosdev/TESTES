import { useLayoutEffect, useState } from 'react';

const HookUseLayoutEffect = () => {
  const [count, setCount] = useState(1);

  useLayoutEffect(() => {
    console.log(count);
  }, [count]);

  return ( 
    <div className="container-useLayoutEffect">
      <h1>useLayoutEffect</h1>
      <div className="useLayoutEffect">
        <h1>{count}</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      </div>
    </div>
   );
}
 
export default HookUseLayoutEffect;