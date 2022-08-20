import { useState } from 'react';
import Button from './Button'

const Repetitions = ( ) => {
  const [repetitions, setRepetitions] = useState(0);

  const handleRepsClick = () => {
    setRepetitions(repetitions + 1)
  }

  return ( 
    <>
      <div className="box-repetitions">
        <h1> { repetitions } </h1>
        <Button onClick={ handleRepsClick } > + 1 rep </Button>
      </div>
    </>
   );
}
 
export default Repetitions;