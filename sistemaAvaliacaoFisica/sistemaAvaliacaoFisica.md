# Sistema de Avaliação Física

Olá dev's! Para praticar lógica de programação com JavaScript e Node.js, vamos criar um sistema de avaliação física igual ao que encontramos em academias. O detalhe é que vamos desevolver apenas em JavaScript e Node.js, nada de HTML e CSS. Vamos rodar essa aplicação pelo terminal com interação do usuário. Vamos lá?!

## Preparing

### Criando a pasta do projeto

* Abra o VSCode e escolha um local para criar a pasta do projeto, Crie a pasta e coloque o nome do projeto. Eu coloquei **sistemaAvaliacaoFisica**. 

### Instalando módulo readline-sync

* Abra o terminal e vamos instalar o módulo **readline-sync** que será responsável pela interação do usuário com o sistema. No terminal, na raiz do projeto, digite o comando abaixo e tecle Enter.

```shell
$ npm install readline-sync
```

- Apos a instalação, você vai perceber que uma pasta foi criada. É a pasta **node_modules**.

### Criando os arquivos do projeto

- Vamos agora criar quatro arquivos:
  -  **saf.js**. Esse será o arquivo principal do nosso projeto;
  - **headerFunctions.js**. Vamos colocar as funções de cabeçalho;
  - **validationFunctions.js**. Vamos colocar funções de validação;
  - **anamnesisFunctions.js**. Vamos colocar as funções da anamnese.
- Em **saf.js** vamos:
  - Criar a variável de **input** com o módulo **readline-sync**;
  - Importar os arquivos **headerFunctions.js** e **anamnesisFunctions.js**.

```js
var input = require('readline-sync')

const { headerFunctions } = require('./headerFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')
```

- Em **headerFunctions.js** vamos:
  - Criar a variável de **input** com o módulo **readline-sync**;
  - Criar uma variável objeto, **headerFunctions**, que vai guardar as funções de cabeçalho;
  - Exportar essa variável.

```js
var input = require('readline-sync')

/* header functions */
const headerFunctions = {}

module.exports = {
  headerFunctions
}
```

- Em **validationFunctions.js** vamos:
  - Criar a variável de importação de **headerFunctions.js**;
  - Criar uma variável objeto, **validationFunctions**, que vai guardar as funções de validação;
  - Exportar essa variável.

```js
/* Validation Functions */

const { headerFunctions } = require('./headerFunctions')

const validationFunctions = {}

module.exports = {
  validationFunctions
}
```

- Em **anamnesisFunctions.js** vamos:
  - Criar a variável de **input** com o módulo **readline-sync**;
  - Criar a variável de importação de **validationFunctions.js**;
  - Criar uma variável objeto, **anamnesisFunctions**, que vai guardar as funções de anamnese;
  - Exportar essa variável.

```js
/* Anamnesis Functions */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')

const anamnesisFunctions = {}

module.exports = {
  anamnesisFunctions
}
```

Agora estamos prontos para colocar a mão na massa.

## Building Anamnesis

Vamos começar pela anamnese, que é uma entrevista para saber do avaliado algumas informações importantes.

### Cabeçalho

Antes, vamos fazer um cabeçalho para nossa aplicação.

Agora vamos criar a nossa primeira function de cabeçalho, denominada **header**. Em **headerFunctions.js**, dentro da variável **headerFunctions** vamos colocar a function **header**, conforme  abaixo:

```js
const headerFunctions = {
  
  header: function(){
    console.log("===============================")
    console.log("  SISTEMA DE AVALIAÇÃO FÍSICA  ")
    console.log("===============================")
  },

}
```

Arquivo **headerFunctions** completo, até o momento:

```javascript
var input = require('readline-sync')

/* header functions */
const headerFunctions = {
  
  header: function(){
    console.log("===============================")
    console.log("  SISTEMA DE AVALIAÇÃO FÍSICA  ")
    console.log("===============================")
  },

}

module.exports = {
  headerFunctions
}
```

No arquivo **saf.js** vamos chamar a function **header** para que ela seja executada:

```javascript
headerFunctions.header()
```

### Executar o programa

Para executar o programa, no terminal, digite o comando abaixo:

````shell
$ node saf.js
````

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
```

### Nome do usuário

Agora vamos criar uma function que vai receber o nome do usuário. Esta função receberá o nome do usuário que deverá ter apenas letras e acentos/sinais, caso tenha **número**, deverá informar ao usuário que o dado está incorreto e pedir novamente para o usuário inserir o nome. Para isto vamos criar também duas funções de validação que serão usadas dentro da função do nome. 

Em **anamnesisFunctions.js** dentro da variável que criamos, crie a function **name**:

```js
name: function() {
    
    let notNumber = true
    let name = ''
    
    while(notNumber){
      name = input.question('Digite seu nome: ')
      notNumber = validationFunctions.itsLetters(name)
      validationFunctions.incorrectValue(false, notNumber)
    }
    
    return name
  
  },
```

### Validação de nome

Em **validationFunctions.js** também dentro da variável que criamos, a function **itsLetters** que receberá uma string como parâmetro e irá retornar **true** se dentro da _string_ contém número e _false_ se não tiver número:

```js
itsLetters: function(string){
      
    const regExp1 = /\d/g
    let itsAlfa = regExp1.test(string)

    if(itsAlfa){
      return true
    } else {
      return false
    }
  },
```

Em **validationFunctions.js** a function **incorrectValue** terá dois valores booleanos como parâmetros e caso um dos dois seja _true_ a function irá retornar a function **header()** e a mensagem _"Dado incorreto!"_:

```js
incorrectValue: function (valueA, valueB){
    if(valueA || valueB ){ 
      console.clear()
      headerFunctions.header()
      console.log('Dado Incorreto!')
    }
  },
```

Em **saf.js** vamos criar uma variável name, que receberá a function **name()** e depois vamos fazer um **console.log** dessa variável:

```js
var input = require('readline-sync')

const { headerFunctions } = require('./headerFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')

headerFunctions.header()

/* variáveis */
const name = anamnesisFunctions.name()

console.clear()
headerFunctions.header()
console.log(`Nome: ${name}`)
```

### Dia do nascimento

Agora vamos criar a function **birthDay** que vai receber o **dia de nascimento** do usuário. Essa function deverá receber apenas número, de dois dígitos e o valor mínimo de 01 e máximo de 31. Caso receba algum valor fora destas condições, uma mensagem de valor incorreto deverá ser apresentada e uma nova solicitação para inserir a dia de nascimento deverá aparecer. Vamos criar mais 4 funções de validação para usarmos nesta function, são elas:

- **itsNumber( )** - recebe o valor inserido como parâmetro e valida se ele realmente é um número;
- **correctSize( )** - recebe o valor inserido e a quantidade de dígitos que ele deve ter, fazendo a validação se a quantidade está de acordo com a que foi passada;
- **minimumValue( )** - recebe o dia de nascimento e o valor mínimo que ele pode ter;
- **maximumValue( )** - recebe o dia de nascimento e o valor máximo que ele pode ter;

Todas estas function devem retornar um valor booleano.

Sendo assim, em **validationFunctions.js**:

- **itsNumber( )**

```js
itsNumber: function(value){
  
    const regExp2 = /\D/g
    let itsNumber = regExp2.test(value)
    
    if(itsNumber){
      return true
    } else {
      return false
    }
  },
```

- **correctSize( )**

```js
correctSize: function(string, amount){
    if(string.length > amount){
      return true
    } else {
      return false
    }
  },
```

- **minimumValue( )**

```js
 minimumValue: function (standardValue, givenAway){
    
    if(givenAway < standardValue){
      return true
    } else {
      return false
    }
  },
```

- **maximumValue( )**

```js
maximumValue: function(standardValue, givenAway){
    if(givenAway > standardValue){
      return true
    } else {
      return false
    }
  },
```

Em **anamnesisFunctions.js**

```js
birthDay: function(){
  
    let correctValue = true
    let correctAmount = true
    let minimumValue = true
    let maximumValue = true
    let birthDay = 0
  
    while(correctValue || correctAmount || minimumValue || maximumValue){
      birthDay = input.question('Digite o dia de seu nascimento [DD]: ')
      correctValue = validationFunctions.itsNumber(birthDay)
      correctAmount = validationFunctions.correctSize(birthDay, 2)
      minimumValue = validationFunctions.minimumValue(1, birthDay)
      maximumValue = validationFunctions.maximumValue(31, birthDay)
      validationFunctions.incorrectValue(correctValue, correctAmount)
      validationFunctions.incorrectValue(minimumValue, maximumValue)
    }
  
    return birthDay
  },
```

Em **saf.js** criamos a variável **birthDay** a qual recebe a function **birthDay( )**:

```js
var input = require('readline-sync')

