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

Acesse a pasta pelo terminal e digite o seguinte comando:

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

Em **my-app** acesse a pasta **public** e em seguida o arquivo **index.html**. Neste arquivo apague todos os cometários.

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

O arquivo **index.js** envia toda a nossa aplicação para a **div.root** do arquivo **index.html** fazendo com que não precisemos nos preocupar com HTML.

Arquivo **index.js**:

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

## [11:05](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=665s) - Criação do nosso primeiro componente

Agora na pasta **src**, abra o arquivo **App.js** e apague tudo, vamos começar a criar nosso componente do zero.

- Faça a importação do **React**:

```react
import React from 'react'
```

- Vamos criar nossa function e exportá-la:

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

Agora vamos excluir alguns arquivos que não vamos precisar deles:

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

Arquivo **index.js**:

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
```

Agora rode a aplicação mais uma vez ` npm start ` e estará funcionando normal.

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

Desta maneira, você vai observar que mesmo clicando no botão a mensagem são será alterada. Isso ocorre porque ainda não foi implementado o **State**. **State** é um **hook** do react que rastrea o estado em um componente, geralmente dados ou propriedades. Com isso conseguimos alterar o conteúdo de uma variável. Para declarar o **State** escrevemos o nome da variável (**message**) e a function (**setMessage**) que vai ser chamada para alterar o valor da variável, dentro de **colchetes** recebendocom atribuição o **useState** e o conteúdo primário da variável. Em seguida dentro do evento **onClick**, passamos a function recebendo como parâmetro o novo valor da variável. Implementando o **State**:

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

Vamos começar a criar as tarefas que serão colocadas na variável **tasks**, tendo a function **setTasks** usada no **useState**:

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

**Props** são **dados** que você consegue passar de um **componente pai** para um **componente filho**. E é com os props que vamos passar as **tasks** para o componente **Tasks**.

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

Na pasta **components** crie o arquivo **AddTask.jsx**. Neste arquivo vamos criar a parte para adicionar tarefas.

Com isso, vamos mudar os nomes de algums arquivos, colocando a extenção **jsx**, são eles:

- Task.js - Task.jsx
- Tasks.js - Tasks.jsx
- App.js - App.jsx

Caso a aplicação pare, reinicie com **npm start**.

Agora em **AddTask.jsx**:

```jsx
import React from 'react';

const AddTask = () => {
  return ( 
    <input type="text" />
   );
}
 
export default AddTask;
```

No arquivo **App.jsx** vamos importar o componente **AddTask.jsx**:

```jsx
import React, { useState } from 'react'

import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
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
    },
  ])

  return (
    <>
      <div className="container">
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </>
  )
}

export default App
```

Para estilizar o **input** vamos criar o arquivo **AddTask.css**:

```css
.add-task-container {
  margin: 15px 0;
  width: 100%;
  display: flex;
}

.add-task-input {
  height: 40px;
  padding: 0 10px;
  border-radius: 5px;
  border: none;
  flex: 2;
  background-color: #444; 
  color: #eee;
  font-size: 16px;
}
```

E em **AddTask.jsx** vamos importar esse **css** e adicionar as **className**:

```jsx
import React from 'react';
import './AddTask.css'

const AddTask = () => {
  return ( 
    <div className="add-task-container">
      <input className="add-task-input" type="text" />
    </div>
   );
}
 
export default AddTask;
```

## [35:01](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=2101s) - Criação do componente Button

Vamos criar o componente **Button.jsx** em **components**:

```jsx
import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="button" >
      { children }
    </button> );
}

export default Button;
```

Para estilizar este componente, vamos criar o arquivo **Button.css**:

```css
.button {
  background-color: chartreuse;
  height: 40px;
  padding: 0 10px;
  border-radius: 5px;
  width: 100%;
  font-size:16px;
  color: #444;
  font-weight: bold;
  cursor: pointer;
  border: none;
}
```

Importando o **css** no **Button**:

```jsx
import React from 'react';
import './Button.css'

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="button" >
      { children }
    </button> );
}

export default Button;
```

Depois, vamos importar esse componente **Button** em **AddTask.jsx**, passando o children(adicionar) como parâmetro:

```jsx
import React from 'react';
import './AddTask.css'
import Button from './Button';

const AddTask = () => {
  return ( 
    <div className="add-task-container">
      <input className="add-task-input" type="text" />
      <Button> Adicionar </Button>
    </div>
   );
}
 
