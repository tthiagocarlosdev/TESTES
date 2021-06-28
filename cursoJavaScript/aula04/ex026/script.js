function adiconar(){
    var numeroTexto = document.querySelector('input#numeroTexto')
    var resposta = document.querySelector('div#resposta')
    var numerosSelect = document.querySelector('select#opcaoDeNumeros')
    var arrayNumeros = []
    function ehNumero(valor){
        if(valor.value.length == 0 || Number(valor.value) < 1 || Number(valor.value) > 100){
            return true
        }
    }
    function naLista(valor){
        arrayNumeros.push(Number(valor.value))
        let lista = arrayNumeros.indexOf(Number(valor.value))
        if (lista == -1){
            return true
        }
    }

    if (ehNumero(numeroTexto) && !naLista(numeroTexto)){
        alert('Valor inválido ou já encontrado na lista')
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${Number(numeroTexto.value)} adicionado.`
        numerosSelect.appendChild(item)

        arrayNumeros.push(Number(numeroTexto.value))
        for (contador in arrayNumeros){
            resposta.innerHTML += `${arrayNumeros} - `
        }
    }
    
    

    
    
}