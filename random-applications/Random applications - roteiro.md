# Random applications - roteiro

### 1. header( );

### 2. line( );

### 3. loading( );

### 4. getRandomIntInclusive( );

### 5. NodeJS - module.export e require( );

### 6. basicFunctions

### 7. snake_case with replace( )

### 8. Jankenpon( ) with arrow functions;

### 9. Fibonacci até número x

### 10. Password Generator with fromCharCode( )...



## 1. header( )

### - Introdução:

- Olá pessoas, sejam bem-vindas ao meu canal, meu nome é Thiago e esse é o canal Thiago Carlos Dev. Hoje iniciamos essa sequência de aplicações aleatórias usando JavaScript e NodeJS;
- Essa sequência está bem legal, são aplicações que eu fui construíndo a medida que fui estudando e aprendendo lógica e algoritmos;
- Não esqueça de deixar o seu like no vídeo, comentar e compartihar com os amigos que estão estudando lógica e algoritmos;
- Vamos construir a função `header()`. Ela cria um cabeçalho estilizado no console, exibindo uma linha horizontal acima e abaixo do texto do cabeçalho, e centralizando o texto com base no tamanho do título da aplicação.

```shell
---------------------------------------
          título da aplicação
---------------------------------------
```

### - Passo 1: Declaração de variáveis

- A função recebe um argumento chamado 'text', que é o título da aplicação que será exibido no cabeçalho.

    ```js
    function header(text) {
    }
    ```

- Variáveis que são declaradas dentro da função:

    ```js
    function header(text) {
      let textSize = text.length;
      let lineSize = textSize * 2;
      let spaceSize = Math.ceil(textSize / 2)
      let textWithSpace = ""
    }
    ```

    - `textSize`: recebe o tamanho do texto passado como argumento usando a propriedade .[`length`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length)
    - `lineSize`: recebe o dobro do tamanho do texto, e será usado para criar a linha horizontal que fica acima e abaixo do cabeçalho.
    - `spaceSize`: é o tamanho necessário para centralizar o texto na linha do cabeçalho. É calculado dividindo o tamanho do texto por dois e arredondando para cima, usando a função [`Math.ceil()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil).
    - `textWithSpace`: é uma string vazia que será usada para criar a linha do cabeçalho com o texto centralizado.

### - Passo 2: Laço 'for'

```js
  for (let index = 0; index <= spaceSize; index++) {
    if (index < spaceSize) {
      textWithSpace += " "
    } else if (index == spaceSize) {
      textWithSpace += text
    }
  }
```

- A variável `textWithSpace` é preenchida com espaços em branco no começo, para que o texto fique centralizado na linha do cabeçalho.
- O laço 'for' que é usado para preencher a string `textWithSpace`:
    - O laço começa em 0 e vai até `spaceSize`.
    - Se o índice é menor do que `spaceSize`, adiciona um espaço em branco na string `textWithSpace`.
    - Se o índice é igual a `spaceSize`, adiciona o texto passado como argumento na string `textWithSpace`.
    - Se o índice é maior do que `sapaceSize` o laço é encerrado e o programa segue para a próxima etapa.

### - Passo 3: Função 'line()'

```js
function line(size) {
    let line = ""

    for (let index = 0; index <= size; index++) {
      line += "-"
    }

    console.log(line)
  }
```

- A função `line()` é usada para criar a linha horizontal que fica acima e abaixo do cabeçalho. recebe como parâmetro a tamanho da linha já determinado no início da function `header()`:

    ```js
    function line(size) {
        
    }
    ```

- A variável `line` é uma string vazia que vai receber os caracteres que formarão a  linha de acordo com o tamanho do título:

    ```js
    function line(size) {
        let line = ""
      }
    ```

- O laço 'for' é usado para preencher a string `line` com caracteres `-`, até que a string tenha o tamanho `lineSize`, que é o tamanho da linha:

    ```js
    function line(size) {
        let line = ""
    
        for (let index = 0; index <= size; index++) {
          line += "-"
        }
      }
    ```

- Por último, mostramos a linha com um `console.log()`:

    ```js
    function line(size) {
        let line = ""
    
        for (let index = 0; index <= size; index++) {
          line += "-"
        }
    
        console.log(line)
      }
    ```

### - Passo 4: Mostrar o cabeçalho

- Ao final da function `header()`, vamos chamar a function `line()` e mostrar a variável `textWithSpace`que será o título centralizado entre as linhas:

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
    
      function line(size) {
        let line = ""
    
        for (let index = 0; index <= size; index++) {
          line += "-"
        }
    
        console.log(line)
      }
    
      line(lineSize)
      console.log(textWithSpace)
      line(lineSize)
    }
    ```

    ### Passo 5 - Chamando a function `header()`:

- A função `header()` é chamada no final do código, passando o argumento "título da aplicação".

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
    
      function line(size) {
        let line = ""
    
        for (let index = 0; index <= size; index++) {
          line += "-"
        }
    
        console.log(line)
      }
    
      line(lineSize)
      console.log(textWithSpace)
      line(lineSize)
    }
    
    header("título da aplicação")
    ```

- A saída que é impressa no console:
    - A linha horizontal é criada pela função `line()`.
    
    - A linha do cabeçalho é criada pela variável `textWithSpace`.
    
    - A linha horizontal é criada novamente pela função `line()`.
    
      ```shell
      ---------------------------------------
                título da aplicação
      ---------------------------------------
      ```

### - Conclusão:

- Essa foi a function `header()`, espero que tenha gostado e entendido. Experimente passar outros títulos e veja como fica no console.
- Não esqueça de deixar o seu like no vídeo, comentar e compartihar com os amigos que estão estudando lógica e algoritmos.



## 2. line( );

### - Introdução:

- Olá pessoas, sejam bem-vindas ao meu canal, meu nome é Thiago e esse é o canal [tthiagocarlosdev](https://www.youtube.com/channel/UCZN-uQtc4UDQt_tLu-I7Wpw). Hoje vamos para a segunda aplicação aleatória usando JavaScript;
- Não esqueça de deixar o seu like no vídeo, comentar e compartihar com os amigos que estão estudando lógica e algoritmos;
- Vamos constuir a função `line()`, que exibe uma linha horizontal de caracteres "-" de acordo com o tamanho do título da aplicação.

```shell
---------------------------------------
```

### - Passo 1: Variáveis

- A função recebe um argumento chamado `text`, que é uma string que pode ser usada para identificar ou rotular a linha. Essa string será o título da aplicação:

    ```js
    function line(text){
    }
    ```

- Variáveis que são declaradas dentro da função:
  
    ```js
    function line(text){
        let textSize = text.length;
        let lineSize = textSize * 2;
        let line = ""
      }
    ```
    
    - `textSize`: recebe o tamanho da string passada como argumento.
    - `lineSize`: é o dobro do tamanho da string, e será usado para determinar o tamanho da linha horizontal que será criada.
    - `line`: é uma string vazia que será usada para criar a linha horizontal com caracteres "-".

### - Passo 2: Laço 'for'

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

- O laço `for` que é usado para preencher a string `line` com caracteres '-':
    - O laço começa em 0 e vai até `lineSize`.
    - A cada iteração do laço, o caractere '-' é adicionado à string `line`.
    - Quando o índice for maior que `lineSize` o laço é encerrado e a string `line` não recebe mais caracteres '-'.

### - Passo 3: Função `console.log()`

- Ao final, vamos imprimir a linha chamando a função `console.log`()  passando a string `line` como argumento:

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


### - Passo 4: Chamada da função `line()`

- A função 'line()' é chamada no final do código, passando o argumento "título da aplicação".

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

- A saída que é impressa no console:
    - Uma linha horizontal é criada com caracteres '-':
    
      ```shell
      ---------------------------------------
      ```

### - Conclusão:

- Essa foi a function `line()`, espero que tenha gostado e entendido. Experimente passar outros títulos e veja como fica no console.
- Não esqueça de deixar o seu like no vídeo, comentar e compartihar com os amigos que estão estudando lógica e algoritmos.



## 3. loading( )

### - Introdução:

- Olá pessoas, sejam bem-vindas ao meu canal, meu nome é Thiago e esse é o canal [tthiagocarlosdev](https://www.youtube.com/channel/UCZN-uQtc4UDQt_tLu-I7Wpw). Hoje vamos para a terceira aplicação aleatória usando JavaScript;
- Não esqueça de deixar o seu like no vídeo, comentar e compartihar com os amigos que estão estudando lógica e algoritmos;
- Vamos construir a função `loading()`, que exibe uma animação de carregamento de conteúdo:

```shell
loading .... 20%
loading ........ 40%
loading ............ 60%
loading ................ 80%
loading ..................... 100%
```

```js
function loading(){
}
```

### - Passo 1: Função `syncDelay()`

- A função `syncDelay()` é uma função auxiliar que introduz um atraso controlado na execução do código.

    - Recebe como argumento `milliseconds`, que é a quantidade de tempo em milissegundos que a função deve esperar antes de continuar a execução;

    - Usa um laço `while para aguardar até que o tempo especificado tenha passado antes de continuar a execução;

    - A cada iteração do laço, o tempo atual é comparado com o tempo de início e, quando o tempo especificado é atingido, a função é interrompida e a execução continua;

      ```js
          function syncDelay(milliseconds){
            let start = new Date().getTime();
            let end=0;
            while( (end - start) < milliseconds){
                end = new Date().getTime();
            }
           }  
      ```

    - Esta função é usada apenas para que a animação aconteça no tempo que for passado como parâmetro em milissegundos, no nosso caso, sera de 1 segundo ou 1000 milissegundos.

