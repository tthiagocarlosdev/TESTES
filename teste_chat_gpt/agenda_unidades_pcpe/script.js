// Importando a lista de unidades
import { unidadesPoliciais } from './unidades.js';

// Obtendo referências aos elementos do DOM
const datalist = document.getElementById('options-list'); // Preencher o datalist com as opções de unidades
const searchInput = document.getElementById('search-input');
const showAddressButton = document.getElementById('show-address-button');

const addressDisplay = document.getElementById('address-display');
const telefoneDisplay = document.getElementById('telefone-display');
const mapFrame = document.getElementById('map-frame');

const copyAddressButton = document.getElementById('copy-address-button');
// const copyTelefoneButton = document.getElementById('copy-telefone-button');



// Iterar sobre a matriz de unidades e adicionar cada nome de unidade ao datalist
unidadesPoliciais.forEach(unidade => {
    const option = document.createElement('option');
    option.value = unidade.nomeDaUnidade;
    datalist.appendChild(option);
});



//Função para exibir o endereço da unidade selecionada
function displayAddress() {
    const selectedUnit = unidadesPoliciais.find(unit => unit.nomeDaUnidade === searchInput.value);
    if (selectedUnit) {
        addressDisplay.innerHTML = `<span>${selectedUnit.enderecoDaUnidade}</span>`;
        
        if (selectedUnit.telefoneDaUnidade.length > 0) {
            telefoneDisplay.innerHTML = "<span>Telefones:</span>";
            // Itera sobre os telefones e os adiciona à exibição com botão de cópia
            selectedUnit.telefoneDaUnidade.forEach(telefone => {
                const telefoneElement = document.createElement('div');
                const telefoneSpan = document.createElement('span');
                const copyButton = document.createElement('button');
                telefoneSpan.textContent = telefone;
                copyButton.textContent = 'Copiar';
                copyButton.addEventListener('click', () => copiaTelefone(telefone));
                telefoneElement.appendChild(telefoneSpan);
                telefoneElement.appendChild(copyButton);
                telefoneDisplay.appendChild(telefoneElement);
            });

            // Adicionando botão para copiar todos os telefones
            const copyAllTelefonesButton = document.createElement('button');
            copyAllTelefonesButton.textContent = 'Copiar Todos';
            telefoneDisplay.appendChild(copyAllTelefonesButton);

            copyAllTelefonesButton.addEventListener('click', function() {
                let allTelefones = '';
                telefoneDisplay.querySelectorAll('span').forEach(span => {
                    allTelefones += span.textContent + '\n';
                });
                copiaTelefone(allTelefones);
            });

        } else {
            telefoneDisplay.textContent = "Telefone não encontrado";
        }
        
    } else {
        addressDisplay.textContent = "Endereço não encontrado";
        telefoneDisplay.textContent = "Telefone não encontrado";
    }
}


// Função para exibir o mapa do Google com base nas coordenadas da unidade selecionada
function displayMap() {
    const selectedUnitName = searchInput.value;
    const selectedUnit = unidadesPoliciais.find(unit => unit.nomeDaUnidade === selectedUnitName);
    if (selectedUnit && selectedUnit.coordenadasDaUnidade) {
        const latitude = selectedUnit.coordenadasDaUnidade.latitude;
        const longitude = selectedUnit.coordenadasDaUnidade.longitude;
        const mapUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d678.7986346482409!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1710509079163!5m2!1spt-BR!2sbr`;
        mapFrame.src = mapUrl;
    } else {
        mapFrame.src = '';
    }
}



// Adicionando evento de clique ao botão mostrar endereço
showAddressButton.addEventListener('click', function(event) {
    event.preventDefault();
    displayAddress();
    displayMap();
});


copyAddressButton.addEventListener('click', copyToClipboard.bind(null, addressDisplay));

function copyToClipboard(element) {
    const text = element.textContent.trim();
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert(`${text} copiado para a área de transferência.`);
}


//Função para copiar o texto para a área de transferência
function copiaTelefone(text) {
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert(`${text} copiado para a área de transferência.`);
}
