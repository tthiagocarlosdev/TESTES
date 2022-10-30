Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e nesse canal nós falamos sobre tecnologia.

Hoje, nós estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você estará ajudando bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número 37, exercício que tem por título: **Soma Valores For** e o exercício é o seguinte:

Faça um programa em que receba 5 valores e no final apresente a soma desses valores. Use a estrutura de repetiçao “for”.

Já fizemos um exercícios semelhante a esse, foi o exercícios nº 24, sendo que lá nós fizemos ele usando a estrutura de repetição _**while**_ (enquanto em português), enquanto que neste exercício de hoje, usaremos a estrutura de repetição _**for**_ (para em português).

Sem mais enrolação, vamos ao exercícios de hoje:

```js
var input = require('readline-sync')

let valor = 0

for (let contador = 1;  contador <= 5; contador++) {
  console.log(`------------------------------`)
  console.log(`     ex037_somaValoresFor`)
  console.log(`------------------------------`)

  valor += Number(input.question(`Digite o ${contador}º valor: `))
  console.clear()
}

console.log(`------------------------------`)
console.log(`     ex037_somaValoresFor`)
console.log(`------------------------------`)
console.log(`A soma dos valores digitados é ${valor}`)
console.log(`------------------------------`)
```

## LEMBRANDO

Se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

***



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e nesse canal nós falamos sobre tecnologia.

Hoje, nós estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você estará ajudando bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número 38, exercício que tem por título: **Valores Pares** e o exercício é o seguinte:

Crie um programa em que o usuário digite um valor e o programa apresente apenas os valores pares da contagem progressiva até o valor digitado e os valores pares da contagem regressiva partindo do valor digitado. Use a estrutura de repetiçao “for”.

iniciando o exercício...

```js
var input = require('readline-sync')

console.log(`------------------------------`)
console.log(`      ex038_valoresPares`)
console.log(`------------------------------`)

let valor = Number(input.question(`Digite um valor: `))
console.clear()

console.log(`------------------------------`)
console.log(`      ex038_valoresPares`)
console.log(`------------------------------`)
console.log(`      CONTAGEM PROGRESSIVA`)
console.log(`------------------------------`)
for (let contador = 0; contador <= valor; contador += 2) {
  console.log(`${ contador }`)
}

console.log(`------------------------------`)
console.log(`      CONTAGEM REGRESSIVA`)
console.log(`------------------------------`)
for (let contador = valor; contador >= 0; contador--) {
  if (contador % 2 == 0) {
    console.log(`${ contador }`)  
  }
}

console.log(`------------------------------`)
console.log(`Valor digitado: ${valor}`)
console.log(`------------------------------`)
```

## LEMBRANDO

Se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

***



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e nesse canal nós falamos sobre tecnologia.

Hoje, nós estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você estará ajudando bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número **39**, exercício que tem por título: **Quantos entre 0 e 10** e o exercício é o seguinte:

Desenvolva um programa em que o usuário digite até 6 valores e no final o programa apresente o total de valores entre 0 e 10; e a soma desses valores entre 0 e 10 que forem impares. Use a estrutura de repetiçao “for” (para em português).

```js
var input = require('readline-sync')
let valorEntre0e10 = 0
let somaImpar = 0
let valores = 0

console.log(`------------------------------`)
console.log(`    ex039_quantosEntre0e10`)
console.log(`------------------------------`)

for (let contador = 1; contador <= 6; contador++) {
  valores = Number(input.question(`Digite o ${contador}º valor: `))
  if (valores >= 0 && valores <= 10) {
    valorEntre0e10++
    if (valores % 2 == 1) {
      somaImpar += valores
    }
  }
}

console.log(`------------------------------`)
console.log(`Foram digitados ${valorEntre0e10} valores entre 0 e 10!`)
console.log(`A soma dos valores ímpares entre 0 e 10 é igual a ${somaImpar}!`)
console.log(`------------------------------`)
```

## LEMBRANDO

Se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e nesse canal nós falamos sobre tecnologia.

Hoje, nós estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você estará ajudando bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número **40**, exercício que tem por título: **Combinações** e o exercício é o seguinte:

Elabore um programa em que mostre as combinações de três valores, agrupado de dois em dois. Use a estrutura de repetiçao “for”.

```js
console.log(`------------------------------`)
console.log(`       ex040_combinacoes`)
console.log(`------------------------------`)

for( let numeroA = 1; numeroA <= 3; numeroA++){
  for( let numeroB = 1; numeroB <= 3; numeroB++){
    console.log(`${numeroA} - ${numeroB}`)
  }
  console.log("")
}
console.log(`------------------------------`)
```

## LEMBRANDO

Se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthigocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número **41**, exercício que tem por título: **Sequencia de Fibonacci** e o exercício é o seguinte:

Construa um programa em que mostre 10 primeiros números da sequencia de Fibonacci. Use a estrutura de repetiçao “for”.

O que é a sequência de fibonacci?

_Na matemática, a sucessão de Fibonacci, é uma sequência de números inteiros, começando normalmente por 0 e 1, na qual cada termo subsequente corresponde à soma dos dois anteriores._

```js
console.log(`------------------------------`)
console.log(`  ex041_sequenciaDeFibonacci`)
console.log(`------------------------------`)

let numA = 0
let numB = 1
let numC = 0
let fibonacci = ""

fibonacci += numA + " " + numB

for(contador = 1; contador <= 8; contador++){
  numC = numA + numB
  fibonacci += " " + numC
  numA = numB
  numB = numC
}

console.log(fibonacci)
console.log(`------------------------------`)

```

## LEMBRANDO

Se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthigocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número **42**, exercício que tem por título: **Analisador De Valores** e o exercício é o seguinte:

Faça um programa em que o usuário digite 5 valores e no final ele apresente: a soma dos valores,  a média entre os valores, quantos são divisíveis por 5, quantos são nulos e a soma dos valores pares. Use a estrutura de repetiçao “for”.

