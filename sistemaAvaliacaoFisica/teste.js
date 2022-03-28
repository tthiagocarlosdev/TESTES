var input = require('readline-sync')

 const { validationFunctions } = require('./validationFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')


// var regex = /^d{2}/d{2}/d{4}$/
// var dateRegExp = /^\d{2}\/\d{2}\/\d{4}$/

// var x = dateRegExp.test(data)
// if(x){
//   console.log(`Data correta!`)
  
//   // console.log(data.match(dateREgExp))
//   // Método substring() retorna o trecho de uma string de acordo com os números informados por parâmetro.
//   console.log(`Dia: ${string.substring(0,2)}`)
//   console.log(`MES: ${string.substring(3,5)}`)
//   console.log(`ANO: ${string.substring(6)}`)
// } else {
//   console.log(`Data incorreta!`)
//   console.log(data.match(dateREgExp))
// }



/*
function birthDate(date){  
  const dateRegExp = /^\d{2}\/\d{2}\/\d{4}$/
  var string = String(dateRegExp.exec(date))
  // let isDateRegExp = dateRegExp.test(date)
  let day = Number(string.substring(0,2))
  let month = Number(string.substring(3,5))
  let year = Number(string.substring(6))
  let newDate = new Date()
  let currentYear = newDate.getFullYear()

  let minimumValueDay = validationFunctions.minimumValue(1, day)
  let maximumValueDay = validationFunctions.maximumValue(31, day)
  let minimumValueMonth = validationFunctions.minimumValue(1, month)
  let maximumValueMonth = validationFunctions.maximumValue(12, month)
  let minimumValueYear = validationFunctions.minimumValue(1900, year)
  let maximumValueYear = validationFunctions.maximumValue(currentYear, year)

  console.log(minimumValueDay)
  console.log(maximumValueDay)
  console.log(minimumValueMonth)
  console.log(maximumValueMonth)
  console.log(minimumValueYear)
  console.log(maximumValueYear)
  
  if(isDateRegExp){
    console.log(string)
    console.log(day)
  } else {
    console.log('Not date!')
  }
  
}

function stringDate(date){
  const dateRegExp = /^\d{2}\/\d{2}\/\d{4}$/
  var stringDate = String(dateRegExp.exec(date))
  return stringDate
}

function itsDay(string){
  let day = Number(string.substring(0,2))
  let minimumValueDay = validationFunctions.minimumValue(1, day)
  let maximumValueDay = validationFunctions.maximumValue(31, day)
  if(minimumValueDay || maximumValueDay){
    return true
  } else {
    return false
  }
}

function isDateRegExp(date){
  // const dateRegExp = /^\d{2}\/\d{2}\/\d{4}$/
  const dateRegExp = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/
  let isDateRegExp = dateRegExp.test(date)
  if(isDateRegExp){
    return true
  } else {
    return false
  }
}




}
console.log(isDateRegExp(data))
console.log(stringDate(data))*/


/*
// informa se a data passada pelo usuário está no formato brasil
function isDateRegExp(date, regex){
  // const dateRegExp = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/
  let isDateRegExp = regex.test(date)
  if(isDateRegExp){
    return true
  } else {
    return false
  }
}

// recebe a data como string e retorna ela como formato padrão
function dateInStandardFormat(datePasse, regex){
  var stringData = String(regex.exec(datePasse))
  let day = stringData.substring(0,2)
  let month = stringData.substring(3,5)
  let year = stringData.substring(6, 10)

  return new Date (Number(year), Number(month-1), Number(day))
}

// recebe a data no padrão normal e retorna no padrão brasil como string
function dateInBrazilFormat(dateInStandardFormat){
 return new Intl.DateTimeFormat("pt-br").format(dateInStandardFormat)
}

// recebe a informada e data padrão e verifica se são iguais
function validDate(informedDate, defaultDate){
  if(informedDate === defaultDate){
    return true
  } else {
    return false
  }
}


function DateOfBirth(){
  let dateExpressionRegex = true
  let dataFormatoBrasil = ''
  let dataValida = false
  

  while(dateExpressionRegex || dataValida){
    let dataPassada = input.question('Digite sua data de nascimento (DD/MM/AAAA): ')
    // const dateRegExp = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/
    const dateRegExp = /^\d{2}\/\d{2}\/\d{4}$/
    
    dateExpressionRegex = !isDateRegExp(dataPassada, dateRegExp)
    console.log(dateExpressionRegex)

    if(!dateExpressionRegex){ 
      const dataFormatoPadrao = dateInStandardFormat(dataPassada, dateRegExp)
      console.log(dataFormatoPadrao)
      dataFormatoBrasil = dateInBrazilFormat(dataFormatoPadrao)
      dataValida = !validDate(dataPassada, dataFormatoBrasil) 
    } else {
      dataValida = true
    }
  
    validationFunctions.incorrectValue(dataValida, dateExpressionRegex)
    
  }

  return dataFormatoBrasil
}
*/

