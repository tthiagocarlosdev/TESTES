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
  - **personalData.js**. Vamos colocar as funções dos dados pessoais.
- Em **saf.js** vamos:
  - Importar os arquivos **headerFunctions.js** e **personalData.js**.

```js
const { headerFunctions } = require('./headerFunctions')
const { personalData } = require('./personalData')
```

- Em **headerFunctions.js** vamos:
  - Criar uma variável objeto, **headerFunctions**, que vai guardar as funções de cabeçalho;
  - Exportar essa variável.

```js
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

- Em **personalData.js** vamos:
  - Criar a variável de **input** com o módulo **readline-sync**;
  - Criar a variável de importação de **validationFunctions.js**;
  - Criar uma variável objeto, **personalData**, que vai guardar as funções dos dados pessoais;
  - Exportar essa variável.

```js
/* Personal Data Functions */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')

const personalData = {}

module.exports = {
  personalData
}
```

Agora estamos prontos para colocar a mão na massa.

## Personal Data

Vamos começar pelos dados pessoais do avaliado.

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
headerFunctions.subTitle("Dados Pessoais")
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
         Dados Pessoais            
===============================
```

### Nome do usuário

Agora vamos criar uma function que vai receber o nome do usuário. Esta function receberá o nome do usuário que deverá ter apenas letras e acentos/sinais, caso tenha **número**, deverá informar ao usuário que o dado está incorreto e pedir novamente para o usuário inserir o nome. Para isto vamos criar também duas functions de validação que serão usadas dentro da function do nome. 

Em **personalData.js** dentro da variável que criamos, crie a function **userName**:

```js
userName: function() {
    
    let itsNumber = true
    let itsLetters = false
    let name = ''
    
    while(itsNumber || !itsLetters){

      name = input.question('Digite seu nome: ')
      itsNumber = validationFunctions.itsNumber(name)
      itsLetters = validationFunctions.itsLetters(name)
    
      validationFunctions.incorrectValue(!itsLetters, itsNumber, "Dados Pessoais")

    }
    
    return name
  
  },
```

### Validação de nome

Em **validationFunctions.js** também dentro da variável que criamos, vamos criar a function **itsLetters( )** que receberá uma string como parâmetro e irá retornar **true** se dentro da _string_ contém letras e **false** se não tiver letras:

```js
itsLetters: function(stringValue){
    letterOrSpaceRegExp = /\D/gi

    return letterOrSpaceRegExp.test(stringValue) ? true : false
    
  },
```

Ainda em **validationFunctions.js** também vamos criar a function **itsNumber( )** que receberá uma string com parâmetro e verifica se nessa string contém número. Caso tenha numero retona **true**, caso não, retorna **false**:

```js
itsNumber: function(value){
  
    const regExp2 = /\d/g
    let itsNumber = regExp2.test(value)
   
    return itsNumber ? true : false
    
  },
```

Ainda em **validationFunctions.js** a function **incorrectValue** terá dois valores booleanos como parâmetros e o subtítulo da parte da avaliação. Caso um dos dois valores booleanos seja _true_ a function irá retornar as functions **systemHeader( )** e **subTitle( )**, como também a mensagem _"Dado incorreto!"_:

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
const { personalData } = require('./personalData')

headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables 
const name = personalData.userName()

// show results
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")
console.log(`Nome: ${name}`)

console.log(`===============================`)
```

Ao executar:

```tex
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais             
===============================
Nome: Fulano de Tal
===============================
```

### Dia do nascimento

Agora vamos criar a function **dateOfBirth** que vai criar o **dia de nascimento** do usuário. Essa function vai solicitar ao usuário para digitar sua data de nascimento no formato brasileiro (dia / mês  / ano), sendo (2 dígitos / 2 dígitos / 4 dígitos). Essa function terá três validações e duas functions de criação de data pelo objeto **Date( )**:

* **isRegularExpression( )** - Para confirmar se a data digitada pelo usuário está no formato brasileiro. Recebe a data como string digitada pelo usuário e uma Expressão Regular. Retorna um valor booleano;
*  **dateInBrazilFormat( )** - Recebe a data digitada pelo usuário como string e retorna uma data criada pelo objeto Date( ). Está function foi criada, pois caso o usuário digite uma data inválida, a function retorna uma data qualquer e no momento de comparar com a próxima function, como ela não é válida, dá um erro, pedindo para o usuário digitar novamente a data;
* **validDate( )** - Vai receber a data digitada pelo usuário e a data criada pela function **dateInBrazilFormat( )** e compara se são iguais. Retorna um valor booleano;
* **dateInISOFormat( )** - Recebe a data no formato brasileiro como string. Retorna a data no formato ISO;
* **dateOfBirthHighestCurrentDate( )** - Recebe a data em formato ISO e verifica se ela é posterior a data atual. Retorna um valor booleano.

Em **personalData.js** vamos começar criando a function **dateOfBirth( )** que terá a seguinte estrutura:

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

Em seguinda essa data será validada pela function **isRegularExpression( )**.

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
      
      dateEqualExpressionRegex = validationFunctions.isRegularExpression(typedDate, dateRegExp)
  
    }while(!dateEqualExpressionRegex || !dateValid || birthHighestCurrentDate)
    
    return dateInBrazilianFormat
    
  },
```

Em **validationFunctions.js** vamos criar a function **isRegularExpression**:

```js
isRegularExpression: function(dateValue, regex){
    
    return regex.test(dateValue) ? true : false
    
 },
```

Agora em **personalData.js** vamos passar a data de nascimento pela function **dateInBrazilFormat( )** e armazenar a nova data criada em **dateInBrazilianFormat**:

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
      
      dateEqualExpressionRegex = validationFunctions.isRegularExpression(typedDate, dateRegExp)
      
      dateInBrazilianFormat = personalData.dateInBrazilFormat(typedDate)
  
  
    }while(!dateEqualExpressionRegex || !dateValid || birthHighestCurrentDate)
    
    return dateInBrazilianFormat
    
  },
```

Ainda em **personalData.js** crie a function **dateInBrazilFormat( )**:

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
      
      dateEqualExpressionRegex = validationFunctions.isRegularExpression(typedDate, dateRegExp)
      
      dateInBrazilianFormat = personalData.dateInBrazilFormat(typedDate)
  
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

Em **personalData.js** vamos criar a function **dateInISOFormat( )** e atribuir o seu retorno a variável **dateISO** na funtion **dateOfBirth( )**:

```js
dateInISOFormat: function(dateInString){
    
    let arrayNumber = dateInString.split('/')
    let day = Number(arrayNumber[0])
    let month = Number(arrayNumber[1])
    let year = Number(arrayNumber[2])

    return new Date(year, month-1, day)

},
```

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
      
      dateEqualExpressionRegex = validationFunctions.isRegularExpression(typedDate, dateRegExp)
      
      dateInBrazilianFormat = personalData.dateInBrazilFormat(typedDate)
  
      dateValid = validationFunctions.validDate(typedDate, dateInBrazilianFormat)
  
      let dateISO = personalData.dateInISOFormat(dateInBrazilianFormat)
  
    }while(!dateEqualExpressionRegex || !dateValid || birthHighestCurrentDate)
    
    return dateInBrazilianFormat
    
  },
```

Agora em **personalData.js** vamos verificar se a data é posterior a data atual, passando a data em formato ISO pela function **dateOfBirthHighestCurrentDate( )** e armazenando o resultado em **birthHighestCurrentDate**:

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
      
      dateEqualExpressionRegex = validationFunctions.isRegularExpression(typedDate, dateRegExp)
      
      dateInBrazilianFormat = personalData.dateInBrazilFormat(typedDate)
  
      dateValid = validationFunctions.validDate(typedDate, dateInBrazilianFormat)
  
      let dateISO = personalData.dateInISOFormat(dateInBrazilianFormat)
      
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

Para encerrar a function **dateOfBirth( )**, em **personalData.js** vamos passar os valores de **dateEqualExpressionRegex**, **dateValid** e **birthHighestCurrentDate** pela function **incorrectValue( )** que irá fazer com que o sistema de repetição funcione e também seja apresentada a mensagem de "_Dado incorreto!_" caso a data seja inválida:

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
      
      dateEqualExpressionRegex = validationFunctions.isRegularExpression(typedDate, dateRegExp)
      
      dateInBrazilianFormat = personalData.dateInBrazilFormat(typedDate)
  
      dateValid = validationFunctions.validDate(typedDate, dateInBrazilianFormat)
  
      let dateISO = personalData.dateInISOFormat(dateInBrazilianFormat)
      
      birthHighestCurrentDate = validationFunctions.dateOfBirthHighestCurrentDate(dateISO)

      validationFunctions.incorrectValue(!dateEqualExpressionRegex, !dateValid, "Dados Pessoais")
      validationFunctions.incorrectValue(false, birthHighestCurrentDate, "Dados Pessoais")
  
    }while(!dateEqualExpressionRegex || !dateValid || birthHighestCurrentDate)
    
    return dateInBrazilianFormat
    
  },
```

Em **saf.js** criamos a variável **birthdayInBrazilianFormat** que receberá o resultado a function **dateOfBirth( )**, depois damos o **console.log**:

```js
const { headerFunctions } = require('./headerFunctions')
const { personalData } = require('./personalData')

headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables 
const name = personalData.userName()
const birthdayInBrazilianFormat = personalData.dateOfBirth()

// show results
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")
console.log(`Nome: ${name}`)
console.log(`Data de nascimento: ${birthdayInBrazilianFormat}`)

console.log(`===============================`)
```

Executando o programa:

```tex
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
Nome: Fulano
Data de nascimento: 20/01/2000
===============================
```

### Idade

Vamos construir a idade usando a function **age( )** em **personalData.js**. Esta function recebe a data em formato ISO e retorna a idade em anos.

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
const { headerFunctions } = require('./headerFunctions')
const { personalData } = require('./personalData')

headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables 
const name = personalData.userName()
const birthdayInBrazilianFormat = personalData.dateOfBirth()
const birthdayInISOFormat = personalData.dateInISOFormat(birthdayInBrazilianFormat)
const age = personalData.age(birthdayInISOFormat)

// show results
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")
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
           Dados Pessoais            
===============================
Nome: Fulano
Data de nascimento: 01/12/1990
Idade: 31 anos!
===============================
```

### Sexo

Agora vamos criar a function **sexNumber( )**. Em **personalData.js** vamos colocar esta function que mostrará um menu para o usuário escolher qual é seu sexo. Esta function terá que validar a escolha do usuário, se é um número (**itsNumber( )**) e se esse número é menor ou maior do que as opções de escolha(**isLessThanMinimumOrGreaterThanMaximum( )**).

```js
sexNumber: function(){
    
    let istNumber = false
    let isLessThanMinimumOrGreaterThanMaximum = true
    let sexNumber = 0
  
    do{
      console.log('Escolha Sexo:')
      console.log('[1] Masculino')
      console.log('[2] Feminino')
      sexNumber = input.question('')
  
      istNumber = validationFunctions.itsNumber(sexNumber)
  
      isLessThanMinimumOrGreaterThanMaximum = validationFunctions.isLessThanMinimumOrGreaterThanMaximum(1, 2, Number(sexNumber))
      
      validationFunctions.incorrectValue(!istNumber, isLessThanMinimumOrGreaterThanMaximum, "Anamnese")
  
    }while(!istNumber || isLessThanMinimumOrGreaterThanMaximum)
    
    return Number(sexNumber)
  },
```

Ainda em  **personalData.js** vamos criar a function **showSex( )** que mostrará qual é o sexo do usuário. esta function receberá como parâmetro o **numberSex**:

```js
  showSex: function(numberSex){

    return numberSex == 1 ? 'Masculino': 'Feminino'
    
  },
```

Em **saf.js** vamos criar as variáveis **sexNumber** e **sex** que vão receber as functions **sexNumber( )** e **showSex** respectivamente e depois vamos mostrar o sexo do usuário:

```js
const { headerFunctions } = require('./headerFunctions')
const { personalData } = require('./personalData')

headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables 
const name = personalData.userName()
const birthdayInBrazilianFormat = personalData.dateOfBirth()
const birthdayInISOFormat = personalData.dateInISOFormat(birthdayInBrazilianFormat)
const age = personalData.age(birthdayInISOFormat)
const sexNumber = personalData.sexNumber()
const sex = personalData.showSex(sexNumber)

// show results
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")
console.log(`Nome: ${name}`)
console.log(`Data de nascimento: ${birthdayInBrazilianFormat}`)
console.log(`Idade: ${age} anos!`)
console.log(`Sexo: ${sex}`)

console.log(`===============================`)

```

Ao executar o programa:

```tex
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
Nome: Fulano Cicrano
Data de nascimento: 10/03/1999
Idade: 23 anos!
Sexo: Masculino
===============================
```

### Profissão

Agora vamos criar a function  **userProfession( )** que retornará a profissão do usuário. Esta function deve aceitar apenas letras e símbolos. Também não pode aceitar se não for digitado a profissão (vazio).

Em **personalData.js** criamos esta function e usamos nela as functions **itsNumber( )** e **itsLetters( )** e as validações já estão realizadas.

```js
userProfession: function() {
    
    let itsNumber = true
    let itsLetters = false
    let profession = ''
    
    while(itsNumber || !itsLetters){

      profession = input.question('Digite sua profissão: ')
      itsNumber = validationFunctions.itsNumber(profession)
      itsLetters = validationFunctions.itsLetters(profession)
    
      validationFunctions.incorrectValue(!itsLetters, itsNumber, "Dados Pessoais")

    }
    
    return profession
  
  },
```

Em **saf.js** criamos a variável **profession** recebendo a function **userProfession( )**:

```js
const { headerFunctions } = require('./headerFunctions')
const { personalData } = require('./personalData')

headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables 
const name = personalData.userName()
const birthdayInBrazilianFormat = personalData.dateOfBirth()
const birthdayInISOFormat = personalData.dateInISOFormat(birthdayInBrazilianFormat)
const age = personalData.age(birthdayInISOFormat)
const sexNumber = personalData.sexNumber()
const sex = personalData.showSex(sexNumber)
const profession = personalData.userProfession()

// show results
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")
console.log(`Nome: ${name}`)
console.log(`Data de nascimento: ${birthdayInBrazilianFormat}`)
console.log(`Idade: ${age} anos!`)
console.log(`Sexo: ${sex}`)
console.log(`Profissão: ${profession}`)

console.log(`===============================`)
```

Ao executar:

```tex
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
Nome: Fulano Cicrano
Data de nascimento: 10/03/1999
Idade: 23 anos!
Sexo: Masculino
Profissão: Administrador
===============================
```

### E-mail

Agora vamos criar a function **userEmail( )** que vai retornar um email válido digitado pelo usuário.

Dentro desta function iremos usar outra function de validação do email, **validEmail( )**. Um email para ser válido deve possuir as seguintes condições:

- Não possuir espaços;
- Possuir o @;
- Possuir algum caracter após o @;
- Possuir algum caracter antes do @;
- Possuir pelo menos um ponto após o caracter depois do @;
- Possuir algum caracter após o ponto.

A function **validEmail( )**, recebe o  email como parâmetro e separa em duas partes:

- user = antes do @
- domain = depois do @

Após começamos as validações que já haviam sido definidas acima no if na sequencia abaixo:

- Tamanho de user maior ou igual a 1 caracter.
- Tamanho do domain maior ou igual a 3 caracteres.
- user não pode conter o @.
- domain não pode conter o @.
- user não pode conter o “ ” espaço em branco.
- domain não pode conter o “ ” espaço em branco.
- domain tem que possuir “.” Ponto.
- A posição do primeiro ponto tem que ser maior ou igual a 1, lembrando a posição 0 deve ser ocupado por algum caracter após o @.
- A posição do ultimo ponto tem que ser menor que o ultimo caracter, deve ser finalizado o domínio por um caracter.

Caso o email digitado pelo usuário não atenda a qualquer uma destas condições, uma mensagem de erro deve ser apresentada, e o usuário deve digitar seu email novamente. Feitas essas considerações, vamos aos códigos abaixo:

Em **validationFunctions.js**:

```js
validEmail: function(userEmail){

    let user = userEmail.substring(0, userEmail.indexOf("@"))
    let domain = userEmail.substring(userEmail.indexOf("@")+ 1, userEmail.length)
    let validations = ((user.length >=1) && 
                        (domain.length >=3) && 
                        (user.search("@")==-1) && 
                        (domain.search("@")==-1) && 
                        (user.search(" ")==-1) && 
                        (domain.search(" ")==-1) && 
                        (domain.search(".")!=-1) && 
                        (domain.indexOf(".") >=1)&& 
                        (domain.lastIndexOf(".") < domain.length - 1))
  
      return validations ? true : false
    
  },
```