```js
var input = require('readline-sync')
console.log(`------------------------------`)
console.log(`   ex042_analisadorDeValores`)
console.log(`------------------------------`)

let valor = 0
let valoresDigitados = ""
let somaValores = 0
let mediaValores = 0
let divisivelPorCinco = 0
let nulo = 0
let somaPar = 0

for(let contador = 1; contador <= 5; contador++){
  valor = Number(input.question(`Digite o ${contador}º valor: `))
  valoresDigitados += " " + valor
  somaValores += valor
  if(valor % 5 == 0){
      divisivelPorCinco++
  }
  if(valor === 0){
      nulo++
  }
  if(valor % 2 == 0){
      somaPar += valor
  }
}

mediaValores = somaValores / 5

console.clear()
console.log(`------------------------------`)
console.log(`   ex042_analisadorDeValores`)
console.log(`------------------------------`)

console.log(`Valores digitados ${valoresDigitados}`)
console.log(`A soma dos valores é igual a ${somaValores}`)
console.log(`A média entre os valores é igual a ${mediaValores}`)
console.log(`Valores divisíveis por 5: ${divisivelPorCinco}`)
console.log(`Valores nulos: ${nulo}`)
console.log(`A soma dos valores pares é igual a ${somaPar}`)
console.log(`------------------------------`)
```

## LEMBRANDO

Se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthiagocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número **43**, exercício que tem por título: **Procedimento Cabeçalho** e o exercício é o seguinte:

Volte para o exercício nº 35 e coloque o cabeçalho dentro de um procedimento. Depois execute o programa!

**Procedimentos** são sub-rotinas muito utilizadas em programação quando precisamos repetir uma parte do código. Um dos grandes benefícios é não precisar copiar o código todas as vezes que precisar executar aquela operação, basta chamar o procedimento, além de deixar a leitura do código mais intuitiva. Procedimentos não __retornam__ resultados.

```js
var input = require('readline-sync')

//declaração de procedimento
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`    ex035_escolhendoPessoas`)
  console.log(`------------------------------`)
}

let totalHomem = 0
let totalMulher = 0
let sexo = 0
let idade = 0
let cutis = 0
let cadastro = ""

do {

  console.clear()
  cabecalho()
  console.log(`Sexo: `)
  console.log(`[1] Homem`)
  console.log(`[2] Mulher`)
  sexo = Number(input.question(''))

  console.clear()
  cabecalho()
  idade = Number(input.question('Digite a idade: '))

  console.clear()
  cabecalho()
  console.log(`Cor cútis: `)
  console.log(`[1] Preto`)
  console.log(`[2] Castanho`)
  console.log(`[3] Loiro`)
  console.log(`[4] Ruivo`)
  cutis = Number(input.question(''))

  console.log(`Cadastrar mais alguém?`)
  cadastro = String(input.question(`[s] sim / [n] não\n`))

  switch (sexo) {
    case 1:
      if(idade >= 18 && cutis == 2){
        totalHomem++
      }
    break;
  
    case 2:
      if(idade >= 25 && idade <= 30 && cutis == 3){
        totalMulher++
      }  
    break;
  }
} while ( cadastro == 's' )

console.clear()
cabecalho()
console.log(`Total de homens com mais de 18 anos e cabelos castanhos é ${totalHomem}.`)
console.log(`Total de mulheres entre 25 e 30 anos e cabelos loiros é ${totalMulher}.`)

console.log(`------------------------------`)
```

## LEMBRANDO

Se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthiagocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número **44**, exercício que tem por título: **Detector Pesado** e o exercício é o seguinte:

Desenvolva um programa que o usuário digite o nome de cinco pessoas e o peso corporal de cada. A cada pessoa incluída no sistema, deve ser mostrado o maior peso cadastrado até o momento. No final deve ser apresentado o nome da pessoa que teve o maior peso e seu peso. Use estrutura de procedimentos.

```js
var input = require('readline-sync')

//declaração de procedimento
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`     ex044_detectorPesado`)
  console.log(`Maior peso até agora: ${maiorPeso} kg.`)
  console.log(`------------------------------`)
}

//declaração de variáveis
let maiorPeso = 0
let nomeMaiorPeso = ''
let nome = ''
let peso = 0

// entrada de dados
for(let contador = 1; contador <= 5; contador++){
  cabecalho()
  nome = String(input.question(`Digite o nome: `))
  peso = Number(input.question(`Digite o peso (kg) de ${nome}: `))
  // processamento de dados
  if(peso > maiorPeso){
    maiorPeso = peso
    nomeMaiorPeso = nome
  }
  console.clear()
}

// saída de dados
cabecalho()
console.log(`A pessoa mais pesada foi ${nomeMaiorPeso} com ${maiorPeso} kg`)
console.log(`------------------------------`)

```

## LEMBRANDO

Se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthiagocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número **45**, exercício que tem por título: **Faz Soma Procedimento:** e o exercício é o seguinte:

Crie um programa que receba dois valores e apresente a soma entre os dois valores inseridos. Use estrutura de procedimento com passagem de parâmetro por valor.

```js
var input = require('readline-sync')

// declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`ex045_fazSomaProcedimento:`)
  console.log(`------------------------------`)
}

function soma(valorX, valorY){
  console.log(`A soma entre os dois valores é ${valorX + valorY}`)
}

// declaração de variáveis
let valorA = 0
let valorB = 0

// entrada de dados
cabecalho()
valorA = Number(input.question(`Digite o 1 valor: `))
valorB = Number(input.question(`Digite o 2 valor: `))

// processamento e saída de dados
console.clear()
cabecalho()
soma(valorA, valorB)
console.log(`------------------------------`)
```

## LEMBRANDO

Se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthiagocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número **46**, exercício que tem por título: **Par Ou Impar Procedimento:** e o exercício é o seguinte:

Elabore um programa que o usuário digite um valor e o programa informe se aquele valor é par ou ímpar. Use estrutura de procedimento com passagem de parâmetro por valor.

```js
var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(` ex046_ParOuImparProcedimento`)
  console.log(`------------------------------`)
}

function parOuImpar(valor){
  console.clear()
  cabecalho()
  if(valor % 2 == 0){
    console.log(`${valor} é par!`)
  } else {
    console.log(`${valor} é ímpar!`)
  }
}

//declaração de variáveis
let numero = 0

//entrada de dados
cabecalho()
numero = input.question("Digite um número: ")
//processamento e saída de dados
parOuImpar(numero)
console.log(`------------------------------`)
```

## LEMBRANDO

Bom galera, esse foi o exercício de hoje, lembrando, se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

Até o próximo vídeo, valeu!

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthiagocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número **47**, exercício que tem por título: **Fibonacci Referencia:** e o exercício é o seguinte:

