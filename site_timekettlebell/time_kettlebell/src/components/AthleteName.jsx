import React from 'react';

const AthleteName = ( { children } ) => {
  return ( 
    <>
      <div className="athlete-name">
        <h2> { children } </h2>
      </div>
    </>
   );
}
 
export default AthleteName;