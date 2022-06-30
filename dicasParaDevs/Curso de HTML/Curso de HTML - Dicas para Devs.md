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

A tag para adicionar imagens é a **<img src="" alt="">** a qual tem como atributo o **src** que indica o caminho da imagem e o **alt** contem o texto que será mostrado caso a imagem não seja carregada. A tag **<img>** é uma tag _**inline**_. Podemos adicionar também as propriedades **width** e **height**, porém é mais aconcelhável colocar esses atributos pelo **CSS**.

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

            <br>
            <input type="submit">

        </form>

        <!-- Botões -->
        <br>
        <button> Click me </button> 

        <!-- Imagens -->
        <br>
        <img src="./images/developer.jpeg" alt="Imagem de exemplo">

    </body>

</html>
```

## [30:40](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=1840s) — Blockquote

Esta tag é uma citação, que recebe com atributo o _**cite**_, que indica de qual site é a citação.

```html
<!-- Blockquote -->
        <hr>
        <br>
        <blockquote cite="dicasparadevs.com.br">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt aliquid quae eum laborum voluptatum perspiciatis nisi! Quaerat, ullam culpa.
        </blockquote>
```

## [31:20](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=1880s) — Abreviações

A tag **<abbr>** recebe como atributo o _**title**_ que terá o texto completo da abreviação que foi colocada. Ao passar o mouse por cima da abreviação no site, o texto completo será exibido.

```html
<!-- Abreviações -->
        <hr>
        <br>
        <p>Eu amo a <abbr title="World Wide Web">WWW</abbr>!</p>
```

## [31:51](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=1911s) — Citações

Essa tag **<cite>** também recebe uma citação, colocando-a em _intálico_.

```html
<!-- Citações -->
        <hr>
        <br>
        <p>Tutorial feto por <cite>dicasparadevs</cite></p>
```

Arquivo completo das tags

```html
<!DOCTYPE html>
<html>
    
    <head>
        <title> Curso de HTML </title>
    </head>

    <body style="background-color:#d4d4e9a1">

        <nav>
            <ul>
              <li><a href="blog.html">Blog</a></li>
            </ul>
        </nav>

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

            <br>
            <input type="submit">

        </form>

        <!-- Botões -->
        <br>
        <button> Click me </button> 

        <!-- Imagens -->
        <hr>
        <br>
        <img src="./images/developer.jpeg" alt="Imagem de exemplo">

        <!-- Blockquote -->
        <hr>
        <br>
        <blockquote cite="dicasparadevs.com.br">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt aliquid quae eum laborum voluptatum perspiciatis nisi! Quaerat, ullam culpa.
        </blockquote>

        <!-- Abreviações -->
        <hr>
        <br>
        <p>Eu amo a <abbr title="World Wide Web">WWW</abbr>!</p>

        <!-- Citações -->
        <hr>
        <br>
        <p>Tutorial feto por <cite>dicasparadevs</cite></p>

    </body>

</html>
```

## [32:40](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=1960s) — Tags semânticas do HTML

Um elemento semântico descreve claramente o seu significado para o navegador e para o desenvolvedor. As tags são usadas para criar e estruturar melhor o layout da página Web.

![layout_HTML](/home/thiagocarlos/Downloads/CURSOS/PROGRAMAÇÃO/TESTES/dicasParaDevs/Curso de HTML/images/layout_HTML.png)

## [34:00](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=2040s) — Criando nossa página "Blog" com as tags semânticas

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Blog</title>
  </head>
  <body style="background-color:#d4d4e9a1">
    <header>
      <h1>Meu Blog</h1>
    </header>

    <nav>
      <ul>
        <li><a href="index.html">Início</a></li>
      </ul>
    </nav>

    <section>
      <article>
        <h1>Lorem, ipsum dolor.</h1>
        <small>Postado por Thiago Carlos</small>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, enim quisquam suscipit ea excepturi libero? Mollitia aut fugiat accusamus architecto.</p>
      </article>

      <article>
        <h1>Lorem, ipsum dolor.</h1>
        <small>Postado por Limeira</small>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, enim quisquam suscipit ea excepturi libero? Mollitia aut fugiat accusamus architecto.</p>
      </article>
    </section>

    <aside>
      <ul>
        <li><a href="exemplo.html">Desenvolvimento Web</a></li>
        <li><a href="exemplo.html">Desenvolvimento Mobile</a></li>
        <li><a href="exemplo.html">Carreira</a></li>
      </ul>
    </aside>
    
    <footer>
      <p>&copy; dicasparadevs - 2020</p>
    </footer>
  </body>
</html>
```

## [39:00](https://www.youtube.com/watch?v=r0CWl2EhR6Q&t=2340s) — Pequena introdução ao CSS