Construa um programa que mostre os 15 primeiros números da sequência de Fibonacci. Use estrutura de procedimento com passagem de parâmetro por referência.

```js
//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`   ex047_fibonacciReferencia`)
  console.log(`------------------------------`)
}

function fibonacci(valorA, valorB){
  let valorC = 0
  let contador = 1
  while(contador <= 8){
    valorC = valorA + valorB
    valorA = valorB
    valorB = valorC
    console.log(`${valorC}`)
    contador++
  }
  
}

//declaração de variáveis
const numberA = 0
const numberB = 1

//saída de dados
cabecalho()
console.log(`${numberA}`)
console.log(`${numberB}`)
fibonacci(numberA, numberB)
```

## LEMBRANDO

Bom galera, esse foi o exercício de hoje, lembrando, se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

Até o próximo vídeo, valeu!

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthiagocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número **48**, exercício que tem por título: **Soma Função:** e o exercício é o seguinte:

Desenvolva um programa em que o usuário digite dois valores e esses valores sejam passados para uma função. Essa função deve retornar a soma dos valores inseridos.

O que são funções?

As **funções**, também conhecidas como  __sub-rotinas__, são partes do código que serão utilizada várias vezes dentro do seu código e que retornam um resultado. Um dos grandes benefícios é não precisar copiar o código todas as vezes que precisar executar aquela operação, além de deixar a leitura do código mais intuitiva. 

Os **procedimentos** diferem das funções apenas por não retornarem resultado.

```js
var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`       ex048_somaFuncao`)
  console.log(`------------------------------`)
}

function somaValores(numberA, numberB){
    return numberA + numberB
}

//declaração de variáveis
let valorA = 0
let valorB = 0
let soma = 0

//entrada de dados
cabecalho()
valorA = Number(input.question("Digite um valor: "))
valorB = Number(input.question("Digite outro valor: "))
soma = somaValores(valorA, valorB)

//processamento e saída de dados
console.log(`A soma entre ${valorA} e ${valorB} é igual a ${soma}`)
console.log(`------------------------------`)
```

## LEMBRANDO

Bom galera, esse foi o exercício de hoje, lembrando, se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

Até o próximo vídeo, valeu!

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthiagocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número __49__, exercício que tem por título: __Par ou Impar Função:__ e o exercício é o seguinte:

Construa um programa que tenha uma função que receba um valor e retorne se o valor é par ou ímpar.

```js
var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`     ex049_parImparFuncao`)
  console.log(`------------------------------`)
}

function parOuImpar(valor){
    if(valor % 2 == 0){
        return `PAR`
    } else {
        return `IMPAR`
    }
}

//declaração de variáveis
let numero = 0 

//entrada de dados
cabecalho()
numero = Number(input.question("Digite um valor: "))

//processamento  saída de dados
console.log(`O valor ${numero} é ${parOuImpar(numero)}`)
console.log(`------------------------------`)
```

## LEMBRANDO

Bom galera, esse foi o exercício de hoje, lembrando, se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

Até o próximo vídeo, valeu!

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthiagocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número __**50**__, exercício que tem por título: __Fatorial Função:__ e o exercício é o seguinte:

Elabore um programa o qual o usuário digite um número e o programa tenha uma função que retorne o fatorial do número digitado pelo usuário.

```js
var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`     ex050_fatorialFuncao`)
  console.log(`------------------------------`)
}

function fatorial(valor){
    contador = valor
    let fatorial = 1

    do {
        fatorial *= contador
        contador--
    } while (contador > 0)

    return fatorial
}

//declaração de variáveis
let numero = 0

//entrada de dados
cabecalho()
numero = Number(input.question("Digite um número: "))

//processamento saída de dados
console.log(`O fatorial de ${numero} é igual a ${fatorial(numero)}`)
console.log(`------------------------------`)
```

## LEMBRANDO

Bom galera, esse foi o exercício de hoje, lembrando, se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

Até o próximo vídeo, valeu!

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthiagocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número __**51**__, exercício que tem por título: __Sequência De Fibonacci Função:__ e o exercício é o seguinte:

Crie um programa que o usuário digite os dois valores iniciais da sequência de Fibonacci e o programa tenha uma função que retorne os valores seguintes da sequência de Fibonacci.

```js
var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`     ex051_fibonacciFuncao`)
  console.log(`------------------------------`)
}

function fibonacci(valorA, valorB){
  let string = " "
  let valorC = 0
  
  for(contador = 1; contador <= 8; contador++){
      valorC = valorA + valorB
      valorA = valorB
      valorB = valorC
      string += valorC + " "
  }

  return string        
}

//declaração de variáveis
let numeroA = 0
let numeroB = 0
let meuFibonacci = ""

//entrada de dados
cabecalho()
numeroA = Number(input.question("Digite um valor: "))
numeroB = Number(input.question("Digite outro valor: "))

// processamento de dados
console.clear()
meuFibonacci = numeroA+" "+numeroB
meuFibonacci += fibonacci(numeroA, numeroB)

//saída de dados
cabecalho()
console.log(meuFibonacci)
console.log(`------------------------------`)
```

## LEMBRANDO

Bom galera, esse foi o exercício de hoje, lembrando, se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

Até o próximo vídeo, valeu!

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthiagocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número __**52**__, exercício que tem por título: __Analisador De Strings__ e o exercício é o seguinte:

Elabore um programa que o usuário digite seu nome e o programa retorne quantas letras tem o nome do usuário digitado; Retorne seu nome em maiúsculo, em minúsculo; Retorne a primeira e última letra do seu nome; Qual a posição da letra “A” no nome; qual o código ascii da letra “A” e o código ascii 65 corresponde a qual caractere.

Nesse programa vamos utilzar algumas funções padrões da linguagem JavaScript.

```js
var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`   ex052_analisadorDeStrings`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

//declaração de variáveis
let name = ""

//entrada de dados
cabecalho()
name = String(input.question("Digite seu nome: "))

//processamento saída de dados
rodape()
console.log(`Seu nome tem ${name.replace(/ /g, "").length} letras.`)
console.log(`Seu nome em maiúsculo: ${name.toUpperCase()}`)
console.log(`Seu nome em minúsculo: ${name.toLowerCase()}`)
console.log(`A primeira letra do seu nome é: ${name.charAt()}`)
console.log(`A última letra do seu nome é: ${name.charAt(name.length - 1)}`)
console.log(`A posição da letra 'a' é: ${name.indexOf("a")+1}`)
console.log(`O código ascii da letra 'a' é : ${name.charCodeAt(name.indexOf("a"))}`)
console.log(`O código ascii 65 corresponde a: ${String.fromCharCode(65)}`)
rodape()
```