export default AddTask;
```

Agora vamos criar um **container** para colocar o **Button** dentro, logo, em **AddTask.css**:

```css
.add-task-container {
  margin: 15px 0;
  width: 100%;
  display: flex;
}

.add-task-input {
  height: 40px;
  padding: 0 10px;
  border-radius: 5px;
  border: none;
  flex: 2;
  background-color: #444; 
  color: #eee;
  font-size: 16px;
}

.add-task-button-container {
  margin-left: 10px;
  flex: 1;
}
```

Em **AddTask.jsx**:

```jsx
import React from 'react';
import './AddTask.css'
import Button from './Button';

const AddTask = () => {
  return ( 
    <div className="add-task-container">
      <input className="add-task-input" type="text" />
      <div className="add-task-button-container">
        <Button> Adicionar </Button>
      </div>
      
    </div>
   );
}
 
export default AddTask;
```

## [41:11](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=2471s) - Adição de uma tarefa

Vamos começar adicionando o state e a function (**handleInputChange**) que vai receber o valor do input em **AddTask.jsx**:

```jsx
import React, { useState } from 'react';

import './AddTask.css'
import Button from './Button';

const AddTask = () => {
  const [inputData, setInputData] = useState("")

  const handleInputChange = (e) => {
    setInputData(e.target.value)
  }

  return ( 
    <div className="add-task-container">
      <input 
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text" 
      />
      <div className="add-task-button-container">
        <Button> Adicionar </Button>
      </div>
      
    </div>
   );
}
 
export default AddTask;
```

Em **App.jsx**, vamos criar a function que vai receber o title da task:

```jsx
import React, { useState } from 'react'

import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import "./App.css"
import Button from './components/Button'


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
    },
  ])

  //adiciona o title na tasks
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [ ...tasks, {
      title: taskTitle,
      id:Math.random(10),
      completed: false,
    }]

    setTasks(newTasks)
  }

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks} />
      </div>
    </>
  )
}

export default App
```

Agora vamos passar a function **handleTaskAddition** para o **AddTask**, vamos criar a function **handleAddTaskClick** que quando clicar no botão **AddTask** será chamada, pegando o que tem no input e passando como props para a function **handleTaskAddition** que por sua vez vai adicionar a nova task em **App.jsx**. Logo, em **AddTask**:

```jsx
import React, { useState } from 'react';

import './AddTask.css'
import Button from './Button';

const AddTask = ({handleTaskAddition}) => {
  const [inputData, setInputData] = useState("")

  const handleInputChange = (e) => {
    setInputData(e.target.value)
  }

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData)
  }

  return ( 
    <div className="add-task-container">
      <input 
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text" 
      />
      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick} > Adicionar </Button>
      </div>
      
    </div>
   );
}
 
export default AddTask;
```

Em **App.jsx** vamos melhorar o **random** importando uma biblioteca node. Na raiz do seu projeto, execute o comando abaixo no terminal:

```shell
npm install uuid
```

Essa biblioteca gera id's aleatórios.

No arquivo **App.jsx** vamos importar essa biblioteca e chamar ela em **id** em vez do objeto Math.random:

```jsx
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
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
    },
  ])

  //adiciona o title na tasks
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [ ...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTasks(newTasks)
  }

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks} />
      </div>
    </>
  )
}

export default App
```

Em **AddTask.jsx** vamos setar o inputData para vazio para limpar o input após inserir uma nova task:

```jsx
import React, { useState } from 'react';

import './AddTask.css'
import Button from './Button';

const AddTask = ({handleTaskAddition}) => {
  const [inputData, setInputData] = useState("")

  const handleInputChange = (e) => {
    setInputData(e.target.value)
  }

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData)
    setInputData('')
  }

  return ( 
    <div className="add-task-container">
      <input 
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text" 
      />
      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick} > Adicionar </Button>
      </div>
      
    </div>
   );
}
 
export default AddTask;
```

## [51:20](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=3080s) - Conclusão de uma tarefa

Vamos adicionar a opção de completar a tarefa. Quando a tarefa for realizada, vamos poder marcar na lista de tarefas. Vamos voltar para **App.jsx** para criar uma function para alterar o **completed** da task e passá-la paara a **task**.

```jsx
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
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
    },
  ])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) return { ...task, completed: !task.completed }

      return task
    })

    setTasks(newTasks)
  }

  //adiciona o title na tasks
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [ ...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTasks(newTasks)
  }

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick} />
      </div>
    </>
  )
}

