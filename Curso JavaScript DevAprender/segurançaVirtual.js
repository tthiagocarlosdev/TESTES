function verificar(){
    let nome = (document.querySelector('input#nome')).value
    let respostaFinal = (document.querySelector('p#respostaFinal'))
    let listaDeNomes = ['THIAGO', 'CARLOS', 'JOÃO', 'ANTÔNIO']
    listaDeNomes.includes(nome.toUpperCase()) === true ? respostaFinal.innerHTML = `Você pode entrar!` : respostaFinal.innerHTML = `Você <strong>não</strong> pode entrar!`
}