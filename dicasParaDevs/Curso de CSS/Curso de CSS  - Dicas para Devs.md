# Curso de CSS  - Dicas para Devs

[Curso de CSS Para Completos Iniciantes](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2)

## [0:00](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=0s) — Introdução

- Esse tutorial é para completos inciantes
- Continuação do nosso curso de HTML
- A forma de criar o CSS varia d eprogramador para programador
- Não falaremos sobre flexbox, grid, animations etc.

## [1:34](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=94s) — O que é CSS?

- Cascading Stylesheets
- Não é uma liguagem de programação
- Linguagem de estilo
- Usado para criar o design de um site

## [1:53](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=113s) — O que precisamos para começar

- Navegador de internet (Chrome, Edge, Firefox, etc.)
- Editor de texto (VSCode, Sublime, Atom, etc.)

## [2:35](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=155s) — Criando o nosso documento

Vamos criar uma pasta para nossa aula, abrir a pasta pelo VSCode e depois criar um arquivo **index.html**.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso CSS</title>
</head>
<body>
  <h1> Olá Mundo </h1>
</body>
</html>
```

## HTML [3:35](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=215s) — As três formas de estilizar o nosso arquivo

- **Inline CSS:** Direto no elemento HTML (má prática)
  - Neste exemplo vamos colocar o _**style**_ dentro da tag **h1** no HTML para deixar o texto de h1 da cor vermelho:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso CSS</title>
</head>
<body>
  <h1 style="color: red"> Olá Mundo </h1>
</body>
</html>
```

- **CSS Interno:** Usando tags `<style>` no documento HTML
  - Neste exemplo vamos colocar atag _**style**_ dentro da tag _**head**_ no HTML para fazer a mesma tarefa do exemplo anterior, selecionando a tag **h1**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso CSS</title>
  <style>
    h1 {
      color: red;
    }
  </style>
</head>
<body>
  <h1> Olá Mundo </h1>
</body>
</html>
```

- **CSS Externo:** Importando um arquivo .css no HTML
  - Neste exemplo vamos criar um arquivo **styles.css**, selecionar a tag **h1** e depois importar este arquivo dentro do nosso arquivo HTML através da tag _**link**_:

```css
h1 {
  color: red;
}
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./styles.css">
  <title>Curso CSS</title>
</head>
<body>
  <h1> Olá Mundo </h1>
</body>
</html>
```



## HTML [07:14](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=434s) — CSS Selectors

**Selector** é o elemento que queremos selecionar para estilizar;

**Property** é o que queremos fazer com aquele elemento;

**Value** é o valor atribuído a propriedade.

![selectors-css](https://user-images.githubusercontent.com/76978748/178468790-508d33a0-8265-49d7-a2b6-821c23fe2250.png)

Algumas propriedades podem receber mais de um valor.

## [08:31](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=511s) — Classes e IDs

Ao selecionar um elemento no CSS, todos os elementos semelhantes serão estilizados pelo CSS. Na imagem acima foi selecionado o elemento **p**, logo todos os elementos **p's** do arquivo HTML serão estilizados.

- Usando **classes**:  selecionar mais de um elemento.
- Usando **id**: selecionar apenas um elemento.
  - No exemplo abaixo, vamos estilizar apenas o segundo "Olá mundo!". Para isto vamos colocar um atributo _**class**_ dentro do elemento **h1** e depois selecionar no CSS para estilizar:

```html
<body>
  <h1> Olá Mundo </h1>
  <h1 class="segundo-h1"> Olá Mundo </h1>
  <h1> Olá Mundo </h1>
</body>
```

```css
.segundo-h1 {
  color: red;
}
```

Estilizando o segundo e terceiro **h1**:

```html
<body>
  <h1> Olá Mundo </h1>
  <h1 class="segundo-h1"> Olá Mundo </h1>
  <h1 class="segundo-h1"> Olá Mundo </h1>
</body>
```

```css
.segundo-h1 {
  color: red;
}
```

- Estilizando com **id**:

```html
<body>
  <h1> Olá Mundo </h1>
  <h1 id="segundo-h1"> Olá Mundo </h1>
  <h1> Olá Mundo </h1>