// const dN = DateOfBirth()
// console.log(dN)

/*
const informedDateOfBirth = new Date(birthYear, birthMonth - 1, birthDay)
const birthDate = anamnesisFunctions.dateBrazilianFormat(informedDateOfBirth)
const age = anamnesisFunctions.age(informedDateOfBirth)

console.log(`Data de nascimento: ${dN}`)

console.log(anamnesisFunctions.age(dN))
*/

/*

console.log(`Data formato BR: ${dataFormatoBrasil}`)
// console.log(day)
// console.log(month)
// console.log(year)

const dateTest = String(`${day}/${month}/${year}`)


if(date === 'Invalid Date'){
  console.log('Date incorrect')
}

console.log(`data: ${date}`)


console.log(`Actual: ${actual}`)
console.log(`Date test: ${dateTest}`)

if(dateTest === actual){
  console.log('Date correct')
} else {
  console.log('Date incorrect')
}
*/
/*

const yearD = 2022
const monthD = 02
const dayD = 28

const date = new Date(`${yearD}-${monthD}-${dayD}`)
console.log(date)
// const options = {
//   year: "numeric",
//   month: "numeric",
//   day: "numeric"
// }
// console.log(date.toLocaleDateString("pt-br", options))

const actual = new Intl.DateTimeFormat("pt-br").format(date)
console.log(actual)

function dateInBrazilFormat(dateInString){
  
  let arrayNumber = dateInString.split('/')
  let day = Number(arrayNumber[0])
  let month = Number(arrayNumber[1])
  let year = Number(arrayNumber[2])

  console.log(day)
  console.log(month)
  console.log(year)

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }
  
  let dateInBrazilianFormat = new Date(year, month-1, day)
  
  return dateInBrazilianFormat.toLocaleDateString("pt-br", options)
  
}
  

let date = '29/02/2022'


console.log(dateInBrazilFormat(date))

//recebe uma string e um separador. Retorna um array de strings divididos em cada ponto onde o separador ocorre na string informada.
function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);
  return arrayOfStrings
}


// console.log(day)
// console.log(month)
// console.log(year)*/

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

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */

// function sex(){

//   let istNumber = false
//   let isLessThanMinimumOrGreaterThanMaximum = true
//   let sex = 0

//   do{
//     console.log('Escolha:')
//     console.log('[1] Masculino')
//     console.log('[2] Feminino')
//     sex = input.question('')
//     // console.log(sex)

//     istNumber = validationFunctions.itsNumber(sex)
//     // console.log(istNumber)

//     isLessThanMinimumOrGreaterThanMaximum = validationFunctions.isLessThanMinimumOrGreaterThanMaximum(1, 2, Number(sex))
//     // console.log(isLessThanMinimumOrGreaterThanMaximum)
//     validationFunctions.incorrectValue(!istNumber, isLessThanMinimumOrGreaterThanMaximum, "Anamnese")

//   }while(!istNumber || isLessThanMinimumOrGreaterThanMaximum)
  
//   return sex
// }
// let sexoNumber = sex()
// let genre = anamnesisFunctions.showGenre(sexoNumber)
// console.log(`Sexo: ${genre}`)

