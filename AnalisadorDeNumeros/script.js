let numero = document.querySelector('input#inserirNumero')
let mostrarSelect = document.querySelector('select#mostrarSelect')
let resultadoFinal = document.querySelector('div#resultadoFinal')
let lista = []

function ehNumero(valor){
    if(Number(valor) >= 1 && Number(valor) <= 100){
        return true
    } else {
        return false
    }
}

function naLista(valor, lista){
    if(lista.indexOf(Number(valor)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(ehNumero(numero.value) && !naLista(numero.value, lista)){
        lista.push(Number(numero.value))
        let item = document.createElement('option')
        item.text += `Valor ${Number(numero.value)} adicionado`
        mostrarSelect.appendChild(item)
        resultadoFinal.innerHTML = ``
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    numero.value = ''
    numero.focus()
}

function finalizar(){
    let totalNumeros = lista.length
    lista.sort()
    let maiorNumero = lista[totalNumeros - 1]
    let menorNumero = lista[0]
    let somaValores = 0
    let mediaValores = 0
    for (let contador in lista) {
        somaValores += lista[contador]
    }
    mediaValores = somaValores / totalNumeros
    resultadoFinal.innerHTML += `<p>Minha lista: ${lista} </p>`
    resultadoFinal.innerHTML += `<p>Ao todo, temos ${totalNumeros} cadastrados.</p>`
    resultadoFinal.innerHTML += `<p>O maior valor informado foi ${maiorNumero} </p>`
    resultadoFinal.innerHTML += `<p>O menor valor informado foi ${menorNumero} </p>`
    resultadoFinal.innerHTML += `<p>Somando todos os valores, temos ${somaValores} </p>`
    resultadoFinal.innerHTML += `<p>A média dos valores digitados é ${mediaValores} </p>`
}