Em **personalData.js**:

```js
userEmail: function() {
    
    let email = ''
    let itsEmail = false

    do{
      
      email = input.question('Digite seu email: ')

      itsEmail = validationFunctions.validEmail(email)
      
      validationFunctions.incorrectValue(!itsEmail, false, "Dados Pessoais")

    }while(!itsEmail)
    
    return email

  },
```

Em **saf.js** criamos a variável **userEmail** que vai receber a function **userEmail( )**. Depois apresentamos o resultado:

```js
const { headerFunctions } = require('./headerFunctions')
const { personalData } = require('./personalData')

headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables 
const name = personalData.userName()
const birthdayInBrazilianFormat = personalData.dateOfBirth()
const birthdayInISOFormat = personalData.dateInISOFormat(birthdayInBrazilianFormat)
const age = personalData.age(birthdayInISOFormat)
const sexNumber = personalData.sexNumber()
const sex = personalData.showSex(sexNumber)
const profession = personalData.userProfession()
const userEmail = personalData.userEmail()

// show results
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")
console.log(`Nome: ${name}`)
console.log(`Data de nascimento: ${birthdayInBrazilianFormat}`)
console.log(`Idade: ${age} anos!`)
console.log(`Sexo: ${sex}`)
console.log(`Profissão: ${profession}`)
console.log(`E-mail: ${userEmail}`)

console.log(`===============================`)
```

Ao executar:

```tex
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
Nome: Fulano Cicrano
Data de nascimento: 10/03/1999
Idade: 23 anos!
Sexo: Masculino
Profissão: Administrador
E-mail: fulano@cicrano.com
===============================
```

### Número de telefone

Agora vamos criar a function **phoneNumber( )** que orá retornar um número de celular válido. Está function só pode receber números, em formato de número de celular, DDD + número de celular (nove dígitos). Caso o número não esteja de acordo, uma mensagem de erro deverá aparecer e solicitar que o usuário digite o número de celular novamente.

Em **personalData.js**:

```js
phoneNumber: function(){
  
    let phoneNumber = 0
    let regexPhone = /^([0-9]{2})[0-9]{9}$/
    let istPhoneNumber = true
  
    do{
      
      phoneNumber = input.question('Digite seu número de celular com DDD: ')
      istPhoneNumber = validationFunctions.isRegularExpression(phoneNumber, regexPhone)
      validationFunctions.incorrectValue(false, !istPhoneNumber, "Dados Pessoais")
  
    }while(!istPhoneNumber)
    
    return phoneNumber
  },
```

Em **saf.js** vamos criar a variável **phoneNumber** que receberá a function **phoneNumber( )** e depois mostrar o número do telefone:

```js
const { headerFunctions } = require('./headerFunctions')
const { personalData } = require('./personalData')

headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables 
const name = personalData.userName()
const birthdayInBrazilianFormat = personalData.dateOfBirth()
const birthdayInISOFormat = personalData.dateInISOFormat(birthdayInBrazilianFormat)
const age = personalData.age(birthdayInISOFormat)
const sexNumber = personalData.sexNumber()
const sex = personalData.showSex(sexNumber)
const profession = personalData.userProfession()
const userEmail = personalData.userEmail()
const phoneNumber = personalData.phoneNumber()

// show results
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")
console.log(`Nome: ${name}`)
console.log(`Data de nascimento: ${birthdayInBrazilianFormat}`)
console.log(`Idade: ${age} anos!`)
console.log(`Sexo: ${sex}`)
console.log(`Profissão: ${profession}`)
console.log(`E-mail: ${userEmail}`)
console.log(`Celular: ${phoneNumber}`)

console.log(`===============================`)

```

Ao executar o programa:

```tex
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
Nome: Fulano Cicrano
Data de nascimento: 10/03/1999
Idade: 23 anos!
Sexo: Masculino
Profissão: Administrador
E-mail: fulano@cicrano.com
Celular: 61917166613
===============================
```

Arquivo **personalData.js** completo:

```js
/* Personal Data Functions */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')


const personalData = {
      
  userName: function() {
    
    let itsNumber = true
    let itsLetters = false
    let name = ''
    
    while(itsNumber || !itsLetters){

      name = input.question('Digite seu nome: ')
      itsNumber = validationFunctions.itsNumber(name)
      itsLetters = validationFunctions.itsLetters(name)
    
      validationFunctions.incorrectValue(!itsLetters, itsNumber, "Dados Pessoais")

    }
    
    return name
  
  },

  // cria a data de nascimento do usuário
  dateOfBirth: function(){
    let dateInBrazilianFormat = ''
    let typedDate = ''
    const dateRegExp = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/
    let dateEqualExpressionRegex = false
    let dateValid = false
    let birthHighestCurrentDate = true
  
    do{
      typedDate = input.question('Digite sua data de nascimento (DD/MM/AAAA): ')
      
      dateEqualExpressionRegex = validationFunctions.isRegularExpression(typedDate, dateRegExp)
      
      dateInBrazilianFormat = personalData.dateInBrazilFormat(typedDate)
  
      dateValid = validationFunctions.validDate(typedDate, dateInBrazilianFormat)
  
      let dateISO = personalData.dateInISOFormat(dateInBrazilianFormat)
      
      birthHighestCurrentDate = validationFunctions.dateOfBirthHighestCurrentDate(dateISO)

      validationFunctions.incorrectValue(!dateEqualExpressionRegex, !dateValid, "Dados Pessoais")
      validationFunctions.incorrectValue(false, birthHighestCurrentDate, "Dados Pessoais")
  
    }while(!dateEqualExpressionRegex || !dateValid || birthHighestCurrentDate)
    
    return dateInBrazilianFormat
    
  },

   // recebe a data como string e retorna a data no formato brasileiro criada pelo Objeto Date()
   dateInBrazilFormat: function(dateInString){

    //O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.
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
    
    // O método toLocaleDateString() retorna uma string com a representação de parte da data baseando-se no idioma. Os novos argumentos locales e options deixam as aplicações especificarem o idioma cujas convenções de formatação devem ser usadas e permitem customizar o comportamento da função.
    return dateInBrazilianFormat.toLocaleDateString("pt-br", options)
    
  },

  // recebe uma data no formato brasleiro como string. Retorna a data no formato ISO
  dateInISOFormat: function(dateInString){
    
    //O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.
    let arrayNumber = dateInString.split('/')
    let day = Number(arrayNumber[0])
    let month = Number(arrayNumber[1])
    let year = Number(arrayNumber[2])

    return new Date(year, month-1, day)

  },
  
  // Recebe a data em formato ISO e retorna a idade em anos.
  age: function(birthDate) {

      let currentDay = new Date()
      let dateInMilliseconds = Math.abs(currentDay.getTime() - birthDate.getTime())
      let age = Math.floor(dateInMilliseconds / (1000 * 60 * 60 * 24 * 365))
      
      return age
    
  },

  sexNumber: function(){
    
    let istNumber = false
    let isLessThanMinimumOrGreaterThanMaximum = true
    let sexNumber = 0
  
    do{
      console.log('Escolha Sexo:')
      console.log('[1] Masculino')
      console.log('[2] Feminino')
      sexNumber = input.question('')
  
      istNumber = validationFunctions.itsNumber(sexNumber)
  
      isLessThanMinimumOrGreaterThanMaximum = validationFunctions.isLessThanMinimumOrGreaterThanMaximum(1, 2, Number(sexNumber))
      
      validationFunctions.incorrectValue(!istNumber, isLessThanMinimumOrGreaterThanMaximum, "Anamnese")
  
    }while(!istNumber || isLessThanMinimumOrGreaterThanMaximum)
    
    return sexNumber
  },

  showSex: function(numberSex){

    return numberSex == 1 ? 'Masculino': 'Feminino'
    
  },

  userProfession: function() {
    
    let itsNumber = true
    let itsLetters = false
    let profession = ''
    
    while(itsNumber || !itsLetters){

      profession = input.question('Digite sua profissão: ')
      itsNumber = validationFunctions.itsNumber(profession)
      itsLetters = validationFunctions.itsLetters(profession)
    
      validationFunctions.incorrectValue(!itsLetters, itsNumber, "Dados Pessoais")

    }
    
    return profession
  
  },

  userEmail: function() {
    
    let email = ''
    let itsEmail = false

    do{
      
      email = input.question('Digite seu email: ')

      itsEmail = validationFunctions.validEmail(email)
      
      validationFunctions.incorrectValue(!itsEmail, false, "Dados Pessoais")

    }while(!itsEmail)
    
    return email

  },

  phoneNumber: function(){
  
    let phoneNumber = 0
    let regexPhone = /^([0-9]{2})[0-9]{9}$/
    let istPhoneNumber = true
  
    do{
      
      phoneNumber = input.question('Digite seu número de celular com DDD: ')
      istPhoneNumber = validationFunctions.isRegularExpression(phoneNumber, regexPhone)
      validationFunctions.incorrectValue(false, !istPhoneNumber, "Dados Pessoais")
  
    }while(!istPhoneNumber)
    
    return phoneNumber
  },

}

module.exports = {
  personalData
}
```

Arquivo **headerFunctions.js** completo:

```js
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

Arquivo **validationFunctions.js** completo:

```js
/* Validation Functions */

const { headerFunctions } = require('./headerFunctions')

const validationFunctions = {

  itsLetters: function(stringValue){
    letterOrSpaceRegExp = /\D/gi

    return letterOrSpaceRegExp.test(stringValue) ? true : false
    
  },

  // verifica se o valor passado é apenas um número
  itsNumber: function(value){
  
    const regExp2 = /\d/g
    let itsNumber = regExp2.test(value)
   
    return itsNumber ? true : false
    
  },

  incorrectValue: function (valueA, valueB, title){
    
    if(valueA || valueB ){ 
      console.clear()
      headerFunctions.systemHeader()
      headerFunctions.subTitle(title)
      console.log('Dado Incorreto!')
    }

  },

  // recebe um valor e uma expressão regular. retorna true se o valor estiver de acordo com a expressão regular  
  // retorna true se a data digitada pelo usuário está no formato da Regex Expression
  
  isRegularExpression: function(stringValue, regex){
    
    return regex.test(stringValue) ? true : false
    
  },

    // recebe duas datas e valida se são iguais
  validDate: function(informedDate, realDate){
    
    return informedDate === realDate ? true : false
    
  },

    // recebe a data de nascimento em formato ISO e retorna se é maior do que a data atual
  dateOfBirthHighestCurrentDate: function(dateOfBirth){
    var currentDate = new Date()

    // O método getTime() retorna o valor numérico correspondente ao horário da data especificada de acordo com o horário universal.
    return dateOfBirth.getTime() > currentDate.getTime() ? true : false

  },

  isLessThanMinimumOrGreaterThanMaximum: function(minimum, maximum, givenAway){
    
    return givenAway < minimum || givenAway > maximum ? true : false
    
  },

  validEmail: function(userEmail){

    let user = userEmail.substring(0, userEmail.indexOf("@"))
    let domain = userEmail.substring(userEmail.indexOf("@")+ 1, userEmail.length)
    let validations = ((user.length >=1) && 
                        (domain.length >=3) && 
                        (user.search("@")==-1) && 
                        (domain.search("@")==-1) && 
                        (user.search(" ")==-1) && 
                        (domain.search(" ")==-1) && 
                        (domain.search(".")!=-1) && 
                        (domain.indexOf(".") >=1)&& 
                        (domain.lastIndexOf(".") < domain.length - 1))
  
      return validations ? true : false
    
  },
  
}

module.exports = {
  validationFunctions
}
```

Chegamos ao fim da parte de **Dados Pessoais**. Agora vamos entrar na próxima etapa, **Anamnese**, Let's Go!

## Anamnesis

Vamos começar criando o arquivo **anamnesisFunctions.js** e dentro dele vamos colocar:

- Variável input;
- Requerer a variável **validationFunctions**;
- Criar uma variável objeto **anamnesisFunctions**;
- Exportar essa variável.

```js
/* anamnesisFunctions.js */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')

const anamnesisFunctions = {

}

module.exports = {
  anamnesisFunctions
}
```

### Questionário PAR-Q

Na variável **anamnesisFunctions** vamos criar a primeira function, **choice( )**, que será uma function que exibirá um menu de escolha, tendo como opções [1] para sim e [2] para não:

```js
choice(){

    console.log('Escolha:')
    console.log('[1] Sim')
    console.log('[2] Não')

  },
```

Vamos agora criar a function **questionnairePARQ( )**. Esta function deverá apresentar 7 perguntas para o usuário, aceitando apenas como resposta, "sim", ou "não". Caso alguma resposta seja "sim", a mensagem "Você deverá realizar um exame médico antes de iniciar suas atividades!" deverá ser apresentada. Caso todas as repostas seja "não", a mensagem "Todas as respostas do questionário foram 'Sim'!" deverá ser apresentada. Na validação das respostas, só serão aceitos os numerais 1 e 2, caso a resposta seja qualquer outro valor diferente disso, até mesmo vazio, a function **incorrectValue( )** deverá ser chamada e o usuário terá que responder novamente com a resposta correta.

Questionário PAR-Q:

- Seu médico já mencionou alguma vez que você tem uma condição cardíaca e que você só deve realizar atividade física recomendada por um médico?
- Você sente dor no tórax quando realiza atividade física?
- No mês passado, você teve dor torácica quando não estava realizando atividade física?
- Você perdeu o equilíbrio por causa de tontura ou alguma vez perdeu a consciência?
- Você tem algum problema ósseo ou de articulação que poderia piorar em conseqüência de uma alteração em sua atividade física?
- Seu médico está prescrevendo medicamentos (por exemplo, água pílulas) para sua pressão ou condição cardíaca?
- Você teria alguma razão para não praticar exercício físico ou outro problema que impeça?

```js
questionnairePARQ(){

    let questionnairePARQ = [
      "Seu médico já mencionou alguma vez que você tem uma condição cardíaca e que você só deve realizar atividade física recomendada por um médico?",
      "Você sente dor no tórax quando realiza atividade física?",
      "No mês passado, você teve dor torácica quando não estava realizando atividade física?",
      "Você perdeu o equilíbrio por causa de tontura ou alguma vez perdeu a consciência?",
      "Você tem algum problema ósseo ou de articulação que poderia piorar em conseqüência de uma alteração em sua atividade física?",
      "Seu médico está prescrevendo medicamentos para sua pressão ou condição cardíaca?",
      "Você teria alguma razão para não praticar exercício físico ou outro problema que impeça?",
    ]
    let questionnairePARQAnswer = []
    let itsNumberOneOrTwo = true
    let regexNumber = /^[1]$|^[2]$/

    for(let i = 0; i < questionnairePARQ.length; i++){
      
      do{

        console.log(`${[i+1]} - ${questionnairePARQ[i]}`)
        anamnesisFunctions.choice()
        questionnairePARQAnswer[i] = input.question("")
        itsNumberOneOrTwo = validationFunctions.isRegularExpression(questionnairePARQAnswer[i], regexNumber)
        validationFunctions.incorrectValue(false, !itsNumberOneOrTwo, "Anamnese")

      }while(!itsNumberOneOrTwo)
      
    }
    
    if(questionnairePARQAnswer.includes("1")){
      return "Você deverá realizar um exame médico antes de iniciar suas atividades!"
    } else {
      return "Todas as respostas do questionário foram 'Sim'!"
    }

  },
```

Em **saf.js** vamos requerer o arquivo **anamnesisFunctions**:

```js
const { anamnesisFunctions } = require('./anamnesisFunctions')
```

Em seguida vamos criar a sessão de **variables anamnesisFunctions** e **show results anamnesisFunctions** declarando a variável **questionnairePARQ** que receberá a function **questionnairePARQ( )**. Em seguida apresentamos o resultado. Logo, em **saf.js**:

```js
const { headerFunctions } = require('./headerFunctions')
const { personalData } = require('./personalData')
const { anamnesisFunctions } = require('./anamnesisFunctions')

headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables personalData
const name = personalData.userName()
const birthdayInBrazilianFormat = personalData.dateOfBirth()
const birthdayInISOFormat = personalData.dateInISOFormat(birthdayInBrazilianFormat)
const age = personalData.age(birthdayInISOFormat)
const sexNumber = personalData.sexNumber()
const sex = personalData.showSex(sexNumber)
const profession = personalData.userProfession()
const userEmail = personalData.userEmail()
const phoneNumber = personalData.phoneNumber()