export default App
```

Vamos passar a **handleTaskClick** também em **Tasks.jsx**:

```jsx
import React from 'react'
import Task from './Task'

const Tasks = ( { tasks, handleTaskClick } ) => {
  return (
    <>
      { tasks.map(task => (
        <Task task={task} handleTaskClick={handleTaskClick} />
      ))}
    </>
  )
}

export default Tasks
```

Vamos também passar no **Task.jsx**:

```jsx
import React from 'react';

import "./Task.css";

const Task = ({ task, handleTaskClick }) => {
  return <div className="task-container">{ task.title }</div>
}
 
export default Task;
```

Ainda em **Task.jsx**, vamos criar um style condicional para a task:

```jsx
import React from 'react';

import "./Task.css";

const Task = ({ task, handleTaskClick }) => {
  return(
    <div 
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse"} : {}}
    >
      {task.title}
    </div>
  )
  // return <div className="task-container">{ task.title }</div>
}
 
export default Task;
```

Agora vamos fazer com que ao clicar na task o **onClick** acione a **Task.jsx** passando o **id** e faça a marcação de que a tarefa foi realizada ou não:

```jsx
import React from 'react';

import "./Task.css";

const Task = ({ task, handleTaskClick }) => {
  return(
    <div 
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse"} : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
    </div>
  )
  // return <div className="task-container">{ task.title }</div>
}
 
export default Task;
```

Vamos colocar um **cursor** ao passar o mouse sobre cada task. Logo em **Task.css**:

```css
.task-container {
  background-color: #444;
  margin: 8px 0;
  padding: 15px 20px;
  display: flex;
  border-radius: 5px;
  justify-content: space-between;
  color: #eee;
  align-items: center;
}

.task-title {
  cursor: pointer;
}
```

## [58:07](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=3487s) - Deleção de uma tarefa

Vamos colocar o ícone de deletar. Em **Task.jsx**:

```jsx
import React from 'react';

import "./Task.css";

const Task = ({ task, handleTaskClick }) => {
  return(
    <div 
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse"} : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button className="remove-task-button">X</button>
      </div>
    </div>
  )
}
 
export default Task;
```

Vamos estilizar este **button**, logo, em **Task.css**:

```css
.task-container {
  background-color: #444;
  margin: 8px 0;
  padding: 15px 20px;
  display: flex;
  border-radius: 5px;
  justify-content: space-between;
  color: #eee;
  align-items: center;
}

.task-title {
  cursor: pointer;
}

.remove-task-button {
  background-color: #444;
  border: none;
  font-size: 16px;
  color: chartreuse;
  cursor: pointer;
}
```

Em **App.jsx** vamos criar a funtion que vai deletar a task:

```jsx
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
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
    },
  ])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) return { ...task, completed: !task.completed }

      return task
    })

    setTasks(newTasks)
  }

  //adiciona o title na tasks
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [ ...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTasks(newTasks)
  }

  // remove uma task
  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id != taskId)

    setTasks(newTasks)
  }

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks 
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}  
        />
      </div>
    </>
  )
}

export default App
```

Vamos chamar a function **handleTaskDeletion** em **Tasks.jsx**:

```jsx
import React from 'react'
import Task from './Task'

const Tasks = ( { tasks, handleTaskClick, handleTaskDeletion } ) => {
  return (
    <>
      { tasks.map(task => (
        <Task 
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      ))}
    </>
  )
}

export default Tasks
```

E também chamar a function **handleTaskDeletion** em **Task.jsx**:

```jsx
import React from 'react';

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  return(
    <div 
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse"} : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button 
          className="remove-task-button" 
          onClick={() => handleTaskDeletion(task.id)} 
        >
          X
        </button>
      </div>
    </div>
  )
}
 