// let name = input.question('Digite se nome: ')

// function espace(nameValue){
//   let regexEscape = /[\s]/gi

//   return regexEscape.test(nameValue) ? true : false
  
// }

// function itsLetters(nameValue){
//   let regexLetters = /[A-z]/gi 

//   return regexLetters.test(nameValue) ? true : false
// }

// function hasCaracter(nameValue){
//   let regexCaracter = /\W/gi

//   return regexCaracter.test(nameValue)
// }

// console.log(espace(name))
// console.log(itsLetters(name))
// console.log(hasCaracter(name))

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/* == Email == */

/*userEmail
function validEmail(email){
  let temEspaco = email.search(/[ ]/g) != -1
  let temArroba = email.search(/[@]/g) != -1

  if(!temEspaco && temArroba){

    const arrayString = email.split(/[@]/g)
    const usuario = arrayString[0]
    const dominio = arrayString[1]
    let caracterAntesArroba = usuario.length > 0
    let caracterAposArroba = dominio.length > 2
    let pontoAposArroba = dominio.search(/[.]/g) != -1
    let arrayPonto = dominio.split(/[.]/g)
    

    if(caracterAntesArroba && caracterAposArroba && pontoAposArroba){
      
      let caracterAposPonto = arrayPonto[1].length > 0
      

      if(caracterAposPonto){
  
        console.log(`Tem espaço: ${temEspaco}`)
        console.log(`Tem arroba: ${temArroba}`)
        console.log(`Caracter antes arroba: ${caracterAntesArroba}`)
        console.log(`Caracter após arroba: ${caracterAposArroba}`)
        console.log(`Ponto após arroba: ${pontoAposArroba}`)
        console.log(`Caracter: ${caracterAposPonto}`)

      }
      
      
    } else {
      console.log('ERROR')
    }

    } else {
      console.log('ERROR')

    }
}

const emails = ["thiago@carlos.com", "andre@java.com", "andre@java.com.br", "andre@.m"]

for(let email of emails){
  validEmail(email)
  console.log('=======================')
}


function validEmail(userEmail) {

  user = userEmail.substring(0, userEmail.indexOf("@"))
  domain = userEmail.substring(userEmail.indexOf("@")+ 1, userEmail.length)
  let = validations = ((user.length >=1) && 
                      (domain.length >=3) && 
                      (user.search("@")==-1) && 
                      (domain.search("@")==-1) && 
                      (user.search(" ")==-1) && 
                      (domain.search(" ")==-1) && 
                      (domain.search(".")!=-1) && 
                      (domain.indexOf(".") >=1)&& 
                      (domain.lastIndexOf(".") < domain.length - 1))

  if (validations) {
     return true
  }
  else{
    return false
  }
}
  
const emails = ["thiago@carlos.com", "andre@.m", "andrejava.com.br", "andre@java.net"]

for(let email of emails){
  console.log(validEmail(email))
  console.log('=======================')
}

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/* == phone number == */

function phoneNumber(){
  
  let phoneNumber = 0
  let regexPhone = /^([0-9]{2})[0-9]{9}$/
  let istPhoneNumber = true

  do{
    
    phoneNumber = input.question('Digite seu número de celular com DDD: ')
    istPhoneNumber = validationFunctions.isRegularExpression(phoneNumber, regexPhone)
    validationFunctions.incorrectValue(false, !istPhoneNumber, "Dados Pessoais")

  }while(!istPhoneNumber)
  
  return phoneNumber
}

// console.log(`Número de telefone: ${phoneNumber()}`)


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
  let regexNumber = /[1]|[2]/

  for(let i = 0; i < questionnairePARQ.length; i++){
    
    do{

      console.log(`${[i+1]} - ${questionnairePARQ[i]}`)
      console.log('Escolha:')
      console.log('[1] Sim')
      console.log('[2] Não')
      questionnairePARQAnswer[i] = input.question("")
      console.clear()
      itsNumberOneOrTwo = validationFunctions.isRegularExpression(questionnairePARQAnswer[i], regexNumber)
      validationFunctions.incorrectValue(false, !itsNumberOneOrTwo, "Anamnese")

    }while(!itsNumberOneOrTwo)
    
  }
  
  if(questionnairePARQAnswer.includes("1")){
     return "Você deverá realizar um exame médico antes de iniciar suas atividades!"
  } else {
    return "Todas as respostas do questionário foram 'Sim'!"
  }

}

