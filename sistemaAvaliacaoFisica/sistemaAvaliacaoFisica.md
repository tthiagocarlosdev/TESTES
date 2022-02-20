# Sistema de Avaliação Física

Olá dev's! Para praticar lógica de programação com JavaScript e Node.js, vamos criar um sistema de avaliação física igual ao que encontramos em academias. O detalhe é que vamos desevolver apenas em JavaScript e Node.js, nada de HTML e CSS. Vamos rodar essa aplicação pelo terminal com interação do usuário. Vamos lá?!

## Preparing

* Abra o VSCode e escolha um local para criar a pasta do projeto, Crie a pasta e coloque o nome do projeto. Eu coloquei **sistemaAvaliacaoFisica**. 
* Abra o terminal e vamos instalar o módulo **readline-sync** que será responsável pela interação do usuário com o sistema. No terminal, na raiz do projeto, digite o comando abaixo e tecle Enter.

```shell
$ npm install readline-sync
```

- Apos a instalação, você vai perceber que uma pasta foi criada. É a pasta **node_modules**.
- Vamos agora criar quatro arquivos:
  -  **saf.js**. Esse será o arquivo principal do nosso projeto;
  - **headerFunctions.js**. Vamos colocar as funções de cabeçalho;
  - **validationFunctions.js**. Vamos colocar funções de validação;
  - **anamnesisFunctions.js**. Vamos colocar as funções da anamnese.

- Em **saf.js** vamos:
  - Criar a variável de **input** com o módulo **readline-sync**;
  - Importar os arquivos **headerFunctions.js** e **anamnesisFunctions**.

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

Antes, vamos fazer um cabeçalho para nossa aplicação.

Agora vamos criar a nossa primeira função de cabeçalho, denominada **header**. Em **headerFunctions.js**, dentro da variável **headerFunctions** vamos colocar a função **header**, conforme  abaixo:

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

No arquivo **saf.js** vamos chamar a função **header** para que ela seja executada:

```javascript
headerFunctions.header()
```

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

Agora vamos criar uma função que vai receber o nome do usuário. Esta função receberá o nome do usuário que deverá ter apenas letras e acentos/sinais, caso tenha **número**, deverá informar ao usuário que o dado está incorreto e pedir novamente para o usuário inserir o nome. Para isto vamos criar também duas funções de validação que serão usadas dentro da função do nome. 

Em **anamnesisFunctions.js** dentro da variável que criamos, a função **name**:

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

Em **validationFunctions.js** também dentro da variável que criamos, a função **itsLetters** que receberá uma string como parâmetro e irá retornar **true** se dentro da _string_ contém número e _false_ se não tiver número:

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

Em **validationFunctions.js** a função **incorrectValue** terá dois valores booleanos como parâmetros e caso um dos dois seja _true_ a função irá retornar a function **header()** e a mensagem _"Dado incorreto!"_:

```js
incorrectValue: function (valueA, valueB){
    if(valueA || valueB ){ 
      console.clear()
      headerFunctions.header()
      console.log('Dado Incorreto!')
    }
  },
```

Em **saf.js** vamos criar uma variável nome, que receberá a function **name()** e depois vamos fazer uma **console.log** desa variável:

```js
var input = require('readline-sync')

const { headerFunctions } = require('./headerFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')

headerFunctions.header()

/* variáveis */
const nome = anamnesisFunctions.name()

console.clear()
headerFunctions.header()
console.log(`Nome: ${nome}`)
```

Dia de nascimento
