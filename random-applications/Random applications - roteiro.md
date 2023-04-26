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

parei

## 5. NodeJS - module.export e require( );

Claro, vou criar um roteiro para explicar esse código. 

Introdução:
- Olá, neste vídeo vamos falar sobre um arquivo em JavaScript que contém diversas funções básicas que podem ser usadas em diferentes projetos. Especificamente, vamos nos concentrar no objeto basicFunctions, que é exportado por esse arquivo.

Passo 1 - Explicação geral do objeto basicFunctions:
- O objeto basicFunctions contém quatro funções: header, line, loading e getRandomIntInclusive. Essas funções podem ser usadas para criar um cabeçalho com uma linha, imprimir uma linha de caracteres, exibir uma animação de carregamento e gerar um número inteiro aleatório em um intervalo.

Passo 2 - Explicação da função header:
- A função header é usada para criar um cabeçalho com uma linha em cima e embaixo do texto. Ela recebe uma string como argumento, que será exibida no centro do cabeçalho. A função começa calculando o tamanho do texto e, a partir disso, define o tamanho da linha e o espaço que deve ser adicionado antes do texto.
- Em seguida, a função usa um loop para construir a string do texto com o espaço adicionado e, depois, chama a função line para imprimir a linha superior, o texto e a linha inferior.

Passo 3 - Explicação da função line:
- A função line é usada para imprimir uma linha de caracteres. Ela recebe uma string como argumento, que determina o tamanho da linha. A função começa calculando o tamanho da string e, a partir disso, define o tamanho da linha.
- Em seguida, a função usa um loop para construir a string da linha com o caractere "-" e, depois, imprime a linha no console.

Passo 4 - Explicação da função loading:
- A função loading é usada para exibir uma animação de carregamento no console. Ela começa definindo uma string que será usada para representar a animação e uma variável para controlar a porcentagem concluída.
- Em seguida, a função entra em um loop que é executado enquanto a porcentagem concluída for menor ou igual a 100. Em cada iteração do loop, a função limpa o console, exibe a string da animação e a porcentagem concluída, aguarda um segundo usando a função syncDelay e atualiza a string da animação e a porcentagem concluída.

Passo 5 - Explicação da função getRandomIntInclusive:
- A função getRandomIntInclusive é usada para gerar um número inteiro aleatório em um intervalo. Ela recebe dois argumentos: o valor mínimo e o valor máximo do intervalo. A função usa as funções Math.ceil e Math.floor para garantir que os valores mínimo e máximo sejam inteiros e, em seguida, usa a função Math.random para gerar um número aleatório entre 0 e 1.
- A partir do número aleatório, a função calcula um número inteiro dentro do intervalo especificado e o retorna.

Conclusão:
- O objeto basicFunctions é útil para simplificar o código em projetos JavaScript, pois fornece funções que podem ser usadas para tarefas comuns, como criar um cabeçalho com uma linha, imprimir uma linha de caracteres, exibir uma animação de carregamento e gerar um número inteiro aleatório em um intervalo.

