import React, { useState, useEffect } from 'react';

const ShowComputerChoice = ( props ) => {

  let choice = props.moves.computerResult
  const [computerChoise, setComputerChoice] = useState("")

    useEffect(() => {
      if(choice == "stone"){
        setComputerChoice("Stone")
      } else if(choice == "paper") {
        setComputerChoice("Paper")
      } else if(choice == "scissors") {
        setComputerChoice("Scissors")
      }
    }, [choice])

  return ( 
    <h1>Computer: { computerChoise }</h1>
   );
}
 
export default ShowComputerChoice;