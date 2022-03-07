/* Validation Functions */

const { headerFunctions } = require('./headerFunctions')

const validationFunctions = {

  itsLetters: function(stringValue){
    letterOrSpaceRegExp = /\D/gi

    return letterOrSpaceRegExp.test(stringValue) ? true : false
    
  },

  // verifica se o valor passado é apenas um número
  itsNumber: function(value){
  
    const regExp2 = /\d/g
    let itsNumber = regExp2.test(value)
   
    return itsNumber ? true : false
    
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
  dateAsRegexExpression: function(dateValue, regex){
    
    return regex.test(dateValue) ? true : false
    
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

  isLessThanMinimumOrGreaterThanMaximum: function(minimum, maximum, givenAway){
    
    return givenAway < minimum || givenAway > maximum ? true : false
    
  },
  
}

module.exports = {
  validationFunctions
}