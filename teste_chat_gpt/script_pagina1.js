function carregar() {
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    if (nome == "" || idade == "") {
        alert("Por favor, preencha todos os campos!");
    } else {
        var dados = {
            nome: nome,
            idade: idade
        };
        var dados_str = JSON.stringify(dados);
        window.location.href = "outra_pagina.html?dados=" + encodeURIComponent(dados_str);
    }
}