## LEMBRANDO

Bom galera, esse foi o exercício de hoje, lembrando, se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

Até o próximo vídeo, valeu!

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthiagocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número __**53**__, exercício que tem por título: __Teste Vetor__ e o exercício é o seguinte:

Desenvolva um programa em que o usuário digite seis valores e o programa apresente os seis valores. Use variáveis compostas (vetores/arrays).

O que são variáveis compostas (vetores/arrays)?

Um vetor pode ser visto como uma variável que possui diversas posições, e com isso armazena diversos valores, porém todos do mesmo tipo. (Documentação Portugol)

Arrays são objetos semelhantes a __listas__ que vêm com uma série de métodos embutidos para realizar operações de travessia e mutação. Nem o tamanho de um array JavaScript nem os tipos de elementos são fixos. Já que o tamanho de um array pode ser alterado a qualquer momento e os dados podem ser armazenados em posições não contíguas.

importante destacar que Arrays JavaScript começam com índice zero: o primeiro elemento de um array está na posição __0__ e o último elemento está na posição equivalente ao valor da propriedade __length__ (tamanho) menos 1.

```js
var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`       ex053_testeVetor`)
  console.log(`------------------------------`)
}

//declaração de variáveis
var array = []

// entrada de dados
cabecalho()
for(contador = 0; contador <= 5; contador++){
    array[contador] = input.question(`Digite o ${contador+1}º valor: `)
}

//processamento e saída de dados
console.clear()
cabecalho()
for(contador = 0; contador <= 5; contador++){
    console.log(array[contador])
}
console.log(`------------------------------`)
```

## LEMBRANDO

Bom galera, esse foi o exercício de hoje, lembrando, se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

Até o próximo vídeo, valeu!

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthiagocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número __**54**__, exercício que tem por título: __Valores Pares Vetores__ e o exercício é o seguinte:

Crie um programa em que o usuário digite sete valores e no final o programa mostre a quantidade de valores pares digitados. Use variáveis compostas (vetores/arrays).

```js
var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`   ex054_valoresParesVetores`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

//declaração de variáveis
const QTDE_VALORES = 7
var valores = []
var valorPar = 0

//entrada de dados
cabecalho()
for(let contador = 0; contador < QTDE_VALORES; contador++){
  valores[contador] = input.question(`Digite o ${contador + 1}º valor: `)
}

//processamento de dados
for(let contador = 0; contador < QTDE_VALORES; contador++){
  if (valores[contador] % 2 == 0) {
    valorPar++
  }
}

//saída de dados
console.clear()
cabecalho()
console.log("Valores digitados: ")
console.log(valores)
rodape()
console.log(`Foram digitados ${valorPar} valores pares!`)
rodape()
```

## LEMBRANDO

Bom galera, esse foi o exercício de hoje, lembrando, se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

Até o próximo vídeo, valeu!

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthiagocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número __**55**__, exercício que tem por título: __Valores Pares Vetores 2__ e o exercício é o seguinte:

Elabore um programa em que o usuário digite sete valores e no final o programa mostre a quantidade de valores pares digitados e a posição de cada valor par digitado. Use variáveis compostas (vetores/arrays).

```js
var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`  ex055_valoresParesVetores2`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

//declaração de variáveis
const QTDE_VALORES = 7
let valores = []
let valorPar = 0

//entrada de dados
cabecalho()
for(let contador = 0; contador < QTDE_VALORES; contador++){
    valores[contador] = (input.question(`Digite o ${contador + 1}º valor: `))
}

//processamento de dados
for(let contador = 0; contador < QTDE_VALORES; contador++){
  if (valores[contador] % 2 == 0) {
    valorPar++
  }
}

//saída de dados
console.clear()
cabecalho()
console.log(`Foram digitados ${valorPar} valores pares!`)
rodape()
console.log("Posição => Valor Par: ")
for(let contador = 0; contador < QTDE_VALORES; contador++){
  if (valores[contador] % 2 == 0) {
    console.log(`${contador} => ${valores[contador]}`)
  }
}
rodape()
```

## LEMBRANDO

Bom galera, esse foi o exercício de hoje, lembrando, se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

Até o próximo vídeo, valeu!

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthiagocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número __**56**__, exercício que tem por título: __Listagem Da Turma__ e o exercício é o seguinte:

Construa um programa em que sejam cadastrados os nomes de 4 alunos, e duas notas para cada aluno cadastrado. Ao final o programa deve apresentar um relatório que tenha:

- Uma lista com os nomes de cada aluno e suas respectivas médias;
- Outra lista com os nomes e o status de suas médias. Caso o aluno tenha média maior ou igual a 7, aluno aprovado, caso a nota seja menor do que 7, aluno reprovado. A lista de status deverá conter o nome seguido do status de cada usuário cadastrado;
- A quantidade de alunos com a média maior do que a média da turma e a média da turma. Use variáveis compostas (vetores/arrays).

