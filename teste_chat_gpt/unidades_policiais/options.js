form.addEventListener('submit', (event) => {
    event.preventDefault();
    checkInputs()
  })

const options = [
    "GABPCPE - GABINETE DO CHEFE DE POLÍCIA",
    "SUBCP/GABPCPE - SUBCHEFIA DE POLÍCIA",
    "SEGAB/GABPCPE - SECRETARIA DO GABINETE",
    "ASSCOM/SUBCP - ASSESSORIA DE COMUNICAÇÃO SOCIAL",
    "UNICEV/SUBPC - UNIDADE DE PLANEJAMENTO E COORDENAÇÃO DE EVENTOS",
    "UCI/SUBCP - UNIDADE DE CONTROLE INTERNO DA SUB",
    "DIVCAC/UCI/SUBCP - DIVISÃO DE CONTROLADORIA E AUDITORIA EM CONTRATOS",
    "UNAJUR/SUBCP - UNIDADE DE APOIO JURÍDICO",
    "UNESTAC/SUBCP - UNIDADE DE ESTATÍSTICA CRIMINAL",
    "COORDPPOL/SUBCP - COORDENAÇÃO DOS PROCEDIMENTOS POLICIAIS"
];

function loadOptions() {
    const optionsList = document.getElementById('options-list');

    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionsList.appendChild(optionElement);
    });
}



  function checkInputs(){
    const unidadePolicial = document.getElementById('unidade-policial')
    const searchInput = document.getElementById('search-input');
    console.log(searchInput.value)

    unidadePolicial.innerHTML = `${searchInput.value}`
  }
