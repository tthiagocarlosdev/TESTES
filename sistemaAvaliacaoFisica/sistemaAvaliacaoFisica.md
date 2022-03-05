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

### Cabeçalhos

Antes, vamos fazer um cabeçalho para nossa aplicação.

Agora vamos criar a nossa primeira function de cabeçalho, denominada **systemHeader**. Em **headerFunctions.js**, dentro da variável **headerFunctions** vamos colocar a function **systemHeader**, conforme  abaixo:

```js
const headerFunctions = {
  
  systemHeader: function(){
    console.log("===============================")
    console.log("  SISTEMA DE AVALIAÇÃO FÍSICA  ")
    console.log("===============================")
  },

}
```

Vamos criar também um function que irá mostrar os subtítulos. Ela recebe como parâmetro o subtítulo da avaliação:

```js
subTitle: function(title){
    console.log(`           ${title}            `)
    console.log("===============================")
  },
```

Arquivo **headerFunctions** completo, até o momento:

```javascript
var input = require('readline-sync')

/* header functions */
const headerFunctions = {
  
  systemHeader: function(){
    console.log("===============================")
    console.log("  SISTEMA DE AVALIAÇÃO FÍSICA  ")
    console.log("===============================")
  },

  subTitle: function(title){
    console.log(`           ${title}            `)
    console.log("===============================")
  },

}

module.exports = {
  headerFunctions
}
```

No arquivo **saf.js** vamos chamar as functions **systemHeader( )** e **anamnesisHeader( )** para serem executadas:

```js
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")
```

### Executar o programa

Para executar o programa, no terminal, digite o comando abaixo:

````shell
$ node saf.js
````

Ao executar o programa:

```tex
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
```

### Nome do usuário

Agora vamos criar uma function que vai receber o nome do usuário. Esta function receberá o nome do usuário que deverá ter apenas letras e acentos/sinais, caso tenha **número**, deverá informar ao usuário que o dado está incorreto e pedir novamente para o usuário inserir o nome. Para isto vamos criar também duas functions de validação que serão usadas dentro da function do nome. 

Em **anamnesisFunctions.js** dentro da variável que criamos, crie a function **userName**:

```js
userName: function() {
    
    let NumberOrSymbol = true
    let name = ''
    
    while(NumberOrSymbol){
        
      name = input.question('Digite seu nome: ')
      NumberOrSymbol = validationFunctions.hasNumberOrSymbol(name)
      validationFunctions.incorrectValue(false, NumberOrSymbol, "Anamnese")
        
    }
    
    return name
  
  },
```

### Validação de nome

Em **validationFunctions.js** também dentro da variável que criamos, a function **hasNumberOrSymbol** que receberá uma string como parâmetro e irá retornar **true** se dentro da _string_ contém número ou símbolo e **false** se não tiver número ou símbolo:

```js
hasNumberOrSymbol: function(string){
    
    const numberSymbolRegExp = /(\d|\W)/gi
    let numberSymbol = numberSymbolRegExp.test(string)
   
    return numberSymbol ? true : false
    
  },
```

Em **validationFunctions.js** a function **incorrectValue** terá dois valores booleanos como parâmetros e o subtítulo da parte da avaliação. Caso um dos dois valores booleanos seja _true_ a function irá retornar as functions **systemHeader( )** e **subTitle( )**, como também a mensagem _"Dado incorreto!"_:

```js
incorrectValue: function (valueA, valueB, title){
    if(valueA || valueB ){ 
      console.clear()
      headerFunctions.systemHeader()
      headerFunctions.subTitle(title)
      console.log('Dado Incorreto!')
    }
  },
```

Em **saf.js** vamos criar uma variável **name**, que receberá a function **userName( )** e depois vamos fazer um **console.log** dessa variável:

```js
var input = require('readline-sync')

const { headerFunctions } = require('./headerFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')

headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

// variáveis 
const name = anamnesisFunctions.userName()

console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")
console.log(`Nome: ${name}`)

console.log(`===============================`)
```

Ao executar:

```tex
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
Nome: Thiago
===============================
```

### Dia do nascimento

Agora vamos criar a function **dateOfBirth** que vai criar o **dia de nascimento** do usuário. Essa function vai solicitar ao usuário para digitar sua data de nascimento no formato brasileiro (dia / mês  / ano), sendo (2 dígitos / 2 dígitos / 4 dígitos). Essa function terá três validações e duas functions de criação de data pelo objeto Date( ):

* **dateAsRegexExpression( )** - Para confirmar se a data digitada pelo usuário está no formato brasileiro. Recebe a data como string digitada pelo usuário e uma Expressão Regular. Retorna um valor booleano;
*  **dateInBrazilFormat( )** - Recebe a data digitada pelo usuário como string e retorna uma data criada pelo objeto Date( ). Está function foi criada, pois caso o usuário digite uma data inválida, a function retorna uma data qualquer e no momento de comparar com a próxima function, como ela não é válida, dá um erro, pedindo para o usuário digitar novamente a data;
* **validDate( )** - Vai receber a data digitada pelo usuário e a data criada pela function **dateInBrazilFormat( )** e compara se são iguais. Retorna um valor booleano;
* **dateInISOFormat( )** - Recebe a data no formato brasileiro como string. Retorna a data no formato ISO;
* **dateOfBirthHighestCurrentDate( )** - Recebe a data em formato ISO e verifica se ela é posterior a data atual. Retorna um valor booleano.

