# Projeto sistema de avaliação física

## Dados pessoais

- [x]    **Nome: (INPUT)**
  
  - [x]    Letras e símbolos
  - [x]   validação vazio
  
 - [x] **Data de nascimento: (INPUT)**
      - [x]    data no formato brasileiro (DD/MM/AAAA)
      - [x]   validação vazio
      - [x]   validar a data
      - [x]   validar data menor que data atual
   - [x]   **Idade: (SHOW)**
   - [x]   **Sexo: (INPUT)**
        - [x]   Apenas números
        - [x]   Validar vazio
   - [x]   **Mostrar Sexo: (SHOW)**
   - [x]   **Profissão: (INPUT)**
     
        - [x]   Letras e símbolos
        - [x]   Validação vazio
   - [x] **Email: (INPUT)**
        - [x] Validar email

        - [x] Validar vazio

          Basicamente um email deve possuir as seguintes opções em seu campo.

          - [x] Não possuir espaços;

          - [x] Possuir o @;

          - [x] Possuir algum caracter após o @;

          - [x] Possuir algum caracter antes do @;
          - [x] Possuir pelo menos um ponto após o caracter depois do @;
          - [x] Possuir algum caracter após o ponto.

   https://www.devmedia.com.br/validando-e-mail-em-inputs-html-com-javascript/26427

   

   - [x]   **Telefone: (INPUT)**
        - [x]   Apenas números
        - [x]     Validar número de telefone
        - [x]   Validação vazio

## Anamnese

- [x] **Questionário - PAR-Q: (INPUT)**

  - [x] Apenas números 1[sim] e 2[não]
  - [x] Validação vazio
  - [x] Caso tenha algumas resposta sim uma mensagem deverá ser apresentada:

  ​        "Você deverá realizar um exame médico antes de iniciar suas atividades!"
  
- [x] Questionário - PAR-Q:

  - [x] Seu médico já mencionou alguma vez que você tem uma condição cardíaca e que você só deve realizar atividade física recomendada por um médico?
  - [x] Você sente dor no tórax quando realiza atividade física?
  - [x] No mês passado, você teve dor torácica quando não estava realizando atividade física?
  - [x] Você perdeu o equilíbrio por causa de tontura ou alguma vez perdeu a consciência?
  - [x] Você tem algum problema ósseo ou de articulação que poderia piorar em conseqüência de uma alteração em sua atividade física?
  - [x] Seu médico está prescrevendo medicamentos (por exemplo, água pílulas) para sua pressão ou condição cardíaca?
  - [x] Você teria alguma razão para não praticar exercício físico ou outro problema que impeça?



- [x] **Estado Físico Atual: (INPUT)**

  - [x] Apenas número:

    1 - Sedentário

    2 - Ativo

  - [x] Validar vazio



- [x] **Estado Físico Atual: (SHOW)**

Se a reposta for "1", mostrar "Sedentário", se for "2", mostrar "Ativo".



- [x] **Doença Pregressa: (INPUT)**

  - [x] Apenas números:

    1 - sim

    2 - não

  - [x] Caso a resposta seja sim o usuário deve informar qual doença ele tem

  - [x] Input de apenas texto (Qual a doença) (INPUT)

  - [x] Validar vazio



- [x] **Doenças na Família: (INPUT)**
  
  - [x] Apenas números:
  
    1 - sim
  
    2 - não
  
  - [x] Caso a resposta seja sim o usuário deve informar qual doença ele tem
  
  - [x] Input de apenas texto (Qual a doença) (INPUT)
  
  - [x] Validar vazio



- [x] **Cirurgia Realizada: (INPUT)**
  
  - [x] Apenas números:
  
    1 - sim
  
    2 - não
  
  - [x] Caso a resposta seja sim o usuário deve informar qual cirugia ele realizou
  
  - [x] Input de apenas texto (Qual Cirurgia/quanto tempo/Motivo) (INPUT)
  
  - [x] Validar vazio



- [x] **Usa medicamentos: (INPUT)**
  
  - [x] Apenas números:
  
    1 - sim
  
    2 - não
  
  - [x] Caso a resposta seja sim o usuário deve informar qual o medicamento usa
  
  - [x] Input de apenas texto (Qual medicamento) (INPUT)
  
  - [x] Validar vazio