```js
var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`     ex056_listagemDaTurma`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

//declaração de variáveis
const QTDE_DE_ALUNOS = 4
let nome = []
let notaA = []
let notaB = []
let media = []
let status = []
let totalTurma = 0
let mediaTurma = 0
let alunoAcimaDaMedia = 0

//entrada de dados
for(let contador = 0; contador < QTDE_DE_ALUNOS; contador++){
  cabecalho()
  nome[contador] = input.question(`Nome do aluno nº ${contador + 1}: `)
  notaA[contador] = Number(input.question("Digite a 1ª nota: "))
  notaB[contador] = Number(input.question("Digite a 2ª nota: "))
  console.clear()
}

//processamento de dados
for(let contador = 0; contador < QTDE_DE_ALUNOS; contador++){
    //definindo a média de cada aluno
    media[contador] = ((notaA[contador] + notaB[contador]) / 2)
    //definindo o status de cada aluno 
    if(media[contador] >= 7){
      status[contador] = `APROVADO`
    } else {
      status[contador] = `REPROVADO`
    }
    totalTurma += media[contador]
}
//definindo a média da turma
mediaTurma = totalTurma / QTDE_DE_ALUNOS

//definindo a quantidade de alunos com média maior que a média da turma
for( let contador = 0; contador < QTDE_DE_ALUNOS; contador++){
  if(media[contador] > mediaTurma){
    alunoAcimaDaMedia++
  }
}

//saída de dados
cabecalho()
console.log(`NOME -> MÉDIA`)
rodape()
for(let contador = 0; contador < QTDE_DE_ALUNOS; contador++) {
  console.log(`${nome[contador]} -> ${media[contador]}`)
}
rodape()
console.log(`NOME -> STATUS`)
rodape()
for(let contador = 0; contador < QTDE_DE_ALUNOS; contador++) {
  console.log(`${nome[contador]} -> ${status[contador]}`)
}
rodape()
console.log(`MÉDIA DA TURMA`)
rodape()
console.log(`Média da Turma: ${mediaTurma.toFixed(2)}`)
console.log(`Alunos acima da média: ${alunoAcimaDaMedia}`)
rodape()
```

## LEMBRANDO

Bom galera, esse foi o exercício de hoje, lembrando, se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

Até o próximo vídeo, valeu!

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthiagocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número __**57**__, exercício que tem por título: __Só Com C__ e o exercício é o seguinte:

Desenvolva um programa que sejam cadastrados 10 nomes de usuários. No final o programa deve apresentar uma lista com os nomes que começam com a letra “C”.

```js
var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`         ex057_soComC`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

//declaração de variáveis
const QTDE_DE_NOMES = 10
let nomesUsuarios = []
let nomesComC = []

//entrada de dados
cabecalho()
for(let contador = 0; contador < QTDE_DE_NOMES; contador++){
  nomesUsuarios[contador] = input.question(`Digite o ${contador + 1}º nome: `)
}

//processamento de dados
for(let contador = 0; contador < QTDE_DE_NOMES; contador++){
  if(nomesUsuarios[contador].toUpperCase().indexOf("C") == 0){
    nomesComC.push(nomesUsuarios[contador].toUpperCase())
  }
}

//saída de dados
console.clear()
cabecalho()
console.log("Nomes só com C")
rodape()
console.log(nomesComC)
rodape()
```

## LEMBRANDO

Bom galera, esse foi o exercício de hoje, lembrando, se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

Até o próximo vídeo, valeu!

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthiagocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número __58__, exercício que tem por título: __Ordena Vetor__ e o exercício é o seguinte:

Crie um programa em que o usuário digite 10 valores de forma aleatória e no final o programa apresente os valores em ordem crescente.

```js
var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`      ex058_Ordena Vetor`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

function getRandomIntInclusive(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

//declaração de variáveis
const QTDE_DE_VALORES = 10
let listaDeValores = []

cabecalho()
for(let contador = 0; contador < QTDE_DE_VALORES; contador++){
  // valor[contador] = Number(input.question(`Insira o ${contador + 1}º valor: `))
  listaDeValores[contador] = Number(getRandomIntInclusive(0, 100))
}

//saída de dados
console.clear()
cabecalho()
console.log("Valores inseridos: ")
for(let contador = 0; contador < QTDE_DE_VALORES; contador++){
  console.log(listaDeValores[contador])
}

//processamento de dados - bubble sort
for(let A = 0; A < QTDE_DE_VALORES; A++){
  for(let B = A+1; B < QTDE_DE_VALORES; B++){
    if(listaDeValores[A] > listaDeValores[B]){
      let x = listaDeValores[A]            
      listaDeValores[A] = listaDeValores[B]
      listaDeValores[B] = x
    }
  }
}

//saídad de dados
rodape()
console.log("Valores ordenados: ")
for(let contador = 0; contador < QTDE_DE_VALORES; contador++){
  console.log(listaDeValores[contador])
}
rodape()
```

## LEMBRANDO

Bom galera, esse foi o exercício de hoje, lembrando, se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

Até o próximo vídeo, valeu!

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthiagocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número __59__, exercício que tem por título: __Campeonato Futebol__ e o exercício é o seguinte:

Elabore um programa em que seja cadastrado 3 times e no final seja mostrado uma tabela com os confrontos entre os times.

```js
var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`    ex059_campeonatoFutebol`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}


// declaração de variáveis
let quantidadeDeTimes = 0
let listaDeTimes = []

//entrada de dados
cabecalho()
quantidadeDeTimes = Number(input.question("Informe a quantidade de times: "))
rodape()
for(let contador = 0; contador < quantidadeDeTimes; contador++){
  listaDeTimes[contador] = input.question(`Digite o ${contador + 1}º time: `)
}

//processamento e saída de dados
console.clear()
cabecalho()
console.log(" Tabela Final")
rodape()
for(let timeA = 0; timeA < quantidadeDeTimes; timeA++){
  for(let timeB = 0; timeB < quantidadeDeTimes; timeB++){
    if(timeA != timeB){
      console.log(`${listaDeTimes[timeA]} x ${listaDeTimes[timeB]}`)
    }      
  }   
}
rodape()
```

## LEMBRANDO

Bom galera, esse foi o exercício de hoje, lembrando, se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

Até o próximo vídeo, valeu!

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthiagocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número __60__, exercício que tem por título: __Corrigindo Provas__ e o exercício é o seguinte:

Construa um programa que seja cadastrado um gabarito com 5 questões. Cadastre também 3 alunos e as 5 respostas de cada aluno. Cada resposta correta do aluno valerá 2 pontos. No final o programa deve mostrar a lista com o nome dos alunos e a nota de cada aluno. Também deverá ser mostrado a média final da turma.

