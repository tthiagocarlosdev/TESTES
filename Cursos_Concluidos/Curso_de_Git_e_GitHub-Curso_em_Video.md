# Git e GitHub - Curso em Video

## AULA 01 - Para que serve o Git?

O que é Git? O que é versionamento?

Git != GitHub

**Git** é um Software de controle de versão.

**GitHub** é uma plataforma de rede social para programadores.

Git é um VCS distribuído.

- **Principais Vantagens:**
  - Controle de histórico;
  - Trabalho em equipe;
  - Ramificação do projeto;
  - Segurança;
  - Organizaçãoç
  - Repositório local.

## AULA 02 - Para que serve o GitHub?

github.com/gustavoguanabara

O que o GitHub faz:

- Repositórios ilimitados;
- Hospedagem de código-fonte;
- Características de rede social;
- GitHub Pages integrado;
- Colaboração;
- Forks.
- Repositório remoto.

## AULA 03 - A Evolução do Git e GitHub

## AULA 04 - Instalações e configurações importantes - Curso de Git e GitHub

- Istalar: Google chrome, Microsoft Edge, Visual Studio Code, GitSCM, GitHug Desktop

**AULA 05 - Criando o primeiro Repositório**

- Após criar o repositório, na aba “Changes”, clique em “Publish repository”;
- Na nova janela que abre, desmarque a opção “Keep this code private” e clique em “Publish repository”;
- Confira na página do GitHub se seu repositório foi carregado.
- Volte no GitHug Desktop e clique na opção “Open in Visual Studio Code”
- No Visual Studio Code, altere o código, volte no GitHub Desktop e verá que na aba “Changes” estará marcando uma modificação;
- Você pode colocar o título da modificação e também uma descrição;
- Clique em “Commit to main”
- Faça a atualização clicando em “Push origin”;
- Você pode altera o código online no próprio GitHub, após isso, vá no GitHub Desktop e faça a atualização, clicando em “Pull origin”;
- Teclas de atalho no GitHub Desktop:
- Ctrl + Enter** – Committing to main
- **Ctrl + P** – Push origin

## AULA 06 - Instalando GitHub Desktop no Linux

## AULA 07 - Clonando um Repositório

## AULA 10 - Guia da Linguagem Markdown

- Texto em **negrito**:

```markdown
__Markdown__    **Markdown**
```

- Texto em *Itálico*:

```markdown
_Markdown_    *Markdown*
```

- Texto ~~Tachado~~:

```markdown
~~Markdown~~
```

- Título e níveis:

```markdown
# Título

## Título

### Título
```

- Linha:

```markdown
---
```

***

- Texto em ***negrito e Itálico***:

```markdown
__*Markdown*__
```

- Lista numerada

```markdown
1. Teste
1. Teste2
	1. Teste2a
	1. Teste2b      (Três espaços antes cria uma sublista.)
1. Teste3
1. Teste4
```

- Lista demarcada:

```markdown
* Teste
* Teste
* Teste
	* teste
	* teste         (Três espaços antes cria uma sublista.)
* Teste
```

- Lista de tarefas:

```markdown
- [x] Criar a página principal;
- [x] Criar a página da loja;
- [ ] Finalizar a reunião com o cliente;
- [ ] Receber o pagamento.
```

- Para carregar imagens, abra a pasta na qual a imagem se encontra e arraste a imagem até o **“Attach files by dragging & dropping, selecting or pasting them.”** e solte-a. A imagem será carregada automaticamente.

Entre as [] está o título da imagem e entre ( ) está o link da imagem.

![inspectocat](https://user-images.githubusercontent.com/76978748/104953685-a0f7c380-59a5-11eb-85d8-d37e6a6b6ff3.jpg)

- Adicionando um link:

Use as teclas de atalho  “Ctrl + k”, será adicionado a seguinte formação:

**[](url)**

Entre [ ] está o título do link e entre ( ) está o link que você irá adicionar

```markdown
[Acesse meu GitHub](https://github.com/tthiagocarlosdev)
```

- Inserindo Tabelas:

| Num | Nome | Nota | 

| --- | --- | --- |

```markdown
| 1 | Thiago | 7.0 |
| 2 | Carlos | 10.0 |
| 3 | Silva | 9.7 |
```

| 1    | Thiago | 7.0  |
| ---- | ------ | ---- |
| 2    | Carlos | 10.0 |
| 3    | Silva  | 9.7  |

Terminou a tabela

- Para marcar um comando coloque o mesmo entre crases:

Não entendo direito para que serve o comando `document.getElementByld()` da linguagem JavaScript

O texto ficará em outra fonte com o fundo de outra cor.

- Copiando código:

Abra três crases digite o código e feche com mais três crases.

Olha o meu programa em Python:

````markdown
```
num = int(input('Digite um valor: ')
if num % 2 == 0 :
	print(f'O valor {num} é PAR')
else
	print(f'O Valor {num} é IMPAR')
```
````

- Colocar emoji:

Basta digitar : e já abrirá uma lista de emojions para ser adicionado.

```markdown
Olá pequeno Gafanhoto :vulcan_salute: 
```

Olá pequeno Gafanhoto :vulcan_salute: 

- Comentando um Issues de algum usuário:

Vá até o Issue do mesmo e clique nos três pontos do lado direito na postagem, depois clique em “Quote reply”.

## AULA 11 - Seu GitHub muito mais seguro:

- Dicas para senhas fortes:
  - Pelo menos 8 caracteres;
  - Letras e números;
  - Maiúsculas e minúsculas;
  - Símbolos;
  - Evitar nomes e palavras comuns;
  - Evitar padrões;
  - Nunca compartilhar uma senha.

- **Autenticação dupla:**

1. Acesse sua conta no **GitHub** e no seu **avatar** clique na seta e depois em “**Settings**”;
2. Em seguida clique em “**Security**” no lado esquerdo da sua tela;
3. Navegue até a área “**Two-factor authentication**” e clique no botão verde “**Enable two-factor authentication**”;
4. Na próxima tela clique no botão verde do lado esquerdo inferior “**Set up using an app**”;
5. Na próxima tela aparecerá os “**Recovery codes**”, salve estes códigos clicando em “**Download**”, “**Print**” ou “**Copy**”;
6. Depois clique no botão verde no canto inferior esquerdo “**Next**”;
7. Na próxima tela será apresentado um QR-code para você acessar através do aplicativo no celular. “**Scan this barcode with your app**”;
8. Na área “**Enter the six-digit code from the application**” você irá digitar o código de seis dígitos que será gerado através do app;
9. Abra o seu celular, acesse sua loja e baixe o app “**Google** **Authenticat****or**”, instale e execute o app;
10. Clique no botão “**iniciar**”, passe pelas instruções e na próxima tela “**Adicionar uma conta**” acesse o link “**Ler um código de barras**”;
11. Quando abrir a câmera, aponte para o **QR-code** que oi gerado na página do **GitHub**;
12. O app gerará um código de seis dígitos e logo abaixo você deve clicar no botão azul “**ADICIONAR CONTA**”;
13. Volte na página do GitHub, na área “**Enter the six-digit code from the application**”, digite o código que está aparecendo no app do seu celular e clique no botão verde no canto inferior esquerdo, “**Enable**”;
14. Pronto, a sua autenticação em dois passos foi ativada.