- [x] **Lesões desportivas: (INPUT)**
  
  - [x] Apenas números:
  
    1 - sim
  
    2 - não
  
  - [x] Caso a resposta seja sim o usuário deve informar qual a lesão
  
  - [x] Input de apenas texto (Qual lesão) (INPUT)
  
  - [x] Validar vazio   



- [x] **Objetivo do treino : (INPUT)**

  - [x] Apenas números:

    1 - Estético

    2 - Bem-estar e Saúde

    3 - Terapêutico

    4 - Recreativo

    5 - Desportivo

  - [x] Validar vazio



- [x] **Mostrar objetivo do treino: (SHOW)**



- [x] **Dias disponíveis para treino: (INPUT)**
  - [x] Apenas números
  - [x] Quantidade de dias
  - [x] Validar vazio



- [x] **Tempo disponível por treino(min): (INPUT)**
  - [x] Apenas números
  - [x] Quantas horas por dia
  - [x] Validar vazio



## Cardiorrespiratório

  

- [x] **Frequência Cardíaca de Repouso (FCR): (INPUT)**
  - [x] Apenas números:
  - [x] bpm
  - [x] Validar vazio



- [x] **Frequência Cardíaca Máxima (SHOW)**
  - [x] Karvonen (1957)FCM=220-IDADE
  - [x] bpm



- [x] **Frequência Cardíaca de trabalho: (SHOW)**
  
  - [x] Karvonen (1957) FC reserva (FCT)=(((FCM-FCR)*%D)+FCR)
  - [x] Tabela com FCT de 40% até 90% pulando de 5% em 5%.
  
  
  
- [x] **Pressão Arterial de Repouso (mmHg): (INPUT)**
  
  - [x] sistólica & diastólica (INPUT)
  - [x] Validar vazio
  - [x] Apenas números

​    

- [x] **Sistólica - Classificação (SHOW)**

  PAS < 120 = "Ótima"

  PAS < 130 = "Normal"

  PAS < 140 = "Limítrofe"

  PAS < 160 = "Hipertensão Estágio 1"

  PAS < 180 = "Hipertensão Estágio 2"

  PAS < 300 = "Hipertensão Estágio 3"



- [x] **Diastólica - Classificação (SHOW)**

  PAS < 80 = "Ótima"

  PAS < 85 = "Normal"

  PAS < 90 = "Limítrofe"

  PAS < 100 = "Hipertensão Estágio 1"

  PAS < 110 = "Hipertensão Estágio 2"

  PAS < 300 = "Hipertensão Estágio 3"



## Antropometria

- [x] **Peso Corporal (kg): (INPUT)**
  - [x] Apenas número real
  - [x] Validar vazio
  - [x] Peso com no máximo três dígitos inteiros e uma casa decimal

​      

- [x] **Estatura (metros): (INPUT)**
  - [x] Apenas número real
  - [x] Validar vazio
  - [x] Estatura com um dígito inteiro e duas casa decimais



- [x] **Índice de Massa Corporal - IMC: (SHOW)**
  - [x] IMC = Peso / Estatura * Estatura



- [x] **Índice de Massa Corporal - IMC - Classificação: (SHOW)**

  IMC < 17 = "Magreza Grau 2"

  IMC < 18,5 = "Abaixo do peso"

  IMC < 25 = "Peso Normal"

  IMC < 30 = "Sobrepeso"

  IMC < 35 = "Obesidade nível 1"

  IMC < 40 = "Obesidade nível 2"

  IMC > 40 = "Obesidade Morbida"



- [x] **Perimetria: (INPUT)**
  - [x] Braço (cm)
  - [x] Antebraço (cm)
  - [x] Cintura (cm)
  - [x] Quadril (cm)
  - [x] Coxa (cm)
  - [x] Panturrilha (cm)
  - [x] Validar vazio
  - [x] Apenas número real
  - [x] Perimetria com no máximo três dígitos inteiros e uma casa decimal [000.0]



- [x] **Perimetria: (SHOW)**



