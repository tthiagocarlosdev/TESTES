// Importando a lista de unidades
import { unidadesPoliciais } from './unidades.js';

// Obtendo referências aos elementos do DOM
const datalist = document.getElementById('options-list'); // Preencher o datalist com as opções de unidades
const botaoCarregar = document.getElementById('botao_carregar');

// Iterar sobre a matriz de unidades e adicionar cada nome de unidade ao datalist
unidadesPoliciais.forEach(unidade => {
    const option = document.createElement('option');
    option.value = unidade.nomeDaUnidade;
    datalist.appendChild(option);
});

// Adicionando evento de clique ao botão carregar
botaoCarregar.addEventListener('click', function(event) {
    event.preventDefault();
    
    // Chamar a função para carregar as informações da unidade
    carregarInformacoesUnidade();
});

// Função para carregar as informações da unidade ao ser clicado o botão ou ao carregar a página
function carregarInformacoesUnidade() {
    // Obter as informações da unidade selecionada
    const informacoesUnidade = obterInformacoesUnidadeSelecionada();

    // Verificar se as informações da unidade foram retornadas
    if (informacoesUnidade) {
        // Se sim, exibir as informações no console
        console.log(informacoesUnidade);

        // Carregar o nome da unidade
        carregarNomeDaUnidade(informacoesUnidade);
        // Carregar o endereço da unidade
        carregarEnderecoDaUnidade(informacoesUnidade);
        // Carregar os telefones da unidade
        carregarTelefoneDaUnidade(informacoesUnidade);
        // Carregar as coordenadas da unidade
        carregarCoordenadasDaUnidade(informacoesUnidade);
        // Carregar o mapa da unidade
        carregarMapaDaUnidade(informacoesUnidade);

        // Adicionar o botão "Copiar"
        adicionarBotaoCopiar();
    } else {
        // Se não, exibir a mensagem no console
        console.log("Unidade não encontrada")
    }
}


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


// Função para carregar os telefones da unidade no elemento span
function carregarTelefoneDaUnidade(informacoesUnidade) {
    // Obter o elemento span com o ID "telefones_da_unidade"
    const spanTelefonesUnidade = document.getElementById('telefones_da_unidade');

    // Verificar se as informações da unidade foram fornecidas e se os telefones estão disponíveis
    if (informacoesUnidade && informacoesUnidade.telefoneDaUnidade && informacoesUnidade.telefoneDaUnidade.length > 0) {
        // Limpar o conteúdo atual do span
        spanTelefonesUnidade.innerHTML = '';

        // Criar uma lista não ordenada para os telefones
        const listaTelefones = document.createElement('ul');

        // Iterar sobre os telefones da unidade
        informacoesUnidade.telefoneDaUnidade.forEach(telefone => {
            // Criar um item de lista para cada telefone
            const itemLista = document.createElement('li');
            itemLista.textContent = telefone;
            listaTelefones.appendChild(itemLista);
        });

        // Adicionar a lista de telefones ao span
        spanTelefonesUnidade.appendChild(listaTelefones);
    } else {
        // Se as informações da unidade ou os telefones não estiverem disponíveis, limpar o conteúdo do span
        spanTelefonesUnidade.textContent = '';
    }
}


// Função para carregar as coordenadas da unidade no elemento span
function carregarCoordenadasDaUnidade(informacoesUnidade) {
    // Obter o elemento span com o ID "latitude_longitude_da_unidade"
    const spanCoordenadas = document.getElementById('latitude_longitude_da_unidade');

    // Verificar se as informações da unidade foram fornecidas e se as coordenadas estão disponíveis
    if (informacoesUnidade && informacoesUnidade.coordenadasDaUnidade && informacoesUnidade.coordenadasDaUnidade.latitude && informacoesUnidade.coordenadasDaUnidade.longitude) {
        // Obter as coordenadas da unidade
        const latitude = informacoesUnidade.coordenadasDaUnidade.latitude;
        const longitude = informacoesUnidade.coordenadasDaUnidade.longitude;

        // Atualizar o conteúdo do span com as coordenadas da unidade no formato "latitude,longitude"
        spanCoordenadas.textContent = `${latitude},${longitude}`;
    } else {
        // Se as informações da unidade ou as coordenadas não estiverem disponíveis, limpar o conteúdo do span
        spanCoordenadas.textContent = 'Coordenadas não disponíveis';
    }
}


// Função para carregar o mapa da unidade no elemento iframe
function carregarMapaDaUnidade(informacoesUnidade) {
    // Obter o elemento iframe com o ID "map-frame"
    const iframeMapa = document.getElementById('map-frame');

    // Verificar se as informações da unidade foram fornecidas e se as coordenadas estão disponíveis
    if (informacoesUnidade && informacoesUnidade.coordenadasDaUnidade && informacoesUnidade.coordenadasDaUnidade.latitude && informacoesUnidade.coordenadasDaUnidade.longitude) {
        // Construir a URL do mapa com as coordenadas fornecidas
        const latitude = informacoesUnidade.coordenadasDaUnidade.latitude;
        const longitude = informacoesUnidade.coordenadasDaUnidade.longitude;
        const mapUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d678.7986346482409!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1710509079163!5m2!1spt-BR!2sbr`;
        // Atualizar o atributo "src" do iframe com a URL do mapa
        iframeMapa.src = mapUrl;
    } else {
        // Se as informações da unidade ou as coordenadas não estiverem disponíveis, limpar o atributo "src" do iframe
        iframeMapa.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4058240.75215817!2d-39.50934462849578!3d-6.6313021556049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7007c9d931c86c5%3A0x1de0196a93401726!2sPernambuco!5e0!3m2!1spt-BR!2sbr!4v1710516559473!5m2!1spt-BR!2sbr`;
    }
}


// Função para adicionar o botão "Copiar" após o elemento <p>
function adicionarBotaoCopiar() {
    // Obter o elemento <p> dentro da div box_unidade_policial
    const paragraphElement = document.querySelector('.box_unidade_policial p');

    // Criar o botão "Copiar"
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copiar ';

    // Criar o ícone
    const iconElement = document.createElement('i');
    iconElement.classList.add('fa', 'fa-regular', 'fa-copy');

    // Adicionar o ícone como filho do botão
    copyButton.appendChild(iconElement);

    // Adicionar evento de clique ao botão "Copiar"
    copyButton.addEventListener('click', function() {
        // Copiar o nome da unidade para a área de transferência
        copiarDados(document.getElementById('nome_da_unidade'));
    });

    // Adicionar o botão "Copiar" após o elemento <p>
    paragraphElement.insertAdjacentElement('afterend', copyButton);
}

//Função para copiar o texto para a área de transferência
function copiarDados(element) {
    const text = element.textContent.trim();
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert(`${text} copiado para a área de transferência.`);
}

