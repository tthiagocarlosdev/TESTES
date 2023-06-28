window.onload = function() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var dados_str = urlParams.get('pageData');
    var dados = JSON.parse(decodeURIComponent(dados_str));
    console.log(dados)
    // document.getElementById('nome').innerHTML = dados.serviceLocation;
    // document.getElementById('idade').innerHTML = dados.idade;
}