console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

// variables anamnesisFunctions
const questionnairePARQ = anamnesisFunctions.questionnairePARQ()

// show results personalData
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")
console.log(`Nome: ${name}`)
console.log(`Data de nascimento: ${birthdayInBrazilianFormat}`)
console.log(`Idade: ${age} anos!`)
console.log(`Sexo: ${sex}`)
console.log(`Profissão: ${profession}`)
console.log(`E-mail: ${userEmail}`)
console.log(`Celular: ${phoneNumber}`)

// show results anamnesisFunctions
console.log(`===============================`)
headerFunctions.subTitle("Anamnese")

console.log(`Questionário PAR-Q: ${questionnairePARQ}`)

console.log(`===============================`)

```

Esta parte da execução, iremos apenas mostrar a parte da Anamnese, no final de todo o programa mostramos ele completo, logo ao executar:

```tex
===============================
           Anamnese            
===============================
Questionário PAR-Q: Você deverá realizar um exame médico antes de iniciar suas atividades!
===============================
```

### Estado Físico Atual

AGora vamos criar a function **currentPhysicalState( )** que vai pedir para o usuário informar qual é o seu estado físico atual a partir do menu de escolha **[1]** para **Sedentário** e **[2]** para **Ativo**. Esta function deve aceitar apenas um dígito, sendo apenas o numeral 1 ou 2. Caso a resposta seja qualquer outro valor diferente disso, até mesmo vazio, a function **incorrectValue( )** deverá ser chamada e o usuário terá que responder novamente com a resposta correta. Está function retorna o valor digitado pelo usuário.

```js
currentPhysicalState(){

    let currentPhysicalState = 0
    let itsNumberOneOrTwo = true
    const regexNumber = /^[1]$|^[2]$/
    
    do{
  
      console.log('Qual seu estado físico atualmente? ')
      console.log(`[1] Sedentário`)
      console.log(`[2] Ativo`)
      currentPhysicalState = input.question('')
      
      itsNumberOneOrTwo = validationFunctions.isRegularExpression(currentPhysicalState, regexNumber)
      validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")
  
    }while(!itsNumberOneOrTwo)
  
    return currentPhysicalState
  
  },
```

Em **saf.js** criamos a variável **currentPhysicalState** que recebe o retorno da function **currentPhysicalState( )**.

```js
const currentPhysicalState = anamnesisFunctions.currentPhysicalState()
```

Em **anamnesisFunctions.js** criamos a function **showPhysicalState( )** que irá mostrar se o usuário é sedentário ou ativo. Está function terá como parâmetro um valor numérico:

```js
showPhysicalState(numericValue){
  
    return Number(numericValue) === 1 ? 'Sedentário' : 'Ativo'
  
  },
```

E em **saf.js** vamos mostrar o resultado chamando a function **showPhysicalState( )** e pasando como parâmetro a variável **currentPhysicalState**.

```js
console.log(`Estado físico: ${anamnesisFunctions.showPhysicalState(currentPhysicalState)}`)
```

Ao executar o programa:

```tex
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
Questionário PAR-Q: Todas as respostas do questionário foram 'Sim'!
Estado físico: Ativo
===============================
```

### Doença Pregressa

Agora vamos criar a function **pastIllness( )** que irá retornar se o avaliado possue doença pregressa ou não. Esta function deve aceitar apenas um dígito, sendo apenas  **[1]** para **Sim** e **[2]** para **Não**. Caso a resposta seja qualquer outro valor diferente disso, até mesmo vazio, a function **incorrectValue( )** deverá ser chamada e o usuário terá que responder novamente com a resposta correta. Caso a resposta seja **sim** o usuário deve informar qual doença ele teve/tem. Vamos chamar a function **itsLetters( )** para validar o que será digitado pelo o usuário, pois não será aceito apenas número, espaço ou vazio, o usuáriotem ue digitar um texto. Caso o usuário não digite texto a function **incorrectValue( )** deverá ser chamada e o usuário terá que responder novamente com a resposta correta. Sobre o retorno desta function: Caso o usuário digite **não**, será retornado a mensagem **"Sem doença pregressa."**, porém se ele digitar **sim**, deverá ser retornado a doença informada pelo o mesmo.

Em **anamnesisFunctions.js**:

```js
pastIllness(){

    let pastIllnessNumber = 2
    let pastIllnessText = ''
    let itsNumberOneOrTwo = true
    let regexNumber = /^[1]$|^[2]$/
    let itsLetters = true
  
    do{
  
      console.log(`Avaliado possue doença pregressa?`)
      anamnesisFunctions.choice()
      pastIllnessNumber = Number(input.question(''))
  
      itsNumberOneOrTwo = validationFunctions.isRegularExpression(pastIllnessNumber, regexNumber)
      validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")
  
      if(pastIllnessNumber === 1){
        
        do{
  
          console.log(`Qual doença?`)
          pastIllnessText = input.question('')
          itsLetters = validationFunctions.itsLetters(pastIllnessText)
          validationFunctions.incorrectValue(false, !itsLetters, "Anamnese")
  
        }while(!itsLetters)
        
      } else {
        pastIllnessText = `Sem doença pregressa.`
      }
  
    }while(!itsNumberOneOrTwo)
  
      return pastIllnessText
  
  },
```

Em **saf.js** vamos criar a variável **pastIllness** que receberá a function **pastIllness( )** e depois vamos mostrar o resultado.

```js
const pastIllness = anamnesisFunctions.pastIllness()
```

```js
console.log(`Doença Pregressa: ${pastIllness}`)
```

Ao executar o programa:

```tex
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
Questionário PAR-Q: Você deverá realizar um exame médico antes de iniciar suas atividades!
Estado físico: Sedentário
Doença Pregressa: Sem doença pregressa.
===============================
```

### Doenças na Família

Agora vamos criar a function **illnessesInTheFamily( )** que será do mesmo jeito, com os mesmos requisitos da function **pastIllness( )**. Vamos mudar apenas os nomes de algumas variáveis (illnessesFamilyNumber e illnessesFamilyText) dentro da function e algumas frases ('Avaliado possue alguém da família com doença pregressa?', 'Sem doença pregressa na família.'). Logo, em **anamnesisFunctions.js** colocamos:

```js
illnessesInTheFamily(){

    let illnessesFamilyNumber = 2
    let illnessesFamilyText = ''
    let itsNumberOneOrTwo = true
    let regexNumber = /^[1]$|^[2]$/
    let itsLetters = true
  
    do{
  
      console.log(`Avaliado possue alguém da família com doença pregressa?`)
      anamnesisFunctions.choice()
      illnessesFamilyNumber = Number(input.question(''))
  
      itsNumberOneOrTwo = validationFunctions.isRegularExpression(illnessesFamilyNumber, regexNumber)
      validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")
  
      if(illnessesFamilyNumber === 1){
        
        do{
  
          console.log(`Qual doença?`)
          illnessesFamilyText = input.question('')
          itsLetters = validationFunctions.itsLetters(illnessesFamilyText)
          validationFunctions.incorrectValue(false, !itsLetters, "Anamnese")
  
        }while(!itsLetters)
        
      } else {
        illnessesFamilyText = `Sem doença pregressa na família.`
      }
  
    }while(!itsNumberOneOrTwo)
  
      return illnessesFamilyText
  
  },
```

Em **saf.js** adicionamos a variável **illnessesFamily** e depois mostramos ela:

```js
const illnessesFamily = anamnesisFunctions.illnessesInTheFamily()
```

```js
console.log(`Doença Pregressa na Família: ${illnessesFamily}`)
```

Ao executar o programa:

```tex
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
Questionário PAR-Q: Todas as respostas do questionário foram 'Sim'!
Estado físico: Ativo
Doença Pregressa: Sem doença pregressa.
Doença Pregressa na Família: Avo hipertensao
===============================
```

### Cirurgia Realizada

Agora vamos criar a function **surgeryPerformed( )** que será do mesmo jeito, com os mesmos requisitos da function **illnessesInTheFamily( )**. Vamos mudar apenas os nomes de algumas variáveis (surgeryPerformedNumber e surgeryPerformedText) dentro da function e algumas frases ('Avaliado já realizou precedimento cirúrgico?', 'Qual cirurgia?', 'Nunca realizou procedimento cirúrgico.'). Logo, em **anamnesisFunctions.js** colocamos:

```js
surgeryPerformed(){

    let surgeryPerformedNumber = 2
    let surgeryPerformedText = ''
    let itsNumberOneOrTwo = true
    let regexNumber = /^[1]$|^[2]$/
    let itsLetters = true
  
    do{
  
      console.log(`Avaliado já realizou precedimento cirúrgico?`)
      anamnesisFunctions.choice()
      surgeryPerformedNumber = Number(input.question(''))
  
      itsNumberOneOrTwo = validationFunctions.isRegularExpression(surgeryPerformedNumber, regexNumber)
      validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")
  
      if(surgeryPerformedNumber === 1){
        
        do{
  
          console.log(`Qual cirurgia?`)
          surgeryPerformedText = input.question('')
          itsLetters = validationFunctions.itsLetters(surgeryPerformedText)
          validationFunctions.incorrectValue(false, !itsLetters, "Anamnese")
  
        }while(!itsLetters)
        
      } else {
        surgeryPerformedText = `Nunca realizou procedimento cirúrgico.`
      }
  
    }while(!itsNumberOneOrTwo)
  
      return surgeryPerformedText
  
  },
```

Em **saf.js** adicionamos a variável **surgeryPerformed** e depois mostramos ela:

```js
const surgeryPerformed = anamnesisFunctions.surgeryPerformed()
```

```js
console.log(`Cirurgia: ${surgeryPerformed}`)
```

Ao executar o programa:

```tex
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
Questionário PAR-Q: Todas as respostas do questionário foram 'Sim'!
Estado físico: Ativo
Doença Pregressa: Sem doença pregressa.
Doença Pregressa na Família: Sem doença pregressa na família.
Cirurgia: Nunca realizou procedimento cirúrgico.
===============================
```

### Usa medicamentos

Agora vamos criar a function **useMedication( )** que será do mesmo jeito, com os mesmos requisitos da function **surgeryPerformed( )**. Vamos mudar apenas os nomes de algumas variáveis (useMedicationNumber e useMedicationText) dentro da function e algumas frases ('Avaliado faz uso de medicamentos?', 'Qual medicamento?', 'Não faz uso de medicamento.'). Logo, em **anamnesisFunctions.js** colocamos:

```js
useMedication(){

    let useMedicationNumber = 2
    let useMedicationText = ''
    let itsNumberOneOrTwo = true
    let regexNumber = /^[1]$|^[2]$/
    let itsLetters = true
  
    do{
  
      console.log(`Avaliado faz uso de medicamentos?`)
      anamnesisFunctions.choice()
      useMedicationNumber = Number(input.question(''))
  
      itsNumberOneOrTwo = validationFunctions.isRegularExpression(useMedicationNumber, regexNumber)
      validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")
  
      if(useMedicationNumber === 1){
        
        do{
  
          console.log(`Qual medicamento?`)
          useMedicationText = input.question('')
          itsLetters = validationFunctions.itsLetters(useMedicationText)
          validationFunctions.incorrectValue(false, !itsLetters, "Anamnese")
  
        }while(!itsLetters)
        
      } else {
        useMedicationText = `Não faz uso de medicamento.`
      }
  
    }while(!itsNumberOneOrTwo)
  
      return useMedicationText
  
  },
```

Em **saf.js** adicionamos a variável **useMedication** e depois mostramos ela:

```js
const useMedication = anamnesisFunctions.useMedication()
```

```js
console.log(`Uso de Medicamento: ${useMedication}`)
```

Ao executar o programa:

```tex
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
Questionário PAR-Q: Você deverá realizar um exame médico antes de iniciar suas atividades!
Estado físico: Sedentário
Doença Pregressa: Alergia
Doença Pregressa na Família: Sem doença pregressa na família.
Cirurgia: Artroscopia de ombro
Uso de Medicamento: Não faz uso de medicamento.
===============================
```

### Lesões desportivas

Agora vamos criar a function **sportsInjuries( )** que será do mesmo jeito, com os mesmos requisitos da function **useMedication( )**. Vamos mudar apenas os nomes de algumas variáveis (sportsInjuriesNumber e sportsInjuriesText) dentro da function e algumas frases ('Avaliado já sofreu alguma lesão desportiva?', 'Qual lesão?', 'Nunca sofreu lesão desportiva.'). Logo, em **anamnesisFunctions.js** colocamos:

```js
sportsInjuries(){
  
    let sportsInjuriesNumber = 2
    let sportsInjuriesText = ''
    let itsNumberOneOrTwo = true
    let regexNumber = /^[1]$|^[2]$/
    let itsLetters = true
  
    do{
  
      console.log(`Avaliado já sofreu alguma lesão desportiva?`)
      anamnesisFunctions.choice()
      sportsInjuriesNumber = Number(input.question(''))
  
      itsNumberOneOrTwo = validationFunctions.isRegularExpression(sportsInjuriesNumber, regexNumber)
      validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")
  
      if(sportsInjuriesNumber === 1){
        
        do{
  
          console.log(`Qual lesão?`)
          sportsInjuriesText = input.question('')
          itsLetters = validationFunctions.itsLetters(sportsInjuriesText)
          validationFunctions.incorrectValue(false, !itsLetters, "Anamnese")
  
        }while(!itsLetters)
        
      } else {
        sportsInjuriesText = `Nunca sofreu lesão desportiva.`
      }
  
    }while(!itsNumberOneOrTwo)
  
      return sportsInjuriesText
  
  },
```

Em **saf.js** adicionamos a variável **sportsInjuries** e depois mostramos ela:

```js
const sportsInjuries = anamnesisFunctions.sportsInjuries()
```

```js
console.log(`Lesão Desportiva: ${sportsInjuries}`)
```

Ao executar o programa:

```tex
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
Questionário PAR-Q: Todas as respostas do questionário foram 'Sim'!
Estado físico: Sedentário
Doença Pregressa: Sem doença pregressa.
Doença Pregressa na Família: Sem doença pregressa na família.
Cirurgia: Nunca realizou procedimento cirúrgico.
Uso de Medicamento: Não faz uso de medicamento.
Lesão Desportiva: Ruptura de ligamento do ombro direito.
===============================
```

### Objetivo do treino

Vamos construir a function **trainingObjective( )**.`Esta function irá perguntar ao usuário qual é o objetivo do seu treino, mostrando um menu, tendo o usuário que escolher entre as opções conforme abaixo:

```tex
Qual é o objetivo do seu treino?
[1] Estético
[2] Bem-estar e Saúde
[3] Terapêutico
[4] Recreativo
[5] Desportivo
```

Está function só pode aceitar um dígito de números de 1 a 5. Caso o usuário digite qualquer outro valor diferente disto, vazio, espaço ou até mesmo um número com mais de um dígito, a function **incorrectValue( )** deverá ser chamada  e o usuário terá que responder novamente com um valor correto.

Está function deve retornar o objetivo conforme selecionado pelo o mesmo. Logo, em **anamnesisFunctions.js**:

```js
trainingObjective(){

    let trainingObjectiveAnswer = ''
    let regexNumber = /^[1-5]$/
    let isNumberOneToFive = true
  
    do{
  
      console.log('Qual é o objetivo do seu treino?')
      console.log(`[1] Estético`)
      console.log(`[2] Bem-estar e Saúde`)
      console.log(`[3] Terapêutico`)
      console.log(`[4] Recreativo`)
      console.log(`[5] Desportivo`)
      trainingObjectiveAnswer = Number(input.question(''))
  
      isNumberOneToFive = validationFunctions.isRegularExpression(trainingObjectiveAnswer, regexNumber)
      validationFunctions.incorrectValue(!isNumberOneToFive, false, "Anamnese")
  
    }while(!isNumberOneToFive)
    
    switch (trainingObjectiveAnswer) {
      case 1:
        return `Estético`
        break
      case 2:
        return `Bem-estar e Saúde`
        break
      case 3:
        return `Terapêutico`
        break
      case 4:
        return `Recreativo`  
        break
      default:
        return `Desportivo`
        break
    }
  
  },
```

Em **saf.js** criamos a variável **trainingObjective** que recebe como valor o retorno da function **trainingObjective( )** e em seguida mostramos o resultado:

```js
const trainingObjective = anamnesisFunctions.trainingObjective()
```

