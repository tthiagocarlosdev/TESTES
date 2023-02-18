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

## 3. Export e Import

Vamos criar um arquivo para colocar as nossa functions de __cabeçalho__ e __rodape/linha__ e depois exportá-las e importá-las nas próximas aplicações.

- Crie um arquivo com o nome __headerBaseboardFuctions.js__;
- Dentro do arquivo vamos criar a variável __headerBaseboardFunctions__ onde será armazenado as functions:

```js
const headerBaseboardFunctions = {
    
}
```

- Dentro desta variável, vamos colocar as functions `header()` e `line()`:

```js
const headerBaseboardFunctions = {
    
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

- Ao final vamos exportar a variável __headerBaseboardFunctions__:

```js
const headerBaseboardFunctions = {
    
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
    headerBaseboardFunctions
}
```

- Na próxima aplicação vamos importar  a const __headerBaseboardFunctions__

```js
const { headerBaseboardFunctions } = require('./headerBaseboardFunctions') 
```

- Para executar alguma function, basta chamar a const __headerBaseboardFunctions__ com o nome da function que quer executar:

```js
headerBaseboardFunctions.header("headerBaseboardFunctions")
```

No console:

```shell
-------------------------------------------------
            headerBaseboardFunctions
-------------------------------------------------
```

Na próxima aplicação, vamos trabalhar bastante __export__ e __import__.

PAREI AQUI [clique](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)

## 4. Math.random( )

O `Math.random()` é uma function que retorna um número pseudo-aleatório no intervalo `[0, 1[`, ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo), que depois você pode dimensionar para um intervalo desejado. 

Você pode verificar a documentação em [math-random](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

- ### Sintaxe:

```js
Math.random()
```

- ### Valor retornado

Um número pseudo-aleatório entre 0 (inclusivo) e 1 (exclusivo).

- ### Exemplos:

  - ### [Gerando um número aleatório entre 0 (inclusivo) e 1 (exclusivo)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random#gerando_um_número_aleatório_entre_0_inclusivo_e_1_exclusivo)