// questionnairePARQ()


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
    itsNumberOneOrTwo = validationFunctions.isRegularExpression(currentPhysicalState, regexNumber)
    validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")

  }while(!itsNumberOneOrTwo)

  return currentPhysicalState

}

function showPhysicalState(numericValue){

  return Number(numericValue) === 1 ? 'Sedentário' : 'Ativo'

}

// console.log(`Estado físico: ${showPhysicalState(currentPhysicalState())}`)


/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Past Illness == **/

function pastIllness(){

  let pastIllnessNumber = 2
  let pastIllnessText = ''
  let itsNumberOneOrTwo = true
  let regexNumber = /^[1]$|^[2]$/
  let itsLetters = true

  do{

    console.log(`Avaliado possue doença pregressa?`)
    anamnesisFunctions.choice()
    pastIllnessNumber = Number(input.question(''))

    itsNumberOneOrTwo = validationFunctions.isRegularExpression(pastIllnessNumber, regexNumber)
    validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")

    if(pastIllnessNumber === 1){
      
      do{

        console.log(`Qual doença?`)
        pastIllnessText = input.question('')
        itsLetters = validationFunctions.itsLetters(pastIllnessText)
        validationFunctions.incorrectValue(false, !itsLetters, "Anamnese")

      }while(!itsLetters)
      
    } else {
      pastIllnessText = `Sem doença pregressa.`
    }

  }while(!itsNumberOneOrTwo)

    return pastIllnessText

}

// let x = pastIllness()
// console.clear()
// // console.log(x.pastIllnessNumber)
// console.log(x)

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Illnesses in the Family == **/


function illnessesInTheFamily(){

  let illnessesFamilyNumber = 2
  let illnessesFamilyText = ''
  let itsNumberOneOrTwo = true
  let regexNumber = /^[1]$|^[2]$/
  let itsLetters = true

  do{

    console.log(`Avaliado possue alguém da família com doença pregressa?`)
    anamnesisFunctions.choice()
    illnessesFamilyNumber = Number(input.question(''))

    itsNumberOneOrTwo = validationFunctions.isRegularExpression(illnessesFamilyNumber, regexNumber)
    validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")

    if(illnessesFamilyNumber === 1){
      
      do{

        console.log(`Qual doença?`)
        illnessesFamilyText = input.question('')
        itsLetters = validationFunctions.itsLetters(illnessesFamilyText)
        validationFunctions.incorrectValue(false, !itsLetters, "Anamnese")

      }while(!itsLetters)
      
    } else {
      illnessesFamilyText = `Sem doença pregressa na família.`
    }

  }while(!itsNumberOneOrTwo)

    return illnessesFamilyText

}

// console.log(illnessesInTheFamily())

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Surgery Performed == **/

function surgeryPerformed(){

  let surgeryPerformedNumber = 2
  let surgeryPerformedText = ''
  let itsNumberOneOrTwo = true
  let regexNumber = /^[1]$|^[2]$/
  let itsLetters = true

  do{

    console.log(`Avaliado já realizou precedimento cirúrgico?`)
    anamnesisFunctions.choice()
    surgeryPerformedNumber = Number(input.question(''))

    itsNumberOneOrTwo = validationFunctions.isRegularExpression(surgeryPerformedNumber, regexNumber)
    validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")

    if(surgeryPerformedNumber === 1){
      
      do{

        console.log(`Qual cirurgia?`)
        surgeryPerformedText = input.question('')
        itsLetters = validationFunctions.itsLetters(surgeryPerformedText)
        validationFunctions.incorrectValue(false, !itsLetters, "Anamnese")

      }while(!itsLetters)
      
    } else {
      surgeryPerformedText = `Nunca realizou procedimento cirúrgico.`
    }

  }while(!itsNumberOneOrTwo)

    return surgeryPerformedText

}