- [x] **Relação Cintura Quadril: (SHOW)**
  - [x] RCQ = Perimetria Cintura / Perimetria Quadril



- [x] **Relação Cintura Quadril - Classificação (SHOW)**

  - [x] Se **homem**

    - [x] Com **idade entre 20 a 29 anos**

      RCQ < 0,83 = "Baixo Risco"

      RCQ < 0,89 = "Moderado Risco"

      RCQ < 0,95 = "Alto Risco"

      RCQ >= 0,95 = "Muito Alto Risco"

    - [x] Com **idade entre 30 a 39 anos**

      RCQ < 0,84 = "Baixo Risco"

      RCQ < 0,92 = "Moderado Risco"

      RCQ < 0,97 = "Alto Risco"

      RCQ >= 0,97 = "Muito Alto Risco"

    - [x] Com **idade entre 40 a 49 anos**

      RCQ < 0,88 = "Baixo Risco"

      RCQ < 0,96 = "Moderado Risco"

      RCQ < 1 = "Alto Risco"

      RCQ >= 1 = "Muito Alto Risco"

    - [x] Com **idade entre 50 a 59 anos**

      RCQ < 0,90 = "Baixo Risco"

      RCQ < 0,97 = "Moderado Risco"

      RCQ < 1,02 = "Alto Risco"

      RCQ >= 1,02 = "Muito Alto Risco"

    - [x] Com **idade entre 60 a 69 anos**

      RCQ < 0,91 = "Baixo Risco"

      RCQ < 0,99 = "Moderado Risco"

      RCQ < 1,03 = "Alto Risco"

      RCQ >= 1,03 = "Muito Alto Risco"

  - [x] Se **mulher**

    - [x] Com **idade entre 20 a 29 anos**

      RCQ < 0,71 = "Baixo Risco"

      RCQ < 0,78 = "Moderado Risco"

      RCQ < 0,82 = "Alto Risco"

      RCQ >= 0,82 = "Muito Alto Risco"

    - [x] Com **idade entre 30 a 39 anos**

      RCQ < 0,72 = "Baixo Risco"

      RCQ < 0,79 = "Moderado Risco"

      RCQ < 0,84 = "Alto Risco"

      RCQ >= 0,84 = "Muito Alto Risco"

    - [x] Com **idade entre 40 a 49 anos**

      RCQ < 0,73 = "Baixo Risco"

      RCQ < 0,80 = "Moderado Risco"

      RCQ < 0,87 = "Alto Risco"

      RCQ >= 0,87 = "Muito Alto Risco"

    - [x] Com **idade entre 50 a 59 anos**

      RCQ < 0,74 = "Baixo Risco"

      RCQ < 0,82 = "Moderado Risco"

      RCQ < 0,88 = "Alto Risco"

      RCQ >= 0,88 = "Muito Alto Risco"

    - [x] Com **idade entre 60 a 69 anos**

      RCQ < 0,76 = "Baixo Risco"

      RCQ < 0,84 = "Moderado Risco"

      RCQ < 0,90 = "Alto Risco"

      RCQ >= 0,90 = "Muito Alto Risco"



- [x] **Circunfência cintura (cm): (SHOW)**

  - [x] se **homem**

    Cintura < 94 = "Nenhum Risco"

    Cintura < 102 = "Risco Moderado"

    Cintura >= 102 = "Risco Alto"

  - [x] se **mulher**

    Cintura < 80 = "Nenhum Risco"

    Cintura < 88 = "Risco Moderado"

    Cintura >= 88 = "Risco Alto"



- [x] **Medidas subcutâneas: (INPUT)**
  - [x] Validar vazio
  - [x] Apenas número
  - [x] Dois dígitos
  - [x] Triciptal
  - [x] Subescapular
  - [x] Peitoral
  - [x] Supra-ilíaca
  - [x] Abdominal
  - [x] Coxa
  - [x] Panturrilha



