import React, { useState} from 'react';

// components
import Title from './components/Title'
import Button from './components/Button'

// Style
import './App.css';
import { GiStoneAxe } from "react-icons/gi"
import { RiFilePaper2Line } from "react-icons/ri"
import { AiOutlineScissor } from "react-icons/ai"


const App = () => {
  const [choise, setChoise] = useState("")
  const [result, setResult] = useState("")
  const [computerResulter, setComputerResulter] = useState("")

  const hendleGetRandomIntInclusive = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const handleComputerPlay = (choise) => {
    if(choise == 1){
      setComputerResulter("Pedra")
    } else if(choise == 2) {
      setComputerResulter("Papel") 
    } else if(choise == 3) {
      setComputerResulter("Tesoura")
    }
  }

  const handlePlayerChoice = (choise) => {
    if(choise == "stone"){
      setResult("Pedra")
    } else if(choise == "paper") {
      setResult("Papel") 
    } else if(choise == "scissors") {
      setResult("Tesoura")
    }

    handleComputerPlay(hendleGetRandomIntInclusive(1,3))
  }
  
  return ( 
    <div className="container-jankenpon">
      <Title />
      <div className="container-buttons">
        <Button onClick={() => handlePlayerChoice("stone")} > <GiStoneAxe className="icon-button"/> </Button>
        <Button onClick={() => handlePlayerChoice("paper")} > <RiFilePaper2Line className="icon-button"/> </Button>
        <Button onClick={() => handlePlayerChoice("scissors")} > <AiOutlineScissor className="icon-button"/> </Button>
      </div>
      <div className="result">
        <h1> { result } - { computerResulter} </h1>
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