// console.log(surgeryPerformed())

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Use Medication == **/

function useMedication(){

  let useMedicationNumber = 2
  let useMedicationText = ''
  let itsNumberOneOrTwo = true
  let regexNumber = /^[1]$|^[2]$/
  let itsLetters = true

  do{

    console.log(`Avaliado faz uso de medicamentos?`)
    anamnesisFunctions.choice()
    useMedicationNumber = Number(input.question(''))

    itsNumberOneOrTwo = validationFunctions.isRegularExpression(useMedicationNumber, regexNumber)
    validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")

    if(useMedicationNumber === 1){
      
      do{

        console.log(`Qual medicamento?`)
        useMedicationText = input.question('')
        itsLetters = validationFunctions.itsLetters(useMedicationText)
        validationFunctions.incorrectValue(false, !itsLetters, "Anamnese")

      }while(!itsLetters)
      
    } else {
      useMedicationText = `Não faz uso de medicamento.`
    }

  }while(!itsNumberOneOrTwo)

    return useMedicationText

}

// console.log(useMedication())

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Sports Injuries == **/

function sportsInjuries(){
  
  let sportsInjuriesNumber = 2
  let sportsInjuriesText = ''
  let itsNumberOneOrTwo = true
  let regexNumber = /^[1]$|^[2]$/
  let itsLetters = true

  do{

    console.log(`Avaliado já sofreu alguma lesão desportiva?`)
    anamnesisFunctions.choice()
    sportsInjuriesNumber = Number(input.question(''))

    itsNumberOneOrTwo = validationFunctions.isRegularExpression(sportsInjuriesNumber, regexNumber)
    validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")

    if(sportsInjuriesNumber === 1){
      
      do{

        console.log(`Qual lesão?`)
        sportsInjuriesText = input.question('')
        itsLetters = validationFunctions.itsLetters(sportsInjuriesText)
        validationFunctions.incorrectValue(false, !itsLetters, "Anamnese")

      }while(!itsLetters)
      
    } else {
      sportsInjuriesText = `Nunca sofreu lesão desportiva.`
    }

  }while(!itsNumberOneOrTwo)

    return sportsInjuriesText

}

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


/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == maximum heart rate == **/

function maximumHeartRate(ageValue){

  return 220 - Number(ageValue)

}

// console.log(maximumHeartRate(34))

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == working heart rate == **/

function workingHeartRate(restingHeartRateValue, maximumHeartRateValue){

  let workingHeartRate = []
  let percentage = []

  for(let i = 40; i <= 95; i+=5){
    workingHeartRate.push(Math.round(((( maximumHeartRateValue - restingHeartRateValue )* (i / 100) ) + restingHeartRateValue)))
    percentage.push(i)
  }

  console.log(`Frequência Cardíaca de Treino:`)
  for(let i = 0; i < workingHeartRate.length; i++){
    console.log(`        ${percentage[i]}% = ${workingHeartRate[i]} bpm`)
  } 

}

// workingHeartRate(60, 186)


/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Resting Blood Pressure == **/

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


let bloodPressure = {
  systolic: 120, 
  diastolic: 80
}

// console.log(classificationOfBloodPressure(bloodPressure))

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == anthropometryFunctions == **/
/** == Body Weight == **/

function bodyWeight(){

  let bodyWeight = 0
  let itsRealNumber = true
  let regularExpressionFromZeroToThousand = /(^[0-9]\.[0-9]$)|(^[1-9][0-9]\.[0-9]$)|(^[1-9][0-9]{2}\.[0-9]$)|(^[1][0]{3}\.[0-9]$)/
  
  

  do{

    bodyWeight = input.question('Digite seu peso (kg)[0000.0]: ')
    itsRealNumber = validationFunctions.isRegularExpression(bodyWeight, regularExpressionFromZeroToThousand)
    validationFunctions.incorrectValue(false, !itsRealNumber, "Antropometria")

  }while(!itsRealNumber)

  return bodyWeight
  
}

