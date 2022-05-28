import React, { useState} from 'react';

// components
import Title from './components/Title'
import Button from './components/Button'
import ShowHumanChoice from './components/ShowHumanChoice';
import Win from './components/Win'

// Style
import './App.css';
import { GiStoneAxe } from "react-icons/gi"
import { RiFilePaper2Line } from "react-icons/ri"
import { AiOutlineScissor } from "react-icons/ai"

const App = () => {
  const [moves, setMoves] = useState(
    {
      humanResult: "",
      computerResult: "",
    }
  )

  const [computerResult, setComputerResulter] = useState("")

  const hendleGetRandomIntInclusive = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  // const handleShowComputerPlay = (choise) => {
  //   if(choise == 1){
  //     setComputerResulter("Pedra")
  //     // handleAddComputerChoise("stone")
  //   } else if(choise == 2) {
  //     setComputerResulter("Papel")
  //     // handleAddComputerChoise("paper")
  //   } else if(choise == 3) {
  //     setComputerResulter("Tesoura")
  //     // handleAddComputerChoise("scissors")
  //   }
  // }

  

  const handleAddChoise = (choise) => {
    let computer  = hendleGetRandomIntInclusive(1,3)
    console.log(computer)
    if(choise == "stone"){
      handleAddHumanChoise("stone", computer)
    } else if(choise == "paper") {
      handleAddHumanChoise("paper", computer) 
    } else if(choise == "scissors") {
      handleAddHumanChoise("scissors", computer)
    }
  }

  const handleAddHumanChoise = (humanResult, computerResult) => {
    const newMove =  { 
      humanResult: humanResult,
      computerResult: computerResult
     }
    setMoves(newMove)
  }
  
  return ( 
    <div className="container-jankenpon">
      <Title />
      <div className="container-buttons">
        <Button onClick={() => handleAddChoise("stone")} > <GiStoneAxe className="icon-button"/> </Button>
        <Button onClick={() => handleAddChoise("paper")} > <RiFilePaper2Line className="icon-button"/> </Button>
        <Button onClick={() => handleAddChoise("scissors")} > <AiOutlineScissor className="icon-button"/> </Button>
      </div>
      <div className="result">
        <ShowHumanChoice moves={moves}/>
        <h1> Computer: { computerResult} </h1>
        <Win moves={moves} />
      </div>
    </div>
   );
}
 
export default App;

// BiFileBlank - papel/paper
// RiFilePaper2Line - papel/paper
// AiOutlineScissor - tesoura/scissors
// GiStoneAxe - pedra/stone

// GiPaper - papel
// GiScissors - tesoura

// BiJoystick - game
// BiTrophy - trofeu