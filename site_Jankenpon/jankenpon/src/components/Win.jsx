import { useState } from 'react';

const Win = ( props ) => {
  // const [gameResult, setGameResult] = useState("")

  // if(humanPlay == "stone" && computerPlay == "scissors"){
  //   setGameResult(true)
  // } else if (humanPlay == "scissors" && computerPlay == "paper"){
  //   setGameResult(true)
  // } else if (humanPlay == "paper" && computerPlay == "stone"){
  //   setGameResult(true)
  // } else if(computerPlay == "stone" && computerPlay == "scissors"){
  //   setGameResult(false)
  // } else if (computerPlay == "scissors" && computerPlay == "paper"){
  //   setGameResult(false)
  // } else if (computerPlay == "paper" && computerPlay == "stone"){
  //   setGameResult(false)
  // } else {
  //   setGameResult(0)
  // }

    // console.log(props)
    // console.log(props.moves.humanResult)
    // console.log(props.moves.computerResult)

  return ( 
    <div className="win">
      <h1> Win: </h1>
    </div>
   );
}
 
export default Win;

// - papel/paper
// - tesoura/scissors
//  - pedra/stone

/*
stone win scissors
scissors win paper
paper win stone
*/
