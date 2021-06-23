function contar(){
    var resposta = document.querySelector('div#resposta')
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resposta.innerHTML = `[ERROR] Impossível contar!`
    } else {
        if(Number(passo.value) == 0){
            passo = 1
            alert('Passo inválido! Considerando passo 1')
        }
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)
        resposta.innerHTML = `<p>Contando....</p>`
        if(inicio < fim){
            for(let contador = inicio; contador <= fim; contador += passo){
                resposta.innerHTML += `${contador} -> `
            }
        } else if (inicio > fim){
            for (let contador = inicio; contador >= fim; contador -= passo){
                resposta.innerHTML += `${contador} -> `
            }

        }
        resposta.innerHTML += `FIM`
        
    }
    
}