```js
var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`    ex060_corrigindoProvas`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

//declaração de variáveis
const QTDE_DE_QUESTOES = 5
const QTDE_DE_ALUNOS = 3
let gabaritoQuestoes = []
let alunos = []
let gabaritoAluno = []
let mediaAluno = []
let somaMediaDosAlunos = 0
let mediaDaTurma = 0

//entrada de dados
//cadastro gabarito
cabecalho()
for(let contador = 0; contador < QTDE_DE_QUESTOES; contador++){
  gabaritoQuestoes[contador] = input.question(`Gabarito da ${contador + 1}ª questão: `)
}

console.clear()
cabecalho()

//cadastro do aluno
for(let contador = 0; contador < QTDE_DE_ALUNOS; contador++){
  alunos[contador] = input.question(`Informe o nome do ${contador + 1}º aluno: `)
}

//cadastro gabarito de cada aluno
for(let contadorA = 0; contadorA < QTDE_DE_ALUNOS; contadorA++){
  mediaAluno[contadorA] = 0
  console.clear()
  cabecalho()

  console.log(`Insira o gabarito do aluno ${alunos[contadorA]}:`)
  for(let contadorQ = 0; contadorQ < QTDE_DE_QUESTOES; contadorQ++){
    gabaritoAluno[contadorQ] = input.question(`Resposta da ${contadorQ + 1}º questão:`)
    
    //processamento de dados
    if(gabaritoAluno[contadorQ] == gabaritoQuestoes[contadorQ]){
      mediaAluno[contadorA] += 2
    }
  }

  somaMediaDosAlunos += mediaAluno[contadorA]
}

mediaDaTurma = somaMediaDosAlunos / QTDE_DE_ALUNOS

//saída de dados
console.clear()
cabecalho()
for(let contador = 0; contador < QTDE_DE_ALUNOS; contador++){
  console.log(`${alunos[contador]} - média ${mediaAluno[contador].toFixed(2)}`)
}
rodape()
console.log(`A média da turma é: ${mediaDaTurma.toFixed(2)}`)
rodape()
```

## LEMBRANDO

Bom galera, esse foi o exercício de hoje, lembrando, se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

Até o próximo vídeo, valeu!

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthiagocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número __61__, exercício que tem por título: __Reservar Cinema__ e o exercício é o seguinte:

Desenvolva um programa que simule a reserva de cadeiras de um cinema. No total serão 10 cadeiras. Quando o usuario escolher qual a sua cadeira, deverá ser apresentado quais as cadeiras estão livres e quais estão ocupadas. Caso o usuário escolha uma cadeira já ocupada, uma mensagem devera notificá-lo que a sua opção já foi escolhida e deverá perguntar se ele quer escolher outra. O programa sera encerrado quando o usuário optar por não escolher mais cadeiras.

```js
var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`     ex061_reservarCinema`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

function cadeirasCinema(){
  cinema = ""
  for(c = 1; c <= QTDE_CADEIRAS; c++){
    cinema += `| ${reserva[c]}`
  }
  console.log(cinema)
}

function cadeiraReservada(numero){
  for(c = 1; c <= QTDE_CADEIRAS; c++){
    if(reserva[numero] == "#"){
      return false
    } else {
      return true
    }        
  }    
}

//declaração de variáveis
const QTDE_CADEIRAS = 10
let reserva = []
let cadeira = 0
let cinema = ""
let resposta = ""

//inserção de valores no array
for(c = 1; c <= QTDE_CADEIRAS; c++){
  reserva[c] = c
}

//cálculo do programa
do{
  cabecalho()
  cadeirasCinema()
  rodape()
  cadeira = Number(input.question("Informe uma cadeira: "))
  
  console.clear()
  while (cadeiraReservada(cadeira) == false) {
    console.clear()
    cabecalho()
    cadeirasCinema()
    rodape()
    console.log("Cadeira Reservada!")
    cadeira = Number(input.question("Informe uma cadeira: "))
  }

  for(c = 1; c <= QTDE_CADEIRAS; c++){
    if(reserva[c] == cadeira){
      reserva[cadeira] = "#"
    }   
  }
  
  console.clear()
  cabecalho()
  cadeirasCinema()
  rodape()

  resposta = input.question("Quer continuar? [s][n]: ")
  console.clear()
    
} while (resposta == "s")

//final do programa
console.clear()
cabecalho()
console.log("Programa encerrado!")
rodape()
```

## LEMBRANDO

Bom galera, esse foi o exercício de hoje, lembrando, se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

Até o próximo vídeo, valeu!

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthiagocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número __62__, exercício que tem por título: __Matriz 3x2__ e o exercício é o seguinte:

Crie um programa que solicite ao usuario inserir valores numa matriz de ordem 3x2. No final o programa deverá apresentar os valores inseridos pelo usuário.

O que é uma matriz?

A matriz é definida como sendo um vetor com mais de uma dimensão (geralmente duas). Enquanto o vetor armazena as informações de forma linear, a matriz armazena de forma tabular (com linha e colunas).

Aqui em JavaScript, serão arrays bi-dimensionais.

```js
var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`        ex062_matriz3x2`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

function criarMatriz(nLinha, nColuna){
  let matriz = []
  let array = []
  // let x = 1

  for(let i = 0; i < nLinha; i++){
    for(let j = 0; j < nColuna; j++){
      array.push(input.question(`Digite valor [${i}][${j}]: `))
      // array.push(x)
      // x += 1
    }
    matriz.push(array)
    array = []
  }
  return matriz
}

function mostrarMatriz(matriz){
  for(let i = 0; i < matriz.length; i++){
    console.log(matriz[i])
  }
}

//declaração de variáveis
let matriz3x2 = []
const NUMERO_DE_LINHAS = 3
const NUMERO_DE_COLUNAS = 2

//entrada de dados
cabecalho()
matriz3x2 = criarMatriz(NUMERO_DE_LINHAS, NUMERO_DE_COLUNAS)
console.clear()

//processamento e saida de dados
cabecalho()
mostrarMatriz(matriz3x2)
rodape()
```

## LEMBRANDO

Bom galera, esse foi o exercício de hoje, lembrando, se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

Até o próximo vídeo, valeu!

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthiagocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número __63__, exercício que tem por título: __Matriz 3x3 Par__ e o exercício é o seguinte:

Construa um programa que o usuario insira valores numa matriz 3x3. Deverá ser mostrada a posição a qual o usuário esta inserindo o valor. No final o programa deverá mostrar a matriz com todos o valores inseridos pelo usuário, destacando os valores pares. Deverá apresentar também o total de valores pares inseridos.

