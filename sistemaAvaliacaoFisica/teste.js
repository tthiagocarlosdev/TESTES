var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')
const { aerobicFunctions } = require('./aerobicFunctions')
const { personalDataFunctions } = require('./personalDataFunctions')
const { headerFunctions } = require('./headerFunctions')
const { cardiorespiratoryFunctions } = require('./cardiorespiratoryFunctions')

const user= {}

/*
Ainda em **saf.js** vamos atribuir ao objeto _**user**_ a propriedade **wellsBenchTest** que recebe como valor o retorno da function **wellsBenchTest( )**. Em seguida, mostramos o resultado:
*/

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/* personal data functions */
/** == user name == **/

function  incorrectValue(valueA, valueB, title){
    
  if(valueA || valueB ){ 
    console.clear()
    headerFunctions.systemHeader()
    headerFunctions.subTitle(title)
    console.log('Dado Incorreto!')
  }

}

function isRegularExpression(stringValue, regex){
    
  return regex.test(stringValue) ? true : false
  
}

function userName(){
    
  let name = ''
  let itsNumber = true
  let itsLetters = false
  let regexNumber = /\d/gi
  let regexLetters = /\D/gi
  
  while(itsNumber || !itsLetters){

    name = input.question('Digite seu nome: ')
    itsNumber = isRegularExpression(name, regexNumber)
    itsLetters = isRegularExpression(name, regexLetters)
  
    incorrectValue(!itsLetters, itsNumber, "Dados Pessoais")

  }
  
  return name

}

// user.name = userName()
// console.log(user.name)

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == date of birth == **/

function validDate(informedDate, realDate){
    
  return informedDate === realDate ? true : false
  
}

function dateOfBirthHighestCurrentDate(dateOfBirth){
  var currentDate = new Date()

  // O método getTime() retorna o valor numérico correspondente ao horário da data especificada de acordo com o horário universal.
  return dateOfBirth.getTime() > currentDate.getTime() ? true : false

}

function dateOfBirth(){
  let dateInBrazilianFormat = ''
  let typedDate = ''
  const dateRegExp = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/
  let dateEqualExpressionRegex = false
  let dateValid = false
  let birthHighestCurrentDate = true

  do{
    typedDate = input.question('Digite sua data de nascimento (DD/MM/AAAA): ')
    
    dateEqualExpressionRegex = isRegularExpression(typedDate, dateRegExp)
    
    dateInBrazilianFormat = dateInBrazilFormat(typedDate)

    dateValid = validDate(typedDate, dateInBrazilianFormat)

    let dateISO = dateInISOFormat(dateInBrazilianFormat)
    
    birthHighestCurrentDate = dateOfBirthHighestCurrentDate(dateISO)

    incorrectValue(!dateEqualExpressionRegex, !dateValid, "Dados Pessoais")
    incorrectValue(false, birthHighestCurrentDate, "Dados Pessoais")

  }while(!dateEqualExpressionRegex || !dateValid || birthHighestCurrentDate)
  
  return dateInBrazilianFormat
  
}

// user.dateOfBirth = dateOfBirth()
// console.log(user.dateOfBirth)

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == date in brazil format == **/

function dateInBrazilFormat(dateInString){

  //O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.
  let arrayNumber = dateInString.split('/')
  let day = Number(arrayNumber[0])
  let month = Number(arrayNumber[1])
  let year = Number(arrayNumber[2])

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }
  
  let dateInBrazilianFormat = new Date(year, month-1, day)
  
  // O método toLocaleDateString() retorna uma string com a representação de parte da data baseando-se no idioma. Os novos argumentos locales e options deixam as aplicações especificarem o idioma cujas convenções de formatação devem ser usadas e permitem customizar o comportamento da função.
  return dateInBrazilianFormat.toLocaleDateString("pt-br", options)
  
}

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == date in ISO format == **/

// recebe uma data no formato brasileiro como string. Retorna a data no formato ISO
function dateInISOFormat(dateInString){
    
  //O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.
  let arrayNumber = dateInString.split('/')
  let day = Number(arrayNumber[0])
  let month = Number(arrayNumber[1])
  let year = Number(arrayNumber[2])

  return new Date(year, month-1, day)

}

// user.dateInISOFormat = dateInISOFormat(user)
// console.log(user.dateInISOFormat)

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == age == **/

// Recebe a data em formato ISO e retorna a idade em anos.
function age(userObject) {

  let currentDay = new Date()
  let dateInMilliseconds = Math.abs(currentDay.getTime() - userObject.dateInISOFormat.getTime())
  let age = Math.floor(dateInMilliseconds / (1000 * 60 * 60 * 24 * 365))
  
  return age

}

// user.age = age(user)
// console.log(`Idade: ${user.age}`)

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == sex number == **/

function sexNumber(){
    
  let itsNumberOneOrTwo = true
  const regexNumberOneOrTwo = /^[1]$|^[2]$/
  let sexNumber = 0

  do{
    console.log('Escolha Sexo:')
    console.log('[1] Masculino')
    console.log('[2] Feminino')
    sexNumber = input.question('')

    itsNumberOneOrTwo = isRegularExpression(sexNumber, regexNumberOneOrTwo)
    
    incorrectValue(false, !itsNumberOneOrTwo, "Dados pessoais")

  }while(!itsNumberOneOrTwo)
  
  return Number(sexNumber)

}

// user.sexNumber = sexNumber()
// console.log(`NÚMERO SEXO: ${user.sexNumber}`)

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == show sex == **/

function showSex(userObject){

  return userObject.sexNumber === 1 ? 'Masculino': 'Feminino'
  
}

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == profession == **/

function userProfession() {
    
  let profession = ''
  let itsNumber = true
  let itsLetters = false
  let regexNumber = /\d/gi
  let regexLetters = /\D/gi
  
  while(itsNumber || !itsLetters){

    profession = input.question('Digite sua profissão: ')
    itsNumber = isRegularExpression(profession, regexNumber)
    itsLetters = isRegularExpression(profession, regexLetters)
  
    incorrectValue(!itsLetters, itsNumber, "Dados Pessoais")

  }
  
  return profession

}

// user.profession = userProfession()
// console.log(`PROFISSÃO: ${user.profession}`)

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == email == **/

function validEmail(userEmail){

  let user = userEmail.substring(0, userEmail.indexOf("@"))
  let domain = userEmail.substring(userEmail.indexOf("@")+ 1, userEmail.length)
  let validations = ((user.length >=1) && 
                      (domain.length >=3) && 
                      (user.search("@")==-1) && 
                      (domain.search("@")==-1) && 
                      (user.search(" ")==-1) && 
                      (domain.search(" ")==-1) && 
                      (domain.search(".")!=-1) && 
                      (domain.indexOf(".") >=1)&& 
                      (domain.lastIndexOf(".") < domain.length - 1))

    return validations ? true : false
  
}

function userEmail(){
    
  let email = ''
  let itsEmail = false

  do{
    
    email = input.question('Digite seu email: ')

    itsEmail = validEmail(email)
    
    incorrectValue(!itsEmail, false, "Dados Pessoais")

  }while(!itsEmail)
  
  return email

}

// user.userEmail = userEmail()
// console.log(`EMAIL: ${user.userEmail}`)

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == email == **/

function phoneNumber(){
  
  let phoneNumber = 0
  let regexPhone = /^([0-9]{2})[0-9]{9}$/
  let istPhoneNumber = true

  do{
    
    phoneNumber = input.question('Digite seu número de celular com DDD: ')
    istPhoneNumber = isRegularExpression(phoneNumber, regexPhone)
    incorrectValue(false, !istPhoneNumber, "Dados Pessoais")

  }while(!istPhoneNumber)
  
  return phoneNumber

}

// user.phoneNumber = phoneNumber()
// console.log(`TELEFONE: ${user.phoneNumber}`)

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Questionnaire - PAR-Q == **/

function questionnairePARQ(){

  let questionnairePARQ = [
    "Seu médico já mencionou alguma vez que você tem uma condição cardíaca e que você só deve realizar atividade física recomendada por um médico?",
    "Você sente dor no tórax quando realiza atividade física?",
    "No mês passado, você teve dor torácica quando não estava realizando atividade física?",
    "Você perdeu o equilíbrio por causa de tontura ou alguma vez perdeu a consciência?",
    "Você tem algum problema ósseo ou de articulação que poderia piorar em conseqüência de uma alteração em sua atividade física?",
    "Seu médico está prescrevendo medicamentos para sua pressão ou condição cardíaca?",
    "Você teria alguma razão para não praticar exercício físico ou outro problema que impeça?",
  ]
  let questionnairePARQAnswer = []
  let itsNumberOneOrTwo = true
  let regexNumber = /^[1]$|^[2]$/

  for(let i = 0; i < questionnairePARQ.length; i++){
    
    do{

      console.log(`${[i+1]} - ${questionnairePARQ[i]}`)
      console.log('Escolha:')
      console.log('[1] Sim')
      console.log('[2] Não')
      questionnairePARQAnswer[i] = input.question("")
      itsNumberOneOrTwo = isRegularExpression(questionnairePARQAnswer[i], regexNumber)
      incorrectValue(false, !itsNumberOneOrTwo, "Anamnese")

    }while(!itsNumberOneOrTwo)
    
  }
  
  if(questionnairePARQAnswer.includes("1")){
     return "Você deverá realizar um exame médico antes de iniciar suas atividades!"
  } else {
    return "Todas as respostas do questionário foram 'Não'!"
  }

}

// user.questionnairePARQ = questionnairePARQ()
// console.log(`Questionário PAR-Q: ${user.questionnairePARQ}`)

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Current Physical State == **/

function currentPhysicalState(){

  let currentPhysicalState = 0
  let itsNumberOneOrTwo = true
  let regexNumber = /^[1]$|^[2]$/
  
  do{

    console.log('Qual seu estado físico atualmente? ')
    console.log(`[1] Sedentário`)
    console.log(`[2] Ativo`)
    currentPhysicalState = input.question('')
    itsNumberOneOrTwo = isRegularExpression(currentPhysicalState, regexNumber)
    incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")

  }while(!itsNumberOneOrTwo)

  return Number(currentPhysicalState)

}

function showPhysicalState(user){

  return user.currentPhysicalState === 1 ? 'Sedentário' : 'Ativo'

}

// user.currentPhysicalState = currentPhysicalState()
// console.log(`ESTADO FÍSICO: ${showPhysicalState(user)}`)

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == choice == **/

function choice(){

  console.log('Escolha:')
  console.log('[1] Sim')
  console.log('[2] Não')

}
/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Past Illness == **/

// function pastIllness(){

//   let pastIllnessNumber = 2
//   let pastIllnessText = ''
//   let itsNumberOneOrTwo = true
//   let regexNumber = /^[1]$|^[2]$/
//   let isAlphanumericCharacters = true
//   const regexAlphanumericCharacters = /\D|\d/ 

//   do{

//     console.log(`Avaliado possue doença pregressa?`)
//     choice()
//     pastIllnessNumber = Number(input.question(''))

//     itsNumberOneOrTwo = isRegularExpression(pastIllnessNumber, regexNumber)
//     incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")

//     if(pastIllnessNumber === 1){
      
//       do{

//         console.log(`Qual doença?`)
//         pastIllnessText = input.question('')
//         isAlphanumericCharacters = isRegularExpression(pastIllnessText, regexAlphanumericCharacters)
//         incorrectValue(false, !isAlphanumericCharacters, "Anamnese")

//       }while(!isAlphanumericCharacters)
      
//     } else {
//       pastIllnessText = `Sem doença pregressa.`
//     }

//   }while(!itsNumberOneOrTwo)

//     return pastIllnessText

// }

// user.pastIllness = pastIllness()
// console.log(`DOENÇA PREGRESSA: ${user.pastIllness}`)

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/* physical assessment system */
headerFunctions.systemHeader()
// user.name = userName()
// user.dateOfBirth = dateOfBirth()
// user.dateInISOFormat = dateInISOFormat(user.dateOfBirth)
// user.age = age(user)
// user.sexNumber = sexNumber()
// user.sex = showSex(user)
// user.profession = userProfession()
// user.userEmail = userEmail()
// user.phoneNumber = phoneNumber()

// console.log(`NOME: ${user.name}`)
// console.log(`DATA ANIVERSÁRIO: ${user.dateOfBirth}`)
// console.log(`DATA ISO: ${user.dateInISOFormat}`)
// console.log(`Idade: ${user.age}`)
// console.log(`NÚMERO SEXO: ${user.sexNumber}`)
// console.log(`SEXO: ${user.sex}`)
// console.log(`PROFISSÃO: ${user.profession}`)
// console.log(`EMAIL: ${user.userEmail}`)
// console.log(`TELEFONE: ${user.phoneNumber}`)

// user.questionnairePARQ = questionnairePARQ()
// user.currentPhysicalState = currentPhysicalState()
// user.pastIllness = pastIllness()

// headerFunctions.baseboard()
// console.log(`Questionário PAR-Q: ${user.questionnairePARQ}`)
// console.log(`ESTADO FÍSICO: ${showPhysicalState(user)}`)
// console.log(`DOENÇA PREGRESSA: ${user.pastIllness}`)
// headerFunctions.baseboard()
// console.log(user)


/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */


function questions(object){
  
  let pastIllnessNumber = 2
  let pastIllnessText = ''
  let itsNumberOneOrTwo = true
  const regexNumberOneOrTwo = /^[1]$|^[2]$/
  let isAlphanumericCharacters = true
  const regexAlphanumericCharacters = /\D|\d/ 

  do{

    console.log(object.question)
    choice()
    pastIllnessNumber = Number(input.question(''))

    itsNumberOneOrTwo = isRegularExpression(pastIllnessNumber, regexNumberOneOrTwo)
    incorrectValue(!itsNumberOneOrTwo, false, object.title)

    if(pastIllnessNumber === 1){
      
      do{

        console.log(object.whatQuestion)
        pastIllnessText = input.question('')
        isAlphanumericCharacters = isRegularExpression(pastIllnessText, regexAlphanumericCharacters)
        incorrectValue(false, !isAlphanumericCharacters, object.title)

      }while(!isAlphanumericCharacters)
      
    } else {
      pastIllnessText = object.noQuestion
    }

  }while(!itsNumberOneOrTwo)

    return pastIllnessText

}

const pastIllness = {
  question: `Avaliado possue doença pregressa?`,
  title: "Anamnese",
  whatQuestion: `Qual doença?`,
  noQuestion: `Sem doença pregressa.`,
}
const illnessesInTheFamily = {
  question: `Avaliado possue alguém da família com doença pregressa?`,
  title: "Anamnese",
  whatQuestion: `Qual doença?`,
  noQuestion: `Sem doença pregressa na família.`,
}
const surgeryPerformed = {
  question: `Avaliado já realizou precedimento cirúrgico?`,
  title: "Anamnese",
  whatQuestion: `Qual cirurgia?`,
  noQuestion: `Nunca realizou procedimento cirúrgico.`,
}
const useMedication = {
  question: `Avaliado faz uso de medicamentos?`,
  title: "Anamnese",
  whatQuestion: `Qual medicamento?`,
  noQuestion: `Não faz uso de medicamento.`,
}
const sportsInjuries = {
  question: `Avaliado já sofreu alguma lesão desportiva?`,
  title: "Anamnese",
  whatQuestion: `Qual lesão?`,
  noQuestion: `Nunca sofreu lesão desportiva.`,
}
/*
user.questions = {pastIllness, illnessesInTheFamily, surgeryPerformed, useMedication, sportsInjuries}
console.log(user)

user.pastIllness = questions(user.questions.pastIllness)
user.illnessesInTheFamily = questions(user.questions.illnessesInTheFamily)
user.surgeryPerformed = questions(user.questions.surgeryPerformed)
user.useMedication = questions(user.questions.useMedication)
user.sportsInjuries = questions(user.questions.sportsInjuries)

console.log(`DOENÇAS PREGRESSAS: ${user.pastIllness}`)
console.log(`DOENÇAS PREGRESSAS NA FAMÍLIA: ${user.illnessesInTheFamily}`)
console.log(`CIRURGIAS: ${user.surgeryPerformed}`)
console.log(`USA MEDICAMENTOS: ${user.useMedication}`)
console.log(`LESÕES ESPORTIVAS: ${user.sportsInjuries}`)
*/
/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Illnesses in the Family == **/


// function illnessesInTheFamily(){

//   let illnessesFamilyNumber = 2
//   let illnessesFamilyText = ''
//   let itsNumberOneOrTwo = true
//   let regexNumber = /^[1]$|^[2]$/
//   let itsLetters = true

//   do{

//     console.log(`Avaliado possue alguém da família com doença pregressa?`)
//     anamnesisFunctions.choice()
//     illnessesFamilyNumber = Number(input.question(''))

//     itsNumberOneOrTwo = validationFunctions.isRegularExpression(illnessesFamilyNumber, regexNumber)
//     validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")

//     if(illnessesFamilyNumber === 1){
      
//       do{

//         console.log(`Qual doença?`)
//         illnessesFamilyText = input.question('')
//         itsLetters = validationFunctions.itsLetters(illnessesFamilyText)
//         validationFunctions.incorrectValue(false, !itsLetters, "Anamnese")

//       }while(!itsLetters)
      
//     } else {
//       illnessesFamilyText = `Sem doença pregressa na família.`
//     }

//   }while(!itsNumberOneOrTwo)

//     return illnessesFamilyText

// }

// console.log(illnessesInTheFamily())

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Surgery Performed == **/

// function surgeryPerformed(){

//   let surgeryPerformedNumber = 2
//   let surgeryPerformedText = ''
//   let itsNumberOneOrTwo = true
//   let regexNumber = /^[1]$|^[2]$/
//   let itsLetters = true

//   do{

//     console.log(`Avaliado já realizou precedimento cirúrgico?`)
//     anamnesisFunctions.choice()
//     surgeryPerformedNumber = Number(input.question(''))

//     itsNumberOneOrTwo = validationFunctions.isRegularExpression(surgeryPerformedNumber, regexNumber)
//     validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")

//     if(surgeryPerformedNumber === 1){
      
//       do{

//         console.log(`Qual cirurgia?`)
//         surgeryPerformedText = input.question('')
//         itsLetters = validationFunctions.itsLetters(surgeryPerformedText)
//         validationFunctions.incorrectValue(false, !itsLetters, "Anamnese")

//       }while(!itsLetters)
      
//     } else {
//       surgeryPerformedText = `Nunca realizou procedimento cirúrgico.`
//     }

//   }while(!itsNumberOneOrTwo)

//     return surgeryPerformedText

// }

// console.log(surgeryPerformed())

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Use Medication == **/

// function useMedication(){

//   let useMedicationNumber = 2
//   let useMedicationText = ''
//   let itsNumberOneOrTwo = true
//   let regexNumber = /^[1]$|^[2]$/
//   let itsLetters = true