Em **anamnesisFunctions.js** vamos começar criando a function **dateOfBirth( )** que terá a seguinte estrutura:

```js
dateOfBirth: function(){
  	let dateInBrazilianFormat = ''
    let typedDate = ''
    const dateRegExp = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/
    let dateEqualExpressionRegex = false
    let dateValid = false
    let birthHighestCurrentDate = true
    
    do{
  
    }while(!dateEqualExpressionRegex || !dateValid || birthHighestCurrentDate)
    
    return dateInBrazilianFormat
    
  },
```

Essa function irá retornar a data de nascimento no formato brasileiro **dateInBrazilianFormat**.

Primeiro o usuário irá digitar a sua data de nascimento e essa informação será armazenada em **typedDate**.

Em seguinda essa data será validada pela function **dateAsRegexExpression( )**.

```js
dateOfBirth: function(){
    let dateInBrazilianFormat = ''
    let typedDate = ''
    const dateRegExp = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/
    let dateEqualExpressionRegex = false
    let dateValid = false
    let birthHighestCurrentDate = true
  
    do{
      typedDate = input.question('Digite sua data de nascimento (DD/MM/AAAA): ')
      
      dateEqualExpressionRegex = validationFunctions.dateAsRegexExpression(typedDate, dateRegExp)
  
    }while(!dateEqualExpressionRegex || !dateValid || birthHighestCurrentDate)
    
    return dateInBrazilianFormat
    
  },
```

Em **validationFunctions.js** vamos criar a function **dateAsRegexExpression**:

```js
dateAsRegexExpression: function(date, regex){
    
    let dateAsRegexExpression = regex.test(date)
    
    return dateAsRegexExpression ? true : false
    
  },
```

Agora em **anamnesisFunctions.js** vamos passar a data de nascimento pela function **dateInBrazilFormat( )** e armazenar a nova data criada em **dateInBrazilianFormat**:

```js
dateOfBirth: function(){
    let dateInBrazilianFormat = ''
    let typedDate = ''
    const dateRegExp = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/
    let dateEqualExpressionRegex = false
    let dateValid = false
    let birthHighestCurrentDate = true
  
    do{
      typedDate = input.question('Digite sua data de nascimento (DD/MM/AAAA): ')
      
      dateEqualExpressionRegex = validationFunctions.dateAsRegexExpression(typedDate, dateRegExp)
      
      dateInBrazilianFormat = anamnesisFunctions.dateInBrazilFormat(typedDate)
  
  
    }while(!dateEqualExpressionRegex || !dateValid || birthHighestCurrentDate)
    
    return dateInBrazilianFormat
    
  },
```

Ainda em **anamnesisFunctions.js** crie a function **dateInBrazilFormat( )**:

```js
dateInBrazilFormat: function(dateInString){

    let arrayNumber = dateInString.split('/')
    let day = Number(arrayNumber[0])
    let month = Number(arrayNumber[1])
    let year = Number(arrayNumber[2])

    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }
    
    let dateInBrazilianFormat = new Date(year, month-1, day)
   
    return dateInBrazilianFormat.toLocaleDateString("pt-br", options)
    
  },
```

Vamos agora comparar as duas datas, **typedDate** e **dateInBrazilianFormat** para saber se são iguais, passando pela function **validDate( )** e armazenando em **dateValid**.

```js
dateOfBirth: function(){
    let dateInBrazilianFormat = ''
    let typedDate = ''
    const dateRegExp = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/
    let dateEqualExpressionRegex = false
    let dateValid = false
    let birthHighestCurrentDate = true
  
    do{
      typedDate = input.question('Digite sua data de nascimento (DD/MM/AAAA): ')
      
      dateEqualExpressionRegex = validationFunctions.dateAsRegexExpression(typedDate, dateRegExp)
      
      dateInBrazilianFormat = anamnesisFunctions.dateInBrazilFormat(typedDate)
  
      dateValid = validationFunctions.validDate(typedDate, dateInBrazilianFormat)
  
    }while(!dateEqualExpressionRegex || !dateValid || birthHighestCurrentDate)
    
    return dateInBrazilianFormat
    
  },
```

Em **validationFunctions.js** criamos a function **validDate( )**:

```js
validDate: function(informedDate, realDate){
    
    return informedDate === realDate ? true : false
    
  },
```

Agora em **anamnesisFunctions.js** vamos verificar se a data é posterior a data atual, passando a data em formato ISO pela function **dateOfBirthHighestCurrentDate( )** e armazenando o resultado em **birthHighestCurrentDate**:

