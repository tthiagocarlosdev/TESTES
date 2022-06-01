import { useState, useEffect } from 'react';

const NumberOfGames = (props) => {
  let computerResult = props.moves.computerResult
  let humanResult = props.moves.humanResult
  const [numberOfGames, setNumberOfGames] = useState(-1)

  useEffect(() =>{
    setNumberOfGames(numberOfGames + 1)
  }, [computerResult, humanResult])

  return ( 
    <div className="number-of-games">
      <h1>Number of games: { numberOfGames } </h1>
    </div>
   );
}
 
export default NumberOfGames;