- [x] **Percentual de gordura: (SHOW)**

  - [x] se **homem**

    - [x] **Soma das dobras**

      Soma das dobras = Peitoral + Abdominal + Coxa

    - [x] **Densidade Corporal**

      Densidade Corporal = ((1,10938 - (0,0008267 * Soma das dobras )) + ((0,0000016 * (Soma das dobras * Soma das dobras)) - (0,0002574 * idade)))

    - [x] **Percentual de gordura**

      %GC dobras cutâneas = (((4,95 / Densidade Corporal) - 4,5 ) * 100);

  - [x] se **mulher** 

    - [x] **Soma das dobras**

      Soma das dobras = Tricipital + Supra-ilíaca + Coxa

    - [x] **Densidade Corporal**

      Densidade Corporal = ((1,0994921-(0,0009929 * Soma das dobras)) + ((0,0000023 * (Soma das dobras * Soma das dobras)) - (0,0001392 * idade))))

    - [x] **Percentual de gordura**

      %GC dobras cutâneas = (((5,01 / Densidade Corporal) - 4,57) * 100))



- [x] **Percentual de gordura - Classificação: (SHOW)**

  - [x] Se **homem**

    Percentual de gordura < 6 = "Desnutrição"

    Percentual de gordura < 15 = "Abaixo da média"

    Percentual de gordura < 16 = "Média"

    Percentual de gordura < 25 = "Sobrepeso"

    Percentual de gordura >= 25 = "Obesidade"

  - [x] Se **mulher**

    Percentual de gordura < 9 = "Desnutrição"

    Percentual de gordura < 23 = "Abaixo da média"

    Percentual de gordura < 24 = "Média"

    Percentual de gordura < 32 = "Sobrepeso"

    Percentual de gordura >= 32 = "Obesidade"



- [x] **Massa Corporal Gorda: (SHOW)**

  M.C.G. = ((PESO * Percentual de gordura) / 100)

- [x] **Massa Corporal Magra: (SHOW)**

  M.C.M. = PESO - Massa corporal gorda

- [x] **Massa Corporal Ideal Prevista: (SHOW)**

  - [x] Se **homem**

    M.C.I. = (Masssa Corporal Magra / (1 - 0,15))

  - [x] Se **mulher**

    M.C.I. = (Masssa Corporal Magra / (1 - 0,23))
    
    

## Testes Neuromuscular

- [x] **Flexibilidade: (INPUT)**
  - [x] Número inteiro
  - [x] Validar vazio
  - [x] de 0 a 99



- [x] **Flexibilidade - Classificação: (SHOW)**

  - [x] se **homem**

    - [x] Com **idade** entre 0 e 19 anos

      Flexibilidade < 24 = "Fraca"

      Flexibilidade < 29 = "Regular"

      Flexibilidade < 39 = "Boa"

      Flexibilidade >= 39 = "Excelente"

    - [x] Com **idade** entre 20 e 29 anos

      Flexibilidade < 25 = "Fraca"

      Flexibilidade < 30 = "Regular"

      Flexibilidade < 40 = "Boa"

      Flexibilidade >= 40 = "Excelente"

    - [x] Com **idade** entre 30 e 39 anos

      Flexibilidade < 23 = "Fraca"

      Flexibilidade < 28 = "Regular"

      Flexibilidade < 38 = "Boa"

      Flexibilidade >= 38 = "Excelente"

    - [x] Com **idade** entre 40 e 49 anos

      Flexibilidade < 18 = "Fraca"

      Flexibilidade < 24 = "Regular"

      Flexibilidade < 35 = "Boa"

      Flexibilidade >= 35 = "Excelente"

    - [x] Com **idade** entre 50 e 59 anos

      Flexibilidade < 16 = "Fraca"

      Flexibilidade < 24 = "Regular"

      Flexibilidade < 35 = "Boa"

      Flexibilidade >= 35 = "Excelente"

    - [x] Com **idade** entre 60 e 69 anos

      Flexibilidade < 15 = "Fraca"

      Flexibilidade < 20 = "Regular"

      Flexibilidade < 33 = "Boa"

      Flexibilidade >= 33 = "Excelente"

  - [x] se **mulher**

    - [x] Com **idade** entre 0 e 19 anos

      Flexibilidade < 29 = "Fraca"

      Flexibilidade < 34 = "Regular"

      Flexibilidade < 43 = "Boa"

      Flexibilidade >= 43 = "Excelente"

    - [x] Com **idade** entre 20 e 29 anos

      Flexibilidade < 28 = "Fraca"

      Flexibilidade < 33 = "Regular"

      Flexibilidade < 41 = "Boa"

      Flexibilidade >= 41 = "Excelente"

    - [x] Com **idade** entre 30 e 39 anos

      Flexibilidade < 27 = "Fraca"

      Flexibilidade < 32 = "Regular"

      Flexibilidade < 41 = "Boa"

      Flexibilidade >= 41 = "Excelente"

    - [x] Com **idade** entre 40 e 49 anos

      Flexibilidade < 25 = "Fraca"

      Flexibilidade < 30 = "Regular"

      Flexibilidade < 38 = "Boa"

      Flexibilidade >= 38 = "Excelente"

    - [x] Com **idade** entre 50 e 59 anos

      Flexibilidade < 25 = "Fraca"

      Flexibilidade < 30 = "Regular"

      Flexibilidade < 39 = "Boa"

      Flexibilidade >= 39 = "Excelente"

    - [x] Com **idade** entre 60 e 69 anos

      Flexibilidade < 23 = "Fraca"

      Flexibilidade < 27 = "Regular"

      Flexibilidade < 35 = "Boa"

      Flexibilidade >= 35 = "Excelente"



