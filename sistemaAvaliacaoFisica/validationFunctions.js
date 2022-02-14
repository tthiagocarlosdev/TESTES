/* Validation Functions */

const { headerFunctions } = require('./headerFunctions')

const validationFunctions = {
  
  itsLetters: function(string){
      
    const regExp1 = /\d/g
    let istAlfa = regExp1.test(string)

    if(istAlfa){
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

  correctSize: function(string, amount){
    if(string.length > amount){
      return true
    } else {
      return false
    }
  },

  
}

module.exports = {
  validationFunctions
}