</body>
```

```css
#segundo-h1 {
  color: red;
}
```

- Diferença entre **id** e **class**:
  - Usando **classes**:  selecionar mais de um elemento para aplicar o mesmo estilo.

```html
<body>
  <h1> Olá Mundo </h1>
  <h1 class="h1-vermelho" > Olá Mundo </h1>
  <h1 class="h1-vermelho"> Olá Mundo </h1>
</body>
```

```css
.h1-vermelho {
  color: red;
}
```

- Usando **id**: selecionar apenas um elemento para aplicar o estilo.

```html
<body>
  <h1 id="primeiro-h1"> Olá Mundo </h1>
  <h1 class="h1-vermelho" > Olá Mundo </h1>
  <h1 class="h1-vermelho"> Olá Mundo </h1>
</body>
```

```css
.h1-vermelho {
  color: red;
}

#primeiro-h1 {
  color:green;
}
```

## [14:11](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=851s) — Cores no CSS

- Podemos adcionar cores de três maneiras:
  - Nome da cor
  - Hexadecimal
  - RGB & RGBA

```css
body {
  background-color: red;
  color: white;
}

h1 {
  color: #000000;
}

p {
  color: rgb(0,0,255);
}

a {
  color: rgba(0,0,255,0.6);
}
```

## [17:42](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=1062s) — Fontes internas

Podemos alterar o estilo da fonte com três propriedades:

- font-family
-  font-size
-  font-weight

```html
<body>
  <div class="container">
    <h1> Olá mundo! </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cumque alias inventore minus, nam temporibus cupiditate asperiores nihil. Reprehenderit minima velit, id voluptates commodi cumque quasi alias molestiae autem temporibus.
    </p>
  </div>
</body>
```

```css
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size:18px;
  font-weight:bold;
}
```

Algumas fontes já vêm como padrão no HTML e CSS.

## [20:03](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=1203s) — Fontes externas

Também podemos colocar fontes externas, como as fontes do site [**Google Fontes**](https://fonts.google.com/).

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet">
  <title>Curso CSS</title>
</head>
<body>
  <div class="container">
    <h1> Olá mundo! </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cumque alias inventore minus, nam temporibus cupiditate asperiores nihil. Reprehenderit minima velit, id voluptates commodi cumque quasi alias molestiae autem temporibus.
    </p>
  </div>
</body>
</html>
```

```css
body {
  font-family: 'Roboto Mono', monospace;
  font-size:18px;
}
```

## [24:24](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=1464s) — Margin, padding & border (box-model)

- **Padding:** espaçamento **dentro** do conteúdo;
- **Margin:** espaçamento **fora** do conteúdo;
- **Border:** borda do conteúdo

