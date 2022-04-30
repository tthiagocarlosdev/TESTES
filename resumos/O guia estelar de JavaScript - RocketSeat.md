# Guias estelares

## O guia estelar de JavaScript

# Introdução

1. ​	**Abertura**

Vamos aprender sobre programação e Java Script. O que é o JavaScript, para o que ele serve, primeiros passos, tipos de dados, variáveis, prática, funções, manipulações de dados, expressões.

2. ​	**JavaScript**

* ​	**JavaScript Core:**
  * Linguagem de programação que roda Navegador do usuário (front-end):
    * Se você clicar em algum botão da página e aparece uma janela. Isso é o JavaScript.
    * Alteração do site ou aplicativo, conforme a interação do usuário.
  * Roda também no computador (back-end)
* ​	**O que podemos fazer?**
  * Podemos criar aplicações web, mobile (React Native), desktop (Electron);
  * Empresas famosas que usam:
    * Facebook (Instagram, WhatsApp);
    * Google (Youtube, Gmail, Drive);
    * Uber;
    * Netflix;
    * TikTok;
    * ...
  * 99.99% dos sites na web usam JavaScript;
  * Linguagem obrigatória para quem programa o Front-end Web.
* **Evolução:**
  * A comunidade cresce cada vez mais e a linguagem está sempre evoluindo.

* **O que vamos ver o curso?**
  * Tipos de dados;
  * Variáveis;
  * Funções;
  * Condicionais;
  * Estruturas de repetição;
  * …
* ​	**Como vai funcionar a dinâmica do curso?**
  * Treino de futebol;
  * Treino de artes marciais;
  * Conceitos 	e fundamentos;
  * Prática;
  * Revisão.


# Primeiros Passos

1. **Sintaxe**
   * **A importância da Sintaxe** – escrever texto de uma maneira correta.
     * Toda linguagem tem;
     * Uma boa comunicação necessita de uma boa sintaxe;
     * 82% dos erros para iniciantes programação.

```javascript
console.log(“Bem vindos ao Starter”)
```

2. **Maneiras de executar o JavaScript**

- Abra o navegador do seu computador e aperte a tecla **F12**, clique em “**console**” e pronto, já pode codar.
- https://codepen.io/
- Visual Studio Code

3. **Adicionando arquivos JS**

* HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<script src= "./scripts.js"></script>
</body>
</html>
```

* JAVA SCRIPT

```javascript
console.log('Bem vindos ao Starter!!')
```

4. **Comentários**

```javascript
//Aqui eu tenho um comentário em linha
/*
Aqui eu tenho um comentário multi linha (bloco)

o código abaixo escreve alguma mensagem no devtools
*/

console.log('Bem vindos ao Starter!!') //algum cometário console.log('iria ignorar')
console.log('não iria ignorar')
```


# **Tipos de dados**

1. **Introdução**

* **Tipos de dados**
  * Gramática:

    * Elementos da linguagem e suas combinações
    * A arte de falar e escrever corretamente
  * Vocabulário:
    * Conjunto de termos e expressões
    * Agrupamento de palavras
  * Precisamos saber como escrever
  * Precisamos saber os significados
  * Precisamos continuar aprendendo, para crescer nosso vocabulário
* **Como vai ser a dinâmica do aprendizado?**
  * Conceitos e escrita
  * Vamos aprender os tipos de dados utilizados na linguagem
    * Você sabia que é possível aprender 80% de uma língua nova, com cerca de 20% do vocabulário? (até menos)

2. **String**

* Cadeia de carácteres

  * “ ” aspas duplas	

  * ‘ ’ aspas simples

  * ``  template literais ou template strings (permite multi linhas) e permiti expressões dentro da string interpolação). Ex.:

    ````javascript
    `${1+1}`
    ````

```javascript
console.log("Thiago Carlos")
console.log('Limeira da Silva')
console.log(`com crases eu posso 

quebrar linha

`)