### - Passo 2: Variáveis

- As variáveis declaradas dentro da função `loading()`:
  
    ```js
        let toLoad = `....`
        let percentage = 20
    ```
    
    - `toLoad`: é uma string que contém uma sequência de pontos que serão usados para representar visualmente o progresso do carregamento.
    - `percentage` : é uma variável que controla o progresso do carregamento e é inicializada com o valor 20.

### - Passo 3: Laço `while`

```js
    while (percentage <= 100) {
        console.clear()
        console.log(`loading ${toLoad} ${percentage}%`)
        syncDelay(1000);
        toLoad += `....`
        percentage += 20
    }
```

- O laço `while` é usado para simular o carregamento do conteúdo.
    - O laço continua enquanto o valor da variável `percentage` é menor ou igual a 100;
    - A cada iteração do laço, o console é limpo, com a função `console.clear()`, e é exibida uma mensagem de carregamento que inclui a sequência de pontos `toLoad` e o percentual completo do carregamento `percentage`;
    - É introduzido um atraso de _1 segundo_ usando a função auxiliar `syncDelay()`;
    - A sequência de pontos `toLoad` é atualizada com mais pontos, usando a atribuição `+=`, para simular o progresso do carregamento;
    - O valor da variável `percentage` é atualizado com mais 20 a cada interação para simular o progresso do carregamento.

### - Passo 4: Chamada da função `loading()`

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

- A função `loading()` é chamada no final do código para iniciar a animação de carregamento.

- A saída que é impressa no console:
  
    ```shell
    loading .... 20%
    loading ........ 40%
    loading ............ 60%
    loading ................ 80%
    loading .................... 100%
    ```
    
    - A mensagem de carregamento é atualizada a cada iteração do laço 'while' para simular o progresso do carregamento.
    - Quando o valor da variável 'percentage' atinge 100%, a animação de carregamento termina.

### - Conclusão:

- Essa foi a function `loading()`, espero que tenha gostado e entendido.
- Não esqueça de deixar o seu like no vídeo, comentar e compartihar com os amigos que estão estudando lógica e algoritmos.



## 4. getRandomIntInclusive( );

### - Introdução:

- Olá pessoas, sejam bem-vindas ao meu canal, meu nome é Thiago e esse é o canal [tthiagocarlosdev](https://www.youtube.com/channel/UCZN-uQtc4UDQt_tLu-I7Wpw). Hoje vamos para a terceira aplicação aleatória usando JavaScript;
- Não esqueça de deixar o seu like no vídeo, comentar e compartihar com os amigos que estão estudando lógica e algoritmos;
- Vamos construir a função `getRandomIntInclusive( )`, que é uma função em JavaScript que gera um número inteiro aleatório entre dois valores passados como parâmetro para a função.

```shell
Número inteiro aleatório entre dois valores, inclusive
4
```

### - Passo 1: Declaração da função

- A primeira linha do código declara a função `getRandomIntInclusive()`, que recebe dois parâmetros: `min` e `max`:

```js
function getRandomIntInclusive(min, max) {
}
```

### - Passo 2: Arredondamento dos parâmetros

- Dentro da função, as variáveis `min` e `max` são arredondadas para cima e para baixo, respectivamente, usando os métodos Math.ceil e Math.floor.
- Math.ceil(min): A função `Math.ceil()` arredonda um número para cima para o inteiro mais próximo. Neste caso, estamos arredondando "min" para cima para garantir que o valor mínimo seja um número inteiro.
- Math.floor(max): A função `Math.floor()` arredonda um número para baixo para o inteiro mais próximo. Neste caso, estamos arredondando "max" para baixo para garantir que o valor máximo seja um número inteiro.

```js
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
}
```

### - Passo 3: Cálculo e retorno do número aleatório

- Em seguida, a função usa a função `Math.random()` para gerar um número aleatório entre 0 e 1, que é multiplicado pela diferença entre "max" e "min" acrescido de 1. Em seguida, o resultado é arredondado para baixo com a função `Math.floor()` e o valor mínimo é adicionado ao resultado para obter um número aleatório entre `min` e `max`. Esse número é então retornado pela função.

```js
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

- No console:

  ```sh
  4
  ```

### - Conclusão:

- Essa foi a function `getRandomIntInclusive()`, espero que tenha gostado e entendido.
- Não esqueça de deixar o seu like no vídeo, comentar e compartihar com os amigos que estão estudando lógica e algoritmos.
- Faça você mesmo um teste passando outros valores como parâmetro.
- E é assim que funciona a função para gerar um número inteiro aleatório entre dois valores. Espero que este vídeo tenha sido útil e se você tiver alguma dúvida, não hesite em deixar um comentário abaixo. Obrigado por assistir!



## 5. NodeJS - module.export e require( );

### - Introdução:

- Olá pessoas, sejam bem-vindas ao meu canal, meu nome é Thiago e esse é o canal [tthiagocarlosdev](https://www.youtube.com/channel/UCZN-uQtc4UDQt_tLu-I7Wpw). Hoje vamos para o quinto vídeio com nossas aplicações aleatórias usando JavaScript e NodeJS;
- Não esqueça de deixar o seu like no vídeo, comentar e compartihar com os amigos que estão estudando lógica e algoritmos;
- No Node.js, os conceitos de `module.exports` e `require()` são fundamentais para compartilhar código entre diferentes módulos e arquivos. Vamos explorar esses conceitos em detalhes:

### - Passo 1: `module.exports`:

`module.exports` é um objeto especial que faz parte do sistema de módulos do Node.js e é usado para exportar valores (funções, objetos, variáveis, etc.) de um módulo para que possam ser acessados em outros módulos que os importam usando a função `require()`.

Exemplo de como usar `module.exports` para exportar uma função:

```javascript
// arquivo funcoes.js
function soma(a, b) {
  return a + b;
}

module.exports = soma;
```

### - Passo 2: `require()`:

`require()` é uma função incorporada no Node.js que é usada para importar um módulo. Quando você chama `require('nome-do-modulo')`, o Node.js procura e carrega o módulo correspondente e retorna o valor exportado por esse módulo.

Exemplo de como usar `require()` para importar uma função de outro módulo:

```javascript
// arquivo app.js
const funcaoSoma = require('./funcoes');

console.log(funcaoSoma(2, 3)); // Chama a função exportada do módulo funcoes.js
```

### - Passo3: Exportando Múltiplos Valores:

Além de exportar apenas uma função ou valor, você também pode exportar múltiplos valores como um objeto usando `module.exports`. Isso é útil quando você deseja compartilhar várias funções ou variáveis.

Exemplo de como exportar e importar múltiplos valores:

```javascript
// arquivo funcoes.js
function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

module.exports = {
  soma,
  subtracao
};
```

```javascript
// arquivo app.js
const { soma, subtracao } = require('./funcoes');

console.log(soma(5, 3)); // Chama a função soma
console.log(subtracao(10, 4)); // Chama a função subtracao
```

- Esses são os fundamentos de como usar `module.exports` e `require()` no Node.js para compartilhar código entre módulos. Eles são essenciais para criar aplicativos modulares e reutilizáveis, permitindo que você organize e separe seu código em módulos distintos. Crie os arquivos dos exemplos acima e realize seus testes.
- Não esqueça de deixar o seu like no vídeo, comentar e compartihar com os amigos que estão estudando lógica e algoritmos.
- Faça você mesmo um teste criando outras funções, outros arquivos, variáveis e acessando em vários módulos.
- Espero que este vídeo tenha sido útil e se você tiver alguma dúvida, não hesite em deixar um comentário abaixo. Obrigado por assistir e até o proóximo!

## 6. basicFunctions:

Agora vamos criar nosso arquivo com as funções que já mostramos nos outros vídeos para usá-las nas próximas aplicações:

### - Introdução:

- Olá pessoas, sejam bem-vindas ao meu canal, meu nome é Thiago e esse é o canal [tthiagocarlosdev](https://www.youtube.com/channel/UCZN-uQtc4UDQt_tLu-I7Wpw). Hoje vamos para o sexto vídeo de nossas aplicações aleatórias usando JavaScript e NodeJS;
- Não esqueça de deixar o seu like no vídeo, comentar e compartihar com os amigos que estão estudando lógica e algoritmos;
- Hoje vamos criar o arquivo que receberá nossas funções com o nome `basicFunctions.js`
- Dentro deste arquivo vamos criar um **objeto** com funções básicas e exportá-lo para ser utilizado em outros arquivos.

```js
const basicFunctions = {

}
module.exports = { basicFunctions }
```

- Um objeto é uma estrutura de dados que permite armazenar e organizar valores. Ele pode armazenar dados em forma de propriedades, que são pares chave-valor, e pode ter métodos, que são funções associadas ao objeto

### - Passo 1: Declaração do objeto

- Declaração do objeto `basicFunctions`.

- Por enquanto, esse objeto está vazio, sem nenhuma função ou propriedade.

  ```js
  const basicFunctions = {
  
  }
  ```

### - Passo 2: Adição de funções ao objeto

- O objetivo do objeto é armazenar funções básicas, aequelas que já criamos anteriormente.

- As funções podem ser adicionadas utilizando a sintaxe `nomeDaFuncao: function() { },`  ou `nomeDaFuncao(){ },`.

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
    
      function line(size) {
        let line = ""
    
        for (let index = 0; index <= size; index++) {
          line += "-"
        }
    
        console.log(line)
      }
    
      line(lineSize)
      console.log(textWithSpace)
      line(lineSize)
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

### - Passo 3: Exportação do objeto

- Para que as funções do objeto possam ser utilizadas em outros arquivos, é necessário exportá-lo.

- A exportação é feita utilizando o comando `module.exports`.

- Sintaxe utilizada é `module.exports = { nomeDoObjeto, função, variável }`.

  ```js
  module.exports = { basicFunctions }
  ```

### - Conclusão:

- Esse foi o `modulo.export: basicFunctions`, espero que tenha gostado e entendido.
- Não esqueça de deixar o seu like no vídeo, comentar e compartihar com os amigos que estão estudando lógica e algoritmos.
- Faça você mesmo um teste passando outros valores como parâmetro.
- Espero que este vídeo tenha sido útil e se você tiver alguma dúvida, não hesite em deixar um comentário abaixo. Obrigado por assistir e até o próximo!

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



## 7. snake_case with replace( )

### - Introdução:

- Olá pessoas, sejam bem-vindas ao meu canal, meu nome é Thiago Carlos e esse é o canal [tthiagocarlosdev](https://www.youtube.com/channel/UCZN-uQtc4UDQt_tLu-I7Wpw). Hoje vamos para a sétima aplicação usando JavaScript e NodeJS;
- Não esqueça de deixar o seu like no vídeo, comentar e compartihar com os amigos que estão estudando lógica e algoritmos;
- O código em questão implementa uma função em JavaScript chamada `snakeCase()` que recebe uma string como entrada e retorna um objeto com duas informações: a string em formato **snake_case** e o **tamanho da nova string**. O código também usa algumas funções auxiliares definidas em um arquivo separado chamado `basicFunctions.js`.

### - Passo 1: Importação de bibliotecas e definição de variáveis e funções

- A primeira linha do código importa a biblioteca readline-sync que permite a entrada de dados pelo usuário via linha de comando. 

```js
var input = require('readline-sync');
```

- A segunda linha importa as funções definidas no arquivo basicFunctions.js:

```js
const { basicFunctions } = require('./basicFunctions')
```

- A terceira linha define a função `snakeCase()` que recebe uma string como entrada e retorna um objeto com duas informações. A função não é executada nesta etapa.

```js
//function declaration
function snakeCase(text){...}
```

### - Passo 2: Declaração de variáveis:

- São declaradas duas variáveis, `inserted_text` que vai receber o texto digitado pelo usuário e o objeto `text_information`  que vai receber o retorno da function `snakeCase()` com o texto no formato snake_case e a quantidade de caracteres:

```js
//variable declaration
let inserted_text = "";
let text_information = {};
```

### - Passo 3: Entrada de dados e chamada da função

- Na entrada chamamos a function `header()` do arquivo `basicFunctions` e passamos como parâmetro o título da nossa aplicação;
- Em seguinda, o código pede ao usuário que insira um texto. O texto inserido pelo usuário é armazenado em `inserted_text` e em processamento de dados a função `snakeCase()` é chamada com essa variável como parâmetro;
- O retorno da função `snakeCase()` e atribuído ao objeto `text_information`:

```js
//data input
basicFunctions.header("snake_case")
inserted_text = input.question("Enter the text: ")

//data processing
text_information = snakeCase(inserted_text)
```

### - Passo 4: Processamento de texto

- A função `snakeCase()` começa processando o texto passado como parâmetro que é a entrada do usuário;
- Ela substitui todos os espaços em branco na string por underlines usando o método `replace()` e atribui essa nova string a variável `underlined_text`:

```js
function snakeCase(text){
    let underlined_text = text.replace(/ /gi, '_')  
}
```

- Em seguida armazena o tamanho do texto na variável `input_text_size` usando o método '.length':

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

- Ainda neste início da função, ela cria objeto `textData` que vai receber a nova string em snake_case e seu tamanho e irá retornar esse objeto:

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

- Extraindo cada caracter da string. Aqui usando o método `split()`, cada caracter vai ser um item do array/lista:

```js
array_without_accent = underlined_text.split('')
```

Se der um `console.log(array_without_accent)` veja como fica:

```shell
[
  'T', 'e', 'x', 't', 'o',
  '_', 'e', 'x', 'e', 'm',
  'p', 'l', 'o', '_', 'd',
  'e', '_', 'f', 'u', 'n',
  'ç', 'ã', 'o'
]
```

### - Passo 5: Processamento de caracteres especiais

- Na estrutura de repetição `for`, para cada caractere, ela verifica se ele é um número, letra maiúscula, letra minúscula, underline ou um caractere especial.

- Cada caractere especial encontrado é substituído por outro caractere equivalente. Por exemplo, se a função encontra um caractere acentuado como "é", ela o substitui por "e". Se encontrar um caractere "ç", ele é substituído por "c". Se encontrar um caractere especial, ele é simplesmente removido da string, conforme as condições.
- Aqui vamos utilizar método [charCodeAt](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt) para analizar cada caracter da lista `underlined_text` e fazer as substituições, conforme explicado acima:

```js
 // processando cada caracter do array para detectar um acento ou símbolo e fazer a substituição
    for (let counter = 0; counter < input_text_size; counter++) {
  
      //conditions
      let numbers =
        underlined_text.charCodeAt(counter) >= 48 &&
        underlined_text.charCodeAt(counter) <= 57
  
      let capital_letters =
        underlined_text.charCodeAt(counter) >= 65 &&
        underlined_text.charCodeAt(counter) <= 90
  
      let small_letters =
        underlined_text.charCodeAt(counter) >= 97 &&
        underlined_text.charCodeAt(counter) <= 122
  
      let underline = underlined_text.charCodeAt(counter) === 95
  
      let letter_a =
        (underlined_text.charCodeAt(counter) >= 192 &&
          underlined_text.charCodeAt(counter) <= 197) ||
        (underlined_text.charCodeAt(counter) >= 224 &&
          underlined_text.charCodeAt(counter) <= 229)
  
      let letter_e =
        (underlined_text.charCodeAt(counter) >= 200 &&
          underlined_text.charCodeAt(counter) <= 203) ||
        (underlined_text.charCodeAt(counter) >= 232 &&
          underlined_text.charCodeAt(counter) <= 235)
  
      let letter_i =
        (underlined_text.charCodeAt(counter) >= 204 &&
          underlined_text.charCodeAt(counter) <= 207) ||
        (underlined_text.charCodeAt(counter) >= 236 &&
          underlined_text.charCodeAt(counter) <= 239) ||
        underlined_text.charCodeAt(counter) === 305
  
      let letter_o =
        (underlined_text.charCodeAt(counter) >= 210 &&
          underlined_text.charCodeAt(counter) <= 214) ||
        underlined_text.charCodeAt(counter) === 216 ||
        (underlined_text.charCodeAt(counter) >= 242 &&
          underlined_text.charCodeAt(counter) <= 246) ||
        underlined_text.charCodeAt(counter) === 248
  
      let letter_u =
        (underlined_text.charCodeAt(counter) >= 217 &&
          underlined_text.charCodeAt(counter) <= 220) ||
        (underlined_text.charCodeAt(counter) >= 249 &&
          underlined_text.charCodeAt(counter) <= 252)
  
      let letter_c =
        underlined_text.charCodeAt(counter) === 199 ||
        underlined_text.charCodeAt(counter) === 231 ||
        underlined_text.charCodeAt(counter) === 162
  
      let letter_y =
        underlined_text.charCodeAt(counter) === 221 ||
        underlined_text.charCodeAt(counter) === 253 ||
        underlined_text.charCodeAt(counter) === 255 ||
        underlined_text.charCodeAt(counter) === 376
  
      let letter_n =
        underlined_text.charCodeAt(counter) === 209 ||
        underlined_text.charCodeAt(counter) === 241
  
      let letter_d =
        underlined_text.charCodeAt(counter) === 208 ||
        underlined_text.charCodeAt(counter) === 240
  
      let letter_sz = underlined_text.charCodeAt(counter) === 223
  
      let letter_ae =
        underlined_text.charCodeAt(counter) === 198 ||
        underlined_text.charCodeAt(counter) === 230
  
      let letter_x = underlined_text.charCodeAt(counter) === 215
  
      //processing
      if (numbers && capital_letters && small_letters && underline) {
      } else if (letter_a) {
        array_without_accent[counter] = 'a'
      } else if (letter_e) {
        array_without_accent[counter] = 'e'
      } else if (letter_i) {
        array_without_accent[counter] = 'i'
      } else if (letter_o) {
        array_without_accent[counter] = 'o'
      } else if (letter_u) {
        array_without_accent[counter] = 'u'
      } else if (letter_c) {
        array_without_accent[counter] = 'c'
      } else if (letter_y) {
        array_without_accent[counter] = 'y'
      } else if (letter_n) {
        array_without_accent[counter] = 'n'
      } else if (letter_d) {
        array_without_accent[counter] = 'd'
      } else if (letter_sz) {
        array_without_accent[counter] = 'sz'
      } else if (letter_ae) {
        array_without_accent[counter] = 'ae'
      } else if (letter_x) {
        array_without_accent[counter] = 'x'
      } else if (!numbers && !capital_letters && !small_letters && !underline) {
        array_without_accent[counter] = ''
      }
    } 
```

### - Passo 6: Criação de nova string

- Após o processamento de todos os caracteres, a função cria uma nova string a partir do array de caracteres, unindo-os novamente com underlines e convertendo tudo para letras minúsculas.

- A nova string será adicionar ao objeto `textData` na propriedade `text_snake_case` convertendo os caracteres de `array_without_accent` em string, usando o método `toString()`, tirando as vírgulas usando o método `replace()` e colocando tudo em minúsculo udando o método :

```js
//criando a nova string a partir dos novos valores do array
    textData.text_snake_case = array_without_accent
      .toString()
      .replace(/,/gi, '')
      .toLowerCase()
```

- Adicionamos também a quantidade de caracteres dessa string final no objeto `textData` dentro da propriedade `output_text_size`, usando o método `length`:

```js
//determinando a quantidade de caracteres
textData.output_text_size = textData.text_snake_case.length
```

- Por último retornamos o objeto `textData'`

```js
return textData
```

- Veja a função completa:

```js
//function declaration
function snakeCase(text){

    let underlined_text = text.replace(/ /gi, '_')
    let input_text_size = underlined_text.length
    let array_without_accent = []
    let textData = {
      text_snake_case: "",
      output_text_size: 0,
    }
  
    //extraindo cada caracter da string para um array
    array_without_accent = underlined_text.split('')
    console.log(array_without_accent)
  
    // processando cada caracter do array para detectar um acento ou símbolo e fazer a substituição
    for (let counter = 0; counter < input_text_size; counter++) {
  
      //conditions
      let numbers =
        underlined_text.charCodeAt(counter) >= 48 &&
        underlined_text.charCodeAt(counter) <= 57
  
      let capital_letters =
        underlined_text.charCodeAt(counter) >= 65 &&
        underlined_text.charCodeAt(counter) <= 90
  
      let small_letters =
        underlined_text.charCodeAt(counter) >= 97 &&
        underlined_text.charCodeAt(counter) <= 122
  
      let underline = underlined_text.charCodeAt(counter) === 95
  
      let letter_a =
        (underlined_text.charCodeAt(counter) >= 192 &&
          underlined_text.charCodeAt(counter) <= 197) ||
        (underlined_text.charCodeAt(counter) >= 224 &&
          underlined_text.charCodeAt(counter) <= 229)
  
      let letter_e =
        (underlined_text.charCodeAt(counter) >= 200 &&
          underlined_text.charCodeAt(counter) <= 203) ||
        (underlined_text.charCodeAt(counter) >= 232 &&
          underlined_text.charCodeAt(counter) <= 235)
  
      let letter_i =
        (underlined_text.charCodeAt(counter) >= 204 &&
          underlined_text.charCodeAt(counter) <= 207) ||
        (underlined_text.charCodeAt(counter) >= 236 &&
          underlined_text.charCodeAt(counter) <= 239) ||
        underlined_text.charCodeAt(counter) === 305
  
      let letter_o =
        (underlined_text.charCodeAt(counter) >= 210 &&
          underlined_text.charCodeAt(counter) <= 214) ||
        underlined_text.charCodeAt(counter) === 216 ||
        (underlined_text.charCodeAt(counter) >= 242 &&
          underlined_text.charCodeAt(counter) <= 246) ||
        underlined_text.charCodeAt(counter) === 248
  
      let letter_u =
        (underlined_text.charCodeAt(counter) >= 217 &&
          underlined_text.charCodeAt(counter) <= 220) ||
        (underlined_text.charCodeAt(counter) >= 249 &&
          underlined_text.charCodeAt(counter) <= 252)
  
      let letter_c =
        underlined_text.charCodeAt(counter) === 199 ||
        underlined_text.charCodeAt(counter) === 231 ||
        underlined_text.charCodeAt(counter) === 162
  
      let letter_y =
        underlined_text.charCodeAt(counter) === 221 ||
        underlined_text.charCodeAt(counter) === 253 ||
        underlined_text.charCodeAt(counter) === 255 ||
        underlined_text.charCodeAt(counter) === 376
  
      let letter_n =
        underlined_text.charCodeAt(counter) === 209 ||
        underlined_text.charCodeAt(counter) === 241
  
      let letter_d =
        underlined_text.charCodeAt(counter) === 208 ||
        underlined_text.charCodeAt(counter) === 240
  
      let letter_sz = underlined_text.charCodeAt(counter) === 223
  
      let letter_ae =
        underlined_text.charCodeAt(counter) === 198 ||
        underlined_text.charCodeAt(counter) === 230
  
      let letter_x = underlined_text.charCodeAt(counter) === 215
  
      //processamento
      if (numbers && capital_letters && small_letters && underline) {
      } else if (letter_a) {
        array_without_accent[counter] = 'a'
      } else if (letter_e) {
        array_without_accent[counter] = 'e'
      } else if (letter_i) {
        array_without_accent[counter] = 'i'
      } else if (letter_o) {
        array_without_accent[counter] = 'o'
      } else if (letter_u) {
        array_without_accent[counter] = 'u'
      } else if (letter_c) {
        array_without_accent[counter] = 'c'
      } else if (letter_y) {
        array_without_accent[counter] = 'y'
      } else if (letter_n) {
        array_without_accent[counter] = 'n'
      } else if (letter_d) {
        array_without_accent[counter] = 'd'
      } else if (letter_sz) {
        array_without_accent[counter] = 'sz'
      } else if (letter_ae) {
        array_without_accent[counter] = 'ae'
      } else if (letter_x) {
        array_without_accent[counter] = 'x'
      } else if (!numbers && !capital_letters && !small_letters && !underline) {
        array_without_accent[counter] = ''
      }
    }
  
    console.log(array_without_accent)
    //criando a nova string a partir dos novos valores do array
    textData.text_snake_case = array_without_accent
      .toString()
      .replace(/,/gi, '')
      .toLowerCase()
  
    //determinando a quantidade de caracteres
    textData.output_text_size = textData.text_snake_case.length
  
    return textData
  
  }
```

### - Passo 7: Exibição dos resultados

- A função retorna um objeto contendo a nova string em snake_case e seu tamanho, que são armazenados em uma variável. Em saída de dados, essas informações são exibidas na tela, utilizando as funções definidas no arquivo basicFunctions.js para formatar a saída. Mostramos também o texto de entrada:

```js
//data output
console.clear()
basicFunctions.header("snake_case")
console.log(`Texto de entrada: ${inserted_text}`)
basicFunctions.line("snake_case")
console.log(`Texto snake_case: ${text_information.text_snake_case}`)
console.log(`Nº de caracteres: ${text_information.output_text_size}`)
basicFunctions.line("snake_case")
```

### - Passo 8: Veja o código sendo executado

```shell
---------------------
     snake_case
---------------------
Enter the text: Texto teste da função Snake Case
```

```shell
---------------------
     snake_case
---------------------
Texto de entrada: Texto teste da função Snake Case
---------------------
Texto snake_case: texto_teste_da_funcao_snake_case
Nº de caracteres: 32
---------------------
```

### - Conclusão:

- Essa foi a `snakeCase()`,  uma função em JavaScript que converte uma string em snake_case, substituindo espaços e caracteres especiais por underlines e removendo acentos. Ele também permite que o usuário insira um texto via linha de comando e exibe a string em snake_case e seu tamanho na tela;
- Não esqueça de deixar o seu like no vídeo, comentar e compartihar com os amigos que estão estudando lógica e algoritmos;
- Faça você mesmo um teste inserido outros textos;
- Espero que este vídeo tenha sido útil e se você tiver alguma dúvida, não hesite em deixar um comentário abaixo. Obrigado por assistir e até o próximo!



## 8. Jankenpon( ) with arrow functions; PAREI

- ### Introdução:

    - Cumprimente o público e apresente o código que será explicado no vídeo.
    - Diga que o código é um jogo de pedra, papel e tesoura feito em JavaScript, que pode ser jogado no console do Node.js.

- ### Passo 1 - Dependências:

    - Mencione que o código requer o módulo `readline-sync`, que é usado para ler a entrada do usuário no console.

    ```js
    var input = require('readline-sync');
    ```

    - Diga que também há um arquivo de módulo chamado `basicFunctions`, que contém funções utilitárias usadas pelo jogo.

    ```js
    const { basicFunctions } = require('./basicFunctions');
    ```

- ### Passo 2 - Declaração de funções:

    - Neste jogo teremos 8 funções que serão usadase explicadas conforme a nossa aplicação for construída, são elas:
        - `playAgainMenu()` - utilizada no código principal do programa para exibir as opções de jogar novamente ou sair após o término de cada partida;
        - `validateAnswer()` - garante que o usuário digite apenas "n" ou "s" antes de prosseguir para a próxima etapa do programa;
        - `errorMessage()` - usada para exibir uma mensagem de erro se o usuário digitar um valor inválido;
        - `playMenu()` -  exibe as opções do jogo para o usuário (pedra, papel, tesoura);
        - `validateNumber()` -  valida a entrada do usuário no jogo pedindo ao usuário que escolha uma das três opções disponíveis 1, 2 e 3 (pedra, papel ou tesoura); 
        - `winnerCalculation()` -  compara essas jogadas de acordo com as regras do jogo pedra-papel-tesoura e retorna o nome do vencedor da jogada. Atualiza a pontuação do usuário, da CPU e o número de empates;
        - `playerChoice()` - recebe um número como parâmetro e retorna uma string correspondente a uma escolha de jogada exibindo a escolha do jogador na tela;;
        - `gameWinner()` -  verifica o número de pontos do usuário e da CPU e retorna uma mensagem indicando quem foi o vencedor ou se o jogo acabou em empate.

    

- ### Passe3 - Declaração de variáveis:

    - Mostre as variáveis do jogo e explique seu propósito.

    ```js
    //declaração de variáveis
    let userName = ``;
    let playAgain = 0;
    let userPlay = 0;
    let cpuPlay = 0;
    let partialWinner = "";
    let userScore = 0;
    let cpuScore = 0;
    let tieScore = 0;
    let matchCounter = 0;
    let winner = "";
    ```

    - `userName` é usado para armazenar o nome do usuário;
    - `playAgain`, que é usado para armazenar a resposta do usuário sobre se deseja jogar novamente;
    - `userPlay` e `cpuPlay` armazenam a escolha do usuário e da CPU, respectivamente;
    - `partialWinner`, que armazena quem ganhou a partida atual;
    - `userScore`, `cpuScore` e `tieScore` são usados para acompanhar o número de vitórias do usuário, da CPU e empates, respectivamente;
    - `matchCounter`, que é usado para contar o número de partidas jogadas;
    - `winner`, que é usado para armazenar quem ganhou o jogo no final.

    

- ### Passo 4 - Entrada de dados:

    - Aqui começa a nossa aplicação. Vamos iniciar chamando a function `loading()` do módulo `basicFunctions`:

    ```js
    //entrada de dados
    basicFunctions.loading();
    ```

    - A function `loading()` exibe uma animação de carregamento:

    ```shell
    loading .... 20%
    loading ........ 40%
    loading ............ 60%
    loading ................ 80%
    loading .................... 100%
    ```

    - Em seguida, limpamos o console e chamamos a function `header()`, também do módulo `basicFunctions`, passando como parâmetro o título da aplicação, que é Jankenpon:

    ```js
    console.clear();
    basicFunctions.header("Jankenpon");
    ```

    - Em seguida é solicitado o nome do usuário que é armazenada na variável `userName`:

    ```js
    //entrada de dados
    basicFunctions.loading();
    console.clear();
    basicFunctions.header("Jankenpon");
    userName = input.question("Digite seu nome: ").toUpperCase();
    ```

    - Note que o método `toUpperCase()` é chamado na string armazenada em `userName`, convertendo todo o texto para letras maiúsculas.
    - No console:

    ```shell
    -------------------
         Jankenpon
    -------------------
    Digite seu nome: Jogador 1
    ```

- ### Passo 5 - Loop do jogo

    - Em seguida,  o jogo é iniciado com um loop `do-while` que executa o jogo até que o usuário decida sair.

    ```js
    do {
      console.clear();
        
      playAgainMenu();
      playAgain = validateAnswer();
    
    } while ( playAgain != "n");
    ```

    - A decisão de continuar ou sair do jogo, vai vir da resposta após a execução das functions `playAgainMenu()` e `validateAnswer()` que será armazenada na variável `playAgain`. Se a resposta do usuário for `s` o jogo continua, se for `n `, o jogo é encerrado!

    - Function `playAgainMenu()`:

      - Imprime uma mensagem na tela pedindo ao usuário para decidir se ele deseja jogar novamente ou não.
      - Usando o método `console.log()`, imprime três linhas de texto na tela:
        - A primeira linha pergunta "Jogar mais uma vez?"
        - As duas linhas seguintes apresentam as opções disponíveis para o usuário escolher. 
          - A opção "[s] para sim" indica que o usuário pode digitar a letra "s" para indicar que ele deseja jogar novamente;
          - A opção "[n] para não" indica que o usuário pode digitar a letra "n" para indicar que ele não deseja jogar novamente;

      ```js
      const playAgainMenu = () => {
        console.log("Jogar mais uma vez? ");
        console.log("[s] para sim");
        console.log("[n] para não");
      };
      ```

      - No console:

      ```sh
      Jogar mais uma vez? 
      [s] para sim
      [n] para não
      ```

    - Function `validateAnswer()`

      - Valida a entrada do usuário. A função pede para o usuário digitar uma resposta, que é convertida para minúsculas usando o método `.toLowerCase()`.

      ```js
      const validateAnswer = () => {
      
        answer = input.question().toLowerCase();
      
      };
      ```

      - Em seguida, a função entra em um loop enquanto a resposta do usuário **não** for "n" ou "s". 

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
      };
      ```

      - Dentro desse loop, a função executa algumas ações para indicar que a resposta do usuário foi inválida:

        - Primeiro, ele limpa o console com "console.clear()", 

        - Em seguida, ele exibe um cabeçalho "Jankenpon" e uma mensagem de erro com  a function `errorMessage()`;

        - Function `errorMessage()`:

          - Tem como objetivo imprimir uma mensagem de erro na tela caso a entrada do usuário seja inválida. A mensagem exibida é "ATENÇÃO: JOGADA ERRADA!" e "Digite um valor válido!":

          ```js
          const errorMessage = () => {
            console.log("ATENÇÃO: JOGADA ERRADA!");
            console.log("Digite um valor válido!");
          };
          ```

          - No console:

          ```sh
          ATENÇÃO: JOGADA ERRADA!
          Digite um valor válido!
          ```

      - Por último exibe o menu de jogar novamente com `playAgainMenu()`.

      - Uma vez que a resposta do usuário é "n" ou "s", o loop é interrompido e a resposta do usuário é retornada e armazennada na variável `playAgain`. 

      - A função "validateAnswer()" garante que o usuário digite apenas "n" ou "s" antes de prosseguir para a próxima etapa do programa.

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

    - Agora sim, com a variável `playAgain` definida, enquanto ela for diferente de `n` o jogo continua, caso contrário, o jogo é encerrado:

    ```js
    do {
      console.clear();
        
      playAgainMenu();
      playAgain = validateAnswer();
    
    } while ( playAgain != "n");
    ```

    - Após essa estrutura de repetição, vamos chamar a function `loading()`, limpar o console, chamar a function `header()`, imprimir que o jogo foi finalizado e em seguida, chamar a function `line()`:

    ```js
    //entrada de dados
    basicFunctions.loading();
    console.clear();
    basicFunctions.header("Jankenpon");
    userName = input.question("Digite seu nome: ").toUpperCase();
    
    do {
      console.clear();
        
      playAgainMenu();
      playAgain = validateAnswer();
    
    } while ( playAgain != "n");
    
    basicFunctions.loading();
    console.clear();
    basicFunctions.header("Jankenpon");
    console.log("Jogo Finalizado!");
    basicFunctions.line("Jankenpon");
    ```

    - No console:

    ```sh
    loading .... 20%
    loading ........ 40%
    loading ............ 60%
    loading ................ 80%
    loading .................... 100%
    ```

    ```sh
    -------------------
         Jankenpon
    -------------------
    Digite seu nome: Jogador 1    
    ```

    ```sh
    Jogar mais uma vez? 
    [s] para sim
    [n] para não
    m
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
    s
    ```

    ```shell
    Jogar mais uma vez? 
    [s] para sim
    [n] para não
    n
    ```

    ```shell
    -------------------
         Jankenpon
    -------------------
    Jogo Finalizado!
    -------------------
    ```

    


- ### Passo 6 - Continuação da entrada de dados dentro do loop

  - Dentro do loop `do-while`, vamos limpar o console,  chamar a function `header()` e em seguida mostrar o nome do usuário e pedir para ele escolher a sua jogada:

```js
do {

  console.clear();
  basicFunctions.header("Jankenpon");
  console.log(`${userName} escolha sua jogada: `);

  playAgainMenu();
  playAgain = validateAnswer();

} while ( playAgain != "n");
```

- No console:

  ```sh
  -------------------
       Jankenpon
  -------------------
  JOGADOR 1 escolha sua jogada: 
  Jogar mais uma vez? 
  [s] para sim
  [n] para não
  ```

- Nesta etapa, vamos usar a function `playMenu()` que exibe as opções do jogo para o usuário (pedra, papel, tesoura).

- Function `playMenu()`:

  - Vamos declarar  esta function em declarações de funções:

  ```js
  const playMenu = () => {
      console.log("[1] PEDRA")
      console.log("[2] PAPEL")
      console.log("[3] TESOURA")
  }
  ```

- Dentro do loop:

```js
do {

  console.clear();
  basicFunctions.header("Jankenpon");
  console.log(`${userName} escolha sua jogada: `);
  playMenu();

  playAgainMenu();
  playAgain = validateAnswer();

} while ( playAgain != "n");
```

- No console:

  ```shell
  -------------------
       Jankenpon
  -------------------
  JOGADOR 1 escolha sua jogada: 
  [1] PEDRA
  [2] PAPEL
  [3] TESOURA
  Jogar mais uma vez? 
  [s] para sim
  [n] para não
  ```

- Perceba que já está sendo solicitado do usuário se ele quer continuar ou encerrar a partidar sem ele escolher a opção de jogada.

- Vamos usar a variável `userPlay` para armazenar essa opção de jogada do usuário.

- A variável `userPlay` vai receber o retorno da function `validateNumber()` que é usada para validar a entrada do usuário no jogo.

- O usuário só pode digitar os valores de 1 a 3, sendo digitado um valor diferente, uma mensagem de erro será apresentada e o usuário terá que escolher a jogada novamente.

- Esta function tem o mesmo funcionamento da function `validateAnswer()`.

- Function `validateNumber()`:

  - Em declarações de funções:

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

- No loop do jogo:

  ```js
  do {
  
    console.clear();
    basicFunctions.header("Jankenpon");
    console.log(`${userName} escolha sua jogada: `);
    playMenu();
    userPlay = validateNumber();
  
    playAgainMenu();
    playAgain = validateAnswer();
  
  } while ( playAgain != "n");
  ```

- No console:

  ```shell
  -------------------
       Jankenpon
  -------------------
  JOGADOR 1 escolha sua jogada: 
  [1] PEDRA
  [2] PAPEL
  [3] TESOURA
  0
  ```

  ```shell
  -------------------
       Jankenpon
  -------------------
  ATENÇÃO: JOGADA ERRADA!
  Digite um valor válido!
  [1] PEDRA
  [2] PAPEL
  [3] TESOURA
  
  ```

  ```shell
  -------------------
       Jankenpon
  -------------------
  ATENÇÃO: JOGADA ERRADA!
  Digite um valor válido!
  [1] PEDRA
  [2] PAPEL
  [3] TESOURA
  1
  ```

  ```shell
  -------------------
       Jankenpon
  -------------------
  ATENÇÃO: JOGADA ERRADA!
  Digite um valor válido!
  [1] PEDRA
  [2] PAPEL
  [3] TESOURA
  1
  Jogar mais uma vez? 
  [s] para sim
  [n] para não
  n
  ```

  ```shell
  -------------------
       Jankenpon
  -------------------
  Jogo Finalizado!
  -------------------
  ```

- Nosso jogo está tomando forma, agora que definimos a opção de jogada do jogador humano, vamos contruir a opção de jogada do computador/CPU.

- Essa opção de jogada será armazenada na variável `cpuPlay`.

- Ela recebe o retorno da function `getRandomIntInclusive()` do módulo `basicFunctions`, passando como parâmetro os valos 1 e 3.

- Logo, no loop do jogo:

  ```js
  do {
  
    console.clear();
    basicFunctions.header("Jankenpon");
    console.log(`${userName} escolha sua jogada: `);
    playMenu();
    userPlay = validateNumber();
    cpuPlay = basicFunctions.getRandomIntInclusive(1, 3);
  
    playAgainMenu();
    playAgain = validateAnswer();
  
  } while ( playAgain != "n");
  ```

- Esta parte não aparece no console.

- ### Passo 7 - Processamendo de dados

- Vamos definir o vencedor da partida, que será armazenado na variável `partialWinner`;

- Essa variável receberá o retorno da function `winnerCalculation()`;

- A função `winnerCalculation()` recebe como parâmetros as jogadas do usuário (`userPlay`) e da CPU (`cpuPlay`). Em seguida, ela compara essas jogadas de acordo com as regras do jogo pedra-papel-tesoura e retorna o nome do vencedor da partida (`userName` para usuário, "CPU" para CPU ou "Empate" caso as jogadas sejam iguais);

- Além disso, a função atualiza a pontuação do usuário (`userScore`) ou da CPU (`cpuScore`) de acordo com o vencedor da partida e também o quantidade de empates (`tieScore`);

- Function `winnerCalculation()`:

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
  };
  ```

  