![padding-mardin-border-css](https://user-images.githubusercontent.com/76978748/178469094-effc23e7-0494-4c7b-ac12-105a0ad3bd36.png)

- Exemplificando o **padding**:
  - Podemos aplicar o **padding** apenas em uma, duas ou três bordas diferentes ou em todas ao mesmo tempo:

````css
.container {
  background-color: #333;
  color: #eee;
  width: 80%;
  margin: auto;
  padding-top: 60px;
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 60px;
  /*  Mesma coisa que acima */
  padding: 60px;
  border: 3px solid red;
}
````

- **Border** é uma linha adicionada em volta do conteúdo:
  - Recebe como valor:
    - espessura da linha
    - tipo de linha
    - cor da linha

```css
border: 3px solid red;
```

```css
border: 15px dotted #fff;
```

```css
border: 10px solid rgb(0, 0, 255);
```

Também podemos aplicar o **border** a margens individualizadas:

```css
border-top: 10px solid rgb(0, 0, 255);
border-left: 10px solid rgb(255, 0, 0);
border-right: 10px solid rgb(0, 255, 0);
border-bottom: 10px solid rgb(255, 255, 0);
```

![border-css](https://user-images.githubusercontent.com/76978748/178469251-bd2958f7-44a8-4453-bd02-569218f37130.png)

- Exemplo de margens:

```css
margin-top: 50px;
margin-left: 50px;
margin-right: 50px;
margin-bottom: 50px;
/*  Mesma coisa que acima */
margin: 50px;
```

- Arquivo CSS completo:

```css
* {
  padding: 0;
  margin: 0;
}
body {
  font-family: 'Roboto Mono', monospace;
  font-size:18px;
}

.container {
  background-color: #333;
  color: #eee;
  width: 80%;
  
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 50px;
  /*  Mesma coisa que acima */
  margin: 50px;
  
  padding-top: 60px;
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 60px;
  /*  Mesma coisa que acima */
  padding: 20px;

  border-top: 10px solid rgb(0, 0, 255);
  border-left: 10px solid rgb(255, 0, 0);
  border-right: 10px solid rgb(0, 255, 0);
  border-bottom: 10px solid rgb(255, 255, 0);
  /*  Mesma coisa que acima */
  border: 10px solid brown;

}
```

## [30:16](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=1816s) — box-sizing

- O uso do **box-sizing** vai fazer com que o **width** continue responsivo:

```css
* {
  box-sizing: border-box;
}
```

## [32:04](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=1924s) — Listas, links e algumas pseudo-classes

- O _**hover**_ é uma pseudo-classes do *CSS* que muda o estilio do elemento quando o cursor passa sobre o mesmo
- O _**visited**_ é uma Pseudo-classe do *CSS* para indicar se o link em questão já foi visitado pelo usuário

```html
<aside class="main-aside">
    <h2> Redes Sociais </h2>
    <ul>
      <li><a href="https://www.twitter.com"> Twitter </a></li>
      <li><a href="https://www.instagram.com"> Instagram </a></li>
    </ul>
  </aside>
```

```css

.main-aside h2 {
  text-align: center;
}

.main-aside h2:hover {
  color: green;
  cursor: pointer;
}

.main-aside ul {
  list-style: none;
  text-align: center;
  padding: 0;
}

.main-aside ul a {
  text-decoration: none;
  color: black;
}

.main-aside ul a:hover {
  color: red;
}
```

## [36:36](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=2196s)  — Criando e estilizando um formulário

- No HTML:

```html
<div class="box">
    <form action="form.php" method="POST" class="main-form">
      <div class="form-group">
          <label> Primeiro nome: </label>
          <input type="text"placeholder="Entre seu primeiro nome">
      </div>
  
      <div class="form-group">
          <label> Segundo nome: </label>
          <input type="text" placeholder="Entre seu segundo nome">
      </div>
  
      <div class="form-group">
          <label> E-mail: </label>
          <input type="email" placeholder="Digite seu E-mail">
      </div>
  
      <div class="form-group">
          <label> Mensagem: </label>
          <textarea name="mensagem"></textarea>
      </div>
  
      <input class="button" type="submit">
    </form>
  </div>
```

- No CSS:

```css
/* Formulários */

.main-form {
  padding-left: 20px;
  margin: 1rem;
}

.main-form .form-group {
  padding-bottom: 10px;
}

.main-form .form-group input {
  padding: 10px;
  width: 100%;
}

.main-form .form-group label {
  display: block;
}

.button {
  padding: 15px;
  background-color:#333;
  color: #eee;
  border: none;
}

.box {
  width: 80%;
  margin: auto;
}
```

- Lembrando que foi adicionado no início do arquivo a propriedade _**box-sizing**_ para todos os elementos do projeto:

```css
* {
  box-sizing: border-box;
}
```

## [44:03](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=2643s) — Position

Propriedade **position** no CSS:

- Static:
- Relative:
- Fixed
- Absolute
- Sticky

## [44:26](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=2666s) — position: static

- Valor padrão;
- Elemento segue o fluxo da página;
- Propriedades top, bottom, right e left não são aplicáveis

![position-static-css](https://user-images.githubusercontent.com/76978748/178475997-11087394-9249-4703-822c-c25860f88743.png)

## [45:43](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=2743s) — position: relative

- Elemento é posicionado em relação a sua posição normal
- Propriedades top, bottom, right e left são aplicáveis

![position-relative-1-css](https://user-images.githubusercontent.com/76978748/178627732-7f1bb19c-8199-4af8-9e16-3a0552be6691.png)

![position-relative-2-css](https://user-images.githubusercontent.com/76978748/178627736-2714f2e4-4f40-4d0c-bbf2-57bc334a6655.png)


[Veja o exemplo aqui](https://www.w3schools.com/css/tryit.asp?filename=trycss_position_relative)

## [49:11](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=2951s) — position: absolute

- Elemento é posicionado em relação ao seu elemento pai mais próximo que possui **position: relative**
- Se o elemento não tiver nenhum elemento pai com **position: relative**, é posicionado em relação ao **body**

[Veja o exemplo aqui](https://www.w3schools.com/css/tryit.asp?filename=trycss_position_absolute)

## [55:14](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=3314s) — position: fixed

- Elemento é posicionado em relação ao **viewport**
- Sempre fica na mesma posição, mesmo se a página é rolada
- Propriedades top, bottom, left e right são aplicáveis

[Veja o exemplo aqui](https://www.w3schools.com/css/tryit.asp?filename=trycss_position_fixed)

## [58:09](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=3489s) — position: sticky

- Elemento é posicionado em relação a posição do **scroll** do usuário
- Propriedades top, bottom, left e right são aplicáveis

[Veja o exemplo aqui](https://www.w3schools.com/css/tryit.asp?filename=trycss_position_fixed)

## [59:53](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=3593s) — Aplicando "position" no nosso projeto

- Vamos criar duas div's para aplicar position relative e absolute:

```html
<div class="box relative">
    <div class="absolute">
      <h1>olá mundo :) </h1>
    </div>
  </div>
```

```css
/* Positions */
.relative {
  position: relative;
  border: 3px solid #333;
  height: 500px;
  border-radius: 7px;
}

.relative .absolute {
  position: absolute;
  bottom: 0;
}

.relative .absolute h1 {
  margin: 0;
}
```

- Zerando a **margin** do **body**:

```css
body {
  font-family: 'Roboto Mono', monospace;
  font-size: 18px;
  margin: 0;
}
```

- Agora vamos criar uma barra de menu e aplicar **position: sticky**:

```html
<nav id="main-navbar">
    <h1> Barra de navegação </h1>
</nav>
```

```css
/*  Barra de navegação */

#main-navbar {
  background-color: #333;
  color: #eee;
  padding: 1rem;
  text-align: center;
  margin-bottom: 10px;
  position: sticky;
  top: 0;
}
```

- Vamos criar um **botton**  para aplicar position fixed ao mesmo:

```html
<button class="fixed-button"></button>
```

```css
/*  Fixed Button */
.fixed-button {
  background-color: #333;
  color: #eee;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 7px;
}
```

## [01:06:43](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=4003s) — Pseudo-classes (first-child, last-child e nth-child)

O _**:hover**_ é uma pseudo-classe.

```html
<div class="box categories">
    <h2> Categorias </h2>
    <ul>
      <li>Lorem ipsum dolor sit amet.</li>
      <li>Lorem ipsum dolor sit amet.</li>
      <li>Lorem ipsum dolor sit amet.</li>
      <li>Lorem ipsum dolor sit amet.</li>
      <li>Lorem ipsum dolor sit amet.</li>
    </ul>
  </div>
```

- **first-child:** seleciona o primeiro elemento filho

```css
.categories ul li:first-child {
  color: red;
}
```

- **last-child:** seleciona o último elemento filho

```css
.categories ul li:last-child {
  color: green;
}
```

- **nth-child(n):** seleciona o n elemento filho

```css
.categories ul li:nth-child(3) {
  color: blue;
}
```

Podemos também selecionar elementos pares e ímpares:

```css
.categories ul li:nth-child(even) {
  color: brown;
}

.categories ul li:nth-child(odd) {
  color: yellowgreen;
}
```

## [01:11:32](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=4292s) — Conclusão

- Muito obrigado por ter chegado até aqui
- Pratique bastante
- Reveja caso for necessário

Arquivos finais:

- HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet">
  <title>Curso CSS</title>
</head>
<body>
  <nav id="main-navbar">
    <h1> Barra de navegação </h1>
  </nav>
  <div class="container">
    <h1> Olá mundo! </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cumque alias inventore minus, nam temporibus cupiditate asperiores nihil. Reprehenderit minima velit, id voluptates commodi cumque quasi alias molestiae autem temporibus.
    </p>
  </div>

  <aside class="main-aside">
    <h2> Redes Sociais </h2>
    <ul>
      <li><a href="https://www.twitter.com"> Twitter </a></li>
      <li><a href="https://www.instagram.com"> Instagram </a></li>
    </ul>
  </aside>

  <div class="box">
    <form action="form.php" method="POST" class="main-form">
      <div class="form-group">
          <label> Primeiro nome: </label>
          <input type="text"placeholder="Entre seu primeiro nome">
      </div>
  
      <div class="form-group">
          <label> Segundo nome: </label>
          <input type="text" placeholder="Entre seu segundo nome">
      </div>
  
      <div class="form-group">
          <label> E-mail: </label>
          <input type="email" placeholder="Digite seu E-mail">
      </div>
  
      <div class="form-group">
          <label> Mensagem: </label>
          <textarea name="mensagem"></textarea>
      </div>
  
      <input class="button" type="submit">
    </form>
  </div>

  <div class="box relative">
    <div class="absolute">
      <h1>olá mundo :) </h1>
    </div>
  </div>

  <button class="fixed-button"></button>

  <div class="box categories">
    <h2> Categorias </h2>
    <ul>
      <li>Lorem ipsum dolor sit amet.</li>
      <li>Lorem ipsum dolor sit amet.</li>
      <li>Lorem ipsum dolor sit amet.</li>
      <li>Lorem ipsum dolor sit amet.</li>
      <li>Lorem ipsum dolor sit amet.</li>
      <li>Lorem ipsum dolor sit amet.</li>
    </ul>
  </div>

</body>
</html>
```

- CSS

```css
* {
  box-sizing: border-box;
}

body {
  font-family: 'Roboto Mono', monospace;
  font-size: 18px;
  margin: 0;
}

.container {
  background-color: #333;
  color: #eee;
  width: 80%;
  box-sizing: border-box;
  
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  /*  Mesma coisa que acima */
  margin: auto;
  
  padding-top: 60px;
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 60px;
  /*  Mesma coisa que acima */
  padding: 20px;

  border-top: 10px solid rgb(0, 0, 255);
  border-left: 10px solid rgb(255, 0, 0);
  border-right: 10px solid rgb(0, 255, 0);
  border-bottom: 10px solid rgb(255, 255, 0);
  /*  Mesma coisa que acima */
  border: 10px solid brown;

}

.main-aside h2 {
  text-align: center;
}

.main-aside h2:hover {
  color: green;
  cursor: pointer;
}

.main-aside ul {
  list-style: none;
  text-align: center;
  padding: 0;
}

.main-aside ul a {
  text-decoration: none;
  color: black;
}

.main-aside ul a:hover {
  color: red;
}

/* Formulários */

.main-form {
  padding-left: 20px;
  margin: 1rem;
}

.main-form .form-group {
  padding-bottom: 10px;
}

.main-form .form-group input {
  padding: 10px;
  width: 100%;
}

.main-form .form-group label {
  display: block;
}

.button {
  padding: 15px;
  background-color:#333;
  color: #eee;
  border: none;
}

.box {
  width: 80%;
  margin: auto;
}

/* Positions */
.relative {
  position: relative;
  border: 3px solid #333;
  height: 500px;
  border-radius: 7px;
}

.relative .absolute {
  position: absolute;
  bottom: 0;
}

.relative .absolute h1 {
  margin: 0;
}

/*  Barra de navegação */

#main-navbar {
  background-color: #333;
  color: #eee;
  padding: 1rem;
  text-align: center;
  margin-bottom: 10px;
  position: sticky;
  top: 0;
}

/*  Fixed Button */
.fixed-button {
  background-color: #333;
  color: #eee;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 7px;
}

/* Categories */

.categories ul {
  list-style: none;
}

.categories ul li:first-child {
  color: red;
}

.categories ul li:last-child {
  color: green;
}

.categories ul li:nth-child(3) {
  color: blue;
}

.categories ul li:nth-child(even) {
  color: brown;
}

.categories ul li:nth-child(odd) {
  color: yellowgreen;
}

```