```js
console.log(`Objetivo do treino: ${trainingObjective}`)
```

Ao executar o programa:

```tex
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
Questionário PAR-Q: Todas as respostas do questionário foram 'Sim'!
Estado físico: Ativo
Doença Pregressa: Sem doença pregressa.
Doença Pregressa na Família: Sem doença pregressa na família.
Cirurgia: Nunca realizou procedimento cirúrgico.
Uso de Medicamento: Não faz uso de medicamento.
Lesão Desportiva: Nunca sofreu lesão desportiva.
Objetivo do treino: Bem-estar e Saúde
===============================
```

### Dias disponíveis para treino

Vamos criar a function **daysAvailableForTraining( )**. Esta function pergunta a quantidade de dias disponíveis pelo avaliado para treinar. Portanto, só aceita números entre 1 e 7. Caso o usuário digite qualquer outro valor diferente disto, vazio, espaço ou até mesmo um número com mais de um dígito, a function **incorrectValue( )** deverá ser chamada e o usuário terá que responder novamente com um valor correto.

Está function deve retornar a quantidade de dias digitado pelo usuário. Logo, em **anamnesisFunctions.js**:

```js
daysAvailableForTraining(){

    let daysAvailableForTraining = 0
    let isNumberOneToSeven = true
    let regexNumber = /^[1-7]$/
    
    do{
   
     daysAvailableForTraining = input.question('Digite a quantidade de dias disponíveis para treinar: ')
   
     isNumberOneToSeven = validationFunctions.isRegularExpression(daysAvailableForTraining, regexNumber)
     validationFunctions.incorrectValue(!isNumberOneToSeven, false, "Anamnese")
   
    }while(!isNumberOneToSeven)
   
    return daysAvailableForTraining
   
   },
```

Em **saf.js** criamos a variável **daysAvailableForTraining** que recebe como valor o retorno da function **daysAvailableForTraining( )** e em seguida mostramos o resultado:

```js
const daysAvailableForTraining = anamnesisFunctions.daysAvailableForTraining()
```

```js
console.log(`Dias disponíveis para treinar: ${daysAvailableForTraining}`)
```

Ao executar o programa:

```tex
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
Questionário PAR-Q: Todas as respostas do questionário foram 'Sim'!
Estado físico: Ativo
Doença Pregressa: Sem doença pregressa.
Doença Pregressa na Família: Sem doença pregressa na família.
Cirurgia: Nunca realizou procedimento cirúrgico.
Uso de Medicamento: Não faz uso de medicamento.
Lesão Desportiva: Nunca sofreu lesão desportiva.
Objetivo do treino: Bem-estar e Saúde
Dias disponíveis para treinar: 4
===============================
```

### Tempo disponível por treino(min):

Vamos criar a function **timeAvailablePerTraining( )** que vai perguntar ao usuário quanto tempo em minutos ele tem disponível para treinar. Esta function aceitará apenas número de 1 a 300 como valor. Caso o usuário digite qualquer outro valor diferente disto, vazio, espaço, alguma letra, a function **incorrectValue( )** deverá ser chamada e o usuário terá que responder novamente com um valor correto.

Está function deve retornar o tempo em minutos digitado pelo usuário. Logo, em **anamnesisFunctions.js**:

```js
timeAvailablePerTraining(){

    let timeAvailablePerTraining = 0
    let isNumberFromOneToThreeHundred = true
    let regexNumber = /(^[1-9]$)|(^[1-9][0-9]$)|(^[1-2][0-9]{2}$)|(^[3][0][0]$)/
  
    do{
  
      timeAvailablePerTraining = input.question('Digite o tempo disponível para treino (min): ')
      isNumberFromOneToThreeHundred = validationFunctions.isRegularExpression(timeAvailablePerTraining, regexNumber)
      validationFunctions.incorrectValue(!isNumberFromOneToThreeHundred, false, "Anamnese")
   
    }while(!isNumberFromOneToThreeHundred)
     
  
    return timeAvailablePerTraining
  
  },
```

Em **saf.js** criamos a variável **timeAvailablePerTraining** que recebe como valor o retorno da function **timeAvailablePerTraining( )** e em seguida mostramos o resultado:

```js
const timeAvailablePerTraining = anamnesisFunctions.timeAvailablePerTraining()
```

```js
console.log(`Tempo disponível para treino: ${timeAvailablePerTraining} minutos.`)
```

Ao executar o programa:

```tex
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
Questionário PAR-Q: Todas as respostas do questionário foram 'Sim'!
Estado físico: Ativo
Doença Pregressa: Sem doença pregressa.
Doença Pregressa na Família: Diabetes
Cirurgia: Artroscopia de ombro
Uso de Medicamento: Não faz uso de medicamento.
Lesão Desportiva: Ruptura de ligamento
Objetivo do treino: Bem-estar e Saúde
Dias disponíveis para treinar: 4
Tempo disponível para treino: 45 minutos.
==============================
```

Como ficaram os arquivos do programa até esta etapa:

**anamnesisFunctions.js**:

```js
/* anamnesisFunctions.js */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')

const anamnesisFunctions = {

  choice(){

    console.log('Escolha:')
    console.log('[1] Sim')
    console.log('[2] Não')

  },

  questionnairePARQ(){

    let questionnairePARQ = [
      "Seu médico já mencionou alguma vez que você tem uma condição cardíaca e que você só deve realizar atividade física recomendada por um médico?",
      "Você sente dor no tórax quando realiza atividade física?",
      "No mês passado, você teve dor torácica quando não estava realizando atividade física?",
      "Você perdeu o equilíbrio por causa de tontura ou alguma vez perdeu a consciência?",
      "Você tem algum problema ósseo ou de articulação que poderia piorar em conseqüência de uma alteração em sua atividade física?",
      "Seu médico está prescrevendo medicamentos para sua pressão ou condição cardíaca?",
      "Você teria alguma razão para não praticar exercício físico ou outro problema que impeça?",
    ]
    let questionnairePARQAnswer = []
    let itsNumberOneOrTwo = true
    let regexNumber = /^[1]$|^[2]$/

    for(let i = 0; i < questionnairePARQ.length; i++){
      
      do{

        console.log(`${[i+1]} - ${questionnairePARQ[i]}`)
        anamnesisFunctions.choice()
        questionnairePARQAnswer[i] = input.question("")
        
        itsNumberOneOrTwo = validationFunctions.isRegularExpression(questionnairePARQAnswer[i], regexNumber)
        validationFunctions.incorrectValue(false, !itsNumberOneOrTwo, "Anamnese")

      }while(!itsNumberOneOrTwo)
      
    }
    
    if(questionnairePARQAnswer.includes("1")){
      return "Você deverá realizar um exame médico antes de iniciar suas atividades!"
    } else {
      return "Todas as respostas do questionário foram 'Sim'!"
    }

  },

  currentPhysicalState(){

    let currentPhysicalState = 0
    let itsNumberOneOrTwo = true
    const regexNumber = /^[1]$|^[2]$/
    
    do{
  
      console.log('Qual seu estado físico atualmente? ')
      console.log(`[1] Sedentário`)
      console.log(`[2] Ativo`)
      currentPhysicalState = input.question('')
     
      itsNumberOneOrTwo = validationFunctions.isRegularExpression(currentPhysicalState, regexNumber)
      validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")
  
    }while(!itsNumberOneOrTwo)
  
    return currentPhysicalState
  
  },
  
  showPhysicalState(numericValue){
  
    return Number(numericValue) === 1 ? 'Sedentário' : 'Ativo'
  
  },

  pastIllness(){

    let pastIllnessNumber = 2
    let pastIllnessText = ''
    let itsNumberOneOrTwo = true
    let regexNumber = /^[1]$|^[2]$/
    let itsLetters = true
  
    do{
  
      console.log(`Avaliado possue doença pregressa?`)
      anamnesisFunctions.choice()
      pastIllnessNumber = Number(input.question(''))
  
      itsNumberOneOrTwo = validationFunctions.isRegularExpression(pastIllnessNumber, regexNumber)
      validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")
  
      if(pastIllnessNumber === 1){
        
        do{
  
          console.log(`Qual doença?`)
          pastIllnessText = input.question('')
          itsLetters = validationFunctions.itsLetters(pastIllnessText)
          validationFunctions.incorrectValue(false, !itsLetters, "Anamnese")
  
        }while(!itsLetters)
        
      } else {
        pastIllnessText = `Sem doença pregressa.`
      }
  
    }while(!itsNumberOneOrTwo)
  
      return pastIllnessText
  
  },

  illnessesInTheFamily(){

    let illnessesFamilyNumber = 2
    let illnessesFamilyText = ''
    let itsNumberOneOrTwo = true
    let regexNumber = /^[1]$|^[2]$/
    let itsLetters = true
  
    do{
  
      console.log(`Avaliado possue alguém da família com doença pregressa?`)
      anamnesisFunctions.choice()
      illnessesFamilyNumber = Number(input.question(''))
  
      itsNumberOneOrTwo = validationFunctions.isRegularExpression(illnessesFamilyNumber, regexNumber)
      validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")
  
      if(illnessesFamilyNumber === 1){
        
        do{
  
          console.log(`Qual doença?`)
          illnessesFamilyText = input.question('')
          itsLetters = validationFunctions.itsLetters(illnessesFamilyText)
          validationFunctions.incorrectValue(false, !itsLetters, "Anamnese")
  
        }while(!itsLetters)
        
      } else {
        illnessesFamilyText = `Sem doença pregressa na família.`
      }
  
    }while(!itsNumberOneOrTwo)
  
      return illnessesFamilyText
  
  },

  surgeryPerformed(){

    let surgeryPerformedNumber = 2
    let surgeryPerformedText = ''
    let itsNumberOneOrTwo = true
    let regexNumber = /^[1]$|^[2]$/
    let itsLetters = true
  
    do{
  
      console.log(`Avaliado já realizou precedimento cirúrgico?`)
      anamnesisFunctions.choice()
      surgeryPerformedNumber = Number(input.question(''))
  
      itsNumberOneOrTwo = validationFunctions.isRegularExpression(surgeryPerformedNumber, regexNumber)
      validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")
  
      if(surgeryPerformedNumber === 1){
        
        do{
  
          console.log(`Qual cirurgia?`)
          surgeryPerformedText = input.question('')
          itsLetters = validationFunctions.itsLetters(surgeryPerformedText)
          validationFunctions.incorrectValue(false, !itsLetters, "Anamnese")
  
        }while(!itsLetters)
        
      } else {
        surgeryPerformedText = `Nunca realizou procedimento cirúrgico.`
      }
  
    }while(!itsNumberOneOrTwo)
  
      return surgeryPerformedText
  
  },

  useMedication(){

    let useMedicationNumber = 2
    let useMedicationText = ''
    let itsNumberOneOrTwo = true
    let regexNumber = /^[1]$|^[2]$/
    let itsLetters = true
  
    do{
  
      console.log(`Avaliado faz uso de medicamentos?`)
      anamnesisFunctions.choice()
      useMedicationNumber = Number(input.question(''))
  
      itsNumberOneOrTwo = validationFunctions.isRegularExpression(useMedicationNumber, regexNumber)
      validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")
  
      if(useMedicationNumber === 1){
        
        do{
  
          console.log(`Qual medicamento?`)
          useMedicationText = input.question('')
          itsLetters = validationFunctions.itsLetters(useMedicationText)
          validationFunctions.incorrectValue(false, !itsLetters, "Anamnese")
  
        }while(!itsLetters)
        
      } else {
        useMedicationText = `Não faz uso de medicamento.`
      }
  
    }while(!itsNumberOneOrTwo)
  
      return useMedicationText
  
  },

  sportsInjuries(){
  
    let sportsInjuriesNumber = 2
    let sportsInjuriesText = ''
    let itsNumberOneOrTwo = true
    let regexNumber = /^[1]$|^[2]$/
    let itsLetters = true
  
    do{
  
      console.log(`Avaliado já sofreu alguma lesão desportiva?`)
      anamnesisFunctions.choice()
      sportsInjuriesNumber = Number(input.question(''))
  
      itsNumberOneOrTwo = validationFunctions.isRegularExpression(sportsInjuriesNumber, regexNumber)
      validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")
  
      if(sportsInjuriesNumber === 1){
        
        do{
  
          console.log(`Qual lesão?`)
          sportsInjuriesText = input.question('')
          itsLetters = validationFunctions.itsLetters(sportsInjuriesText)
          validationFunctions.incorrectValue(false, !itsLetters, "Anamnese")
  
        }while(!itsLetters)
        
      } else {
        sportsInjuriesText = `Nunca sofreu lesão desportiva.`
      }
  
    }while(!itsNumberOneOrTwo)
  
      return sportsInjuriesText
  
  },

  trainingObjective(){

    let trainingObjectiveAnswer = ''
    let regexNumber = /^[1-5]$/
    let isNumberOneToFive = true
  
    do{
  
      console.log('Qual é o objetivo do seu treino?')
      console.log(`[1] Estético`)
      console.log(`[2] Bem-estar e Saúde`)
      console.log(`[3] Terapêutico`)
      console.log(`[4] Recreativo`)
      console.log(`[5] Desportivo`)
      trainingObjectiveAnswer = Number(input.question(''))
  
      isNumberOneToFive = validationFunctions.isRegularExpression(trainingObjectiveAnswer, regexNumber)
      validationFunctions.incorrectValue(!isNumberOneToFive, false, "Anamnese")
  
    }while(!isNumberOneToFive)
    
    switch (trainingObjectiveAnswer) {
      case 1:
        return `Estético`
        break
      case 2:
        return `Bem-estar e Saúde`
        break
      case 3:
        return `Terapêutico`
        break
      case 4:
        return `Recreativo`  
        break
      default:
        return `Desportivo`
        break
    }
  
  },

  daysAvailableForTraining(){

    let daysAvailableForTraining = 0
    let isNumberOneToSeven = true
    let regexNumber = /^[1-7]$/
    
    do{
   
     daysAvailableForTraining = input.question('Digite a quantidade de dias disponíveis para treinar: ')
   
     isNumberOneToSeven = validationFunctions.isRegularExpression(daysAvailableForTraining, regexNumber)
     validationFunctions.incorrectValue(!isNumberOneToSeven, false, "Anamnese")
   
    }while(!isNumberOneToSeven)
   
    return daysAvailableForTraining
   
   },

   timeAvailablePerTraining(){

    let timeAvailablePerTraining = 0
    let isNumberFromOneToThreeHundred = true
    let regexNumber = /(^[1-9]$)|(^[1-9][0-9]$)|(^[1-2][0-9]{2}$)|(^[3][0][0]$)/
  
    do{
  
      timeAvailablePerTraining = input.question('Digite o tempo disponível para treino (min): ')
      isNumberFromOneToThreeHundred = validationFunctions.isRegularExpression(timeAvailablePerTraining, regexNumber)
      validationFunctions.incorrectValue(!isNumberFromOneToThreeHundred, false, "Anamnese")
   
    }while(!isNumberFromOneToThreeHundred)
     
  
    return timeAvailablePerTraining
  
  },

}

module.exports = {
  anamnesisFunctions
}
```

**validationFunctions.js**

```js
/* Validation Functions */

const { headerFunctions } = require('./headerFunctions')

const validationFunctions = {

  itsLetters: function(stringValue){
    letterOrSpaceRegExp = /\D/gi

    return letterOrSpaceRegExp.test(stringValue) ? true : false
    
  },

  // verifica se o valor passado é apenas um número
  itsNumber: function(value){
  
    const regExp2 = /\d/g
    let itsNumber = regExp2.test(value)
   
    return itsNumber ? true : false
    
  },

  incorrectValue: function (valueA, valueB, title){
    
    if(valueA || valueB ){ 
      console.clear()
      headerFunctions.systemHeader()
      headerFunctions.subTitle(title)
      console.log('Dado Incorreto!')
    }

  },

  // recebe um valor e uma expressão regular. retorna true se o valor estiver de acordo com a expressão regular
  isRegularExpression: function(stringValue, regex){
    
    return regex.test(stringValue) ? true : false
    
  },

    // recebe duas datas e valida se são iguais
  validDate: function(informedDate, realDate){
    
    return informedDate === realDate ? true : false
    
  },

    // recebe a data de nascimento em formato ISO e retorna se é maior do que a data atual
  dateOfBirthHighestCurrentDate: function(dateOfBirth){
    var currentDate = new Date()

    // O método getTime() retorna o valor numérico correspondente ao horário da data especificada de acordo com o horário universal.
    return dateOfBirth.getTime() > currentDate.getTime() ? true : false

  },

  isLessThanMinimumOrGreaterThanMaximum: function(minimum, maximum, givenAway){
    
    return givenAway < minimum || givenAway > maximum ? true : false
    
  },

  validEmail: function(userEmail){

    let user = userEmail.substring(0, userEmail.indexOf("@"))
    let domain = userEmail.substring(userEmail.indexOf("@")+ 1, userEmail.length)
    let validations = ((user.length >=1) && 
                        (domain.length >=3) && 
                        (user.search("@")==-1) && 
                        (domain.search("@")==-1) && 
                        (user.search(" ")==-1) && 
                        (domain.search(" ")==-1) && 
                        (domain.search(".")!=-1) && 
                        (domain.indexOf(".") >=1)&& 
                        (domain.lastIndexOf(".") < domain.length - 1))
  
      return validations ? true : false
    
  },
  
}

module.exports = {
  validationFunctions
}
```

