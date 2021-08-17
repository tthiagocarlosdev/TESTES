function gerarTabuada(){
    var numero = document.querySelector('input#numero')
    var tabuada = document.querySelector('select#tabuada')
    if(numero.value.length == 0){
        alert('Por favor, digite um número!')
    } else {
        numero = Number(numero.value)
        tabuada.innerHTML = ``
        var contador = 1
        do {
            let item = document.createElement('option')
            item.text = `${numero} x ${contador} = ${numero * contador}`
            tabuada.appendChild(item)
            contador++
        } while (contador <= 10);
    }
}