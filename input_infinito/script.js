let technical = {
    names:[],
    enrollment:[],
}

const searchInput = document.getElementById('searchInput');
const unidadePolicial = document.getElementById('unidadePolicial');
const options = Array.from(unidadePolicial.options);

searchInput.addEventListener('input', function() {
const searchTerm = searchInput.value.toLowerCase();
const filteredOptions = options.filter(option => option.text.toLowerCase().includes(searchTerm));

// Verifica se o campo de pesquisa está vazio
if (searchTerm === '') {
    unidadePolicial.innerHTML = ''; // Limpa as opções do select
    
    // Adiciona a primeira opção novamente
    unidadePolicial.appendChild(options[0].cloneNode(true));
} else {
    unidadePolicial.innerHTML = ''; // Limpa as opções do select
    
    // Adiciona as opções filtradas
    filteredOptions.forEach(option => unidadePolicial.appendChild(option));
}
});


function adicionar(){
    let name = document.querySelector('#name').value;
    let registration = document.querySelector('#registration').value;
    let lista = document.querySelector('#lista')

    if(name == technical.names || registration == technical.enrollment){
        alert('Usuário cadastrado')
    } else {
        technical.names.push(name);
        technical.enrollment.push(registration);
    }

    let content = '';
    for (let i = 0; i < technical.names.length; i++) {
        content += `Nome: ${technical.names[i]}, Matrícula: ${technical.enrollment[i]}.<br>`;
        lista.innerHTML = content;
    }
<<<<<<< HEAD

    console.log(technical)
}

function listaFinal(){
    let lista_final = document.querySelector('#lista_final')
    let content = '';
    for (let i = 0; i < technical.names.length; i++) {
        content += `Nome: ${technical.names[i]}, Matrícula: ${technical.enrollment[i]}.<br>`;
        lista_final.innerHTML = content;
    }
=======
>>>>>>> e89187529b5f70c26de81cda870882e243deeadf
}