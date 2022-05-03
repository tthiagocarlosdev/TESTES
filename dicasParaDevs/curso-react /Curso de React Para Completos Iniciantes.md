# Curso de React Para Completos Iniciantes

Professor: Felipe Rocha

[VIDEO AULA](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21)

## [00:00](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=0s) - Introdução

- Vamos construir uma aplicação que gerencia tarefas.
- Aprender React.
- Aprender a consumir uma API.

## [01:17](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=77s) - O que é o React?

- Biblioteca para criar interfaces de usuário.
- Aprenda uma vez, use em qualquer lugar.
- Conceito de componentes.

## [02:07](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=127s) - Conceito de componentes

- Construímos as nossas aplicações como se fossem peças de lego.
- Um componente é uma função JavaScript (JSX).
- Vantagens:
  - Reusabilidade de codigo;
  - Ótimo trabalho em equipe.

## [04:10](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=250s) - O que você precisa saber para assistir este curso

- HTML, CSS, JavaScript(ES6+).

## [04:58](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=298s) - Criação do projeto

- Crie uma pasta para o seu projeto e abra ela pelo VSC. Detalhe, o nome da pasta não pode ter espaço.
- Baixe o Node.js
- Baixe o Visual Studio Code

## [06:07](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=367s) - create-react-app

O **FaceBook** é o criador do **React**. O **FaceBook** criou uma ferramenta para criarmos projetos **react** muito fácil.

No Google, pesquise por _**create-react-app**_ e acesse o link do [github](https://github.com/facebook/create-react-app) deste repositório.

Acesse a paste pelo terminal e digite o seguinte comando:

```shell
npx create-react-app my-app
```

## [07:40](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=460s) - Entendendo um projeto React

Arquivo **package.json** é presente em todos os projetos **node**. Nele encontramos as configurações do projeto, as dependências, os scripts.

Após isso, seu primeiro projeto react está criado. Acesse a pasta **my-app** pelo o terminal e em seguida coloque a aplicação para rodar, com os seguintes comandos:

```shell
cd my-app
npm start
```

Pronto, sua primeira aplicação **react** está rodando.

Em **my-app** acesse a pasta **public** e em seguida o arquivo **index.html**. Neste Arquivo apague todos os cometários.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

Antes de seguir no projeto, no seu VSC, instale as seguintes extenções:

- **Simple React Snippets**;
- **Prettier - Code formatter**;
- **Dracula Official**.

## [11:05](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=665s) - Criação do nosso primeiro componente

Agora na pasta **src**, abra o arquivo **App.js** e apague tudo, vamos começar a criar nosso componente do zero.

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

Após isso, a página será atualizada automaticamente e o componente será apresentado na tela. 

## [12:11](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=731s) - JSX

- Usando **JavaScript** dentro do **React**:

```react
const App = () => {
  const message = `Welcome to React!`
  return(
    <h1>{message}</h1>
  )
}
```

## [12:50](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=770s) - Organizando o projeto

Agora vamos excluir aguns arquivos que não vamos precisar deles:

No terminal execute **Ctrl+c** para finalizar a execução da aplicação.

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

Agora rode a aplicação mais uma vez ` $ npm start ` e estará funcionando normal.

## [14:16](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=856s) - Início da construção do To Do List

Estilizando nossa aplicação.

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

A aplicação já apresentará o estilo configurado acima.

## [16:19](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=979s) - Entendendo state

No **React** a function só retorna apenas um elemento, portanto, para renderizar mais de um elemente, ele tem que ser filho do elemento principal que está sendo renderizado pela function. Exemplos:

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

- Pode também ser usado os **fragments** do elemento principal:

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

Agora ao clicar no botão a mensagem será atualizada, porque o **State** foi atualizado.

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

Para renderizar as tarefas, vamos criar um componente **tasks**.

Na pasta **src** crie outra pasta com o nome **components** e dentro desta pasta crie o arquivo **Tasks.js**

No arquivo **Tasks.js** faça a importação do **react**, crie a function **Tasks** e faça a exportação dela.

```react
import React from 'react'

const Tasks = () => {
  return <h1>Tasks</h1>
}

export default Tasks

```

Vamos fazer a importação desse componente no **App.js**

```react
import Tasks from './components/Tasks'
```

Ainda em **App.js** vamos invocar o **Tasks**:

```react
return (
    <>
      <div className="container">
        <Tasks />
      </div>
    </>
  )
```

## [22:53](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=1373s) - Entendendo props 

**Props** são **dados** que você consegue passar de um **componente pai** para um **componente filho**.

Em **App.js** vamos fazer isso do componente pai **App** para o componente filho **Tasks**:

```react
return (
    <>
      <div className="container">
        <Tasks tasks={tasks} />
      </div>
    </>
  )
```

Ainda temos que receber as **tasks** no componente **Tasks** no arquivo **Tasks.js**:

```react
import React from 'react'

const Tasks = ( props ) => {
  console.log(props)
  return <h1>Tasks</h1>
}

export default Tasks
```

Ao inspencionar a página, você observará que as tasks estão sendo imprimidas no console. Podemo passar as tasks diretamente pela function:

```react
import React from 'react'

const Tasks = ( { tasks } ) => {
  console.log(tasks)
  return <h1>Tasks</h1>
}

export default Tasks

```

```react
import React from 'react'

const Tasks = ( { tasks } ) => {
  return <h1>Tasks</h1>
}

export default Tasks
```

## [26:10](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=1570s) - Criação do componente que exibe uma tarefa

Vamos criar um **task**. Na pasta **components** crie o arquivo **Task.js**.

Neste arquivo digite **imr** + Enter e a importação do **react** será realizada.

```react
import React from 'react';
```

Em seguida digite **sfc** + Tab já será criado o componente.

```react
const  = () => {
  return (  );
}
 
export default ;
```

Componente **Task**:

```react
import React from 'react';

const Task = () => {
  return <h1>task</h1>;
}
 
export default Task ;
```

Agora vamos renderizar uma task para cada task. Em **Tasks.js**:

```react
import React from 'react'
import Task from './Task'

const Tasks = ( { tasks } ) => {
  return (
    <>
      { tasks.map(task => (
        <Task />
      ))}
    </>
  )
}

export default Tasks

```

Agora vamos renderizar o título da task. Em **Task.js**:

```react
import React from 'react';

const Task = ({ task }) => {
  return <h1>{task.title}</h1>;
}
 
export default Task ;
```

Em **Tasks.js**:

```react
import React from 'react'
import Task from './Task'

const Tasks = ( { tasks } ) => {
  return (
    <>
      { tasks.map(task => (
        <Task task={task} />
      ))}
    </>
  )
}

export default Tasks

```

Para estilizar a **Task** vamos criar o arquivo **Task.css** dentro da pasta **components**:

```css
.task-container {
  background-color: #444;
  margin: 8px 0;
  padding: 15px 20px;
  display: flex;
  border-radius: 5px;
  justify-content: center;
  color: #eee;
  align-items: center;
}
```

Em **Task.js** fazemos a importação do **css** e mostramos o title da task.

```react
import React from 'react';

import "./Task.css";

const Task = ({ task }) => {
  return <div className="task-container">{ task.title }</div>
}
 
export default Task;
```

## [30:25](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=1825s) - Adição de uma tarefa

## [35:01](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=2101s) - Criação do componente Button

## [41:11](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=2471s) - Adição de uma tarefa

























































