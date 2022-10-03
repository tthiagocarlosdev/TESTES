const humanPlay = document.querySelector('#human_play')
const computerPlay = document.querySelector('#computer_play')
const scoreWinner = document.querySelector('#score_winner')
const numberOfGames = document.querySelector('#number_of_games')
let counter = 0
const scoreHuman = document.querySelector('#score_human')
const scoreComputer = document.querySelector('#score_computer')
let score_human = 0
let score_computer = 0


function getRandomIntInclusive(min, max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const ComputerChoise = (choise) => {

  let computerChoise = ""

  if(choise === 1){
    computerChoise = "Stone"
  } else if(choise === 2) {
    computerChoise = "Paper"
  } else if(choise === 3) {
    computerChoise = "Scissors"
  }

  return computerChoise
}

const Winner = (choiseHuman, choiseComputer) => {

  let winner = ""

  if (choiseComputer == "" && choiseHuman == "") { 
    winner = " "
  } else if(choiseHuman == "Stone" && choiseComputer == "Scissors"){
    winner = "Human"
    ScoreHuman()
  } else if (choiseHuman == "Scissors" && choiseComputer == "Paper"){
    winner = "Human"
    ScoreHuman()
  } else if (choiseHuman == "Paper" && choiseComputer == "Stone"){
    winner = "Human"
    ScoreHuman()
  } else if(choiseComputer == "Stone" && choiseHuman == "Scissors"){
    winner = "Computer"
    ScoreComputer()
  } else if (choiseComputer == "Scissors" && choiseHuman == "Paper"){
    winner = "Computer"
    ScoreComputer()
  } else if (choiseComputer == "Paper" && choiseHuman == "Stone"){
    winner = "Computer"
    ScoreComputer()
  } else if (choiseComputer == choiseHuman){
    winner = "A tie"
  }

  return winner
}

const NumberOfGames = (number) => {
  numberOfGames.innerHTML = number
}

const ScoreHuman = () => {
  ++score_human
}

const ScoreComputer = () => {
  ++score_computer
}

function stone(){
  humanPlay.innerHTML = `Stone`
  computerPlay.innerHTML = ComputerChoise(getRandomIntInclusive(1, 3))
  scoreWinner.innerHTML = Winner(humanPlay.textContent, computerPlay.textContent)
  NumberOfGames(++counter)
  scoreHuman.innerHTML = score_human
  scoreComputer.innerHTML = score_computer

}

function paper(){
  humanPlay.innerHTML = `Paper`
  computerPlay.innerHTML = ComputerChoise(getRandomIntInclusive(1, 3))
  scoreWinner.innerHTML = Winner(humanPlay.textContent, computerPlay.textContent)
  NumberOfGames(++counter)
  scoreHuman.innerHTML = score_human
  scoreComputer.innerHTML = score_computer

}

function scissors(){
  humanPlay.innerHTML = `Scissors`
  computerPlay.innerHTML = ComputerChoise(getRandomIntInclusive(1, 3))
  scoreWinner.innerHTML = Winner(humanPlay.textContent, computerPlay.textContent)
  NumberOfGames(++counter)
  scoreHuman.innerHTML = score_human
  scoreComputer.innerHTML = score_computer

}

const Reset = () => {
  humanPlay.innerHTML = `******`
  computerPlay.innerHTML = `******`
  scoreWinner.innerHTML = `******`
  counter = 0
  score_human = 0
  score_computer = 0
  scoreHuman.innerHTML = score_human
  scoreComputer.innerHTML = score_computer
  NumberOfGames(counter)
}