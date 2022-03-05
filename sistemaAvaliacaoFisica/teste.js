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
console.log(actual)*/

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
// console.log(year)

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