# CSS Flexbox - Dicas para Devs

[Aprenda CSS Flexbox Em 30 Minutos](https://www.youtube.com/watch?v=0OWlr3D3wFA&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=3)

## [0:00](https://www.youtube.com/watch?v=0OWlr3D3wFA&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=3&t=0s) — Introdução

- Esse tutorial é para iniciantes em Flexbox
- Continuação dos nossos cursos de HTML e CSS

## [0:57](https://www.youtube.com/watch?v=0OWlr3D3wFA&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=3&t=57s) — O que é Flexbox?

- Flexible Box Model
- Aplicamos com display: flex
- Organização dos nossos layouts se torna mais flexível e dinâmica
- Por padrão, todos os itens do container ficam lado a lado
- Grande capacidade de responsividade

## [02:21](https://www.youtube.com/watch?v=0OWlr3D3wFA&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=3&t=141s) — Primeiro uso do Flexbox

- Nosso arquivo HTML:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title> Curso de CSS Flexbox </title>
</head>
<body>
  <div class="container">
    <div class="box-1">
        <h1> Box 1 </h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nihil.</p>
    </div>
    <div class="box-2">
        <h1> Box 2 </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati deserunt ducimus eum, dolor itaque perspiciatis.</p>
    </div>
  </div>
</body>
</html>
```

- Vamos sempre aplicar o flexbox na div container:

```css
.container {
  display: flex;
}

.container div {
  border: 1px solid black;
  padding: 10px;
}
```

Ao aplicar, as div's box-1 e box-2 ficarão dispostas uma ao lado da outra.

## [03:26](https://www.youtube.com/watch?v=0OWlr3D3wFA&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=3&t=206s) — Direção dos itens (flex-direction)

- **row(padrão):** posiciona os itens lado a lado

```css
flex-direction: row;
```

- **column:** posiciona os itens um embaixo do outro

```css
flex-direction: column;
```

## [04:12](https://www.youtube.com/watch?v=0OWlr3D3wFA&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=3&t=252s) — Main Axis e Cross Axis

PAREI

## [06:25](https://www.youtube.com/watch?v=0OWlr3D3wFA&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=3&t=385s) — Formas de alinhamento (justify-content)



## [11:55](https://www.youtube.com/watch?v=0OWlr3D3wFA&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=3&t=715s) — Formas de alinhamento (align-items)



## [15:06](https://www.youtube.com/watch?v=0OWlr3D3wFA&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=3&t=906s) — Formas de alinhamento (align-content)



## [18:48](https://www.youtube.com/watch?v=0OWlr3D3wFA&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=3&t=1128s) — Responsividade (flex-flow)



## [21:51](https://www.youtube.com/watch?v=0OWlr3D3wFA&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=3&t=1311s) — Flex Item



## [22:16](https://www.youtube.com/watch?v=0OWlr3D3wFA&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=3&t=1336s) — Propriedade "order"



## [24:26](https://www.youtube.com/watch?v=0OWlr3D3wFA&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=3&t=1466s) — Propriedade "flex"



## [27:20](https://www.youtube.com/watch?v=0OWlr3D3wFA&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=3&t=1640s) — Propriedade "flex-basis"



## [29:35](https://www.youtube.com/watch?v=0OWlr3D3wFA&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=3&t=1775s) — Conclusão



## [30:38](https://www.youtube.com/watch?v=0OWlr3D3wFA&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=3&t=1838s) — Propriedade "align-self"



## [31:15](https://www.youtube.com/watch?v=0OWlr3D3wFA&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=3&t=1875s) — Conclusão