**saf.js**:

```js
const { headerFunctions } = require('./headerFunctions')
const { personalData } = require('./personalData')
const { anamnesisFunctions } = require('./anamnesisFunctions')

headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables personalData
const name = personalData.userName()
const birthdayInBrazilianFormat =  personalData.dateOfBirth()
const birthdayInISOFormat = personalData.dateInISOFormat(birthdayInBrazilianFormat)
const age = personalData.age(birthdayInISOFormat)
const sexNumber = personalData.sexNumber()
const sex = personalData.showSex(sexNumber)
const profession = personalData.userProfession()
const userEmail = personalData.userEmail()
const phoneNumber = personalData.phoneNumber()

console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

// variables anamnesisFunctions
const questionnairePARQ = anamnesisFunctions.questionnairePARQ()
const currentPhysicalState = anamnesisFunctions.currentPhysicalState()
const pastIllness = anamnesisFunctions.pastIllness()
const illnessesFamily = anamnesisFunctions.illnessesInTheFamily()
const surgeryPerformed = anamnesisFunctions.surgeryPerformed()
const useMedication = anamnesisFunctions.useMedication()
const sportsInjuries = anamnesisFunctions.sportsInjuries()
const trainingObjective = anamnesisFunctions.trainingObjective()
const daysAvailableForTraining = anamnesisFunctions.daysAvailableForTraining()
const timeAvailablePerTraining = anamnesisFunctions.timeAvailablePerTraining()

// show results personalData
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")
console.log(`Nome: ${name}`)
console.log(`Data de nascimento: ${birthdayInBrazilianFormat}`)
console.log(`Idade: ${age} anos!`)
console.log(`Sexo: ${sex}`)
console.log(`Profissão: ${profession}`)
console.log(`E-mail: ${userEmail}`)
console.log(`Celular: ${phoneNumber}`)

// show results anamnesisFunctions
console.log(`===============================`) 
headerFunctions.subTitle("Anamnese")

console.log(`Questionário PAR-Q: ${questionnairePARQ}`)
console.log(`Estado físico: ${anamnesisFunctions.showPhysicalState(currentPhysicalState)}`)
console.log(`Doença Pregressa: ${pastIllness}`)
console.log(`Doença Pregressa na Família: ${illnessesFamily}`)
console.log(`Cirurgia: ${surgeryPerformed}`)
console.log(`Uso de Medicamento: ${useMedication}`)
console.log(`Lesão Desportiva: ${sportsInjuries}`)
console.log(`Objetivo do treino: ${trainingObjective}`)
console.log(`Dias disponíveis para treinar: ${daysAvailableForTraining} dias.`)
console.log(`Tempo disponível para treino: ${timeAvailablePerTraining} minutos.`)

console.log(`===============================`)

```

Ao executar o programa:

```tex
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
Nome: Cicrana de La
Data de nascimento: 25/12/2010
Idade: 11 anos!
Sexo: Feminino
Profissão: Estudante
E-mail: cicrana@dela.com
Celular: 81966613171
===============================
           Anamnese            
===============================
Questionário PAR-Q: Todas as respostas do questionário foram 'Sim'!
Estado físico: Sedentário
Doença Pregressa: Sem doença pregressa.
Doença Pregressa na Família: Avos cardiopatas
Cirurgia: Artroscopia de ombro
Uso de Medicamento: Não faz uso de medicamento.
Lesão Desportiva: Nunca sofreu lesão desportiva.
Objetivo do treino: Bem-estar e Saúde
Dias disponíveis para treinar: 4 dias.
Tempo disponível para treino: 45 minutos.
===============================
```

## Cardiorrespiratório

Vamos para a próxima etapa onde vamos construir a parte do **Cardiorrespiratório**. Para isto vamos criar o arquivo **cardiorespiratoryFunctions.js**. Dentro deste arquivo vamos:

- Criar a variável **input**;
- Requerer a variável **validationFunctions**;
- Criar uma variável objeto **cardiorespiratoryFunctions**;
- Exportar essa variável.

```js
/* cardiorespiratory */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')

const cardiorespiratoryFunctions = {

}

module.exports = {
    cardiorespiratoryFunctions
}
```

No arquivo **saf.js** vamos fazer a requisição do arquivo **cardiorespiratory.js**:

```js
const { cardiorespiratoryFunctions } = require('./cardiorespiratoryFunctions')
```

### Frequência Cardíaca de Repouso

Agora vamos criar a function **restingHeartRate( )** que vai determinar a **Frequência Cardíaca de Repouso** do usuário. Esta function aceitará apenas números de 0 a 200. Qualquer valor diferente disso, a function **incorrectValue( )** deverá ser chamada e o usuário deve digitar um número válido. Sendo assim, em **cardiorespiratoryFunctions.js**:

```js
restingHeartRate(){

        let restingHeartRate = 0
        let isANumberFromZeroToTwoHundredAndTwenty = true
        let regexNumber = /(^[0-9]$)|(^[1-9][0-9]$)|(^[1][0-9]{2}$)|(^[2][0][0]$)/
      
        do{
      
          restingHeartRate = input.question('Digite a Frequência Cardíaca de Repouso (bpm): ')
          isANumberFromZeroToTwoHundredAndTwenty = validationFunctions.isRegularExpression(restingHeartRate, regexNumber)
          validationFunctions.incorrectValue(!isANumberFromZeroToTwoHundredAndTwenty, false, "Cardiorrespiratório")
       
        }while(!isANumberFromZeroToTwoHundredAndTwenty)
         
        return restingHeartRate
      
    
 },
```

Em **saf.js** vamos criar a variável **restingHeartRate** que recebe como valor a function **restingHeartRate( )** e depois vamos mostrar o resultado;

```js
// variables cardiorespiratory
const restingHeartRate = cardiorespiratoryFunctions.restingHeartRate()
```

```js
// show results cardiorespiratoryFunctions
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Cardiorespiratório")
console.log(`Frequência Cardíaca de Repouso(bpm): ${restingHeartRate}`)
```

Ao executar o programa vamos comentar as partes de variáveis e mostrar o resutado de **personalData** e **anamnesisFunctions**, deixano apenas funcionando a parte de **cardiorespiratory**.

```tex
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Cardiorespiratório            
===============================
Frequência Cardíaca de Repouso(bpm): 55
===============================
```

### Frequência Cardíaca Máxima

Agora vamos criar a function **maximumHeartRate( )** que vai determinar a frequência cardíaca máxima do usuário a partir da idade do mesmo. Esta function recebe como parâmetro o valor da idade do usuário e retorna a frequência cardíaca máxima calculada pela fórmula Karvonen (1957) **FCM = 220 - IDADE**. Logo em **cardiorespiratoryFunctions.js**:

```js
maximumHeartRate(ageValue){

        return 220 - Number(ageValue)
      
 },
```

 Em **saf.js** criamos variável **maximumHeartRate** que recebe a function **maximumHeartRate( )** e depois mostramos o resultado. Lembre de passa a idade do usuário como parâmetro nesta function:

```js
const maximumHeartRate = cardiorespiratoryFunctions.maximumHeartRate(age)
```

```js
console.log(`Frequência Cardíaca Máxima: ${maximumHeartRate} bpm.`)
```

Ao executar o programa:

```tex
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Cardiorespiratório            
===============================
Frequência Cardíaca de Repouso: 60 bpm.
Frequência Cardíaca Máxima: 186 bpm.
===============================
```

### Frequência Cardíaca de trabalho

Agora vamos criar a function **workingHeartRate( )** que vai mostrar a **Frequência Cardíaca de Treino** de acordo com os percentuais de 40% até 95%. Esta function terá como parâmetro a **Frequência Cardíaca de Repouso** (**restingHeartRate**) e a **Frequência Cardíaca Máxima** (**maximumHeartRate**). Para os cálculos, vamos usar a fórmula: 

Frequência Cardíaca de Treino = ((( Frequência Cardíaca Máxima - Frequência Cardíaca de Repouso) * Percentual Ddesejado) + Frequência Cardíaca de Repouso)

Logo, em **cardiorespiratoryFunctions.js**:

```js
workingHeartRate(restingHeartRateValue, maximumHeartRateValue){

        let workingHeartRate = []
        let percentage = []
      
        for(let i = 40; i <= 95; i+=5){
          workingHeartRate.push(Math.round(((( maximumHeartRateValue - restingHeartRateValue )* (i / 100) ) + restingHeartRateValue)))
          percentage.push(i)
        }
      
        console.log(`Frequência Cardíaca de Treino:`)
        for(let i = 0; i < workingHeartRate.length; i++){
          console.log(`        ${percentage[i]}% = ${workingHeartRate[i]} bpm`)
        } 
      
      },
```

Em **saf.js** chamamos a function **workingHeartRate( )** passando como parâmetro **restingHeartRate** e **maximumHeartRate**:

```js
cardiorespiratoryFunctions.workingHeartRate(Number(restingHeartRate), Number(maximumHeartRate))
```

Ao executar o programa:

```sh
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Cardiorespiratório            
===============================
Frequência Cardíaca de Repouso: 60 bpm.
Frequência Cardíaca Máxima: 186 bpm.
Frequência Cardíaca de Treino:
        40% = 110 bpm
        45% = 117 bpm
        50% = 123 bpm
        55% = 129 bpm
        60% = 136 bpm
        65% = 142 bpm
        70% = 148 bpm
        75% = 155 bpm
        80% = 161 bpm
        85% = 167 bpm
        90% = 173 bpm
        95% = 180 bpm
===============================
```

### Pressão Arterial de Repouso (mmHg)

Agora vamos criar a function **restingBloodPressure( )** que vai determinar a **Pressão Arterial de Repouso em mmHg**. Está function pedirá para o usuário digitar a **pressão sistólica** e a **pressão diastólica**. Só serão aceitos números e qualquer valor diferente disso, inclusive vazio, a function **incorrectValue( )** deverá ser chamada e o usuário deverá digitar os dois valores novamente. A function retorna os valores da pressão **sistólica** e **diastólica** e para isto, vamos retorna estes dois valores dentro de um objeto, **bloodPressure**. Logo, em **cardiorespiratoryFunctions.js**:

```js
restingBloodPressure(){

        let bloodPressure = {
          systolic: 0, 
          diastolic: 0
        }
        let systolicIsNumber = true
        let diastolicIsNumber = true
      
      
        do{
      
          bloodPressure.systolic = input.question('Digite a pressão sistólica (mmHg): ')
          bloodPressure.diastolic = input.question('Digite a pressão diastólica (mmHg): ')
      
          systolicIsNumber = validationFunctions.itsNumber(bloodPressure.systolic)
          diastolicIsNumber = validationFunctions.itsNumber(bloodPressure.diastolic)
          validationFunctions.incorrectValue(!systolicIsNumber, !diastolicIsNumber, "Cardiorrespiratório")
      
        }while(!systolicIsNumber || !diastolicIsNumber)
      
         return bloodPressure
      
      },
```

Em **saf.js** vamos criar a variável **restingBloodPressure** que receberá a function **restingBloodPressure( )** e depois vamos mostrar o valor da **Pressão Arterial de Reposuo**:

```js
const restingBloodPressure = cardiorespiratoryFunctions.restingBloodPressure()
```

```js
console.log(`Pressão Arterial de Repouso: ${restingBloodPressure.systolic}/${restingBloodPressure.diastolic} mmHg.`)
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Cardiorespiratório            
===============================
Frequência Cardíaca de Repouso: 60 bpm.
Frequência Cardíaca Máxima: 198 bpm.
Frequência Cardíaca de Treino:
        40% = 115 bpm
        45% = 122 bpm
        50% = 129 bpm
        55% = 136 bpm
        60% = 143 bpm
        65% = 150 bpm
        70% = 157 bpm
        75% = 164 bpm
        80% = 170 bpm
        85% = 177 bpm
        90% = 184 bpm
        95% = 191 bpm
Pressão Arterial de Repouso: 120/80 mmHg.
===============================
```

### Pressão Arterial - Classificação 

Agora vamos criar a function **classificationOfBloodPressure( )** que vai retornar a classificação da pressão arterial. Esta function recebe como parâmetro o **objeto** contendo os valores da pressão arterial sistólica e diastólica. Em seguida retorna a classificação de acordo com a tabela abaixo:

| Pressão Arterial Sistólica - Classificação                 | Pressão Arterial Diastólica - Classificação                 |
| ---------------------------------------------------------- | :---------------------------------------------------------- |
| Pressão Arterial Sistólica < 120 = "Ótima"                 | Pressão Arterial Diastólica < 80 = "Ótima"                  |
| Pressão Arterial Sistólica < 130 = "Normal"                | Pressão Arterial Diastólica < 85 = "Normal"                 |
| Pressão Arterial Sistólica < 140 = "Limítrofe"             | Pressão Arterial Diastólica < 90 = "Limítrofe"              |
| Pressão Arterial Sistólica < 160 = "Hipertensão Estágio 1" | Pressão Arterial Diastólica < 100 = "Hipertensão Estágio 1" |
| Pressão Arterial Sistólica < 180 = "Hipertensão Estágio 2" | Pressão Arterial Diastólica < 110 = "Hipertensão Estágio 2" |
| Pressão Arterial Sistólica > 179 = "Hipertensão Estágio 3" | Pressão Arterial Diastólica < 300 = "Hipertensão Estágio 3" |

O retorno desta function também será um objeto. Logo, em **cardiorespiratoryFunctions.js**:

```js
classificationOfBloodPressure(objectValue){

        let classification = {
          systolicClassification: '',
          diastolicClassification: '',
        }
      
        /* Systolic Classification */
        if(objectValue.systolic < 120){
          classification.systolicClassification = 'Ótima'
        } else if(objectValue.systolic < 130){
          classification.systolicClassification = 'Normal'
        } else if(objectValue.systolic < 140){
          classification.systolicClassification = 'Limítrofe'
        } else if(objectValue.systolic < 160){
          classification.systolicClassification = 'Hipertensão Estágio 1'
        } else if(objectValue.systolic < 180){
          classification.systolicClassification = 'Hipertensão Estágio 2'
        } else{
          classification.systolicClassification = 'Hipertensão Estágio 3'
        }
      
        /* Diastolic Classification */
        if(objectValue.diastolic < 80){
          classification.diastolicClassification = 'Ótima'
        } else if(objectValue.diastolic < 85){
          classification.diastolicClassification = 'Normal'
        } else if(objectValue.diastolic < 90){
          classification.diastolicClassification = 'Limítrofe'
        } else if(objectValue.diastolic < 100){
          classification.diastolicClassification = 'Hipertensão Estágio 1'
        } else if(objectValue.diastolic < 110){
          classification.diastolicClassification = 'Hipertensão Estágio 2'
        } else{
          classification.diastolicClassification = 'Hipertensão Estágio 3'
        }
      
        return classification
      
      },
```

Em **saf.js** criamos a variável **bloodPressureRating** que recebe a function **classificationOfBloodPressure( )** passando a variável **restingBloodPressure** como parâmetro. Depois mostramos os resultados:

```js
const bloodPressureRating = cardiorespiratoryFunctions.classificationOfBloodPressure(restingBloodPressure)
```

