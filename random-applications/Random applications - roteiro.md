# Random applications - roteiro

### 1. header( );

### 2. line( );

### 3. loading( );

### 4. getRandomIntInclusive( );

### 5. NodeJS - module.export e require( );

### 6. Math.random( )

### 7. snake_case with replace( )

### 8. function loading( ) with method getTime( );

### 9. Jankenpon( ) with arrow functions;

### 10. Password Generator with fromCharCode( )...



## 1. header( )

Introdução:
- Comece o vídeo explicando que o código é uma função em JavaScript que cria um cabeçalho para uma aplicação.

  ```shell
  ---------------------------------------
            título da aplicação
  ---------------------------------------
  ```

Passo 1: Variáveis

- Explique que a função recebe um argumento chamado 'text', que é o texto que será exibido no cabeçalho.

    ```js
    function header(text) {
    }
    ```

- Mostre as variáveis que são declaradas dentro da função:

    ```js
    function header(text) {
      let textSize = text.length;
      let lineSize = textSize * 2;
      let spaceSize = Math.ceil(textSize / 2)
      let textWithSpace = ""
    }
    ```

    - 'textSize': recebe o tamanho do texto passado como argumento.
    - 'lineSize': é o dobro do tamanho do texto, e será usado para criar a linha horizontal que fica acima e abaixo do cabeçalho.
    - 'spaceSize': é o tamanho necessário para centralizar o texto na linha do cabeçalho. É calculado dividindo o tamanho do texto por dois e arredondando para cima.
    - 'textWithSpace': é uma string vazia que será usada para criar a linha do cabeçalho com o texto centralizado.

Passo 2: Laço 'for'

```js
  for (let index = 0; index <= spaceSize; index++) {
    if (index < spaceSize) {
      textWithSpace += " "
    } else if (index == spaceSize) {
      textWithSpace += text
    }
  }
```

- Explique que a variável 'textWithSpace' é preenchida com espaços em branco no começo, para que o texto fique centralizado na linha do cabeçalho.
- Mostre o laço 'for' que é usado para preencher a string 'textWithSpace':
    - O laço começa em 0 e vai até 'spaceSize'.
    - Se o índice é menor do que 'spaceSize', adiciona um espaço em branco na string 'textWithSpace'.
    - Se o índice é igual a 'spaceSize', adiciona o texto passado como argumento na string 'textWithSpace'.

Passo 3: Função 'line()'

```js
  function line() {
    let line = ""

    for (let index = 0; index <= lineSize; index++) {
      line += "-"
    }

    console.log(line)
  }
```

- Explique que a função 'line()' é usada para criar a linha horizontal que fica acima e abaixo do cabeçalho.

- Mostre a função 'line()':
    - A variável 'line' é uma string vazia.
    
    - O laço 'for' é usado para preencher a string 'line' com caracteres '-', até que a string tenha o tamanho 'lineSize'.
    
    - A função 'console.log' é usada para imprimir a string 'line' no console.
    
      ```js
      line()
      console.log(textWithSpace)
      line()
      ```

Passo 4: Chamada da função
- Explique que a função 'header()' é chamada no final do código, passando o argumento "título da aplicação".

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
    
    header("título da aplicação")
    ```

- Mostre a saída que é impressa no console:
    - A linha horizontal é criada pela função 'line()'.
    
    - A linha do cabeçalho é criada pela variável 'textWithSpace'.
    
    - A linha horizontal é criada novamente pela função 'line()'.
    
      ```shell
      ---------------------------------------
                título da aplicação
      ---------------------------------------
      ```

Conclusão:
- Conclua o vídeo resumindo o que foi explicado e como o código funciona.
- Encoraje o espectador a experimentar o código e personalizar o cabeçalho de acordo com suas necessidades.



## 2. line( );

Introdução:
- Comece o vídeo explicando que o código é uma função em JavaScript que cria uma linha horizontal de caracteres "-".

  ```shell
  ---------------------------------------
  ```

Passo 1: Variáveis
- Explique que a função recebe um argumento chamado 'text', que é uma string que pode ser usada para identificar ou rotular a linha.

    ```js
    function line(text){
    }
    ```

- Mostre as variáveis que são declaradas dentro da função:
  
    ```js
    function line(text){
        let textSize = text.length;
        let lineSize = textSize * 2;
        let line = ""
      }
    ```
    
    - 'textSize': recebe o tamanho da string passada como argumento.
    - 'lineSize': é o dobro do tamanho da string, e será usado para determinar o tamanho da linha horizontal que será criada.
    - 'line': é uma string vazia que será usada para criar a linha horizontal com caracteres "-".

Passo 2: Laço 'for'

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

- Mostre o laço 'for' que é usado para preencher a string 'line' com caracteres '-':
    - O laço começa em 0 e vai até 'lineSize'.
    - A cada iteração do laço, o caractere '-' é adicionado à string 'line'.

Passo 3: Função 'console.log'
- Explique que a função 'console.log' é usada para imprimir a linha horizontal no console.

- Mostre a chamada da função 'console.log' com a string 'line' como argumento.

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
  ```

