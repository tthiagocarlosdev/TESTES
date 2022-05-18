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