//   do{

//     console.log(`Avaliado faz uso de medicamentos?`)
//     anamnesisFunctions.choice()
//     useMedicationNumber = Number(input.question(''))

//     itsNumberOneOrTwo = validationFunctions.isRegularExpression(useMedicationNumber, regexNumber)
//     validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")

//     if(useMedicationNumber === 1){
      
//       do{

//         console.log(`Qual medicamento?`)
//         useMedicationText = input.question('')
//         itsLetters = validationFunctions.itsLetters(useMedicationText)
//         validationFunctions.incorrectValue(false, !itsLetters, "Anamnese")

//       }while(!itsLetters)
      
//     } else {
//       useMedicationText = `Não faz uso de medicamento.`
//     }

//   }while(!itsNumberOneOrTwo)

//     return useMedicationText

// }

// console.log(useMedication())

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Sports Injuries == **/

// function sportsInjuries(){
  
//   let sportsInjuriesNumber = 2
//   let sportsInjuriesText = ''
//   let itsNumberOneOrTwo = true
//   let regexNumber = /^[1]$|^[2]$/
//   let itsLetters = true

//   do{

//     console.log(`Avaliado já sofreu alguma lesão desportiva?`)
//     anamnesisFunctions.choice()
//     sportsInjuriesNumber = Number(input.question(''))

//     itsNumberOneOrTwo = validationFunctions.isRegularExpression(sportsInjuriesNumber, regexNumber)
//     validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")

//     if(sportsInjuriesNumber === 1){
      
//       do{

//         console.log(`Qual lesão?`)
//         sportsInjuriesText = input.question('')
//         itsLetters = validationFunctions.itsLetters(sportsInjuriesText)
//         validationFunctions.incorrectValue(false, !itsLetters, "Anamnese")

//       }while(!itsLetters)
      
//     } else {
//       sportsInjuriesText = `Nunca sofreu lesão desportiva.`
//     }

//   }while(!itsNumberOneOrTwo)

//     return sportsInjuriesText

// }

// console.log(sportsInjuries())

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Training Objective == **/

function trainingObjective(){

  let trainingObjectiveAnswer = ''
  let regexNumber = /^[1-5]$/
  let isNumberOneToFive = true

  do{

    console.log('Qual é o objetivo do seu treino?')
    console.log(`[1] Estético`)
    console.log(`[2] Bem-estar e Saúde`)
    console.log(`[3] Terapêutico`)
    console.log(`[4] Recreativo`)
    console.log(`[5] Desportivo`)
    trainingObjectiveAnswer = Number(input.question(''))

    isNumberOneToFive = validationFunctions.isRegularExpression(trainingObjectiveAnswer, regexNumber)
    validationFunctions.incorrectValue(!isNumberOneToFive, false, "Anamnese")

  }while(!isNumberOneToFive)
  
  switch (trainingObjectiveAnswer) {
    case 1:
      return `Estético`
      break
    case 2:
      return `Bem-estar e Saúde`
      break
    case 3:
      return `Terapêutico`
      break
    case 4:
      return `Recreativo`  
      break
    default:
      return `Desportivo`
      break
  }

}

// console.log(trainingObjective())

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Days Available For Training == **/

function daysAvailableForTraining(){

 let daysAvailableForTraining = 0
 let isNumberOneToSeven = true
 let regexNumber = /^[1-7]$/
 
 do{

  daysAvailableForTraining = input.question('Digite a quantidade de dias disponíveis para treinar: ')

  isNumberOneToSeven = validationFunctions.isRegularExpression(daysAvailableForTraining, regexNumber)
  validationFunctions.incorrectValue(!isNumberOneToSeven, false, "Anamnese")

 }while(!isNumberOneToSeven)

 return daysAvailableForTraining

}

// console.log(daysAvailableForTraining())

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Time Available Per Training == **/

function timeAvailablePerTraining(){

  let timeAvailablePerTraining = 0
  let isNumberFromOneToThreeHundred = true
  let regexNumber = /(^[1-9]$)|(^[1-9][0-9]$)|(^[1-2][0-9]{2}$)|(^[3][0][0]$)/

  do{

    timeAvailablePerTraining = input.question('Digite o tempo disponível para treino (min): ')
    isNumberFromOneToThreeHundred = validationFunctions.isRegularExpression(timeAvailablePerTraining, regexNumber)
    validationFunctions.incorrectValue(!isNumberFromOneToThreeHundred, false, "Anamnese")
 
  }while(!isNumberFromOneToThreeHundred)
   

  return timeAvailablePerTraining

}

// console.log(timeAvailablePerTraining())
/*
/(^[1-9]{1}$)|(^[1-9]{1}[0-9]$)|(^[1-2]{1}[0-9][0-9]$)|(^[3][0][0]$)/
*/

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == cardiorespiratory == **/
/** == Resting heart rate == **/

function restingHeartRate(){

  let restingHeartRate = 0
  let isANumberFromZeroToTwoHundredAndTwenty = true
  let regexNumber = /(^[0-9]$)|(^[1-9][0-9]$)|(^[1][0-9]{2}$)|(^[2][0][0]$)/

  do{

    restingHeartRate = input.question('Digite a Frequência Cardíaca de Repouso (bpm): ')
    isANumberFromZeroToTwoHundredAndTwenty = validationFunctions.isRegularExpression(restingHeartRate, regexNumber)
    validationFunctions.incorrectValue(!isANumberFromZeroToTwoHundredAndTwenty, false, "Cardiorrespiratório")
 
  }while(!isANumberFromZeroToTwoHundredAndTwenty)
   
  return restingHeartRate

}

// console.log(restingHeartRate())
// user.restingHeartRate = restingHeartRate()
user.restingHeartRate = 60

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == maximum heart rate == **/

function maximumHeartRate(userObject){

  return Number(220 - userObject.age)

}
user.age = 34
// console.log(maximumHeartRate(34))
// user.maximumHeartRate = maximumHeartRate(user)

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == working heart rate == **/
const { percentageValues } = require('./cardiorespiratoryFunctions')

user.percentageValues = percentageValues
// console.log(user.percentageValues)

function testWorkingHeartRate(userObject){

  let restingHeartRate = userObject.restingHeartRate
  let maximumHeartRate = userObject.maximumHeartRate
  let workingHeartRateValues = []

  for(let percentage of userObject.percentageValues){
    workingHeartRateValues.push(Math.round(((( maximumHeartRate - restingHeartRate )* (percentage / 100) ) + restingHeartRate)))
  }

  return workingHeartRateValues
}

function testShowWorkingHeartRate(userObject){
  
  let percentage = userObject.percentageValues
  let workingHeartRate = userObject.workingHeartRate

  console.log(`Frequência Cardíaca de Treino:`)
  for(let i = 0; i < workingHeartRate.length; i++){
    console.log(`       ${percentage[i]}% = ${workingHeartRate[i]} bpm`)
  }

}

// user.workingHeartRate = testWorkingHeartRate(user)
// console.log(user.workingHeartRate)
// testShowWorkingHeartRate(user)

function workingHeartRate(userObject){

  let workingHeartRateValues = []
  let percentageValues = []

  for(let i = 40; i <= 95; i+=5){
    workingHeartRateValues.push(Math.round(((( userObject.maximumHeartRate - userObject.restingHeartRate )* (i / 100) ) + userObject.restingHeartRate)))
    percentageValues.push(i)
  }

  return {workingHeartRateValues, percentageValues}

}

function showWorkingHeartRate(userObject){

  console.log(`Frequência Cardíaca de Treino:`)
  for(let i = 0; i < userObject.workingHeartRate.workingHeartRateValues.length; i++){
    console.log(`        ${userObject.workingHeartRate.percentageValues[i]}% = ${userObject.workingHeartRate.workingHeartRateValues[i]} bpm`)
  }

}


// workingHeartRate(60, 186)
// headerFunctions.subTitle("Cardiorespiratório")
// console.log(`Frequência Cardíaca de Repouso: ${user.restingHeartRate} bpm.`)
// console.log(`Frequência Cardíaca Máxima: ${user.maximumHeartRate} bpm.`)
// user.workingHeartRate = workingHeartRate(user)
// console.log(user)
// showWorkingHeartRate(user)
// headerFunctions.baseboard()

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Resting Blood Pressure == **/


function bloodPressure(){

  let fullBloodPressure = { }
  let bloodPressure = 0
  const regexBloodPressure = /^(([0-9])|([1-9][0-9])|([1-2][0-9]{2})|([3][0][0]))\/(([0-9])|([1-9][0-9])|([1-2][0-9]{2})|([3][0][0]))$/
  let itsRegexBloodPressure = true

  do{

    bloodPressure = input.question('Digite a pressão arterial [000/000] (mmHg): ')
    itsRegexBloodPressure = validationFunctions.isRegularExpression(bloodPressure, regexBloodPressure)
    validationFunctions.incorrectValue(false, !itsRegexBloodPressure, "Cardiorrespiratório")

  }while(!itsRegexBloodPressure)

  fullBloodPressure.systolic = Number(bloodPressure.substring(0, bloodPressure.indexOf("/")))
  fullBloodPressure.diastolic = Number(bloodPressure.substring(bloodPressure.indexOf("/")+ 1, bloodPressure.length))
  fullBloodPressure.bloodPressureString = bloodPressure

   return fullBloodPressure

}

// console.log(bloodPressure())

function restingBloodPressure(){

  let bloodPressure = {
    systolic: 0, 
    diastolic: 0
  }
  let systolicIsNumber = true
  let diastolicIsNumber = true


  do{

    bloodPressure.systolic = input.question('Digite a pressão sistólica (mmHg): ')
    bloodPressure.diastolic = input.question('Digite a pressão diastólica (mmHg): ')

    systolicIsNumber = validationFunctions.itsNumber(bloodPressure.systolic)
    diastolicIsNumber = validationFunctions.itsNumber(bloodPressure.diastolic)
    validationFunctions.incorrectValue(!systolicIsNumber, !diastolicIsNumber, "Cardiorrespiratório")

  }while(!systolicIsNumber || !diastolicIsNumber)

   return bloodPressure

}

// console.log(restingBloodPressure())

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Blood Pressure - Classification == **/

// deleted
function classificationOfBloodPressure(objectValue){

  let classification = {
    systolicClassification: '',
    diastolicClassification: '',
  }

  /* Systolic Classification */
  if(objectValue.systolic < 120){
    classification.systolicClassification = 'Ótima'
  } else if(objectValue.systolic < 130){
    classification.systolicClassification = 'Normal'
  } else if(objectValue.systolic < 140){
    classification.systolicClassification = 'Limítrofe'
  } else if(objectValue.systolic < 160){
    classification.systolicClassification = 'Hipertensão Estágio 1'
  } else if(objectValue.systolic < 180){
    classification.systolicClassification = 'Hipertensão Estágio 2'
  } else{
    classification.systolicClassification = 'Hipertensão Estágio 3'
  }

  /* Diastolic Classification */
  if(objectValue.diastolic < 80){
    classification.diastolicClassification = 'Ótima'
  } else if(objectValue.diastolic < 85){
    classification.diastolicClassification = 'Normal'
  } else if(objectValue.diastolic < 90){
    classification.diastolicClassification = 'Limítrofe'
  } else if(objectValue.diastolic < 100){
    classification.diastolicClassification = 'Hipertensão Estágio 1'
  } else if(objectValue.diastolic < 110){
    classification.diastolicClassification = 'Hipertensão Estágio 2'
  } else{
    classification.diastolicClassification = 'Hipertensão Estágio 3'
  }

  return classification

}

// let bloodPressure = {
//   systolic: 120, 
//   diastolic: 80
// }

// console.log(classificationOfBloodPressure(bloodPressure))

function classificationOfBloodPressure(objectValue){

  let classification = { }
  const systolic = objectValue.restingBloodPressure.systolic
  const diastolic = objectValue.restingBloodPressure.diastolic

  /* Systolic Classification */
  const greatSystolic = systolic < 120
  const normalSystolic = systolic < 130
  const borderlineSystolic = systolic < 140
  const systolicHypertensionStageOne = systolic < 160
  const systolicHypertensionStageTwo = systolic < 180

  if(greatSystolic){
    classification.systolicClassification = 'Ótima'
  } else if(normalSystolic){
    classification.systolicClassification = 'Normal'
  } else if(borderlineSystolic){
    classification.systolicClassification = 'Limítrofe'
  } else if(systolicHypertensionStageOne){
    classification.systolicClassification = 'Hipertensão Estágio 1'
  } else if(systolicHypertensionStageTwo){
    classification.systolicClassification = 'Hipertensão Estágio 2'
  } else{
    classification.systolicClassification = 'Hipertensão Estágio 3'
  }

  /* Diastolic Classification */
  const greatDiastolic = diastolic < 80
  const normalDiastolic = diastolic < 85
  const borderlineDiastolic = diastolic < 90
  const diastolicHypertensionStageOne = diastolic < 100
  const diastolicHypertensionStageTwo = diastolic < 110
  
  if(greatDiastolic){
    classification.diastolicClassification = 'Ótima'
  } else if(normalDiastolic){
    classification.diastolicClassification = 'Normal'
  } else if(borderlineDiastolic){
    classification.diastolicClassification = 'Limítrofe'
  } else if(diastolicHypertensionStageOne){
    classification.diastolicClassification = 'Hipertensão Estágio 1'
  } else if(diastolicHypertensionStageTwo){
    classification.diastolicClassification = 'Hipertensão Estágio 2'
  } else{
    classification.diastolicClassification = 'Hipertensão Estágio 3'
  }

  return classification

}

// user.restingBloodPressure = bloodPressure()
// user.classificationBloodPressure = classificationOfBloodPressure(user)
// console.log(user.classificationBloodPressure)

// console.log(`Classificação da Pressão Arterial`)
// console.log(`Sistólica: ${user.classificationBloodPressure.systolicClassification} / Diastólica: ${user.classificationBloodPressure.diastolicClassification}`)



/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == anthropometryFunctions == **/
/** == Body Weight == **/

// deleted
function bodyWeight(){

  let bodyWeight = 0
  let itsRealNumber = true
  let regularExpressionFromZeroToThousand = /(^[0-9]\.[0-9]$)|(^[1-9][0-9]\.[0-9]$)|(^[1-9][0-9]{2}\.[0-9]$)|(^[1][0]{3}\.[0-9]$)/

  do{

    bodyWeight = input.question('Digite seu peso (kg)[00.0]: ')
    itsRealNumber = validationFunctions.isRegularExpression(bodyWeight, regularExpressionFromZeroToThousand)
    validationFunctions.incorrectValue(false, !itsRealNumber, "Antropometria")

  }while(!itsRealNumber)

  return bodyWeight
  
}

function bodyWeight(){

  let bodyWeight = 0
  let itsRegexNumber = true
  let regexFromZeroToThousand = /(^[0-9]\.[0-9]$)|(^[1-9][0-9]\.[0-9]$)|(^[1-9][0-9]{2}\.[0-9]$)|(^[1][0]{3}\.[0]$)|(^[0-9]$)|(^[1-9][0-9]$)|(^[1-9][0-9]{2}$)|(^[1][0]{3}$)/

  do{

    bodyWeight = input.question('Digite seu peso [0000.0](kg): ')
    itsRegexNumber = validationFunctions.isRegularExpression(bodyWeight, regexFromZeroToThousand)
    validationFunctions.incorrectValue(false, !itsRegexNumber, "Antropometria")

  }while(!itsRegexNumber)

  return Number(bodyWeight)
  
}

// console.log(bodyWeight())

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Stature == **/

// function stature(){

//   let bodyStature = 0
//   let itsRealNumber = true
//   let regularExpressionZeroToNinePointNinetyNine = /(^[0-9]\.([0-9]){2}$)/

//   do{

//     bodyStature =input.question('Digite sua estatura (m)[0.00]: ')
//     itsRealNumber = validationFunctions.isRegularExpression(bodyStature, regularExpressionZeroToNinePointNinetyNine)
//     validationFunctions.incorrectValue(false, !itsRealNumber, "Antropometria")

//   }while(!itsRealNumber)
  
//   return bodyStature

// }

function stature(){

  let bodyStature = 0
  let itsRegexNumber = true
  let regexZeroToNinePointNinetyNine = /(^[0-9]\.([0-9]){2}$)/

  do{

    bodyStature =input.question('Digite sua estatura [0.00](m): ')
    itsRegexNumber = validationFunctions.isRegularExpression(bodyStature, regexZeroToNinePointNinetyNine)
    validationFunctions.incorrectValue(false, !itsRegexNumber, "Antropometria")

  }while(!itsRegexNumber)
  
  return Number(bodyStature)

}

// console.log(stature())

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Body Mass Index - BMI == **/

function bodyMassIndex(objectValue){

  const weight = objectValue.bodyWeight
  const height = objectValue.bodyStature
  // IMC = peso / estatura * estatura
  return Number((weight / (height * height)).toFixed(2))

}

user.bodyWeight = 95.0
user.bodyStature = 1.86

let peso = 95.0
let altura = 1.86

// user.bodyMassIndex = bodyMassIndex(user)
// console.log(user.bodyMassIndex)

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Body Mass Index Classification == **/

// deleted
function bodyMassIndexClassification(bodyMassIndexValue){

  let classification = ``

  if(bodyMassIndexValue < 17){
    classification = `Magreza Grau 2`
  } else if(bodyMassIndexValue < 18.5){
    classification = `Abaixo do peso`
  } else if(bodyMassIndexValue < 25){
    classification = `Peso Normal`
  } else if(bodyMassIndexValue < 30){
    classification = `Sobrepeso`
  } else if(bodyMassIndexValue < 35){
    classification = `Obesidade nível 1`
  } else if(bodyMassIndexValue < 40){
    classification = `Obesidade nível 2`
  } else{
    classification = `Obesidade Morbida`
  }

  return classification

}

// console.log(bodyMassIndexClassification(16.9))
// console.log(bodyMassIndexClassification(17.8))
// console.log(bodyMassIndexClassification(22.6))
// console.log(bodyMassIndexClassification(27))
// console.log(bodyMassIndexClassification(33.8))
// console.log(bodyMassIndexClassification(38.9))
// console.log(bodyMassIndexClassification(40))

function bodyMassIndexClassification(objectValue){

  const bodyMassIndexValue = objectValue.bodyMassIndex
  let classification = ``
  const gradeTwoThinness = bodyMassIndexValue < 17
  const underWeight = bodyMassIndexValue < 18.5
  const normalWeight = bodyMassIndexValue < 25
  const overweight = bodyMassIndexValue < 30
  const levelOneObesity = bodyMassIndexValue < 35
  const levelTwoObesity = bodyMassIndexValue < 40

  if(gradeTwoThinness){
    classification = `Magreza Grau 2`
  } else if(underWeight){
    classification = `Abaixo do peso`
  } else if(normalWeight){
    classification = `Peso Normal`
  } else if(overweight){
    classification = `Sobrepeso`
  } else if(levelOneObesity){
    classification = `Obesidade nível 1`
  } else if(levelTwoObesity){
    classification = `Obesidade nível 2`
  } else{
    classification = `Obesidade Morbida`
  }

  return classification

}