Passo 4: Chamada da função
- Explique que a função 'line()' é chamada no final do código, passando o argumento "título da aplicação".

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

- Mostre a saída que é impressa no console:
    - Uma linha horizontal é criada com caracteres '-'.
    
    - A string passada como argumento não é usada para criar a linha, mas pode ser usada para identificá-la.
    
      ```shell
      ---------------------------------------
      ```

Conclusão:
- Conclua o vídeo resumindo o que foi explicado e como o código funciona.
- Encoraje o espectador a experimentar o código e personalizar a linha horizontal de acordo com suas necessidades, usando diferentes caracteres ou tamanhos.



## 3. loading( )

Introdução:
- Comece o vídeo explicando que o código é uma função em JavaScript que cria uma animação de carregamento de conteúdo.

  ```shell
  loading .... 20%
  loading ........ 40%
  loading ............ 60%
  loading ................ 80%
  loading .................... 100%
  ```

  ```js
  function loading(){
  }
  ```

Passo 1: Função 'syncDelay'
- Explique que a função 'syncDelay' é uma função auxiliar que introduz um atraso controlado na execução do código.

- Mostre a função 'syncDelay' e explique como ela funciona:
    - Recebe um argumento 'milliseconds', que é a quantidade de tempo em milissegundos que a função deve esperar antes de continuar a execução.
    
    - Usa um laço 'while' para aguardar até que o tempo especificado tenha passado antes de continuar a execução.
    
    - A cada iteração do laço, o tempo atual é comparado com o tempo de início e, quando o tempo especificado é atingido, a função é interrompida e a execução continua.
    
      ```js
          function syncDelay(milliseconds){
            let start = new Date().getTime();
            let end=0;
            while( (end-start) < milliseconds){
                end = new Date().getTime();
            }
           }  
      ```

Passo 2: Variáveis
- Mostre as variáveis declaradas dentro da função 'loading':
  
    ```js
        let toLoad = `....`
        let percentage = 20
    ```
    
    - 'toLoad': é uma string que contém uma sequência de pontos que serão usados para representar visualmente o progresso do carregamento.
    - 'percentage': é uma variável que controla o progresso do carregamento e é inicializada com o valor 20%.

Passo 3: Laço 'while'

```js
    while (percentage <= 100) {
        console.clear()
        console.log(`loading ${toLoad} ${percentage}%`)
        syncDelay(1000);
        toLoad += `....`
        percentage += 20
    }
```

- Explique que o código usa um laço 'while' para simular o carregamento do conteúdo.
- Mostre o laço 'while' e explique como ele funciona:
    - O laço continua enquanto o valor da variável 'percentage' é menor ou igual a 100.
    - A cada iteração do laço, o console é limpo (com a função 'console.clear()') e é exibida uma mensagem de carregamento que inclui a sequência de pontos 'toLoad' e o percentual completo do carregamento 'percentage'.
    - É introduzido um atraso de 1 segundo usando a função auxiliar 'syncDelay'.
    - A sequência de pontos 'toLoad' é atualizada com mais pontos (usando a atribuição '+=') para simular o progresso do carregamento.
    - O valor da variável 'percentage' é atualizado em 20% a cada iteração para simular o progresso do carregamento.

Passo 4: Chamada da função

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

- Explique que a função 'loading()' é chamada no final do código para iniciar a animação de carregamento.

- Mostre a saída que é impressa no console:
  
    ```shell
    loading .... 20%
    loading ........ 40%
    loading ............ 60%
    loading ................ 80%
    loading .................... 100%
    ```
    
    - A mensagem de carregamento é atualizada a cada iteração do laço 'while' para simular o progresso do carregamento.
    - Quando o valor da variável 'percentage' atinge 100%, a animação de carregamento termina.

Conclusão:
- Conclua o vídeo resumindo o que foi explicado e como o código funciona.
- Encoraje o espectador a experimentar o código e personalizar a animação de carregamento de acordo com suas necessidades, alterando a sequência de pontos ou o tempo de atraso.



## 4. getRandomIntInclusive( );

Introdução:

- Comece o vídeo explicando que o código é uma função em JavaScript que gera um número inteiro aleatório entre dois valores passados como parâmetro para a função.

```shell
Número inteiro aleatório entre dois valores, inclusive
4
```

Passo 1: Declaração da função

- A primeira linha do código declara a função "getRandomIntInclusive", que recebe dois parâmetros: "min" e "max".

```js
function getRandomIntInclusive(min, max) {
}
```

Passo 2: Arredondamento dos parâmetros