```js
console.log(`Classificação da Pressão Arterial`)
console.log(`Sistólica: ${bloodPressureRating.systolicClassification}`)
console.log(`Diastólica: ${bloodPressureRating.diastolicClassification}`)
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Cardiorespiratório            
===============================
Frequência Cardíaca de Repouso: 60 bpm.
Frequência Cardíaca Máxima: 198 bpm.
Frequência Cardíaca de Treino:
        40% = 115 bpm
        45% = 122 bpm
        50% = 129 bpm
        55% = 136 bpm
        60% = 143 bpm
        65% = 150 bpm
        70% = 157 bpm
        75% = 164 bpm
        80% = 170 bpm
        85% = 177 bpm
        90% = 184 bpm
        95% = 191 bpm
Pressão Arterial de Repouso: 120/80 mmHg.
Classificação da Pressão Arterial
Sistólica: Normal
Diastólica: Normal
===============================
```

Com isto chega ao final a parte **Cardiorrespiratório** do projeto. Como ficaram os arquivos do programa até esta etapa:

**cardiorespiratoryFunctions.js**

```js
/* cardiorespiratory */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')

const cardiorespiratoryFunctions = {
    
    restingHeartRate(){

        let restingHeartRate = 0
        let isANumberFromZeroToTwoHundredAndTwenty = true
        let regexNumber = /(^[0-9]$)|(^[1-9][0-9]$)|(^[1][0-9]{2}$)|(^[2][0][0]$)/
      
        do{
      
          restingHeartRate = input.question('Digite a Frequência Cardíaca de Repouso (bpm): ')
          isANumberFromZeroToTwoHundredAndTwenty = validationFunctions.isRegularExpression(restingHeartRate, regexNumber)
          validationFunctions.incorrectValue(!isANumberFromZeroToTwoHundredAndTwenty, false, "Cardiorrespiratório")
       
        }while(!isANumberFromZeroToTwoHundredAndTwenty)
         
        return restingHeartRate
      
    },

    maximumHeartRate(ageValue){

        return 220 - Number(ageValue)
      
    },

    workingHeartRate(restingHeartRateValue, maximumHeartRateValue){

        let workingHeartRate = []
        let percentage = []
      
        for(let i = 40; i <= 95; i+=5){
          workingHeartRate.push(Math.round(((( maximumHeartRateValue - restingHeartRateValue )* (i / 100) ) + restingHeartRateValue)))
          percentage.push(i)
        }
      
        console.log(`Frequência Cardíaca de Treino:`)
        for(let i = 0; i < workingHeartRate.length; i++){
          console.log(`        ${percentage[i]}% = ${workingHeartRate[i]} bpm`)
        } 
      
      },

      restingBloodPressure(){

        let bloodPressure = {
          systolic: 0, 
          diastolic: 0
        }
        let systolicIsNumber = true
        let diastolicIsNumber = true
      
      
        do{
      
          bloodPressure.systolic = input.question('Digite a pressão sistólica (mmHg): ')
          bloodPressure.diastolic = input.question('Digite a pressão diastólica (mmHg): ')
      
          systolicIsNumber = validationFunctions.itsNumber(bloodPressure.systolic)
          diastolicIsNumber = validationFunctions.itsNumber(bloodPressure.diastolic)
          validationFunctions.incorrectValue(!systolicIsNumber, !diastolicIsNumber, "Cardiorrespiratório")
      
        }while(!systolicIsNumber || !diastolicIsNumber)
      
         return bloodPressure
      
      },
      
      classificationOfBloodPressure(objectValue){

        let classification = {
          systolicClassification: '',
          diastolicClassification: '',
        }
      
        /* Systolic Classification */
        if(objectValue.systolic < 120){
          classification.systolicClassification = 'Ótima'
        } else if(objectValue.systolic < 130){
          classification.systolicClassification = 'Normal'
        } else if(objectValue.systolic < 140){
          classification.systolicClassification = 'Limítrofe'
        } else if(objectValue.systolic < 160){
          classification.systolicClassification = 'Hipertensão Estágio 1'
        } else if(objectValue.systolic < 180){
          classification.systolicClassification = 'Hipertensão Estágio 2'
        } else{
          classification.systolicClassification = 'Hipertensão Estágio 3'
        }
      
        /* Diastolic Classification */
        if(objectValue.diastolic < 80){
          classification.diastolicClassification = 'Ótima'
        } else if(objectValue.diastolic < 85){
          classification.diastolicClassification = 'Normal'
        } else if(objectValue.diastolic < 90){
          classification.diastolicClassification = 'Limítrofe'
        } else if(objectValue.diastolic < 100){
          classification.diastolicClassification = 'Hipertensão Estágio 1'
        } else if(objectValue.diastolic < 110){
          classification.diastolicClassification = 'Hipertensão Estágio 2'
        } else{
          classification.diastolicClassification = 'Hipertensão Estágio 3'
        }
      
        return classification
      
      },

}

module.exports = {
    cardiorespiratoryFunctions
}
```

**saf.js**

```js
const { headerFunctions } = require('./headerFunctions')
const { personalData } = require('./personalData')
const { anamnesisFunctions } = require('./anamnesisFunctions')
const { cardiorespiratoryFunctions } = require('./cardiorespiratoryFunctions')

headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables personalData
const name = personalData.userName()
const birthdayInBrazilianFormat =  personalData.dateOfBirth()
const birthdayInISOFormat = personalData.dateInISOFormat(birthdayInBrazilianFormat)
const age = personalData.age(birthdayInISOFormat)
const sexNumber = personalData.sexNumber()
const sex = personalData.showSex(sexNumber)
const profession = personalData.userProfession()
const userEmail = personalData.userEmail()
const phoneNumber = personalData.phoneNumber()

console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

// variables anamnesisFunctions
const questionnairePARQ = anamnesisFunctions.questionnairePARQ()
const currentPhysicalState = anamnesisFunctions.currentPhysicalState()
const pastIllness = anamnesisFunctions.pastIllness()
const illnessesFamily = anamnesisFunctions.illnessesInTheFamily()
const surgeryPerformed = anamnesisFunctions.surgeryPerformed()
const useMedication = anamnesisFunctions.useMedication()
const sportsInjuries = anamnesisFunctions.sportsInjuries()
const trainingObjective = anamnesisFunctions.trainingObjective()
const daysAvailableForTraining = anamnesisFunctions.daysAvailableForTraining()
const timeAvailablePerTraining = anamnesisFunctions.timeAvailablePerTraining()

console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Cardiorrespiratório")

// variables cardiorespiratory
const restingHeartRate = cardiorespiratoryFunctions.restingHeartRate()
const maximumHeartRate = cardiorespiratoryFunctions.maximumHeartRate(age)
const restingBloodPressure = cardiorespiratoryFunctions.restingBloodPressure()
const bloodPressureRating = cardiorespiratoryFunctions.classificationOfBloodPressure(restingBloodPressure)

// show results personalData
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")
console.log(`Nome: ${name}`)
console.log(`Data de nascimento: ${birthdayInBrazilianFormat}`)
console.log(`Idade: ${age} anos!`)
console.log(`Sexo: ${sex}`)
console.log(`Profissão: ${profession}`)
console.log(`E-mail: ${userEmail}`)
console.log(`Celular: ${phoneNumber}`)

// show results anamnesisFunctions
console.log(`===============================`) 
headerFunctions.subTitle("Anamnese")

console.log(`Questionário PAR-Q: ${questionnairePARQ}`)
console.log(`Estado físico: ${anamnesisFunctions.showPhysicalState(currentPhysicalState)}`)
console.log(`Doença Pregressa: ${pastIllness}`)
console.log(`Doença Pregressa na Família: ${illnessesFamily}`)
console.log(`Cirurgia: ${surgeryPerformed}`)
console.log(`Uso de Medicamento: ${useMedication}`)
console.log(`Lesão Desportiva: ${sportsInjuries}`)
console.log(`Objetivo do treino: ${trainingObjective}`)
console.log(`Dias disponíveis para treinar: ${daysAvailableForTraining} dias.`)
console.log(`Tempo disponível para treino: ${timeAvailablePerTraining} minutos.`)

// show results cardiorespiratoryFunctions
console.log(`===============================`) 
headerFunctions.subTitle("Cardiorespiratório")
console.log(`Frequência Cardíaca de Repouso: ${restingHeartRate} bpm.`)
console.log(`Frequência Cardíaca Máxima: ${maximumHeartRate} bpm.`)
cardiorespiratoryFunctions.workingHeartRate(Number(restingHeartRate), Number(maximumHeartRate))
console.log(`Pressão Arterial de Repouso: ${restingBloodPressure.systolic}/${restingBloodPressure.diastolic} mmHg.`)
console.log(`Classificação da Pressão Arterial`)
console.log(`Sistólica: ${bloodPressureRating.systolicClassification}`)
console.log(`Diastólica: ${bloodPressureRating.diastolicClassification}`)

console.log(`===============================`)

```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
Nome: Joao Antonio
Data de nascimento: 25/08/2003
Idade: 18 anos!
Sexo: Masculino
Profissão: Atleta
E-mail: joao@antonio.com
Celular: 87912344321
===============================
           Anamnese            
===============================
Questionário PAR-Q: Todas as respostas do questionário foram 'Sim'!
Estado físico: Ativo
Doença Pregressa: Sem doença pregressa.
Doença Pregressa na Família: Sem doença pregressa na família.
Cirurgia: Artroscopia de ombro
Uso de Medicamento: Não faz uso de medicamento.
Lesão Desportiva: torcao de tornozelo
Objetivo do treino: Desportivo
Dias disponíveis para treinar: 5 dias.
Tempo disponível para treino: 90 minutos.
===============================
           Cardiorespiratório            
===============================
Frequência Cardíaca de Repouso: 60 bpm.
Frequência Cardíaca Máxima: 202 bpm.
Frequência Cardíaca de Treino:
        40% = 117 bpm
        45% = 124 bpm
        50% = 131 bpm
        55% = 138 bpm
        60% = 145 bpm
        65% = 152 bpm
        70% = 159 bpm
        75% = 167 bpm
        80% = 174 bpm
        85% = 181 bpm
        90% = 188 bpm
        95% = 195 bpm
Pressão Arterial de Repouso: 120/80 mmHg.
Classificação da Pressão Arterial
Sistólica: Normal
Diastólica: Normal
===============================
```



## Antropometria

Vamos para a próxima etapa, onde vamos construir a parte de **Antropometria**. Para isto vamos criar o arquivo **anthropometryFunctions.js**. Dentro deste arquivo vamos:

- Criar a variável **input**;
- Requerer o arquivo **validationFunctions.js**;
- Criar uma variável objeto **anthropometryFunctions**;
- Exportar essa variável.

```js
/* anthropometryFunctions */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')

const anthropometryFunctions = {


}

module.exports = {
  anthropometryFunctions
}
```

No arquivo **saf.js** vamos fazer a requisição do arquivo **anthropometryFunctions.js**:

```js
const  { anthropometryFunctions } = require('./anthropometryFunctions')
```

### Peso Corporal

Agora vamos criar a function **bodyWeight( )** que vai solicitar do usuário o seu peso corporal. Esta function só poderá aceitar número real, com uma casa decimal. Então, vamos fazer com que ela aceite de **0.0** até **1000.0** usando expressões regulares. Caso o usuário digite qualquer coisa diferente disso, a function **incorrectValue( )** deverá ser chamada e o usuário deverá colocar um valor de peso correto. Com o usuário inserindo o valor correto, a function retorna o valor do peso corporal inserido pelo usuário. Logo, em **anthropometryFunctions.js**:

```js
bodyWeight(){

    let bodyWeight = 0
    let itsRealNumber = true
    let regularExpressionFromZeroToThousand = /(^[0-9]\.[0-9]$)|(^[1-9][0-9]\.[0-9]$)|(^[1-9][0-9]{2}\.[0-9]$)|(^[1][0]{3}\.[0-9]$)/
  
    do{
  
      bodyWeight = input.question('Digite seu peso (kg)[00.0]: ')
      itsRealNumber = validationFunctions.isRegularExpression(bodyWeight, regularExpressionFromZeroToThousand)
      validationFunctions.incorrectValue(false, !itsRealNumber, "Antropometria")
  
    }while(!itsRealNumber)
  
    return bodyWeight
    
  },
```

Em **saf.js** vamos criar a variável **bodyWeight** que receberá como valor o retorno da function **bodyWeight( )**, em seguinda mostramos o resultado:

```js
// variables anthropometryFunctions
const bodyWeight = anthropometryFunctions.bodyWeight()
```

```js
console.clear() // temporary
headerFunctions.systemHeader() // temporary
headerFunctions.subTitle("Antropometria") // temporary
// show results anthropometryFunctions
// console.log(`===============================`) 
// headerFunctions.subTitle("Antropometria")
console.log(`Peso Corporal: ${bodyWeight} kilos.`)
```

Para executar, avamos comentar as outras partes, deixando apenas **variables anthropometryFunctions** e **show results anthropometryFunctions** ativos, logo:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 95.0 kilos.
===============================
```

### Estatura

Agora vamos criar a function **stature( )** que vai solicitar do usuário a sua estatura corporal. Esta function só poderá aceitar número real, com duas casas decimais. Então, vamos fazer com que ela aceite de **0.00** até **9.99** usando expressões regulares. Caso o usuário digite qualquer coisa diferente disso, a function **incorrectValue( )** deverá ser chamada e o usuário deverá colocar um valor de estatura correto. Com o usuário inserindo o valor correto, a function retorna o valor da estatura corporal inserida pelo usuário. Logo, em **anthropometryFunctions.js**:

```js
stature(){

    let bodyStature = 0
    let itsRealNumber = true
    let regularExpressionZeroToNinePointNinetyNine = /(^[0-9]\.([0-9]){2}$)/
  
    do{
  
      bodyStature =input.question('Digite sua estatura (m)[0.00]: ')
      itsRealNumber = validationFunctions.isRegularExpression(bodyStature, regularExpressionZeroToNinePointNinetyNine)
      validationFunctions.incorrectValue(false, !itsRealNumber, "Antropometria")
  
    }while(!itsRealNumber)
    
    return bodyStature
  
  },
```

Em **saf.js** vamos criar a variável **bodyStature** que receberá como valor o retorno da function **stature( )**, em seguinda mostramos o resultado:

```js
const bodyStature = anthropometryFunctions.stature()
```

```js
console.log(`Estatura Corporal: ${bodyStature} metros.`)
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 85.5 kilos.
Estatura Corporal: 1.86 metros.
===============================
```

### Índice de Massa Corporal - IMC

Function **bodyMassIndex( )** que vai determinar o **Índice de Massa Corporal - IMC** do usuário. Esta function recebe como parâmetro o **peso** e a **estatura** do usuário e retorna o **IMC** com duas casa decimais. A fórmula para determinar o IMC é ` IMC = (peso / (estatura * estatura))`. Logo, em **anthropometryFunctions.js**:

```js
bodyMassIndex(weightValue, heightValue){

    // IMC = peso / estatura * estatura
    return (weightValue / (heightValue * heightValue)).toFixed(2)
  
  },
```

Em **saf.js** vamos criar a variável **bodyMassIndex** para receber a function **bodyMassIndex( )** passando como parâmetro as variáveis **bodyWeight** e **bodyStature**:

```js
const bodyMassIndex = anthropometryFunctions.bodyMassIndex(bodyWeight, bodyStature)
```

```js
console.log(`Índice de Massa Corporal - IMC: ${bodyMassIndex}`)
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 95.0 kilos.
Estatura Corporal: 1.86 metros.
Índice de Massa Corporal - IMC: 27.46
===============================
```

### Índice de Massa Corporal - IMC - Classificação

Agora vamos criar a function **bodyMassIndexClassification( )** que vai retornar a classificação do IMC. Esta function recebe como parâmetro o **IMC** do usuário. Em seguida retorna a classificação de acordo com a tabela abaixo:

| Índice de Massa Corporal - IMC - Classificação |
| :--------------------------------------------: |
|          IMC < 17 = "Magreza Grau 2"           |
|         IMC < 18,5 = "Abaixo do peso"          |
|            IMC < 25 = "Peso Normal"            |
|             IMC < 30 = "Sobrepeso"             |
|         IMC < 35 = "Obesidade nível 1"         |
|         IMC < 40 = "Obesidade nível 2"         |
|         IMC > 40 = "Obesidade Morbida"         |

Em **anthropometryFunctions.js**:

```js
bodyMassIndexClassification(bodyMassIndexValue){

    let classification = ``
  
    if(bodyMassIndexValue < 17){
      classification = `Magreza Grau 2`
    } else if(bodyMassIndexValue < 18.5){
      classification = `Abaixo do peso`
    } else if(bodyMassIndexValue < 25){
      classification = `Peso Normal`
    } else if(bodyMassIndexValue < 30){
      classification = `Sobrepeso`
    } else if(bodyMassIndexValue < 35){
      classification = `Obesidade nível 1`
    } else if(bodyMassIndexValue < 40){
      classification = `Obesidade nível 2`
    } else{
      classification = `Obesidade Morbida`
    }
  
    return classification
  
  },
```

