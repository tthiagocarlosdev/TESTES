# Aplicações Aleatórias

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

## 6. function load() with method getTime()

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

## 7. jokenpo

Vamos começar adicionando a function `loading()` dentro do objeto __basicFunctions__:

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
}

module.exports = {
    basicFunctions
}
```