console.log("um 'exemplo'com asplas duplas")
console.log('um "exemplo" com aspas simples')
console.log(`um "exemplo" com 'crases'`)
```

3. **Number**

* **Números**

33 :arrow_right: inteiros

12.5 :arrow_right: reais - float

NaN :arrow_right: Not a Number

Infinity :arrow_right: infinito

```javascript
console.log(33)
console.log(-33)
console.log(12.5)
console.log(12 + 12)
console.log(15 / 3)
console.log(15 / "axsd")
console.log(12 === Infinity)
```

4. **Boolean**

* **Boolean - Booleano**
  * é um tipo de dado que só tem 2 valores:

true :arrow_right: verdadeiro

false :arrow_right: falso

```javascript
console.log(true)
console.log(false)
```

5. **Undefined vs null**

* undefined
  * indefinido :arrow_right: não existe
* null
  * nulo
  * objeto que não possui nada
  * diferente de indefinido
* null !== undefinedfined vs null

```javascript
console.log(undefined)
console.log(null)
console.log(null === undefined) //igual
console.log(null !== undefined) // diferente
```

6. **Object**

* Object
  * Objeto
  * Dado estrutural
  * Proriedades / Atributos
  * Funcionalidades / Métodos
* {propriedade: "valor"}

```javascript
console.log({
	name: "Thiago",
	idade: 33,
	andar: function(){
		console.log('andar')
	}
})
```

7. **Array**

* Array (vetores)
  * Uma lista
  * Agrupamento de dado

```javascript
["thiago", 33]
```

```javascript
console.log(["Thiago", 33])
console.log([
	"leite",
	"ovos",
	2,
	3,
])
```

8. **Conclusão**

* Tipos de dados

  Conforme o ECMAScript standard temos 9 tipos de dados:

  * Data types
    * Primitive / Primitive value
    * Structural
    * Structural Primitive

* Primitivos

  * String
  * Number
  * Boolean
  * undefined
  * Symbol
  * BigInt

* Estruturais

  * Object
    * Array
    * Map
    * Set
    * Date
    * …
  * Function

* Primitivo Estrutural / Structural Root Primitive

  * null

# **Variáveis**

1. ​	**Conhecendo as variáveis**

- ​	Variáveis:
  - Nomes simbólicos para receber algum valor;
  - Atalhos 	de código;
  - Identificadores;
  - 3 palavras reservadas para criar uma variável:
    - var
    - let
    - const

```javascript
// var
var clima = "Quente"
clima = "Frio"

console.log(clima)

// let
let dia = "Wednesday"
dia = "Friday"

console.log(dia)

// cont - não pode mudar o valor
const mes = "April"
//mes = "Octuber"

console.log(mes)
```

2.  **Tipos dinâmicos**

- O JS é uma linguagem fracamente tipada e dinâmica:
  - Variáveis não precisam ter um tipo previamente definido;
  - Podemos mudar o conteúdo da variável.

```javascript
let clima:String = "" // fortemente tipada e estática
console.log(clima)

let clima = ""
console.log(typeof clima)
```

3. **Scope e var**

- Escopo determina a visibilidade de alguma variável no JS.
- **Block statement** – declaração de bloco.

```javascript
// vamos iniciar um bloco
{
// aqui dentro é um bloco e posso colocar qualquer código
}// aqui fechamos o bloco
```

O bloco, também criará um novo escopo. Chamamos de **block-scoped**.

**var** é global e poderá funcionar fora de um escopo de bloco.

**var** é global e também local.

**Hoisting** – quando o JS pega a variável local e transforma ela em global.

```javascript
console.log('> existe x antes do bloco?', x)
{
var x = 0
}
console.log('> existe x depois do bloco?', x)
```

4. **Scope let e const**

**const** e **let** são locais e só funcionam no escopo onde foram criadas.

```javascript
let y = 1
console.log('> existe y antes do bloco?', y)
{
const y = 0
console.log('> existe y dentro do bloco?', y)
}
console.log('> existe y depois do bloco?', y)
```

5. ​	**Nomeando variáveis**

- Para criar nomes

  - JS é case-sensitive (sensível ao caso)(uma letra minúscula é diferente da mesma letra maiúscula.)
  - JS aceita a cadeia de caracteres Unicode. (a variável pode ter aspas e acentuação.)

- Posso:

  - Iniciar com esses caracteres especiais: $ _
  - Iniciar com letras
  - Colocar acentos	
  - Letras maiúsculas e minúsculas fazem diferença

- Não posso:

  - Iniciar com números
  - Colocar espaços vazios no nome

- Ideal:

  - Criar nomes que fazem sentido
  - Que explique o que a variável é ou faz
  - **camelCase** – é a denominação em inglês para a prática de escrever as palavras compostas ou frases, onde cada palavra é iniciada com **maiúsculas e unidas sem espaços**. A primeira letra de uma palavra composta por CamelCase pode ou não ser **capitalizada**. Ex.: **checkIfNameExist**
  - **snake_case** – quando colocar o underscore(_) entre os nomes. Ex.: **check_if_name_exist**	
  - Escrever em inglês

  # **Praticando e avançando**

  1. ​	**Declaration assignment var**

```javascript
// Variáveis e tipos de dados
// declaração or declaration
var name