Em **saf.js** vamos criar a variável **bodyMassIndexClassification** que recebe a function **bodyMassIndexClassification( )**. Devemos passar a variável **bodyMassIndex** na function **bodyMassIndexClassification( )**. Depois vamos mostrar o resultado:

```js
const bodyMassIndexClassification = anthropometryFunctions.bodyMassIndexClassification(bodyMassIndex)
```

```js
console.log(`Classificação IMC: ${bodyMassIndexClassification}`)
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 95.0 kilos.
Estatura Corporal: 1.86 metros.
Índice de Massa Corporal - IMC: 27.46
Classificação IMC: Sobrepeso
===============================
```

### Perimetria

Function **bodyPerimetry( )** vai solicitar para o usuário digitar as medidas perimétricas de algumas partes do seu corpo em centímetros, como: **Braço**, **Antebraço**, **Cintura**, **Quadril**, **Coxa** e **Panturrilha**. Está function aceitará apenas números de um dígito e uma casa decimal até três dígitos e uma casa decimal. Qualquer valor diferente disso, a function **incorrectValue( )** deverá ser chamada e o usuário deverá digitar o valor correto. Esta function terá como retorno um **objeto** contendo como propriedades as partes do corpo listada acima e seus respectivos valores. Logo em **anthropometryFunctions.js**:

```js
bodyPerimetry(){

    let measurementPoints = {
      Braço: 0,
      Antebraço: 0,
      Cintura: 0,
      Quadril: 0,
      Coxa: 0,
      Panturrilha: 0
    } 
    let itsRealNumber = true
    let regexThreeWholeDigitsAndOneDecimalPlace = /(^[0-9]\.[0-9]$)|(^[0-9]{2}\.[0-9]$)|(^[0-9]{3}\.[0-9]$)/
  
    for(let bodyPart in measurementPoints){
  
      do{
  
        measurementPoints[bodyPart] = input.question(`Digite a perimetria - ${bodyPart} (cm)[000.0]: `)
  
        itsRealNumber = validationFunctions.isRegularExpression(measurementPoints[bodyPart], regexThreeWholeDigitsAndOneDecimalPlace)
        validationFunctions.incorrectValue(false, !itsRealNumber, "Antropometria")
  
      }while(!itsRealNumber)
      
    }
  
    return measurementPoints
  
  },
```

Em **saf.js** vamos criar a variável **bodyPerimeter** que vai receber o objeto retornado da function **bodyPerimetry( )**.

```js
const bodyPerimeter = anthropometryFunctions.bodyPerimetry()
```

Para mostrar o resultado, vamos criar outra function, **showPerimeter( )**. Esta funcion receberá como parâmetro o um objeto e mostrará as propriedades e seus repectivos valores. Log, em **anthropometryFunctions.js**:

```javascript
showPerimeter(objectValue){
  
    console.log('Perimetria Corporal:')
    
    for(let property in objectValue){
      console.log(`${property}: ${objectValue[property]} cm`) 
    }
  
  },
```

Em **saf.js** chamamos a function **showPerimeter( )** e passamos como parâmetro a variável **bodyPerimeter**:

```javascript
anthropometryFunctions.showPerimeter(bodyPerimeter)
```

Ao executar o programa:

```shell
===============================
           Antropometria            
===============================
Peso Corporal: 95.0 kilos.
Estatura Corporal: 1.86 metros.
Índice de Massa Corporal - IMC: 27.46
Classificação IMC: Sobrepeso
Perimetria Corporal:
Braço: 40.0 cm
Antebraço: 30.0 cm
Cintura: 85.0 cm
Quadril: 95.0 cm
Coxa: 60.0 cm
Panturrilha: 40.0 cm
===============================
```

### Relação Cintura Quadril

Function **hipWaistRatio( )**, determina a **Relação Cintura Quadril - RCQ** a partir das medidas perimétricas da **cintura** e **quadril**. Logo, esta function recebe como parâmetro os valores destas partes do corpo e retorna o **RCQ** que será determinado pela fórmula: **RCQ = Perimetria Cintura / Perimetria Quadril**. Logo em **anthropometryFunctions.js**:

```js
hipWaistRatio(waistPerimetry, hipPerimetry){

    return (waistPerimetry/ hipPerimetry).toFixed(2)
  
  },
```

Em **saf.js** criamos a variável **hipWaistRatio** que recebe como valor o retorno da function **hipWaistRatio( )**. Passamos como parâmetro os valores da **cintura** e do **quadril**:

```js
const hipWaistRatio = anthropometryFunctions.hipWaistRatio(bodyPerimeter.Cintura, bodyPerimeter.Quadril)
```

Em seguida mostramos exibimos o resultado:

```js
console.log(`Relação Cintura Quadril: ${hipWaistRatio}`)
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 85.0 kilos.
Estatura Corporal: 1.86 metros.
Índice de Massa Corporal - IMC: 24.57
Classificação IMC: Peso Normal
Perimetria Corporal:
Braço: 30.0 cm
Antebraço: 25.5 cm
Cintura: 80.5 cm
Quadril: 95.8 cm
Coxa: 65.9 cm
Panturrilha: 45.6 cm
Relação Cintura Quadril: 0.84
===============================
```

### Relação Cintura Quadril - Classificação

Function **waistHipRatioClassification( )** vai realizar a classificação da **Relação Cintura Quadril - RCQ** de acordo com as regras da tabela abaixo. Esta function recebe como parâmetro o **sexo**, **idade** e o **RCQ** do usuário. Retorna a classificação:

- **Se Homem:**

| Com **idade entre 20 a 29 anos** | Com **idade entre 30 a 39 anos** |
| -------------------------------- | -------------------------------- |
| RCQ < 0,83 = "Baixo Risco"       | RCQ < 0,84 = "Baixo Risco"       |
| RCQ < 0,89 = "Moderado Risco"    | RCQ < 0,92 = "Moderado Risco"    |
| RCQ < 0,95 = "Alto Risco"        | RCQ < 0,97 = "Alto Risco"        |
| RCQ >= 0,95 = "Muito Alto Risco" | RCQ >= 0,97 = "Muito Alto Risco" |
| **Com idade entre 40 a 49 anos** | **Com idade entre 50 a 59 anos** |
| RCQ < 0,88 = "Baixo Risco"       | RCQ < 0,90 = "Baixo Risco"       |
| RCQ < 0,96 = "Moderado Risco"    | RCQ < 0,97 = "Moderado Risco"    |
| RCQ < 1 = "Alto Risco"           | RCQ < 1,02 = "Alto Risco"        |
| RCQ >= 1 = "Muito Alto Risco"    | RCQ >= 1,02 = "Muito Alto Risco" |
| **Com idade entre 60 a 69 anos** |                                  |
| RCQ < 0,91 = "Baixo Risco"       |                                  |
| RCQ < 0,99 = "Moderado Risco"    |                                  |
| RCQ < 1,03 = "Alto Risco"        |                                  |
| RCQ >= 1,03 = "Muito Alto Risco" |                                  |

- **Se Mulher:**

| Com **idade entre 20 a 29 anos** | Com **idade entre 30 a 39 anos** |
| -------------------------------- | -------------------------------- |
| RCQ < 0,71 = "Baixo Risco"       | RCQ < 0,72 = "Baixo Risco"       |
| RCQ < 0,78 = "Moderado Risco"    | RCQ < 0,79 = "Moderado Risco"    |
| RCQ < 0,82 = "Alto Risco"        | RCQ < 0,84 = "Alto Risco"        |
| RCQ >= 0,82 = "Muito Alto Risco" | RCQ >= 0,84 = "Muito Alto Risco" |
| **Com idade entre 40 a 49 anos** | **Com idade entre 50 a 59 anos** |
| RCQ < 0,73 = "Baixo Risco"       | RCQ < 0,74 = "Baixo Risco"       |
| RCQ < 0,80 = "Moderado Risco"    | RCQ < 0,82 = "Moderado Risco"    |
| RCQ < 0,87 = "Alto Risco"        | RCQ < 0,88 = "Alto Risco"        |
| RCQ >= 0,87 = "Muito Alto Risco" | RCQ >= 0,88 = "Muito Alto Risco" |
| **Com idade entre 60 a 69 anos** |                                  |
| RCQ < 0,76 = "Baixo Risco"       |                                  |
| RCQ < 0,84 = "Moderado Risco"    |                                  |
| RCQ < 0,90 = "Alto Risco"        |                                  |
| RCQ >= 0,90 = "Muito Alto Risco" |                                  |

Logo, em **anthropometryFunctions.js**:

```js
waistHipRatioClassification(sexValue, ageValue, waistHipRatioValue){

    let classification = ``
  
    switch (sexValue) {
  
      // masculine - masculine - masculine - masculine - masculine
      case 1:
        
        if(ageValue > 19 && ageValue < 30){
          
          if(waistHipRatioValue < 0.83){
            classification = `Baixo Risco`
          } else if(waistHipRatioValue < 0.89){
            classification = `Moderado Risco`
          } else if(waistHipRatioValue < 0.95){
            classification = `Alto Risco`
          } else {
            classification = `Muito Alto Risco`
          }
          
        } else if(ageValue < 40){
          
          if(waistHipRatioValue < 0.84){
            classification = `Baixo Risco`
          } else if(waistHipRatioValue < 0.92){
            classification = `Moderado Risco`
          } else if(waistHipRatioValue < 0.97){
            classification = `Alto Risco`
          } else {
            classification = `Muito Alto Risco`
          }
          
        } else if(ageValue < 50){
          
          if(waistHipRatioValue < 0.88){
            classification = `Baixo Risco`
          } else if(waistHipRatioValue < 0.96){
            classification = `Moderado Risco`
          } else if(waistHipRatioValue < 1){
            classification = `Alto Risco`
          } else {
            classification = `Muito Alto Risco`
          }
          
        } else if(ageValue < 60){
          
          if(waistHipRatioValue < 0.90){
            classification = `Baixo Risco`
          } else if(waistHipRatioValue < 0.97){
            classification = `Moderado Risco`
          } else if(waistHipRatioValue < 1.02){
            classification = `Alto Risco`
          } else {
            classification = `Muito Alto Risco`
          }
          
        } else if(ageValue < 70){
          
          if(waistHipRatioValue < 0.91){
            classification = `Baixo Risco`
          } else if(waistHipRatioValue < 0.99){
            classification = `Moderado Risco`
          } else if(waistHipRatioValue < 1.03){
            classification = `Alto Risco`
          } else {
            classification = `Muito Alto Risco`
          }
          
        } else{
          classification = `Esta classificação não se aplica a sua idade!`
        }
  
        break;
      
      // feminine - feminine - feminine - feminine - feminine
      case 2:
        if(ageValue > 19 && ageValue < 30){
          
          if(waistHipRatioValue < 0.71){
            classification = `Baixo Risco`
          } else if(waistHipRatioValue < 0.78){
            classification = `Moderado Risco`
          } else if(waistHipRatioValue < 0.82){
            classification = `Alto Risco`
          } else {
            classification = `Muito Alto Risco`
          }
          
        } else if(ageValue < 40){
          
          if(waistHipRatioValue < 0.72){
            classification = `Baixo Risco`
          } else if(waistHipRatioValue < 0.79){
            classification = `Moderado Risco`
          } else if(waistHipRatioValue < 0.84){
            classification = `Alto Risco`
          } else {
            classification = `Muito Alto Risco`
          }
          
        } else if(ageValue < 50){
          
          if(waistHipRatioValue < 0.73){
            classification = `Baixo Risco`
          } else if(waistHipRatioValue < 0.80){
            classification = `Moderado Risco`
          } else if(waistHipRatioValue < 0.87){
            classification = `Alto Risco`
          } else {
            classification = `Muito Alto Risco`
          }
          
        } else if(ageValue < 60){
          
          if(waistHipRatioValue < 0.74){
            classification = `Baixo Risco`
          } else if(waistHipRatioValue < 0.82){
            classification = `Moderado Risco`
          } else if(waistHipRatioValue < 0.88){
            classification = `Alto Risco`
          } else {
            classification = `Muito Alto Risco`
          }
          
        } else if(ageValue < 70){
          
          if(waistHipRatioValue < 0.76){
            classification = `Baixo Risco`
          } else if(waistHipRatioValue < 0.84){
            classification = `Moderado Risco`
          } else if(waistHipRatioValue < 0.90){
            classification = `Alto Risco`
          } else {
            classification = `Muito Alto Risco`
          }
          
        } else{
          classification = `Esta classificação não se aplica a sua idade!`
        }
  
        break;
  
      default:
        classification = `[ERROR] Sexo não identificado!`
        break;
    }
    
  
    return classification
  
  },
```

Em **saf.js** vamos criar a variável **waistHipRatioClassification** que vai receber a function **waistHipRatioClassification( )** passando **sexNumber**, **age** e **hipWaistRatio** como parâmetros. Em seguida mostramos o resultado.

```js
const waistHipRatioClassification = anthropometryFunctions.waistHipRatioClassification(sexNumber, age, hipWaistRatio)
```

```js
console.log(`Classificação RCQ: ${waistHipRatioClassification}`)
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 95.0 kilos.
Estatura Corporal: 1.86 metros.
Índice de Massa Corporal - IMC: 27.46
Classificação IMC: Sobrepeso
Perimetria Corporal:
Braço: 38.7 cm
Antebraço: 30.0 cm
Cintura: 80.5 cm
Quadril: 95.3 cm
Coxa: 55.5 cm
Panturrilha: 45.3 cm
Relação Cintura Quadril- RCQ: 0.84
Classificação RCQ: Moderado Risco
===============================
```

### Circunfência cintura - Classificação

Function **waistCircumferenceClassification( )** vai determinar a clasificação da circunferência da cintura do usuário, de acordo com os valores da tabela abaixo. Esta function recebe o **sexo** e o valor da **cincurferência cintura** como parâmetros e retorna a classificação:

| se **homem**                     | se **mulher**                   |
| -------------------------------- | ------------------------------- |
| Cintura < 94 = "Nenhum Risco"    | Cintura < 80 = "Nenhum Risco"   |
| Cintura < 102 = "Risco Moderado" | Cintura < 88 = "Risco Moderado" |
| Cintura >= 102 = "Risco Alto"    | Cintura >= 88 = "Risco Alto"    |

Logo em **anthropometryFunctions.js**:

```js
waistCircumferenceClassification(sexValue, waistValue){

    classification = ``
  
    switch (sexValue) {
      
      case 1:
        
        if(waistValue < 94){
          classification = `Nenhum Risco`
        } else if(waistValue < 102){
          classification = `Risco Moderado`
        } else {
          classification = `Risco Alto`
        }
  
        break;
  
      case 2:
  
        if(waistValue < 80){
          classification = `Nenhum Risco`
        } else if(waistValue < 88){
          classification = `Risco Moderado`
        } else {
          classification = `Risco Alto`
        }
  
        break;
  
      default:
        classification = `[ERROR] Sexo não identificado!`
        break;
    }
  
    return classification
  
  },
```

Em **saf.js** criamos a variável **waistCircumference** que recebe a function **waistCircumferenceClassification( )** passando como parâmetro para esta function **sexNumber** e **bodyPerimeter.Cintura**. Em seguida mostramos o resultado:

```js
const waistCircumference = anthropometryFunctions.waistCircumferenceClassification(sexNumber, bodyPerimeter.Cintura)
```

```js
console.log(`Circunfência cintura - Classificação: ${waistCircumference}`)
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 95.0 kilos
Estatura Corporal: 1.86 metros
Índice de Massa Corporal - IMC: 27.46
Classificação IMC: Sobrepeso
Perimetria Corporal:
Braço: 38.7 cm
Antebraço: 30.0 cm
Cintura: 85.0 cm
Quadril: 90.6 cm
Coxa: 55.8 cm
Panturrilha: 40.7 cm
Relação Cintura Quadril- RCQ: 0.94
Classificação RCQ: Alto Risco
Circunfência cintura - Classificação: Nenhum Risco
===============================
```

### Medidas subcutâneas

Function **subcutaneousMeasures( )** irá solicitar do usuário informar as medias das dobras cutâneas **Triciptal**, **Subescapular**, **Peitoral**, **SupraIliaca**, **Abdominal**, **Coxa** e **Panturrilha**. Esta function só aceitará números de até dois dígitos. Caso seja informado um valor diferente, a function **incorrectValue( )** deverá ser chamada e o usuário deverá informar um valor aceito. No final esta function retorna um **objeto** tendo como propriedade cada dobra cutânea e seus respectivos valores. logo, em **anthropometryFunctions.js**:

