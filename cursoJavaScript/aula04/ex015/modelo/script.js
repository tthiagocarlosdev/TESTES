function verificar(){
    var resposta = document.querySelector('div#resposta');
    var anoNascimento = document.querySelector('input#anoNascimento')
    var agora = new Date()
    var anoAtual = agora.getUTCFullYear()
    if (anoNascimento.value.length == 0 || Number(anoNascimento.value) > anoAtual){
        alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        anoNascimento = Number(anoNascimento.value)
        var idade = anoAtual - anoNascimento
        var sexo = document.getElementsByName('radioSexo')
        var genero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            if(idade < 12){
                imagem.setAttribute('src', '../imagens/criançaHomem.png')
            } else if (idade < 21){
                imagem.setAttribute('src', '../imagens/jovemHomem.png')
            } else if (idade < 55) {
                imagem.setAttribute('src', '../imagens/adultoHomem.png')
            } else {
                imagem.setAttribute('src', '../imagens/idosoHomem.png')
            }
        } else if (sexo[1].checked){
            genero = 'Mulher'
            if(idade < 12){
                imagem.setAttribute('src', '../imagens/criançaMulher.png')
            } else if (idade < 21){
                imagem.setAttribute('src', '../imagens/jovemMulher.png')
            } else if (idade < 55) {
                imagem.setAttribute('src', '../imagens/adultoMulher.png')
            } else {
                imagem.setAttribute('src', '../imagens/idosoMulher.png')
            }
        }
        resposta.innerHTML =`<p>Detectamos ${genero} com ${idade} anos</p>`
        resposta.appendChild(imagem)
    }
    
}
