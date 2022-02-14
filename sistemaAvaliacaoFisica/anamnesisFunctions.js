/* Anamnesis Functions */

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
    let birthDay = 0
  
    while(correctValue || correctAmount){
      birthDay = input.question('Digite o dia de seu nascimento [DD]: ')
      correctValue = validationFunctions.itsNumber(birthDay)
      correctAmount = validationFunctions.correctSize(birthDay, 2)
      validationFunctions.incorrectValue(correctValue, correctAmount)
    }
  
    return birthDay
  },
  
  birthMonth: function(){
  
    let correctValue = true
    let correctAmount = true
    let birthMonth = 0
  
    while(correctValue || correctAmount){
      birthMonth = input.question('Digite o mês de seu nascimento [MM]: ')
      correctValue = validationFunctions.itsNumber(birthMonth)
      correctAmount = validationFunctions.correctSize(birthMonth, 2)
      validationFunctions.incorrectValue(correctValue, correctAmount)
    }
  
    return birthMonth
  
  },

  birthYear: function(){
    let correctValue = true
    let correctAmount = true
    let yearOfBirth = 0
  
    while(correctValue || correctAmount){
      yearOfBirth = input.question('Digite o ano de seu nascimento [AAAA]:')
      correctValue = validationFunctions.itsNumber(yearOfBirth)
      correctAmount = validationFunctions.correctSize(yearOfBirth, 4)
      validationFunctions.incorrectValue(correctValue, correctAmount)
    }
  
    return Number(yearOfBirth)
  
  },

  dateBrazilianFormat: function (date) {
  
    let newDate = new Date(date)
    
    return `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`
    
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
}