const { headerFunctions } = require('./headerFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')

headerFunctions.header()

/* variáveis */
const name = anamnesisFunctions.name()
const birthDay = Number(anamnesisFunctions.birthDay())

console.clear()
headerFunctions.header()
console.log(`Nome: ${name}`)
console.log(`Dia Nascimento: ${birthDay}`)
```

### Mês de nascimento

Agora vamos criar a function **birthMonth** que vai receber o **mês de nascimento** do usuário. Essa function deverá receber apenas número, de dois dígitos e o valor mínimo de 01 e máximo de 12. Caso receba algum valor fora destas condições, uma mensagem de valor incorreto deverá ser apresentada e uma nova solicitação para inserir o mês de nascimento deverá aparecer. Vamos utilizar as 4 functions de validação que usamos na function **birthDay**:

- **itsNumber( )**, **correctSize( )**, **minimumValue( )**, **maximumValue( )**

Sendo assim, em **anamnesisFunctions.js**:

```js
 birthMonth: function(){
  
    let correctValue = true
    let correctAmount = true
    let minimumValue = true
    let maximumValue = true
    let birthMonth = 0
  
    while(correctValue || correctAmount || minimumValue || maximumValue){
      birthMonth = input.question('Digite o mês de seu nascimento [MM]: ')
      correctValue = validationFunctions.itsNumber(birthMonth)
      correctAmount = validationFunctions.correctSize(birthMonth, 2)
      minimumValue = validationFunctions.minimumValue(1, birthMonth)
      maximumValue = validationFunctions.maximumValue(12, birthMonth)
      validationFunctions.incorrectValue(correctValue, correctAmount)
      validationFunctions.incorrectValue(minimumValue, maximumValue)
    }
  
    return birthMonth
  
  },
```

Em **saf.js** criamos a variável **birthMonth** a qual recebe a function **birthMonth( )**:

```javascript
var input = require('readline-sync')

const { headerFunctions } = require('./headerFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')

headerFunctions.header()

/* variáveis */
const name = anamnesisFunctions.name()
const birthDay = Number(anamnesisFunctions.birthDay())
const birthMonth = Number(anamnesisFunctions.birthMonth())

console.clear()
headerFunctions.header()
console.log(`Nome: ${name}`)
console.log(`Dia Nascimento: ${birthDay}`)
console.log(`Mês Nascimento: ${birthMonth}`)
```

### Ano de nascimento

Agora vamos criar a function **birthYear** que vai receber o **ano de nascimento** do usuário. Essa function deverá receber apenas número, de 4 dígitos, com o valor mínimo de 1900 e como máximo o **ano atual**. Caso receba algum valor fora destas condições, uma mensagem de valor incorreto deverá ser apresentada e uma nova solicitação para inserir o ano de nascimento deverá aparecer. Vamos utilizar as 4 functions de validação que usamos na function **birthMonth**:

- **itsNumber( )**, **correctSize( )**, **minimumValue( )**, **maximumValue( )**

Sendo assim, em **anamnesisFunctions.js**:

```javascript
birthYear: function(){
    let correctValue = true
    let correctAmount = true
    let minimumValue = true
    let maximumValue = true
    let yearOfBirth = 0
    let newDate = new Date()
    let currentYear = newDate.getFullYear()
  
    while(correctValue || correctAmount || minimumValue || maximumValue){
      yearOfBirth = input.question('Digite o ano de seu nascimento [AAAA]:')
      correctValue = validationFunctions.itsNumber(yearOfBirth)
      correctAmount = validationFunctions.correctSize(yearOfBirth, 4)
      minimumValue = validationFunctions.minimumValue(1900, yearOfBirth)
      maximumValue = validationFunctions.maximumValue(currentYear, yearOfBirth)
      validationFunctions.incorrectValue(correctValue, correctAmount)
      validationFunctions.incorrectValue(minimumValue, maximumValue)
    }
  
    return Number(yearOfBirth)
  
  },
```

Em **saf.js** criamos a variável **birthYear** a qual recebe a function **birthYear( )**:

```javascript
var input = require('readline-sync')

const { headerFunctions } = require('./headerFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')

headerFunctions.header()

/* variáveis */
const name = anamnesisFunctions.name()
const birthDay = Number(anamnesisFunctions.birthDay())
const birthMonth = Number(anamnesisFunctions.birthMonth())
const birthYear = Number(anamnesisFunctions.birthYear())

