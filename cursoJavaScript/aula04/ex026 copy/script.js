var numeroTexto = document.querySelector('input#numeroTexto')
var resposta = document.querySelector('div#resposta')
var numerosSelect = document.querySelector('select#opcaoDeNumeros')
var arrayNumeros = []

function ehNumero(valor){
    if(valor < 1 || valor > 100){
        return true
    } else {
        return false
    }
}

function naLista(valor, lista){
    if (lista.includes(valor) == true){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (ehNumero(Number(numeroTexto.value)) || naLista(Number(numeroTexto.value), arrayNumeros)){
        alert('Valor inválido ou já encontrado na lista')
    } else {
        resposta.innerHTML = ``
        let item = document.createElement('option')
        item.text = `Valor ${Number(numeroTexto.value)} adicionado.`
        numerosSelect.appendChild(item)
        arrayNumeros.push(Number(numeroTexto.value))
    }
    numeroTexto.value = ''
    numeroTexto.focus()
}

function finalizar(){
    if(arrayNumeros.length == 0){
        alert('Adicione valores antes de finalizar!')
    } else {
        let tamanho = arrayNumeros.length
        let x = arrayNumeros.sort()
        let maiorNumero = 0
        let menorNumero = arrayNumeros[0]
        let somaValores = 0
        let mediaValores = 0
        for (contador in arrayNumeros){
            if(arrayNumeros[contador] > maiorNumero){
                maiorNumero = arrayNumeros[contador]
            }
            if(arrayNumeros[contador] < menorNumero){
                menorNumero = arrayNumeros[contador]
            }
            somaValores += arrayNumeros[contador]
        }
        mediaValores = somaValores / tamanho

        resposta.innerHTML += `<p>Ao todo, temos ${tamanho} números cadastrados.</p>`
        resposta.innerHTML += `</p>O maior valor informado foi ${maiorNumero}.</p>`
        resposta.innerHTML += `</p>O menor valor informado foi ${menorNumero}.</p>`
        resposta.innerHTML += `</p>Somando todos os valores, temos ${somaValores}.</p>`
        resposta.innerHTML += `</p>A média dos valores digitados é ${mediaValores}.</p>`
    }
}
/*

*/