# React Hooks: Aprenda os MAIS IMPORTANTES em 50 Minutos!

Professor: Felipe Rocha

[VIDEO AULA](https://www.youtube.com/watch?v=MA3Ngo32qiI)

## [00:00](https://www.youtube.com/watch?v=MA3Ngo32qiI&t=0s) - Introdução

Hooks que iremos aprender:

- useState
- useEffect
- useRef
- useReducer
- useContext
- useMemo
- useCallback
- useLayoutEffect

## [00:49](https://www.youtube.com/watch?v=MA3Ngo32qiI&t=49s) - useState

Forma de armazenar State nos componentes funcionais.

Para fazer o uso do useState, primeiro é preciso importá-lo no projeto:

```js
import { useState } from 'react'
```

Para declarar um State, no corpo do componente, vamos declarar uma **const**. Nesta const teremos uma lista que recebe o **useState( )** como atribuição. Dentro do **useState( )** vamos passar o valor padrão do State (0). Dentro da lista teremos dois valores que são retornados pelo **useState**. O primeiro será o State propriamente dito (count) e o segundo será uma function (setCount) que será usada para modificar o State:

```js
const [count, setCount] = useState(0)
```

Em seguida vamos colocar o State no componente:

```js
import React from 'react';
import { useState } from 'react'

import './App.css'

const HookReact = () => {
  const [count, setCount] = useState(0)

  return ( 
    <>
      <div className="container-useState">
        <h1>useState</h1>
        <h2 className="useState-state"> { count } </h2>
        <button className="useState-button"> Increment </button>
      </div>
      
    </>
   );
}
 
export default HookReact;
```

Agora vamos usar a function **setCount** para alterar o valor do número, sempre que clicar no botão.

Vamos criar a function **incrementCount** e depois passá-la para o **onClick** dentro do **button**. Para alterar o valor de uma State baseada no seu valor anterior, dentro do setCount, vamos colocar o _**prevState**_ que é o valor anterior e alterá-lo usando arrow function:

```js
import React from 'react';
import { useState } from 'react'

import './App.css'

const HookReact = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount((prevState) => prevState + 1)
  }

  return ( 
    <>
      <div className="container-useState">
        <h1>useState</h1>
        <h2 className="useState-state"> { count } </h2>
        <button onClick={ incrementCount } className="useState-button"> Increment </button>
      </div>
      
    </>
   );
}
 
export default HookReact;
```

Com isso, ao clicar no button, será incrementado ao valor do count + 1.

É possível também passar um objeto dentro o **useState**. Porém, ao criar a function que vai alterar o valor do State, deve ser passado o objeto inteiro mais a alteração:

```js
import React from 'react';
import { useState } from 'react'

import './App.css'

const HookReact = () => {
  // const [count, setCount] = useState(0)
  const[state, setState] = useState({ count: 0, theme: "light" })

  const incrementCount = () => {
    setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
        theme: "dark",
      }
    })
  }

  return ( 
    <>
      <div className="container-useState">
        <h1>useState</h1>
        <h2 className="useState-state"> { state.count } </h2>
        <p> { state.theme }</p>
        <button onClick={ incrementCount } className="useState-button"> Increment </button>
      </div>
      
    </>
   );
}
 
export default HookReact;
```

 Porém, geralmente, para alterar vários State's, são criados vários useState's:

```js
import React from 'react';
import { useState } from 'react'

import './Components.css'

const HookUseState = () => {
  const [count, setCount] = useState(0)
  const[theme, setTheme] = useState("light")

  const incrementCount = () => {
    setCount((prevState) => prevState + 1)
    setTheme("dark")
  }

  return ( 
    <>
      <div className="container-useState">
        <h1>useState</h1>
        <h2 className="useState-state"> { count } </h2>
        <p> { theme }</p>
        <button onClick={ incrementCount } className="useState-button"> Increment </button>
      </div>
      
    </>
   );
}
 
export default HookUseState;
```

## [07:48](https://www.youtube.com/watch?v=MA3Ngo32qiI&t=468s) - useEffect

Usamos useEffect quando queremos executar alguma coisa quando alguma coisa acontecer ou alguma coisa mudar.

Primeiro precisamos importar o **useEffect** do **react**:

```jsx
import React, { useState, useEffect } from 'react';
```

Em seguida vamos chamar o **useEffect**, passando uma arrow function e uma lista como parâmetros. Essa lista é o array de depências do **useEffect**:

```jsx
useEffect(() => {

  }, [])
```

Se for passado o **useEffect** sem a lista, a function será executada sempre que o componente for renderizado novamente.

Mas se a lista for passada, ela vai receber o valor que queremos assistir e o useEffect só será executado quando o valor que passarmos dentro da lista mudar:

```jsx
useEffect(() => {
    console.log('resource type render')
  }, [resourceType])
```

```jsx
import React, { useState, useEffect } from 'react';

import './Components.css'

const HookUseEffect = () => {
  const [resourceType, setResourceType] = useState("posts")

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => console.log(json))
  }, [resourceType])

  const changeResourceType = (resourceType) => {
    setResourceType(resourceType)
  }

  return ( 
    <div className="container-useEffect">
      <h1>useEffect</h1>
      <div className="useEffect">
        <h2> { resourceType } </h2>
        <div className="buttons-useEffect" style={ {display: "flex", alignItems: "center" }}>
          <button onClick={() => changeResourceType("posts")}>Posts</button>
          <button onClick={() => changeResourceType("comments")}>Comments</button>
          <button onClick={() => changeResourceType("todos")}>Todos</button>
        </div>
      </div>
    </div>
   );
}
 
export default HookUseEffect;
```

O **useEffect** não pode ser uma function assíncrona. Quando se quiser usar o **useEffect** de forma assíncrona, podemos criar dentro dele uma function assíncrona usando o **await** e chamar esta function dentro do **useEffect**:

```jsx
import React, { useState, useEffect } from 'react';

import './Components.css'

const HookUseEffect = () => {
  const [resourceType, setResourceType] = useState("posts")

  useEffect(() => {
    const fetchResourceTypes = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      const responseJSON = await response.json()
      
      console.log(responseJSON)
    }
    fetchResourceTypes()
  }, [resourceType])

  const changeResourceType = (resourceType) => {
    setResourceType(resourceType)
  }

  return ( 
    <div className="container-useEffect">
      <h1>useEffect</h1>
      <div className="useEffect">
        <h2> { resourceType } </h2>
        <div className="buttons-useEffect" style={ {display: "flex", alignItems: "center" }}>
          <button onClick={() => changeResourceType("posts")}>Posts</button>
          <button onClick={() => changeResourceType("comments")}>Comments</button>
          <button onClick={() => changeResourceType("todos")}>Todos</button>
        </div>
      </div>
    </div>
   );
}
 
export default HookUseEffect;
```

Podemos também renderizar o conteúdo que está sendo retornado do **useEffect**:

```jsx
import React, { useState, useEffect } from 'react';

import './Components.css'

const HookUseEffect = () => {
  const [items, setItems] = useState([])
  const [resourceType, setResourceType] = useState("posts")

  useEffect(() => {
    const fetchResourceTypes = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      const responseJSON = await response.json()
      
      setItems(responseJSON)
    }
    fetchResourceTypes()
  }, [resourceType])

  const changeResourceType = (resourceType) => {
    setResourceType(resourceType)
  }

  return ( 
    <div className="container-useEffect">
      <h1>useEffect</h1>
      <div className="useEffect">
        <h2> { resourceType } </h2>
        <div className="buttons-useEffect" style={ {display: "flex", alignItems: "center" }}>
          <button onClick={() => changeResourceType("posts")}>Posts</button>
          <button onClick={() => changeResourceType("comments")}>Comments</button>
          <button onClick={() => changeResourceType("todos")}>Todos</button>
        </div>
      </div>
      {items.map((item) => (
        <div>
          <p>{item.title}</p>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
   );
}
 
export default HookUseEffect;
```

Com o **useEffect** também podemos simular o comportamento do métodos **componentDidMount** e **componentWillUnmount**.

O **componentDidMount** só é executando quando o componente é renderizado pela primeira vez. Logo, para fazer isso com o **useEffect**, basta passar a lista de parâmetro vazia:

```jsx
import React, { useState, useEffect } from 'react';

import './Components.css'

const HookUseEffect = () => {
  const [items, setItems] = useState([])
  const [resourceType, setResourceType] = useState("posts")

  useEffect(() => {
    const fetchResourceTypes = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      const responseJSON = await response.json()
      
      setItems(responseJSON)
    }
    // fetchResourceTypes()
  }, [resourceType])

  //componentDidMount
  useEffect(() => {
    console.log("componentDidMount")
  },[])

  const changeResourceType = (resourceType) => {
    setResourceType(resourceType)
  }

  return ( 
    <div className="container-useEffect">
      <h1>useEffect</h1>
      <div className="useEffect">
        <h2> { resourceType } </h2>
        <div className="buttons-useEffect" style={ {display: "flex", alignItems: "center" }}>
          <button onClick={() => changeResourceType("posts")}>Posts</button>
          <button onClick={() => changeResourceType("comments")}>Comments</button>
          <button onClick={() => changeResourceType("todos")}>Todos</button>
        </div>
      </div>
      {items.map((item) => (
        <div>
          <p>{item.title}</p>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
   );
}
 
export default HookUseEffect;
```

Para simular o **componentWillUnmount**:

```jsx
import React, { useState, useEffect } from 'react';

import './Components.css'

const HookUseEffect = () => {
  const [items, setItems] = useState([])
  const [resourceType, setResourceType] = useState("posts")

  useEffect(() => {
    const fetchResourceTypes = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      const responseJSON = await response.json()
      
      setItems(responseJSON)
    }
    // fetchResourceTypes()
  }, [resourceType])

  //componentDidMount
  useEffect(() => {
    console.log("componentDidMount")

    return () => {
      // componentWillUnmount
      console.log("componentWillUnmount")
    }
  },[])

  const changeResourceType = (resourceType) => {
    setResourceType(resourceType)
  }

  return ( 
    <div className="container-useEffect">
      <h1>useEffect</h1>
      <div className="useEffect">
        <h2> { resourceType } </h2>
        <div className="buttons-useEffect" style={ {display: "flex", alignItems: "center" }}>
          <button onClick={() => changeResourceType("posts")}>Posts</button>
          <button onClick={() => changeResourceType("comments")}>Comments</button>
          <button onClick={() => changeResourceType("todos")}>Todos</button>
        </div>
      </div>
      {items.map((item) => (
        <div>
          <p>{item.title}</p>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
   );
}
 
export default HookUseEffect;
```



## [16:38](https://www.youtube.com/watch?v=MA3Ngo32qiI&t=998s) - useRef

## [23:23](https://www.youtube.com/watch?v=MA3Ngo32qiI&t=1403s) - useReducer

## [34:42](https://www.youtube.com/watch?v=MA3Ngo32qiI&t=2082s) - useContext

## [38:26](https://www.youtube.com/watch?v=MA3Ngo32qiI&t=2306s) - useMemo

## [42:40](https://www.youtube.com/watch?v=MA3Ngo32qiI&t=2560s) - useCallback

## [49:03](https://www.youtube.com/watch?v=MA3Ngo32qiI&t=2943s) - useLayoutEffect

## [52:29](https://www.youtube.com/watch?v=MA3Ngo32qiI&t=3149s) - Conclusão