- ### Passo 8 - Saída de dados

  - Ainda dentro do loop do jogo, vamos contruir uma saída de dados que vai mostrar o placar parcial do jogo após cada partida, incluindo quem ganhou e o número de empates;
  - Primeiro vamos limpar o console;
  - Em seguida chamar a function `header()`;
  - Mostrar a mensagem ¨PLACAR PARCIAL: ¨;

  ```js
  //saída de dados
    console.clear();
    basicFunctions.header("Jankenpon");
    console.log("PLACAR PARCIAL: ");
  ```

  - O próximo passo, será mostrar a escolha de cada jogador, imprimindo pedra/papel/tesoura de acordo com a escolha de cada um;
  - Para isto, vamos usar a function `playerChoice()`

  - Essa function recebe um número como parâmetro e retorna uma string correspondente a uma escolha de jogada de pedra, papel ou tesoura feita pelo jogador;
  - Essa função é usada no programa para exibir a escolha do jogador na tela, por exemplo, quando o jogador escolhe pedra, o número 1 é passado como parâmetro para essa função e ela retorna a string "Pedra";
  - Function `playerChoice()`:

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

  - Em saída de dados dentro do loop, vamos mostrar a opção de jogada dos jogadores:

  ```js
  //saída de dados
    console.clear();
    basicFunctions.header("Jankenpon");
    console.log("PLACAR PARCIAL: ");
    console.log(`${userName} : ${playerChoice(userPlay)} x ${playerChoice(cpuPlay)} : CPU`);
  ```

  - No console:

  ```sh
  -------------------
       Jankenpon
  -------------------
  PLACAR PARCIAL: 
  JOGADOR 1 : Pedra x Papel : CPU
  Jogar mais uma vez? 
  [s] para sim
  [n] para não
  ```

  - Agora vamos mostrar o vencedor da partidar, que foi definido na variável `partialWinner`, a pontução de cada jogador, que foi definido nas variáveis `userScore` e `cpuScore`, e vamos mostrar a quantidade de empates com a variável `tieScore`:

  ```js
  //saída de dados
    console.clear();
    basicFunctions.header("Jankenpon");
    console.log("PLACAR PARCIAL: ");
    console.log(`${userName} : ${playerChoice(userPlay)} x ${playerChoice(cpuPlay)} : CPU`);
    console.log(`Vencedor da partida: ${partialWinner}`);
    console.log(`${userName} ${userScore} x ${cpuScore} CPU`);
    console.log(`Empates: ${tieScore}`);
  ```

  - No console:

  ```sh
  -------------------
       Jankenpon
  -------------------
  PLACAR PARCIAL: 
  JOGADOR 1 : Pedra x Pedra : CPU
  Vencedor da partida: Empate
  JOGADOR 1 0 x 0 CPU
  Empates: 1
  Jogar mais uma vez? 
  [s] para sim
  [n] para não
  ```

