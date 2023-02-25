# Random applications

### 1. header( );

### 2. line( );

### 3. NodeJS - module.export e require( );

### 4. Math.random( )

### 5. snake_case with replace( )

### 6. function loading( ) with method getTime( );

### 7. Jankenpon( ) with arrow functions;

### 8. Password Generator with fromCharCode( )...





## 1. header( text )

Esta será a nossa function de cabeçalho. Ela recebe o texto que queremos mostrar no cabeçalho como parâmetro e mostrar o texto entre duas linhas, acima e abaixo do texto. O texto fica centralizado, conforme exemplo abaixo:

```shell
--------------------------------------
          título da aplicação
--------------------------------------
```

- Primeiro vamos declarar nossa function:

```javascript
function header(text) {

}
```

- em seguida, vamos precisar saber o tamanho do texto que foi passado como parâmetro, logo vamos declarar a variável __textSize__:

```javascript
function header(text) {
  let textSize = text.length; 
}
```

- A próxima variável será o tamanho da linha, a qual chamaremos de __lineSize__. Esta variável recebe como valor o tamanho do texto inserido vezes 2:

```javascript
function header(text) {
  let textSize = text.length;
  let lineSize = textSize * 2;
}
```

- Para centralizar o texto, vamos precisar colocar um espaço antes dele ser imprimido na tela. Com isso, vamos declarar a variável __spaceSize__ que receberá como valor o tamanho do texto divido por 2. Como nem sempre o tamanho do texto será um valor __par__, vamos utilizar a função ` Math.ceil(x)` que vai nos retornar o menor número inteiro maior ou igual a "x". Logo, a variável __spaceSize__ ficará assim:

```javascript
function header(text) {
  let textSize = text.length;
  let lineSize = textSize * 2;
  let spaceSize = Math.ceil(textSize / 2)
}
```

- Vamos fazer um teste com o que fizemos até agora, passando o texto "título da aplicação" como parâmetro:

```js
function header(text) {
  let textSize = text.length;
  let lineSize = textSize * 2;
  let spaceSize = Math.ceil(textSize / 2)

  console.log(textSize)
  console.log(lineSize)
  console.log(spaceSize)
}

header("título da aplicação")
```

No console:

```shell
19
38
10
```

Foi impresso o tamanho do nosso texto (19), o tamanho da linha (38) e o tamanho do espaço que vamos colocar antes do texto na tela (10.)

- Agora vamos colocar nosso texto e o espaço dentro de uma string para depois mostrar na tela. Para isto vamos declarar a variável __textWithSpace__. Para colocar o espaço correto, vamos usar a estrutura de repetição __for__ e uma condicional __if__. A condição para colocar a quantidade de espaços de acordo com o tamanho definido para a variável __spaceSize__ será que enquanto o índice da estrutura de repetição for menor do que __spaceSize__, um espaço será acrescentado dentro da variável __textWithSpace__ e se o índice for igual ao __spaceSize__, será acrescentado o texto e a estrutura de repetição para. Nossa function ficou assim:

```js
function header(text) {
  let textSize = text.length;
  let lineSize = textSize * 2;
  let spaceSize = Math.ceil(textSize / 2)
  let textWithSpace = ""

  for (let index = 0; index <= spaceSize; index++) {
    if (index < spaceSize) {
      textWithSpace += " "
    } else if (index == spaceSize) {
      textWithSpace += text
    }
  }

  console.log(textSize)
  console.log(lineSize)
  console.log(spaceSize)
  console.log(textWithSpace)
}

header("título da aplicação")
```

No console:

```shell
19
38
10
          título da aplicação
```

- Nosso texto já está com o espaço para ficar centralizado, agora vamos apenas adicionar as linhas acima e abaixo do título. Para isto vamos criar outra function chamada ` line()`. Esta function irá imprimir apenas a linha de acordo com o tamanho da linha determinada na variável __lineSize__. Dentro desta function declaramos a variável  __line__ que vai receber a linha. Vamos utilizar a estrutura de repetição __for__ para construir a linha:

```js
function line() {
    let line = ""

    for (let index = 0; index <= lineSize; index++) {
      line += "-"
    }

    console.log(line)
  }
```

- Agora basta apenas chamar a function antes de depois do `console.log()` do texto:

```js
function header(text) {
  let textSize = text.length;
  let lineSize = textSize * 2;
  let spaceSize = Math.ceil(textSize / 2)
  let textWithSpace = ""

  for (let index = 0; index <= spaceSize; index++) {
    if (index < spaceSize) {
      textWithSpace += " "
    } else if (index == spaceSize) {
      textWithSpace += text
    }
  }

  function line() {
    let line = ""

    for (let index = 0; index <= lineSize; index++) {
      line += "-"
    }

    console.log(line)
  }

  line()
  console.log(textWithSpace)
  line()
}
```

Ao executar nossa function `header( )`:

```shell
---------------------------------------
          título da aplicação
---------------------------------------
```

Esta foi nossa primeira aplicação, que será o nosso cabeçalho a parir de agora nos próximos exercícios.

## 2. line( text )

- Nossa 2ª aplicação será a `line(text)`. uma function que imprime uma linha de acordo com o tamanho do texto passado como parâmetro. ela será o nosso rodapé, ou linha mesmo nas próximas aplicações.
- Vamos começar declarando a function:

```js
function line(text){
    
}
```

- Essa function terá três variáveis, sendo:
  - __textSize__ para determinar o tamanho do texto;
  - __lineSize__ para determinar o tamanho da linha que será calculado multiplicando o tamanho do texto por 2;
  - __line__: que vai receber os caracteres que formarão a linha.

```javascript
function line(text){
    let textSize = text.length;
    let lineSize = textSize * 2;
    let line = ""
  }
```

- Vamos usar a estrutura de repetição __for__ para construir a linha:

```js
function line(text){
    let textSize = text.length;
    let lineSize = textSize * 2;
    let line = ""

    for (let index = 0; index <= lineSize; index++) {
      line += "-"
    }
  }
```

- Agora ao final, basta fazer um `console.log` de __line__ e chamar a function passando o texto do título como parâmetro:

```js
function line(text){
    let textSize = text.length;
    let lineSize = textSize * 2;
    let line = ""

    for (let index = 0; index <= lineSize; index++) {
      line += "-"
    }

    console.log(line)
  }

  line("título da aplicação")
```

- Ao executar no console:

```shell
---------------------------------------
```

Esta foi nossa aplicação `line(text)`

## 3. NodeJS - module.export e require

[link do tema](https://medium.com/@jonathanjuliani/nodejs-require-exports-module-exports-entenda-de-vez-9297dcd5654f)

Vamos criar um arquivo para colocar as nossas functions de __cabeçalho__ e __rodape/linha__ e depois exportá-las e importá-las nas próximas aplicações.

- Crie um arquivo com o nome basicFunctions.js__;
- Dentro do arquivo vamos criar o objeto __basicFunctions__, que será a variável onde será armazenada as functions:

```js
const basicFunctions = {
    
}
```

- Dentro deste objeto, vamos colocar as functions `header()` e `line()`:

```js
const basicFunctions = {
    
    header(text) {
        let textSize = text.length;
        let lineSize = textSize * 2;
        let spaceSize = Math.ceil(textSize / 2)
        let textWithSpace = ""
      
        for (let index = 0; index <= spaceSize; index++) {
          if (index < spaceSize) {
            textWithSpace += " "
          } else if (index == spaceSize) {
            textWithSpace += text
          }
        }
      
        function line() {
          let line = ""
      
          for (let index = 0; index <= lineSize; index++) {
            line += "-"
          }
      
          console.log(line)
        }
      
        line()
        console.log(textWithSpace)
        line()
      },

      line(text){
        let textSize = text.length;
        let lineSize = textSize * 2;
        let line = ""
    
        for (let index = 0; index <= lineSize; index++) {
          line += "-"
        }
    
        console.log(line)
      },
      
}
```

- Ao final vamos exportar o objeto __basicFunctions__ usando o ___module.export___:

```js
const basicFunctions = {
    
    header(text) {
        let textSize = text.length;
        let lineSize = textSize * 2;
        let spaceSize = Math.ceil(textSize / 2)
        let textWithSpace = ""
      
        for (let index = 0; index <= spaceSize; index++) {
          if (index < spaceSize) {
            textWithSpace += " "
          } else if (index == spaceSize) {
            textWithSpace += text
          }
        }
      
        function line() {
          let line = ""
      
          for (let index = 0; index <= lineSize; index++) {
            line += "-"
          }
      
          console.log(line)
        }
      
        line()
        console.log(textWithSpace)
        line()
      },

      line(text){
        let textSize = text.length;
        let lineSize = textSize * 2;
        let line = ""
    
        for (let index = 0; index <= lineSize; index++) {
          line += "-"
        }
    
        console.log(line)
      },
      
}

module.exports = {
    basicFunctions
}
```

- Na próxima aplicação vamos importar  a const __basicFunctions__ usando o ___require___:

```js
const { basicFunctions } = require('./basicFunctions') 
```

- Para executar alguma function, basta chamar a const __basicFunctions__ com o nome da function que quer executar:

```js
basicFunctions.header("basicFunctions")
```

No console:

```shell
-----------------------------
       basicFunctions
-----------------------------
```

Na próxima aplicação, vamos trabalhar bastante ___module.export___ e ___require___.

## 4. Math.random( )

O `Math.random()` é uma function que retorna um número pseudo-aleatório no intervalo `[0, 1[`, ou seja, de 0 (inclusivo) até, mas não incluindo 1 (exclusivo), que depois você pode dimensionar para um intervalo desejado. 

Você pode verificar a documentação em [math-random](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

- ### Sintaxe:

```js
Math.random()
```

- ### Valor retornado

Um número pseudo-aleatório entre 0 (inclusivo) e 1 (exclusivo).

Vamos criar nosso arquivo __generateRandomNumbers.js__ onde vamos executar o `Math.random()`. Dentro deste arquivo vamos importar através do __require__ o objeto __headerBaseboardFunctions__:

```js
const { basicFunctions } = require('./basicFunctions')
```

Agora vamos chamar a function `header()` passando como parâmetro o título do nosso tema:

```js
const { basicFunctions } = require('./basicFunctions') 

basicFunctions.header("Gerando um número aleatório")
```

Ao executar `node generateRandomNumbers.js`, no console:

```shell
-------------------------------------------------------
              Gerando um número aleatório
-------------------------------------------------------
```

- ### Exemplos:

  - ### [Gerando um número aleatório entre 0 (inclusivo) e 1 (exclusivo)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random#gerando_um_número_aleatório_entre_0_inclusivo_e_1_exclusivo)

Vamos gerar um número aleatório entre 0 (inclusivo) e 1 (exclusivo), usando `Math.random()`:

```js
console.log('Números entre 0 e 1(excluse)')
basicFunctions.line("Gerando um número aleatório")
let numeroAleatorio = Math.random()
console.log(numeroAleatorio)
basicFunctions.line("Gerando um número aleatório")
```

No console:

```shell
-------------------------------------------------------
              Gerando um número aleatório
-------------------------------------------------------
Números entre 0 e 1(excluse)
-------------------------------------------------------
0.10141020439217097
-------------------------------------------------------
```

- ### [Gerando um número aleatório entre dois valores](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random#gerando_um_número_aleatório_entre_dois_valores)

Este exemplo retorna um número entre dois valores definidos. O valor retornado será __maior__ ou __igual__ a `min`, e __menor__ que `max`.

```js
console.log("Número aleatório entre dois valores")
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
basicFunctions.line("Gerando um número aleatório")
console.log(getRandomArbitrary(0, 10)) 
basicFunctions.line("Gerando um número aleatório")
```

No console:

```shell
-------------------------------------------------------
Número aleatório entre dois valores
-------------------------------------------------------
7.99271122220871
-------------------------------------------------------
```

- ### [Gerando um número inteiro aleatório entre dois valores](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random#gerando_um_número_inteiro_aleatório_entre_dois_valores)

Este exemplo retorna um número *inteiro* entre dois valores definidos. O valor não poderá ser __menor__ que `min` (ou do próximo inteiro maior que `min`, caso `min` __não seja inteiro__), e será menor (mas não igual) a `max`. A função `getRandomInt()` tem intervalo com o valor __mínimo incluído__ e o __máximo excluído__.

```js
console.log("Número inteiro aleatório entre dois valores")
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
basicFunctions.line("Gerando um número aleatório")
console.log(getRandomInt(1, 10))
basicFunctions.line("Gerando um número aleatório")
```

No console:

```shell
-------------------------------------------------------
Número inteiro aleatório entre dois valores
-------------------------------------------------------
7
-------------------------------------------------------	
```

- ### [Gerando um número inteiro aleatório entre dois valores, inclusive](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random#gerando_um_número_inteiro_aleatório_entre_dois_valores_inclusive)

Este exemplo retorna um número *inteiro* entre dois valores definidos. A função `getRandomIntInclusive()` tem intervalo com o valor mínimo e máximo incluído.

```js
console.log("Número inteiro aleatório entre dois valores, inclusive")
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
basicFunctions.line("Gerando um número aleatório")
console.log(getRandomIntInclusive(1, 10))
basicFunctions.line("Gerando um número aleatório")  
```

No console:

```shell
-------------------------------------------------------
Número inteiro aleatório entre dois valores, inclusive
-------------------------------------------------------
10
-------------------------------------------------------
```

Nosso arquivo completo:

```js
const { basicFunctions } = require('./basicFunctions') 

basicFunctions.header("Gerando um número aleatório")


console.log('Números entre 0 e 1(excluse)')
basicFunctions.line("Gerando um número aleatório")
let numeroAleatorio = Math.random()
console.log(numeroAleatorio)
basicFunctions.line("Gerando um número aleatório")


console.log("Número aleatório entre dois valores")
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
basicFunctions.line("Gerando um número aleatório")
console.log(getRandomArbitrary(0, 10)) 
basicFunctions.line("Gerando um número aleatório")


console.log("Número inteiro aleatório entre dois valores")
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
basicFunctions.line("Gerando um número aleatório")
console.log(getRandomInt(1, 10))
basicFunctions.line("Gerando um número aleatório")


console.log("Número inteiro aleatório entre dois valores, inclusive")
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
basicFunctions.line("Gerando um número aleatório")
console.log(getRandomIntInclusive(1, 10))
basicFunctions.line("Gerando um número aleatório")  
```

No console:

```shell
-------------------------------------------------------
              Gerando um número aleatório
-------------------------------------------------------
Números entre 0 e 1(excluse)
-------------------------------------------------------
0.022794387738104938
-------------------------------------------------------
Número aleatório entre dois valores
-------------------------------------------------------
6.351774666991141
-------------------------------------------------------
Número inteiro aleatório entre dois valores
-------------------------------------------------------
3
-------------------------------------------------------
Número inteiro aleatório entre dois valores, inclusive
-------------------------------------------------------
10
-------------------------------------------------------
```

## 5. snake_case with replace()

Vamos construir uma aplicação que transforma um texto/frase inserida pelo usuário no formato __snake_case__. Para isto, vamos usar o método `replace()`.

O método `replace()` retorna uma nova string com algumas ou todas as correspondências de um padrão substituídas por um determinado caractere (ou caracteres). O padrão pode ser uma string ou uma [`RegExp`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp), e a substituição pode ser uma string ou uma função a ser chamada para cada correspondência. Se o padrão for uma string, apenas a primeira ocorrência será substituída.

A string original não é modificada.

Documentação - [click me](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

### Sintaxe

```js
str.replace(regexp|substr, newSubStr|function)
```

Na nossa aplicação, vamos começar declarando nossa variável de input e importando __headerBaseboardFunctions__:

```js
var input = require('readline-sync');

const { basicFunctions } = require('./basicFunctions')
```

Em seguida vamos chamar a function `header()` passando como parâmetro o título da nossa aplicação:

```js
basicFunctions.header("snake_case")
```

Vamos declarar mais declarar as variáveis para o texto inserido pelo usuário, o texto em minúsculo e o texto com underline:

```js
let inserted_text, lowercase_text, underlined_text
```

O próximo passo é solicitara ao usuário digitar um texto qualquer:

```js
//entrada de dados
inserted_text = input.question("Enter the text: ")
```

Com o texto inserido, vamos começar a parte de processamento de dados, colocando todo o texto em minúsculo dentro da variável __lowercase_text__, com a function `toLowerCase()` que já trabalhamos no __ex052_analisadorDeStrings__:

```js
//procesamento de dados
lowercase_text = inserted_text.toLowerCase()
```

Com o texto em minúsculo, vamos trocar todos os espaços por __underline__ usando a function `replace()` e armazenar dentro da variável __underlined_text__.  O médoto `replace()` recebe dois parâmetros. O primeiro pode ser uma string ou uma __RegExp__, e o segundo pode ser uma string ou uma função que ficará no lugar do termo a ser trocado. Confira a documentação no link inserido acima para se aprofundar mais no assunto, aqui vamos apenas mostrar como trocar o espaço em branco pelo underline usando RegExp e o método `replace()`:

```js
underlined_text = lowercase_text.replace(/ /gi, "_")
```

Com a parte de processamento de dados finalizada, agora vamos para a saía de dados. Para isto, vamos executar um `console.clear()` e em seguida chamar a function `header()`, mostrar o resultado final imprimindo a __underlined_text__ e por fim, chamando a function `line()`:

```js
//saída de dados
console.clear()
basicFunctions.header("snake_case")
console.log(underlined_text)
basicFunctions.line("snake_case")
```

Todo o nosso programa:

```js
var input = require('readline-sync');

const { basicFunctions } = require('./basicFunctions')

basicFunctions.header("snake_case")

let inserted_text, lowercase_text, underlined_text

//entrada de dados
inserted_text = input.question("Enter the text: ")

//procesamento de dados
lowercase_text = inserted_text.toLowerCase()
underlined_text = lowercase_text.replace(/ /gi, "_")

//saída de dados
console.clear()
basicFunctions.header("snake_case")
console.log(underlined_text)
basicFunctions.line("snake_case")
```

Ao executar, no console:

```shell
---------------------
     snake_case
---------------------
Enter the text: Metodo Replace com JavaScript
```

```shell
---------------------
     snake_case
---------------------
metodo_replace_com_javascript
---------------------
```

Pronto, a nossa aplicação está concluída. Agora conseguimos colocar qualquer texto no formato snake_case.

## 6. function loading() with method getTime()

Nesta próxima aplicação aplicação, vamos construir uma function que vai simular um carregamento, usando o método `getTime()`. Esse carregamento será executado a cada 1 segundo, apresentando o percentual do carregamento.

Crie um novo arquivo e coloque o nome de __loading.js__.

Neste arquivos vamos começar declarando a function `loading()`:

```js
function loading(){
  
}
```

Em seguida, vamos declarar duas variáveis para armazenar uma string que será a linha do carregamento e o percentual:

```js
function loading(){
    
    let toLoad = `....`
    let percentage = 20
    
}
```

O próximo passo é criar uma estrutura de repetição para que o carregamento aconteça até o percentual chegar em 100%. Dentro dessa estrutura vamos imprimir o carregamento e o percentual e depois incrementar tanto o carregamento como o percentual, para não entrar em loop infinito:

```js
function loading(){  
    
    let toLoad = `....`
    let percentage = 20
    while (percentage <= 100) {
        console.clear()
        console.log(`loading ${toLoad} ${percentage}%`)
        toLoad += `....`
        percentage += 20
    }
}
```

Porém se você executar o programa dessa maneira, ele só irá imprimir o carregamento e não é isso que queremos, queremos que ele mostre o carregamento a cada 1 segundo. Para isto vamos declarar outra function chamada de `syncDelay()`. Dentro desta function vamos passar o tempo em milissegundos que queremos para aparecer cada carregamento. esta function será chamada após imprimir o carregamento e o percentual:

```js
function loading(){
    
    let toLoad = `....`
    let percentage = 20
    while (percentage <= 100) {
        console.clear()
        console.log(`loading ${toLoad} ${percentage}%`)
        syncDelay(1000);
        toLoad += `....`
        percentage += 20
    }
}
```

Agora vamos construir essa function `syncDelay()` utilizando o método `getTime()`. Para saber mais sobre esse método, faça a leitura da [documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime). Esta function recebe como parâmetro o tempo em milissegundos e vai criar um delay de acordo com o tempo passado. No caso da nossa aplicação, 1 segundo:

```js
function loading(){
  
    function syncDelay(milliseconds){
      let start = new Date().getTime();
      let end=0;
      while( (end-start) < milliseconds){
          end = new Date().getTime();
      }
     }  
    
    let toLoad = `....`
    let percentage = 20
    while (percentage <= 100) {
        console.clear()
        console.log(`loading ${toLoad} ${percentage}%`)
        syncDelay(1000);
        toLoad += `....`
        percentage += 20
    }
}
```

Agora é só chamar a function:

```js
function loading(){
  
    function syncDelay(milliseconds){
      let start = new Date().getTime();
      let end=0;
      while( (end-start) < milliseconds){
          end = new Date().getTime();
      }
     }  
    
    let toLoad = `....`
    let percentage = 20
    while (percentage <= 100) {
        console.clear()
        console.log(`loading ${toLoad} ${percentage}%`)
        syncDelay(1000);
        toLoad += `....`
        percentage += 20
    }
}

loading()
```

No console:

```shell
loading .... 20%
```

```shell
loading ........ 40%
```

```shell
loading ............ 60%
```

```shell
loading ................ 80%
```

```shell
loading .................... 100%
```

Vamos utilizar essa aplicação no próximo programa!

## 7. Jankenpon

Esta aplicação será o famoso jogo __Jankenpon__, sendo jogado entre um jogador humano, o usuário, contra o computador.

Vamos começar adicionando as functions `loading()`  e `getRandomIntInclusive()` dentro do objeto __basicFunctions__:

```js
const basicFunctions = {
    
  header(text) {
      let textSize = text.length;
      let lineSize = textSize * 2;
      let spaceSize = Math.ceil(textSize / 2)
      let textWithSpace = ""
    
      for (let index = 0; index <= spaceSize; index++) {
        if (index < spaceSize) {
          textWithSpace += " "
        } else if (index == spaceSize) {
          textWithSpace += text
        }
      }
    
      function line() {
        let line = ""
    
        for (let index = 0; index <= lineSize; index++) {
          line += "-"
        }
    
        console.log(line)
      }
    
      line()
      console.log(textWithSpace)
      line()
    },

  line(text){
    let textSize = text.length;
    let lineSize = textSize * 2;
    let line = ""

    for (let index = 0; index <= lineSize; index++) {
      line += "-"
    }

    console.log(line)
  },

  loading(){

    function syncDelay(milliseconds){
      let start = new Date().getTime();
      let end=0;
      while( (end-start) < milliseconds){
        end = new Date().getTime();
      }
    }  
      
    let toLoad = `....`
    let percentage = 20
    while (percentage <= 100) {
      console.clear()
      console.log(`loading ${toLoad} ${percentage}%`)
      syncDelay(1000);
      toLoad += `....`
      percentage += 20
    }
  },

  getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  },

}

module.exports = {
  basicFunctions
}
```

Vamos criar nosso arquivo __jankenpon.js__ e já importar o input com o __readlinesync__ e importar também o __basicFunctions__:

```js
var input = require('readline-sync');

const { basicFunctions } = require('./basicFunctions')
```

Vamos chamar a function `loading()`, limpar a tela e apresentar o `header()` da nossa aplicação:

```js
basicFunctions.loading()
console.clear()
basicFunctions.header("Jankenpon")
```

No console:

```shell
loading .... 20%
loading ........ 40%
loading ............ 60%
loading ................ 80%
loading .................... 100%
-------------------
     Jankenpon
-------------------
```

Vamos criar três variáveis que usaremos a princípio, que serão o nome do jogador, a opção jogada do humano e a opção de jogada do computador. Logo nossa declaração de variáveis ficará assim:
```js
//declaração de variáveis
let playerName = ``;
let humanPlay = 0;
let cpuPlay = 0;
```

Na entrada de dados, vamos solicitar do usuário inserir seu nome e atribuí-lo a variável __playerName__:

```js
//entrada de dados
basicFunctions.loading();
console.clear();
basicFunctions.header("Jankenpon");
playerName = input.question("Digite seu nome: ").toLocaleUpperCase();
```

No console:

```shell
-------------------
     Jankenpon
-------------------
Digite seu nome: thiago
```

Antes de mostrar o nome do usuário e solicitar a escolha de sua jogada, vamos criar o menu  que apresentará as opções para o usuário. Em declaração de funções:

```js
//declaração de funções
const playMenu = () => {
    console.log("[1] PEDRA")
    console.log("[2] TESOURA")
    console.log("[3] PAPEL")
}
```

Ainda na entrada de dados, vamos apresentar o nome do usuário e pedir para que o mesmo escolha uma das opções do menu, atribuindo essa escolha na variável __humanPlay__. Mas antes atribuir o valor a variável, vamos ter que validar o valor digitado pelo usuário e para isto vamos criar a function `validateNumber()`. Vamos declarar essa function como uma [Arrow Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions). Logo, em declaração de funções:

```js
const validateNumber = () => {
    
};
```

Esta function irá solicitar o input do usuário e analisará o valor digitado por ele. Caso seja valor um valor diferente de 1, 2 e 3, uma mensagem de erro será apresentada e será solicitado novamente para o usuário digitar um valor correto. Caso ele digite um valor errado novamente, a mensagem de erro deve aparecer novamente e uma nova solicitação para o usuário inserir um valor correto. Quando o usuário inserir um valor correto, o programa segue o seu fluxo normal.

Para executar isso, vamos criar uma estrutura de repetição que será executada enquanto o usuário digitar um valor inválido:

```js
const validateNumber = () => {

    let value = input.question();

    while ( value != "1" && value != "2" && value != "3" ) {
        console.clear();
        basicFunctions.header("Jankenpon");
        playMenu();
        value = input.question();
    };

};
```

Note que ainda falta aparecer a mensagem de erro, e para isto vamos criar a function `errorMessage()` que vai imprimir essa mensagem. Em declaração de funções:

```js
const errorMessage = () => {
    console.log("ATENÇÃO: JOGADA ERRADA!");
    console.log("Digite um valor válido!");
};
```

Agora basta chamar a function `errorMessage()` dentro da estrutura de repetição da function `validateNumber()`:

```js
const validateNumber = () => {

    let value = input.question();

    while ( value != "1" && value != "2" && value != "3" ) {
        console.clear();
        basicFunctions.header("Jankenpon");
        errorMessage();
        playMenu();
        value = input.question();
    };

};
```

Por fim, quando o valor for validado, a function `validateNumber()` vai retornar esse valor:

```js
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
```

Agora, basta chamar a function `validateNumber()` atribuindo o seu retorno à variável __humanPlay__:

```js
console.clear();
basicFunctions.header("Jankenpon");
console.log(`${playerName} escolha sua jogada: `);
playMenu();
humanPlay = validateNumber();
```

No console:

```shell
-------------------
     Jankenpon
-------------------
THIAGO escolha sua jogada: 
[1] PEDRA
[2] TESOURA
[3] PAPEL
4
```

```shell
-------------------
     Jankenpon
-------------------
ATENÇÃO: JOGADA ERRADA!
Digite um valor válido!
[1] PEDRA
[2] TESOURA
[3] PAPEL
1
```

O próximo passo agora é atribuir um valor entre 1 e 3 a variável __cpuPlay__ que será a jogada do computador. Para isto, vamos importar a function `getRandomIntInclusive()` passando como parâmetro os valores 1 e 3:

```js
cpuPlay = basicFunctions.getRandomIntInclusive(1, 3);
```

Agora vamos apresentar apenas um `console.log()` para ver que está funcionando até agora:

```js
console.log(`${humanPlay}`);
console.log(`${cpuPlay}`);
```

No console:

```shell
1
2
```

O próximo passo será criar uma function `playerChoice( ) que mostrará a escolha de cada jogador. Ela recebe como parâmetro um número, que é a escolha de cada jogador (__humanPlay__ e __cpuPlay__) e retorna __pedra__, __papel__ ou __tesoura__ de acordo com a escolha de cada jogada. Logo, em declaração de funções:

```js
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
```

Vamos criar a parte de saída de dados. Logo, vamos deletar os `console.log()` que mostrava a jogada de cada jogador. Depois vamos limpar a tela, mostrar o __header__ e a mensagem __PLACAR PARCIAL:__. Abaixo vamos exibir o que cada jogador escolheu, chamando a function `playerChoice()`:

```js
//saída de dados
console.clear();
basicFunctions.header("Jankenpon");
console.log("PLACAR PARCIAL: ");
console.log(`${userName} : ${playerChoice(userPlay)} x ${playerChoice(cpuPlay)} : CPU`);
basicFunctions.line("Jankenpon");
```

No console:

```shell
-------------------
     Jankenpon
-------------------
PLACAR PARCIAL: 
THIAGO : Papel x Pedra : CPU
-------------------
```

Agora, nesta parte, vamos declarar as variáveis para guardar o resultado de cada jogador, de empate e o vencedor da partida, logo, em declaração de variáveis:

```js
//declaração de variáveis
let userName = ``;
let userPlay = 0;
let cpuPlay = 0;
let userScore = 0;
let cpuScore = 0;
let tieScore = 0;
let partialWinner = "";
```

A próxima etapa será criar a parte de processamento de dados. Nela, vamos atribuir a variável __partialWinner__ o vencedor da partida, através do retorno da function `winnerCalculation()` que também vamos criar. Esta function recebe como parâmetro as escolhas de cada jogador. Logo, em processamento de dados:

```js
//processamento de dados
partialWinner = winnerCalculation(userPlay, cpuPlay);
```

Em declaração de variáveis vamos colocar a function `winnerCalculation()` recebendo como parâmetro as escolha de cada jogador e retornando o vencedor. Caso seja o usuário, retorna o nome do mesmo e se for o computador, retorna "CPU":

```js
const winnerCalculation = (userPlay, cpuPlay) => {

    let winner = ""
  
    if ( userPlay == 1 && cpuPlay == 3 ) {
      winner = userName;
    } else if (userPlay == 3 && cpuPlay == 2 ) {
      winner = userName;
    } else if ( userPlay == 2 && cpuPlay == 1 ) {
      winner = userName;
    } else if( cpuPlay == 1 && userPlay == 3 ) {
      winner = "CPU";
    } else if ( cpuPlay == 3 && userPlay == 2 ) {
      winner = "CPU";
    } else if ( cpuPlay == 2 && userPlay == 1 ) {
      winner = "CPU";
    } else if ( cpuPlay == userPlay) {
      winner = "Empate";
    }
  
    return winner
  }
```

Em saída de dados, vamos mostrar o vencedor da partida:

```js
//saída de dados
console.clear();
basicFunctions.header("Jankenpon");
console.log("PLACAR PARCIAL: ");
console.log(`${userName} : ${playerChoice(userPlay)} x ${playerChoice(cpuPlay)} : CPU`);
console.log(`Vencedor da partida: ${partialWinner}`)
basicFunctions.line("Jankenpon");
```

No console:

```shell
-------------------
     Jankenpon
-------------------
PLACAR PARCIAL: 
THIAGO : Tesoura x Pedra : CPU
Vencedor da partida: CPU
-------------------
```

Vamos aproveitar a function `winnerCalculation()` para adicionar a pontuação de cada jogador ou do empate. Logo, as variáveis __userScore__, __cpuScore__ e __tieScore__ serão incrementadas de acordo com a escolha de cada jogador. Na function `winnerCalculation()`:

```js
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
  }
```

Após isso, em saída de dados, vamos mostrar a pontuação de cada jogador até então e a quantidade de empates:

```js
//saída de dados
console.clear();
basicFunctions.header("Jankenpon");
console.log("PLACAR PARCIAL: ");
console.log(`${userName} : ${playerChoice(userPlay)} x ${playerChoice(cpuPlay)} : CPU`);
console.log(`Vencedor da partida: ${partialWinner}`);
console.log(`${userName} ${userScore} x ${cpuScore} CPU`);
console.log(`Empates: ${tieScore}`);
basicFunctions.line("Jankenpon");
```

No console:

```shell
-------------------
     Jankenpon
-------------------
PLACAR PARCIAL: 
THIAGO : Papel x Papel : CPU
Vencedor da partida: Empate
THIAGO 0 x 0 CPU
Empates: 1
-------------------
```

Nossa aplicação já está quase finalizada, mas você deve ter notado que ela é executada uma única vez. O que queremos é que ela realize várias partidas, de acordo com a escolha do usuário. Vamos criar a function `playAgainMenu()` que será um menu que vai perguntar para o usuário se ele quer continuar com o jogo ou não. Em declaração de funções:

```js
const playAgainMenu = () => {
  console.log("Jogar mais uma vez? ");
  console.log("[s] para sim");
  console.log("[n] para não");
};
```

Agora, vamos criar a variável __playAgain__ que vai receber a resposta da function `validateAnswer()`. Esta function validará a resposta do usuário, que só poderá digira __"s"__ ou __"n"__. Caso, ele digite qualquer outra resposta diferente, uma mensagem de erro deve ser apresentada e deverá ser solicitado ao usuário responder se quer continuar o jogo.

Em declaração de variáveis:

```js
//declaração de variáveis
let userName = ``;
let userPlay = 0;
let cpuPlay = 0;
let userScore = 0;
let cpuScore = 0;
let tieScore = 0;
let partialWinner = "";
let playAgain = 0;
```

Logo após a saída de dados, vamos chamar a function `playAgainMenu()` e a variável __playAgain__ recebendo o retorno da function `validateAnswer()`:

```js
 playAgainMenu();
 playAgain = validateAnswer();
```

Em declaração de funções, vamos criar a function `validateAnswer()`:

```js
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
```

Agora, para o o programa repetir ou não, vamos colocar uma parte do programa dentro de um __do...while__.

```js
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

  //saída de dados
  console.clear();
  basicFunctions.header("Jankenpon");
  console.log("PLACAR PARCIAL: ");
  console.log(`${userName} : ${playerChoice(userPlay)} x ${playerChoice(cpuPlay)} : CPU`);
  console.log(`Vencedor da partida: ${partialWinner}`);
  console.log(`${userName} ${userScore} x ${cpuScore} CPU`);
  console.log(`Empates: ${tieScore}`);
  basicFunctions.line("Jankenpon");

  playAgainMenu();
  playAgain = validateAnswer();

} while ( playAgain != "n");
```

Agora o programa irá funcionar quantas vezes o usuário escolher a resposta __"s"__. No console:

```shell
-------------------
     Jankenpon
-------------------
THIAGO escolha sua jogada: 
[1] PEDRA
[2] PAPEL
[3] TESOURA
1
```

```shell
-------------------
     Jankenpon
-------------------
PLACAR PARCIAL: 
THIAGO : Pedra x Pedra : CPU
Vencedor da partida: Empate
THIAGO 0 x 0 CPU
Empates: 1
-------------------
Jogar mais uma vez? 
[s] para sim
[n] para não
s
```

```shell
-------------------
     Jankenpon
-------------------
THIAGO escolha sua jogada: 
[1] PEDRA
[2] PAPEL
[3] TESOURA
2
```

```shell
-------------------
     Jankenpon
-------------------
PLACAR PARCIAL: 
THIAGO : Papel x Tesoura : CPU
Vencedor da partida: CPU
THIAGO 0 x 1 CPU
Empates: 1
-------------------
Jogar mais uma vez? 
[s] para sim
[n] para não
v
```

```shell
-------------------
     Jankenpon
-------------------
ATENÇÃO: JOGADA ERRADA!
Digite um valor válido!
Jogar mais uma vez? 
[s] para sim
[n] para não
n
```

Agora que o sistema de repetição está funcionando, vamos declarar a variável __matchCounter__ que será o contador de partidas:

```js
//declaração de variáveis
let userName = ``;
let userPlay = 0;
let cpuPlay = 0;
let userScore = 0;
let cpuScore = 0;
let tieScore = 0;
let partialWinner = "";
let playAgain = 0;
let matchCounter = 0;
```

Em processamento de dados __matchCounter__ é incrementado a cada partida:

```js
//processamento de dados
partialWinner = winnerCalculation(userPlay, cpuPlay);
matchCounter++;
```

Na saída de dados, vamos apresentar a quantidade de partidas:

```js
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
```

No console:

```shell
-------------------
     Jankenpon
-------------------
PLACAR PARCIAL: 
THIAGO : Pedra x Tesoura : CPU
Vencedor da partida: THIAGO
THIAGO 2 x 0 CPU
Empates: 1
Nº de partidas: 3
-------------------
Jogar mais uma vez? 
[s] para sim
[n] para não
```

Estamos chegando ao final, mas você está percebendo que após o usuário escolher __"n"__ o programa se encerra e nada é apresentado. Vamos apresentar uma saída de dados final mostrando o vencedor do jogo, o placar, a quantidade de empates e o número de partidas. Todas estas variáveis já estão criadas, exceto o vencedor do jogo. Vamos declarar a variável __winner__, em declaração de variáveis:

```js
//declaração de variáveis
let userName = ``;
let userPlay = 0;
let cpuPlay = 0;
let userScore = 0;
let cpuScore = 0;
let tieScore = 0;
let partialWinner = "";
let playAgain = 0;
let matchCounter = 0;
let winner = "";
```

Para determinar o vencedor do jogo, vamos criar a function `gameWinner()`. Esta function receber como parâmetro os pontos de cada jogador e retorna o vencedor ou se o jogo foi empate. Logo, em declaração de funções:

```js
const gameWinner = (userScore, cpuScore) => {

  if (userScore > cpuScore) {
    return `${userName} VENCEDOR(A)!`
  } else if (userScore < cpuScore) {
    return "CPU VENCEDOR!";
  } else {
    return "JOGO EMPATADO!";
  };
};
```

Agora, após a estrutura de repetição __do...while__ vamos criar a ultima saída de dados, com as variáveis citadas acima:

```js
basicFunctions.loading();
console.clear();
basicFunctions.header("Jankenpon");
console.log("RESULTADO FINAL: ");
console.log(`${winner}`);
console.log(`${userName} ${userScore} x ${cpuScore} CPU`);
console.log(`Empates: ${tieScore}`);
console.log(`Nº de partidas: ${matchCounter}`);
basicFunctions.line("Jankenpon");
```

No console:

```shell
-------------------
     Jankenpon
-------------------
RESULTADO FINAL: 
CPU VENCEDOR!
THIAGO 0 x 1 CPU
Empates: 0
Nº de partidas: 1
-------------------
```

Finalizamos nossa aplicação. Abaixo vamos colocar o código completo para você conferir se tudo está de acordo:

```js
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
let userPlay = 0;
let cpuPlay = 0;
let userScore = 0;
let cpuScore = 0;
let tieScore = 0;
let partialWinner = "";
let playAgain = 0;
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

basicFunctions.loading();
console.clear();
basicFunctions.header("Jankenpon");
console.log("RESULTADO FINAL: ");
console.log(`${winner}`);
console.log(`${userName} ${userScore} x ${cpuScore} CPU`);
console.log(`Empates: ${tieScore}`);
console.log(`Nº de partidas: ${matchCounter}`);
basicFunctions.line("Jankenpon");
```

Chegamos ao final, espero que você tenha gostado desse desafio. Vamos para o próximo.

## 8. Password Generator with fromCharCode( )

Esta próxima aplicação, será um gerador de senhas seguras. Todos nós já ouvimos casos de pessoas que tiveram suas redes sociais, e-mail's e outras aplicações usadas no dia-a-dia hackeadas. Para se evitar esse tipo de situação, colocar senhas seguras já é um bom começo. Uma senha segura é caracteriza por conter no mínimo de 8 caracteres, letras maiúsculas e minúsculas, números e símbolos.

Esta será a nossa finalidade, criar um algoritmo que nos constitua uma senha segura.

Vamos começar criando o nosso arquivo __passwordGenerator.js__.

Começamos importando a nossa variável __input__:

```js
var input = require('readline-sync');
```

Vamos também criar o objeto __basicFunctions__ para importar algumas funções de __basicFunctions.js__:

```js
const { basicFunctions } = require('./basicFunctions');
```

Vamos colocar o nosso cabeçalho chamando a function `header()` e passando como parâmetro __passwordGenerator__:

```js
basicFunctions.header("passwordGenerator");
```

Executando o programa, no console:

```shell
-----------------------------------
         passwordGenerator
-----------------------------------
```

Nesta aplicação, o usuário só precisará informar a quantidade de caracteres que a senha terá, logo, vamos criar a variável que receberá esta quantidade. Em declaração de variáveis e entrada de dados:

```js
var input = require('readline-sync');

const { basicFunctions } = require('./basicFunctions');

//declaração de variáveis
let numberOfCharacters = 0;

//entrada de dados
basicFunctions.header("passwordGenerator");
numberOfCharacters = input.question("Digite o número de caracteres: ");
```

No console:

```shell
-----------------------------------
         passwordGenerator
-----------------------------------
Digite o número de caracteres: 8
```

Acontece que precisamos validar esse valor que o usuário está digitando. Primeiro validar se realmente é um número e em seguida, se um número foi digitado, saber se a quantidade de caracteres que o usuário digitou vai gerar uma senha segura.

Para validar se realmente o usuário digitou um número, vamos criar a variável __itsNumber__ que terá como valor booleano `false`.

```js
//declaração de variáveis
let numberOfCharacters = 0;
let itsNumber = false;
```

Em processamento de dados, __itsNumber__ recebe o retorno da function `isRegularExpression()`

```js
//processamento de dados
itsNumber = isRegularExpression(numberOfCharacters, RegExpNumber);
```

Ainda em declaração de variáveis, vamos criar a variável __RegExpNumber__, que será atribuída com uma [Expressão Regular](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions) que procura por números, equivalente a [0-9]:

```js
//declaração de variáveis
let numberOfCharacters = 0;
let itsNumber = false;
let RegExpNumber = /\d/gi;
```

Agora sim, podemos criar a parte de declaração de funções, onde começaremos com a function `isRegularExpression()`. Esta function recebe uma string e uma expressão regular como parâmetros e retorna __true__  caso dentro da string seja encontrada o padrão passado na expressão regular ou __false__, caso não seja encontrado. Para isto, vamos usar o método [`RegExp.prototype.test()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test),  que executa uma busca por uma correspondência entre uma expressão regular e uma string. Retorna `true` ou `false`. Logo, em declaração de funções:

```js
//declaração de funções
function isRegularExpression(stringValue, regex){
    return regex.test(stringValue) ? true : false
}
```

Em saída de dados, vamos mostrar apenas a __itsNumber__:

```js
//saída de dados
console.log(itsNumber);
```

Vamos mostrar o programa todo até o momento e depois realizar alguns testes.

```js
var input = require('readline-sync');

const { basicFunctions } = require('./basicFunctions');

//declaração de funções
function isRegularExpression(stringValue, regex){
    return regex.test(stringValue) ? true : false
  }

//declaração de variáveis
let numberOfCharacters = 0;
let itsNumber = false;
let RegExpNumber = /\d/gi;

//entrada de dados
basicFunctions.header("passwordGenerator");
numberOfCharacters = input.question("Digite o número de caracteres: ");

//processamento de dados
itsNumber = isRegularExpression(numberOfCharacters, RegExpNumber);

//saída de dados
console.log(itsNumber);
```

No console:

```shell
-----------------------------------
         passwordGenerator
-----------------------------------
Digite o número de caracteres: 8
true
```

```shell
-----------------------------------
         passwordGenerator
-----------------------------------
Digite o número de caracteres: h
false
```

Até agora, podemos ver que a function `isRegularExpression()` está funcionando perfeitamente. 

