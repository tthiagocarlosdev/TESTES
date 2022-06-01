import { useState, useEffect } from 'react';

const Scoreboard = (props) => {
  let computerPlay = props.moves.computerResult
  let humanPlay = props.moves.humanResult
  const [humanScore, setHumanScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)

  useEffect(() => {
    if(humanPlay == "stone" && computerPlay == "scissors"){
      setHumanScore(humanScore + 1)
    } else if (humanPlay == "scissors" && computerPlay == "paper"){
      setHumanScore(humanScore + 1)
    } else if (humanPlay == "paper" && computerPlay == "stone"){
      setHumanScore(humanScore + 1)
    } else if(computerPlay == "stone" && humanPlay == "scissors"){
      setComputerScore(computerScore + 1)
    } else if (computerPlay == "scissors" && humanPlay == "paper"){
      setComputerScore(computerScore + 1)
    } else if (computerPlay == "paper" && humanPlay == "stone"){
      setComputerScore(computerScore + 1)
    }
  },[computerPlay, humanPlay])

  return ( 
    <div className="scoreboard">
      <h1> Scoreboard: Human { humanScore } x { computerScore } Computer </h1>
    </div>
   );
}
 
export default Scoreboard;