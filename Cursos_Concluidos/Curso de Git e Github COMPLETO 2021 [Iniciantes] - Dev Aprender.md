# Curso de Git e Github COMPLETO 2021 [Iniciantes] - Dev Aprender

[VIDEO AULA](https://www.youtube.com/watch?v=kB5e-gTAl_s)

## Aula 01 – Pré requisitos:

Navegando em sites, baixando arquivos, criando pastas e fazendo instalações. Comando básicos de infomrática.

## Aula 02 – O que é o Git e o GitHub?

**Git** →  controle de versionamento de programas.

**GitHub** → local onde estará sendo armazenado todo o código que está sendo trabalhado apenas por você ou sua equipe.

## Aula 03 - Como instalar o Git

Acessse o Google e pesquise por “git download” ou acesse o site https://git-scm.com/downloads , faça o download do arquivo de instalação ou execute os comandos no terminal, de acordo com o seu sistema operacional.

Para verificar se o programa foi instalado corretamente, abra o terminal em seu computador e digite o seguinte comando:

```shell
$ git --help
```

 O manual do git abrirá.

## Aula 04 – Como criar uma conta no GitHub

Acesse o site https://github.com/  e crie uma conta para você clicando no botão “**se increver**” ou “**Sing up**”. Coloque o e-mail que será usado na conta, crie uma senha e um nome que será usado no seu perfil.

Um código de confirmação será enviado para o seu e-mail. Abra o e-mail e faça a verificação com o código que foi enviado. Escolha a versão gratuita.

## Aula 05 – Como inicializar um repositório

Crie uma pasta para armazenar seu projeto em qualquer lugar em seu computador. Acesse a pasta do seu projeto, clique com o botão direito do mouse e clique em “**abrir no terminal**”. No terminal execute o comando:

```shell
$ git init
```

 → para **inicializar** o git no seu projeto. Para conferir se realmente o git foi inicializado, acesse a pasta e escolha a opção de visualizar os **arquivos ocultos**. Dentro da pasta terá uma pasta de nome **.git**.

Agora vamos iniciar o versionamento de código. Crie um arquivo de texto qualquer (no futuro será seu código) adicione algumas linhas de textos e salve dentro da pasta do seu projeto. Ao voltar ao terminal execute o seguinte comando:

```
$ git status
```

 → verifica o **status** atual dos repositórios git. Um **relatório** será apresentado, mostrando quais arquivos já foram incluído no controle de versão e quais ainda não foram incluídos. Também mostra se algum arquivo foi atualizado e essa atualização não foi adicionada no controle de versão.

**No commits yet** →  ainda não foi realizado nenhum commit.

**Untracked files** → arquivos não foram adicionados ao controle de versão. Esses arquivos estarão listados abaixo dessa mensagem em cor vermelha. 

## Aula 06 - Como adicinar arquivos ao controle de versão

Para adicionar os arquivos ao controle de versão, basta executar o comando ‘**git add  + “nome do arquivo”** ou ‘**git add .’** para adicionar todos os arquivos que não foram adicionados ao controle de versão.

```shell
$ git add meu_email.txt
```

 → adiciona o arquivo **meu_email.txt** ao próximo commit.

```shell
$ git add .
```

 → adiciona todos os arquivos atuais ao próximo commit.

Para confirmar se os arquivos foram adicionados, basta executar o “**git status**” e um novo relatório será visualizado apresentando quais arquivos foram adicionados (em cor verde) e quais ainda não foram adicionados (em cor vermelho).

## Aula 07 - Como criar versões do código com o commit

Para criar uma versão do seu código, basta executar o comando “**git commit -m “mensagem do commit**”. A mensagem será de forma resumida, o que foi realizado naquela versão que está sendo atualizada.

```shell
$ git commit -m “mensagem do commit”
```

→ cria um novo **commit** com uma mensagem.

OBS.: Caso seja a primeira vez que vocẽ está executando esse código, aparecerá uma mensagem dizendo que você precisa configurar o git, para isto basta executar os seguintes comandos:

$ **git config --global user.email “[you@example.com](mailto:you@example.com)”** → para adicionar o e-mail que foi cadastrado no GitHub.

```shell
$ git config --global user.email you@example.com
```

$ **git config --global user.name “Your name”** → para adicionar o nome de usuário que fio cadastrado no GitHub.

```shell
$ git config --global user.name myname
```

Após a configuração, você poderá realizar o commit. Ao realizar o commit, um relatório será apresentado informando:

$ **git commit -m “mensagem do commit”** → uma nova versão do código foi criada, um novo commit com o nome da mensagem que foi escrita entre parênteses.

Abaixo o nome da **branch** para a qual foram enviadas as alterações.

Uma lista com os arquivos adicionados.

## Aula 08 – Como enviar alterações usando git push

Para enviar a primeira versão do código para a nuvem, basta executar o comando **git push**.

```shell
$ git push
```

→ envia as atualizações para a nuvem na branch atualmente ativa. Se for a primeira vez que você está realizando o push, uma mensagem será apresentada, pedindo para você informar para onde na nuvem você deseja enviar a versão de seu código.

Acesse o seu GitHub e crie um **novo repositório**. Uma nova tela que abrirá para você colocar algumas informações como o **nome** do seu repositório, a **descrição** do seu repositório, se ele será **público** ou **privado** e para adicionar o o **README** ou **.gitignore**. Depois clique em **Create repository**.

O seu repositório será criado, agora basta copiar o **link** deste novo repositório e adicioná-lo ao git. No terminal você irá executar o seguinte comando:

$ **git remote add origin + link do repositório** → para definir para onde o código será enviado. Após isso basta executar o git push.

```shell
$ git remote add origin link
```

Caso uma nova mensagem seja apresentada, talve seja porque ainda não foi determinada a **branch** a qual receberá o seu código. Para isto, execute a mensagem apresentada no terminal, geralmente a mensagem abaixo é apresentada

```shell
$ git push --set-upstream origin master
```

→ O push será realizado na branch master.

## Aula 09 – Ciclo de atualização de código

Criando uma nova versão do seu código, ao executar o **git status** o relatório apresentará a modificação com o arquivo modificado em cor vermelha. Adicione o arquivo modificado ao vercionamento, através do comando **git add**, execute o **git status** para conferir se realmente foi adicionado. Em seguida crie a nova versão através do comando **git commit**” **git status** para conferir a criação da nova versão e em seguida, **git push** para enviar a nova versão para a nuvem.

## Aula 10 – Como verificar histórico de atualizações

```shell
$ git reflog
```

 → para verificar o histórico de atualizações do seu repositório.

Uma lista será apresentada com as versões que foram criadas, sendo a última versão a **HEAD{0}**.

## Aula 11 – Como navegar entre versões do seu código.

Pegue o número **Id** que aparece antes do **HEAD** no relatório do **reflog** e adicione ele ao comando **git reset**.

$ **git reset --hard numero ID** → para acessar a versão do ID adicionado ao comando.

```shell
$ git reset --hard 38d773a0
```

Ao executar esse comando no seu repositório, ao abrir o arquivo do código, irá perceber que o código **voltou para a versão do ID**.

## Aula 12 - O que são branches e como criar uma

**Branch** → galhos/caminhos diferentes que você irá seguir no desenvolvimento e versionamento de seus projetos. Sempre terá a branch principal, a qual serão enviadas as alterações que já funcionem corretamente. E terá outras branch's que também podem ser enviadas as alterações, a que se tiver algum erro, pode ser corrigido antes de enviar para a branch principal.

```shell
$ git branch
```

 →  para ver qual branch você está usando no momento.

$ **git branch** **nome-da-branch** →  para criar uma nova branch com o nome que foi passado.

```shell
$ git branch teste
```

$ **git checkout nome-da-branch** → para mudar da branch atual para a branch a qual foi passado o nome.

```shell
$ git checkout main
```

A partir do momento em que foi criada e altera a branch, todas a alterações serão passadas para esta nova branch e para passar essas novas alterações para a branch principal, será necessário realizar um “**merge**”.

## Aula 13 - Git merge, como unir o código

$ **git checkout nome-da-branch-principal** → para acessar a branch principal através.

```shell
$ git checkout main
```

$ **git merge nome-da-branch** → para puxar as alterações da branch a qual foi indicada no comando para a branch atual.

```shell
$ git merge teste
```

- Passos para uma boa prática:
  1. git pull da branch principal;
  2. gerar uma nova branch a partir da branch principal;
  3. trabalhar e adicionar novas funcionalidades na nova branch que criou;
  4. Finalizar o trabalho na branch temporária;
  5. Git checkout na branch principal;
  6. git pull;
  7. Mergiar(unir) o código da branch temporária com a branch principal(depois de testar);
  8. git push da branch principal.

### Criando uma branch a partir de outra branch:

Acesse a branch a qual você deseja criar outra a partir dela e atualize o código com o comando **git pull**. Depois crie uma nova branch com o comando abaixo:

$ **git checkout -b nome-da-nova-branch nome-da-branch-base** → permite mudar e criar uma nova branch com base em outra.

```shell
$ git checkout -b teste main
```

## Aula 14 – Pull request, um merge democrático

Quando você faz uma alteração numa branch diferente da principal, para a alteração ser aceita na branch principal, terá que ser realizado o **pull request**. Esse processo é realizadado no GitHub. Ao entrar no repositório o qual foi alterado, você verá que terá uma mensagem com um botão **Compare & pull request**. Clique nesse botão e uma nova tela abrirá para você comparar o código e adicionar algumas informações. Coloque o título do que está sendo feito, que no caso já será a mensagem do commit. No quadro abaixo pode ter uma breve explicação do que foi realizado no código. Após isso, clique em **Create pull request** para criar essa solicitação de aprovação.

Para aprovar o **pull request** clique em **Merge pull request**.

## Aula 15 – Git ignore

Em alguns momentos não queremos adicionar alguns arquivos no controle de versionamento. Para isto, será necessário criar o **.gitignore**. No terminal execute o comando:

```shell
$ touch .gitignore
```

 → para criar o arquivo git ignore.

Dentro do arquivo **.gitignore** você colocará o **nome** dos arquivos ou pastas/diretórios que você não quer que sejam adicionados no versionamento. Para nomear pastas, coloque o nome da mesma seguido de barra. ex.:

segredos/

Para nomear arquivos, coloque o nome seguido do formato. ex.: 

minha_senha.txt

OBS.: é importante adicionar o arquivo **.gitignore**, pois só assim ele irá funcionar. Execute git add, git commit e git push.



## Lista de atalhos:

 Abrir o manual do git:

``` shell
$ git --help
```

Inicializa um novo repositório/ para inicializar o git no seu projeto:

```shell
$ git init
```

Verifica o status atual dos repositórios git:

```shell
$ git status
```

Adiciona todos os arquivos atuais ao próximo commit:

```shell
$ git add .
```

Cria um novo commit com uma mensagem:

```shell
$ git commit -m “mensagem do commit”
```

Para adicionar o e-mail que foi cadastrado no GitHub:

```shell
$ git config --global user.email you@example.com
```

Para adicionar o nome de usuário que fio cadastrado no GitHub:

```shell
$ git config --global user.name your name
```

Envia as atualizações para a nuvem na branch atualmente ativa:

```shell
$ git push
```

Para definir para onde o código será enviado:

```shell
$ git remote add origin + link do repositório
```

O push será realizado na branch master:

```shell
$ git push --set-upstream origin master
```

Para verificar o histórico de atualizações do seu repositório:

```shell
$ git reflog
```

Para acessar a versão do ID adicionado ao comando:

```shell
$ git reset --hard numero-ID
```

Permite listar e ver qual branch está ativa atualmente:

```shell
$ git branch
```

Para criar uma nova branch com o nome que foi passado:

```shell
$ git branch nome-da-branch
```

Para mudar da branch atual para a branch a qual foi passado o nome:

```shell
$ git checkout nome-da-branch
```

Para acessar a branch principal através:

```shell
$ git checkout nome-da-branch-principal
```

Para puxar as alterações da branch a qual foi indicada no comando para a branch atual:

```shell
$ git merge nome-da-branch
```

Permite mudar e criar uma nova branch com base em outra:

```shell
$ git checkout -b nome-da-branch-de-origem nome-da-nova-branch
```

Permite fazer o merge da branch ativa atualmente com outra branch:

```shell
$ git merge branch-a-receber-merge
```

Atualiza a branch atualmente ativa:

```shell
$ git pull
```

Para criar o arquivo git ignore:

```shell
$ touch .gitignore
```