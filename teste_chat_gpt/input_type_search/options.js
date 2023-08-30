import { options } from './unidades_policiais.js';

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    checkInputs();
});

function loadOptions() {
    const optionsList = document.getElementById('options-list');

    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionsList.appendChild(optionElement);
    });
}

function checkInputs() {
    const unidadePolicial = document.getElementById('unidade-policial');
    const searchInput = document.getElementById('search-input');

    unidadePolicial.innerHTML = `${searchInput.value}`;
}

loadOptions(); // Chama a função para carregar as opções quando a página carrega