- ### Passo 9 - Quantidade de partidas e vencedor do jogo

  - Em processamento de dados, vamos incrementar a variável `matchCounter` a cada partida que for jogada:

  ```js
  //processamento de dados
    partialWinner = winnerCalculation(userPlay, cpuPlay);
    matchCounter++;
  ```

  - Vamos atribuir a variável `winner`o vencedor do jogo;
  - Usando a ffunction `gameWinner()`;
  - A função `gameWinner()` verifica o número de pontos do usuário e da CPU e retorna uma mensagem indicando quem foi o vencedor ou se o jogo acabou em empate.
  - Recebe como parâmetro os pontos dos jogadores (`userScore`/`cpuScore`);
  - Se o `userScore` for maior do que o `cpuScore`, a função retorna a mensagem `"NOME DO USUÁRIO VENCEDOR(A)!"`, em que "NOME DO USUÁRIO" é o nome fornecido pelo usuário anteriormente. Caso contrário, se o `cpuScore` for maior do que o `userScore`, a função retorna a mensagem `"CPU VENCEDOR!"`. Finalmente, se os pontos forem iguais, a função retorna a mensagem `"JOGO EMPATADO!"`.
  - Function `gameWinner():

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

  - Em processamento de dados:

  ```js
   //processamento de dados
    partialWinner = winnerCalculation(userPlay, cpuPlay);
    matchCounter++;
    winner = gameWinner(userScore, cpuScore);
  ```

  - Em saída de dados, vamos mostrar a quantidade de partidas jogadas e chamar a function `line()` do módulo `basicFunctions`:

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

  - No console:

  ```sh
  -------------------
       Jankenpon
  -------------------
  PLACAR PARCIAL: 
  JOGADOR 1 : Pedra x Pedra : CPU
  Vencedor da partida: Empate
  JOGADOR 1 0 x 0 CPU
  Empates: 1
  Nº de partidas: 1
  -------------------
  Jogar mais uma vez? 
  [s] para sim
  [n] para não
  
  ```

  - Nosso jogo está praticamente finalizado, veja como ficou o nosso código dentro da estrutura `do-while`:

  ```js
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
  ```

- ### Passo 10 - saída de dados final

  - Quando finalizamos o jogo é mostrado apenas uma mensagem;

  ```sh
  -------------------
       Jankenpon
  -------------------
  Jogo Finalizado!
  -------------------
  ```

  - Vamos alterar isso, mostrados os dados finais do jogo, após ele ser encerrado;

  - Logo, em saída de dados final:

    - Chamar a function `loading()`;
    - Limpar o console;
    - Chamar a function `header()`;
    - Mostrar a mensagem "RESULTADO FINAL: ";
    - Mostrar o vencendor;
    - Mostrar o placar do jogo;
    - A quantidade de empates;
    - O número de partidas;
    - Chamar a function `line()`:

    ```js
    //saída de dados final
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

    - Ao executar e jogar 3 partidas, no console:

    ```shell
    -------------------
         Jankenpon
    -------------------
    RESULTADO FINAL: 
    JOGADOR 1 VENCEDOR(A)!
    JOGADOR 1 1 x 0 CPU
    Empates: 2
    Nº de partidas: 3
    -------------------
    ```