// assignment or atribuição de valores
name = "Thiago"

// que tipo de dado foi colocado na variável
console.log(typeof name)
console.log(name)
```

2. ​	**Agrupando declarações**

```javascript
// agrupamento de declarações
let age, isHuman
age = 18
isHuman = true
// multiplos argumentos na função
console.log(name, age, isHuman)
```

3. ​	**Concatenando e interpolando variáveis**

```javascript
//escrita de texto + variáveis.
//concatenando valores
console.log('O ' + name + ' tem ' + age + ' anos.')

// interpolando valores com template literals or template strings
console.log(`o ${name} tem ${age} anos.`)
```

4. ​	**Objects**

```javascript
//Object

const person={
	name: 'thiago',
	age: 33,
	weight: 92,
	isAdmin: true
}

console.log(person)
console.log(`o ${person.name} tem ${person.age} anos e é ${person.isAdmin}`)
```

5. ​	**Arrays**

```javascript
// Array

const animals = [
	'Lion',
	'Monkey',
	'Cat',
	{
		name: 'Fish',
		age: 3
	}
]
// acessar valores dentro do Array
console.log(animals)
console.log(animals[0])
console.log(animals[1])
console.log(animals[2])
//para saber o total de elementos do array
console.log('total de elementos do array: ')
console.log(animals.length)
//acessando um objeto dentro do array
console.log(animals[3])
console.log(animals[3].name)
```

6. ​	**Exercícios**

- A - Declare uma variável de nome weight:

```javascript
let weight;
```

- B - Que tipo de dado é a variável acima?

```javascript
console.log(typeof weight)
```

- C - Declare uma variável e atribua valores para cada um dos dados:
  - name: String
  - age: Number (integer)
  - weight; Number (float)
  - isSubscribed: Boolean

```javascript
let name = 'Thiago Carlos'
let age = 33
let weight = 92.1
let isSubscribed = true
```

- D - A variável student abaixo é de que tipo de dados?
  - let student = {};

```javascript
console.log(typeof student)
```

- F - Atribua a ela as mesmas propriedades e valores do exercício C.

```javascript
let student = {
	name: 'Thiago Carlos',
	age: 33,
	weight: 92.1,
	isSubscribed: true,
};
console.log(student)
```

- G - Mostre no console a seguinte mensagem:

  ​	<name> de idade <age> pesa <weight> kg.

  Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.

```javascript
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)
```

- H - Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.

```javascript
let students=[]
```

- I - Reatribua valor a variável acima colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele ao Array)

```javascript
let students = [
	student
]
```

- J - Coloque no console o valor da posição zero do Array acima.

```javascript
console.log(students[0])
```

- L - Crie um novo student e coloque na posição 1 do Array students.

```javascript
let student2 = {
	name: 'Limeira',
	age: 21,
	weight: 50
}

students[1] = student2

