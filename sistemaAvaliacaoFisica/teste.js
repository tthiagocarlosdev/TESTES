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

console.log(restingHeartRate())

