/* neuromuscular functions */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')

const neuromuscularFunctions = {

  wellsBenchTest(){
  
    let testResult = ''
    const regexTwoDigits = /(^[0-9]$)|(^[0-9]{2}$)/
    let validNumber = true
  
    do{
  
      testResult = input.question('Teste de flexibilidade banco de Wells (cm)[00]: ')
      validNumber = validationFunctions.isRegularExpression(testResult, regexTwoDigits)
      validationFunctions.incorrectValue(false, !validNumber,'Neuromuscular' )
  
    }while(!validNumber)
    
    return Number(testResult)
  
  },
  
}

module.exports = {
  neuromuscularFunctions
}