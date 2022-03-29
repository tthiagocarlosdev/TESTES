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

  flexibilityClassification(sexNumber, ageValue, flexibilityTestResult){

    let classification = ''
    const UnidentifiedSex = `[ERROR] Sexo não identificado!`
    const ageLessThanTwenty = ageValue > 0 && ageValue < 20
    const ageLessThanThirty = ageValue < 30
    const ageLessThanForty = ageValue < 40
    const ageLessThanFifty = ageValue < 50
    const ageLessThanSixty = ageValue < 60
    const ageLessThanSeventy = ageValue < 70
    const weakRating = `Fraca`
    const regularRating = `Regular`
    const goodRating = `Boa`
    const excellentRating = `Excelente`
    const classificationNotAppliedToAge = `Esta classificação não se aplica a sua idade!`
  
  
    switch (sexNumber) {
      
      // men
      case 1:
        
        if(ageLessThanTwenty){
          
          if(flexibilityTestResult < 24){
            classification = weakRating
          } else if(flexibilityTestResult < 29){
            classification = regularRating
          } else if(flexibilityTestResult < 39){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageLessThanThirty){
          
          if(flexibilityTestResult < 25){
            classification = weakRating
          } else if(flexibilityTestResult < 30){
            classification = regularRating
          } else if(flexibilityTestResult < 40){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageLessThanForty){
          
          if(flexibilityTestResult < 23){
            classification = weakRating
          } else if(flexibilityTestResult < 28){
            classification = regularRating
          } else if(flexibilityTestResult < 38){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageLessThanFifty){
          
          if(flexibilityTestResult < 18){
            classification = weakRating
          } else if(flexibilityTestResult < 24){
            classification = regularRating
          } else if(flexibilityTestResult < 35){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageLessThanSixty){
          
          if(flexibilityTestResult < 16){
            classification = weakRating
          } else if(flexibilityTestResult < 24){
            classification = regularRating
          } else if(flexibilityTestResult < 35){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageLessThanSeventy){
          
          if(flexibilityTestResult < 15){
            classification = weakRating
          } else if(flexibilityTestResult < 20){
            classification = regularRating
          } else if(flexibilityTestResult < 33){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else {
          classification = classificationNotAppliedToAge
        }
  
        break;
      
      // woman
      case 2:
  
        if(ageLessThanTwenty){
          
          if(flexibilityTestResult < 29){
            classification = weakRating
          } else if(flexibilityTestResult < 34){
            classification = regularRating
          } else if(flexibilityTestResult < 43){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageLessThanThirty){
          
          if(flexibilityTestResult < 28){
            classification = weakRating
          } else if(flexibilityTestResult < 33){
            classification = regularRating
          } else if(flexibilityTestResult < 41){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageLessThanForty){
          
          if(flexibilityTestResult < 27){
            classification = weakRating
          } else if(flexibilityTestResult < 32){
            classification = regularRating
          } else if(flexibilityTestResult < 41){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageLessThanFifty){
          
          if(flexibilityTestResult < 25){
            classification = weakRating
          } else if(flexibilityTestResult < 30){
            classification = regularRating
          } else if(flexibilityTestResult < 38){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageLessThanSixty){
          
          if(flexibilityTestResult < 25){
            classification = weakRating
          } else if(flexibilityTestResult < 30){
            classification = regularRating
          } else if(flexibilityTestResult < 39){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageLessThanSeventy){
          
          if(flexibilityTestResult < 23){
            classification = weakRating
          } else if(flexibilityTestResult < 27){
            classification = regularRating
          } else if(flexibilityTestResult < 35){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else {
          classification = classificationNotAppliedToAge
        }
  
        break;
    
      default:
        classification = UnidentifiedSex
        break;
    }
  
    return classification
  },
  
  abdominalTest(){

    let testResult = ''
    const regexTwoDigits = /(^[0-9]$)|(^[0-9]{2}$)/
    let validNumber = true
  
    do{
      console.log('Teste de Abdominais')
      testResult = input.question('Digite a quantidade de repetições em 1 min [00]: ')
      validNumber = validationFunctions.isRegularExpression(testResult, regexTwoDigits)
      validationFunctions.incorrectValue(false, !validNumber,'Neuromuscular' )
  
    }while(!validNumber)
    
    return Number(testResult)
  
  },

}

module.exports = {
  neuromuscularFunctions
}