// console.log(bodyWeight())

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Stature == **/

function stature(){

  let bodyStature = 0
  let itsRealNumber = true
  let regularExpressionZeroToNinePointNinetyNine = /(^[0-9]\.([0-9]){2}$)/

  do{

    bodyStature =input.question('Digite sua estatura (m)[0.00]: ')
    itsRealNumber = validationFunctions.isRegularExpression(bodyStature, regularExpressionZeroToNinePointNinetyNine)
    validationFunctions.incorrectValue(false, !itsRealNumber, "Antropometria")

  }while(!itsRealNumber)
  
  return bodyStature

}

// console.log(stature())

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Body Mass Index - BMI == **/

function bodyMassIndex(weightValue, heightValue){

  // IMC = peso / estatura * estatura
  return (weightValue / (heightValue * heightValue)).toFixed(2)

}

let peso = 95.0
let altura = 1.86

// console.log(bodyMassIndex(peso, altura))

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Body Mass Index Classification == **/

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

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Body Perimetry == **/

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


/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Show Perimeter == **/

function showPerimeter(objectValue){
  
  console.log('Perimetria Corporal:')
  
  for(let property in objectValue){
    console.log(`${property}: ${objectValue[property]} cm`) 
  }

}

// console.log(showPerimeter(perimetriaCoporporal))

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Hip Waist Ratio == **/

function hipWaistRatio(waistPerimetry, hipPerimetry){

  return (waistPerimetry/ hipPerimetry).toFixed(2)

}

// console.log(hipWaistRatio(perimetriaCoporporal.Cintura, perimetriaCoporporal.Quadril))

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Waist Hip Ratio - Classification == **/

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

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Subcutaneous Measures == **/

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

let subcutaneousFolds = {
  Triciptal: 7,
  Subescapular: 15,
  Peitoral: 5,
  SupraIliaca: 18,
  Abdominal: 24,
  Coxa: 14,
  Panturrilha: 10
} 

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

function fatPercentageClassification(sexValue, fatPercentageValue){

  let classification = ``

  switch (sexValue) {
    
    case 1:
      
      if(fatPercentageValue < 6){
        classification = `Desnutrição`
      } else if(fatPercentageValue < 15){
        classification = `Abaixo da média`
      } else if(fatPercentageValue < 16){
        classification = `Média`
      } else if(fatPercentageValue < 25){
        classification = `Sobrepeso`
      } else{
        classification = `Obesidade`
      }

      break;

    case 2:

      if(fatPercentageValue < 9){
        classification = `Desnutrição`
      } else if(fatPercentageValue < 23){
        classification = `Abaixo da média`
      } else if(fatPercentageValue < 24){
        classification = `Média`
      } else if(fatPercentageValue < 32){
        classification = `Sobrepeso`
      } else{
        classification = `Obesidade`
      }

      break;

    default:
      classification = `[ERROR] Sexo não identificado!`
      break;
  }
  
  return classification

}

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

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Fat Body Mass == **/

function fatBodyMass(bodyWeight, fatPercentage){

  return Number(((bodyWeight * fatPercentage) / 100).toFixed(1))

}

// console.log(fatBodyMass(95.5, 15.5))

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Lean Body Mass == **/

function leanBodyMass(bodyWeight, fatBodyMass){

  return Number(bodyWeight - fatBodyMass)

}

// console.log(leanBodyMass(95.0, 16.13))

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Expected Ideal Body Mass == **/

function expectedIdealBodyMass(sexNumber, leanBodyMass){

  return Number(sexNumber === 1 ? (leanBodyMass / (1 - 0.15)).toFixed(1) : (leanBodyMass / (1 - 0.23)).toFixed(1))

}

// console.log(expectedIdealBodyMass(1, 78.9))
// console.log(expectedIdealBodyMass(2, 78.9))
// console.log(expectedIdealBodyMass(3, 78.9))

/*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ */
/** == Neuromuscular Functions == **/
/** == Flexibility Test == **/

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

console.log(wellsBenchTest())

