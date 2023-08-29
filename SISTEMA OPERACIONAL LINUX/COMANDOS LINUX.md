# COMANDOS LINUX

1. Para reduzir/encurtar o diretório atual no terminal, rode qualquer dos dois comandos abaixo:

```tex
$ PS1="${debian_chroot:+($debian_chroot)}\[\033[01;34m\]\W \[\033[32m\]\$\[\033[00m\] "
```



```tex
$ PS1="${debian_chroot:+($debian_chroot)}\[\033[01;34m\]\W \[\033[31m\]\$\[\033[00m\] "
```

## Formatar pen Drive 

1. Exibir uma lista das mídias e discos conectados ao computador com seus detalhes:

```tex
$ df
```

2. Para desmontar/ejetar a unidade use o comando "**unmount**" + nome da unidade, ex.:

```tex
$ sudo umount /dev/sdc1
```

3. Formatando pendrive com o comando "**mkfs**", digitando o "**comando + formato de arquivos + nome da unidade**":

   - Você terá que escolher o sistema de arquivos no qual o pendrive será formatado (FAT32/NTFS/EXT4), abaixo as formas de escrevê-los:

     - Para o sistema de arquivos vFAT (FAT32)

     ```tex
     $ sudo mkfs.vfat /dev/sdc1
     ```

     - Para sistema de arquivos NTFS:

     ```tex
     $ sudo mkfs.ntfs /dev/sdcsadasd1
     ```

     - Para o sistema de arquivos EXT4:

     ```tex
     $ sudo mkfs.ext4 /dev/sdc1
     ```

   ### TypeScript

   1. Instalar TypeScript

   ```tex
   $ npm install -g typescript
   ```

   2. Ver a versão do TypeScript

   ```tex
   $ tsc -v
   ```

   ### Memória
   
   - Para saber o tipo e tamanho de memória RAM
   
   ```tex
   $ sudo dmidecode --type 17
   ```
   
   Observe a linha "**Type**" - É o tipo da memória.
   
   Depois observe "**size**" - É o tamanho da memória.
   
   ### Fontes
   
   - Para saber as fontes instaladas no sistema:
   
   ```tex
   $ xlsfonts
   ```
   
   - Para instalar fontes da Microsoft:
   
   ```tex
   $ sudo apt-get install ttf-mscorefonts-installer
   ```
   
   

## Finalizar o programa

### Finalizar todos os programas

1. Inicie uma sessão do terminal
2. Dentro do terminal digite “**sudo killall** ” sem as aspas.

Por exemplo, para finalizar as instâncias do firefox, digite “sudo killall firefox” sem aspas

```shell
$ sudo killall 
```

### Finalizar o programa utilizando o mouse

1. Inicie uma sessão do terminal
2. Dentro do terminal digite “**sudo xkill**” sem aspas; então clique em qualquer janela pra finaliza-la.

Este comando faz o seu cursor agir como um exterminador, mortal.

```shell
$ sudo xkill
```

## Instalar ANKI

Complementos

https://ankiweb.net/shared/info/814349176

https://ankiweb.net/shared/info/723520343

https://ankiweb.net/shared/info/1846592880

instalar mpv ou mplayer

no terminal

```shell
$ sudo apt-get update
```

```shell
$ sudo apt-get install mpv
```

___



## Instalar fontes no Linux Mint

```shell
sudo apt install ttf-mscorefonts-installer
```

Para verificar as informações das fontes instaladas

```shell
apt show ttf-mscorefonts-installer
```

___

## Instalar nodejs

- Instalando o __curl__:

```shell
sudo apt install curl
```

- Instalando a versão do node:

```shell
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
```

O número __18.x__ significa que vai ser instalado a versão mais estável da versão 18.

- Instalando o Nodejs propriamente dito:

```shell
sudo apt-get install -y nodejs
```

- Para verificar a versão do nodejs:

```shell
node --version
```

- Para verificar a versão do __npm__:

```shell
npm --version
```

___

## Instalar ZSNES

- ### Atualizar a lista de pacotes

```shell
sudo apt update
```

- ### Atualizar os pacotes dos programas:

```shell
sudo apt upgrade
```

- ### Instalar o zsnes

```shell
sudo apt install zsnes
```

## Atualizar Sistema

1. Para atualizar todos os pacotes:
```shell
sudo apt update
```

2. Visualizar o que precisa ser atualizado:
```shell
sudo apt list --upgradable
```

3. Para atualizar pacotes fora de data e ainda remover os obsoletos:
```shell
sudo apt-get dist-upgrade
```
4. Para atualização geral da distribuição, remoção de pacotes e correção de conflitos:
```shell
sudo apt-get upgrade
```

5. Para remover os pacotes que não serão mais necessários:
```shell
 sudo apt-get autoremove
```

## Desligar o computador
- Desliga em 10 min:
```shell
  sudo shutdown -h +10
```

- Programar um horário:
```shell
  sudo shutdown -r HH:MM
```

## Script para atualizar sistema

Siga as etapas abaixo para criar um script:

1. Abra um editor de texto em seu sistema, como o Nano ou o Vim.

2. Cole os seguintes comandos no editor de texto:

```bash
#!/bin/bash

# Atualiza a lista de pacotes
sudo apt update

# Lista os pacotes que podem ser atualizados
sudo apt list --upgradable

# Executa uma atualização mais completa do sistema
sudo apt-get dist-upgrade

# Executa uma atualização dos pacotes instalados
sudo apt-get upgrade

# Remove pacotes não utilizados
sudo apt-get autoremove
```

3. Salve o arquivo com um nome significativo, como `atualizar_sistema.sh`. Certifique-se de que o arquivo tenha permissão de execução, o que você pode fazer usando o comando `chmod +x atualizar_sistema.sh`.

4. Agora você pode executar o script digitando `./atualizar_sistema.sh` no terminal.

Lembre-se de que a execução de comandos com privilégios de superusuário (sudo) requer cuidado. Certifique-se de entender o que cada comando faz antes de executar o script. Certos comandos podem exigir interação do usuário, como a confirmação para instalação ou atualização. Certifique-se de estar ciente disso ao usar um script automatizado.

