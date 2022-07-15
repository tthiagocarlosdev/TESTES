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

- flex-direction: row

  - Os items sempre ficam lado-a-lado, ou seja, na **horizontal**.
  - Main Axis - horizontal

![main-axis-flex-direction-row](https://user-images.githubusercontent.com/76978748/179209943-cd2e8dd9-77ee-4c42-b870-c344834b44d7.png)

  - Cross Axis - vertical

![cross-axis-flex-direction-row](https://user-images.githubusercontent.com/76978748/179210022-5f85793b-4f41-4050-add0-e923bdbc8fe8.png)

- flex-direction: column

  - Os items sempre ficam um abaixo do outro, ou seja, na **vertical**.
  - Main Axis - vertical

![main-axis-flex-direction-column](https://user-images.githubusercontent.com/76978748/179210067-526397cf-5ae5-4368-9216-9c2186a742f9.png)

  - Cross Axis - horizontal

![cross-axis-flex-direction-column](https://user-images.githubusercontent.com/76978748/179210143-62ba1f9c-ac3a-4f5e-bfc0-e0bb04390f95.png)

## [06:25](https://www.youtube.com/watch?v=0OWlr3D3wFA&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=3&t=385s) — Formas de alinhamento (justify-content)

- **justify-content:** alinha os itens no **main axis**:
  - **flex-start:** alinha os itens no início do container (padrão);
  - **flex-end:** alinha os itens no final do container;
  - **center:** alinha os itens no centro do container;
  - **space-between:** distribui os itens igualmente no container;
  - **space-around:** space-between com margem dos lados.

- Exemplo de flex-direction: row e justify-content: flex-start, itens alinhando no início da página no canto esquerdo:

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgb(168, 165, 165);
  height:600px;
}

.container div {
  border: 1px solid black;
  padding: 10px;
  background-color:lightblue;
}
```

![row-flex-start](https://user-images.githubusercontent.com/76978748/179210336-a1b9e04f-f4e9-4ca6-85e8-606f53cdbf65.png)

- Exemplo de flex-direction: row e justify-content: flex-end, itens alinhando no início da página no canto direito:

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: rgb(168, 165, 165);
  height:600px;
}

.container div {
  border: 1px solid black;
  padding: 10px;
  background-color:lightblue;
}
```

![row-flex-end](https://user-images.githubusercontent.com/76978748/179210389-7ac87ca8-dc0a-43e8-a8e1-ce899a4223a7.png)

- Exemplo de flex-direction: column e justify-content: flex-start, itens alinhando no início da página. Note que foi necessário adicionar a altura do container:

```css
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: rgb(168, 165, 165);
  height:600px;
}

.container div {
  border: 1px solid black;
  padding: 10px;
  background-color:lightblue;
}
```

![column-flex-start](https://user-images.githubusercontent.com/76978748/179210427-2d6dc549-90ea-4bc6-b13f-6969a915d95a.png)

- Exemplo de flex-direction: column e justify-content: flex-end, itens alinhando no final da página:

```css
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: rgb(168, 165, 165);
  height:600px;
}

.container div {
  border: 1px solid black;
  padding: 10px;
  background-color:lightblue;
}
```

![column-flex-end](https://user-images.githubusercontent.com/76978748/179210482-442a74f8-cbe9-46b6-b912-e40b3bef0187.png)

- Exemplo de flex-direction: row e justify-content: center, itens alinhando no centro e início da página. Alinhamento horizontal:

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: rgb(168, 165, 165);
  height:600px;
}

.container div {
  border: 1px solid black;
  padding: 10px;
  background-color:lightblue;
}
```

![row-center](https://user-images.githubusercontent.com/76978748/179210503-aa3eec99-8ec5-47a4-bb00-3a37a9fec644.png)

- Exemplo de flex-direction: column e justify-content: center, itens alinhando no final da página. Alinhamento vertical:

```css
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(168, 165, 165);
  height:600px;
}

.container div {
  border: 1px solid black;
  padding: 10px;
  background-color:lightblue;
}
```

![column-center](https://user-images.githubusercontent.com/76978748/179210553-f1a90bc4-2c2c-4eb9-a6a4-0d8f8d02c850.png)

- Exemplo de flex-direction: row e justify-content: space-between, itens distribuídos com o mesmo espaçamento entre eles. Alinhamento horizontal:

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgb(168, 165, 165);
  height:600px;
}

.container div {
  border: 1px solid black;
  padding: 10px;
  background-color:lightblue;
}
```

![row-space-between](https://user-images.githubusercontent.com/76978748/179210577-51f0d721-d76a-4b2d-af59-58f41bf469ba.png)

- Exemplo de flex-direction: column e justify-content: space-between, itens distribuídos com o mesmo espaçamento entre eles. Alinhamento vertical:

```css
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(168, 165, 165);
  height:600px;
}

.container div {
  border: 1px solid black;
  padding: 10px;
  background-color:lightblue;
}
```

![column-space-between](https://user-images.githubusercontent.com/76978748/179210609-877c7573-0fcd-4b44-941c-579590818d91.png)

- Exemplo de flex-direction: row e justify-content: space-around, itens distribuídos com o mesmo espaçamento entre eles e com margem. Alinhamento horizontal:

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: rgb(168, 165, 165);
  height:600px;
}

.container div {
  border: 1px solid black;
  padding: 10px;
  background-color:lightblue;
}
```

![row-space-around](https://user-images.githubusercontent.com/76978748/179210655-6f6e9197-ea9a-41a2-96fd-a84ab32637ab.png)

- Exemplo de flex-direction: column e justify-content: space-around, itens distribuídos com o mesmo espaçamento entre eles e com margem. Alinhamento vertical:

```css
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgb(168, 165, 165);
  height:600px;
}

.container div {
  border: 1px solid black;
  padding: 10px;
  background-color:lightblue;
}
```

![column-space-around](https://user-images.githubusercontent.com/76978748/179210686-1496ed46-abec-4c73-9768-ffdb34d612b2.png)

## [11:55](https://www.youtube.com/watch?v=0OWlr3D3wFA&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=3&t=715s) — Formas de alinhamento (align-items)

- **align-items:** alinha os itens no **cross axis**:
  - **stretch:** faz com que os itens cresçam igualmente (padrão);
  - **flex-start:** alinha os itens no início do container;
  - **flex-end:** alinha os itens no final do container;
  - **center:** alinha os itens no centro do container;

- Exemplo de flex-direction: row e align-items: stretch, itens distribuídos no início do container e ocupando a altura inteira do container. Alinhamento **vertical**:

```css
.container {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background-color: rgb(168, 165, 165);
  height:600px;
}

.container div {
  border: 1px solid black;
  padding: 10px;
  background-color:lightblue;
}
```

![row-align-items-stretch](https://user-images.githubusercontent.com/76978748/179210746-f56339a6-e0f0-404c-a60a-45f60f02be86.png)

- Exemplo de flex-direction: row e align-items: flex-start, itens distribuídos no início do container. Alinhamento **vertical**:

```css
.container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: rgb(168, 165, 165);
  height:600px;
}

.container div {
  border: 1px solid black;
  padding: 10px;
  background-color:lightblue;
}
```

![row-align-items-flex-start](https://user-images.githubusercontent.com/76978748/179210783-c97a97ee-67bb-4715-b4a1-33af29cb474a.png)

- Exemplo de flex-direction: row e align-items: flex-end, itens distribuídos no final do container. Alinhamento **vertical**:

```css
.container {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  background-color: rgb(168, 165, 165);
  height:600px;
}

.container div {
  border: 1px solid black;
  padding: 10px;
  background-color:lightblue;
}
```

![row-align-items-flex-end](https://user-images.githubusercontent.com/76978748/179210807-47948970-1941-41ef-ad32-8d1647f9af20.png)

- Exemplo de flex-direction: row e align-items: center, itens distribuídos no centro do container. Alinhamento **vertical**:

```css
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgb(168, 165, 165);
  height:600px;
}

.container div {
  border: 1px solid black;
  padding: 10px;
  background-color:lightblue;
}
```

![row-align-items-center](https://user-images.githubusercontent.com/76978748/179210830-eed0af95-8d0c-4891-bb95-0945ee7ab428.png)

- Exemplo de flex-direction: column e align-items: center, itens distribuídos no centro do container. Alinhamento **horizontal**:

```css
```

PAREI - 14:00

## [15:06](https://www.youtube.com/watch?v=0OWlr3D3wFA&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=3&t=906s) — Formas de alinhamento (align-content)



## [18:48](https://www.youtube.com/watch?v=0OWlr3D3wFA&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=3&t=1128s) — Responsividade (flex-flow)



## [21:51](https://www.youtube.com/watch?v=0OWlr3D3wFA&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=3&t=1311s) — Flex Item



## [22:16](https://www.youtube.com/watch?v=0OWlr3D3wFA&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=3&t=1336s) — Propriedade "order"



## [24:26](https://www.youtube.com/watch?v=0OWlr3D3wFA&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=3&t=1466s) — Propriedade "flex"



## [27:20](https://www.youtube.com/watch?v=0OWlr3D3wFA&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=3&t=1640s) — Propriedade "flex-basis"



## [29:35](https://www.youtube.com/watch?v=0OWlr3D3wFA&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=3&t=1775s) — Conclusão



## [30:38](https://www.youtube.com/watch?v=0OWlr3D3wFA&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=3&t=1838s) — Propriedade "align-self"



## [31:15](https://www.youtube.com/watch?v=0OWlr3D3wFA&list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-&index=3&t=1875s) — Conclusão