// console.log(bodyMassIndexClassification(user))


/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Body Perimetry == **/

// deleted
function bodyPerimetry(){

  let measurementPoints = {
    Braço: 0,
    Antebraço: 0,
    Cintura: 0,
    Quadril: 0,
    Coxa: 0,
    Panturrilha: 0
  } 
  let itsRealNumber = true
  let regexThreeWholeDigitsAndOneDecimalPlace = /(^[0-9]\.[0-9]$)|(^[0-9]{2}\.[0-9]$)|(^[0-9]{3}\.[0-9]$)/

  for(let bodyPart in measurementPoints){

    do{

      measurementPoints[bodyPart] = input.question(`Digite a perimetria - ${bodyPart} (cm)[000.0]: `)

      itsRealNumber = validationFunctions.isRegularExpression(measurementPoints[bodyPart], regexThreeWholeDigitsAndOneDecimalPlace)
      validationFunctions.incorrectValue(false, !itsRealNumber, "Antropometria")

    }while(!itsRealNumber)
    
  }

  return measurementPoints

}
// let perimetriaCoporporal = bodyPerimetry()

function bodyPerimetry(){

  let measurementPoints = {
    Braço: 0,
    Antebraço: 0,
    Cintura: 0,
    Quadril: 0,
    Coxa: 0,
    Panturrilha: 0
  } 
  let itsRegexNumber = true
  const regularExpressionFromZeroToThousand = /(^[0-9]\.[0-9]$)|(^[1-9][0-9]\.[0-9]$)|(^[1-9][0-9]{2}\.[0-9]$)|(^[1][0]{3}$)|(^[0-9]$)|(^[1-9][0-9]$)|(^[1-9][0-9]{2}$)|(^[1][0]{3}$)/

  for(let bodyPart in measurementPoints){

    do{

      measurementPoints[bodyPart] = input.question(`Digite a perimetria - ${bodyPart} [000.0](cm): `)

      itsRegexNumber = validationFunctions.isRegularExpression(measurementPoints[bodyPart], regularExpressionFromZeroToThousand)
      validationFunctions.incorrectValue(false, !itsRegexNumber, "Antropometria")

    }while(!itsRegexNumber)
    
  }

  return measurementPoints

}

// user.bodyPerimeter = bodyPerimetry()
// console.log(user.bodyPerimeter)

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Show Perimeter == **/

function showPerimeter(objectValue){
  
  const perimeters = objectValue.bodyPerimeter
  console.log('Perimetria Corporal:')
  
  for(let property in perimeters){
    console.log(`${property}: ${perimeters[property]} cm`) 
  }

}

// console.log(showPerimeter(user))

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Hip Waist Ratio == **/

function hipWaistRatio(waistPerimetry, hipPerimetry){

  return (waistPerimetry/ hipPerimetry).toFixed(2)

}

// console.log(hipWaistRatio(perimetriaCoporporal.Cintura, perimetriaCoporporal.Quadril))

function hipWaistRatio(objectValue){

  const waistPerimetry = objectValue.bodyPerimeter.Cintura
  const hipPerimetry = objectValue.bodyPerimeter.Quadril

  return Number((waistPerimetry/ hipPerimetry).toFixed(2))

}

// user.hipWaistRatio = hipWaistRatio(user)
// console.log(user.hipWaistRatio)

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Waist Hip Ratio - Classification == **/  

function waistHipRatioClassification(objectValue){

  const sexValue = objectValue.sexNumber
  const ageValue = objectValue.age
  const waistHipRatioValue = objectValue.hipWaistRatio

  let classification = ``
  const unidentifiedSex = `[ERROR] Sexo não identificado!` 
  const ageBetweenTwentyAndTwentyNine = ageValue >= 20 && ageValue <= 29
  const ageBetweenThirtyAndThirtyNine = ageValue >= 30 && ageValue <= 39
  const ageBetweenFortyAndFortyNine = ageValue >= 40 && ageValue <= 49
  const ageBetweenFiftyAndFiftyNine = ageValue >= 50 && ageValue <= 59
  const ageBetweenSixtyAndSixtyNine = ageValue >= 60 && ageValue <= 69
  const Lowrisk = `Baixo Risco`
  const ModerateRisk = `Moderado Risco`
  const Highrisk = `Alto Risco`
  const VeryHighRisk = `Muito Alto Risco`
  const classificationNotAppliedToAge = `Esta classificação não se aplica a sua idade!`

  switch (sexValue) {

    // masculine - masculine - masculine - masculine - masculine
    case 1:
      
      if(ageBetweenTwentyAndTwentyNine){
        
        if(waistHipRatioValue < 0.83){
          classification = Lowrisk
        } else if(waistHipRatioValue < 0.89){
          classification = ModerateRisk
        } else if(waistHipRatioValue < 0.95){
          classification = Highrisk
        } else {
          classification = VeryHighRisk
        }
        
      } else if(ageBetweenThirtyAndThirtyNine){
        
        if(waistHipRatioValue < 0.84){
          classification = Lowrisk
        } else if(waistHipRatioValue < 0.92){
          classification = ModerateRisk
        } else if(waistHipRatioValue < 0.97){
          classification = Highrisk
        } else {
          classification = VeryHighRisk
        }
        
      } else if(ageBetweenFortyAndFortyNine){
        
        if(waistHipRatioValue < 0.88){
          classification = Lowrisk
        } else if(waistHipRatioValue < 0.96){
          classification = ModerateRisk
        } else if(waistHipRatioValue < 1){
          classification = Highrisk
        } else {
          classification = VeryHighRisk
        }
        
      } else if(ageBetweenFiftyAndFiftyNine){
        
        if(waistHipRatioValue < 0.90){
          classification = Lowrisk
        } else if(waistHipRatioValue < 0.97){
          classification = ModerateRisk
        } else if(waistHipRatioValue < 1.02){
          classification = Highrisk
        } else {
          classification = VeryHighRisk
        }
        
      } else if(ageBetweenSixtyAndSixtyNine){
        
        if(waistHipRatioValue < 0.91){
          classification = Lowrisk
        } else if(waistHipRatioValue < 0.99){
          classification = ModerateRisk
        } else if(waistHipRatioValue < 1.03){
          classification = Highrisk
        } else {
          classification = VeryHighRisk
        }
        
      } else{
        classification = classificationNotAppliedToAge
      }

      break;
    
    // feminine - feminine - feminine - feminine - feminine
    case 2:
      if(ageBetweenTwentyAndTwentyNine){
        
        if(waistHipRatioValue < 0.71){
          classification = Lowrisk
        } else if(waistHipRatioValue < 0.78){
          classification = ModerateRisk
        } else if(waistHipRatioValue < 0.82){
          classification = Highrisk
        } else {
          classification = VeryHighRisk
        }
        
      } else if(ageBetweenThirtyAndThirtyNine){
        
        if(waistHipRatioValue < 0.72){
          classification = Lowrisk
        } else if(waistHipRatioValue < 0.79){
          classification = ModerateRisk
        } else if(waistHipRatioValue < 0.84){
          classification = Highrisk
        } else {
          classification = VeryHighRisk
        }
        
      } else if(ageBetweenFortyAndFortyNine){
        
        if(waistHipRatioValue < 0.73){
          classification = Lowrisk
        } else if(waistHipRatioValue < 0.80){
          classification = ModerateRisk
        } else if(waistHipRatioValue < 0.87){
          classification = Highrisk
        } else {
          classification = VeryHighRisk
        }
        
      } else if(ageBetweenFiftyAndFiftyNine){
        
        if(waistHipRatioValue < 0.74){
          classification = Lowrisk
        } else if(waistHipRatioValue < 0.82){
          classification = ModerateRisk
        } else if(waistHipRatioValue < 0.88){
          classification = Highrisk
        } else {
          classification = VeryHighRisk
        }
        
      } else if(ageBetweenSixtyAndSixtyNine){
        
        if(waistHipRatioValue < 0.76){
          classification = Lowrisk
        } else if(waistHipRatioValue < 0.84){
          classification = ModerateRisk
        } else if(waistHipRatioValue < 0.90){
          classification = Highrisk
        } else {
          classification = VeryHighRisk
        }
        
      } else{
        classification = classificationNotAppliedToAge
      }

      break;

    default:
      classification = unidentifiedSex
      break;
  }
  

  return classification

}

// Test Waist Hip Ration Classification
const testManWaistHipRatio = {
  sexNumber: 1,
  arrayAge: [29, 39, 49, 59, 69, 18, 70],
  arrayHipWaistRatio: [
    arrayMen20To29 = [0.82, 0.88, 0.94, 0.95],
    arrayMen30To39 = [0.83, 0.91, 0.96, 0.97],
    arrayMen40To49 = [0.87, 0.95, 0.99, 1],
    arrayMen50To59 = [0.89, 0.96, 1.01, 1.02],
    arrayMen60To69 = [0.90, 0.98, 1.02, 1.03],
    arrayMenLessThan20 = [0.82, 0.88, 0.94, 0.95],
    arrayMenGreaterThan69 = [0.89, 0.96, 1.01, 1.02],
  ],
  arrayTitle: [
    `idade entre 20 e 29 anos`,
    `idade entre 30 e 39 anos`,
    `idade entre 40 e 49 anos`,
    `idade entre 50 e 59 anos`,
    `idade entre 60 e 69 anos`,
    `idade menor que 20 anos`,
    `idade maior que 69 anos`,
  ]                  
}

const testWomanWaistHipRatio = {
  sexNumber: 2,
  arrayAge: [29, 39, 49, 59, 69, 19, 70],
  arrayHipWaistRatio: [
    arrayWoman20To29 = [0.70, 0.77, 0.81, 0.82],
    arrayWoman30To39 = [0.71, 0.78, 0.83, 0.84],
    arrayWoman40To49 = [0.72, 0.79, 0.86, 0.87],
    arrayWoman50To59 = [0.73, 0.81, 0.87, 0.88],
    arrayWoman60To69 = [0.75, 0.83, 0.89, 0.90],
    arrayWomanLessThan20 = [0.75, 0.83, 0.89, 0.90],
    arrayWomanGreaterThan69 = [0.70, 0.77, 0.81, 0.82],
  ],
  arrayTitle: [
    `idade entre 20 e 29 anos`,
    `idade entre 30 e 39 anos`,
    `idade entre 40 e 49 anos`,
    `idade entre 50 e 59 anos`,
    `idade entre 60 e 69 anos`,
    `idade menor que 20 anos`,
    `idade maior que 69 anos`,
  ]                 
}

function testClassificationWaistHipRatio(object){

  for(let i = 0; i < object.arrayAge.length; i++){
    object.age = object.arrayAge[i]
    console.log(object.arrayTitle[i])
    for(let j = 0; j < object.arrayHipWaistRatio[i].length; j++){
      object.hipWaistRatio = object.arrayHipWaistRatio[i][j]
      // console.log(object.age)
      // console.log(object.hipWaistRatio)
      console.log(`RCQ = ${object.hipWaistRatio} - Classificacão = ${waistHipRatioClassification(object)}`)
    }
  }

}

// console.log(`HOMENS - HOMENS - HOMENS - HOMENS - HOMENS`)
// testClassificationWaistHipRatio(testManWaistHipRatio)
// console.log(`MULHERES - MULHERES - MULHERES - MULHERES - MULHERES`)
// testClassificationWaistHipRatio(testWomanWaistHipRatio)

user.sexNumber = 1
// console.log(waistHipRatioClassification(user))

// deleted
function waistHipRatioClassification(sexValue, ageValue, waistHipRatioValue){

  let classification = ``

  switch (sexValue) {

    // masculine - masculine - masculine - masculine - masculine
    case 1:
      
      if(ageValue > 19 && ageValue < 30){
        
        if(waistHipRatioValue < 0.83){
          classification = `Baixo Risco`
        } else if(waistHipRatioValue < 0.89){
          classification = `Moderado Risco`
        } else if(waistHipRatioValue < 0.95){
          classification = `Alto Risco`
        } else {
          classification = `Muito Alto Risco`
        }
        
      } else if(ageValue < 40){
        
        if(waistHipRatioValue < 0.84){
          classification = `Baixo Risco`
        } else if(waistHipRatioValue < 0.92){
          classification = `Moderado Risco`
        } else if(waistHipRatioValue < 0.97){
          classification = `Alto Risco`
        } else {
          classification = `Muito Alto Risco`
        }
        
      } else if(ageValue < 50){
        
        if(waistHipRatioValue < 0.88){
          classification = `Baixo Risco`
        } else if(waistHipRatioValue < 0.96){
          classification = `Moderado Risco`
        } else if(waistHipRatioValue < 1){
          classification = `Alto Risco`
        } else {
          classification = `Muito Alto Risco`
        }
        
      } else if(ageValue < 60){
        
        if(waistHipRatioValue < 0.90){
          classification = `Baixo Risco`
        } else if(waistHipRatioValue < 0.97){
          classification = `Moderado Risco`
        } else if(waistHipRatioValue < 1.02){
          classification = `Alto Risco`
        } else {
          classification = `Muito Alto Risco`
        }
        
      } else if(ageValue < 70){
        
        if(waistHipRatioValue < 0.91){
          classification = `Baixo Risco`
        } else if(waistHipRatioValue < 0.99){
          classification = `Moderado Risco`
        } else if(waistHipRatioValue < 1.03){
          classification = `Alto Risco`
        } else {
          classification = `Muito Alto Risco`
        }
        
      } else{
        classification = `Esta classificação não se aplica a sua idade!`
      }

      break;
    
    // feminine - feminine - feminine - feminine - feminine
    case 2:
      if(ageValue > 19 && ageValue < 30){
        
        if(waistHipRatioValue < 0.71){
          classification = `Baixo Risco`
        } else if(waistHipRatioValue < 0.78){
          classification = `Moderado Risco`
        } else if(waistHipRatioValue < 0.82){
          classification = `Alto Risco`
        } else {
          classification = `Muito Alto Risco`
        }
        
      } else if(ageValue < 40){
        
        if(waistHipRatioValue < 0.72){
          classification = `Baixo Risco`
        } else if(waistHipRatioValue < 0.79){
          classification = `Moderado Risco`
        } else if(waistHipRatioValue < 0.84){
          classification = `Alto Risco`
        } else {
          classification = `Muito Alto Risco`
        }
        
      } else if(ageValue < 50){
        
        if(waistHipRatioValue < 0.73){
          classification = `Baixo Risco`
        } else if(waistHipRatioValue < 0.80){
          classification = `Moderado Risco`
        } else if(waistHipRatioValue < 0.87){
          classification = `Alto Risco`
        } else {
          classification = `Muito Alto Risco`
        }
        
      } else if(ageValue < 60){
        
        if(waistHipRatioValue < 0.74){
          classification = `Baixo Risco`
        } else if(waistHipRatioValue < 0.82){
          classification = `Moderado Risco`
        } else if(waistHipRatioValue < 0.88){
          classification = `Alto Risco`
        } else {
          classification = `Muito Alto Risco`
        }
        
      } else if(ageValue < 70){
        
        if(waistHipRatioValue < 0.76){
          classification = `Baixo Risco`
        } else if(waistHipRatioValue < 0.84){
          classification = `Moderado Risco`
        } else if(waistHipRatioValue < 0.90){
          classification = `Alto Risco`
        } else {
          classification = `Muito Alto Risco`
        }
        
      } else{
        classification = `Esta classificação não se aplica a sua idade!`
      }

      break;

    default:
      classification = `[ERROR] Sexo não identificado!`
      break;
  }
  

  return classification

}
// waistHipRatioClassification(sexValue, ageValue, waistHipRatioValue)
// console.log(waistHipRatioClassification(2, 29, 0.70))
// console.log(waistHipRatioClassification(2, 29, 0.77))
// console.log(waistHipRatioClassification(2, 29, 0.81))
// console.log(waistHipRatioClassification(2, 29, 0.82))

// console.log(waistHipRatioClassification(2, 39, 0.71))
// console.log(waistHipRatioClassification(2, 39, 0.78))
// console.log(waistHipRatioClassification(2, 39, 0.83))
// console.log(waistHipRatioClassification(2, 39, 0.84))

// console.log(waistHipRatioClassification(2, 49, 0.72))
// console.log(waistHipRatioClassification(2, 49, 0.79))
// console.log(waistHipRatioClassification(2, 49, 0.86))
// console.log(waistHipRatioClassification(2, 49, 0.87))

// console.log(waistHipRatioClassification(2, 59, 0.73))
// console.log(waistHipRatioClassification(2, 59, 0.81))
// console.log(waistHipRatioClassification(2, 59, 0.87))
// console.log(waistHipRatioClassification(2, 59, 0.88))

// console.log(waistHipRatioClassification(2, 69, 0.75))
// console.log(waistHipRatioClassification(2, 69, 0.83))
// console.log(waistHipRatioClassification(2, 69, 0.89))
// console.log(waistHipRatioClassification(2, 69, 0.90))

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Waist Circumference - Classification == **/

function waistCircumferenceClassification(sexValue, waistValue){

  classification = ``

  switch (sexValue) {
    
    case 1:
      
      if(waistValue < 94){
        classification = `Nenhum Risco`
      } else if(waistValue < 102){
        classification = `Risco Moderado`
      } else {
        classification = `Risco Alto`
      }

      break;

    case 2:

      if(waistValue < 80){
        classification = `Nenhum Risco`
      } else if(waistValue < 88){
        classification = `Risco Moderado`
      } else {
        classification = `Risco Alto`
      }

      break;

    default:
      classification = `[ERROR] Sexo não identificado!`
      break;
  }

  return classification

}

// console.log(waistCircumferenceClassification(1, 93))
// console.log(waistCircumferenceClassification(1, 101))
// console.log(waistCircumferenceClassification(1, 102))

// console.log(waistCircumferenceClassification(2, 79))
// console.log(waistCircumferenceClassification(2, 87))
// console.log(waistCircumferenceClassification(2, 88))


function waistCircumferenceClassification(objectValue){

  // const waistValue = objectValue.bodyPerimeter.Cintura
  const waistValue = objectValue.WaistCircumference
  const sexValue = objectValue.sexNumber
  const unidentifiedSex = `[ERROR] Sexo não identificado!`
  const noRisk = `Nenhum Risco`
  const moderateRisk = `Risco Moderado`
  const highRisk = `Risco Alto`

  classification = ``

  switch (sexValue) {
    
    case 1:
      
      if(waistValue < 94){
        classification = noRisk
      } else if(waistValue < 102){
        classification = moderateRisk
      } else {
        classification = highRisk
      }

      break;

    case 2:

      if(waistValue < 80){
        classification = noRisk
      } else if(waistValue < 88){
        classification = moderateRisk
      } else {
        classification = highRisk
      }

      break;

    default:
      classification = unidentifiedSex
      break;
  }

  return classification

}