- [x] **Teste Abdominal: (INPUT)**
  - [x] Número inteiro
  - [x] Validar vazio



- [x] **Teste Abdominal - Classificação: (SHOW)**

  - [x] se **homem**

    - [x] Com **idade** entre 20 e 29 anos

      Abdominal < 30 = "Muito Fraco"

      Abdominal < 35 = "Fraco"

      Abdominal < 40 = "Regular"

      Abdominal < 45 = "Bom"

      Abdominal >= 45 = "Excelente"

    - [x] Com **idade** entre 30 e 39 anos

      Abdominal < 22 = "Muito Fraco"

      Abdominal < 27 = "Fraco"

      Abdominal < 32 = "Regular"

      Abdominal < 37 = "Bom"

      Abdominal >= 37 = "Excelente"

    - [x] Com **idade** entre 40 e 49 anos

      Abdominal < 17 = "Muito Fraco"

      Abdominal < 21 = "Fraco"

      Abdominal < 26 = "Regular"

      Abdominal < 32 = "Bom"

      Abdominal >= 32 = "Excelente"

    - [x] Com **idade** entre 50 e 59 anos

      Abdominal < 12 = "Muito Fraco"

      Abdominal < 17 = "Fraco"

      Abdominal < 23 = "Regular"

      Abdominal < 29 = "Bom"

      Abdominal >= 29 = "Excelente"

    - [x] Com **idade** entre 60 e 69 anos

      Abdominal < 9 = "Muito Fraco"

      Abdominal < 13 = "Fraco"

      Abdominal < 19 = "Regular"

      Abdominal < 25 = "Bom"

      Abdominal >= 25 = "Excelente"

  - [x] se **mulher**

    - [x] Com **idade** entre 20 e 29 anos

      Abdominal < 26 = "Muito Fraco"

      Abdominal < 30 = "Fraco"

      Abdominal < 35 = "Regular"

      Abdominal < 40 = "Bom"

      Abdominal >= 40 = "Excelente"

    - [x] Com **idade** entre 30 e 39 anos

      Abdominal < 21 = "Muito Fraco"

      Abdominal < 25 = "Fraco"

      Abdominal < 30 = "Regular"

      Abdominal < 35 = "Bom"

      Abdominal >= 35 = "Excelente"

    - [x] Com **idade** entre 40 e 49 anos

      Abdominal < 16 = "Muito Fraco"

      Abdominal < 20 = "Fraco"

      Abdominal < 25 = "Regular"

      Abdominal < 30 = "Bom"

      Abdominal >= 30 = "Excelente"

    - [x] Com **idade** entre 50 e 59 anos

      Abdominal < 11 = "Muito Fraco"

      Abdominal < 15 = "Fraco"

      Abdominal < 20 = "Regular"

      Abdominal < 25 = "Bom"

      Abdominal >= 25 = "Excelente"

    - [x] Com **idade** entre 60 e 69 anos

      Abdominal < 6 = "Muito Fraco"

      Abdominal < 10 = "Fraco"

      Abdominal < 15 = "Regular"

      Abdominal < 20 = "Bom"

      Abdominal >= 20 = "Excelente"



