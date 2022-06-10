# Configurações react

## Criando projeto:

```shell
npx create-react-app my-app
```

## Organizando o projeto:

- Na pasta **src** apagar os arquivos:
  - setupTests.js
  - reportWebVitals.js
  - App.css
  - App.test.js
  - logo.svg
- No Arquivo **index.js** vamos apagar as seguintes partes:

```react
import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

- No arquivo **index.css** acrescente o seguinte código:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

- Apague o conteúdo dos arquivos:
  - App.css
  - App.js
- Em **App.js** vamos iniciar nossa aplicação:

```react
import React from 'react';

const App = () => {
  return ( 
    <h1> App </h1>
   );
}
 
export default App;
```

## Biblioteca uuid

Instalando biblioteca node que **gera id's aleatórios**. Na raiz do seu projeto, execute o comando abaixo no terminal:

```shell
npm install uuid
```

Após a instalação é preciso importar a biblioteca:

```jsx
import {v4 as uuidv4} from 'uuid'
```

E para usá-la, basta atribuir a variável:

```jsx
id: uuidv4()
```

## Biblioteca React-Icons

```shell
npm install react-icons --save
```

Após a instalação é preciso importar a biblioteca:

```jsx
import { CgClose } from "react-icons/cg"
```

Em seguida, basta usá-la:

```jsx
<CgClose />
```

## Biblioteca react-router-dom

```shell
npm install react-router-dom
```

Talvez seja preciso mudar a configuração do arquivo **index.js** de:

```js
 import React from 'react';
 import ReactDOM from 'react-dom/client';

 import './index.css';
 import App from './App';

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
   <React.StrictMode>
     <App />
   </React.StrictMode>
 );
```

Para:

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

- **Biblioteca Axios**:

```shell
npm install axios
```

Importando a biblioteca:

```jsx
import axios from 'axios'
```

