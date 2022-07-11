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

- Inline CSS: Direto no elemento HTML (má prática)
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

- CSS Interno: Usando tags `<style>` no documento HTML
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

- CSS Externo: Importando um arquivo .css no HTML
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

**Property** é o que quermos fazer com aquele elemento;

**Value** é o valor atribuído a propriedade.

![edojfcbz6sr7j0b2l6v1](/home/thiagocarlos/Downloads/CURSOS/PROGRAMAÇÃO/TESTES/dicasParaDevs/edojfcbz6sr7j0b2l6v1.webp)

Algumas propriedades podem receber mais de um valor.

## [08:31](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=511s) — Classes e IDs



## [14:11](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=851s) — Cores no CSS



## [17:42](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=1062s) — Fontes internas



## [20:03](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=1203s) — Fontes externas



## [24:24](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=1464s) — Margin, padding & border (box-model)



## [30:16](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=1816s) — box-sizing



## [32:04](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=1924s) — Listas, links e algumas pseudo-classes



## [36:36](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=2196s)  — Criando e estilizando um formulário



## [44:03](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=2643s) — Position



## [44:26](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=2666s) — position: static



## [45:43](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=2743s) — position: relative



## [49:11](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=2951s) — position: absolute



## [55:14](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=3314s) — position: fixed



## [58:09](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=3489s) — position: sticky



## [59:53](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=3593s) — Aplicando "position" no nosso projeto



## [01:06:43](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=4003s) — Pseudo-classes (first-child, last-child e nth-child)



## [01:11:32](https://www.youtube.com/watch?v=r11FflkQqJs&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=2&t=4292s) — Conclusão