O próximo passo, será criar uma estrutura de repetição para solicitar do usuário digitar o valor  correto, caso ele não digite um número. Vamor criar a function `errorMessage()` que vai apresentar uma mensagem de erro para um valor inválido:

```js
function errorMessage(){
    console.log("[ERROR]: Digite um valor válido!");
};
```

Sempre que o usuário digitar qualquer valor que não seja um número, deverá aparecer a mensagem de erro e solicitado para o usuário inserir um valor correto, no caso, um número. logo, em processamento de dados:

```js
//processamento de dados
itsNumber = isRegularExpression(numberOfCharacters, RegExpNumber);

while (!itsNumber) {
    console.clear();
    basicFunctions.header("passwordGenerator");
    errorMessage();
    numberOfCharacters = input.question("Digite o número de caracteres: ");
    itsNumber = isRegularExpression(numberOfCharacters, RegExpNumber);
};
```

Por enquanto, vamos imprimir o valor digitado pelo usuário e a variável __itsNumber__:

```js
//saída de dados
console.clear();
basicFunctions.header("passwordGenerator");
console.log(numberOfCharacters);
console.log(itsNumber);
basicFunctions.line("passwordGenerator");
```

No console:

```shell
-----------------------------------
         passwordGenerator
-----------------------------------
Digite o número de caracteres: j
```

```shell
-----------------------------------
         passwordGenerator
-----------------------------------
[ERROR]: Digite um valor válido!
Digite o número de caracteres: 8
```

```shell
-----------------------------------
         passwordGenerator
-----------------------------------
8
true
-----------------------------------
```

number Of Characters Typed - número de caracteres digitados