const testManWaistCircumferenceClassification = {
  sexNumber: 1,
  arrayAge: [34],
  arrayWaistCircumference: [93, 101, 102],
  arrayTitle: [`Homens`]                  
}
const testWomanWaistCircumferenceClassification = {
  sexNumber: 2,
  arrayAge: [54],
  arrayWaistCircumference: [79, 87, 88],
  arrayTitle: [`Mulheres`]                  
}

// Test Waist Circumference Classification
function testWaistCircumferenceClassification(object){

  console.log(object)
  for(let i = 0; i < object.arrayAge.length; i++){
    object.age = object.arrayAge[i]
    console.log(object.arrayTitle[i])
    for(let j = 0; j < object.arrayWaistCircumference.length; j++){
      object.WaistCircumference = object.arrayWaistCircumference[j]
      // console.log(object.age)
      // console.log(object.WaistCircumference)
      console.log(`Circunferência = ${object.WaistCircumference} - Classificacão = ${waistCircumferenceClassification(object)}`)
    }
  }

}

// console.log(`HOMENS - HOMENS - HOMENS - HOMENS - HOMENS`)
// console.log(testWaistCircumferenceClassification(testManWaistCircumferenceClassification))
// console.log(`MULHERES - MULHERES - MULHERES - MULHERES - MULHERES`)
// console.log(testWaistCircumferenceClassification(testWomanWaistCircumferenceClassification))


/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Subcutaneous Measures == **/

//deleted
function subcutaneousMeasures(){

  let subcutaneousFolds = {
    Triciptal: 0,
    Subescapular: 0,
    Peitoral: 0,
    SupraIliaca: 0,
    Abdominal: 0,
    Coxa: 0,
    Panturrilha: 0
  } 
  let validNumber = true
  let regexTwoDigits = /(^[0-9]$)|(^[0-9]{2}$)/

  for(let folds in subcutaneousFolds){

    do{

      subcutaneousFolds[folds] = input.question(`Digite a dobra cutânea - ${folds} (mm)[00]: `)

      validNumber = validationFunctions.isRegularExpression(subcutaneousFolds[folds], regexTwoDigits)
      validationFunctions.incorrectValue(false, !validNumber, "Antropometria")

    }while(!validNumber)

  }

  return subcutaneousFolds

}

// console.log(subcutaneousMeasures())

function TESTsubcutaneousMeasures(){

  let subcutaneousFolds = {
    Triciptal: 0,
    Subescapular: 0,
    Peitoral: 0,
    SupraIliaca: 0,
    Abdominal: 0,
    Coxa: 0,
    Panturrilha: 0
  } 
  let itsRegexNumber = true
  let regexFromZeroToNinetyNine = /(^[0-9]$)|(^[0-9]{2}$)/
  
  for(let folds in subcutaneousFolds){

    do{

      subcutaneousFolds[folds] = input.question(`Digite a dobra cutânea - ${folds} [00](mm): `)

      itsRegexNumber = validationFunctions.isRegularExpression(subcutaneousFolds[folds], regexFromZeroToNinetyNine)
      validationFunctions.incorrectValue(false, !itsRegexNumber, "Antropometria")

    }while(!itsRegexNumber)

  }

  return subcutaneousFolds

}

// user.skinFolds = TESTsubcutaneousMeasures()
// console.log(user.skinFolds)
/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == show Subcutaneous Folds == **/

function showSubcutaneousFolds(objectValue){
  
  console.log('Dobras Cutâneas:')
  
  for(let property in objectValue){
    console.log(`${property}: ${objectValue[property]} mm`) 
  }

}

// console.log(showSubcutaneousFolds(subcutaneousMeasures()))

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Fat Percentage == **/

let user2 = { }
const subcutaneousFolds = {
  Triciptal: 7,
  Subescapular: 15,
  Peitoral: 5,
  SupraIliaca: 18,
  Abdominal: 24,
  Coxa: 14,
  Panturrilha: 10
}
user2.subcutaneousFolds = subcutaneousFolds
user2.age = 34
user2.sexNumber = 1

function TESTfatPercentage(objectValue){

  const ageValue = objectValue.age
  const sexValue = objectValue.sexNumber
  const skinFoldObject = objectValue.subcutaneousFolds

  let sumOfFolds = 0
  let bodyDensity = 0
  let fatPercentage = 0

  switch (sexValue) {
    
    case 1:
      
      sumOfFolds = Number((skinFoldObject.Peitoral + skinFoldObject.Abdominal + skinFoldObject.Coxa))
      console.log(sumOfFolds)
      bodyDensity = ((1.10938 - (0.0008267 * sumOfFolds )) + ((0.0000016 * (sumOfFolds * sumOfFolds)) - (0.0002574 * ageValue)))
      fatPercentage = (((4.95 / bodyDensity) - 4.5 ) * 100).toFixed(2)

      return fatPercentage

      break;
    
    case 2:

      sumOfFolds = Number((skinFoldObject.Triciptal + skinFoldObject.SupraIliaca + skinFoldObject.Coxa))
      bodyDensity = ((1.0994921-(0.0009929 * sumOfFolds)) + ((0.0000023 * (sumOfFolds * sumOfFolds)) - (0.0001392 * ageValue)))
      fatPercentage = (((5.01 / bodyDensity) - 4.57) * 100).toFixed(2)

      return fatPercentage

      break;
  
    default:

      return `[ERROR] Sexo não identificado!`

      break;

  }

}

// console.log(TESTfatPercentage(user2))

function sumElements(array){

  let sumElements = 0
  
  for(let element in array){
    sumElements += Number(array[element])
  }

  return sumElements

}

function fatPercentage(ageValue, sexValue, skinFoldObject){

  let = skinfoldArray = []
  let sumOfFolds = 0
  let bodyDensity = 0
  let fatPercentage = 0

  switch (sexValue) {
    
    case 1:
      
      skinfoldArray.push(skinFoldObject.Peitoral, skinFoldObject.Abdominal, skinFoldObject.Coxa)

      sumOfFolds = sumElements(skinfoldArray)
      bodyDensity = ((1.10938 - (0.0008267 * sumOfFolds )) + ((0.0000016 * (sumOfFolds * sumOfFolds)) - (0.0002574 * ageValue)))
      fatPercentage = (((4.95 / bodyDensity) - 4.5 ) * 100).toFixed(2)

      return fatPercentage

      break;
    
    case 2:

      skinfoldArray.push(skinFoldObject.Triciptal, skinFoldObject.SupraIliaca, skinFoldObject.Coxa)
      sumOfFolds = sumElements(skinfoldArray)
      bodyDensity = ((1.0994921-(0.0009929 * sumOfFolds)) + ((0.0000023 * (sumOfFolds * sumOfFolds)) - (0.0001392 * ageValue)))
      fatPercentage = (((5.01 / bodyDensity) - 4.57) * 100).toFixed(2)

      return fatPercentage

      break;
  
    default:

      return `[ERROR] Sexo não identificado!`

      break;

  }

}

// console.log(fatPercentage(34, 1, subcutaneousFolds))
// console.log(fatPercentage(55, 2, subcutaneousFolds))
// console.log(fatPercentage(55, 3, subcutaneousFolds))

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Fat percentage - Classification == **/

// function fatPercentageClassification(sexValue, fatPercentageValue){

//   let classification = ``

//   switch (sexValue) {
    
//     case 1:
      
//       if(fatPercentageValue < 6){
//         classification = `Desnutrição`
//       } else if(fatPercentageValue < 15){
//         classification = `Abaixo da média`
//       } else if(fatPercentageValue < 16){
//         classification = `Média`
//       } else if(fatPercentageValue < 25){
//         classification = `Sobrepeso`
//       } else{
//         classification = `Obesidade`
//       }

//       break;

//     case 2:

//       if(fatPercentageValue < 9){
//         classification = `Desnutrição`
//       } else if(fatPercentageValue < 23){
//         classification = `Abaixo da média`
//       } else if(fatPercentageValue < 24){
//         classification = `Média`
//       } else if(fatPercentageValue < 32){
//         classification = `Sobrepeso`
//       } else{
//         classification = `Obesidade`
//       }

//       break;

//     default:
//       classification = `[ERROR] Sexo não identificado!`
//       break;
//   }
  
//   return classification

// }

// console.log(fatPercentageClassification(1, 5.99))
// console.log(fatPercentageClassification(1, 14.99))
// console.log(fatPercentageClassification(1, 15.99))
// console.log(fatPercentageClassification(1, 24.99))
// console.log(fatPercentageClassification(1, 25))

// console.log(fatPercentageClassification(2, 8.99))
// console.log(fatPercentageClassification(2, 22.99))
// console.log(fatPercentageClassification(2, 23.99))
// console.log(fatPercentageClassification(2, 31.99))
// console.log(fatPercentageClassification(2, 32))

function fatPercentageClassification(objectValue){

  const sexValue = objectValue.sexNumber
  const fatPercentageValue = objectValue.fatPercentage

  let classification = ``
  const malnutritionClassification = `Desnutrição`
  const belowAverageClassification = `Abaixo da média`
  const averageClassification = `Média`
  const overweightClassification = `Sobrepeso`
  const obesityClassification = `Obesidade`
  const unidentifiedSex = `[ERROR] Sexo não identificado!`
  // male conditions
  const malnutritionMan = fatPercentageValue < 6
  const belowAverageMan = fatPercentageValue < 15
  const averageMan = fatPercentageValue < 16
  const overweightMan = fatPercentageValue < 25
  // female conditions
  const malnutritionWoman = fatPercentageValue < 9
  const belowAverageWoman = fatPercentageValue < 23
  const averageWoman = fatPercentageValue < 24
  const overweightWoman = fatPercentageValue < 32

  switch (sexValue) {
    
    case 1:
      
      if(malnutritionMan){
        classification = malnutritionClassification
      } else if(belowAverageMan){
        classification = belowAverageClassification
      } else if(averageMan){
        classification = averageClassification
      } else if(overweightMan){
        classification = overweightClassification
      } else{
        classification = obesityClassification
      }

      break;

    case 2:

      if(malnutritionWoman){
        classification = malnutritionClassification
      } else if(belowAverageWoman){
        classification = belowAverageClassification
      } else if(averageWoman){
        classification = averageClassification
      } else if(overweightWoman){
        classification = overweightClassification
      } else{
        classification = obesityClassification
      }

      break;

    default:
      classification = unidentifiedSex
      break;
  }
  
  return classification

}

// Test Fat Percentage Classification
const testManFatPercentageClassification = {
  sexNumber: 1,
  arrayAge: [34],
  arrayFatPercentageClassification: [5, 14, 15, 24, 25],
  arrayTitle: [`Homens`]                  
}
const testWomanFatPercentageClassification = {
  sexNumber: 2,
  arrayAge: [54],
  arrayFatPercentageClassification: [8, 22, 23, 31, 32],
  arrayTitle: [`Mulheres`]                  
}

// Test Fat Percentage Classification
function testFatPercentageClassification(object){

  // console.log(object)
  for(let i = 0; i < object.arrayAge.length; i++){
    object.age = object.arrayAge[i]
    console.log(object.arrayTitle[i])
    for(let j = 0; j < object.arrayFatPercentageClassification.length; j++){
      object.fatPercentage = object.arrayFatPercentageClassification[j]
      // console.log(object.age)
      // console.log(object.WaistCircumference)
      console.log(`Percentual = ${object.fatPercentage} - Classificacão = ${fatPercentageClassification(object)}`)
    }
  }

}

// console.log(`HOMENS - HOMENS - HOMENS - HOMENS - HOMENS`)
// console.log(testFatPercentageClassification(testManFatPercentageClassification))
// console.log(`MULHERES - MULHERES - MULHERES - MULHERES - MULHERES`)
// console.log(testFatPercentageClassification(testWomanFatPercentageClassification))


/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Fat Body Mass == **/
// deleted
function fatBodyMass(bodyWeight, fatPercentage){

  return Number(((bodyWeight * fatPercentage) / 100).toFixed(1))

}

function fatBodyMass(objectValue){

  const bodyWeight = Number(objectValue.bodyWeight)
  const fatPercentage = Number(objectValue.fatPercentage)

  return Number(((bodyWeight * fatPercentage) / 100).toFixed(1))

}

// teste function fatBodyMass
const user3 = {}
user3.bodyWeight = 94
user3.fatPercentage = 13.47
// user3.fatBodyMass = fatBodyMass(user3)

// console.log(`PESO DE GORDURA: ${user3.fatBodyMass}`)

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Lean Body Mass == **/

/* deleted
leanBodyMass(bodyWeight, fatBodyMass){

    return Number(bodyWeight - fatBodyMass)
  
  },
*/

function leanBodyMass(objectValue){

  const bodyWeight = Number(objectValue.bodyWeight)
  const fatBodyMass = Number(objectValue.fatBodyMass)

  return Number(bodyWeight - fatBodyMass)

}

// user3.leanBodyMass = leanBodyMass(user3)
// console.log(`MASSA CORPORAL MAGRA: ${user3.leanBodyMass}`)


/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Expected Ideal Body Mass == **/

/* deleted
expectedIdealBodyMass(sexNumber, leanBodyMass){

    return Number(sexNumber === 1 ? (leanBodyMass / (1 - 0.15)).toFixed(1) : (leanBodyMass / (1 - 0.23)).toFixed(1))
  
  },
*/
// console.log(expectedIdealBodyMass(1, 78.9))
// console.log(expectedIdealBodyMass(2, 78.9))
// console.log(expectedIdealBodyMass(3, 78.9))

function expectedIdealBodyMass(objectValue){

  const sexNumber = Number(objectValue.sexNumber)
  const leanBodyMass = Number(objectValue.leanBodyMass)
  let expectedIdealBodyMass = 0
  const men = sexNumber === 1

  if(men){
    expectedIdealBodyMass = Number((leanBodyMass / (1 - 0.15)).toFixed(1)) 
  } else {
    expectedIdealBodyMass =  Number((leanBodyMass / (1 - 0.23)).toFixed(1))
  }
  
  return expectedIdealBodyMass

}


user3.sexNumber = 2
// user.expectedIdealBodyMass = expectedIdealBodyMass(user3)
// console.log(`MASSA IDEAL PREVISTA: ${user.expectedIdealBodyMass}`)
// console.log(user3)
/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Neuromuscular Functions == **/
/** == Flexibility Test == **/
/*deleted
function wellsBenchTest(){
  
  let testResult = ''
  const regexTwoDigits = /(^[0-9]$)|(^[0-9]{2}$)/
  let validNumber = true

  do{

    testResult = input.question('Teste de flexibilidade banco de Wells (cm)[00]: ')
    validNumber = validationFunctions.isRegularExpression(testResult, regexTwoDigits)
    validationFunctions.incorrectValue(false, !validNumber,'Neuromuscular' )

  }while(!validNumber)
  
  return Number(testResult)

}

// console.log(wellsBenchTest())
*/

function wellsBenchTest(){
  
  let testResult = 0
  const regexFromZeroToNinetyNine = /(^[0-9]$)|(^[0-9]{2}$)/
  let itsRegexNumber = true
  
  do{

    testResult = input.question('Teste de flexibilidade banco de Wells [00](cm) : ')
    itsRegexNumber = validationFunctions.isRegularExpression(testResult, regexFromZeroToNinetyNine)
    validationFunctions.incorrectValue(false, !itsRegexNumber,'Neuromuscular' )

  }while(!itsRegexNumber)
  
  return Number(testResult)

}

// user4 = {}
// user4.wellsBenchTest = wellsBenchTest()
// console.log(`TESTE DE FLXIBILIDADE: ${user4.wellsBenchTest}`)
// console.log(user4)
/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Flexibility - Classification == **/


