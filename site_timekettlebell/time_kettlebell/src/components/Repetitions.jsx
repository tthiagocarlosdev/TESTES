import React from 'react';

const Repetitions = ( { children } ) => {
  return ( 
    <>
      <div className="repetitions">
        <h2> { children } </h2>
      </div>
    </>
   );
}
 
export default Repetitions;