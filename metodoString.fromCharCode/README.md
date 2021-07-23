# String.fromCharCode() :desktop_computer:  :keyboard: :computer_mouse:

O método **`String.fromCharCode()`** retorna uma string criada ao usar uma sequência específica de valores Unicode.

## [Sintaxe](https://developer.mozilla.org/pt-BR/docs/orphaned/Web/JavaScript/Reference/Global_Objects/String/fromCharCode#sintaxe)

```
String.fromCharCode(num1[, ...[, numN]])
```

### [Parâmetros](https://developer.mozilla.org/pt-BR/docs/orphaned/Web/JavaScript/Reference/Global_Objects/String/fromCharCode#parâmetros)

- `num1, ..., num*N*`

  Uma sequência de números que devem ser valores UTF-16. O tamanho é entre `0` e `65535` (`0xFFFF`). Números maiores do que `0xFFFF` são desconsiderados. Nenhuma verificação de vadalida é realizada.

### [Valor retornado](https://developer.mozilla.org/pt-BR/docs/orphaned/Web/JavaScript/Reference/Global_Objects/String/fromCharCode#valor_retornado)

Uma string contendo os caracteres correspondentes à sequência de valores Unicode.

## [Descrição](https://developer.mozilla.org/pt-BR/docs/orphaned/Web/JavaScript/Reference/Global_Objects/String/fromCharCode#descrição)

Esse método retorna uma string e não um objeto [`String`](https://developer.mozilla.org/pt-BR/docs/orphaned/Web/JavaScript/Reference/Global_Objects/String).

Como `fromCharCode() `é um método estático de [`String`](https://developer.mozilla.org/pt-BR/docs/orphaned/Web/JavaScript/Reference/Global_Objects/String), você sempre o usará como `String.fromCharCode()`, ao invés de um método de um objeto [`String`](https://developer.mozilla.org/pt-BR/docs/orphaned/Web/JavaScript/Reference/Global_Objects/String) que você tenha criado.

## [Exemplos](https://developer.mozilla.org/pt-BR/docs/orphaned/Web/JavaScript/Reference/Global_Objects/String/fromCharCode#exemplos)

### [Usando `fromCharCode()`](https://developer.mozilla.org/pt-BR/docs/orphaned/Web/JavaScript/Reference/Global_Objects/String/fromCharCode#usando_fromcharcode)

O seguinte exemplo retorna a string "ABC".

```
String.fromCharCode(65, 66, 67);  // retorna "ABC"
```