console.log(students)
console.log(students[0])
console.log(students[1])
```

- M - Sem rodar o código responda qual é a resposta do código e porque? Após sua resposta, rode o código e veja se você acertou.

```javascript
console.log(a)
var a = 1
```

# **Funções**

1. ​	**Functions**
   - criar um aplicativos de frases motivacionais;
   - Finalidade - agrupamento de código, reutilização de código e dá significado;
   - declaration - declaração da função;
   - function statement.

```javascript
function createPhrases(){
	console.log('Estudar é muito bom')
	console.log('Paciência e persistência')
	console.log('Revisão é a mãe do aprendizado')
}
```

// executar a função

// rodar, chamar, invocar

// execute, run, call, invoke

```javascript
createPhrases()
console.log('fim do programa')
```

2. ​	**Argumentos e parâmetros**

// function expression

// function anonymous

// parâmetros (parameters)

```javascript
const sum = function(number1, number2){
	console.log(number1 + number2)
}

sum(2, 3) // arguments - argumentos
```

3. ​	**Retornando valores dentro da função**

// function expression

// function anonymous

// parâmetros (parameters)

```javascript
let total = 0
const sum = function(number1, number2){
	let total = number1 + number2
	return total
}

let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
console.log(total)
```

4. ​	**Outra maneira de entender funções**

```javascript
// Função é um liquidificador

function fazerSuco(fruta1, fruta2){
	return 'suco de : ' + fruta1 + fruta2
}
const copo = fazerSuco('banana', 'maçã')
console.log(copo)
```

5. ​	**Function scope**

```javascript
// function scope
let subject = 'math'

function createThink(subject) {
	subject = 'study'
	return subject
}

console.log(subject)
console.log(createThink(subject))
console.log(subject)
```

6. ​	**Function Hoisting**

A função foi chamada antes de ser executada e mesmo assim não ocorreu bag. Isso porque o JS executou ela como hoisting.

```javascript
// function hoisting

sayMyName();

function sayMyName(){
	console.log('Thiago')
}
```

7. ​	**Arrow function**

Arrow ‘**=>**’ maneira mais simples de se escrever uma função.

```javascript
// arrow function

const sayMyName = () => {
	console.log('Thiago')
}

sayMyName()

const sayMyNickName = (nickname) => {
	console.log(nickname)
}

sayMyNickName('Carlos')
```

8. ​	**Callback Function**

Quando invoco uma função e passo como parâmetro outra função.

```javascript
// callback function
function sayMyName(name) {
	console.log('antes de executar a funcao callback')
	name()
	console.log('depois de executar a callback')
}

sayMyName(
	() => {
		console.log('estou em uma callback')
}
)
```

9. ​	**Funções construtoras**

Function() constructor

\* expressão new

\* criar um novo objeto

\* this keyword

```javascript
function Person(name) {
	this.name = name
	this.walk = function () {
		return this.name + ' is walking'
	}
}
const thiago = new Person('Thiago')
const joao = new Person('Joao')
console.log(thiago.walk())
console.log(joao.walk())