```js
subcutaneousMeasures(){

    let subcutaneousFolds = {
      Triciptal: 0,
      Subescapular: 0,
      Peitoral: 0,
      SupraIliaca: 0,
      Abdominal: 0,
      Coxa: 0,
      Panturrilha: 0
    } 
    let validNumber = true
    let regexTwoDigits = /(^[0-9]$)|(^[0-9]{2}$)/
  
    for(let folds in subcutaneousFolds){
  
      do{
  
        subcutaneousFolds[folds] = input.question(`Digite a dobra cutânea - ${folds} (mm)[00]: `)
  
        validNumber = validationFunctions.isRegularExpression(subcutaneousFolds[folds], regexTwoDigits)
        validationFunctions.incorrectValue(false, !validNumber, "Antropometria")
  
      }while(!validNumber)
  
    }
  
    return subcutaneousFolds
  
  },
```

Em **saf.js** vamos criar a variável **skinFolds** que vai receber a function **subcutaneousMeasures( )**:

```js
const skinFolds = anthropometryFunctions.subcutaneousMeasures()
```

Em **anthropometryFunctions.js** vamos criar a function **showSubcutaneousFolds( )** que vai receber o objeto com as dobras cutâneas como parâmetro e vai mostrar as propriedades e valores deste objeto:

```js
showSubcutaneousFolds(objectValue){
  
    console.log('Dobras Cutâneas:')
    
    for(let property in objectValue){
      console.log(`${property}: ${objectValue[property]} mm`) 
    }
  
  },
```

Em **saf.js** vamos chamar a function **showSubcutaneousFolds( )** passando como parâmetro a variável **skinFolds**:

```js
anthropometryFunctions.showSubcutaneousFolds(skinFolds)
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 95.0 kilos
Estatura Corporal: 1.86 metros
Índice de Massa Corporal - IMC: 27.46
Classificação IMC: Sobrepeso
Perimetria Corporal:
Braço: 38.0 cm
Antebraço: 30.0 cm
Cintura: 85.7 cm
Quadril: 96.8 cm
Coxa: 50.4 cm
Panturrilha: 42.3 cm
Relação Cintura Quadril- RCQ: 0.89
Classificação RCQ: Moderado Risco
Circunfência cintura - Classificação: Nenhum Risco
Dobras Cutâneas:
Triciptal: 12 mm
Subescapular: 15 mm
Peitoral: 6 mm
SupraIliaca: 19 mm
Abdominal: 24 mm
Coxa: 25 mm
Panturrilha: 7 mm
===============================
```

### Percentual de gordura

Function **fatPercentage( )** determina o percentual de gordura do usuário. Recebe como parâmetro a idade e o sexo do usuário e também o objeto com as dobras cutâneas deste usuário. Dentro desta function vamos chamar a function **sumElements( )** que vai receber um **array** tendo como elementos os valores de três dobras cutâneas, sendo **Peitoral**, **Abdominal** e **Coxa** para homem, e **Triciptal**, **SupraIliaca** e **Coxa** para mulheres, retornando a soma destes elementos.  A variável **sumOfFolds** recebe a **soma das dobras**. 

Em seguida determinamos a **Densidade Corporal** que vai ser atribuída a variável **bodyDensity**, sendo a fórmula:

- Para homem: 

Densidade Corporal = ((1,10938 - (0,0008267 * Soma das dobras )) + ((0,0000016 * (Soma das dobras * Soma das dobras)) - (0,0002574 * idade)))

- Para mulher:

Densidade Corporal = ((1,0994921-(0,0009929 * Soma das dobras)) + ((0,0000023 * (Soma das dobras * Soma das dobras)) - (0,0001392 * idade))))

Por último vamos determinar o percentual de gordura **fatPercentage** que será o retorno da function **fatPercentage( )**, sendo a fórmula:

- Para homem:

Percentual de gordura = (((4,95 / Densidade Corporal) - 4,5 ) * 100);

- Para mulher:

Percentual de gordura = (((5,01 / Densidade Corporal) - 4,57) * 100))

Logo em **anthropometryFunctions.js**:

```js
sumElements(array){

    let sumElements = 0
    
    for(let element in array){
      sumElements += Number(array[element])
    }
  
    return sumElements
  
  },
```

```js
fatPercentage(ageValue, sexValue, skinFoldObject){

    let = skinfoldArray = []
    let sumOfFolds = 0
    let bodyDensity = 0
    let fatPercentage = 0
  
    switch (sexValue) {
      
      case 1:
        
        skinfoldArray.push(skinFoldObject.Peitoral, skinFoldObject.Abdominal, skinFoldObject.Coxa)
        sumOfFolds = anthropometryFunctions.sumElements(skinfoldArray)
        bodyDensity = ((1.10938 - (0.0008267 * sumOfFolds )) + ((0.0000016 * (sumOfFolds * sumOfFolds)) - (0.0002574 * ageValue)))
        fatPercentage = (((4.95 / bodyDensity) - 4.5 ) * 100).toFixed(2)
  
        return fatPercentage
  
        break;
      
      case 2:
  
        skinfoldArray.push(skinFoldObject.Triciptal, skinFoldObject.SupraIliaca, skinFoldObject.Coxa)
        sumOfFolds = anthropometryFunctions.sumElements(skinfoldArray)
        bodyDensity = ((1.0994921-(0.0009929 * sumOfFolds)) + ((0.0000023 * (sumOfFolds * sumOfFolds)) - (0.0001392 * ageValue)))
        fatPercentage = (((5.01 / bodyDensity) - 4.57) * 100).toFixed(2)
  
        return fatPercentage
  
        break;
    
      default:
  
        return `[ERROR] Sexo não identificado!`
  
        break;
  
    }
  
  },
```

Em **saf.js** vamos criar a variável **fatPercentage** que receberá a function **fatPercentage( )** passando como parâmetro **age**, **sexNumber** e **skinFolds**. Depois vamos mostrar o resultado:

```js
const fatPercentage = anthropometryFunctions.fatPercentage(age, sexNumber, skinFolds)
```

```js
console.log(`Percentual de gordura: ${fatPercentage}%`)
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 95.0 kilos
Estatura Corporal: 1.86 metros
Índice de Massa Corporal - IMC: 27.46
Classificação IMC: Sobrepeso
Perimetria Corporal:
Braço: 38.8 cm
Antebraço: 30.0 cm
Cintura: 85.7 cm
Quadril: 96.8 cm
Coxa: 50.4 cm
Panturrilha: 42.3 cm
Relação Cintura Quadril- RCQ: 0.89
Classificação RCQ: Moderado Risco
Circunfência cintura - Classificação: Nenhum Risco
Dobras Cutâneas:
Triciptal: 12 mm
Subescapular: 15 mm
Peitoral: 6 mm
SupraIliaca: 19 mm
Abdominal: 24 mm
Coxa: 25 mm
Panturrilha: 7 mm
Percentual de gordura: 16.98%
===============================
```

### Percentual de gordura - Classificação

Function **fatPercentageClassification( )** determina a classificação do percentual de gordura do usuário. Esta function recebe como parâmetro o **sexo** e o **percentual de gordura** do usuário. Retorna a classificação de acordo com a tabela abaixo:

| homem                                          | mulher                                         |
| ---------------------------------------------- | ---------------------------------------------- |
| Percentual de gordura < 6 = "Desnutrição"      | Percentual de gordura < 9 = "Desnutrição"      |
| Percentual de gordura < 15 = "Abaixo da média" | Percentual de gordura < 23 = "Abaixo da média" |
| Percentual de gordura < 16 = "Média"           | Percentual de gordura < 24 = "Média"           |
| Percentual de gordura < 25 = "Sobrepeso"       | Percentual de gordura < 32 = "Sobrepeso"       |
| Percentual de gordura >= 25 = "Obesidade"      | Percentual de gordura >= 32 = "Obesidade"      |

Logo em **anthropometryFunctions.js**:

```js
fatPercentageClassification(sexValue, fatPercentageValue){

    let classification = ``
  
    switch (sexValue) {
      
      case 1:
        
        if(fatPercentageValue < 6){
          classification = `Desnutrição`
        } else if(fatPercentageValue < 15){
          classification = `Abaixo da média`
        } else if(fatPercentageValue < 16){
          classification = `Média`
        } else if(fatPercentageValue < 25){
          classification = `Sobrepeso`
        } else{
          classification = `Obesidade`
        }
  
        break;
  
      case 2:
  
        if(fatPercentageValue < 9){
          classification = `Desnutrição`
        } else if(fatPercentageValue < 23){
          classification = `Abaixo da média`
        } else if(fatPercentageValue < 24){
          classification = `Média`
        } else if(fatPercentageValue < 32){
          classification = `Sobrepeso`
        } else{
          classification = `Obesidade`
        }
  
        break;
  
      default:
        classification = `[ERROR] Sexo não identificado!`
        break;
    }
    
    return classification
  
  },
```

Em **saf.js** criar a variável **fatPercentageClassification** que recebe a function **fatPercentageClassification( )** passando como parâmetro **sexNumber** e **fatPercentage**. Em seguinda mostramos o resultado:

```js
const fatPercentageClassification = anthropometryFunctions.fatPercentageClassification(sexNumber, fatPercentage)
```

```js
console.log(`Classificaćão % Gordura: ${fatPercentageClassification}`)
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 95.0 kilos
Estatura Corporal: 1.86 metros
Índice de Massa Corporal - IMC: 27.46
Classificação IMC: Sobrepeso
Perimetria Corporal:
Braço: 38.8 cm
Antebraço: 30.0 cm
Cintura: 85.7 cm
Quadril: 96.8 cm
Coxa: 50.4 cm
Panturrilha: 42.3 cm
Relação Cintura Quadril- RCQ: 0.89
Classificação RCQ: Moderado Risco
Circunfência cintura - Classificação: Nenhum Risco
Dobras Cutâneas:
Triciptal: 12 mm
Subescapular: 15 mm
Peitoral: 6 mm
SupraIliaca: 19 mm
Abdominal: 24 mm
Coxa: 25 mm
Panturrilha: 7 mm
Percentual de gordura: 16.98%
Classificação % Gordura: Sobrepeso
===============================
```

### Massa Corporal Gorda

Function **fatBodyMass( )**, determina a massa corporal de gordura do usuário. Esta function recebe como parâmetro o **peso** e o **percentual de gordura** do indivíduo. Retorna o peso em kilos de gordura corporal do usuário de acordo com a fóruma abaixo:

Massa Corporal Gorda = ((PESO * Percentual de gordura) / 100)

Logo em **anthropometryFunctions.js**:

```js
fatBodyMass(bodyWeight, fatPercentage){

    return Number(((bodyWeight * fatPercentage) / 100).toFixed(1))
  
  },
```

Em **saf.js** vamos criar a variável **fatBodyMass** que recebe a function **fatBodyMass( )** passando como parâmetro **bodyWeight** e **fatPercentage**. Em seguida mostramos o resultado:

```js
const fatBodyMass = anthropometryFunctions.fatBodyMass(bodyWeight, fatPercentage)
```

```js
console.log(`Massa Corporal Gorda: ${fatBodyMass} kilos`)
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 95.0 kilos
Estatura Corporal: 1.86 metros
Índice de Massa Corporal - IMC: 27.46
Classificação IMC: Sobrepeso
Perimetria Corporal:
Braço: 38.8 cm
Antebraço: 30.0 cm
Cintura: 85.7 cm
Quadril: 96.8 cm
Coxa: 50.4 cm
Panturrilha: 42.3 cm
Relação Cintura Quadril- RCQ: 0.89
Classificação RCQ: Moderado Risco
Circunfência cintura - Classificação: Nenhum Risco
Dobras Cutâneas:
Triciptal: 12 mm
Subescapular: 15 mm
Peitoral: 6 mm
SupraIliaca: 19 mm
Abdominal: 24 mm
Coxa: 25 mm
Panturrilha: 7 mm
Percentual de gordura: 16.98%
Classificação % Gordura: Sobrepeso
Massa Corporal Gorda: 16.13kilos
===============================
```

### Massa Corporal Magra

Function **leanBodyMass( )**, determina o peso da massa magra do indivíduo. Recebe como parâmetro o **peso corporal**  e o **peso da massa corporal gorda** do indivíduo. A function retorna a subtração desses valores, log, em **anthropometryFunctions.js**:

```js
leanBodyMass(bodyWeight, fatBodyMass){

    return Number(bodyWeight - fatBodyMass)
  
  },
```

Em **saf.js** criamos a variável **leanBodyMass** que recebe a function **leanBodyMass( )** passando como parâmetro **bodyWeight** e **fatBodyMass**. em seguida mostramos o resultado:

```js
const leanBodyMass = anthropometryFunctions.leanBodyMass(bodyWeight, fatBodyMass)
```

```js
console.log(`Massa Corporal Magra: ${leanBodyMass} kilos`)
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 95.0 kilos
Estatura Corporal: 1.86 metros
Índice de Massa Corporal - IMC: 27.46
Classificação IMC: Sobrepeso
Perimetria Corporal:
Braço: 38.8 cm
Antebraço: 30.0 cm
Cintura: 85.7 cm
Quadril: 96.8 cm
Coxa: 50.4 cm
Panturrilha: 42.3 cm
Relação Cintura Quadril- RCQ: 0.89
Classificação RCQ: Moderado Risco
Circunfência cintura - Classificação: Nenhum Risco
Dobras Cutâneas:
Triciptal: 12 mm
Subescapular: 15 mm
Peitoral: 6 mm
SupraIliaca: 19 mm
Abdominal: 24 mm
Coxa: 25 mm
Panturrilha: 7 mm
Percentual de gordura: 16.98%
Classificação % Gordura: Sobrepeso
Massa Corporal Gorda: 16.1 kilos
Massa Corporal Magra: 78.9 kilos
===============================
```

### Massa Corporal Ideal Prevista

Function **expectedIdealBodyMass( )** determina  **Massa Corporal Ideal Prevista** do usuário. Recebe como parâmetro o **sexo** e a **massa corporal magra** do indivíduo. Retorna Massa Corporal Ideal Prevista de acordo com as fórmulas:

- Se homem:

Massa Corporal Ideal Prevista = (Masssa Corporal Magra / (1 - 0,15))

- Se mulher:

Massa Corporal Ideal Prevista = (Masssa Corporal Magra / (1 - 0,23))

Logo, em **anthropometryFunctions.js**:

```js
expectedIdealBodyMass(sexNumber, leanBodyMass){

    return Number(sexNumber === 1 ? (leanBodyMass / (1 - 0.15)).toFixed(1) : (leanBodyMass / (1 - 0.23)).toFixed(1))
  
  },
```

Em **saf.js** criamos a variável **expectedIdealBodyMass** que recebe a function **expectedIdealBodyMass( )** passando como parâmetro **sexNumber** e **leanBodyMass**. Em seguida mostramos o resultado:

```js
const expectedIdealBodyMass = anthropometryFunctions.expectedIdealBodyMass(sexNumber, leanBodyMass)
```

```js
console.log(`Massa Corporal Ideal Prevista: ${expectedIdealBodyMass} kilos`)
```

Ao executar  o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 95.0 kilos
Estatura Corporal: 1.86 metros
Índice de Massa Corporal - IMC: 27.46
Classificação IMC: Sobrepeso
Perimetria Corporal:
Braço: 38.8 cm
Antebraço: 30.0 cm
Cintura: 85.7 cm
Quadril: 96.8 cm
Coxa: 50.4 cm
Panturrilha: 42.3 cm
Relação Cintura Quadril- RCQ: 0.89
Classificação RCQ: Moderado Risco
Circunfência cintura - Classificação: Nenhum Risco
Dobras Cutâneas:
Triciptal: 12 mm
Subescapular: 15 mm
Peitoral: 6 mm
SupraIliaca: 19 mm
Abdominal: 24 mm
Coxa: 25 mm
Panturrilha: 7 mm
Percentual de gordura: 16.98%
Classificação % Gordura: Sobrepeso
Massa Corporal Gorda: 16.1 kilos
Massa Corporal Magra: 78.9 kilos
Massa Corporal Ideal Prevista: 92.8 kilos
===============================
```

Com isto chega ao final a parte **Antropometria** do projeto. Como ficaram os arquivos do programa até esta etapa:



