- ### Código completo:

```js
var input = require('readline-sync');

const { basicFunctions } = require('./basicFunctions');

//declaração de funções
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

const errorMessage = () => {
  console.log("ATENÇÃO: JOGADA ERRADA!");
  console.log("Digite um valor válido!");
};

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
let playAgain = 0;
let userPlay = 0;
let cpuPlay = 0;
let partialWinner = "";
let userScore = 0;
let cpuScore = 0;
let tieScore = 0;
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

//saída de dados final
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

 

## 9. Fibonacci até número x

### - Introdução:

- Olá pessoas, sejam bem-vindas ao meu canal, meu nome é Thiago e esse é o canal Thiago Carlos Dev. Hoje vamos construir mais uma aplicação usando JvaScript!
- A plicação de hoje foi uma dúvida de um dos seguidores lá do Instagram, se você não me segue ainda, vai lá e segue. Não esqueça também de deixar o seu like no vídeo, comentar e compartihar com os amigos que estão estudando lógica e algoritmos.
- A nossa aplicação será o seguinte: Crie um algoritmo que receba um número e mostre a sequência de Fibonacci até no máximo esse número.

### - Passo 1 - importanto módulo e funções:

- Vamos importar o módulo `readline-sync`, que permite a leitura de entrada do usuário no console.

```javascript
var input = require('readline-sync');
```
- Em seguida, vamos importar o objeto `basicFunctions` do arquivo `basicFunctions.js` que está localizado no mesmo diretório que este arquivo.

```javascript
const { basicFunctions } = require('./basicFunctions');
```
### - Passo 2 - Declaração de variáveis:

- Vamos declarar as variáveis usadas no programa:
  -  `numA`, `numB` e `numC` são variáveis para auxiliar no cálculo da sequência de Fibonacci;
  -  `numeroLimite` é a variável que armazena o número limite inserido pelo usuário;
  -  `fibonacci` é uma string que armazenará os números da sequência de Fibonacci.

```javascript
//declaração de variáveis
let numA = 0, numB = 1, numC  = 0;
let numeroLimite = 0;
let fibonacci = "";
```
### - Passo 3 - Entrada de dados:

- Vamos chamar a função `header` do objeto `basicFunctions` para exibir um cabeçalho na saída, passasndo como parâmetro "Fibonacci ate x";
- Em seguida, usamos a função `question` do `readline-sync` para solicitar ao usuário que digite o número limite e armazenamos o valor na variável `numeroLimite`.

```javascript
//entrada de dados
basicFunctions.header("Fibonacci ate x");
numeroLimite = input.question("Digite o número limite: ");
```
- Ao executar o código, no console:

```shell
-------------------------------
        Fibonacci ate x