let nickname = new String('limeira')
console.log(nickname)
```

# **Manipulando dados**

1. ​	**Prototype**

   **Prototype**

   - prototype-based language
   - prototype chain
   - **__proto__**

Cada tipo de dado é encapsulado por um objeto que já tem uma propriedade chamada “**__proto__**”. Podemos acessar as propriedades que são criadas em cada tipo de objeto, declarando o mesmo, em seguida adicionando um ponto e o nome da função a ser chamada. Ex.: **“thiago”.length**

2. ​	**Type conversion coersion**
   - ​	Type conversion (typecasting) vs Type coersion
   - ​	Alteração de um tipo de dado para outro tipo
     - **type 	conversion** 	- explicitamente altera um tipo de dado para outro. Capacidade 	do programador de realizar a troca. 
     - **type coersion** - JS implicitamente realizando essa troca. Capacidade do JS de forçar uma troca.

```javascript
console.log('9' + 5) // coersion
console.log(Number('9') + 5) //conversion
```

3. ​	**Strings em números**
   - ​	Manipulando Strings e Números:
   - ​	Transformar String em Número e Número em String.

```javascript
let string = "123"
let number = 321
console.log(Number(string))
console.log(String(number))
```

4. ​	**Contando caracteres e digitos**
   - ​	Manipulando Strings e Números:
   - ​	Contar quantos caracteres tem uma palavra e quantos dígitos tem um número.

```javascript
let word = "Nabucodonozor"
console.log(word.length)
let number = 1234
console.log(String(number).length)
```

5. ​	**Casas decimais**
   - ​	Manipulando Strings e Números:
   - ​	Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula.

```javascript
let number = 345.423409784059234
console.log(number.toFixed(2).replace(".", ","))
```

6. ​	**Maiúsculas e minúsculas**
   - ​	Manipulando Strings e Números:
   - ​	Transforme letras minúsculas em maiúsculas. Faça o contrário disso também.

```javascript
let word = "Programar é muito bacana!"
console.log(word.toLowerCase()) // minúsculo
console.log(word.toUpperCase()) // maiúsculo
```

7. ​	**Separando strings**
   - ​	Manipulando Strings e Números:
   - ​	Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _ .

```javascript
let phrase = "O rato roeu a roupa do rei de roma"
let myArray = phrase.split(" ")
console.log(phrase)
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)
```

8. ​	**Encontrando palavras em frases**
   - ​	Manipulando Strings e Números
   - ​	Verificar se o texto contém a palavra Amor.
   - ​	.includes() é case sencitive

```javascript
let phrase = "Eu que viver o Amor!"
console.log(phrase.includes("Amor"))
```

9. ​	**Criando array com construtor**
   - ​	Manipulando Arrays:
   - ​	Criar Array com construtor

```javascript
let myArray1 = ['a', 'b', 'c']
console.log(myArray1)
let myArray2 = new Array('d', 'e', 'f')
console.log(myArray2)
let myArray3 = new Array(10)
console.log(myArray3)
```

10. ​	**Elementos do Array**
    - ​	Manipulando Arrays
    - ​	Contar elementos de um array

```javascript
console.log(["a", "b", "c"].length)
```

11. ​	**Strings para arrays**
    - ​	Manipulando Arrays
    - ​	Transformar uma cadeia de caracteres em elementos de um array

```javascript
let word = "nabucodonozor"
console.log(Array.from(word))
```

12. ​	**Manipulandos arrays**

```javascript
let techs = ["html", "css", "js"]

//adicionar um item no fim
techs.push("nodejs")
//adicionar no começo
techs.unshift("sql")
//remover do fim
techs.pop()
//remover do começo
techs.shift()
//pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
//remover 1 ou mais items em qualquer posição do array
techs.splice(1, 1)
// encontrar a posição de um elemento no array
let index = techs.indexOf('html')
console.log(index)
techs.splice(index, 1)
console.log(techs)
```

# **Expressões e operadores**

1. ​	**Expressões e operadores**

Expressão é qualquer linha de código que resolve alguma coisa no JS. Toda expressão pode o não terminar com;

```javascript
let number = 1 // expressão
console.log(number + 1) //operador binário
console.log(++number) // unário
console.log(typeof number) // unário
console.log(true ? 'alo' : 'nada') // ternário
```

2. ​	**New**

- ​	left-hand-side expression

- ​	cria um novo objeto

- ​	definição - expressão que serve para criar um novo objeto

```javascript
let name = new String('Thiago')
name.surName = "Carlos"
let age = new Number(33)
console.log(name.surName, age)

