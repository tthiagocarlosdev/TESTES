# Curso de HTML - Dicas para Devs

[Curso de HTML Para Completos Iniciantes](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=890s)

## [0:00](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=0s) — Introdução

- Esse tutorial é para completos iniciantes
- Não vai ter nada de CSS
- Vamos focar em HTML5
- Seja paciente

## [1:31](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=91s) — O que é HTML?

- Hyper Text Markup Language
- Não é uma liguagem de programção
- Linguagem de marcação

Utilizada para criar documentos e páginas Web. Formata elementos.

## [2:25](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=145s) — O que precisamos para começar

- Navegador de internet (Chrome, edge, firefox, etc.)
- Editor de texto (VSCode, Subline, Atom, etc.)

## [3:48](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=228s) — Como criar um arquivo HTML

- Não precisamos de um servidor
- Extensão .html
- É executado em um navegador
- index.html é a página inicial

## [4:48](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=288s) — Estrutura de uma página HTML

**<head>**

- Título da página
- Links para arquivos (CSS, JS)
- Metadata

**<body>**

- O que aparece na página
- Tags HTML (cabeçalhos, parágrafos, imagens, etc)

## [5:48](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=348s) — Exemplo de um arquivo HTML

```html
<!DOCTYPE html>
<html>
    <head>
        <title> Estrutura HTML5 </title>
    </head>
    <body>
        <h1> Hello World </h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </body>
</html>
```

## [6:24](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=384s) — Criando nosso primeiro arquivo HTML

```html
<!DOCTYPE html>
<html>
    
    <head>
        <title> Curso de HTML </title>
    </head>

    <body>
        <h1> Hello World </h1>
    </body>

</html>
```

## [8:29](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=509s) — Cabeçalhos (headings)

Para criar um cometário, basta apertar as telcas **Ctrl + / **

```html
<!DOCTYPE html>
<html>
    
    <head>
        <title> Curso de HTML </title>
    </head>

    <body>
        <!-- Cabeçalhos -->
        <h1> Cabeçalho nível 1 </h1>
        <h2> Cabeçalho nível 2 </h2>
        <h3> Cabeçalho nível 3 </h3>
        <h4> Cabeçalho nível 4 </h4>
        <h5> Cabeçalho nível 5 </h5>
        <h6> Cabeçalho nível 6 </h6>
    </body>

</html>
```

## [10:34](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=634s) — Utilizando o Chrome Developer Tools

Na página HTML basta clicar com o botão direito e depois em **inspencionar** ou apertar a tecla **F12**.

O devTools, vai mostrar os elementos de sua página HTML.

## [11:38](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=698s) — Parágrafos 

```html
<!DOCTYPE html>
<html>
    
    <head>
        <title> Curso de HTML </title>
    </head>

    <body>
        <!-- Cabeçalhos -->
        <h1> Cabeçalho nível 1 </h1>
        <h2> Cabeçalho nível 2 </h2>
        <h3> Cabeçalho nível 3 </h3>
        <h4> Cabeçalho nível 4 </h4>
        <h5> Cabeçalho nível 5 </h5>
        <h6> Cabeçalho nível 6 </h6>

        <!-- Parágrafos -->
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, doloremque!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia exercitationem numquam dolore dolores impedit vero iusto incidunt omnis eaque reiciendis.</p>
    </body>

</html>
```

## [12:56](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=776s) — Elementos Inline e Block

### Elementos Inline

- Não iniciam uma nova linha
- Ocupam apenas a largura neessária

### Elementos Block

- iniciam em uma nova linha
- Ocupam toda a largura da linha

### Exemplos:

Inline: **<span>**, **<img>**, **<a>**

Block: **<div>**, **<h1>**, **<h6>**, **<form>**

Tag _**strong**_ e _**em**_, exemplos de tag inline:

```html
<!DOCTYPE html>
<html>
    
    <head>
        <title> Curso de HTML </title>
    </head>

    <body>
        <!-- Cabeçalhos -->
        <h1> Cabeçalho nível 1 </h1>
        <h2> Cabeçalho nível 2 </h2>
        <h3> Cabeçalho nível 3 </h3>
        <h4> Cabeçalho nível 4 </h4>
        <h5> Cabeçalho nível 5 </h5>
        <h6> Cabeçalho nível 6 </h6>

        <!-- Parágrafos -->
        <p>Lorem ipsum dolor sit amet <p>consectetur</p> adipisicing elit. Soluta, doloremque!</p>
        <p>Lorem ipsum dolor sit amet, consectetur <em>adipisicing</em> elit. Quia exercitationem numquam dolore dolores impedit vero iusto incidunt omnis eaque reiciendis.</p>
    </body>

</html>
```

Tag _**p**_, eemplo de tag block:

```html
<!DOCTYPE html>
<html>
    
    <head>
        <title> Curso de HTML </title>
    </head>

    <body>
        <!-- Cabeçalhos -->
        <h1> Cabeçalho nível 1 </h1>
        <h2> Cabeçalho nível 2 </h2>
        <h3> Cabeçalho nível 3 </h3>
        <h4> Cabeçalho nível 4 </h4>
        <h5> Cabeçalho nível 5 </h5>
        <h6> Cabeçalho nível 6 </h6>

        <!-- Parágrafos -->
        <p>Lorem ipsum dolor sit amet <p>consectetur</p> adipisicing elit. Soluta, doloremque!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia exercitationem numquam dolore dolores impedit vero iusto incidunt omnis eaque reiciendis.</p>
    </body>

</html>
```

## [15:29](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=929s) — Links 



## [17:55](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=1075s) — Atributos de uma tag

## [19:27](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=1167s) — Tabelas

## [21:20](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=1280s) — Formulários

## [28:10](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=1690s) — Botões

## [28:44](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=1724s) — Imagens

## [30:40](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=1840s) — Blockquote

## [31:20](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=1880s) — Abreviações

## [31:51](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=1911s) — Citações

## [32:40](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=1960s) — Tags semânticas do HTML

## [34:00](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=2040s) — Criando nossa página "Blog" com as tags semânticas

## [35:05](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=2105s) — Listas

## [35:55](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=2155s) — Criando nossa página "Blog" com as tags semânticas

## [39:00](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=2340s) — Pequena introdução ao CSS