- [x] **Flexão de Braço: (INPUT)**
  - [x] Número inteiro
  - [x] Validar vazio



- [x] **Flexão de Braço - Classificação: (SHOW)**

  - [x] se **homem**

    - [x] Com **idade** entre 20 e 29 anos

      Flexão de Braço < 17 = "Muito Fraco"

      Flexão de Braço < 30 = "Fraco"

      Flexão de Braço < 40 = "Regular"

      Flexão de Braço < 50 = "Bom"

      Flexão de Braço >= 50 = "Excelente"

    - [x] Com **idade** entre 30 e 39 anos

      Flexão de Braço < 14 = "Muito Fraco"

      Flexão de Braço < 22 = "Fraco"

      Flexão de Braço < 31 = "Regular"

      Flexão de Braço < 40 = "Bom"

      Flexão de Braço >= 40 = "Excelente"

    - [x] Com **idade** entre 40 e 49 anos

      Flexão de Braço < 11 = "Muito Fraco"

      Flexão de Braço < 18 = "Fraco"

      Flexão de Braço < 27 = "Regular"

      Flexão de Braço < 35 = "Bom"

      Flexão de Braço >= 35 = "Excelente"

    - [x] Com **idade** entre 50 e 59 anos

      Flexão de Braço < 8 = "Muito Fraco"

      Flexão de Braço < 15 = "Fraco"

      Flexão de Braço < 24 = "Regular"

      Flexão de Braço < 30 = "Bom"

      Flexão de Braço >= 30 = "Excelente"

    - [x] Com **idade** entre 60 e 69 anos

      Flexão de Braço < 5 = "Muito Fraco"

      Flexão de Braço < 10 = "Fraco"

      Flexão de Braço < 17 = "Regular"

      Flexão de Braço < 25 = "Bom"

      Flexão de Braço >= 25 = "Excelente"

  - [x] se **mulher**

    - [x] Com **idade** entre 20 e 29 anos

      Flexão de Braço < 7 = "Muito Fraco"

      Flexão de Braço < 16 = "Fraco"

      Flexão de Braço < 27 = "Regular"

      Flexão de Braço < 38 = "Bom"

      Flexão de Braço >= 38 = "Excelente"

    - [x] Com **idade** entre 30 e 39 anos

      Flexão de Braço < 5 = "Muito Fraco"

      Flexão de Braço < 13 = "Fraco"

      Flexão de Braço < 24 = "Regular"

      Flexão de Braço < 35 = "Bom"

      Flexão de Braço >= 35 = "Excelente"

    - [x] Com **idade** entre 40 e 49 anos

      Flexão de Braço < 4 = "Muito Fraco"

      Flexão de Braço < 10 = "Fraco"

      Flexão de Braço < 21 = "Regular"

      Flexão de Braço < 32 = "Bom"

      Flexão de Braço >= 32 = "Excelente"

    - [x] Com **idade** entre 50 e 59 anos

      Flexão de Braço < 3 = "Muito Fraco"

      Flexão de Braço < 8 = "Fraco"

      Flexão de Braço < 18 = "Regular"

      Flexão de Braço < 29 = "Bom"

      Flexão de Braço >= 29 = "Excelente"

    - [x] Com **idade** entre 60 e 69 anos

      Flexão de Braço < 2 = "Muito Fraco"

      Flexão de Braço < 6 = "Fraco"

      Flexão de Braço < 13 = "Regular"

      Flexão de Braço < 20 = "Bom"

      Flexão de Braço >= 20 = "Excelente"



## Testes Aeróbicos

- [x] **Protocolo de Cicloergômetro - Astrand-Rhyming: (INPUT)**
  - [x] Frequencia cardíaca do 5º minuto de teste (bpm) (INPUT)
  - [x] Frequencia cardíaca do 6º minuto de teste (bpm) (INPUT)
  - [x] Carga (W) (INPUT)
  - [x] Validar vazio
  - [x] Apenas números