let date = new Date('2021-05-03')
console.log(date)
```

3. ​	**Typeof delete**

- ​	Operadores unários
  -  typeof - define o tipo de objeto.
  -  delete - procura uma propriedade dentro de um objeto e vai deletar aquela propriedade de dentro do objeto.

```javascript
console.log(typeof "Thiago")
const person = {
	name: 'Carlos',
	age: 33,
}
console.log(person)
delete person.age
console.log(person)
```

4. ​	**Operadores aritméticos**

```javascript
// multiplicação *
console.log(3 * 5)
console.log(3.21 * 5.5)
// divisão /
console.log(12 / 2)
// soma +
console.log(34 + 67)
// subtração -
console.log(34 - 23)
// resto da divisão %
let remainder
remainder = 11 % 9
console.log(remainder)
// incremento ++
let increment = 0
increment++
increment++
console.log(increment)
// descremento --
let decrement = 0
decrement--
console.log(decrement)
// exponencial **
console.log(3 ** 3)
```

5. ​	**Grouping operator**

```javascript
let total = 2 + 3 * 5
console.log(total)
let total2 = ((2 + 3) * 5)
console.log(total2)
```

6. ​	**Operadores de comparação igual a e diferente de**

- Operadores de comparação.
- Irá comparar valores e retornar um Boolean como resposta à comparação.

```javascript
let one = 1
let two = 2
// igual a ==
console.log( two == 1)
console.log( one == "1")
// diferente de !=
console.log(one != two)
console.log(one != 1)
console.log(one != "1")
```

7. ​	**Operadores de comparação estritamente igual e estritamente diferente**

- Operadores de comparação.
- Irá comparar não apenas os valores, mas também o tipo da variável e retornar um Boolean como resposta à comparação.

```javascript
let one = 1
let two = 2
// estritamente igual a ==
console.log( one === 1)
console.log( one === "1")
// estritamente diferente de !=
console.log(two !== "2")
console.log(two !== 2)
```

8. ​	**Operadores de comparação maior e menor(igual)**

- Operadores de comparação;
- Irá comparar não apenas os valores e retornar um Boolean como resposta à comparação.

```javascript
let one = 1
let two = 2
// > Maior que
console.log(one > two)
// >= Maior igual a 
console.log(one >= 1)
console.log(two >= 1)
// < Menor que
console.log(one < two)
// Menor igual a
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)
```

9. ​	**Operadores de atribuição**

```javascript
// Operadores de atribuição (Assignment)
let x
// assignment
x = 1
// addition assignment
//x = x + 2
x += 2
console.log(x)
// subtraction assignment
// x = x -1
x -= 1
console.log(x)
// multiplication assignment
// x = x * 2
x *= 2
console.log(x)
// division assignment
// x = x / 2
x /= 2
console.log(x)
// remainder, exponetiation
x %= 2
console.log(x)
x **= 2
console.log(x)
```

10. ​	**Operadores lógicos**

- Operadores lógicos (logial operators)
- 2 valores booleanos, quando verificados, resultará em verdadeiro ou falso.

```javascript
let pao = true
let queijo = true
// AND &&
console.log(pao && queijo)
// OR ||
console.log(pao || queijo)
// NOT !
console.log(!pao)
```

11. ​	**Operadores condicional ternário**

Operador Condicional (Ternário)

Dependendo da condição, nós recebemos valores diferentes

Condição então valor 1 se não valor 2

condition ? value1 : value2

Exemplos:

Café da manhã top

```javascript
let pao = false
let queijo = false
const niceBreakfast = pao && queijo ? "Café top" : "Café ruim"
console.log(niceBreakfast)
const niceBreakfast2 = pao || queijo ? "Café top" : "Café ruim"
console.log(niceBreakfast2)
// Maior 18
let age = 18
const canDrive = age >= 18 ? "Can Drive" : "Can't Drive"
console.log(canDrive)
```

12. ​	**Operadores para string**

```javascript
// Operador de String (String operator)
// comparison (comparação)
console.log ('a' == 'b')
// concatenation (concatenação)
// Retorna a união de duas Strings
let alpha = 'alpha'
alpha += 'bet'
console.log(alpha + 345)
```

13. ​	**Falsy e truthy**

```javascript
// Type conversion (typecastinh) vs Type coersion
console.log('9' + 5)
/*
FALSY
Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)
false
0
-0
""
null
undefined
NaN
*/
console.log(NaN ? "verdadeiro" : "falso")
/*
TRUTHY
Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)
true
{}
[]
1
3.23
"0"
"false"
-1
Infinity
-Infinity
*/
console.log("false" ? "verdadeiro" : "falso")
```

14. ​	**Procedência dos operadores**

```javascript
/* Operator precedence
Precedência de operadores

* grouping ( )
* negação e incremento ! ++ --
* multiplicação e divisão * /
* adição e subtração + -
* relacional < <= > >=
* igualdade == != === !==
* AND &&
* OR ||
* condicional ?:
* assignment (atribuição) = += -= *=
*/
console.log( 2 + 5 * 10)
console.log(( 2 + 5 ) * 10)
console.log( 3 > 2 > 1)
console.log( 3 > ( 2 > 1))
console.log( 3 > 2 && 2 > 1)

