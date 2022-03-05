/* Validation Functions */

const { headerFunctions } = require('./headerFunctions')

const validationFunctions = {
  
  hasNumberOrSymbol: function(string){
    
    const numberSymbolRegExp = /(\d|\W)/gi
    let numberSymbol = numberSymbolRegExp.test(string)

    return numberSymbol ? true : false
    
  },

  incorrectValue: function (valueA, valueB, title){
    
    if(valueA || valueB ){ 
      console.clear()
      headerFunctions.systemHeader()
      headerFunctions.subTitle(title)
      console.log('Dado Incorreto!')
    }

  },

    // retorna true se a data digitada pelo usuário está no formato da Regex Expression
  dateAsRegexExpression: function(date, regex){
    
    let dateAsRegexExpression = regex.test(date)
    
    return dateAsRegexExpression ? true : false
    
  },

    // recebe duas datas e valida se são iguais
  validDate: function(informedDate, realDate){
    
    return informedDate === realDate ? true : false
    
  },

    // recebe a data de nascimento em formato ISO e retorna se é maior do que a data atual
  dateOfBirthHighestCurrentDate: function(dateOfBirth){
    var currentDate = new Date()

    // O método getTime() retorna o valor numérico correspondente ao horário da data especificada de acordo com o horário universal.
    return dateOfBirth.getTime() > currentDate.getTime() ? true : false

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