function flexibilityClassification(sexNumber, ageValue, flexibilityTestResult){

  let classification = ''
  const UnidentifiedSex = `[ERROR] Sexo não identificado!`
  const ageLessThanTwenty = ageValue > 0 && ageValue < 20
  const ageLessThanThirty = ageValue < 30
  const ageLessThanForty = ageValue < 40
  const ageLessThanFifty = ageValue < 50
  const ageLessThanSixty = ageValue < 60
  const ageLessThanSeventy = ageValue < 70
  const weakRating = `Fraca`
  const regularRating = `Regular`
  const goodRating = `Boa`
  const excellentRating = `Excelente`
  const classificationNotAppliedToAge = `Esta classificação não se aplica a sua idade!`


  switch (sexNumber) {
    
    // men
    case 1:
      
      if(ageLessThanTwenty){
        
        if(flexibilityTestResult < 24){
          classification = weakRating
        } else if(flexibilityTestResult < 29){
          classification = regularRating
        } else if(flexibilityTestResult < 39){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanThirty){
        
        if(flexibilityTestResult < 25){
          classification = weakRating
        } else if(flexibilityTestResult < 30){
          classification = regularRating
        } else if(flexibilityTestResult < 40){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanForty){
        
        if(flexibilityTestResult < 23){
          classification = weakRating
        } else if(flexibilityTestResult < 28){
          classification = regularRating
        } else if(flexibilityTestResult < 38){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanFifty){
        
        if(flexibilityTestResult < 18){
          classification = weakRating
        } else if(flexibilityTestResult < 24){
          classification = regularRating
        } else if(flexibilityTestResult < 35){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanSixty){
        
        if(flexibilityTestResult < 16){
          classification = weakRating
        } else if(flexibilityTestResult < 24){
          classification = regularRating
        } else if(flexibilityTestResult < 35){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanSeventy){
        
        if(flexibilityTestResult < 15){
          classification = weakRating
        } else if(flexibilityTestResult < 20){
          classification = regularRating
        } else if(flexibilityTestResult < 33){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else {
        classification = classificationNotAppliedToAge
      }

      break;
    
    // woman
    case 2:

      if(ageLessThanTwenty){
        
        if(flexibilityTestResult < 29){
          classification = weakRating
        } else if(flexibilityTestResult < 34){
          classification = regularRating
        } else if(flexibilityTestResult < 43){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanThirty){
        
        if(flexibilityTestResult < 28){
          classification = weakRating
        } else if(flexibilityTestResult < 33){
          classification = regularRating
        } else if(flexibilityTestResult < 41){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanForty){
        
        if(flexibilityTestResult < 27){
          classification = weakRating
        } else if(flexibilityTestResult < 32){
          classification = regularRating
        } else if(flexibilityTestResult < 41){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanFifty){
        
        if(flexibilityTestResult < 25){
          classification = weakRating
        } else if(flexibilityTestResult < 30){
          classification = regularRating
        } else if(flexibilityTestResult < 38){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanSixty){
        
        if(flexibilityTestResult < 25){
          classification = weakRating
        } else if(flexibilityTestResult < 30){
          classification = regularRating
        } else if(flexibilityTestResult < 39){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanSeventy){
        
        if(flexibilityTestResult < 23){
          classification = weakRating
        } else if(flexibilityTestResult < 27){
          classification = regularRating
        } else if(flexibilityTestResult < 35){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else {
        classification = classificationNotAppliedToAge
      }

      break;
  
    default:
      classification = UnidentifiedSex
      break;
  }

  return classification
}

// flexibilityClassification(sexNumber, ageValue, flexibilityTestResult)
/*console.log(`MEN`)
console.log(`idade entre 0 e 19 anos`)
console.log(flexibilityClassification(1, 19, 23))
console.log(flexibilityClassification(1, 19, 28))
console.log(flexibilityClassification(1, 19, 38))
console.log(flexibilityClassification(1, 19, 39))
console.log(`idade entre 20 e 29 anos`)
console.log(flexibilityClassification(1, 29, 24))
console.log(flexibilityClassification(1, 29, 29))
console.log(flexibilityClassification(1, 29, 39))
console.log(flexibilityClassification(1, 29, 40))
console.log(`idade entre 30 e 39 anos`)
console.log(flexibilityClassification(1, 39, 22))
console.log(flexibilityClassification(1, 39, 27))
console.log(flexibilityClassification(1, 39, 37))
console.log(flexibilityClassification(1, 39, 38))
console.log(`idade entre 40 e 49 anos`)
console.log(flexibilityClassification(1, 49, 17))
console.log(flexibilityClassification(1, 49, 23))
console.log(flexibilityClassification(1, 49, 34))
console.log(flexibilityClassification(1, 49, 35))
console.log(`idade entre 50 e 59 anos`)
console.log(flexibilityClassification(1, 59, 15))
console.log(flexibilityClassification(1, 59, 23))
console.log(flexibilityClassification(1, 59, 34))
console.log(flexibilityClassification(1, 59, 35))
console.log(`idade entre 60 e 69 anos`)
console.log(flexibilityClassification(1, 69, 13))
console.log(flexibilityClassification(1, 69, 19))
console.log(flexibilityClassification(1, 69, 32))
console.log(flexibilityClassification(1, 69, 33))
console.log(`=====================`)
console.log(flexibilityClassification(3, 69, 33))
console.log(flexibilityClassification(1, 70, 33))

console.log(`WOMAN`)
console.log(`idade entre 0 e 19 anos`)
console.log(flexibilityClassification(2, 19, 28))
console.log(flexibilityClassification(2, 19, 33))
console.log(flexibilityClassification(2, 19, 42))
console.log(flexibilityClassification(2, 19, 43))
console.log(`idade entre 20 e 29 anos`)
console.log(flexibilityClassification(2, 29, 27))
console.log(flexibilityClassification(2, 29, 32))
console.log(flexibilityClassification(2, 29, 40))
console.log(flexibilityClassification(2, 29, 41))
console.log(`idade entre 30 e 39 anos`)
console.log(flexibilityClassification(2, 39, 26))
console.log(flexibilityClassification(2, 39, 31))
console.log(flexibilityClassification(2, 39, 40))
console.log(flexibilityClassification(2, 39, 41))
console.log(`idade entre 40 e 49 anos`)
console.log(flexibilityClassification(2, 49, 24))
console.log(flexibilityClassification(2, 49, 29))
console.log(flexibilityClassification(2, 49, 37))
console.log(flexibilityClassification(2, 49, 38))
console.log(`idade entre 50 e 59 anos`)
console.log(flexibilityClassification(2, 59, 24))
console.log(flexibilityClassification(2, 59, 29))
console.log(flexibilityClassification(2, 59, 38))
console.log(flexibilityClassification(2, 59, 39))
console.log(`idade entre 60 e 69 anos`)
console.log(flexibilityClassification(2, 69, 22))
console.log(flexibilityClassification(2, 69, 26))
console.log(flexibilityClassification(2, 69, 34))
console.log(flexibilityClassification(2, 69, 35))
console.log(`=====================`)
console.log(flexibilityClassification(3, 69, 33))
console.log(flexibilityClassification(2, 70, 33))
*/

function flexibilityClassification(objectValue){

  const sexNumber = objectValue.sexNumber
  const ageValue = objectValue.age
  const flexibilityTestResult = objectValue.wellsBenchTest

  let classification = ``
  const unidentifiedSex = `[ERROR] Sexo não identificado!`
  const ageLessThanTwenty = ageValue > 0 && ageValue < 20
  const ageLessThanThirty = ageValue < 30
  const ageLessThanForty = ageValue < 40
  const ageLessThanFifty = ageValue < 50
  const ageLessThanSixty = ageValue < 60
  const ageLessThanSeventy = ageValue < 70
  const weakRating = `Fraca`
  const regularRating = `Regular`
  const goodRating = `Boa`
  const excellentRating = `Excelente`
  const classificationNotAppliedToAge = `Esta classificação não se aplica a sua idade!`


  switch (sexNumber) {
    
    // men
    case 1:
      
      if(ageLessThanTwenty){
        
        if(flexibilityTestResult < 24){
          classification = weakRating
        } else if(flexibilityTestResult < 29){
          classification = regularRating
        } else if(flexibilityTestResult < 39){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanThirty){
        
        if(flexibilityTestResult < 25){
          classification = weakRating
        } else if(flexibilityTestResult < 30){
          classification = regularRating
        } else if(flexibilityTestResult < 40){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanForty){
        
        if(flexibilityTestResult < 23){
          classification = weakRating
        } else if(flexibilityTestResult < 28){
          classification = regularRating
        } else if(flexibilityTestResult < 38){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanFifty){
        
        if(flexibilityTestResult < 18){
          classification = weakRating
        } else if(flexibilityTestResult < 24){
          classification = regularRating
        } else if(flexibilityTestResult < 35){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanSixty){
        
        if(flexibilityTestResult < 16){
          classification = weakRating
        } else if(flexibilityTestResult < 24){
          classification = regularRating
        } else if(flexibilityTestResult < 35){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanSeventy){
        
        if(flexibilityTestResult < 15){
          classification = weakRating
        } else if(flexibilityTestResult < 20){
          classification = regularRating
        } else if(flexibilityTestResult < 33){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else {
        classification = classificationNotAppliedToAge
      }

      break;
    
    // woman
    case 2:

      if(ageLessThanTwenty){
        
        if(flexibilityTestResult < 29){
          classification = weakRating
        } else if(flexibilityTestResult < 34){
          classification = regularRating
        } else if(flexibilityTestResult < 43){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanThirty){
        
        if(flexibilityTestResult < 28){
          classification = weakRating
        } else if(flexibilityTestResult < 33){
          classification = regularRating
        } else if(flexibilityTestResult < 41){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanForty){
        
        if(flexibilityTestResult < 27){
          classification = weakRating
        } else if(flexibilityTestResult < 32){
          classification = regularRating
        } else if(flexibilityTestResult < 41){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanFifty){
        
        if(flexibilityTestResult < 25){
          classification = weakRating
        } else if(flexibilityTestResult < 30){
          classification = regularRating
        } else if(flexibilityTestResult < 38){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanSixty){
        
        if(flexibilityTestResult < 25){
          classification = weakRating
        } else if(flexibilityTestResult < 30){
          classification = regularRating
        } else if(flexibilityTestResult < 39){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanSeventy){
        
        if(flexibilityTestResult < 23){
          classification = weakRating
        } else if(flexibilityTestResult < 27){
          classification = regularRating
        } else if(flexibilityTestResult < 35){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else {
        classification = classificationNotAppliedToAge
      }

      break;
  
    default:
      classification = unidentifiedSex
      break;
  }

  return classification
}

// Test Flexibility Classification PAREI
const testManflexibilityClassification = {
  sexNumber: 1,
  arrayAge: [19, 29, 39, 49, 59, 69, 70],
  arrayFlexibilityClassification: [
    arrayWoman0To19 = [23, 28, 38, 39], 
    arrayMen20To29 = [24, 29, 39, 40],
    arrayMen30To39 = [22, 27, 37, 38],
    arrayMen40To49 = [17, 23, 34, 35],
    arrayMen50To59 = [15, 23, 34, 35],
    arrayMen60To69 = [14, 19, 32, 33],
    // arrayMenLessThan20 = [0.82, 0.88, 0.94, 0.95],
    arrayMenGreaterThan69 = [0.89, 0.96, 1.01, 1.02],
  ],
  arrayTitle: [
    `idade entre 0 e 19 anos`,
    `idade entre 20 e 29 anos`,
    `idade entre 30 e 39 anos`,
    `idade entre 40 e 49 anos`,
    `idade entre 50 e 59 anos`,
    `idade entre 60 e 69 anos`,
    // `idade menor que 20 anos`,
    `idade maior que 69 anos`,
  ]                  
}

const testWomanflexibilityClassification = {
  sexNumber: 2,
  arrayAge: [19, 29, 39, 49, 59, 69, 70],
  arrayFlexibilityClassification: [
    arrayWoman0To19 = [28, 33, 42, 43],
    arrayWoman20To29 = [27, 32, 40, 41],
    arrayWoman30To39 = [26, 31, 40, 41],
    arrayWoman40To49 = [24, 29, 37, 38],
    arrayWoman50To59 = [24, 29, 38, 39],
    arrayWoman60To69 = [22, 26, 34, 35],
    // arrayWomanLessThan20 = [22, 26, 34, 35],
    arrayWomanGreaterThan69 = [22, 26, 34, 35],
  ],
  arrayTitle: [
    `idade entre 0 e 19 anos`,
    `idade entre 20 e 29 anos`,
    `idade entre 30 e 39 anos`,
    `idade entre 40 e 49 anos`,
    `idade entre 50 e 59 anos`,
    `idade entre 60 e 69 anos`,
    // `idade menor que 20 anos`,
    `idade maior que 69 anos`,
  ]                 
}

function testflexibilityClassification(objectTest){

  let object = {}
  object.sexNumber = objectTest.sexNumber 
  const age = objectTest.arrayAge
  const title = objectTest.arrayTitle
  const arrayValues = objectTest.arrayFlexibilityClassification

  for(let i = 0; i < age.length; i++){
    object.age = age[i]
    console.log(title[i])
    for(let j = 0; j < arrayValues[i].length; j++){
      object.wellsBenchTest = arrayValues[i][j]
      console.log(`FLEXIBILIDADE = ${object.wellsBenchTest} - Classificacão = ${flexibilityClassification(object)}`)
    }
  }

}

// console.log(`HOMENS - HOMENS - HOMENS - HOMENS - HOMENS`)
// testflexibilityClassification(testManflexibilityClassification)
// console.log(`MULHERES - MULHERES - MULHERES - MULHERES - MULHERES`)
// testflexibilityClassification(testWomanflexibilityClassification)

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Abdominal Test == **/

function abdominalTest(){

  let testResult = ''
  const regexTwoDigits = /(^[0-9]$)|(^[0-9]{2}$)/
  let validNumber = true

  do{
    console.log('Teste de Abdominais')
    testResult = input.question('Digite a quantidade de repetições em 1 min [00]: ')
    validNumber = validationFunctions.isRegularExpression(testResult, regexTwoDigits)
    validationFunctions.incorrectValue(false, !validNumber,'Neuromuscular' )

  }while(!validNumber)
  
  return Number(testResult)

}

// console.log(abdominalTest())

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Abdominal Test - Classification == **/
/*
function abdominalClassification(sexNumber, ageValue, abdominalTestResult){
  
  let classification = ''
  const unidentifiedSex = `[ERROR] Sexo não identificado!` 
  const ageBetweenTwentyAndTwentyNine = ageValue >= 20 && ageValue <= 29
  const ageBetweenThirtyAndThirtyNine = ageValue >= 30 && ageValue <= 39
  const ageBetweenFortyAndFortyNine = ageValue >= 40 && ageValue <= 49
  const ageBetweenFiftyAndFiftyNine = ageValue >= 50 && ageValue <= 59
  const ageBetweenSixtyAndSixtyNine = ageValue >= 60 && ageValue <= 69
  const veryPoorRating = `Muito Fraco`
  const weakRating = `Fraco`
  const regularRating = `Regular`
  const goodRating = `Bom`
  const excellentRating = `Excelente`
  const classificationNotAppliedToAge = `Esta classificação não se aplica a sua idade!`

  switch (sexNumber) {
    
    // men
    case 1:
      
      if(ageBetweenTwentyAndTwentyNine){
        
        if(abdominalTestResult < 30){
          classification = veryPoorRating
        } else if(abdominalTestResult < 35){
          classification = weakRating
        } else if(abdominalTestResult < 40){
          classification = regularRating
        } else if(abdominalTestResult < 45){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenThirtyAndThirtyNine){
        
        if(abdominalTestResult < 22){
          classification = veryPoorRating
        } else if(abdominalTestResult < 27){
          classification = weakRating
        } else if(abdominalTestResult < 32){
          classification = regularRating
        } else if(abdominalTestResult < 37){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenFortyAndFortyNine){
        
        if(abdominalTestResult < 17){
          classification = veryPoorRating
        } else if(abdominalTestResult < 21){
          classification = weakRating
        } else if(abdominalTestResult < 26){
          classification = regularRating
        } else if(abdominalTestResult < 32){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenFiftyAndFiftyNine){
        
        if(abdominalTestResult < 12){
          classification = veryPoorRating
        } else if(abdominalTestResult < 17){
          classification = weakRating
        } else if(abdominalTestResult < 23){
          classification = regularRating
        } else if(abdominalTestResult < 29){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenSixtyAndSixtyNine){
        
        if(abdominalTestResult < 9){
          classification = veryPoorRating
        } else if(abdominalTestResult < 13){
          classification = weakRating
        } else if(abdominalTestResult < 19){
          classification = regularRating
        } else if(abdominalTestResult < 25){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else {
        classification = classificationNotAppliedToAge
      }

      break;
    
    // woman
    case 2:

      if(ageBetweenTwentyAndTwentyNine){
        
        if(abdominalTestResult < 26){
          classification = veryPoorRating
        } else if(abdominalTestResult < 30){
          classification = weakRating
        } else if(abdominalTestResult < 35){
          classification = regularRating
        } else if(abdominalTestResult < 40){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenThirtyAndThirtyNine){
        
        if(abdominalTestResult < 21){
          classification = veryPoorRating
        } else if(abdominalTestResult < 25){
          classification = weakRating
        } else if(abdominalTestResult < 30){
          classification = regularRating
        } else if(abdominalTestResult < 35){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenFortyAndFortyNine){
        
        if(abdominalTestResult < 16){
          classification = veryPoorRating
        } else if(abdominalTestResult < 20){
          classification = weakRating
        } else if(abdominalTestResult < 25){
          classification = regularRating
        } else if(abdominalTestResult < 30){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenFiftyAndFiftyNine){
        
        if(abdominalTestResult < 11){
          classification = veryPoorRating
        } else if(abdominalTestResult < 15){
          classification = weakRating
        } else if(abdominalTestResult < 20){
          classification = regularRating
        } else if(abdominalTestResult < 25){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenSixtyAndSixtyNine){
        
        if(abdominalTestResult < 6){
          classification = veryPoorRating
        } else if(abdominalTestResult < 10){
          classification = weakRating
        } else if(abdominalTestResult < 15){
          classification = regularRating
        } else if(abdominalTestResult < 20){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else {
        classification = classificationNotAppliedToAge
      }

      break;
  
    default:

      classification = unidentifiedSex

      break;
  }

  return classification

}

console.log(`MEN`)
console.log(`idade entre 20 e 29 anos`)
console.log(abdominalClassification(1, 29, 29))
console.log(abdominalClassification(1, 29, 34))
console.log(abdominalClassification(1, 29, 39))
console.log(abdominalClassification(1, 29, 44))
console.log(abdominalClassification(1, 29, 45))
console.log(`idade entre 30 e 39 anos`)
console.log(abdominalClassification(1, 39, 21))
console.log(abdominalClassification(1, 39, 26))
console.log(abdominalClassification(1, 39, 31))
console.log(abdominalClassification(1, 39, 36))
console.log(abdominalClassification(1, 39, 37))
console.log(`idade entre 40 e 49 anos`)
console.log(abdominalClassification(1, 49, 16))
console.log(abdominalClassification(1, 49, 20))
console.log(abdominalClassification(1, 49, 25))
console.log(abdominalClassification(1, 49, 31))
console.log(abdominalClassification(1, 49, 32))
console.log(`idade entre 50 e 59 anos`)
console.log(abdominalClassification(1, 59, 11))
console.log(abdominalClassification(1, 59, 16))
console.log(abdominalClassification(1, 59, 22))
console.log(abdominalClassification(1, 59, 28))
console.log(abdominalClassification(1, 59, 29))
console.log(`idade entre 60 e 69 anos`)
console.log(abdominalClassification(1, 69, 8))
console.log(abdominalClassification(1, 69, 12))
console.log(abdominalClassification(1, 69, 18))
console.log(abdominalClassification(1, 69, 24))
console.log(abdominalClassification(1, 69, 25))
console.log(`=====================`)
console.log(abdominalClassification(3, 69, 33))
console.log(abdominalClassification(1, 70, 33))
console.log(abdominalClassification(1, 19, 33))
console.log(`WOMAN`)
console.log(`idade entre 20 e 29 anos`)
console.log(abdominalClassification(2, 29, 25))
console.log(abdominalClassification(2, 29, 29))
console.log(abdominalClassification(2, 29, 34))
console.log(abdominalClassification(2, 29, 39))
console.log(abdominalClassification(2, 29, 40))
console.log(`idade entre 30 e 39 anos`)
console.log(abdominalClassification(2, 39, 20))
console.log(abdominalClassification(2, 39, 24))
console.log(abdominalClassification(2, 39, 29))
console.log(abdominalClassification(2, 39, 34))
console.log(abdominalClassification(2, 39, 35))
console.log(`idade entre 40 e 49 anos`)
console.log(abdominalClassification(2, 49, 15))
console.log(abdominalClassification(2, 49, 19))
console.log(abdominalClassification(2, 49, 24))
console.log(abdominalClassification(2, 49, 29))
console.log(abdominalClassification(2, 49, 30))
console.log(`idade entre 50 e 59 anos`)
console.log(abdominalClassification(2, 59, 10))
console.log(abdominalClassification(2, 59, 15))
console.log(abdominalClassification(2, 59, 19))
console.log(abdominalClassification(2, 59, 24))
console.log(abdominalClassification(2, 59, 25))
console.log(`idade entre 60 e 69 anos`)
console.log(abdominalClassification(2, 69, 5))
console.log(abdominalClassification(2, 69, 9))
console.log(abdominalClassification(2, 69, 14))
console.log(abdominalClassification(2, 69, 19))
console.log(abdominalClassification(2, 69, 20))
console.log(`=====================`)
console.log(abdominalClassification(3, 69, 33))
console.log(abdominalClassification(2, 70, 33))
console.log(abdominalClassification(2, 19, 33))
*/

function abdominalClassification(objectValue){
  
  const sexNumber = objectValue.sexNumber
  const ageValue = objectValue.age
  const abdominalTestResult = objectValue.numberOfAbs

  let classification = ``
  const unidentifiedSex = `[ERROR] Sexo não identificado!` 
  const ageBetweenTwentyAndTwentyNine = ageValue >= 20 && ageValue <= 29
  const ageBetweenThirtyAndThirtyNine = ageValue >= 30 && ageValue <= 39
  const ageBetweenFortyAndFortyNine = ageValue >= 40 && ageValue <= 49
  const ageBetweenFiftyAndFiftyNine = ageValue >= 50 && ageValue <= 59
  const ageBetweenSixtyAndSixtyNine = ageValue >= 60 && ageValue <= 69
  const veryPoorRating = `Muito Fraco`
  const weakRating = `Fraco`
  const regularRating = `Regular`
  const goodRating = `Bom`
  const excellentRating = `Excelente`
  const classificationNotAppliedToAge = `Esta classificação não se aplica a sua idade!`

  switch (sexNumber) {
    
    // men
    case 1:
      
      if(ageBetweenTwentyAndTwentyNine){
        
        if(abdominalTestResult < 30){
          classification = veryPoorRating
        } else if(abdominalTestResult < 35){
          classification = weakRating
        } else if(abdominalTestResult < 40){
          classification = regularRating
        } else if(abdominalTestResult < 45){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenThirtyAndThirtyNine){
        
        if(abdominalTestResult < 22){
          classification = veryPoorRating
        } else if(abdominalTestResult < 27){
          classification = weakRating
        } else if(abdominalTestResult < 32){
          classification = regularRating
        } else if(abdominalTestResult < 37){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenFortyAndFortyNine){
        
        if(abdominalTestResult < 17){
          classification = veryPoorRating
        } else if(abdominalTestResult < 21){
          classification = weakRating
        } else if(abdominalTestResult < 26){
          classification = regularRating
        } else if(abdominalTestResult < 32){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenFiftyAndFiftyNine){
        
        if(abdominalTestResult < 12){
          classification = veryPoorRating
        } else if(abdominalTestResult < 17){
          classification = weakRating
        } else if(abdominalTestResult < 23){
          classification = regularRating
        } else if(abdominalTestResult < 29){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenSixtyAndSixtyNine){
        
        if(abdominalTestResult < 9){
          classification = veryPoorRating
        } else if(abdominalTestResult < 13){
          classification = weakRating
        } else if(abdominalTestResult < 19){
          classification = regularRating
        } else if(abdominalTestResult < 25){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else {
        classification = classificationNotAppliedToAge
      }

      break;
    
    // woman
    case 2:

      if(ageBetweenTwentyAndTwentyNine){
        
        if(abdominalTestResult < 26){
          classification = veryPoorRating
        } else if(abdominalTestResult < 30){
          classification = weakRating
        } else if(abdominalTestResult < 35){
          classification = regularRating
        } else if(abdominalTestResult < 40){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenThirtyAndThirtyNine){
        
        if(abdominalTestResult < 21){
          classification = veryPoorRating
        } else if(abdominalTestResult < 25){
          classification = weakRating
        } else if(abdominalTestResult < 30){
          classification = regularRating
        } else if(abdominalTestResult < 35){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenFortyAndFortyNine){
        
        if(abdominalTestResult < 16){
          classification = veryPoorRating
        } else if(abdominalTestResult < 20){
          classification = weakRating
        } else if(abdominalTestResult < 25){
          classification = regularRating
        } else if(abdominalTestResult < 30){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenFiftyAndFiftyNine){
        
        if(abdominalTestResult < 11){
          classification = veryPoorRating
        } else if(abdominalTestResult < 15){
          classification = weakRating
        } else if(abdominalTestResult < 20){
          classification = regularRating
        } else if(abdominalTestResult < 25){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenSixtyAndSixtyNine){
        
        if(abdominalTestResult < 6){
          classification = veryPoorRating
        } else if(abdominalTestResult < 10){
          classification = weakRating
        } else if(abdominalTestResult < 15){
          classification = regularRating
        } else if(abdominalTestResult < 20){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else {
        classification = classificationNotAppliedToAge
      }

      break;
  
    default:

      classification = unidentifiedSex

      break;
  }

  return classification

}

// Test Abdominal Classification
const testManAbdominalClassification = {
  sexNumber: 1,
  arrayAge: [19, 29, 39, 49, 59, 69, 70],
  arrayAbdominalClassification: [
    arrayMen0To19 = [30, 35, 39, 40, 48], 
    arrayMen20To29 = [29, 34, 39, 44, 45],
    arrayMen30To39 = [21, 26, 31, 36, 37],
    arrayMen40To49 = [16, 20, 25, 31, 32],
    arrayMen50To59 = [11, 16, 22, 28, 29],
    arrayMen60To69 = [8, 12, 18, 24, 25],
    arrayMenGreaterThan69 = [0.89, 0.96, 1.01, 1.02, 10],
  ],
  arrayTitle: [
    `idade entre 0 e 19 anos`,
    `idade entre 20 e 29 anos`,
    `idade entre 30 e 39 anos`,
    `idade entre 40 e 49 anos`,
    `idade entre 50 e 59 anos`,
    `idade entre 60 e 69 anos`,
    `idade maior que 69 anos`,
  ]                  
}

const testWomanAbdominalClassification = {
  sexNumber: 2,
  arrayAge: [19, 29, 39, 49, 59, 69, 70],
  arrayAbdominalClassification: [
    arrayWoman0To19 = [28, 33, 42, 43, 46],
    arrayWoman20To29 = [25, 29, 34, 39, 40],
    arrayWoman30To39 = [20, 24, 29, 34, 35],
    arrayWoman40To49 = [15, 19, 24, 29, 30],
    arrayWoman50To59 = [10, 14, 19, 24, 25],
    arrayWoman60To69 = [5, 9, 14, 19, 20],
    arrayWomanGreaterThan69 = [22, 26, 34, 35, 10],
  ],
  arrayTitle: [
    `idade entre 0 e 19 anos`,
    `idade entre 20 e 29 anos`,
    `idade entre 30 e 39 anos`,
    `idade entre 40 e 49 anos`,
    `idade entre 50 e 59 anos`,
    `idade entre 60 e 69 anos`,
    `idade maior que 69 anos`,
  ]                 
}

function testAbdominalClassification(objectTest){

  let object = {}
  object.sexNumber = objectTest.sexNumber 
  const age = objectTest.arrayAge
  const title = objectTest.arrayTitle
  const arrayValues = objectTest.arrayAbdominalClassification

  for(let i = 0; i < age.length; i++){
    object.age = age[i]
    console.log(title[i])
    for(let j = 0; j < arrayValues[i].length; j++){
      object.numberOfAbs = arrayValues[i][j]
      console.log(`ABDOMINAIS = ${object.numberOfAbs} - Classificacão = ${abdominalClassification(object)}`)
    }
  }

}

// console.log(`HOMENS - HOMENS - HOMENS - HOMENS - HOMENS`)
// testAbdominalClassification(testManAbdominalClassification)
// console.log(`MULHERES - MULHERES - MULHERES - MULHERES - MULHERES`)
// testAbdominalClassification(testWomanAbdominalClassification)

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Arm flexion == **/

function flexArmTest(){

  let testResult = ''
  const regexTwoDigits = /(^[0-9]$)|(^[0-9]{2}$)/
  let validNumber = true

  do{
    console.log('Teste de Flexão de Braço')
    testResult = input.question('Digite a quantidade de repetições [00]: ')
    validNumber = validationFunctions.isRegularExpression(testResult, regexTwoDigits)
    validationFunctions.incorrectValue(false, !validNumber,'Neuromuscular' )

  }while(!validNumber)
  
  return Number(testResult)

}

// console.log(flexArmTest())

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Flexion Arm - Classification == **/

function flexArmClassification(sexNumber, ageValue, flexArmTestResult){
  
  let classification = ''
  const unidentifiedSex = `[ERROR] Sexo não identificado!` 
  const ageBetweenTwentyAndTwentyNine = ageValue >= 20 && ageValue <= 29
  const ageBetweenThirtyAndThirtyNine = ageValue >= 30 && ageValue <= 39
  const ageBetweenFortyAndFortyNine = ageValue >= 40 && ageValue <= 49
  const ageBetweenFiftyAndFiftyNine = ageValue >= 50 && ageValue <= 59
  const ageBetweenSixtyAndSixtyNine = ageValue >= 60 && ageValue <= 69
  const veryPoorRating = `Muito Fraco`
  const weakRating = `Fraco`
  const regularRating = `Regular`
  const goodRating = `Bom`
  const excellentRating = `Excelente`
  const classificationNotAppliedToAge = `Esta classificação não se aplica a sua idade!`

  switch (sexNumber) {
    
    // men
    case 1:
      
      if(ageBetweenTwentyAndTwentyNine){
        
        if(flexArmTestResult < 17){
          classification = veryPoorRating
        } else if(flexArmTestResult < 30){
          classification = weakRating
        } else if(flexArmTestResult < 40){
          classification = regularRating
        } else if(flexArmTestResult < 50){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenThirtyAndThirtyNine){
        
        if(flexArmTestResult < 14){
          classification = veryPoorRating
        } else if(flexArmTestResult < 22){
          classification = weakRating
        } else if(flexArmTestResult < 31){
          classification = regularRating
        } else if(flexArmTestResult < 40){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenFortyAndFortyNine){
        
        if(flexArmTestResult < 11){
          classification = veryPoorRating
        } else if(flexArmTestResult < 18){
          classification = weakRating
        } else if(flexArmTestResult < 27){
          classification = regularRating
        } else if(flexArmTestResult < 35){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenFiftyAndFiftyNine){
        
        if(flexArmTestResult < 8){
          classification = veryPoorRating
        } else if(flexArmTestResult < 15){
          classification = weakRating
        } else if(flexArmTestResult < 24){
          classification = regularRating
        } else if(flexArmTestResult < 30){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenSixtyAndSixtyNine){
        
        if(flexArmTestResult < 5){
          classification = veryPoorRating
        } else if(flexArmTestResult < 10){
          classification = weakRating
        } else if(flexArmTestResult < 17){
          classification = regularRating
        } else if(flexArmTestResult < 25){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else {
        classification = classificationNotAppliedToAge
      }

      break;
    
    // woman
    case 2:

      if(ageBetweenTwentyAndTwentyNine){
        
        if(flexArmTestResult < 7){
          classification = veryPoorRating
        } else if(flexArmTestResult < 16){
          classification = weakRating
        } else if(flexArmTestResult < 27){
          classification = regularRating
        } else if(flexArmTestResult < 38){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenThirtyAndThirtyNine){
        
        if(flexArmTestResult < 5){
          classification = veryPoorRating
        } else if(flexArmTestResult < 13){
          classification = weakRating
        } else if(flexArmTestResult < 24){
          classification = regularRating
        } else if(flexArmTestResult < 35){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenFortyAndFortyNine){
        
        if(flexArmTestResult < 4){
          classification = veryPoorRating
        } else if(flexArmTestResult < 10){
          classification = weakRating
        } else if(flexArmTestResult < 21){
          classification = regularRating
        } else if(flexArmTestResult < 32){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenFiftyAndFiftyNine){
        
        if(flexArmTestResult < 3){
          classification = veryPoorRating
        } else if(flexArmTestResult < 8){
          classification = weakRating
        } else if(flexArmTestResult < 18){
          classification = regularRating
        } else if(flexArmTestResult < 29){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenSixtyAndSixtyNine){
        
        if(flexArmTestResult < 2){
          classification = veryPoorRating
        } else if(flexArmTestResult < 6){
          classification = weakRating
        } else if(flexArmTestResult < 13){
          classification = regularRating
        } else if(flexArmTestResult < 20){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else {
        classification = classificationNotAppliedToAge
      }

      break;
  
    default:

      classification = unidentifiedSex

      break;
  }

  return classification

}
/*
console.log(`MEN`)
console.log(`idade entre 20 e 29 anos`)
console.log(flexArmClassification(1, 29, 16))
console.log(flexArmClassification(1, 29, 29))
console.log(flexArmClassification(1, 29, 39))
console.log(flexArmClassification(1, 29, 49))
console.log(flexArmClassification(1, 29, 50))
console.log(`idade entre 30 e 39 anos`)
console.log(flexArmClassification(1, 39, 13))
console.log(flexArmClassification(1, 39, 21))
console.log(flexArmClassification(1, 39, 30))
console.log(flexArmClassification(1, 39, 39))
console.log(flexArmClassification(1, 39, 40))
console.log(`idade entre 40 e 49 anos`)
console.log(flexArmClassification(1, 49, 10))
console.log(flexArmClassification(1, 49, 17))
console.log(flexArmClassification(1, 49, 26))
console.log(flexArmClassification(1, 49, 34))
console.log(flexArmClassification(1, 49, 35))
console.log(`idade entre 50 e 59 anos`)
console.log(flexArmClassification(1, 59, 7))
console.log(flexArmClassification(1, 59, 14))
console.log(flexArmClassification(1, 59, 23))
console.log(flexArmClassification(1, 59, 29))
console.log(flexArmClassification(1, 59, 30))
console.log(`idade entre 60 e 69 anos`)
console.log(flexArmClassification(1, 69, 4))
console.log(flexArmClassification(1, 69, 9))
console.log(flexArmClassification(1, 69, 16))
console.log(flexArmClassification(1, 69, 24))
console.log(flexArmClassification(1, 69, 25))
console.log(`=====================`)
console.log(flexArmClassification(3, 69, 33))
console.log(flexArmClassification(1, 70, 33))
console.log(flexArmClassification(1, 19, 33))
console.log(`WOMAN`)
console.log(`idade entre 20 e 29 anos`)
console.log(flexArmClassification(2, 29, 6))
console.log(flexArmClassification(2, 29, 15))
console.log(flexArmClassification(2, 29, 26))
console.log(flexArmClassification(2, 29, 37))
console.log(flexArmClassification(2, 29, 38))
console.log(`idade entre 30 e 39 anos`)
console.log(flexArmClassification(2, 39, 4))
console.log(flexArmClassification(2, 39, 12))
console.log(flexArmClassification(2, 39, 23))
console.log(flexArmClassification(2, 39, 34))
console.log(flexArmClassification(2, 39, 35))
console.log(`idade entre 40 e 49 anos`)
console.log(flexArmClassification(2, 49, 3))
console.log(flexArmClassification(2, 49, 9))
console.log(flexArmClassification(2, 49, 20))
console.log(flexArmClassification(2, 49, 31))
console.log(flexArmClassification(2, 49, 32))
console.log(`idade entre 50 e 59 anos`)
console.log(flexArmClassification(2, 59, 2))
console.log(flexArmClassification(2, 59, 7))
console.log(flexArmClassification(2, 59, 17))
console.log(flexArmClassification(2, 59, 28))
console.log(flexArmClassification(2, 59, 29))
console.log(`idade entre 60 e 69 anos`)
console.log(flexArmClassification(2, 69, 1))
console.log(flexArmClassification(2, 69, 5))
console.log(flexArmClassification(2, 69, 12))
console.log(flexArmClassification(2, 69, 19))
console.log(flexArmClassification(2, 69, 20))
console.log(`=====================`)
console.log(flexArmClassification(3, 69, 33))
console.log(flexArmClassification(2, 70, 33))
console.log(flexArmClassification(2, 19, 33))*/


function flexArmClassification(objectValue){

  const sexNumber = objectValue.sexNumber
  const ageValue = objectValue.age
  const flexArmTestResult = objectValue.numberOfPushUps
  
  let classification = ''
  const unidentifiedSex = `[ERROR] Sexo não identificado!` 
  const ageBetweenTwentyAndTwentyNine = ageValue >= 20 && ageValue <= 29
  const ageBetweenThirtyAndThirtyNine = ageValue >= 30 && ageValue <= 39
  const ageBetweenFortyAndFortyNine = ageValue >= 40 && ageValue <= 49
  const ageBetweenFiftyAndFiftyNine = ageValue >= 50 && ageValue <= 59
  const ageBetweenSixtyAndSixtyNine = ageValue >= 60 && ageValue <= 69
  const veryPoorRating = `Muito Fraco`
  const weakRating = `Fraco`
  const regularRating = `Regular`
  const goodRating = `Bom`
  const excellentRating = `Excelente`
  const classificationNotAppliedToAge = `Esta classificação não se aplica a sua idade!`

  switch (sexNumber) {
    
    // men
    case 1:
      
      if(ageBetweenTwentyAndTwentyNine){
        
        if(flexArmTestResult < 17){
          classification = veryPoorRating
        } else if(flexArmTestResult < 30){
          classification = weakRating
        } else if(flexArmTestResult < 40){
          classification = regularRating
        } else if(flexArmTestResult < 50){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenThirtyAndThirtyNine){
        
        if(flexArmTestResult < 14){
          classification = veryPoorRating
        } else if(flexArmTestResult < 22){
          classification = weakRating
        } else if(flexArmTestResult < 31){
          classification = regularRating
        } else if(flexArmTestResult < 40){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenFortyAndFortyNine){
        
        if(flexArmTestResult < 11){
          classification = veryPoorRating
        } else if(flexArmTestResult < 18){
          classification = weakRating
        } else if(flexArmTestResult < 27){
          classification = regularRating
        } else if(flexArmTestResult < 35){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenFiftyAndFiftyNine){
        
        if(flexArmTestResult < 8){
          classification = veryPoorRating
        } else if(flexArmTestResult < 15){
          classification = weakRating
        } else if(flexArmTestResult < 24){
          classification = regularRating
        } else if(flexArmTestResult < 30){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenSixtyAndSixtyNine){
        
        if(flexArmTestResult < 5){
          classification = veryPoorRating
        } else if(flexArmTestResult < 10){
          classification = weakRating
        } else if(flexArmTestResult < 17){
          classification = regularRating
        } else if(flexArmTestResult < 25){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else {
        classification = classificationNotAppliedToAge
      }

      break;
    
    // woman
    case 2:

      if(ageBetweenTwentyAndTwentyNine){
        
        if(flexArmTestResult < 7){
          classification = veryPoorRating
        } else if(flexArmTestResult < 16){
          classification = weakRating
        } else if(flexArmTestResult < 27){
          classification = regularRating
        } else if(flexArmTestResult < 38){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenThirtyAndThirtyNine){
        
        if(flexArmTestResult < 5){
          classification = veryPoorRating
        } else if(flexArmTestResult < 13){
          classification = weakRating
        } else if(flexArmTestResult < 24){
          classification = regularRating
        } else if(flexArmTestResult < 35){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenFortyAndFortyNine){
        
        if(flexArmTestResult < 4){
          classification = veryPoorRating
        } else if(flexArmTestResult < 10){
          classification = weakRating
        } else if(flexArmTestResult < 21){
          classification = regularRating
        } else if(flexArmTestResult < 32){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenFiftyAndFiftyNine){
        
        if(flexArmTestResult < 3){
          classification = veryPoorRating
        } else if(flexArmTestResult < 8){
          classification = weakRating
        } else if(flexArmTestResult < 18){
          classification = regularRating
        } else if(flexArmTestResult < 29){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenSixtyAndSixtyNine){
        
        if(flexArmTestResult < 2){
          classification = veryPoorRating
        } else if(flexArmTestResult < 6){
          classification = weakRating
        } else if(flexArmTestResult < 13){
          classification = regularRating
        } else if(flexArmTestResult < 20){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else {
        classification = classificationNotAppliedToAge
      }

      break;
  
    default:

      classification = unidentifiedSex

      break;
  }

  return classification

}

// Test Abdominal Classification
const testManFlexArmClassification = {
  sexNumber: 1,
  arrayAge: [19, 29, 39, 49, 59, 69, 70],
  arrayFlexArmClassification: [
    arrayMen0To19  = [16, 29, 39, 49, 50], 
    arrayMen20To29 = [16, 29, 39, 49, 50],
    arrayMen30To39 = [13, 21, 30, 39, 40],
    arrayMen40To49 = [10, 17, 26, 34, 35],
    arrayMen50To59 = [7, 14, 23, 29, 30],
    arrayMen60To69 = [4, 9, 16, 24, 25],
    arrayMenGreaterThan69 = [0.89, 0.96, 1.01, 1.02, 10],
  ],
  arrayTitle: [
    `idade entre 0 e 19 anos`,
    `idade entre 20 e 29 anos`,
    `idade entre 30 e 39 anos`,
    `idade entre 40 e 49 anos`,
    `idade entre 50 e 59 anos`,
    `idade entre 60 e 69 anos`,
    `idade maior que 69 anos`,
  ]                  
}

const testWomanFlexArmClassification = {
  sexNumber: 2,
  arrayAge: [19, 29, 39, 49, 59, 69, 70],
  arrayFlexArmClassification: [
    arrayWoman0To19  = [6, 15, 26, 37, 38],
    arrayWoman20To29 = [6, 15, 26, 37, 38],
    arrayWoman30To39 = [4, 12, 23, 34, 35],
    arrayWoman40To49 = [3, 9, 20, 31, 32],
    arrayWoman50To59 = [2, 7, 17, 28, 29],
    arrayWoman60To69 = [1, 5, 12, 19, 20],
    arrayWomanGreaterThan69 = [22, 26, 34, 35, 10],
  ],
  arrayTitle: [
    `idade entre 0 e 19 anos`,
    `idade entre 20 e 29 anos`,
    `idade entre 30 e 39 anos`,
    `idade entre 40 e 49 anos`,
    `idade entre 50 e 59 anos`,
    `idade entre 60 e 69 anos`,
    `idade maior que 69 anos`,
  ]                 
}

function testFlexArmClassification(objectTest){

  let object = {}
  object.sexNumber = objectTest.sexNumber 
  const age = objectTest.arrayAge
  const title = objectTest.arrayTitle
  const arrayValues = objectTest.arrayFlexArmClassification

  for(let i = 0; i < age.length; i++){
    object.age = age[i]
    console.log(title[i])
    for(let j = 0; j < arrayValues[i].length; j++){
      object.numberOfPushUps = arrayValues[i][j]
      console.log(`FLEXÃO DE BRAÇO = ${object.numberOfPushUps} - Classificacão = ${flexArmClassification(object)}`)
    }
  }

}

// console.log(`HOMENS - HOMENS - HOMENS - HOMENS - HOMENS`)
// testFlexArmClassification(testManFlexArmClassification)
// console.log(`MULHERES - MULHERES - MULHERES - MULHERES - MULHERES`)
// testFlexArmClassification(testWomanFlexArmClassification)

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Aerobic Tests == **/
/** == VO two max == **/

function menuVoTwoMax(){
  
  let choise = 0
  let validChoise = false
  const regexFromOneToFour = /(^[1]$)|(^[2]$)|(^[3]$)|(^[4]$)/

  do{
    
    console.log(`Escolha um teste: `)
    console.log(`[1] Cicloergômetro - Astrand-Rhyming`)
    console.log(`[2] Cooper - 12 min`)
    console.log(`[3] Caminhada de 1600 - Rockport`)
    console.log(`[4] Banco - McArdle`)
    choise = input.question(``)

    validChoise = validationFunctions.isRegularExpression(choise, regexFromOneToFour)
    validationFunctions.incorrectValue(false, !validChoise, "Aeróbico")

  }while(!validChoise)

  return Number(choise)

}

function voTwoMax(){

  let voTwoMaxValue = 0
  let protocol = menuVoTwoMax()

  switch (protocol) {

    case 1:
      voTwoMaxValue = cycleErgometerAstrandRhyming(cycleErgometerObjectAstrandRhyming)
      break;
    
    case 2:
      voTwoMaxValue = cooperTwelveMin()
      break;

    case 3:
      voTwoMaxValue = sixteenHundredWalkRockport()
      break;

    case 4:
      voTwoMaxValue = bankMcArdle()
      break;
  
    default:
      voTwoMaxValue = 0
      break;
  }

  return Number(voTwoMaxValue)

}

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Cycle ergometer - Astrand-Rhyming == **/

function validHeartRate(regex, minute){

  let heartRateValue = 0
  let validHeartRate = false

  do{

    console.log(`Cicloergômetro - Astrand-Rhyming:`)
    heartRateValue = input.question(`Digite a frequência cardíaca do ${minute}º minuto de teste (bpm): `)
    validHeartRate = validationFunctions.isRegularExpression(heartRateValue, regex)
    validationFunctions.incorrectValue(false, !validHeartRate, "Aeróbico")

  }while(!validHeartRate)

  return Number(heartRateValue)
}

function chargeCycleErgometerAstrandRhyming(regex){

  let charge = 0
  let validCharge = false

  do{

    console.log(`Cicloergômetro - Astrand-Rhyming:`)
    charge = input.question(`Digite a carga utilizada no teste (W): `)
    validCharge = validationFunctions.isRegularExpression(charge, regex)
    validationFunctions.incorrectValue(false, !validCharge, "Aeróbico")

  }while(!validCharge)

  return Number(charge)
}

function cycleErgometerAstrandRhyming(cycleErgometerObjectAstrandRhyming){
  
  const regexFromOneToTwoHundred = /(^[0-9]$)|(^[0-9]{2}$)|(^[1][0-9]{2}$)|(^[2][0][0])/
  const fifthMinuteValue = validHeartRate(regexFromOneToTwoHundred, 5)
  const sixthMinuteValue = validHeartRate(regexFromOneToTwoHundred, 6)
  const chargeValue = chargeCycleErgometerAstrandRhyming(regexFromOneToTwoHundred)
  const exertionalHeartRate = Number(((fifthMinuteValue + sixthMinuteValue) / 2))
  const loadVO2 = Number((0.129 + ( 0.014 * chargeValue )))
  const VO2max_L_min =  Number(((( cycleErgometerObjectAstrandRhyming.maximumHeartRate - cycleErgometerObjectAstrandRhyming.restingHeartRate ) / ( exertionalHeartRate - cycleErgometerObjectAstrandRhyming.restingHeartRate )) * loadVO2))
  const VO2max_mL_Kg_min = Number(((1000 * VO2max_L_min ) / cycleErgometerObjectAstrandRhyming.bodyWeight).toFixed(2))

  return VO2max_mL_Kg_min

}

const cycleErgometerObjectAstrandRhyming = {
  restingHeartRate: 55,
  maximumHeartRate: 200,
  bodyWeight: 60,
}

// console.log(voTwoMax())

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Cooper test == **/

function cooperTwelveMin(){

  let distance = 0
  let validDistance = false
  let VO2max_mL_Kg_min = 0
  let regexFourDigits = /(^[0-9]$)|(^[0-9]{2}$)|(^[0-9]{3}$)|(^[0-9]{4}$)/

  do{

    console.log(`Teste de Cooper - 12 min:`)
    distance = input.question(`Digite a distância atingida pelo usuário (m): `)
    validDistance = validationFunctions.isRegularExpression(distance, regexFourDigits)
    validationFunctions.incorrectValue(false, !validDistance, "Aeróbico")

  }while(!validDistance)

  VO2max_mL_Kg_min = Number(((distance - 504.9) / 44.73).toFixed(2))

  return VO2max_mL_Kg_min

}

// console.log(cooperTwelveMin())

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == 1600's Walk - Rockport == **/

const userObject = {
  bodyWeight: 72.5748,
  age: 33,
  sexNumber: 2,
}

function rockportTestTime(){

  let rockportTestTime = 0
  let minutes = 0
  let seconds = 0
  let validMinutes = false
  let validSeconds = false
  let regexMinutesAndSeconds = /(^[0-9]$)|(^[0-5][0-9]$)/ 

  do{

    console.log(`Teste de Caminhada Rockport`)
    minutes = input.question(`Tempo que levou para chegar (minutos): `)
    seconds = input.question(`Tempo que levou para chegar (segundos): `)
    validMinutes = validationFunctions.isRegularExpression(minutes, regexMinutesAndSeconds)
    validSeconds = validationFunctions.isRegularExpression(seconds, regexMinutesAndSeconds)
    validationFunctions.incorrectValue(!validMinutes, !validSeconds, "Aeróbico")

  }while(!validMinutes || !validSeconds)

  rockportTestTime = (Number(minutes) + (Number(seconds) / 60))
  
  return rockportTestTime
}

// console.log(rockportTestTime())

function testHeartRate(testName){

  let testHeartRate = 0
  let validTestHeartRate = false
  let isNumberFromZeroToTwoHundredAndTwenty = /(^[0-9]$)|(^[0-9]{2}$)|(^[1][0-9]{2}$)|(^[2][0-1][0-9]$)|(^[2][2][0]$)/ 

  do{

    console.log(`${testName}`)
    testHeartRate = input.question(`Frequência Cardíaca ao final do teste (bpm): `)
    validTestHeartRate = validationFunctions.isRegularExpression(testHeartRate, isNumberFromZeroToTwoHundredAndTwenty)
    validationFunctions.incorrectValue(false, !validTestHeartRate, "Aeróbico")

  }while(!validTestHeartRate)
  
  return Number(testHeartRate)

}

// console.log(testHeartRate())

function oneThousandSixHundredFromRockport(userObject){

  let testTime = aerobicFunctions.rockportTestTime()
  let heartRate = aerobicFunctions.testHeartRate()
  let weightInPounds = Number(userObject.bodyWeight / 0.454)
  let VO2max_mL_Kg_min = 0

  if(userObject.sexNumber === 1){
    VO2max_mL_Kg_min = Number((132.853 - (0.0769 * weightInPounds) - (0.3877 * userObject.age) + (6.315 * 1) - (3.2649 * testTime) - (0.1565 * heartRate)).toFixed(2))
  } else {
    VO2max_mL_Kg_min = Number((132.853 - (0.0769 * weightInPounds) - (0.3877 * userObject.age) + (6.315 * 0) - (3.2649 * testTime) - (0.1565 * heartRate)).toFixed(2))
  }
  
  return {testTime, heartRate, VO2max_mL_Kg_min}

}

// console.log(oneThousandSixHundredFromRockport(userObject))

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Bank - McArdle == **/

function bankMcArdle(userObject){

  let VO2max_mL_Kg_min = 0
  let heartRate = aerobicFunctions.testHeartRate('Teste Banco - McArdle')
  
  if(userObject.sexNumber === 1){

    VO2max_mL_Kg_min = Number((111.33 - ( 0.42 * heartRate )).toFixed(2))

  } else {

    VO2max_mL_Kg_min = Number(( 65.81- ( 0.1847 * heartRate)).toFixed(2))
  }

  return VO2max_mL_Kg_min
}

// console.log(bankMcArdle(userObject))

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Expected max VO² == **/

function vo2maxExpected(userObject){

  let VO2max_mL_Kg_min_Expected = 0

  if(userObject.sexNumber === 1){

    VO2max_mL_Kg_min_Expected = Number(( 60 - ( 0.55 * userObject.age)).toFixed(2))

  } else {

    VO2max_mL_Kg_min_Expected = Number(( 48 - (0.37 * userObject.age)).toFixed(2))

  }

  return VO2max_mL_Kg_min_Expected

}

const userMan = {
  sexNumber: 1,
  age: 33,
}

const userWoman = {
  sexNumber: 2,
  age: 33,
}

// console.log(vo2maxExpected(userWoman))
// console.log(vo2maxExpected(userMan))

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == VO² max.(mL(kg.min) - Classification == **/

/* deleted
function vo2maxClassification(userObject){
  
  let classification = ''
  const unidentifiedSex = `[ERROR] Sexo não identificado!` 
  const ageBetweenTwentyAndTwentyNine = userObject.age >= 20 && userObject.age <= 29
  const ageBetweenThirtyAndThirtyNine = userObject.age >= 30 && userObject.age <= 39
  const ageBetweenFortyAndFortyNine = userObject.age >= 40 && userObject.age <= 49
  const ageBetweenFiftyAndFiftyNine = userObject.age >= 50 && userObject.age <= 59
  const ageBetweenSixtyAndSixtyNine = userObject.age >= 60 && userObject.age <= 69
  const veryPoorRating = `Muito Fraco`
  const weakRating = `Fraco`
  const regularRating = `Regular`
  const goodRating = `Bom`
  const excellentRating = `Excelente`
  const classificationNotAppliedToAge = `Esta classificação não se aplica a sua idade!`

  switch (userObject.sexNumber) {
    
    // men
    case 1:
      
      if(ageBetweenTwentyAndTwentyNine){
        
        if(userObject.voTwoMax < 25){
          classification = veryPoorRating
        } else if(userObject.voTwoMax < 34){
          classification = weakRating
        } else if(userObject.voTwoMax < 43){
          classification = regularRating
        } else if(userObject.voTwoMax < 54){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenThirtyAndThirtyNine){
        
        if(userObject.voTwoMax < 23){
          classification = veryPoorRating
        } else if(userObject.voTwoMax < 31){
          classification = weakRating
        } else if(userObject.voTwoMax < 39){
          classification = regularRating
        } else if(userObject.voTwoMax < 49){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenFortyAndFortyNine){
        
        if(userObject.voTwoMax < 20){
          classification = veryPoorRating
        } else if(userObject.voTwoMax < 27){
          classification = weakRating
        } else if(userObject.voTwoMax < 36){
          classification = regularRating
        } else if(userObject.voTwoMax < 45){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenFiftyAndFiftyNine){
        
        if(userObject.voTwoMax < 18){
          classification = veryPoorRating
        } else if(userObject.voTwoMax < 25){
          classification = weakRating
        } else if(userObject.voTwoMax < 34){
          classification = regularRating
        } else if(userObject.voTwoMax < 43){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenSixtyAndSixtyNine){
        
        if(userObject.voTwoMax < 16){
          classification = veryPoorRating
        } else if(userObject.voTwoMax < 23){
          classification = weakRating
        } else if(userObject.voTwoMax < 31){
          classification = regularRating
        } else if(userObject.voTwoMax < 41){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else {
        classification = classificationNotAppliedToAge
      }

      break;
    
    // woman
    case 2:

      if(ageBetweenTwentyAndTwentyNine){
        
        if(userObject.voTwoMax < 24){
          classification = veryPoorRating
        } else if(userObject.voTwoMax < 31){
          classification = weakRating
        } else if(userObject.voTwoMax < 38){
          classification = regularRating
        } else if(userObject.voTwoMax < 49){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenThirtyAndThirtyNine){
        
        if(userObject.voTwoMax < 20){
          classification = veryPoorRating
        } else if(userObject.voTwoMax < 28){
          classification = weakRating
        } else if(userObject.voTwoMax < 34){
          classification = regularRating
        } else if(userObject.voTwoMax < 45){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenFortyAndFortyNine){
        
        if(userObject.voTwoMax < 17){
          classification = veryPoorRating
        } else if(userObject.voTwoMax < 24){
          classification = weakRating
        } else if(userObject.voTwoMax < 31){
          classification = regularRating
        } else if(userObject.voTwoMax < 42){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenFiftyAndFiftyNine){
        
        if(userObject.voTwoMax < 15){
          classification = veryPoorRating
        } else if(userObject.voTwoMax < 21){
          classification = weakRating
        } else if(userObject.voTwoMax < 28){
          classification = regularRating
        } else if(userObject.voTwoMax < 38){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenSixtyAndSixtyNine){
        
        if(userObject.voTwoMax < 13){
          classification = veryPoorRating
        } else if(userObject.voTwoMax < 18){
          classification = weakRating
        } else if(userObject.voTwoMax < 24){
          classification = regularRating
        } else if(userObject.voTwoMax < 35){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else {
        classification = classificationNotAppliedToAge
      }

      break;
  
    default:

      classification = unidentifiedSex

      break;
  }

  return classification

}
*/

function vo2maxClassification(objectValue){
  
  const sex = objectValue.sexNumber
  const age = objectValue.age
  const voTwoMax = objectValue.voTwoMax

  let classification = ''
  const unidentifiedSex = `[ERROR] Sexo não identificado!` 
  const ageBetweenTwentyAndTwentyNine = age >= 20 && age <= 29
  const ageBetweenThirtyAndThirtyNine = age >= 30 && age <= 39
  const ageBetweenFortyAndFortyNine = age >= 40 && age <= 49
  const ageBetweenFiftyAndFiftyNine = age >= 50 && age <= 59
  const ageBetweenSixtyAndSixtyNine = age >= 60 && age <= 69
  const veryPoorRating = `Muito Fraco`
  const weakRating = `Fraco`
  const regularRating = `Regular`
  const goodRating = `Bom`
  const excellentRating = `Excelente`
  const classificationNotAppliedToAge = `Esta classificação não se aplica a sua idade!`

  switch (sex) {
    
    // men
    case 1:
      
      if(ageBetweenTwentyAndTwentyNine){
        
        if(voTwoMax < 25){
          classification = veryPoorRating
        } else if(voTwoMax < 34){
          classification = weakRating
        } else if(voTwoMax < 43){
          classification = regularRating
        } else if(voTwoMax < 54){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenThirtyAndThirtyNine){
        
        if(voTwoMax < 23){
          classification = veryPoorRating
        } else if(voTwoMax < 31){
          classification = weakRating
        } else if(voTwoMax < 39){
          classification = regularRating
        } else if(voTwoMax < 49){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenFortyAndFortyNine){
        
        if(voTwoMax < 20){
          classification = veryPoorRating
        } else if(voTwoMax < 27){
          classification = weakRating
        } else if(voTwoMax < 36){
          classification = regularRating
        } else if(voTwoMax < 45){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenFiftyAndFiftyNine){
        
        if(voTwoMax < 18){
          classification = veryPoorRating
        } else if(voTwoMax < 25){
          classification = weakRating
        } else if(voTwoMax < 34){
          classification = regularRating
        } else if(voTwoMax < 43){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenSixtyAndSixtyNine){
        
        if(voTwoMax < 16){
          classification = veryPoorRating
        } else if(voTwoMax < 23){
          classification = weakRating
        } else if(voTwoMax < 31){
          classification = regularRating
        } else if(voTwoMax < 41){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else {
        classification = classificationNotAppliedToAge
      }

      break;
    
    // woman
    case 2:

      if(ageBetweenTwentyAndTwentyNine){
        
        if(voTwoMax < 24){
          classification = veryPoorRating
        } else if(voTwoMax < 31){
          classification = weakRating
        } else if(voTwoMax < 38){
          classification = regularRating
        } else if(voTwoMax < 49){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenThirtyAndThirtyNine){
        
        if(voTwoMax < 20){
          classification = veryPoorRating
        } else if(voTwoMax < 28){
          classification = weakRating
        } else if(voTwoMax < 34){
          classification = regularRating
        } else if(voTwoMax < 45){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenFortyAndFortyNine){
        
        if(voTwoMax < 17){
          classification = veryPoorRating
        } else if(voTwoMax < 24){
          classification = weakRating
        } else if(voTwoMax < 31){
          classification = regularRating
        } else if(voTwoMax < 42){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenFiftyAndFiftyNine){
        
        if(voTwoMax < 15){
          classification = veryPoorRating
        } else if(voTwoMax < 21){
          classification = weakRating
        } else if(voTwoMax < 28){
          classification = regularRating
        } else if(voTwoMax < 38){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageBetweenSixtyAndSixtyNine){
        
        if(voTwoMax < 13){
          classification = veryPoorRating
        } else if(voTwoMax < 18){
          classification = weakRating
        } else if(voTwoMax < 24){
          classification = regularRating
        } else if(voTwoMax < 35){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else {
        classification = classificationNotAppliedToAge
      }

      break;
  
    default:

      classification = unidentifiedSex

      break;
  }

  return classification

}

const objectTestMen = {
  sexNumber: 1,
  arrayAge: [29, 39, 49, 59, 69, 19, 70],
  arrayVoTwoMax: [
    arrayMen20To29 = [24, 33, 42, 53, 54],
    arrayMen30To39 = [22, 30, 38, 48, 49],
    arrayMen40To49 = [19, 26, 35, 44, 45],
    arrayMen50To59 = [17, 24, 33, 42, 43],
    arrayMen60To69 = [15, 22, 30, 40, 41],
    arrayMenLessThan20 = [24, 33, 42, 53, 54],
    arrayMenGreaterThan69 = [22, 30, 38, 48, 49],
  ],
  arrayTitle: [
    `idade entre 20 e 29 anos`,
    `idade entre 30 e 39 anos`,
    `idade entre 40 e 49 anos`,
    `idade entre 50 e 59 anos`,
    `idade entre 60 e 69 anos`,
    `idade menor que 20 anos`,
    `idade maior que 69 anos`,
  ]                  
}

const objectTestWoman = {
  sexNumber: 2,
  arrayAge: [29, 39, 49, 59, 69, 19, 70],
  arrayVoTwoMax: [
    arrayWoman20To29 = [23, 30, 37, 48, 49],
    arrayWoman30To39 = [19, 27, 33, 44, 45],
    arrayWoman40To49 = [16, 23, 30, 41, 42],
    arrayWoman50To59 = [14, 20, 27, 37, 38],
    arrayWoman60To69 = [12, 17, 23, 34, 35],
    arrayWomanLessThan20 = [24, 33, 42, 53, 54],
    arrayWomanGreaterThan69 = [22, 30, 38, 48, 49],
  ],
  arrayTitle: [
    `idade entre 20 e 29 anos`,
    `idade entre 30 e 39 anos`,
    `idade entre 40 e 49 anos`,
    `idade entre 50 e 59 anos`,
    `idade entre 60 e 69 anos`,
    `idade menor que 20 anos`,
    `idade maior que 69 anos`,
  ]                 
}

const objectUnidentifiedSex = {
  sexNumber: 3,
  arrayAge: [29, 39, 49, 59, 69, 19, 70],
  arrayVoTwoMax: [
    arrayWoman20To29 = [23],
    arrayWoman30To39 = [19],
    arrayWoman40To49 = [16],
    arrayWoman50To59 = [14],
    arrayWoman60To69 = [12],
    arrayWomanLessThan20 = [24],
    arrayWomanGreaterThan69 = [22],
  ],
  arrayTitle: [
    `idade entre 20 e 29 anos`,
    `idade entre 30 e 39 anos`,
    `idade entre 40 e 49 anos`,
    `idade entre 50 e 59 anos`,
    `idade entre 60 e 69 anos`,
    `idade menor que 20 anos`,
    `idade maior que 69 anos`,
  ]                 
}

function testClassification(object){

  for(let i = 0; i < object.arrayAge.length; i++){
    object.age = object.arrayAge[i]
    console.log(object.arrayTitle[i])
    for(let j = 0; j < object.arrayVoTwoMax[i].length; j++){
      object.voTwoMax = object.arrayVoTwoMax[i][j]
      console.log(`Vo2Max = ${object.voTwoMax} - Classificacão = ${vo2maxClassification(object)}`)
    }
  }

}

// console.log(`HOMENS - HOMENS - HOMENS - HOMENS - HOMENS`)
// testClassification(objectTestMen)
// console.log(`MULHERES - MULHERES - MULHERES - MULHERES - MULHERES`)
// testClassification(objectTestWoman)
// console.log(`UNIDENTIFIED SEX - UNIDENTIFIED SEX - UNIDENTIFIED SEX`)
// testClassification(objectUnidentifiedSex)

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == training speed == **/

function TESTtrainingSpeed(userObject){

  let objectTrainingSpeed = {
    METs: 0,
    percentage: [],
    trainingFrequency: [],
    trainingSpeed: [],
    titleTrainSpeed: `Velocidade de Treino:`, 
    showTrainingSpeed: [],
  }

  objectTrainingSpeed.METs = Number((userObject.voTwoMax / 3.5)) // Calculate METs

  // Calculate Percentage
  for(let i = 40; i <= 95; i+=5){
    objectTrainingSpeed.percentage.push(Number([i]))
  }

  // Calculate Training Frequency
  for(let i = 0; i < objectTrainingSpeed.percentage.length; i++){
    
    if(userObject.currentPhysicalState === 1){
      objectTrainingSpeed.trainingFrequency.push(Number((objectTrainingSpeed.percentage[i] / 100)))
    } else if(userObject.currentPhysicalState === 2){
      objectTrainingSpeed.trainingFrequency.push(Number(((objectTrainingSpeed.METs + objectTrainingSpeed.percentage[i]) / 100)))
    }

  }
  
  // Calculate Training Speed
  for(let i = 0; i < objectTrainingSpeed.trainingFrequency.length; i++){

    objectTrainingSpeed.trainingSpeed.push(Number((objectTrainingSpeed.METs * objectTrainingSpeed.trainingFrequency[i]).toFixed(2)))

  }

  // Show Training Speed
  for(let i = 0; i < objectTrainingSpeed.trainingSpeed.length; i++){
    objectTrainingSpeed.showTrainingSpeed.push(`${objectTrainingSpeed.percentage[i]}% = ${objectTrainingSpeed.trainingSpeed[i]} km/h`)
  }

  return objectTrainingSpeed

}

const TESTusuarioSedentario = {
  voTwoMax: 44.13,
  currentPhysicalState: 1,
}

const TESTusuarioAtivo = {
  voTwoMax: 44.13,
  currentPhysicalState: 2,
}

// console.log(`SEDENTÁRIO`)
// console.log(trainingSpeed(usuarioSedentario))
// console.log(`ATIVO`)
// console.log(trainingSpeed(usuarioAtivo))

const usuarioSedentario = {
  voTwoMax: 44.13,
  currentPhysicalState: 1,
  percentageValues: [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
}

const usuarioAtivo = {
  voTwoMax: 44.13,
  currentPhysicalState: 2,
  percentageValues: [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
}

function trainingSpeed(objectValue){

  const voTwoMax = objectValue.voTwoMax
  const percentageValues = objectValue.percentageValues
  const currentPhysicalState = objectValue.currentPhysicalState

  let METs = 0
  let trainingFrequency = []
  let trainingSpeed = []

  // Calculate METs
  METs = Number((voTwoMax / 3.5))

  // Calculate Training Frequency
  for(let percentage of percentageValues){

    if(currentPhysicalState === 1){
      trainingFrequency.push(Number((percentage / 100)))
    } else if(currentPhysicalState === 2){
      trainingFrequency.push(Number(((METs + percentage) / 100)))
    }
  }
  
  // Calculate Training Speed
  for(let frequency of trainingFrequency){
  
    trainingSpeed.push(Number((METs * frequency).toFixed(2)))
  }

  return trainingSpeed

}

usuarioSedentario.trainingSpeed =  trainingSpeed(usuarioSedentario)
usuarioAtivo.trainingSpeed = trainingSpeed(usuarioAtivo)

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Show Training Speed== **/

function showTrainingSpeed(objectValue){
  
  const percentage = objectValue.percentageValues
  const trainingSpeed = objectValue.trainingSpeed

  console.log(` - Velocidade de Treino - `)
  for(let i = 0; i < trainingSpeed.length; i++){
    console.log(`       ${percentage[i]}% = ${trainingSpeed[i]} km/h`)
  }
}

// console.log(`SEDENTÁRIO`)
// showTrainingSpeed(usuarioSedentario)
// console.log(`ATIVO`)
// showTrainingSpeed(usuarioAtivo)

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Déficit Funcional Aeróbio - FAI == **/

const usuario01 = {
  voTwoMax: 44.13,
  voTwoMaxExpected: 41.3,
}

function aerobicFunctionalDeficit(userObject){

  return Number((( (userObject.voTwoMaxExpected  -  userObject.voTwoMax)  /  userObject.voTwoMaxExpected ) * 100).toFixed(2))

}

usuario01.aerobicFunctionalDeficit = aerobicFunctionalDeficit(usuario01)
// console.log(aerobicFunctionalDeficit(usuario01))

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Aerobic Functional Deficit - FAI - Classification == **/

function TESTaerobicFunctionalDeficitClassification(userObject){

  let classification = `` 
  const veryLow = userObject.aerobicFunctionalDeficit > 25
  const veryLowRating = `Muito Baixo`
  const low = userObject.aerobicFunctionalDeficit >  9
  const lowRating = `Baixo`
  const good = userObject.aerobicFunctionalDeficit > 0
  const goodRating = `Bom`
  
  const greatRating = `Ótimo`
  
  if(veryLow){
    classification = veryLowRating
  } else if(low){
    classification = lowRating
  } else if(good){
    classification = goodRating
  } else {
    classification = greatRating
  }

  return classification

}

// console.log(`Classificação: ${aerobicFunctionalDeficitClassification(usuario01)}`)

function aerobicFunctionalDeficitClassification(objectValue){

  let classification = ``
  const aerobicFunctionalDeficit = objectValue.aerobicFunctionalDeficit
  const veryLow = aerobicFunctionalDeficit > 25
  const veryLowRating = `Muito Baixo`
  const low = aerobicFunctionalDeficit >  9
  const lowRating = `Baixo`
  const good = aerobicFunctionalDeficit > 0
  const goodRating = `Bom`
  const greatRating = `Ótimo`
  
  if(veryLow){
    classification = veryLowRating
  } else if(low){
    classification = lowRating
  } else if(good){
    classification = goodRating
  } else {
    classification = greatRating
  }

  return classification

}

// Test Aerobic Functional Deficit Classification
const usuario02 = {
  voTwoMax: [25, 31, 34, 37],
  voTwoMaxExpected: [35, 35, 35, 35],
}

function testAerobicFunctionalDeficitClassification(object){

  const voTwoMax = object.voTwoMax
  const voTwoMaxExpected = object.voTwoMaxExpected
  let user = {}

  for(let i = 0; i < voTwoMax.length; i++){
    user.voTwoMax = voTwoMax[i]
    user.voTwoMaxExpected = voTwoMaxExpected[i]
    user.aerobicFunctionalDeficit = aerobicFunctionalDeficit(user)
    console.log(`FAI: ${user.aerobicFunctionalDeficit} - Classificação: ${aerobicFunctionalDeficitClassification(user)}`)
  }

}

testAerobicFunctionalDeficitClassification(usuario02)

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == others == **/
/** == comments == **/

function comments(){

  let commentsNumber = 2
  let commentsText = ''
  let itsNumberOneOrTwo = true
  const regexNumber = /^[1]$|^[2]$/
  let isAlphanumericCharacters = true
  const regexAlphanumericCharacters = /\D|\d/ 

  do{

    console.log(`Observações?`)
    anamnesisFunctions.choice()
    commentsNumber = Number(input.question(''))

    itsNumberOneOrTwo = validationFunctions.isRegularExpression(commentsNumber, regexNumber)
    validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Observações")

    if(commentsNumber === 1){
      
      do{

        console.log(`Digite a Observação:`)
        commentsText = input.question('')
        isAlphanumericCharacters = validationFunctions.isRegularExpression(commentsText, regexAlphanumericCharacters)
        validationFunctions.incorrectValue(false, !isAlphanumericCharacters, "Observações")
        
      }while(!isAlphanumericCharacters)
      
    } else {
      commentsText = `Sem Observações!`
    }

  }while(!itsNumberOneOrTwo)

    return commentsText

}

// console.log(comments())

/*=======================================================================*/

/* Anamnesis Functions */
/*
var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')

const anamnesisFunctions = {
      
  name: function() {
    
    let notNumber = true
    let name = ''
    
    while(notNumber){
      name = input.question('Digite seu nome: ')
      notNumber = validationFunctions.itsLetters(name)
      validationFunctions.incorrectValue(false, notNumber)
    }
    
    return name
  
  },

  birthDay: function(){
  
    let correctValue = true
    let correctAmount = true
    let minimumValue = true
    let maximumValue = true
    let birthDay = 0
  
    while(correctValue || correctAmount || minimumValue || maximumValue){
      birthDay = input.question('Digite o dia de seu nascimento [DD]: ')
      correctValue = validationFunctions.itsNumber(birthDay)
      correctAmount = validationFunctions.correctSize(birthDay, 2)
      minimumValue = validationFunctions.minimumValue(1, birthDay)
      maximumValue = validationFunctions.maximumValue(31, birthDay)
      validationFunctions.incorrectValue(correctValue, correctAmount)
      validationFunctions.incorrectValue(minimumValue, maximumValue)
    }
  
    return birthDay
  },
  
  birthMonth: function(){
  
    let correctValue = true
    let correctAmount = true
    let minimumValue = true
    let maximumValue = true
    let birthMonth = 0
  
    while(correctValue || correctAmount || minimumValue || maximumValue){
      birthMonth = input.question('Digite o mês de seu nascimento [MM]: ')
      correctValue = validationFunctions.itsNumber(birthMonth)
      correctAmount = validationFunctions.correctSize(birthMonth, 2)
      minimumValue = validationFunctions.minimumValue(1, birthMonth)
      maximumValue = validationFunctions.maximumValue(12, birthMonth)
      validationFunctions.incorrectValue(correctValue, correctAmount)
      validationFunctions.incorrectValue(minimumValue, maximumValue)
    }
  
    return birthMonth
  
  },

  birthYear: function(){
    let correctValue = true
    let correctAmount = true
    let minimumValue = true
    let maximumValue = true
    let yearOfBirth = 0
    let newDate = new Date()
    let currentYear = newDate.getFullYear()
  
    while(correctValue || correctAmount || minimumValue || maximumValue){
      yearOfBirth = input.question('Digite o ano de seu nascimento [AAAA]:')
      correctValue = validationFunctions.itsNumber(yearOfBirth)
      correctAmount = validationFunctions.correctSize(yearOfBirth, 4)
      minimumValue = validationFunctions.minimumValue(1900, yearOfBirth)
      maximumValue = validationFunctions.maximumValue(currentYear, yearOfBirth)
      validationFunctions.incorrectValue(correctValue, correctAmount)
      validationFunctions.incorrectValue(minimumValue, maximumValue)
    }
  
    return Number(yearOfBirth)
  
  },


  dateBrazilianFormat: function (date) {
  
    let newDate = new Date(date)
    
    return `${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`
    
  },

  age: function(birthDate) {

    let currentDay = new Date()
    let dateInMilliseconds = Math.abs(currentDay.getTime() - birthDate.getTime())
    let age = Math.floor(dateInMilliseconds / (1000 * 60 * 60 * 24 * 365))
    
    return age
  
  },

}

module.exports = {
  anamnesisFunctions
}*/

/*======================================================================================

 Validation Functions 

const { headerFunctions } = require('./headerFunctions')

const validationFunctions = {
  
  itsLetters: function(string){
      
    const numberRegExp = /\d/g
    let itsAlfa = numberRegExp.test(string)

    if(itsAlfa){
      return true
    } else {
      return false
    }
  },

  incorrectValue: function (valueA, valueB){
    if(valueA || valueB ){ 
      console.clear()
      headerFunctions.header()
      console.log('Dado Incorreto!')
    }
  },

  itsNumber: function(value){
  
    const regExp2 = /\D/g
    let itsNumber = regExp2.test(value)
    
    if(itsNumber){
      return true
    } else {
      return false
    }
  },

  correctSize: function(string, givenAway){
    if(string.length > givenAway){
      return true
    } else {
      return false
    }
  },

  minimumValue: function (standardValue, givenAway){
    
    if(givenAway < standardValue){
      return true
    } else {
      return false
    }
  },

  maximumValue: function(standardValue, givenAway){
    if(givenAway > standardValue){
      return true
    } else {
      return false
    }
  },
  
}

module.exports = {
  validationFunctions
}
*/

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
// others functions

// correctSize: function(string, givenAway){
  //   if(string.length > givenAway){
  //     return true
  //   } else {
  //     return false
  //   }
  // },

  // hasNumberOrSymbol: function(stringValue){
    
  //   const numberSymbolRegExp = /(\d|\W)/gi
  //   let numberSymbol = numberSymbolRegExp.test(stringValue)

  //   return numberSymbol ? true : false
    
  // },

  // minimumValue: function (standardValue, givenAway){
    
  //   if(givenAway < standardValue){
  //     return true
  //   } else {
  //     return false
  //   }
  // },

  // maximumValue: function(standardValue, givenAway){
  //   if(givenAway > standardValue){
  //     return true
  //   } else {
  //     return false
  //   }
  // },