```

# **Condicionais e controle de fluxo**

1. **Controle de fluxo da aplicação**

Controle de fluxo, como realizar determinada operação voltando no fluxo da apliacação, através de comando pré-determinado.

Controle de erros.

```javascript
console.log("Controle de fluxo de aplicação")
// Control flow
console.log('a')
console.log('b')

//se estiver sujo
console.log('lavar o copo')
//se não estiver sujo
console.log('servir café')
```

2. **If e Else**

```javascript
// if ...else
let temperature = 36
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >=37
if (highTemperature){
	console.log('Febre alta')
} else if (mediumTemperature){
	console.log('Febre moderada')
} else {
	console.log('Saudável')
}
```

3. **Switch**

```javascript
// switch
let expression = '1'
switch (expression) {
	case 'a':
		console.log('a')
		break
	case 'b':
		console.log('b')
		break
	default:
		console.log('default')
		break
}
function calculate (number1, operator, number2){
let result = 0;
switch(operator){
	case '+':
		result = number1 + number2
		break
	case '-':
		result = number1 - number2
		break
	case '*':
		result = number1 * number2
		break
	case '/':
		result = number1 / number2
		break
	default:
		console.log('não implementado')
		break
}
	return result
}
console.log(calculate(4, '%', 8))
```

4. **Throw e try/Catch**

Ao executar uma função você pode disparar uma mensagem de erro no seu programa sem que ele pare de funcionar, usando o comando “**throw**”. Execute a função dentro do “**try**” para o programa tentar rodar, caso ele apresente o erro, o comando “**catch**” irá capturar o erro e seu programa continua sendo executado. Caso não seja realizado o try, catch e throw, se o seu programa apresentar um erro, irá parar por o programa.

```javascript
// throw - disparar, lançar
function sayMyName(name = ''){
	if(name ===''){
		throw new Error ("Nome é obrigatório")
	}
	console.log(name)
}
// try(tentar) .. catch(pegar/capturar)
try{
	sayMyName('')
} catch (e){
	console.log(e)
}
console.log('após o try/catch')
```

# **Estruturas de repetição**

1. **For**

```javascript
//Estrutura de repetição
// for
// break - para a execução do loop
// continue = pula a execução do momento

for(let i = 1; i <= 10; i++){
	console.log(i)
}
for(let i = 10; i > 0; i--){
	console.log(i)
}
for(let i = 1; i <= 10; i++){
	if(i === 5){
		break;
	}
	console.log(i)
}
for(let i = 1; i <= 10; i++){
	if(i === 5){
		continue;
	}
	console.log(i)
}
```

2. **While**

```javascript
//Estrutura de repetição
// while
// usado quando não sabemos o momento da parada de nossa aplicação.
let i = 0;
while(i < 10){
	console.log(i)
	i++;
}
let x = 49586394505
while(x >10){
	console.log(x)
	x /= 35
}
```

3. **For of**

```javascript
//Estrutura de repetição
// for ..of
let name = 'Thiago'
let names = ['Pedro', 'Thiago', 'João']
for (let char of name){
	console.log(char)
}
for (let name of names){
	console.log(name)
}
```

4. **For in**

```javascript
//Estrutura de repetição
// for...in
let person = {
	name: 'Thiago',
	age: 33,
	weight: 92.2,
}
for (let property in person){
	console.log(property)
	console.log(person[property])
}
```

# **Consolidando com exercícios**

1. **Praticar para aperfeiçoar**

Vamos fortalecer e aplicar os conhecimentos, além de aprender truques e dicas para resolver os desafios e avançar para o próximo nível.

2. **Sistema de notas escolares**

\Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C.

|     Valores     | Referência |
| :-------------: | :--------: |
| de 90 para cima |     A      |
|  entre 80 - 89  |     B      |
|  entre 70 - 79  |     C      |
|  entre 60 - 69  |     D      |
|  menor que 60   |     F      |

```javascript
function getNote(note){
let final_note;
let noteA = note >= 90 && note <= 100;
let noteB = note >=80 && note < 90;
let noteC = note >= 70 && note < 80;
let noteD = note >= 60 && note < 70;
let noteF = note < 60 && note >= 0;
    
    if (noteA){
        final_note = 'A'
    } else if (noteB){
        final_note = 'B'
    } else if (noteC){
        final_note = 'C'
    }else if (noteD){
        final_note = 'D'
    } else if (noteF){
        final_note = 'F'
    } else {
        final_note = 'Nota inválida'
    }
	
    return final_note

}

