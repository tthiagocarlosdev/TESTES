import React from 'react';

const Time = ( { children } ) => {
  return ( 
    <>
      <div className="time">
        <h2> { children } </h2>
      </div>
    </>
   );
}
 
export default Time;