```js
dateOfBirth: function(){
    let dateInBrazilianFormat = ''
    let typedDate = ''
    const dateRegExp = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/
    let dateEqualExpressionRegex = false
    let dateValid = false
    let birthHighestCurrentDate = true
  
    do{
      typedDate = input.question('Digite sua data de nascimento (DD/MM/AAAA): ')
      
      dateEqualExpressionRegex = validationFunctions.dateAsRegexExpression(typedDate, dateRegExp)
      
      dateInBrazilianFormat = anamnesisFunctions.dateInBrazilFormat(typedDate)
  
      dateValid = validationFunctions.validDate(typedDate, dateInBrazilianFormat)
  
      let dateISO = anamnesisFunctions.dateInISOFormat(dateInBrazilianFormat)
      
      birthHighestCurrentDate = validationFunctions.dateOfBirthHighestCurrentDate(dateISO)
  
    }while(!dateEqualExpressionRegex || !dateValid || birthHighestCurrentDate)
    
    return dateInBrazilianFormat
    
  },
```

Em **validationFunctions.js** criamos a function **dateOfBirthHighestCurrentDate( )**:

```js
dateOfBirthHighestCurrentDate: function(dateOfBirth){
    var currentDate = new Date()

    return dateOfBirth.getTime() > currentDate.getTime() ? true : false

  },
```

Para encerrar a function **dateOfBirth( )**, em **anamnesisFunctions.js** vamos passar os valores de **dateEqualExpressionRegex**, **dateValid** e **birthHighestCurrentDate** pela function **incorrectValue( )** que irá fazer com que o sistema de repetição funcione e também seja apresentada a mensagem de _Dado errado_ caso a data seja inválida:

```js
dateOfBirth: function(){
    let dateInBrazilianFormat = ''
    let typedDate = ''
    const dateRegExp = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/
    let dateEqualExpressionRegex = false
    let dateValid = false
    let birthHighestCurrentDate = true
  
    do{
      typedDate = input.question('Digite sua data de nascimento (DD/MM/AAAA): ')
      
      dateEqualExpressionRegex = validationFunctions.dateAsRegexExpression(typedDate, dateRegExp)
      
      dateInBrazilianFormat = anamnesisFunctions.dateInBrazilFormat(typedDate)
  
      dateValid = validationFunctions.validDate(typedDate, dateInBrazilianFormat)
  
      let dateISO = anamnesisFunctions.dateInISOFormat(dateInBrazilianFormat)
      
      birthHighestCurrentDate = validationFunctions.dateOfBirthHighestCurrentDate(dateISO)

      validationFunctions.incorrectValue(!dateEqualExpressionRegex, !dateValid, "Anamnese")
      validationFunctions.incorrectValue(false, birthHighestCurrentDate, "Anamnese")
  
    }while(!dateEqualExpressionRegex || !dateValid || birthHighestCurrentDate)
    
    return dateInBrazilianFormat
    
  },
```

Em **saf.js** criamos a variável **birthdayInBrazilianFormat** que receberá o resultado a function **dateOfBirth( )**, depois damos o **console.log**:

```js
var input = require('readline-sync')

const { headerFunctions } = require('./headerFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')

headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

// variáveis 
const name = anamnesisFunctions.userName()
const birthdayInBrazilianFormat = anamnesisFunctions.dateOfBirth(

console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")
console.log(`Nome: ${name}`)
console.log(`Data de nascimento: ${birthdayInBrazilianFormat}`)

console.log(`===============================`)
```

Executando o programa:

```tex
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
Nome: Fulano
Data de nascimento: 20/01/2000
===============================
```

### Idade

Vamos construir a idade usando a function **age( )** em **anamnesisFunctions.js**. Esta function recebe a data em formato ISO e retorna a idade em anos.

```js
age: function(birthDate) {

    let currentDay = new Date()
    let dateInMilliseconds = Math.abs(currentDay.getTime() - birthDate.getTime())
    let age = Math.floor(dateInMilliseconds / (1000 * 60 * 60 * 24 * 365))
    
    return age
  
  },
```

Em **saf.js** vamos criar a variável **birthdayInISOFormat** que receberá a data de nascimento no formato ISO usando a function **dateInISOFormat( )**.

 Em seguinda criamos a variável **age** que receberá a function **age( )** e depois mostrar a idade do usuário:

```javascript
var input = require('readline-sync')

const { headerFunctions } = require('./headerFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')

headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

// variáveis 
const name = anamnesisFunctions.userName()
const birthdayInBrazilianFormat = anamnesisFunctions.dateOfBirth()
const birthdayInISOFormat = anamnesisFunctions.dateInISOFormat(birthdayInBrazilianFormat)
const age = anamnesisFunctions.age(birthdayInISOFormat)

console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")
console.log(`Nome: ${name}`)
console.log(`Data de nascimento: ${birthdayInBrazilianFormat}`)
console.log(`Idade: ${age} anos!`)

console.log(`===============================`)
```

No terminal:

``` tex
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
Nome: Fulano
Data de nascimento: 01/12/1990
Idade: 31 anos!
===============================
```