- [x] **Protocolo de Cicloergômetro - Astrand-Rhyming: (SHOW)**

  - [x] Frequência cardíaca de esforço

    ​	FCE = (FC5' + FC6') / 2

  - [x] VO2 de Carga

    ​	VO2Carga = (0,129 + ( 0,014 * carga ))

  - [x] VO² máx.(L.min)

    ​	VO² máx.(L.min) = ((( frequencia cardíaca máxima - frequencia cardíaca de repouso ) / ( Frequência cardíaca de esforço - frequencia cardíaca de repouso )) * VO2 de Carga)

  - [x] VO² máx.(mL(kg.min)

    ​	VO² máx.(mL(kg.min) = ((1000 * VO2 máximo (litro/minuto) ) / PESO CORPORAL)



- [x] **Protocolo de corrida/caminha de 12min. - Cooper: (INPUT)**

  https://www.cdof.com.br/testes1.htm

  - [x] Distância (m)
  - [x] Apenas número
  - [x] Validar vazio



- [x] **Protocolo de corrida/caminha de 12min. - Cooper: (SHOW)**

  - [x] VO² máx.(mL(kg.min)

    VO² máx= (Dist. percorrida (metros) - 504.9) / 44.73 = VO² em ml 1/(kg.min)



- [ ] **Protocolo Caminhada de 1600 - Rockport: (INPUT)**
  - [x] Tempo em minutos e segundos (INPUT)
  - [x] Frequência cardíaca no final do teste (bpm) (INPUT)
  - [x] Validar vazio
  - [x] Apenas números



- [x] **Protocolo Caminha de 1600 - Rockport: (SHOW)**

  https://www.verywellfit.com/rockport-fitness-walking-test-calculator-3952696

  https://www.cdof.com.br/rockport.htm

  

  VO²máx (ml.kg-¹.min-¹) =
  132,853 - (0,0769 x peso corporal em libras) - (0,3877 x idade) + (6,315 x gênero) - (3,2649 x tempo) - (0,1565 x FC)

  Peso Corporal: lb (libras - 1lb = 0,454)
  Gênero: 0 p/mulheres e 1 p/ homens
  Tempo : minutos (o tempo em segundos deve ser convertido para minutos)
  FC: medida ao final da caminhada

  Peso em libras = Peso em kg / 0,454

  

- [x] **Protocolo de Banco - McArdle: (INPUT)**

  https://www.cdof.com.br/testes10.htm

  - [x] Frequência Cardíaca de Esforço no final do teste (bpm) (INPUT)
  - [x] Apenas número
  - [x] Validar vazio



- [x] **Protocolo de Banco - McArdle: (SHOW)**

  - [x] se **Homem**

  VO²máx (ml.kg-¹.min-¹) = ( 111,33 - ( 0,42 * Frequência cardíaca de esforço ))

  - [x] se **mulher**

  VO²máx (ml.kg-¹.min-¹) = ( 65,81- ( 0,1847 * Frequência cardíaca de esforço))



- [x] **VO² máx.(mL(kg.min) Previsto: (SHOW)**

  - [x] se **homem**

    VO² máx.(mL(kg.min) = ( 60 - ( 0,55 * idade ))

  - [x] se **mulher**

    VO² máx.(mL(kg.min) = ( 48 - (0,37 * idade))



- [x] **VO² máx.(mL(kg.min) - Classificação: (SHOW)**

  - [x] se **homem**

    - [x] Com **idade** entre 20 e 29 anos

      Flexão de Braço < 25 = "Muito Fraco"

      Flexão de Braço < 34 = "Fraco"

      Flexão de Braço < 43 = "Regular"

      Flexão de Braço < 54 = "Bom"

      Flexão de Braço >= 54 = "Excelente"

    - [x] Com **idade** entre 30 e 39 anos

      Flexão de Braço < 23 = "Muito Fraco"

      Flexão de Braço < 31 = "Fraco"

      Flexão de Braço < 39 = "Regular"

      Flexão de Braço < 49 = "Bom"

      Flexão de Braço >= 49 = "Excelente"

    - [x] Com **idade** entre 40 e 49 anos

      Flexão de Braço < 20 = "Muito Fraco"

      Flexão de Braço < 27 = "Fraco"

      Flexão de Braço < 36 = "Regular"

      Flexão de Braço < 45 = "Bom"

      Flexão de Braço >= 45 = "Excelente"

    - [x] Com **idade** entre 50 e 59 anos

      Flexão de Braço < 18 = "Muito Fraco"

      Flexão de Braço < 25 = "Fraco"

      Flexão de Braço < 34 = "Regular"

      Flexão de Braço < 43 = "Bom"

      Flexão de Braço >= 43 = "Excelente"

    - [x] Com **idade** entre 60 e 69 anos

      Flexão de Braço < 16 = "Muito Fraco"

      Flexão de Braço < 23 = "Fraco"

      Flexão de Braço < 31 = "Regular"

      Flexão de Braço < 41 = "Bom"

      Flexão de Braço >= 41 = "Excelente"

  - [x] se **mulher**

    - [x] Com **idade** entre 20 e 29 anos

      Flexão de Braço < 24 = "Muito Fraco"

      Flexão de Braço < 31 = "Fraco"

      Flexão de Braço < 38 = "Regular"

      Flexão de Braço < 49 = "Bom"

      Flexão de Braço >= 49 = "Excelente"

    - [x] Com **idade** entre 30 e 39 anos

      Flexão de Braço < 20 = "Muito Fraco"

      Flexão de Braço < 28 = "Fraco"

      Flexão de Braço < 34 = "Regular"

      Flexão de Braço < 45 = "Bom"

      Flexão de Braço >= 45 = "Excelente"

    - [x] Com **idade** entre 40 e 49 anos

      Flexão de Braço < 17 = "Muito Fraco"

      Flexão de Braço < 24 = "Fraco"

      Flexão de Braço < 31 = "Regular"

      Flexão de Braço < 42 = "Bom"

      Flexão de Braço >= 42 = "Excelente"

    - [x] Com **idade** entre 50 e 59 anos

      Flexão de Braço < 15 = "Muito Fraco"

      Flexão de Braço < 21 = "Fraco"

      Flexão de Braço < 28 = "Regular"

      Flexão de Braço < 38 = "Bom"

      Flexão de Braço >= 38 = "Excelente"

    - [x] Com **idade** entre 60 e 69 anos

      Flexão de Braço < 13 = "Muito Fraco"

      Flexão de Braço < 18 = "Fraco"

      Flexão de Braço < 24 = "Regular"

      Flexão de Braço < 35 = "Bom"

      Flexão de Braço >= 35 = "Excelente"



- [ ] **Velocidade de treino: (SHOW)**

  Aqui vamos determinar a velocidade de treino na esteira.  Deve ser mostrado a velocidade de acordo com os percentuais de 40% até 90%, mostrando de 5% em 5%.

  - [ ] MET's

    MET's = VO² máx.(mL(kg.min) / 3,5

  - [ ] Estado físico sedentário

    Frequência de treino  = ( percentual de trabalho / 100 )

  - [ ] Estado físico ativo

    Frequência de treino = ((MET's + percentual de trabalho ) / 100))

  - [ ] Intensidade de treino (velocidade)

  - [ ] Velocidade = ( MET's * Frequência de treino)



- [ ] **Déficit Funcional Aeróbio - FAI: (SHOW)**

  FAI == (( VO² máx.(mL(kg.min) Previsto  -  VO² máx.(mL(kg.min) )  /  VO² máx.(mL(kg.min) Previsto ) * 100

- [ ] **Déficit Funcional Aeróbio - FAI - Classificação: (SHOW)**

  FAI > 25 = "Muito Baixo"

  FAI > 9 = "Baixo"

  FAI > 0 = "Bom"

  FAI <= 0 = "Ótimo"



# Outros

- [ ] **Observações: (INPUT)**
  - [ ] Caracteres alfa numérico
  - [ ] Validar vazio
  - [ ] Aqui o avaliador colocará alguma outra observação que achar pertinente durante a realização da avaliação.