console.clear()
headerFunctions.header()
console.log(`Nome: ${name}`)
console.log(`Dia Nascimento: ${birthDay}`)
console.log(`Mês Nascimento: ${birthMonth}`)
console.log(`Ano Nascimento: ${birthYear}`)
```

### Data no formato Brasileiro

Agora vamos mostrar a data no formato brasileiro, para isto, em **anamnesisFunctions.js** vamos criar a **dateBrazilianFormat( )** que irá nos retornar a data em formato brasileiro:

```javascript
dateBrazilianFormat: function (date) {
  
    let newDate = new Date(date)
    
    return `${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`
    
  },
```

Em **saf.js** vamos criar uma variável que receberá a data de nascimento que foi informada, **informedDateOfBirth**, (detalhe para o **birthMonth** que será passado como parâmetro com o valor informado menos um, pois o valor retornado pelo método **.getMonth()** é um inteiro entre 0 e 11, sendo 0 o mês de janeiro e 11 dezembro) e depois chamar a function **dateBrazilianFormat( )**.

```javascript
var input = require('readline-sync')

const { headerFunctions } = require('./headerFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')

headerFunctions.header()

/* variáveis */
const name = anamnesisFunctions.name()
const birthDay = Number(anamnesisFunctions.birthDay())
const birthMonth = Number(anamnesisFunctions.birthMonth())
const birthYear = Number(anamnesisFunctions.birthYear())
const informedDateOfBirth = new Date(birthYear, birthMonth - 1, birthDay)
const birthDate = anamnesisFunctions.dateBrazilianFormat(informedDateOfBirth)

console.clear()
headerFunctions.header()
console.log(`Nome: ${name}`)
console.log(`Dia Nascimento: ${birthDay}`)
console.log(`Mês Nascimento: ${birthMonth}`)
console.log(`Ano Nascimento: ${birthYear}`)
console.log(`Data de nascimento: ${birthDate}`)
```

Agora não precisamos mais mostrar o dia, mês e ano separadamente, portanto pode apagar.

```javascript
var input = require('readline-sync')

const { headerFunctions } = require('./headerFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')

headerFunctions.header()

/* variáveis */
const name = anamnesisFunctions.name()
const birthDay = Number(anamnesisFunctions.birthDay())
const birthMonth = Number(anamnesisFunctions.birthMonth())
const birthYear = Number(anamnesisFunctions.birthYear())
const informedDateOfBirth = new Date(birthYear, birthMonth, birthDay)
const birthDate = anamnesisFunctions.dateBrazilianFormat(informedDateOfBirth)

console.clear()
headerFunctions.header()
console.log(`Nome: ${name}`)
console.log(`Data de nascimento: ${birthDate}`)
```

No terminal:

```tex
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
Nome: Fulano.
Data de nascimento: 1/1/1900
```

### Idade

Vamos construir a idade usando a function **age( )** em **anamnesisFunctions.js**. Esta function receberá uma data como parâmentro e fará o cálculo para determinar a idade em anos.

```js
age: function(birthDate) {

    let currentDay = new Date()
    let dateInMilliseconds = Math.abs(currentDay.getTime() - birthDate.getTime())
    let age = Math.floor(dateInMilliseconds / (1000 * 60 * 60 * 24 * 365))
    
    return age
  
  },
```

Em **saf.js** vamos criar a variável **age** que receberá a function **age( )** e depois mostrar a idade do usuário:

```javascript
var input = require('readline-sync')

const { headerFunctions } = require('./headerFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')

headerFunctions.header()

/* variáveis */
const name = anamnesisFunctions.name()
const birthDay = Number(anamnesisFunctions.birthDay())
const birthMonth = Number(anamnesisFunctions.birthMonth())
const birthYear = Number(anamnesisFunctions.birthYear())
const informedDateOfBirth = new Date(birthYear, birthMonth - 1, birthDay)
const birthDate = anamnesisFunctions.dateBrazilianFormat(informedDateOfBirth)
const age = anamnesisFunctions.age(informedDateOfBirth)

console.clear()
headerFunctions.header()
console.log(`Nome: ${name}.`)
console.log(`Data de nascimento: ${birthDate}`)
console.log(`Idade: ${age} anos!`)
console.log(`===============================`)
```

No terminal:

``` tex
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
Nome: Fulano.
Data de nascimento: 1/12/1990
Idade: 31 anos!
===============================
```

