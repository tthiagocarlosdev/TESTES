Configurações react

- **Biblioteca uuid**

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

- **Biblioteca React-Icons**

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

- **Biblioteca react-router-dom**

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

