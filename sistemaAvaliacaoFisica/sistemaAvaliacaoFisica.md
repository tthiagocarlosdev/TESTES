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
    
    return sexNumber
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

### Horário disponível para treino (DIAS)