- Dentro da função, as variáveis "min" e "max" são arredondadas para cima e para baixo, respectivamente, usando os métodos Math.ceil e Math.floor.
- Math.ceil(min): A função Math.ceil() arredonda um número para cima para o inteiro mais próximo. Neste caso, estamos arredondando "min" para cima para garantir que o valor mínimo seja um número inteiro.
- Math.floor(max): A função Math.floor() arredonda um número para baixo para o inteiro mais próximo. Neste caso, estamos arredondando "max" para baixo para garantir que o valor máximo seja um número inteiro.

Passo 3: Cálculo e retorno do número aleatório

- Em seguida, a função usa a função Math.random para gerar um número aleatório entre 0 e 1, que é multiplicado pela diferença entre "max" e "min" acrescido de 1. Em seguida, o resultado é arredondado para baixo com a função Math.floor e o valor mínimo é adicionado ao resultado para obter um número aleatório entre "min" e "max". Esse número é então retornado pela função.

```js
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

- Explique que a função 'loading()' é chamada no final do código para executar a função getRandomIntInclusive(1, 10).

- Mostre a saída que é impressa no console:

  ```sh
  Número inteiro aleatório entre dois valores, inclusive
  4
  ```

Conclusão:

- Conclua o vídeo resumindo o que foi explicado e como o código funciona.
- Encoraje o espectador a experimentar o código e personalizar a animação de carregamento de acordo com suas necessidades, alterando a sequência de pontos ou o tempo de atraso.
- E é assim que funciona a função para gerar um número inteiro aleatório entre dois valores. Espero que este vídeo tenha sido útil e se você tiver alguma dúvida, não hesite em deixar um comentário abaixo. Obrigado por assistir!



## 5. NodeJS - module.export e require( );

Claro, aqui está um roteiro para explicar esse código:

```js
const basicFunctions = {

}

module.exports = {
  basicFunctions
}
```

Introdução:
- Explicar o objetivo do código: criar um objeto com funções básicas e exportá-lo para ser utilizado em outros arquivos.
- Fazer uma breve introdução sobre o que é um objeto em JavaScript.
  - Um objeto é uma estrutura de dados que permite armazenar e organizar valores. Ele pode armazenar dados em forma de propriedades, que são pares chave-valor, e pode ter métodos, que são funções associadas ao objeto


Passo 1: Declaração do objeto
- Explicar que o código começa com a declaração do objeto "basicFunctions".

- Mostrar que esse objeto está vazio, sem nenhuma função ou propriedade.

  ```js
  const basicFunctions = {
  
  }
  ```

Passo 2: Adição de funções ao objeto
- Explicar que o objetivo do objeto é armazenar funções básicas.

- Mostrar que é possível adicionar funções ao objeto, como por exemplo a função "line" ou "loading".

- Explicar que as funções podem ser adicionadas utilizando a sintaxe "nomeDaFuncao: function() { }".

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
  ```

Passo 3: Exportação do objeto
- Explicar que, para que as funções do objeto possam ser utilizadas em outros arquivos, é necessário exportá-lo.

- Mostrar que a exportação é feita utilizando o comando "module.exports".

- Explicar que a sintaxe utilizada é "module.exports = { nomeDoObjeto }".

  ```js
  module.exports = {
    basicFunctions
  }
  ```

Conclusão:
- Recapitular os pontos principais do vídeo: a declaração do objeto, a adição de funções ao objeto e a exportação do objeto.
- Reforçar a importância de entender objetos em JavaScript e como eles podem ser utilizados para organizar e reutilizar código em diferentes partes de uma aplicação.

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



## 6. Math.random( )

O `Math.random()` é uma function que retorna um número pseudo-aleatório no intervalo `[0, 1[`, ou seja, de 0 (inclusivo) até, mas não incluindo 1 (exclusivo), que depois você pode dimensionar para um intervalo desejado.

