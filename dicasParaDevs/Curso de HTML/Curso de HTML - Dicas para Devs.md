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

Tag _**p**_, exemplo de tag block:

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

```html
<a href=""></a>
```

Todos os elementos possuem atributos no HTML.  A tag _**<a>**_ já vem com um atributo _**href**_ que indica para qual link quer apontar a tag a qual foi adicionado. Esse link pode ser um arquivo ou link externo. Importante lembrar que a tag _**<a>**_ é um elemento **inline**.

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
        <p> <a href="https://www.lipsum.com/" target="__blanck"> Lorem </a> ipsum dolor sit amet <p>consectetur</p> adipisicing elit. Soluta, doloremque!</p>
        <p>Lorem ipsum dolor sit amet, consectetur <em>adipisicing</em> elit. Quia exercitationem numquam dolore dolores impedit vero iusto incidunt omnis eaque reiciendis.</p>

        <!-- Links -->
        <a href="https://google.com" target="__blanck"> Google </a>
    </body>

</html>
```

## [17:55](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=1075s) — Atributos de uma tag

- Todas as tags podem ter atributos
- Dão informaões sobre um elemento
- São inseridas na tag de início
- Padrão key value pairs (id="dicasparadevs")

## [19:27](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=1167s) — Tabelas

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
        <p> <a href="https://www.lipsum.com/" target="__blanck"> Lorem </a> ipsum dolor sit amet consectetur adipisicing elit. Soluta, doloremque!</p>
        <p>Lorem ipsum dolor sit amet, consectetur <em>adipisicing</em> elit. Quia exercitationem numquam dolore dolores impedit vero iusto incidunt omnis eaque reiciendis.</p>

        <!-- Links -->
        <a href="https://google.com" target="__blanck"> Google </a>

        <!-- Tabelas -->
        <table>
            <thead>
                <tr>
                    <th> Nome </th>
                    <th> Email </th>
                    <th> Idade </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> Thiago Carlos </td>
                    <td> thiago@gmail.com </td>
                    <td> 34 </td>
                </tr>
                <tr>
                    <td> José da Silva </td>
                    <td> jose@gmail.com </td>
                    <td> 20 </td>
                </tr>
                <tr>
                    <td> Maria Eduarda </td>
                    <td> meduarda@gmail.com </td>
                    <td> 15 </td>
                </tr>
            </tbody>
        </table>
    </body>

</html>
```

A tag _**<table>**_ indica que teremos uma tabela;

A tag _**<thead>**_ indica o cabeçalho desta tabela;

A tag _**<tbody>**_ indica o corpo da tabela;

A tag _**<tr>**_ indica uma linha da tabela;

A tag _**<th>**_ indica o conteúdo da célula do cabeçalho;

A tag _**<td>**_ indica o conteúdo da célula do corpo.

## [21:20](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=1280s) — Formulários

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
        <p> <a href="https://www.lipsum.com/" target="__blanck"> Lorem </a> ipsum dolor sit amet consectetur adipisicing elit. Soluta, doloremque!</p>
        <p>Lorem ipsum dolor sit amet, consectetur <em>adipisicing</em> elit. Quia exercitationem numquam dolore dolores impedit vero iusto incidunt omnis eaque reiciendis.</p>

        <!-- Links -->
        <a href="https://google.com" target="__blanck"> Google </a>

        <br>
        <hr>
        <br>

        <!-- Tabelas -->
        <table>
            <thead>
                <tr>
                    <th> Nome </th>
                    <th> Email </th>
                    <th> Idade </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> Thiago Carlos </td>
                    <td> thiago@gmail.com </td>
                    <td> 34 </td>
                </tr>
                <tr>
                    <td> José da Silva </td>
                    <td> jose@gmail.com </td>
                    <td> 20 </td>
                </tr>
                <tr>
                    <td> Maria Eduarda </td>
                    <td> meduarda@gmail.com </td>
                    <td> 15 </td>
                </tr>
            </tbody>
        </table>

        <br>
        <hr>
        <br>

        <!-- Formulários -->

        <form action="form.php" method="POST" >
            <div>
                <label> Primeiro nome: </label>
                <input type="text"placeholder="Entre seu primeiro nome">
            </div>

            <div>
                <label> Segundo nome: </label>
                <input type="text">
            </div>

            <div>
                <label> E-mail: </label>
                <input type="email">
            </div>

            <div>
                <label> Gênero: </label>
                <select>
                    <option value="masculino"> Masculino </option>
                    <option value="feminino"> Feminino </option>
                </select>
            </div>

            <div>
                <label> Data de nascimento: </label>
                <input type="date">
            </div>

            <div>
                <label> Senha: </label>
                <input type="password">
            </div>

            <div>
                <label> Mensagem: </label>
                <textarea name="mensagem" id="" cols="30" rows="10"></textarea>
            </div>

            <input type="submit">

        </form>

    </body>

