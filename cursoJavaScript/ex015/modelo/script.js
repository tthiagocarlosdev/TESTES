function carregar(){
    var resposta = document.querySelector('div#resposta');
    var anoNascimento = document.querySelector('input#anoNascimento')
    anoNascimento = Number(anoNascimento.value)
    var agora = new Date()
    var anoAtual = agora.getUTCFullYear()
    var idade = anoAtual - anoNascimento
    
    resposta.innerHTML =`Detectamos xxx com ${idade} anos`
}