-------------------------------
Digite o número limite: 22
```

### - Passo 4 - Processamento de dados

- Aqui, estamos iniciando a sequência de Fibonacci com os valores iniciais de `numA` e `numB`;
- Concatenamos `numA` e `numB` à string `fibonacci` e atualizamos o valor de `numC` para a soma de `numA` e `numB`.

```javascript
fibonacci += numA + " " + numB;
numC = numA + numB;
```
- Nessa estrutura de repetição `while`, continuamos a gerar a sequência de Fibonacci enquanto `numC` for menor ou igual ao `numeroLimite`;
- A cada iteração, concatenamos o valor atual de `numC` à string `fibonacci` e atualizamos os valores de `numA`, `numB` e `numC` para o próximo número da sequência:

```javascript
while(numC <= numeroLimite){
    fibonacci += " " + numC;
    numA = numB;
    numB = numC;
    numC = numA + numB;
}
```
### - Passo 5 - Saída de dados:

- Por fim, limpamos o console com `console.clear()`;
- Exibimos novamente o cabeçalho;
- Mostramos o número limite digitado pelo usuário;
- E exibimos a sequência de Fibonacci até o limite;
- A função `line` do objeto `basicFunctions` é chamada para exibir uma linha horizontal no final:

```javascript
// saída de dados
console.clear();
basicFunctions.header("Fibonacci ate x");
console.log(`Número limite: ${numeroLimite}`);
console.log(fibonacci);
basicFunctions.line("Fibonacci ate x");
```
- No console:

```shell
-------------------------------
        Fibonacci ate x
-------------------------------
Número limite: 22
0 1 1 2 3 5 8 13 21
-------------------------------
```

### - Conclusão:

- Espero que tenham gostado do código! Se você tiver alguma dúvida pode deixar nos comentários;
- Não esqueça também de deixar o seu like no vídeo, comentar e compartihar com os amigos;
- Até o próximo vídeo.













