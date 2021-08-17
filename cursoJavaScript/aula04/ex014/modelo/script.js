function carregar() {
    var agora = new Date()
    var hora = agora.getHours()
    var minuto = agora.getMinutes()
    var horaAtual = document.querySelector('div#horaAtual')
    var imagem = document.querySelector('img#imagem')
    horaAtual.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if (hora < 12){
        imagem.src = '../imagens/morning.png'
        document.body.style.background = '#FBC400'
    } else if (hora < 18) {
        imagem.src = '../imagens/afternoon.png'
        document.body.style.background = '#0E8AFF'
    } else { 
        imagem.src = '../imagens/night.png'
        document.body.style.background = '#014E96'
    }
}
