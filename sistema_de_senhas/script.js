let senhasData = {};
const janelaDialog = document.getElementById("modal");
const datalist = document.getElementById('opcoes_de_sistemas')

function escolherArquivo() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (file) {
        loadJSON(file);
    } else {
        alert("Por favor, selecione um arquivo JSON.");
    }
}

function loadJSON(file) {
    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            senhasData = JSON.parse(event.target.result);
            alert("Arquivo JSON carregado com sucesso!");
            // console.log(senhasData);
            listaSistemas(senhasData.senhas);
            closeModal();
        } catch (error) {
            alert("Erro ao carregar o arquivo JSON.");
            console.error(error);
        }
    };
    reader.readAsText(file);
}


// Função para fechar modal
function closeModal() {
    janelaDialog.close();
};

// Função para abrir modal
function abrirModal(){
    janelaDialog.showModal();
};

// Abre o modal quando a página é carregada
document.addEventListener('DOMContentLoaded', (event) => {
    abrirModal()
});


function listaSistemas(lista){
    // console.log(lista)
    // Verifica se lista.senhas é uma matriz
    if (Array.isArray(lista)) {
        // Itera sobre a lista de sistemas
        lista.forEach(sistema => {
            // Cria um elemento de opção para cada sistema
            const option = document.createElement('option');
            option.value = sistema.nomeDoSistema;
            datalist.appendChild(option);
        });
    } else {
        console.error("A lista de sistemas não é uma matriz.");
    }
}


// Função para buscar o sistema
function buscarSistema() {
    if (!senhasData) {
        alert("Por favor, carregue um arquivo JSON primeiro.");
        return;
    }

    const nomeDoSistema = document.getElementById('nome_do_sistema').value.trim().toLowerCase();
    if (!nomeDoSistema) {
        alert("Por favor, informe o nome do sistema.");
        return;
    }

    // Procurar pelo sistema na lista de senhas
    const sistema = senhasData.senhas.find(s => s.nomeDoSistema.toLowerCase() === nomeDoSistema);

    if (!sistema) {
        alert("Sistema não encontrado.");
        return;
    }

    // Atualizar a UI com as informações do sistema
    document.getElementById('linkSistema').href = sistema.endereco;
    document.getElementById('linkSistema').textContent = sistema.nomeDoSistema;
    document.getElementById('login').textContent = sistema.login;
    document.getElementById('senha').textContent = sistema.senha;

     // Remover botões "Copiar" existentes antes de adicionar novos
     removerBotoesCopiar();
    adicionarBotaoCopiar('box_login_sistema', 'login');
    adicionarBotaoCopiar('box_senha_sistema', 'senha');
}

// Função para remover todos os botões "Copiar" existentes
function removerBotoesCopiar() {
    const existingCopyButtons = document.querySelectorAll('.botao_copiar');
    existingCopyButtons.forEach(button => button.remove());
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


// Função para adicionar o botão "Copiar" após o elemento <p> em uma div específica
function adicionarBotaoCopiar(nomeDaDiv, idDoSpan) {
    // Obter o elemento <p> dentro da div especificada
    const paragraphElement = document.querySelector(`#${nomeDaDiv} p`);

    // Criar o botão "Copiar"
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copiar ';

    // Adicionar a classe ao botão
    copyButton.classList.add('botao_copiar');
    copyButton.classList.add('button');

    // Adicionar evento de clique ao botão "Copiar"
    copyButton.addEventListener('click', function() {
        // Copiar o texto do span para a área de transferência
        copiarDados(document.getElementById(idDoSpan));
    });

    // Adicionar o botão "Copiar" após o elemento <p>
    paragraphElement.insertAdjacentElement('afterend', copyButton);
}