```js
var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`      ex063_matriz3x3Par`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

function criarMatriz(nLinha, nColuna){
  let matriz = []
  let array = []
  // let x = 1

  for(let i = 0; i < nLinha; i++){
    for(let j = 0; j < nColuna; j++){
      array.push(input.question(`Digite valor [${i}][${j}]: `))
      // array.push(x)
      // x += 1
    }
    matriz.push(array)
    array = []
  }
  return matriz
}

function mostrarMatriz(matriz){
  for(let i = 0; i < matriz.length; i++){
    console.log(matriz[i])
  }
}

function matrizComPar(matriz){
  for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz.length; j++){
      if(Number(matriz[i][j]) % 2 == 0){
        matriz[i][j] = `(${matriz[i][j]})`
      }
    } 
  }
  return matriz
}

function somaMatrizPar(matriz){
  let soma = 0
  for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz.length; j++){
      if(Number(matriz[i][j]) % 2 == 0){
        soma++ 
      }
    } 
  }
  return soma
}

//declaração de variáveis
let matriz3x3 = []
const NUMERO_DE_LINHAS = 3
const NUMERO_DE_COLUNAS = 3
let matrizPar = []
let totalPar = 0

//entrada de dados
cabecalho()
matriz3x3 = criarMatriz(NUMERO_DE_LINHAS, NUMERO_DE_COLUNAS)
console.clear()

//processamento de dados
totalPar = somaMatrizPar(matriz3x3)
matrizPar = matrizComPar(matriz3x3)

//saída de dados
cabecalho()
mostrarMatriz(matrizPar)
rodape()
console.log(`Total dos valores Pares: ${totalPar}`)
rodape()
```

## LEMBRANDO

Bom galera, esse foi o exercício de hoje, lembrando, se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

Até o próximo vídeo, valeu!

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthiagocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número __64__, exercício que tem por título: __Matriz Identidade 3x3__ e o exercício é o seguinte:

Elabore um programa que mostre uma __matriz identidade__ de ordem 3x3.

Na matemática, matriz identidade é uma matriz diagonal, cujos elementos da diagonal principal são todos iguais a 1.

```js
var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`   ex064_MatrizIdentidade3x3`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

function mostrarMatriz(matriz){
  for(let i = 0; i < matriz.length; i++){
    console.log(matriz[i])
  }
}

function criarMatrizIdentidade(nLinha, nColuna){
  let matriz = []
  let array = []

  for(let i = 0; i < nLinha; i++){
    for(let j = 0; j < nColuna; j++){
      if(i == j){
        array.push(1)
      } else {
        array.push(0)
      }
    }
    matriz.push(array)
    array = []
  }
  return matriz
}

//declaração de variáveis
let matrizIdentidade = []
const NUMERO_DE_LINHAS = 3
const NUMERO_DE_COLUNAS = 3

//processamento de dados
matrizIdentidade = criarMatrizIdentidade(NUMERO_DE_LINHAS, NUMERO_DE_COLUNAS)

//saída de dados
cabecalho()
mostrarMatriz(matrizIdentidade)
rodape()
```

## LEMBRANDO

Bom galera, esse foi o exercício de hoje, lembrando, se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

Até o próximo vídeo, valeu!

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthiagocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número __65__, exercício que tem por título: __Matriz 4x4__ e o exercício é o seguinte:

Desenvolva um programa que o usuario insira valores numa matriz de ordem 4x4. O programa deverá apresentar o valores da matriz; a soma da Diagonal Principal, o produto da segunda linha e o maior valor da terceira coluna.

```js
var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`       ex065_Matriz4x4`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

function getRandomIntInclusive(min, max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function criarMatriz(nLinha, nColuna){
  let matriz = []
  let array = []

  for(let i = 0; i < nLinha; i++){
    for(let j = 0; j < nColuna; j++){
      // array.push(input.question(`Digite valor [${i}][${j}]: `))
      array.push(getRandomIntInclusive(10, 99))
    }
    matriz.push(array)
    array = []
  }
  return matriz
}

function mostrarMatriz(matriz){
  for(let i = 0; i < matriz.length; i++){
    console.log(matriz[i])
  }
}

function somaDiagonalPrincipal(matriz){
  let somaValores = 0
  for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz.length; j++){
      if(i == j){
        somaValores += Number(matriz[i][j])
      }
    }
  }
  return somaValores
}

function produtoSegundaLinha(matriz){
  let produtoValores = 0
  for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz.length; j++){
      if(i == 1){
        produtoValores += Number(matriz[i][j])
      }
    }
  }
  return produtoValores
}

function maiorValorTerceiraColuna(matriz){
  let maiorValor = 0
  for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz.length; j++){
      if(j == 2){
        if(maiorValor < Number(matriz[i][j])){
          maiorValor = Number(matriz[i][j])
        }
      }
    }
  }
  return maiorValor
}

//declaração de variáveis
let matriz4x4 = []
const NUMERO_DE_LINHAS = 4
const NUMERO_DE_COLUNAS = 4
let somaDaDiagonalPrincipal = 0
let produtoDaSegundaLinha = 0
let maiorValorDaTerceiraColuna = 0

//entrada dos dados
cabecalho()
matriz4x4 = criarMatriz(NUMERO_DE_LINHAS, NUMERO_DE_COLUNAS)

//processamento dos dados
somaDaDiagonalPrincipal = somaDiagonalPrincipal(matriz4x4)
produtoDaSegundaLinha = produtoSegundaLinha(matriz4x4)
maiorValorDaTerceiraColuna = maiorValorTerceiraColuna(matriz4x4)

//saída dos dados
console.clear()
cabecalho()
mostrarMatriz(matriz4x4)
rodape()
console.log(`Soma da diagonal principal: ${somaDaDiagonalPrincipal}`)
console.log(`Produto da segunda linha: ${produtoDaSegundaLinha}`)
console.log(`Maior valor da terceira coluna: ${maiorValorDaTerceiraColuna}`)
rodape()
```

## LEMBRANDO

Bom galera, esse foi o exercício de hoje, lembrando, se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

Até o próximo vídeo, valeu!

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthiagocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número __66__, exercício que tem por título: __Dissecando Matriz__ e o exercício é o seguinte:

Crie um programa que o usuario insira valores numa matriz de ordem 4x4. O programa deve conter um menu com as opções: Matriz completa, Diagonal Esquerda-Direita, Triângulo Superior Direito, Triângulo Inferior Esquerdo, Diagonal Direita-Esquerda, Triângulo Inferior Direito, Triângulo Superior Esquerdo, Gerar outra Matriz e Encerrar Programa. O programa deve mostrar a matriz de acordo com a opção escolhida pelo usuário. Se o usuário escolhe matriz completa, deve ser mostrado a matriz completa, se o usuário escolher a diagonal principal, deve ser mostrado a diagonal principal e assim por diante.