Você pode verificar a documentação em [math-random](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

- ### Sintaxe:

```js
Math.random()
```

- ### Valor retornado

Um número pseudo-aleatório entre 0 (inclusivo) e 1 (exclusivo).

Vamos criar nosso arquivo **generateRandomNumbers.js** onde vamos executar o `Math.random()`. Dentro deste arquivo vamos importar através do **require** o objeto **headerBaseboardFunctions**:

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

Este exemplo retorna um número entre dois valores definidos. O valor retornado será **maior** ou **igual** a `min`, e **menor** que `max`.

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

Este exemplo retorna um número *inteiro* entre dois valores definidos. O valor não poderá ser **menor** que `min` (ou do próximo inteiro maior que `min`, caso `min` **não seja inteiro**), e será menor (mas não igual) a `max`. A função `getRandomInt()` tem intervalo com o valor **mínimo incluído** e o **máximo excluído**.

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

```sh
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

## 

## 7. snake_case with replace( )

Introdução:

O código em questão implementa uma função em JavaScript chamada snakeCase que recebe uma string como entrada e retorna um objeto com duas informações: a string em snake_case e o tamanho da nova string. O código também usa algumas funções auxiliares definidas em um arquivo separado chamado basicFunctions.js. 

Passo 1: Importação de bibliotecas e definição de variáveis e funções

- A primeira linha do código importa a biblioteca readline-sync que permite a entrada de dados pelo usuário via linha de comando. 

```js
var input = require('readline-sync');
```

- A segunda linha importa as funções definidas no arquivo basicFunctions.js:

```js
const { basicFunctions } = require('./basicFunctions')
```

A terceira linha define uma função chamada snakeCase que recebe uma string como entrada e retorna um objeto com duas informações. A função não é executada nesta etapa.

```js
//function declaration
function snakeCase(text){...}
```

Passo 2: Declaração de variáveis:

- São declaradas duas variáveis, 'inserted_text' que vai receber o texto digitado pelo usuário e o objeto 'text_information'  que vai receber o retorno da function 'snakeCase()' com o texto no formato snake_case e a quantidade de caracteres:

```js
//variable declaration
let inserted_text = "";
let text_information = {};
```

Passo 3: Entrada de dados e chamada da função

- Na entrada chamamos a function 'header()' do arquivo 'basicFunctions' e passamos como parâmetro o título da nossa aplicação;
- Em seguinda, o código pede ao usuário que insira um texto. O texto inserido pelo usuário é armazenado em 'inserted_text' e em processamento de dados a função 'snakeCase()' é chamada com essa variável como parâmetro:

```js
//data input
basicFunctions.header("snake_case")
inserted_text = input.question("Enter the text: ")

//data processing
text_information = snakeCase(inserted_text)
```

Passo 4: Processamento de texto

- A função 'snakeCase()' começa processando o texto passado como parâmetro que é a entrada do usuário;
- Ela substitui todos os espaços em branco na string por underlines usando o método 'replace()':

```js
function snakeCase(text){
    let underlined_text = text.replace(/ /gi, '_')  
}
```

- Em seguida armazena o tamanho do texto na variável 'input_text_size' usando o método '.length':

```js
function snakeCase(text){
    let underlined_text = text.replace(/ /gi, '_')
    let input_text_size = underlined_text.length
}
```

- Na linha seguinte, ela cria um array que vai receber todos os caracteres da nova string e iterar sobre cada um dos caracteres:

```js
function snakeCase(text){
    let underlined_text = text.replace(/ /gi, '_')
    let input_text_size = underlined_text.length
    let array_without_accent = []
}
```

- Ainda neste início da função, ela cria objeto 'textData' que vai receber a nova string em snake_case e seu tamanho e irá retornar esse objeto:

```js
function snakeCase(text){
    let underlined_text = text.replace(/ /gi, '_')
    let input_text_size = underlined_text.length
    let array_without_accent = []
    let textData = {
      text_snake_case: "",
      output_text_size: 0,
    }
}
```

- Extraindo cada caracter da string. Aqui usando o método split, cada caracter vai ser um item do array/lista:

```js
array_without_accent = underlined_text.split('')
```

Se der um 'console.log(array_without_accent)' veja como fica:

```shell
[
  'T', 'e', 'x', 't', 'o',
  '_', 'e', 'x', 'e', 'm',
  'p', 'l', 'o', '_', 'd',
  'e', '_', 'f', 'u', 'n',
  'ç', 'ã', 'o'
]
```

Parei

- Para cada caractere, ela verifica se ele é um número, letra maiúscula, letra minúscula, underline ou um caractere especial.

Passo 3: Processamento de caracteres especiais
Em seguida, a função verifica cada caractere especial encontrado e o substitui por outro caractere equivalente. Por exemplo, se a função encontra um caractere acentuado como "é", ela o substitui por "e". Se encontrar um caractere "ç", ele é substituído por "c". Se encontrar um caractere especial, ele é simplesmente removido da string.

Passo 4: Criação de nova string
Após o processamento de todos os caracteres, a função cria uma nova string a partir do array de caracteres, unindo-os novamente com underlines e convertendo tudo para letras minúsculas.



Passo 5: Criação de objeto de saída

Passo 7: Exibição dos resultados
A função retorna um objeto contendo a nova string em snake_case e seu tamanho, que são armazenados em uma variável. Em seguida, o código exibe essas informações na tela, utilizando as funções definidas no arquivo basicFunctions.js para formatar a saída.

Conclusão:
O código implementa uma função em JavaScript que converte uma string em snake_case, substituindo espaços e caracteres especiais por underlines e removendo acentos. Ele também permite que o usuário insira um texto via linha de comando e exibe a string em snake_case e seu tamanho na tela.













