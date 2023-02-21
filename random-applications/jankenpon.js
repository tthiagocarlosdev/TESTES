var input = require('readline-sync');

const { basicFunctions } = require('./basicFunctions');

//declaração de funções
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

const errorMessage = () => {
    console.log("ATENÇÃO: JOGADA ERRADA!");
    console.log("Digite um valor válido!");
};

const winnerCalculation = (userPlay, cpuPlay) => {

    let winner = ""
  
    if (cpuPlay == "" && userPlay == "") { 
      winner = " "
    } else if(userPlay == 1 && cpuPlay == 3){
      winner = userName;
      userScore++;
    } else if (userPlay == 3 && cpuPlay == 2 ){
      winner = userName;
      userScore++;
    } else if (userPlay == 2 && cpuPlay == 1){
      winner = userName;
      userScore++;
    } else if(cpuPlay == 1 && userPlay == 3){
      winner = "CPU";
      cpuScore++;
    } else if (cpuPlay == 3 && userPlay == 2){
      winner = "CPU";
      cpuScore++;
    } else if (cpuPlay == 2 && userPlay == 1 ){
      winner = "CPU";
      cpuScore++;
    } else if (cpuPlay == userPlay){
      winner = "A tie";
      tieScore++;
    }
  
    return winner
  }

//declaração de variáveis
let userName = ``;
let userPlay = 0;
let cpuPlay = 0;
let userScore = 0;
let cpuScore = 0;
let tieScore = 0;
let partialWinner = "";

// let winner = "";

//entrada de dados
basicFunctions.loading();
console.clear();
basicFunctions.header("Jankenpon");
userName = input.question("Digite seu nome: ").toLocaleUpperCase();


console.clear();
basicFunctions.header("Jankenpon");
console.log(`${userName} escolha sua jogada: `);
playMenu();
userPlay = validateNumber();

cpuPlay = basicFunctions.getRandomIntInclusive(1, 3);

//documentar a partir daqui
partialWinner = winnerCalculation(userPlay, cpuPlay);
console.log(partialWinner);

console.log(`${userPlay}`);
console.log(`${cpuPlay}`);

console.log("PLACAR PARCIAL: ")
// console.log(userName+": "+score(userPlay)+" x CPU: "+score(cpuPlay))
console.log(`${userName} ${userScore} x ${cpuScore} CPU`)
console.log(`Vencedor da partida: ${partialWinner}`)


// console.log("Jogar mais uma vez? \n")
// console.log("[Y] para sim\n")
// console.log("[N] para não\n")
// leia(resposta)