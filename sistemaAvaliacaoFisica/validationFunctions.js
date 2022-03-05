/* Validation Functions */

const { headerFunctions } = require('./headerFunctions')

const validationFunctions = {
  
  hasNumberOrSymbol: function(string){
    
    const numberSymbolRegExp = /(\d|\W)/gi
    let notNumberSymbol = numberSymbolRegExp.test(string)
    console.log(notNumberSymbol)
    return notNumberSymbol ? true : false
    
  },

  incorrectValue: function (valueA, valueB){
    if(valueA || valueB ){ 
      console.clear()
      headerFunctions.systemHeader()
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