</html>
```

Temos vários tipo de input's como: Texto, e-mail, select, data, senha, mensagem e o submit. Este último vai enviar os dados do formulário para a referência passada no atributo _**action**_ do elemento **form**.

## [28:10](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=1690s) — Botões

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
        <p> <a href="https://www.lipsum.com/" target="__blanck"> Lorem </a> ipsum dolor sit amet consectetur adipisicing elit. Soluta, doloremque!</p>
        <p>Lorem ipsum dolor sit amet, consectetur <em>adipisicing</em> elit. Quia exercitationem numquam dolore dolores impedit vero iusto incidunt omnis eaque reiciendis.</p>

        <!-- Links -->
        <a href="https://google.com" target="__blanck"> Google </a>

        <br>
        <hr>
        <br>

        <!-- Tabelas -->
        <table>
            <thead>
                <tr>
                    <th> Nome </th>
                    <th> Email </th>
                    <th> Idade </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> Thiago Carlos </td>
                    <td> thiago@gmail.com </td>
                    <td> 34 </td>
                </tr>
                <tr>
                    <td> José da Silva </td>
                    <td> jose@gmail.com </td>
                    <td> 20 </td>
                </tr>
                <tr>
                    <td> Maria Eduarda </td>
                    <td> meduarda@gmail.com </td>
                    <td> 15 </td>
                </tr>
            </tbody>
        </table>

        <br>
        <hr>
        <br>

        <!-- Formulários -->

        <form action="form.php" method="POST" >
            <div>
                <label> Primeiro nome: </label>
                <input type="text"placeholder="Entre seu primeiro nome">
            </div>

            <div>
                <label> Segundo nome: </label>
                <input type="text">
            </div>

            <div>
                <label> E-mail: </label>
                <input type="email">
            </div>

            <div>
                <label> Gênero: </label>
                <select>
                    <option value="masculino"> Masculino </option>
                    <option value="feminino"> Feminino </option>
                </select>
            </div>

            <div>
                <label> Data de nascimento: </label>
                <input type="date">
            </div>

            <div>
                <label> Senha: </label>
                <input type="password">
            </div>

            <div>
                <label> Mensagem: </label>
                <textarea name="mensagem" id="" cols="30" rows="10"></textarea>
            </div>

            <input type="submit">

        </form>

        <!-- Botões -->
        <button> Click me </button> 

    </body>

</html>
```

Conseguimos adicionar botões, mas eles não possuem funcionalidade. Esta funcionalidade será adicionada apenas com php, javascript, etc.

## [28:44](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=1724s) — Imagens

PAREI

## [30:40](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=1840s) — Blockquote

## [31:20](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=1880s) — Abreviações

## [31:51](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=1911s) — Citações

## [32:40](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=1960s) — Tags semânticas do HTML

## [34:00](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=2040s) — Criando nossa página "Blog" com as tags semânticas

## [35:05](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=2105s) — Listas

## [35:55](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=2155s) — Criando nossa página "Blog" com as tags semânticas

## [39:00](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=2340s) — Pequena introdução ao CSS
