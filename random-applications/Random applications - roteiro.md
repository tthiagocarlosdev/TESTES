# Random applications - roteiro

### 1. header( );

### 2. line( );

### 3. NodeJS - module.export e require( );

### 4. Math.random( )

### 5. snake_case with replace( )

### 6. function loading( ) with method getTime( );

### 7. Jankenpon( ) with arrow functions;

### 8. Password Generator with fromCharCode( )...



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