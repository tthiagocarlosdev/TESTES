import { useState, useEffect } from 'react';

const Winner = ( props ) => {
  let computerPlay = props.moves.computerResult
  let humanPlay = props.moves.humanResult
  const [winner, setWinner] = useState(" ")

  useEffect(() => {
    if (computerPlay == "" && humanPlay == "") { 
      setWinner(" ")
    } else if(humanPlay == "stone" && computerPlay == "scissors"){
      setWinner("Human")
    } else if (humanPlay == "scissors" && computerPlay == "paper"){
      setWinner("Human")
    } else if (humanPlay == "paper" && computerPlay == "stone"){
      setWinner("Human")
    } else if(computerPlay == "stone" && humanPlay == "scissors"){
      setWinner("Computer")
    } else if (computerPlay == "scissors" && humanPlay == "paper"){
      setWinner("Computer")
    } else if (computerPlay == "paper" && humanPlay == "stone"){
      setWinner("Computer")
    } else if (computerPlay == humanPlay){
      setWinner("A tie")
    }
  },[computerPlay, humanPlay])

  return ( 
    <div className="win">
      <h1> Winner: { winner }</h1>
    </div>
   );
}
 
export default Winner;

// - papel/paper
// - tesoura/scissors
//  - pedra/stone

/*
stone win scissors
scissors win paper
paper win stone
*/
