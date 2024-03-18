// Adicionar evento de carregamento à página
window.addEventListener('DOMContentLoaded', () => {
    // Exibir as informações da primeira unidade
    displayFirstUnit();
    // Exibir o mapa da primeira unidade ao carregar a página
    displayMap();
});

// Função para exibir as informações da primeira unidade
function displayFirstUnit() {
    if (unidadesPoliciais.length > 0) {
        const firstUnit = unidadesPoliciais[0];
        addressDisplay.textContent = firstUnit.enderecoDaUnidade;
        document.getElementById('nome_da_unidade').textContent = firstUnit.nomeDaUnidade; // Exibe o nome da primeira unidade
        if (firstUnit.telefoneDaUnidade.length > 0) {
            // telefoneDisplay.innerHTML = "<span>Telefones:</span>";
            // Iterar sobre os telefones e adicioná-los à exibição com botão de cópia
            firstUnit.telefoneDaUnidade.forEach(telefone => {
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
        } else {
            telefoneDisplay.textContent = "Telefone não encontrado";
        }
        
    } else {
        addressDisplay.textContent = "Nenhuma unidade encontrada";
        telefoneDisplay.textContent = "Nenhuma unidade encontrada";
    }
}



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
            // telefoneDisplay.innerHTML = "<span></span>";
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
    const selectedUnit = unidadesPoliciais[0]; // Pegar a primeira unidade
    if (selectedUnit && selectedUnit.coordenadasDaUnidade) {
        const latitude = selectedUnit.coordenadasDaUnidade.latitude;
        const longitude = selectedUnit.coordenadasDaUnidade.longitude;
        const mapUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d678.7986346482409!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1710509079163!5m2!1spt-BR!2sbr`;
        mapFrame.src = mapUrl;
    } else {
        mapFrame.src = '';
    }
}

// Função para exibir o nome da unidade selecionada
function displayUnitName() {
    const selectedUnit = unidadesPoliciais.find(unit => unit.nomeDaUnidade === searchInput.value);
    if (selectedUnit) {
        document.getElementById('nome_da_unidade').textContent = selectedUnit.nomeDaUnidade;
    }
}

// Adicionando evento de clique ao botão mostrar endereço
showAddressButton.addEventListener('click', function(event) {
    event.preventDefault();
    // displayAddress();
    displayMap();
    // displayUnitName(); // Adiciona o nome da unidade ao clicar no botão
    
    const informacoesUnidade = obterInformacoesUnidadeSelecionada();

    // Verificar se as informações da unidade foram retornadas
    if (informacoesUnidade) {
       
        // Se sim, exibir as informações no console
        console.log(informacoesUnidade);

         // Carregar o nome da unidade
        carregarNomeDaUnidade(informacoesUnidade);
        // Carregar o endereço da unidade
        carregarEnderecoDaUnidade(informacoesUnidade);

    } else {
        // Se não, exibir a mensagem no console
        console.log("Unidade não encontrada")
    }
});

// Função para retornar as informações da unidade selecionada ou "Unidade não encontrada" caso não seja encontrada
function obterInformacoesUnidadeSelecionada() {
    // Obter o nome da unidade selecionada
    const nomeUnidadeSelecionada = document.getElementById('search-input').value;

    // Localizar o objeto da unidade selecionada
    const unidadeSelecionada = unidadesPoliciais.find(unidade => unidade.nomeDaUnidade === nomeUnidadeSelecionada);

    // Verificar se a unidade foi encontrada
    if (unidadeSelecionada) {
        // Criar um novo objeto com as informações da unidade selecionada
        const informacoesUnidadeSelecionada = {
            nomeDaUnidade: unidadeSelecionada.nomeDaUnidade,
            enderecoDaUnidade: unidadeSelecionada.enderecoDaUnidade,
            telefoneDaUnidade: unidadeSelecionada.telefoneDaUnidade,
            coordenadasDaUnidade: unidadeSelecionada.coordenadasDaUnidade
        };

        // Retornar as informações da unidade selecionada
        return informacoesUnidadeSelecionada;
    } else {
        // Se a unidade não for encontrada, imprimir a mensagem no console
        console.log('Unidade não encontrada');
        // Retornar null para indicar que a unidade não foi encontrada
        return null;
    }
}

// Função para carregar o nome da unidade no elemento span
function carregarNomeDaUnidade(informacoesUnidade) {
    // Obter o elemento span com o ID "nome_da_unidade"
    const spanNomeUnidade = document.getElementById('nome_da_unidade');

    // Verificar se as informações da unidade foram fornecidas
    if (informacoesUnidade) {
        // Atualizar o conteúdo do span com o nome da unidade
        spanNomeUnidade.textContent = informacoesUnidade.nomeDaUnidade;
    } else {
        // Se as informações da unidade não foram fornecidas, limpar o conteúdo do span
        spanNomeUnidade.textContent = '';
    }
}

// Função para carregar o endereço da unidade no elemento span
function carregarEnderecoDaUnidade(informacoesUnidade) {
    // Obter o elemento span com o ID "endereco_da_unidade"
    const spanEnderecoUnidade = document.getElementById('endereco_da_unidade');

    // Verificar se as informações da unidade foram fornecidas
    if (informacoesUnidade) {
        // Atualizar o conteúdo do span com o endereço da unidade
        spanEnderecoUnidade.textContent = informacoesUnidade.enderecoDaUnidade;
    } else {
        // Se as informações da unidade não foram fornecidas, limpar o conteúdo do span
        spanEnderecoUnidade.textContent = '';
    }
}













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

