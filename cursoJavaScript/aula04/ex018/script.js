
function contar(){
    function contador(){
        resposta.innerHTML = `<p>Contando....\u{1F914}</p>`
        if(inicio < fim){
            for(let contador = inicio; contador <= fim; contador += passo){
                resposta.innerHTML += `${contador} \u{1F449} `
            }
        } else if (inicio > fim){
            for (let contador = inicio; contador >= fim; contador -= passo){
                resposta.innerHTML += `${contador} \u{1F449} `
            }
        }
        resposta.innerHTML += `\u{1F3C1}`
    }

    var resposta = document.querySelector('div#resposta')
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resposta.innerHTML = `[ERROR] Impossível contar!`
    } else {
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)
        if(passo <= 0){
            passo = 1
            alert('Passo inválido! Considerando passo 1')
            contador()
        } else {
            contador()
        }
    }   
}