export default Task;
```

## [01:02:55](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=3775s) - Colocando os ícones

Vamos colocar os icones usando a biblioteca **React-Icons**. Acesse o [link](https://react-icons.github.io/react-icons/) da biblioteca, copie o código de instalação e execute no projeto. Detalhe, para realizar a instalação, pare de executar o projeto. Após a instalação, execute **npm start** para voltar a rodar o projeto.

```shell
npm install react-icons --save
```

Depois de instalada, vamos fazer a importação da biblioteca para usá-la em **Task.jsx**:

```jsx
import React from 'react';
import { CgClose } from 'react-icons/cg'

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  return(
    <div 
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse"} : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button 
          className="remove-task-button" 
          onClick={() => handleTaskDeletion(task.id)} 
        >
          <CgClose />
        </button>
      </div>
    </div>
  )
}
 
export default Task;
```

## [01:04:20](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=3860s) - Criação do componente Header

Vamos criar o componente **Header.jsx** na pasta **components**.

```jsx
import React from 'react';

const Header = () => {
  return <h1 style={{ color: "#eee" }} >Minhas Tarefas</h1>
}
 
export default Header;
```

Em **App.jsx** vamos importar o **Header.jsx** e posicioná-lo dentro do **container**:

```jsx
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

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
    },
  ])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) return { ...task, completed: !task.completed }

      return task
    })

    setTasks(newTasks)
  }

  //adiciona o title na tasks
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [ ...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTasks(newTasks)
  }

  // remove uma task
  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id != taskId)

    setTasks(newTasks)
  }

  return (
    <>
      <div className="container">
        <Header />
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks 
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}  
        />
      </div>
    </>
  )
}

export default App
```

## [01:05:40](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=3940s) - Detalhes de uma tarefa

Vamos colocar o ícone de detalhes de tarefa, importando com o nome **CgInfo** e depois posicionando o ícone antes do ícone de excluir tarefa. Em **Task.jsx**:

```jsx
import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg'

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  return(
    <div 
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse"} : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button 
          className="see-task-datails-button" 
        >
          <CgInfo />
        </button>
        <button 
          className="remove-task-button" 
          onClick={() => handleTaskDeletion(task.id)} 
        >
          <CgClose />
        </button>
      </div>
    </div>
  )
}
 
export default Task;
```

Em **Task.css** vamos fazer a estilização desse ícone, apenas adicionando a _**className**_ na estilização do ícone de excluir tarefa:

```css
.task-container {
  background-color: #444;
  margin: 8px 0;
  padding: 15px 20px;
  display: flex;
  border-radius: 5px;
  justify-content: space-between;
  color: #eee;
  align-items: center;
}

.task-title {
  cursor: pointer;
}

.remove-task-button, .see-task-datails-button {
  background-color: #444;
  border: none;
  font-size: 24px;
  color: chartreuse;
}
```

## [01:07:12](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=4032s) - Entendendo páginas no React

Execute o comando abaixo no terminal, na raiz deste projeto, para utilizar o **react-router-dom**:

```shell
npm install react-router-dom@5.2.0
```

Em outros projetos, execute o seguinte comando:

```shell
npm install react-router-dom
```

## [01:09:16](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=4156s) - Configurando o react-router-dom

Em **App.jsx** vamos fazer a configuração. Importe o **BrowserRouter**, e o coloque ao redor do _**container**_:

```jsx
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router} from 'react-router-dom'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

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
    },
  ])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) return { ...task, completed: !task.completed }

      return task
    })

    setTasks(newTasks)
  }

  //adiciona o title na tasks
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [ ...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTasks(newTasks)
  }

  // remove uma task
  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id != taskId)

    setTasks(newTasks)
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks 
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}  
        />
      </div>
    </Router>
  )
}

export default App
```

Agora vamos fazer o mapeamento de cada "página" para os nossos componentes. Importe o **Route** do **react-router-dom** e vamos colocá-lo dentro do **Router** abaixo do **Header**:

```jsx
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

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
    },
  ])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) return { ...task, completed: !task.completed }

      return task
    })

    setTasks(newTasks)
  }

  //adiciona o title na tasks
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [ ...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTasks(newTasks)
  }

  // remove uma task
  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id != taskId)

    setTasks(newTasks)
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition}/>
              <Tasks 
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}  
              />
            </>
          )}
        
        />
      </div>
    </Router>
  )
}

export default App
```

## [01:12:36](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=4356s) - Criação do componente Task Details

Agora vamos criar outro **Route** que será para a "página" de detalhes. Em **components** crie o componente **TaskDetails.jsx**. Neste componente vamos colocar um botão (voltar) e a parte de detalhes da tarefa:

```jsx
import React from 'react';

import Button from './Button'

