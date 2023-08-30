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
    "COORDPPOL/SUBCP - COORDENAÇÃO DOS PROCEDIMENTOS POLICIAIS",
    "COPLAM/SUBCP - COORDENAÇÃO DE PLANEJAMENTO E MODERNIZAÇÃO",
    "COORDPLAN/GCOM/DIM - COORDENAÇÃO DOS SERVIÇOS DE PLANTÃO POLICIAL",
    "CORE/GABPCPE - COMANDO DE OPERAÇÕES E RECURSOS ESPECIAIS",
    "DPRIE/CORE/GABPCPE - DELEGACIA DE POLÍCIA DE REPRESSÃO À INTOLERÂNCIA ESPORTIVA",
    "DTI/SUBCP - DIRETORIA DE TECNOLOGIA DA INFORMAÇÃO",
    "ASSDTI/DTI - ASSESSORIA DA DTI",
    "UNIATE/DTI - UNIDADE DE INFRAESTRUTURA E ATENDIMENTO",
    "DIVMAE/UNIATE/DTI - DIVISÃO DE MANUTENÇÃO DE EQUIPAMENTOS",
    "UNISUT/DTI - UNIDADE DE SUPORTE TÉCNICO",
    "DIVREC/UNISUT/DTI - DIVISÃO DE REDES DE COMPUTADORES",
    "SUPTEC - SETOR DE SUPORTE TÉCNICO DA DTI",
    "UNISA/DTI - UNIDADE DE SISTEMAS APLICATIVOS",
    "DIRH/SUBCP - DIRETORIA DE RECURSOS HUMANOS",
    "UNIMOPE/DIRH - UNIDADE DE MOVIMENTAÇÃO DE PESSOAL",
    "DIVPORT/UNIMOPE/DIRH - DIVISÃO DE ELABORAÇÃO DE PORTARIA",
    "DIVJUST/UNIMOPE/DIRH - DIVISÃO DE APRESENTAÇÃO DE SERVIDOR À JUSTIÇA",
    "UNICADE/DIRH - UNIDADE DE CAPACITAÇÃO E DESENVOLVIMENTO",
    "DIVAD/UNICADE/DIRH - DIVISÃO ADMINISTRATIVA DA UNICADE",
    "UNIAP/DIRH - UNIDADE DE ADMINISTRAÇÃO DE PESSOAL",
    "DIVSERV/UNIAP/DIRH - DIVISÃO DE ATENDIMENTO AO SERVIDOR",
    "DIVFOP/UNIAP/DIRH - DIVISÃO DE FOLHA DE PAGAMENTO",
    "DIVCAP/UNIAP/DIRH - DIVISÃO DE CADASTRO DE PESSOAL",
    "UNESAV/DIRH - UNIDADE DE ESTUDOS E GERENCIAMENTO DE SAÚDE E VALORIZAÇÃO PROFISSIONAL",
    "DIVASS/UNESAV/DIRH - DIVISÃO DE ASSISTÊNCIA SOCIAL",
    "DIVASP/UNESAV/DIRH - DIVISÃO DE ASSISTÊNCIA PSICOLÓGICA",
    "CAPELANIA/UNESAV/DIRH - CAPELANIA",
    "DIVSA/UNESAV/DIRH - DIVISÃO DE SAÚDE",
    "DIVAE/DIRH - DIVISÃO DE ANÁLISE E ESTATÍSTICA DA DIRH",
    "DIVSEL/DIRH - DIVISÃO DE SEGURANÇA E LOGÍSTICA",
    "DIAG/SUBCP - DIRETORIA DE ADMINISTRAÇÃO GERAL",
    "DIVCOMPRAS/DIAG - DIVISÃO DE COMPRAS",
    "DIVPROT/DIAG - DIVISÃO DE PROTOCOLO DA DIAG",
    "CPL/DIAG - COMISSÃO PERMANENTE DE LICITAÇÃO",
    "UNEATEM/DIAG - UNIDADE DE ENERGIA ELÉTRICA, ÁGUA E TELEFONIA MÓVEL",
    "UNEFIN/DIAG - UNIDADE DE EXECUÇÃO FINANCEIRA",
    "DIVCON/UNEFIN/DIAG - DIVISÃO DE CONTABILIDADE",
    "DIVTES/UNEFIN/DIAG - DIVISÃO DE TESOURARIA",
    "DIVPREST/UNEFIN/DIAG - DIVISÃO DE PRESTAÇÃO DE CONTAS",
    "UNIPAE/DIAG - UNIDADE DE PROJETOS DE ARQUITETURA E ENGENHARIA",
    "UNISERG/DIAG - UNIDADE DE SERVIÇOS GERAIS",
    "DIVAG/UNISERG/DIAG - DIVISÃO DE ARQUIVO GERAL",
    "DIVALM/UNISERG/DIAG - DIVISÃO DE ARQUIVO GERAL",
    "DIVSUP/UNISERG/DIAG - DIVISÃO DE SUPRIMENTO E PATRIMÔNIO",
    "DIVMAN/UNISERG/DIAG - DIVISÃO DE MANUTENÇÃO",
    "DIVDEBA/UNISERG/DIAG - DIVISÃO DE DEPÓSITO DE BENS APREENDIDOS",
    "UNICCON/DIAG - UNIDADE DE CONTRATOS E CONVÊNIOS",
    "UNITOF - UNIDADE DE TRANSPORTES E OFICINA",
    "DIMAVE/UNITOF/DIAG - DIVISÃO DE MANUTENÇÃO E CONTROLE DE VEÍCULOS",
    "DICAS/UNITOF/DIAG - DIVISÃO DE CONTROLE DE ABASTECIMENTO E SERVIÇOS",
    "UNIPLANOR/DIAG - UNIDADE DE PLANEJAMENTO E ORÇAMENTO",
    "DIRESP/SUBCP - DIRETORIA INTEGRADA ESPECIALIZADA",
    "9ª DPH/DHMN/DIRESP - 9ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - OLINDA",
    "6ª DPH/DHMN/DIRESP - 6ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - PAULISTA",
    "7ª DPH//DHMN/DIRESP - 7ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - PAULISTA",
    "8ª DPH/DHMN/DIRESP - 8ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - PAULISTA",
    "10ª DPH/DHMN/DIRESP - 10ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - SÃO LOURENÇO DA MATA",
    "DHMS/DIRESP - DIVISÃO DE HOMICÍDIOS METROPOLITANA SUL",
    "11ª DPH/DHMS/DIRESP - 11ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - JABOATÃO DOS GUARARAPES",
    "12ª DPH/DHMS/DIRESP - 12ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - JABOATÃO DOS GUARARAPES",
    "13ª DPH/DHMS/DIRESP - 13ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - JABOATÃO DOS GUARARAPES/MORENO",
    "DPCA/GCOE/DIRESP - DEPARTAMENTO DE POLÍCIA DA CRIANÇA E DO ADOLESCENTE",
    "ASSDPCA/DPCA/GCOE - ASSESSORIA DO DPCA",
    "1ª DPCCAI/DPCA/DIRESP - 1ª DELEGACIA DE POLÍCIA DE CRIMES CONTRA A CRIANÇA E ADOLESCENTE E ATOS INFRACIONAIS - PAULISTA",
    "UNIAT/DIRH - UNIDADE DE APOIO TÉCNICO",
    "UNIPRECCA/DPCA/DIRESP - UNIDADE DE PREVENÇÃO E REPRESSÃO AOS CRIMES CONTRA CRIANÇA E ADOLESCENTE",
    "DECCA/UNIPRECCA/DIRESP - DELEGACIA DE POLÍCIA DE CRIMES CONTRA CRIANÇA E ADOLESCENTE",
    "2ª DPCCAI/DPCA/DIRESP - 2ª DELEGACIA DE POLÍCIA DE CRIMES CONTRA CRIANÇA E ADOLESCENTE E ATOS INFRACIONAIS - JABOATÃO DOS GUARARAPES",
    "DHPP/GCOE/DIRESP - DEPARTAMENTO DE HOMICÍDIOS E DE PROTEÇÃO À PESSOA",
    "CFTDHPP/DHPP/GCOE - COORDENAÇÃO DA FORÇA TAREFA",
    "DDPP/DHPP/GCOE - DELEGACIA DE DESAPARECIDOS E DE PROTEÇÃO À PESSOA",
    "1ª DPH/DHPP/GCOE - 1ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS",
    "2ª DPH/DHPP/GCOE - 2ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS",
    "3ª DPH/DHPP/GCOE - 3ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS",
    "4ª DPH/DHPP/GCOE - 4ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS",
    "5ª DPH/DHPP/GCOE - 5ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS",
    "DPI/DHPP/GCOE - DELEGACIA DE POLÍCIA DO IDOSO",
    "DEPATRI/GCOE/DIRESP - DEPARTAMENTO DE REPRESSÃO AOS CRIMES PATRIMONIAIS",
    "DPRF/DEPATRI/GCOE - DELEGACIA DE POLÍCIA DE ROUBOS E FURTOS",
    "DPRFV/DEPATRI/GCOE - DELEGACIA DE POLÍCIA DE ROUBOS E FURTOS DE VEÍCULOS",
    "DPRFC/DEPATRI/GCOE - DELEGACIA DE POLÍCIA DE ROUBOS E FURTOS DE CARGAS",
    "DPRE/DEPATRI/GCOE - DELEGACIA DE POLÍCIA DE REPRESSÃO AO ESTELIONATO",
    "DPTUR/DEPATRI/GCOE - DELEGACIA DE POLÍCIA DO TURISTA",
    "DPDT/DEPATRI/GCOE - DELEGACIA DE POLÍCIA DE DELITOS DE TRÂNSITO",
    "DIVAD/DEPATRI/GCOE - DIVISÃO ADMINISTRATIVA DO DEPATRI",
    "DENARC/DIRESP - DEPARTAMENTO DE REPRESSÃO AO NARCOTRÁFICO",
    "DENARC/ASSDENARC - ASSESSORIA DO DENARC",
    "DENARC/01ª DPRN - 01ª DP DE REPRESSÃO AO NARCOTRÁFICO",
    "DENARC/02ª DPRN - 02ª DP DE REPRESSÃO AO NARCOTRÁFICO",
    "DENARC/03ª DPRN - 03ª DP DE REPRESSÃO AO NARCOTRÁFICO",
    "DENARC/04ª DPRN - 04ª DP DE REPRESSÃO AO NARCOTRÁFICO - CABO DE SANTO AGOSTINHO",
    "DENARC/05ª DPRN - 05ª DP DE REPRESSÃO AO NARCOTRÁFICO - GOIANA",
    "DENARC/06ª DPRN - 06ª DP DE REPRESSÃO AO NARCOTRÁFICO - VITÓRIA DE SANTO ANTÃO",
    "DENARC/07ª DPRN - 07ª DP DE REPRESSÃO AO NARCOTRÁFICO - CARUARU",
    "DENARC/08ª DPRN - 08ª DP DE REPRESSÃO AO NARCOTRÁFICO - GARANHUNS",
    "DENARC/09ª DPRN - 09ª DP DE REPRESSÃO AO NARCOTRÁFICO - ARCOVERDE",
    "DENARC/10ª DPRN - 10ª DP DE REPRESSÃO AO NARCOTRÁFICO - SERRA TALHADA",
    "DENARC/11ª DPRN - 11ª DP DE REPRESSÃO AO NARCOTRÁFICO - OURICURI",
    "DENARC/12ª DPRN - 12ª DP DE REPRESSÃO AO NARCOTRÁFICO - PETROLINA",
    "DPMUL/DIRESP - DEPARTAMENTO DE PROTEÇÃO DA MULHER",
    "DPMUL/01ª DEAM - 01ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER - SANTO AMARO",
    "DPMUL/02ª DEAM - 02ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER – PRAZERES",
    "DPMUL/03ª DEAM - 03ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER PETROLINA À MULHER",
    "DPMUL/04ª DEAM - 04ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER CARUARU",
    "DPMUL/05ª DEAM - 05ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER - PAULISTA",
    "DPMUL/06ªDEAM - 06ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER - IPOJUCA",
    "DPMUL/07ª DEAM - 07ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER - SURUBIM",
    "DPMUL/08ª DEAM - 08ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER - GOIANA",
    "DPMUL/09ª DEAM - 09ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER - GARANHUNS",
    "DPMUL/10ª DEAM - 10ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER - VITÓRIA DE SANTO ANTÃO",
    "DPMUL/11ª DEAM - 11ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER - SALGUEIRO",
    "DPMUL/12ªDEAM-12ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER - OURICURI",
    "DPMUL/13ªDEAM-13ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER - AFOGADOS DA INGAZEIRA",
    "DPMUL/14ª DEAM - 14ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER - CABO DE SANTO AGOSTINHO",
    "DPMUL/15ª DEAM - 15ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER - OLINDA",
    "DPMUL/16ª DEAM - 16ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER - PALMARES",
    "DPMUL/17ª DEAM - 17ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER - ARCOVERDE",
    "DECCOT/GCOE/DIRESP - DELEGACIA DE POLÍCIA DE CRIMES CONTRA A ORDEM TRIBUTÁRIA",
    "DECON/GCOE/DIRESP - DELEGACIA DE POLÍCIA DE CRIMES CONTRA O CONSUMIDOR",
    "DRACCO - DEPARTAMENTO DE REPRESSÃO AO CRIME ORGANIZADO E À CORRUPÇÃO",
    "1ª DECCOR - DRACCO - 1ª DELEGACIA DE POLÍCIA DE REPRESSÃO AO CRIME ORGANIZADO E À CORRUPÇÃO",
    "2ª DECCOR - DRACCO - 2ª DELEGACIA DE POLÍCIA DE REPRESSÃO AO CRIME ORGANIZADO E À CORRUPÇÃO",
    "POLINTER/GCOE/DIRESP - DELEGACIA DE POLÍCIA INTERESTADUAL E CAPTURAS",
    "DEPOMA/GCOE/DIRESP - DELEGACIA DE POLÍCIA DO MEIO AMBIENTE",
    "DINT/GCOE/DIRESP - DELEGACIA INTERATIVA",
    "GOE/GCOE/DIRESP - GRUPO DE OPERAÇÕES ESPECIAIS",
    "DPCRICI//GCOE/DIRESP - DELEGACIA DE POLÍCIA DE REPRESSÃO AOS CRIMES CIBERNÉTICOS",
    "DP 36ª CIRC - 1ª TURMA/GCOE/DIRESP - DELEGACIA DE POLÍCIA DA 36ª CIRCUNSCRIÇÃO - FERNANDO DE NORONHA",
    "DIM/SUBCP - DIRETORIA INTEGRADA METROPOLITANA",
    "CEPLANC/DIM - CENTRAL DE PLANTÕES DA CAPITAL",
    "GCOM/DIM - GERÊNCIA DE CONTROLE OPERACIONAL METROPOLITANO DA POLICIA CIVIL",
    "1ª DESEC/GCOM/DIM - 1ª DELEGACIA SECCIONAL DE POLÍCIA - SANTO AMARO",
    "DP 1ª CIRC./1ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 1ª CIRCUNSCRIÇÃO - RIO BRANCO",
    "DP 2ª CIRC./1ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 2ª CIRCUNSCRIÇÃO - BOA VISTA",
    "DP 3ª CIRC./1ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 3ª CIRCUNSCRIÇÃO - JOANA BEZERRA",
    "2ª DESEC/GCOM/DIM - 2ª DELEGACIA SECCIONAL DE POLÍCIA - ESPINHEIRO",
    "DP 4ª CIRC./2ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 4ª CIRCUNSCRIÇÃO - ESPINHEIRO",
    "POSTO POLICIAL HR - POSTO POLICIAL DO HOSPITAL DA RESTAURAÇÃO",
    "DP 6ª CIRC./2ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 6ª CIRCUNSCRIÇÃO - CORDEIRO",
    "DP 16ª CIRC./2ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 16ª CIRCUNSCRIÇÃO - ÁGUA FRIA",
    "3ª DESEC/GCOM/DIM - 3ª DELEGACIA SECCIONAL DE POLÍCIA - BOA VIAGEM",
    "DP 7ª CIRC./3ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 7ª CIRCUNSCRIÇÃO - BOA VIAGEM",
    "DP 8ª CIRC./3ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 8ª CIRCUNSCRIÇÃO - JORDÃO",
    "DP 9ª CIRC./3ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 9ª CIRCUNSCRIÇÃO - IPSEP",
    "DP 10ª CIRC./3ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 10ª CIRCUNSCRIÇÃO - IBURA",
    "4ª DESEC/GCOM/DIM - 4ª DELEGACIA SECCIONAL DE POLÍCIA - VÁRZEA",
    "DP 11ª CIRC./4ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 11ª CIRCUNSCRIÇÃO - AFOGADOS",
    "DP 12ª CIRC./4ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 12ª CIRCUNSCRIÇÃO - JARDIM SÃO PAULO",
    "DP 13ª CIRC./4ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 13ª CIRCUNSCRIÇÃO - MUSTARDINHA",
    "DP 14ª CIRC./4ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 14ª CIRCUNSCRIÇÃO - VÁRZEA",
    "5ª DESEC/GCOM/DIM - 5ª DELEGACIA SECCIONAL DE POLÍCIA - APIPUCOS",
    "DP 5ª CIRC./5ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 5ª CIRCUNSCRIÇÃO - CASA AMARELA",
    "DP 15ª CIRC./5ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 15ª CIRCUNSCRIÇÃO - ALTO DO PASCOAL",
    "DP 17ª CIRC./5ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 17ª CIRCUNSCRIÇÃO - VASCO DA GAMA",
    "DP 18ª CIRC./5ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 18ª CIRCUNSCRIÇÃO - MACAXEIRA",
    "6ª DESEC/GCOM/DIM - 6ª DELEGACIA SECCIONAL DE POLÍCIA - JABOATÃO DOS GUARARAPES",
    "1ª DP 19ª CIRC./6ª DESEC/GCOM - 1ª DELEGACIA DE POLÍCIA DA 19ª CIRCUNSCRIÇÃO - PRAZERES",
    "2ª DP 19ª CIRC./6ª DESEC/GCOM - 2ª DELEGACIA DE POLÍCIA DA 19ª CIRCUNSCRIÇÃO - MURIBECA",
    "DP 20ª CIRC./6ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 20ª CIRCUNSCRIÇÃO - JABOATÃO DOS GUARARAPES",
    "DP 21ª CIRC./6ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 21ª CIRCUNSCRIÇÃO - MORENO",
    "DP 22ª CIRC./6ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 22ª CIRCUNSCRIÇÃO - PIEDADE",
    "DP 23ª CIRC./6ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 23ª CIRCUNSCRIÇÃO - CAVALEIRO",
    "7ª DESEC/GCOM/DIM - 7ª DELEGACIA SECCIONAL DE POLÍCIA - OLINDA",
    "DP 24ª CIRC./7ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 24ª CIRCUNSCRIÇÃO - VARADOURO",
    "DP 25ª CIRC./7ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 25ª CIRCUNSCRIÇÃO - PEIXINHOS",
    "DP 26ª CIRC./7ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 26ª CIRCUNSCRIÇÃO - RIO DOCE",
    "8ª DESEC/GCOM/DIM - 8ª DELEGACIA SECCIONAL DE POLÍCIA - PAULISTA",
    "DP 27ª CIRC./8ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 27ª CIRCUNSCRIÇÃO - ABREU E LIMA",
    "DP 28ª CIRC./8ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 28ª CIRCUNSCRIÇÃO - PAULISTA",
    "DP 29ª CIRC./8ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 29ª CIRCUNSCRIÇÃO - IGARASSU",
    "DP 30ª CIRC./8ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 30ª CIRCUNSCRIÇÃO - ITAMARACÁ",
    "DP 31ª CIRC./8ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 31ª CIRCUNSCRIÇÃO - ITAPISSUMA",
    "DP 32ª CIRC./8ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 32ª CIRCUNSCRIÇÃO - ENGENHO MARANGUAPE",
    "DP 33ª CIRC./8ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 33ª CIRCUNSCRIÇÃO - CRUZ DE REBOUÇAS",
    "DP 34ª CIRC./8ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 34ª CIRCUNSCRIÇÃO - MARIA FARINHA",
    "DP 35ª CIRC./8ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 35ª CIRCUNSCRIÇÃO - ARAÇOIABA",
    "9ª DESEC/GCOM/DIM - 9ª DELEGACIA SECCIONAL DE POLÍCIA - SÃO LOURENÇO DA MATA",
    "DP 37ª CIRC./9ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 37ª CIRCUNSCRIÇÃO - CAMARAGIBE",
    "DP 38ª CIRC./9ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 38ª CIRCUNSCRIÇÃO - SÃO LOURENÇO DA MATA",
    "10ª DESEC/GCOM/DIM - 10ª DELEGACIA SECCIONAL DE POLÍCIA - CABO DE SANTO AGOSTINHO",
    "DP 40ª CIRC./10ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 40ª CIRCUNSCRIÇÃO - CABO DE SANTO AGOSTINHO",
    "DP 41ª CIRC.10ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 41ª CIRCUNSCRIÇÃO - PONTE DOS CARVALHOS",
    "DP 42ª CIRC.10ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 42ª CIRCUNSCRIÇÃO - IPOJUCA",
    "DP 43ª CIRC.10ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 43ª CIRCUNSCRIÇÃO - PORTO DE GALINHAS",
    "DIVPLOM/GCOM/DIM - DIVISÃO DE PLANEJAMENTO OPERACIONAL METROPOLITANO",
    "DINTER 1/SUBCP - DIRETORIA INTEGRADA DO INTERIOR 1",
    "11ª DESEC/GCOI 1/DINTER 1 - 11ª DELEGACIA SECCIONAL DE POLÍCIA - GOIANA",
    "1ª DP 44ª CIRC./11ª DESEC/GCOI 1 - 1ª DELEGACIA DE POLÍCIA DA 44ª CIRCUNSCRIÇÃO - GOIANA",
    "DP 45ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 45ª CIRCUNSCRIÇÃO - CARPINA",
    "DP 46ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 46ª CIRCUNSCRIÇÃO - TIMBAÚBA",
    "DP 47ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 47ª CIRCUNSCRIÇÃO - PAUDALHO",
    "DP 48ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 48ª CIRCUNSCRIÇÃO - ALIANÇA",
    "DP 49ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 49ª CIRCUNSCRIÇÃO - ITAMBÉ",
    "DP 50ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 50ª CIRCUNSCRIÇÃO - NAZARÉ DA MATA",
    "DP 51ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 51ª CIRCUNSCRIÇÃO - VICÊNCIA",
    "DP 52ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 52ª CIRCUNSCRIÇÃO - MACAPARANA",
    "DP 53ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 53ª CIRCUNSCRIÇÃO - CONDADO",
    "DP 54ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 54ª CIRCUNSCRIÇÃO - LAGOA DE ITAENGA",
    "DP 55ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 55ª CIRCUNSCRIÇÃO - ITAQUITINGA",
    "DP 56ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 56ª CIRCUNSCRIÇÃO - LAGOA DO CARRO",
    "DP 57ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 57ª CIRCUNSCRIÇÃO - TRACUNHAÉM",
    "DP 58ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 58ª CIRCUNSCRIÇÃO - BUENOS AIRES",
    "DP 59ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 59ª CIRCUNSCRIÇÃO - FERREIROS",
    "DP 60ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 60ª CIRCUNSCRIÇÃO - CAMUTANGA",
    "12ª DESEC/GCOI 1/DINTER 1 - 12ª DELEGACIA SECCIONAL DE POLÍCIA - VITÓRIA DE SANTO ANTÃO",
    "DP 61ª CIRC./12ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 61ª CIRCUNSCRIÇÃO - VITÓRIA DE STO. ANTÃO",
    "DP 62ª CIRC./12ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 62ª CIRCUNSCRIÇÃO - GRAVATÁ",
    "DP 63ª CIRC./12ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 63ª CIRCUNSCRIÇÃO - ESCADA",
    "DP 64ª CIRC./12ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 64ª CIRCUNSCRIÇÃO - GLÓRIA DO GOITÁ",
    "DP 65ª CIRC./12ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 65ª CIRCUNSCRIÇÃO - POMBOS",
    "DP 66ª CIRC./12ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 66ª CIRCUNSCRIÇÃO - AMARAJI",
    "DP 67ª CIRC./12ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 67ª CIRCUNSCRIÇÃO - CHÃ GRANDE",
    "DP 68ª CIRC./12ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 68ª CIRCUNSCRIÇÃO - PRIMAVERA",
    "DP 69ª CIRC./12ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 69ª CIRCUNSCRIÇÃO - CHÃ DE ALEGRIA",
    "13ª DESEC/GCOI 1/DINTER 1 - 13ª DELEGACIA SECCIONAL DE POLÍCIA - PALMARES",
    "DP 70ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 70ª CIRCUNSCRIÇÃO - PALMARES",
    "DP 71ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 71ª CIRCUNSCRIÇÃO - RIBEIRÃO",
    "DP 72ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 72ª CIRCUNSCRIÇÃO - BARREIROS",
    "DP 73ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 72ª CIRCUNSCRIÇÃO - SIRINHAÉM",
    "DP 74ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 74ª CIRCUNSCRIÇÃO - CATENDE",
    "DP 75ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 75ª CIRCUNSCRIÇÃO - ÁGUA PRETA",
    "DP 76ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 76ª CIRCUNSCRIÇÃO - GAMELEIRA",
    "DP 077ª CIRC./13ª DESEC - DELEGACIA DE POLÍCIA DA 077ª CIRCUNSCRIÇÃO - QUIPAPÁ",
    "DP 78ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 78ª CIRCUNSCRIÇÃO - RIO FORMOSO",
    "DP 79ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 79ª CIRCUNSCRIÇÃO - TAMANDARÉ",
    "DP 80ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 80ª CIRCUNSCRIÇÃO - JOAQUIM NABUCO",
    "DP 81ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 81ª CIRCUNSCRIÇÃO - MARAIAL",
    "DP 82ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 82ª CIRCUNSCRIÇÃO - SÃO JOSÉ DA COROA GRANDE",
    "DP 83ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 83ª CIRCUNSCRIÇÃO - XEXÉU",
    "DP 84ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 84ª CIRCUNSCRIÇÃO - CORTÊS",
    "DP 85ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 85ª CIRCUNSCRIÇÃO - JAQUEIRA",
    "DP 86ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 86ª CIRCUNSCRIÇÃO - BELÉM DE MARIA",
    "DP 87ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 87ª CIRCUNSCRIÇÃO - SÃO BENEDITO DO SUL",
    "14ª DESEC/GCOI 1/DINTER 1 - 14ª DELEGACIA SECCIONAL DE POLÍCIA - CARUARU",
    "DP 88ª CIRC./14ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 88ª CIRCUNSCRIÇÃO - CARUARU",
    "DP 89ª CIRC./14ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 89ª CIRCUNSCRIÇÃO - CARUARU",
    "DP 90ª CIRC./14ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 90ª CIRCUNSCRIÇÃO - CARUARU",
    "POSTO POLICIAL - POSTO POLICIAL DO HOSPITAL REGIONAL DO AGRESTE",
    "DP 91ª CIRC./14ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 91ª CIRCUNSCRIÇÃO - BEZERROS",
    "DP 92ª CIRC./14ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 92ª CIRCUNSCRIÇÃO - BONITO",
    "DP 94ª CIRC./14ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 94ª CIRCUNSCRIÇÃO - CUPIRA",
    "DP 95ª CIRC./14ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 95ª CIRCUNSCRIÇÃO - ALTINHO",
    "DP 96ª CIRC./14ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 96ª CIRCUNSCRIÇÃO - AGRESTINA",
    "DP 97ª CIRC./14ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 97ª CIRCUNSCRIÇÃO - SÃO JOAQUIM DO MONTE",
    "DP 98ª CIRC./14ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 98ª CIRCUNSCRIÇÃO - RIACHO DAS ALMAS",
    "DP 99ª CIRC./14ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 99ª CIRCUNSCRIÇÃO - LAGOA DOS GATOS",
    "DP 100ª CIRC./14ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 100ª CIRCUNSCRIÇÃO - CAMOCIM DE SÃO FÉLIX",
    "DP 101ª CIRC./14ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 101ª CIRCUNSCRIÇÃO - SAIRÉ",
    "DP 102ª CIRC./14ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 102ª CIRCUNSCRIÇÃO - BARRA DE GUABIRABA",
    "DP 103ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 103ª CIRCUNSCRIÇÃO - IBIRAJUBA",
    "DP 146ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 146ª CIRCUNSCRIÇÃO - JUREMA",
    "15ª DESEC/GCOI 1/DINTER 1 - 15ª DELEGACIA SECCIONAL DE POLÍCIA - BELO JARDIM",
    "DP 104ª CIRC./15ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 104ª CIRCUNSCRIÇÃO - BELO JARDIM",
    "DP 105ª CIRC./15ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 105ª CIRCUNSCRIÇÃO - PESQUEIRA",
    "DP 106ª CIRC./15ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 106ª CIRCUNSCRIÇÃO - SÃO BENTO DO UNA",
    "DP 108ª CIRC./15ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 108ª CIRCUNSCRIÇÃO - SÃO CAETANO",
    "DP 109ª CIRC./15ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 109ª CIRCUNSCRIÇÃO - CACHOEIRINHA",
    "DP 110ª CIRC./15ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 110ª CIRCUNSCRIÇÃO - SANHARÓ",
    "DP 112ª CIRC./15ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 112ª CIRCUNSCRIÇÃO - TACAIMBÓ",
    "DP 113ª CIRC./15ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 113ª CIRCUNSCRIÇÃO - ALAGOINHA",
    "DP 114ª CIRC./15ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 114ª CIRCUNSCRIÇÃO - POÇÃO",
    "16ª DESEC/GCOI 1/DINTER 1 - 16ª DELEGACIA SECCIONAL DE POLÍCIA - LIMOEIRO",
    "DP 115ª CIRC./16ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 115ª CIRCUNSCRIÇÃO - LIMOEIRO",
    "DP 116ª CIRC./16ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 116ª CIRCUNSCRIÇÃO - SURUBIM",
    "DP 117ª CIRC./16ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 117ª CIRCUNSCRIÇÃO - BOM JARDIM",
    "DP 118ª CIRC./16ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 118ª CIRCUNSCRIÇÃO - PASSIRA",
    "DP 119ª CIRC./16ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 119ª CIRCUNSCRIÇÃO - CUMARU",
    "DP 120ª CIRC./16ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 120ª CIRCUNSCRIÇÃO - JOÃO ALFREDO",
    "DP 121ª CIRC./16ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 121ª CIRCUNSCRIÇÃO - OROBÓ",
    "DP 122ª CIRC./16ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 122ª CIRCUNSCRIÇÃO - FEIRA NOVA",
    "DP 123ª CIRC./16ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 123ª CIRCUNSCRIÇÃO - SÃO VICENTE FÉRRER",
    "DP 124ª CIRC./16ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 124ª CIRCUNSCRIÇÃO - CASINHAS",
    "DP 125ª CIRC./16ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 125ª CIRCUNSCRIÇÃO - MACHADOS",
    "DP 126ª CIRC./16ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 126ª CIRCUNSCRIÇÃO - VERTENTE DO LÉRIO",
    "DP 127ª CIRC./16ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 127ª CIRCUNSCRIÇÃO - SALGADINHO",
    "17ª DESEC/GCOI 1/DINTER 1 - 17ª DELEGACIA SECCIONAL DE POLÍCIA - SANTA CRUZ DO CAPIBARIBE",
    "DP 107ª CIRC./17ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 107ª CIRCUNSCRIÇÃO - BREJO DA MADRE DE DEUS",
    "DP 111ª CIRC./17ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 111ª CIRCUNSCRIÇÃO - JATAÚBA",
    "DP 128ª CIRC./17ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 128ª CIRCUNSCRIÇÃO STA. CRUZ DO CAPIBARIBE",
    "DP 129ª CIRC./17ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 129ª CIRCUNSCRIÇÃO - TORITAMA",
    "DP 130ª CIRC./17ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 130ª CIRCUNSCRIÇÃO - TAQUARITINGA DO NORTE",
    "DP 131ª CIRC./17ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 131ª CIRCUNSCRIÇÃO - VERTENTES",
    "DP 132ª CIRC./16ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 132ª CIRCUNSCRIÇÃO - FREI MIGUELINHO",
    "DP 133ª CIRC./17ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 133ª CIRCUNSCRIÇÃO STA. MARIA DO CAMBUCÁ",
    "18ª DESEC/GCOI 1/DINTER 1 - 18ª DELEGACIA SECCIONAL DE POLÍCIA - GARANHUNS",
    "DP 93ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 93ª CIRCUNSCRIÇÃO - PANELAS",
    "DP 134ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 134ª CIRCUNSCRIÇÃO - GARANHUNS",
    "DP 135ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 135ª CIRCUNSCRIÇÃO - GARANHUNS",
    "DP 136ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 136ª CIRCUNSCRIÇÃO - BOM CONSELHO",
    "DP 137ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 137ª CIRCUNSCRIÇÃO - ÁGUAS BELAS",
    "DP 138ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 138ª CIRCUNSCRIÇÃO - LAJEDO",
    "DP 139ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 139ª CIRCUNSCRIÇÃO - CANHOTINHO",
    "DP 140ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 140ª CIRCUNSCRIÇÃO - CAETÉS",
    "DP 141ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 141ª CIRCUNSCRIÇÃO - SÃO JOÃO",
    "DP 142ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 142ª CIRCUNSCRIÇÃO - CAPOEIRAS",
    "DP 143ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 143ª CIRCUNSCRIÇÃO - IATI",
    "DP 144ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 144ª CIRCUNSCRIÇÃO - CORRENTES",
    "DP 145ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 145ª CIRCUNSCRIÇÃO - SALOÁ",
    "DP 147ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 147ª CIRCUNSCRIÇÃO - JUPI",
    "DP 148ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 148ª CIRCUNSCRIÇÃO - CALÇADOS",
    "DP 149ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 149ª CIRCUNSCRIÇÃO - LAGOA DO OURO",
    "DP 150ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 150ª CIRCUNSCRIÇÃO - PARANATAMA",
    "DP 151ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 151ª CIRCUNSCRIÇÃO - JUCATI",
    "DP 152ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 152ª CIRCUNSCRIÇÃO - PALMEIRINA",
    "DP 153ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 153ª CIRCUNSCRIÇÃO - ANGELIM",
    "DP 154ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 154ª CIRCUNSCRIÇÃO - BREJÃO",
    "DP 155ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 155ª CIRCUNSCRIÇÃO - TEREZINHA",
    "DHA/DINTER 1 - DIVISÃO DE HOMICÍDIOS AGRESTE - CARUARU",
    "22ª DPH/DHA/DINTER 1 - 22ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - GARANHUNS",
    "16ª DPH/DINTER 1 - 16ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - GOIANA",
    "DINTER 2/SUBCP - DIRETORIA INTEGRADA DO INTERIOR 2",
    "19ª DESEC/GCOI 2/DINTER 2 - 19ª DELEGACIA SECCIONAL DE POLÍCIA - ARCOVERDE",
    "156ª CIRC./19ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 156ª CIRCUNSCRIÇÃO - ARCOVERDE",
    "DP 157ª CIRC./19ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 157ª CIRCUNSCRIÇÃO - BUÍQUE",
    "DP 158ª CIRC./19ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 158ª CIRCUNSCRIÇÃO - SERTÂNIA",
    "DP 159ª CIRC./19ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 159ª CIRCUNSCRIÇÃO - CUSTÓDIA",
    "DP 160ª CIRC./19ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 160ª CIRCUNSCRIÇÃO - ITAÍBA",
    "DP 161ª CIRC./19ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 161ª CIRCUNSCRIÇÃO - IBIMIRIM",
    "DP 162ª CIRC./19ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 162ª CIRCUNSCRIÇÃO - TUPANATINGA",
    "DP 163ª CIRC./19ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 163ª CIRCUNSCRIÇÃO - PEDRA",
    "DP 164ª CIRC./19ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 164ª CIRCUNSCRIÇÃO - VENTUROSA",
    "DP 166ª CIRC./19ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 166ª CIRCUNSCRIÇÃO - MANARI",
    "20ª DESEC/GCOI 2/DINTER 2 - 20ª DELEGACIA SECCIONAL DE POLÍCIA - AFOGADOS DA INGAZEIRA",
    "DP 167ª CIRC./20ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 167ª CIRCUNSCRIÇÃO - AFOGADOS DA INGAZEIRA",
    "DP 168ª CIRC./20ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 168ª CIRCUNSCRIÇÃO - SÃO JOSÉ DO EGITO",
    "DP 169ª CIRC./20ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 169ª CIRCUNSCRIÇÃO - TABIRA",
    "DP 170ª CIRC./20ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 170ª CIRCUNSCRIÇÃO - ITAPETIM",
    "DP 171ª CIRC./20ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 171ª CIRCUNSCRIÇÃO - IGUARACI",
    "DP 172ª CIRC./20ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 172ª CIRCUNSCRIÇÃO - SANTA TEREZINHA",
    "DP 173ª CIRC./20ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 173ª CIRCUNSCRIÇÃO - TUPARETAMA",
    "DP 174ª CIRC./20ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 174ª CIRCUNSCRIÇÃO - BREJINHO",
    "DP 175ª CIRC./20ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 175ª CIRCUNSCRIÇÃO - SOLIDÃO",
    "DP 176ª CIRC./20ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 176ª CIRCUNSCRIÇÃO - INGAZEIRA",
    "DP 180ª CIRC./20ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 180ª CIRCUNSCRIÇÃO - CARNAÍBA",
    "DP 185ª CIRC./20ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 185ª CIRCUNSCRIÇÃO - QUIXABA",
    "21ª DESEC/GCOI 2/DINTER 2 - 21ª DELEGACIA SECCIONAL DE POLÍCIA - SERRA TALHADA",
    "21ª DESEC/DP 177ª CIRC. - DELEGACIA DE POLÍCIA DA 177ª CIRCUNSCRIÇÃO - SERRA TALHADA",
    "DP 178ª CIRC./21ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 178ª CIRCUNSCRIÇÃO - SÃO JOSÉ DO BELMONTE",
    "DP 179ª CIRC./21ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 179ª CIRCUNSCRIÇÃO - FLORES",
    "DP 181ª CIRC./21ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 181ª CIRCUNSCRIÇÃO - TRIUNFO",
    "DP 182ª CIRC./21ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 182ª CIRCUNSCRIÇÃO - BETÂNIA",
    "DP 183ª CIRC./21ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 183ª CIRCUNSCRIÇÃO STA. CRUZ DA BAIXA VERDE",
    "DP 184ª CIRC./21ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 184ª CIRCUNSCRIÇÃO - CALUMBI",
    "22ª DESEC/GCOI 2/DINTER 2 - 22ª DELEGACIA SECCIONAL DE POLÍCIA - FLORESTA",
    "DP 165ª CIRC./22ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 165ª CIRCUNSCRIÇÃO - INAJÁ",
    "DP 186ª CIRC./22ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 186ª CIRCUNSCRIÇÃO - PETROLÂNDIA",
    "DP 187ª CIRC./22ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 187ª CIRCUNSCRIÇÃO - FLORESTA",
    "DP 188ª CIRC./22ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 188ª CIRCUNSCRIÇÃO - BELÉM DE SÃO FRANCISCO",
    "DP 189ª CIRC./22ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 189ª CIRCUNSCRIÇÃO - TACARATU",
    "DP 190ª CIRC./22ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 190ª CIRCUNSCRIÇÃO - JATOBÁ",
    "DP 191ª CIRC./22ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 191ª CIRCUNSCRIÇÃO - CARNAUBEIRA DA PENHA",
    "DP 192ª CIRC./22ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 192ª CIRCUNSCRIÇÃO - ITACURUBA",
    "23ª DESEC/GCOI 2/DINTER 2 - 23ª DELEGACIA SECCIONAL DE POLÍCIA - SALGUEIRO",
    "DP 193ª CIRC./23ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 193ª CIRCUNSCRIÇÃO - SALGUEIRO",
    "DP 194ª CIRC.23ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 194ª CIRCUNSCRIÇÃO - PARNAMIRIM",
    "DP 195ª CIRC.23ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 195ª CIRCUNSCRIÇÃO - SERRITA",
    "DP 196ª CIRC.23ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 196ª CIRCUNSCRIÇÃO - MIRANDIBA",
    "DP 197ª CIRC.23ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 197ª CIRCUNSCRIÇÃO - CEDRO",
    "DP 198ª CIRC.23ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 198ª CIRCUNSCRIÇÃO - VERDEJANTE",
    "DP 199ª CIRC.23ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 199ª CIRCUNSCRIÇÃO - TERRA NOVA",
    "24ª DESEC/GCOI 2/DINTER 2 - 24ª DELEGACIA SECCIONAL DE POLÍCIA - ARARIPINA",
    "DP 200ª CIRC./24ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 200ª CIRCUNSCRIÇÃO - ARARIPINA",
    "DP 201ª CIRC./24ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 201ª CIRCUNSCRIÇÃO - OURICURI",
    "DP 202ª CIRC./24ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 202ª CIRCUNSCRIÇÃO - EXU",
    "DP 203ª CIRC./24ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 203ª CIRCUNSCRIÇÃO - BODOCÓ",
    "DP 204ª CIRC./24ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 204ª CIRCUNSCRIÇÃO - IPUBI",
    "DP 205ª CIRC./24ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 205ª CIRCUNSCRIÇÃO - TRINDADE",
    "DP 206ª CIRC./24ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 206ª CIRCUNSCRIÇÃO STA. FILOMENA",
    "DP 207ª CIRC./24ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 207ª CIRCUNSCRIÇÃO SANTA CRUZ",
    "DP 208ª CIRC./24ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 208ª CIRCUNSCRIÇÃO - MOREILÂNDIA",
    "DP 209ª CIRC./24ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 209ª CIRCUNSCRIÇÃO - GRANITO",
    "25ª DESEC/GCOI 2/DINTER 2 - 25ª DELEGACIA SECCIONAL DE POLÍCIA - CABROBÓ",
    "DP 210ª CIRC./25ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 210ª CIRCUNSCRIÇÃO STA. Mª DA BOA VISTA",
    "DP 211ª CIRC./25ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 211ª CIRCUNSCRIÇÃO - CABROBÓ",
    "DP 212ª CIRC./25ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 212ª CIRCUNSCRIÇÃO - OROCÓ",
    "DP 215ª CIRC./25ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 215ª CIRCUNSCRIÇÃO - LAGOA GRANDE",
    "26ª DESEC/GCOI 2/DINTER 2 - 26ª DELEGACIA SECCIONAL DE POLÍCIA - PETROLINA",
    "DP 213ª CIRC./26ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 213ª CIRCUNSCRIÇÃO - PETROLINA",
    "DP 214ª CIRC./26ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 214ª CIRCUNSCRIÇÃO - PETROLINA",
    "DP 216ª CIRC./26ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 216ª CIRCUNSCRIÇÃO - AFRÂNIO",
    "DP 217ª CIRC./26ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 217ª CIRCUNSCRIÇÃO - DORMENTES",
    "17ª DPH/DINTER 2 - 17ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS – VITÓRIA DE SANTO ANTÃO",
    "18ª DPH/DINTER 2 - 18ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - PALMARES",
    "19ª DPH/DINTER 2 - 19ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - CARUARU",
    "20ª DPH/DINTER 2 - 20ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS – CARUARU",
    "21ª DPH/DINTER 2 - 21ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS – SANTA CRUZ DO CAPIBARIBE",
    "22ª DPH/DINTER 2 - 22ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - GARANHUNS",
    "23ª DPH/DINTER 2 - 23ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - ARCOVERDE",
    "24ª DPH/DINTER 2 - 24ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - ARARIPINA",
    "25ª DPH/DINTER 2 - 25ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - PETROLINA"
];

export{
    options
}