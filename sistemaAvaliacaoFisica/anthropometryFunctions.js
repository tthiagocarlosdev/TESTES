/* anthropometryFunctions */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')

const anthropometryFunctions = {

  bodyWeight(){

    let bodyWeight = 0
    let itsRealNumber = true
    let regularExpressionFromZeroToThousand = /(^[0-9]\.[0-9]$)|(^[1-9][0-9]\.[0-9]$)|(^[1-9][0-9]{2}\.[0-9]$)|(^[1][0]{3}\.[0-9]$)/
  
    do{
  
      bodyWeight = input.question('Digite seu peso (kg)[00.0]: ')
      itsRealNumber = validationFunctions.isRegularExpression(bodyWeight, regularExpressionFromZeroToThousand)
      validationFunctions.incorrectValue(false, !itsRealNumber, "Antropometria")
  
    }while(!itsRealNumber)
  
    return bodyWeight
    
  },

  stature(){

    let bodyStature = 0
    let itsRealNumber = true
    let regularExpressionZeroToNinePointNinetyNine = /(^[0-9]\.([0-9]){2}$)/
  
    do{
  
      bodyStature =input.question('Digite sua estatura (m)[0.00]: ')
      itsRealNumber = validationFunctions.isRegularExpression(bodyStature, regularExpressionZeroToNinePointNinetyNine)
      validationFunctions.incorrectValue(false, !itsRealNumber, "Antropometria")
  
    }while(!itsRealNumber)
    
    return bodyStature
  
  },

  bodyMassIndex(weightValue, heightValue){

    // IMC = peso / estatura * estatura
    return (weightValue / (heightValue * heightValue)).toFixed(2)
  
  },

}

module.exports = {
  anthropometryFunctions
}