const TaskDetails = () => {
  return ( 
    <>
      <div className="back-button-container">
        <Button>Voltar</Button>
      </div>
      <div className="task-details-container">
        <p></p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est animi perferendis iure beatae vitae consequatur.
        </p>
      </div>
    </>
   );
}
 
export default TaskDetails;
```

Em **App.jsx** vamos adicionar ouitro **Route** e importar **TaskDetails**:

```jsx
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import TaskDetails from './components/TaskDetails'


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
    },
  ])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) return { ...task, completed: !task.completed }

      return task
    })

    setTasks(newTasks)
  }

  //adiciona o title na tasks
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [ ...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTasks(newTasks)
  }

  // remove uma task
  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id != taskId)

    setTasks(newTasks)
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition}/>
              <Tasks 
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}  
              />
            </>
          )}
        
        />
        <Route 
          path="/2122" 
          exact
          component={TaskDetails}
        />
      </div>
    </Router>
  )
}

export default App
```

## [01:15:44](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=4544s) - Parâmetros na URL 

Vamos passar o parâmetro para o **path** da Route **TaskDetails** em **App.jsx**. Nosse parâmetro nesse caso, será **taskTitle**:

```jsx
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import TaskDetails from './components/TaskDetails'


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
    },
  ])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) return { ...task, completed: !task.completed }

      return task
    })

    setTasks(newTasks)
  }

  //adiciona o title na tasks
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [ ...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTasks(newTasks)
  }

  // remove uma task
  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id != taskId)

    setTasks(newTasks)
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition}/>
              <Tasks 
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}  
              />
            </>
          )}
        
        />
        <Route 
          path="/:taskTitle" 
          exact
          component={TaskDetails}
        />
      </div>
    </Router>
  )
}

export default App
```

**UseParams** retorna os parâmteros que estamos utilizando na URL. Logo, em **TaskDetails**:

```jsx
import React from 'react';
import { useParams } from 'react-router-dom';

import Button from './Button'

const TaskDetails = () => {
  const params = useParams()

  console.log(params)
  return ( 
    <>
      <div className="back-button-container">
        <Button>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est animi perferendis iure beatae vitae consequatur.
        </p>
      </div>
    </>
   );
}
 
export default TaskDetails;
```

## [01:19:34](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=4774s) - Estilizando o Task Details

Na pasta **components** vamos criar o componente **TaskDetails.css** para estilizar:

```css
.task-details-container {
  background: #444;
  margin: 15px 0;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  color: #eee;
  border-radius: 5px;
}

.task-details-container h2 {
  margin-bottom: 5px;
  color: chartreuse;
}

.back-button-container {
  width: 30%;
  margin-top: 10px;
}
```

Em **TaskDetails.jsx** vamos importar o **TaskDetails.css**:

```jsx
import React from 'react';
import { useParams } from 'react-router-dom';

import Button from './Button'

import './TaskDetails.css'

const TaskDetails = () => {
  const params = useParams()

  console.log(params)
  return ( 
    <>
      <div className="back-button-container">
        <Button>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est animi perferendis iure beatae vitae consequatur.
        </p>
      </div>
    </>
   );
}
 
export default TaskDetails;
```

Em **index.css** vamos resetar as configurações de estilo:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #222;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

```

## [01:21:22](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=4882s) - Lidando com click na tarefa (Task Details)

Vamos adicionar a funcionalidade para quando clicar no botão **informações** a aplicação seja direcionada para a "página" correspondente. 

Antes vamos colocar uma margem entre os ícones, em **Task.css**:

```css
.task-container {
  background-color: #444;
  margin: 8px 0;
  padding: 15px 20px;
  display: flex;
  border-radius: 5px;
  justify-content: space-between;
  color: #eee;
  align-items: center;
}

.task-title {
  cursor: pointer;
}

.remove-task-button, .see-task-datails-button {
  background-color: #444;
  border: none;
  font-size: 24px;
  color: chartreuse;
  margin: 0 5px;
}
```

Para criar a navegação entre "páginas", vamos usar outro **hulk** do **react-router-dom**, que será o _**useHistory**_. Vamos criar a variável **history** recebendo o **useHistory**. Vamos também criar a function **handleTaskDetailsClick** e colocá-la no _**onClick**_ do button informações. Logo, em **Task.jsx**:

```jsx
import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg'
import { useHistory } from 'react-router-dom'

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const history = useHistory();

  const handleTaskDetailsClick = () => {
    history.push(`/${task.title}`)
  }

  return(
    <div 
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse"} : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button 
          className="see-task-datails-button"
          onClick={handleTaskDetailsClick} 
        >
          <CgInfo />
        </button>
        <button 
          className="remove-task-button" 
          onClick={() => handleTaskDeletion(task.id)} 
        >
          <CgClose />
        </button>
      </div>
    </div>
  )
}
 
export default Task;
```

Vamos usar o **useHistory** no button **voltar**. Em **TaskDetails.jsx**:

```jsx
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Button from './Button'

import './TaskDetails.css'

const TaskDetails = () => {
  const params = useParams()
  const history = useHistory()

  const handleBackButtonClick = () => {
    history.goBack()
  }

  return ( 
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick} >Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est animi perferendis iure beatae vitae consequatur.
        </p>
      </div>
    </>
   );
}
 
export default TaskDetails;
```

Agora vamos adicionar um _**hover**_ e uma **transition** ao button. Logo, em **Button.css**:

```css
.button {
  background-color: chartreuse;
  height: 40px;
  padding: 0 10px;
  border-radius: 5px;
  width: 100%;
  font-size:16px;
  color: #444;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: all 0.5s ease;
}

.button:hover {
  background-color: #444;
  color: chartreuse;
}
```

**ATENÇÃO!** 

Nesta parte, ao configurar a navegação entre as "páginas" ao clicar nos botões informações e voltar, nada acontecia, apenas mudava o endereço na URL. Ao pesquisar nos comentários do curso, achei um comentário que sugeriu deletar todo o conteúdo do arquivo **index.js** e colocar o código abaixo. Apenas comentei o código que tinha no arquivo e adicionei o código sugerido e a navegação funcionou corretamente. Logo, em **index.js**:

```js
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
```

## [01:26:35](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=5195s) - Chamando uma API de tarefas - PAREI

Agora vamos usar uma **API** para adicionar as tasks automaticamente. Para isso, vamos instalar a biblioteca **axios** digitando o comando abaixo:

```shell
npm install axios
```

Em seguida, vamos importar no arquivo **App.jsx**:

```jsx
import React, { useState } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import TaskDetails from './components/TaskDetails'


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
    },
  ])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) return { ...task, completed: !task.completed }

      return task
    })

    setTasks(newTasks)
  }

  //adiciona o title na tasks
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [ ...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTasks(newTasks)
  }

  // remove uma task
  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id != taskId)

    setTasks(newTasks)
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition}/>
              <Tasks 
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}  
              />
            </>
          )}
        
        />
        <Route 
          path="/:taskTitle" 
          exact
          component={TaskDetails}
        />
      </div>
    </Router>
  )
}

export default App
```

## [01:27:48](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=5268s) - Entendendo useEffect

Para fazer a requisição HTTP logo quando a página for carregada, vamos usar o **hulk** _**useEffect**_. Este hulk executa um bloco de código, sempre que uma variável muda. No nosso projeto, vamos deixar a lista de variáveis vazia, pois só será executado o código quando a página for carregada pela primeira vez, e não todas as vezes em que a variável for modificada. 

Comece fazendo a importação do **useEffect**.

Para fazer uma requisição dentro do **useEffect**, vamos ter que colocá-la dentro de uma function assincrona, já que o **useEffect** não é assícrono, logo não pode retornar nada. Logo a function (**fetchTasks**) criada e chamada dentro do **useEffect** é que vai retornar a requisição. Logo, em **App.jsx**:

```jsx
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import TaskDetails from './components/TaskDetails'

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
    },
  ])

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(`https://jsonplaceholder.cypress.io/todos?_limit=10`)
      console.log(data)
    }
    fetchTasks()
  }, [])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) return { ...task, completed: !task.completed }

      return task
    })

    setTasks(newTasks)
  }

  //adiciona o title na tasks
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [ ...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTasks(newTasks)
  }

  // remove uma task
  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id != taskId)

    setTasks(newTasks)
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition}/>
              <Tasks 
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}  
              />
            </>
          )}
        
        />
        <Route 
          path="/:taskTitle" 
          exact
          component={TaskDetails}
        />
      </div>
    </Router>
  )
}

