import React, { useState} from 'react';

// components
import Title from './components/Title'
import Button from './components/Button'
import ShowHumanChoice from './components/ShowHumanChoice';
import ShowComputerChoice from './components/ShowComputerChoice';
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

  const handleComputerChoise = (choise) => {
    
    let computerChoise = ""

    if(choise == 1){
      computerChoise = "stone"
    } else if(choise == 2) {
      computerChoise ="paper"
    } else if(choise == 3) {
      computerChoise = "scissors"
    }

    return computerChoise
  }

  const handleAddChoise = (choise) => {

    let computer = hendleGetRandomIntInclusive(1,3)
    let computerChoise = handleComputerChoise(computer)

    // console.log(computer)

    if(choise == "stone"){
      handleChoises("stone", computerChoise)
    } else if(choise == "paper") {
      handleChoises("paper", computerChoise) 
    } else if(choise == "scissors") {
      handleChoises("scissors", computerChoise)
    }
  }

  const handleChoises = (humanResult, computerResult) => {
    const newMove =  { 
      humanResult: humanResult,
      computerResult: computerResult
     }
    setMoves(newMove)
  }

  // console.log(moves) 

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
        <ShowComputerChoice moves={moves}/>
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