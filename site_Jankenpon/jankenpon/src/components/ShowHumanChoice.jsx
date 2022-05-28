import React, { useState, useEffect } from 'react';

const ShowHumanChoice = ( props ) => {
  // console.log(props)
  console.log(props.moves.humanResult)

  let choice = props.moves.humanResult
  const [humanChoise, setHumanChoice] = useState("")

    useEffect(() => {
      if(choice == "stone"){
        setHumanChoice("Pedra")
      } else if(choice == "paper") {
        setHumanChoice("Papel")
      } else if(choice == "scissors") {
        setHumanChoice("Tesoura")
      }
    }, [choice])

    

  return ( 
    <h1>Human: { humanChoise }</h1>
   );
}
 
export default ShowHumanChoice;