export default App
```

## [01:31:35](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=5495s) - Armazenando as tarefas da API

Agora vamos pegar as tarefas que foram armazenadas no **data** requisitado pela function **fetchTasks** e colocá-las no **useState**.

Para isso, em **App.jsx** na function **fetchTasks** vamos chamar o **setTasks( )** passando o **data** como parâmetro:

```jsx
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import TaskDetails from './components/TaskDetails'

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
    },
  ])

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(`https://jsonplaceholder.cypress.io/todos?_limit=10`)
      
      setTasks(data)
      
    }

    fetchTasks()

  }, [])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) return { ...task, completed: !task.completed }

      return task
    })

    setTasks(newTasks)
  }

  //adiciona o title na tasks
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [ ...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTasks(newTasks)
  }

  // remove uma task
  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id != taskId)

    setTasks(newTasks)
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition}/>
              <Tasks 
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}  
              />
            </>
          )}
        
        />
        <Route 
          path="/:taskTitle" 
          exact
          component={TaskDetails}
        />
      </div>
    </Router>
  )
}

export default App
```

## [01:32:44](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=5564s) - Corrigindo o componente Task

Vamos corrigir um pequeno erro na disposição dos botões de informação e e fechar. Como esles estão dentro do _**.buttons-container**_, em **Task.css**:

```css
.task-container {
  background-color: #444;
  margin: 8px 0;
  padding: 15px 20px;
  display: flex;
  border-radius: 5px;
  justify-content: space-between;
  color: #eee;
  align-items: center;
}

.task-title {
  cursor: pointer;
}

.buttons-container{
  width: 30%;
  display: flex;
  justify-content: flex-end;
}

.remove-task-button, .see-task-datails-button {
  background-color: #444;
  border: none;
  font-size: 24px;
  color: chartreuse;
  margin: 0 5px;
  cursor: pointer;
}
```

## [01:33:41](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=5621s) - Componentes funcionais vs componentes de classe

Componentes funcionais são componetes que são funções. Podemos também escrever componentes através de **classes**. Porém os componentes em forma de classe estão deixados de lado, por serem limitados em relação ao componentes funcionais. Podemos construir a aplicação obtendo os mesmo resultados com componentes de classe, porém a sintaxe é bastante diferente e mais difícil.

## [01:35:19](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=5719s) - Criando um componente de classe

Em **App.jsx** vamos comentar nosso app e escrever o código abaixo:

```jsx
class App extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

export default App;
```

Usando **State**:

```jsx
class App extends React.Component {
  constructor(){
    super();

    this.state = {
      message: "welcome to class components!"
    }
  }
  render() {
    return  <div>
              <h1>Hello World!</h1>;
              <h2>{this.state.message}</h2>
            </div>
  }
}
```

Executando um bloco de código assim que o componente for montado pela primeira vez:

```jsx
componentDidMount(){
    console.log(`foi renderizado pela primeira vez`)
  }
```

Adicionando um button para mudar a mensagem:

```jsx
class App extends React.Component {
  constructor(){
    super();

    this.state = {
      message: "welcome to class components!"
    }
  }

  componentDidMount(){
    console.log(`foi renderizado pela primeira vez`)
  }

  handleMessageChangeClick(){
    this.setState({message: "welcome to react!"})
  }

  render() {
    return (
            <>
              <h1>Hello World!</h1>;
              <h2>{this.state.message}</h2>
              <button onClick={this.handleMessageChangeClick.bind(this)}>Mudar mensagem</button>
            </>
            ) 
  }
}

export default App;
```

Com estes exemplos, podemos observar que os componentes de classe são bem mais complexos do que os componentes funcionais. A maioria das empresas usam **componentes funcionais**, principalmente pelo uso dos **hulk's**.

## [01:40:15](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=6015s) - Entendendo keys em listas

No final a aplicação estará apresentando o seguinte erro:

```shell
Each child in a list should have a unique "key" prop.
```

Em **Tasks.jsx** vamos identificar o **key** de cada task que está sendo renderizada:

```jsx
import React from 'react'
import Task from './Task'

const Tasks = ( { tasks, handleTaskClick, handleTaskDeletion } ) => {
  return (
    <>
      { tasks.map(task => (
        <Task 
          key={task.id}
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      ))}
    </>
  )
}

export default Tasks
```

## [01:42:07](https://www.youtube.com/watch?v=ErjWNvP6mko&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=21&t=6127s) - Conclusão







































