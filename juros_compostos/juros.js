let valorInicial = 10000.00;
let taxaDeJuros = 0.01;
let periodoMensal = 12;
let contadorMensal = 1;
let periodoAnual = 30;
let contadorAnual = 1;
let aporteMensal = 500.00;
let montanteFinal = 0;

while(contadorAnual <= periodoAnual){
    while(contadorMensal <= periodoMensal) {
        montanteFinal = (valorInicial * taxaDeJuros) + valorInicial + aporteMensal
        console.log(`${contadorMensal} - ${montanteFinal.toFixed(2)}`)
        valorInicial = montanteFinal;
        contadorMensal++;
    };
    aporteMensal = (aporteMensal * 0.1) + aporteMensal;
    console.log(`Aporte Mensal: R$${aporteMensal.toFixed(2)}`)
    contadorMensal = 1;
    contadorAnual++;
}


console.log(`Montante Final: R$${montanteFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)