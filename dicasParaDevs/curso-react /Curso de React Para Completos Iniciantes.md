# Curso de React Para Completos Iniciantes

Professor: Felipe Rocha

[VIDEO AULA](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21)

## O que você precisa saber

- HTML, CSS, JavaScript(ES6+).

## O que é React

- Biblioteca para criar interfazes de usuário.
- Aprenda uma vez, use em qualquer lugar.
- Conceito de componentes.

## Conceito de Componentes

- Construímos as nossas aplicações como se fossem peças de lego.
- Um componente é uma função JavaScript (JSX).
- Vantagens:
  - Reusabilidade de codigo;
  - Ótimo trabalho em equipe.

## Preparando

Crie uma pasta para o seu projeto e abra ela pelo VSC. Detalhe, o nome da pasta não pode ter espaço.

No Google, pesquise por _**create react app**_ e acesse o link do [github](https://github.com/facebook/create-react-app) deste repoitório.

Acesse a paste pelo terminal e digite o seguinte comando:

```shell
npx create-react-app my-app
```

Após isso, seu primeiro projeto react está criado. Acesse a pasta **my-app** e em seguida coloque a aplicação para rodar, com os seguintes comandos:

```shell
cd my-app
npm start
```

Pronto, sua primeira aplicação react está rodando.

Em **my-app** acesse a pasta **public** e em seguida o arquivo **index.html**. Neste Arquivo Apague todos os cometários.

Antes de seguir no projeto, no seu VSC, instale a extenção **Simple React Snippets**.

Agora na pasta **src**, abra o arquivo **App.js** e apague tudo, vamos começar a criar a plicação do zero.

- Faça a importação do **React**:

```react
import React from 'react'
```

- Vamos criar nossa funtion e exportá-la:

```react
const App = () => {
  return(
    <h1>Hello World!</h1>
  )
}

export default App
```

- Usando **JavaScript** dentro do **React**:

```react
const App = () => {
  const message = `Welcome to React!`
  return(
    <h1>{message}</h1>
  )
}
```

Agora vamos excluir aguns arquivos que não vamos precisar deles:

No terminal execute **Ctrl+c** para finalizar a execução da plaicação.

- Na pasta **src**:
  - setupTests.js
  - reportWebVitals.js
  - App.css
  - App.test.js
  - logo.svg
- No Arquivo **index.js** vamos apagar as seguintes partes:

```js
import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

Agora rode a aplicação mais uma vez e estará funcionando normal.

## Início da construção do To Do List

Na pasta **src** crie um arquivo **App.css**

```css
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 2px solid chartreuse;
  padding: 30px;
  border-radius: 10px;
}
```

Para fazer a importação, no arquivo **App.js**:

```react
import "./App.css"
```

Usando uma classe no **React**:

```react
const App = () => {
  const message = `Welcome to React!`
  
  return <div className="container">  </div>
}
```

No arquivo **index.css** adicione o background-color #222 no _**body**_:

```css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #222;
}
```

## Entendendo state

No **React** a function só retorna apenas um elemento, portanto, para renderizar mais de um elemente, eles temque ser filho do elemento principal que está sendo renderizado pela function. Exemplos:

- Não renderiza, apresenta erro:

```react
const App = () => {
  const message = `Welcome to React!`

  return (
    <div className="container">{message}</div>
    <button>Teste</button>
  )
}
```

- Renderiza sem erro:

```react
const App = () => {
  const message = `Welcome to React!`

  return (
    <div>
      <div className="container">{message}</div>
      <button>Teste</button>
    </div>
  )
}
```

- Pode também ser usado Os fragmentos do elemento principal:

```react
const App = () => {
  const message = `Welcome to React!`

  return (
    <>
      <div className="container">{message}</div>
      <button>Teste</button>
    </>
  )
}
```

Agora mudamos o tipo de da variável **message** e criamos um botão para mudar o conteúdo da mensagem:

```react
const App = () => {
  let message = `Welcome to React!`

  return (
    <>
      <div className="container">{message}</div>
      <button onClick={() => (message = `Hello World!`)}>
        mudar mensagem
      </button>
    </>
  )
}
```

Desta maneira, você vai observar que mesmo clicando no botão a mensagem são será alterada. Isso ocorre porque ainda não foi implementado o **State**. Implementando o **State**:

```react
import React, { useState } from 'react'

import "./App.css"

const App = () => {
  const [message, setMessage] = useState(`Hello World!`)

  return (
    <>
      <div className="container">{message}</div>
      <button onClick={() => setMessage(`Welcome to React!`)}>
        mudar mensagem
      </button>
    </>
  )
}

export default App
```

Agora ao clicar no botão a menssagem será atualizada.

Vamos começar a criar as tarefas:

```react
import React, { useState } from 'react'

import "./App.css"

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: 2,
      title: 'Ler Livros',
      completed: true,
    }
  ])

  return (
    <>
      <div className="container"></div>
    </>
  )
}

export default App
```

## [21:47](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=1307s) - Criação do componente que exibe as tarefas

## [22:53](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=1373s) - Entendendo props 

























