console.log('nota final: '+getNote(0))
console.log('nota final: '+getNote(59))
console.log('nota final: '+getNote(60))
console.log('nota final: '+getNote(69))
console.log('nota final: '+getNote(70))
console.log('nota final: '+getNote(75))
console.log('nota final: '+getNote(79))
console.log('nota final: '+getNote(80))
console.log('nota final: '+getNote(85))
console.log('nota final: '+getNote(89))
console.log('nota final: '+getNote(90))
console.log('nota final: '+getNote(95))
console.log('nota final: '+getNote(100))
console.log('nota final: '+getNote(101))
console.log('nota final: '+getNote(-1))
```

3. **Sistema de gastos familiar**

   Crie um objeto que possuiŕa 2 propiedades, ambas do tipo array:

   \* receitas: [ ]

   \* despesas: [ ]

   Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.

```javascript
let familyExpense1 = {
    income: [1000, 450],
    expense: [800, 150, 300]
}
let familyExpense2 = {
    income: [1000, 450],
    expense: [800, 150, 300, 200]
}
let familyExpense3 = {
    income: [1000, 450],
    expense: [800, 150, 300, 400]
}

function calculateBalance(object){
    let totalIncome = sum(object.income)
    let totalExpense = sum(object.expense)
	let finalBalance = balance(totalIncome, totalExpense)
    let status = score(finalBalance)
    
    function sum(values){
        let sum = 0
        for(value of values){
            sum += value
        }
    
    	return sum
	}

	function balance(income, expense){
	    let balance = income - expense

    	return balance
	}
	
    function score(value){
        let score = ``
        if(value == 0){
            score = `Caixa zerado`
        } else if(value > 0){
            score = `Saldo Positivo`
        } else {
            score= `Saldo negativo`
        }
        return score
    }
    
	console.log(`SALDO R$${finalBalance.toFixed(2)}`)
	console.log(`STATUS: ${status}`)
}
calculateBalance(familyExpense1)
calculateBalance(familyExpense2)
calculateBalance(familyExpense3)
```

4. ​	**Celsius to Fahrenheit**

Crie uma funçâo que receba uma string em celcius ou fahrenheit e faça a transformação de uma unidade para outra.

C = (F-32) * 5/9

F = C * 9/5 + 32

```javascript
function CelsiusToFahrenheit (string){
    
    let CelsiusFahrenheit = string.toUpperCase().includes("C") && string.toUpperCase().includes("F")
    let Celsius = string.toUpperCase().includes("C")
    let Fahrenheit = string.toUpperCase().includes("F")

    if(CelsiusFahrenheit || !CelsiusFahrenheit){
        console.log("[ERROR] VALOR INVÁLIDO!!!")
    } else if(Celsius){
        console.log("F = C * 9/5 + 32")
    } else if (Fahrenheit){
        console.log("C = (F-32) * 5/9")        
    }
}
```



5. 	**Buscando e encontrando dados em Array**

Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

- Contar o número de categorias e o número de livros em cada categoria
- Contar o número de autores
- Mostrar livros do autor Augusto Cury
- Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.

```javascript
const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L, Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do śeculo",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];
```

