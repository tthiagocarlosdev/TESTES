const humanPlay = document.querySelector('#human_play')
const computerPlay = document.querySelector('#computer_play')
const scoreWinner = document.querySelector('#score_winner')
const numberOfGames = document.querySelector('#number_of_games')


function getRandomIntInclusive(min, max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function computerChoise(choise){

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
  } else if (choiseHuman == "Scissors" && choiseComputer == "Paper"){
    winner = "Human"
  } else if (choiseHuman == "Paper" && choiseComputer == "Stone"){
    winner = "Human"
  } else if(choiseComputer == "Stone" && choiseHuman == "Scissors"){
    winner = "Computer"
  } else if (choiseComputer == "Scissors" && choiseHuman == "Paper"){
    winner = "Computer"
  } else if (choiseComputer == "Paper" && choiseHuman == "Stone"){
    winner = "Computer"
  } else if (choiseComputer == choiseHuman){
    winner = "A tie"
  }

  console.log(winner)
  return winner
}

function stone(){
  humanPlay.innerHTML = `Stone`
  computerPlay.innerHTML = computerChoise(getRandomIntInclusive(1, 3))
  printChoise(humanPlay.textContent, computerPlay.textContent)
  scoreWinner.innerHTML = Winner(humanPlay.textContent, computerPlay.textContent)
  numberOfGames.innerHTML = NumberOfGames(numbers)
}

function paper(){
  humanPlay.innerHTML = `Paper`
  computerPlay.innerHTML = computerChoise(getRandomIntInclusive(1, 3))
  printChoise(humanPlay.textContent, computerPlay.textContent)
  scoreWinner.innerHTML = Winner(humanPlay.textContent, computerPlay.textContent)
}

function scissors(){
  humanPlay.innerHTML = `Scissors`
  computerPlay.innerHTML = computerChoise(getRandomIntInclusive(1, 3))
  printChoise(humanPlay.textContent, computerPlay.textContent)
  scoreWinner.innerHTML = Winner(humanPlay.textContent, computerPlay.textContent)
}

function printChoise(a, b){
  console.log(a)
  console.log(b)
}



function NumberOfGames(number){
  number = number + 1
  return number
}