```js
var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`    ex066_dissecandoMatriz`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

function getRandomIntInclusive(min, max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function criarMatriz(nLinha, nColuna){
  let matriz = []
  let array = []

  for(let i = 0; i < nLinha; i++){
    for(let j = 0; j < nColuna; j++){
    //   array.push(input.question(`Digite valor [${i}][${j}]: `))
      array.push(getRandomIntInclusive(10, 99))
    }
    matriz.push(array)
    array = []
  }
  return matriz
}

function menu(){
    console.log("Escolha: ")
    console.log("[1] Matriz completa")
    console.log("[2] Diagonal Esquerda-Direita")
    console.log("[3] Triângulo Superior Direito")
    console.log("[4] Triângulo Inferior Esquerdo")
    console.log("[5] Diagonal Direita-Esquerda")
    console.log("[6] Triângulo Inferior Direito")
    console.log("[7] Triângulo Superior Esquerdo")
    console.log("[8] Gerar outra Matriz")
    console.log("[9] Encerrar Programa")
}

function mostrarMatriz(matriz){
  for(let i = 0; i < matriz.length; i++){
    console.log(matriz[i])
  }
}

function mostrarDiagonalTriangulo(matriz, numero){
    let matrizTSE = []
    let array = []
    let condicao = 0
    let diagonalEsquerdaDireita = numero == 2
    let trianguloSuperiorDireito = numero == 3
    let trianguloInferiorEsquerdo = numero == 4
    let diagonalDireitaEsquerda = numero == 5
    let trianguloInferiorDireito = numero == 6
    let trianguloSuperiorEsquerdo = numero == 7

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz.length; j++){

            if(diagonalEsquerdaDireita){
                condicao = i == j
            } else if(trianguloSuperiorDireito){
                condicao = j > i
            } else if(trianguloInferiorEsquerdo){
                condicao = i > j
            } else if(diagonalDireitaEsquerda){
                condicao = i + j == matriz.length - 1
            }else if(trianguloInferiorDireito){
                condicao = i + j >= matriz.length
            }else if(trianguloSuperiorEsquerdo){
                condicao = i + j < matriz.length - 1
            }

            if( condicao ){
                array.push(matriz[i][j])
            } else {
                array.push(``)
            }
        }
        matrizTSE.push(array)
        array = []
    }
    mostrarMatriz(matrizTSE)
}

//delaração de variáveis
let matriz4x4 = []
const NUMERO_DE_LINHAS = 4
const NUMERO_DE_COLUNAS = 4
let escolha = 0

//entrada de dados
cabecalho()
matriz4x4 = criarMatriz(NUMERO_DE_LINHAS, NUMERO_DE_COLUNAS)
console.clear()

// Processamento e saída de dados
do {
    cabecalho()
    menu()
    escolha = Number(input.question())

    switch (escolha) {
        case 1:
            console.clear()
            cabecalho()
            mostrarMatriz(matriz4x4)
        break;
        case 2:
            console.clear()
            cabecalho()
            mostrarDiagonalTriangulo(matriz4x4, 2)
        break;
        case 3:
            console.clear()
            cabecalho()
            mostrarDiagonalTriangulo(matriz4x4, 3)
        break;
        case 4:
            console.clear()
            cabecalho()
            mostrarDiagonalTriangulo(matriz4x4, 4)
        break;
        case 5:
            console.clear()
            cabecalho()
            mostrarDiagonalTriangulo(matriz4x4, 5)
        break;
        case 6:
            console.clear()
            cabecalho()
            mostrarDiagonalTriangulo(matriz4x4, 6)
        break;
        case 7:
            console.clear()
            cabecalho()
            mostrarDiagonalTriangulo(matriz4x4, 7)        
        break;
        case 8:
            console.clear()
            cabecalho()
            matriz4x4 = criarMatriz(NUMERO_DE_LINHAS, NUMERO_DE_COLUNAS)
            console.clear()
            cabecalho()
            console.log(`Nova matriz criada!`)
        break;
        case 9:
            console.clear()
            cabecalho()
            console.log(`Programa encerrado!`)
            rodape()
        break;
        default:
            console.clear()
            cabecalho()
            console.log(`Número inválido!`)
        break;
    }
    
} while (escolha != 9)
```

## LEMBRANDO

Bom galera, esse foi o exercício de hoje, lembrando, se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

Até o próximo vídeo, valeu!

___

PAREI 67

Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthiagocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número __**50**__, exercício que tem por título: __Fatorial Função:__ e o exercício é o seguinte:



```js

```

## LEMBRANDO

Bom galera, esse foi o exercício de hoje, lembrando, se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

Até o próximo vídeo, valeu!

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthiagocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número __**50**__, exercício que tem por título: __Fatorial Função:__ e o exercício é o seguinte:



```js

```

## LEMBRANDO

Bom galera, esse foi o exercício de hoje, lembrando, se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

Até o próximo vídeo, valeu!

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthiagocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número __**50**__, exercício que tem por título: __Fatorial Função:__ e o exercício é o seguinte:



```js

```

## LEMBRANDO

Bom galera, esse foi o exercício de hoje, lembrando, se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

Até o próximo vídeo, valeu!

___



Olá pessoas, sejam bem-vindos ao meu canal.

Meu nome é Thiago Carlos e esse é canal tthiagocarlosdev, aqui nós falamos sobre programação.

Atualmente estamos resolvendo alguns exercícios de lógica e algorítmos para iniciantes com JavaScript.

Aproveitando, peço que se você não for **inscrito** neste canal, se **inscreve**, se **gostar** do vídeo, deixe seu **like**, e também **compartilha** esse vídeo e o canal com seus amigos que também estão estudando lógica e algorítmos.

Fazendo isso você ajuda bastante o nosso canal a crescer.

Hoje chegamos ao exercício de número __**50**__, exercício que tem por título: __Fatorial Função:__ e o exercício é o seguinte:



```js

```

## LEMBRANDO

Bom galera, esse foi o exercício de hoje, lembrando, se você não for **inscrito** neste canal, se **inscreva**, se **gostar** do vídeo, deixe seu **like**, e também **compartilhe** esse vídeo e o canal com seus amigos.

Até o próximo vídeo, valeu!

___

