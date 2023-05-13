var input = require('readline-sync');

const { basicFunctions } = require('./basicFunctions');

//declaração de funções
const playAgainMenu = () => {
  console.log("Jogar mais uma vez? ");
  console.log("[s] para sim");
  console.log("[n] para não");
};

const validateAnswer = () => {

  answer = input.question().toLowerCase();
  
  while ( answer != "n" && answer != "s") {
    console.clear();
    basicFunctions.header("Jankenpon");
    errorMessage();
    playAgainMenu();
    answer = input.question().toLowerCase();
  };

  return answer;

};

const errorMessage = () => {
  console.log("ATENÇÃO: JOGADA ERRADA!");
  console.log("Digite um valor válido!");
};

const playMenu = () => {
    console.log("[1] PEDRA")
    console.log("[2] PAPEL")
    console.log("[3] TESOURA")
}

const validateNumber = () => {

    let value = input.question();

    while ( value != "1" && value != "2" && value != "3" ) {
      console.clear();
      basicFunctions.header("Jankenpon");
      errorMessage();
      playMenu();
      value = input.question();
    };

    return Number(value);

};

const winnerCalculation = (userPlay, cpuPlay) => {

  let winner = ""

  if ( userPlay == 1 && cpuPlay == 3 ) {
    winner = userName;
    userScore++;
  } else if (userPlay == 3 && cpuPlay == 2 ) {
    winner = userName;
    userScore++;
  } else if ( userPlay == 2 && cpuPlay == 1 ) {
    winner = userName;
    userScore++;
  } else if( cpuPlay == 1 && userPlay == 3 ) {
    winner = "CPU";
    cpuScore++;
  } else if ( cpuPlay == 3 && userPlay == 2 ) {
    winner = "CPU";
    cpuScore++;
  } else if ( cpuPlay == 2 && userPlay == 1 ) {
    winner = "CPU";
    cpuScore++;
  } else if ( cpuPlay == userPlay) {
    winner = "Empate";
    tieScore++;
  }

  return winner
};

const playerChoice = (number) => {

  let choise = ""

  if(number === 1){
    choise = "Pedra"
  } else if(number === 2) {
    choise = "Papel"
  } else if(number === 3) {
    choise = "Tesoura"
  }

  return choise
};

const gameWinner = (userScore, cpuScore) => {

  if (userScore > cpuScore) {
    return `${userName} VENCEDOR(A)!`
  } else if (userScore < cpuScore) {
    return "CPU VENCEDOR!";
  } else {
    return "JOGO EMPATADO!";
  };
};

//declaração de variáveis
let userName = ``;
let playAgain = 0;
let userPlay = 0;
let cpuPlay = 0;
let partialWinner = "";
let userScore = 0;
let cpuScore = 0;
let tieScore = 0;
let matchCounter = 0;
let winner = "";

//entrada de dados
basicFunctions.loading();
console.clear();
basicFunctions.header("Jankenpon");
userName = input.question("Digite seu nome: ").toUpperCase();

do {

  console.clear();
  basicFunctions.header("Jankenpon");
  console.log(`${userName} escolha sua jogada: `);
  playMenu();
  userPlay = validateNumber();
  cpuPlay = basicFunctions.getRandomIntInclusive(1, 3);

  //processamento de dados
  partialWinner = winnerCalculation(userPlay, cpuPlay);
  matchCounter++;
  winner = gameWinner(userScore, cpuScore);

  //saída de dados
  console.clear();
  basicFunctions.header("Jankenpon");
  console.log("PLACAR PARCIAL: ");
  console.log(`${userName} : ${playerChoice(userPlay)} x ${playerChoice(cpuPlay)} : CPU`);
  console.log(`Vencedor da partida: ${partialWinner}`);
  console.log(`${userName} ${userScore} x ${cpuScore} CPU`);
  console.log(`Empates: ${tieScore}`);
  console.log(`Nº de partidas: ${matchCounter}`);
  basicFunctions.line("Jankenpon");

  playAgainMenu();
  playAgain = validateAnswer();

} while ( playAgain != "n");

//saída de dados final
basicFunctions.loading();
console.clear();
basicFunctions.header("Jankenpon");
console.log("RESULTADO FINAL: ");
console.log(`${winner}`);
console.log(`${userName} ${userScore} x ${cpuScore} CPU`);
console.log(`Empates: ${tieScore}`);
console.log(`Nº de partidas: ${matchCounter}`);
basicFunctions.line("Jankenpon");
