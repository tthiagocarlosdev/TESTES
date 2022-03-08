# Projeto sistema de avaliação física

## Dados pessoais

- [ ]  **Nome: (INPUT)**
  - [ ]  Letras e símbolos
  - [ ] validação vazio

   - [ ]  **Data de nascimento: (INPUT)**
         - [ ]  data no formato brasileiro (DD/MM/AAAA)
         - [ ] validação vazio
         - [ ] validar a data
         - [ ] validar data menor que data atual

​    

​    \+ Idade: (SHOW)



​    \+ Sexo: (INPUT)

​       \- apenas números

​       \- validar vazio

​    

​    \+ Mostrar Sexo: (SHOW) 



​    \+ Profissão: (INPUT)

​      \- Letras e símbolos

​      \- validação vazio



​    \+ Email: (INPUT)

​      -validar email

​      \- validação vazio



​    \+ Telefone: (INPUT)

​      \- Apenas números

​      \- validar número de telefone

​      \- validação vazio



  ++ Anamnese ++



​    \+ Questionário - PAR-Q: (INPUT)

​    \- apenas números 1[sim] e 2[não]

​    \- validação vazio

​    \- Caso tenha algumas resposta sim uma mensagem deverá ser apresentada:

​        "Você deverá realizar um exame médico antes de iniciar suas atividades!"



​    \+ Estado Físico Atual: (INPUT)

​      \- apenas número:

​        1 - Sedentário

​        2 - Ativo

​      \- validação vazio



​    \+ Doença Pregressa: (INPUT)

​      \- Apenas números:

​        1 - sim

​        2 - não

​      \- Caso a resposta seja sim o usuário deve informar qual doença ele tem

​        input de apenas texto (Qual a doença) (INPUT)

​      \- validação vazio



​    \+ Doenças na Família: (INPUT)

​      \- Apenas números:

​        1 - sim

​        2 - não

​      \- Caso a resposta seja sim o usuário deve informar qual doença ele tem

​        input de apenas texto (Qual a doença) (INPUT)

​      \- validação vazio



​    \+ Cirurgia Realizada: (INPUT)

​      \- Apenas números:

​        1 - sim

​        2 - não

​      \- Caso a resposta seja sim o usuário deve informar qual cirugia ele tem

​        input de apenas texto (Qual Cirurgia/quanto tempo/Motivo) (INPUT)

​      \- validação vazio

​    

​    \+ Cirurgia Realizada:

​      \- Apenas números:

​        1 - sim

​        2 - não

​      \- Caso a resposta seja sim o usuário deve informar qual cirugia ele tem

​        input de apenas texto (Qual Cirurgia/quanto tempo/Motivo)

​      \- validação vazio



​    \+ Usa medicamentos: (INPUT)

​      \- Apenas números:

​        1 - sim

​        2 - não

​      \- Caso a resposta seja sim o usuário deve informar qual o medicamento. Ele tem

​        input de apenas texto (Qual medicamento) (INPUT)

​      \- validação vazio



​    \+ Lesões desportivas : (INPUT)

​      \- Apenas números:

​        1 - sim

​        2 - não

​      \- Caso a resposta seja sim o usuário deve informar qual lesão. Ele tem

​        input de apenas texto (Qual lesão) (INPUT)

​      \- validação vazio

​    

​    \+ Objetivo do treino : (INPUT)

​      \- Apenas números:

​        1 - Estético

​        2 - Bem-estar e Saúde

​        3 - Terapêutico

​        4 - Recreativo

​        5 - Desportivo

​      \- Caso a resposta seja sim o usuário deve informar qual lesão. Ele tem

​        input de apenas texto (Qual lesão) (INPUT)

​      \- validação vazio



​    \+ Horário disponível para treino (DIAS): (INPUT)

​      \- Apenas números:

​        quantidade de dias

​      \- validação vazio



​    \+ Horário disponível para treino (HORAS): (INPUT)

​      \- Apenas números:

​        Quantas horas por dia

​      \- validação vazio



  ++ Cardiorrespiratório ++

  

​    \+ Frequência Cardíaca de Repouso(INPUT)

​      \- FCR

​      \- Apenas números:

​      \- validação vazio



​    \+ Frequência Cardíaca Máxima (SHOW)

​      \- Karvonen (1957)FCM=220-IDADE



​    \+ Frequência Cardíaca de trabalho (SHOW)

​      Karvonen (1957)FC reserva (FCT):(((FCM-FCR)*%D)+FCR

​      Tabela com FCT de 40% até 90% pulando de 5% em 5%.

  

​    \+ Pressão Arterial de Repouso (mmHg) (INPUT)

​     \- sistólica/diastólica

​     \- validação vazio

​     \- apenas números

​    

​     \+ Sistólica - Classificação (SHOW)

​     PAS < 120 = "Ótima"

​     PAS < 130 = "Normal"

​     PAS < 140 = "Limítrofe"

​     PAS < 160 = "Hipertensão Estágio 1"

​     PAS < 180 = "Hipertensão Estágio 2"

​     PAS < 300 = "Hipertensão Estágio 3"



​     \+ Diastólica - Classificação (SHOW)

​    PAS < 80 = "Ótima"

​    PAS < 85 = "Normal"

​    PAS < 90 = "Limítrofe"

​    PAS < 100 = "Hipertensão Estágio 1"

​    PAS < 110 = "Hipertensão Estágio 2"

​    PAS < 300 = "Hipertensão Estágio 3"



  ++ Antropometria



​    \+ Peso Corporal (kg): (INPUT)

​      \- Apenas número real

​      \- validar vazio

​      \- Peso com no máximo três dígitos inteiros e uma casa decimal

​      

​    \+ Estatura (metros): (INPUT)

​      \- Apenas número real

​      \- Validar vazio

​      \- Estatura com um dígito inteiro e duas casa decimais



​    \+ IMC: (SHOW)

​      \- IMC = Estatura * Estatura / Peso



​    \+ IMC - Classificação: (SHOW)

​      IMC < 17 = "Magreza Grau 2"

​      IMC < 18,5 = "Abaixo do peso"

​      IMC < 25 = "Peso Normal"

​      IMC < 30 = "Sobrepeso"

​      IMC < 35 = "Obesidade nível 1"

​      IMC < 40 = "Obesidade nível 2"

​      IMC > 40 = "Obesidade Morbida"



​    \+ Perimetria: (INPUT)

​      \- Braço (cm)

​      \- Antebraço (cm)

​      \- Cintura (cm)

​      \- Quadril (cm)

​      \- Coxa (cm)

​      \- Panturrilha (cm)

​      \- Validar vazio

​      \- Apenas número real

​      