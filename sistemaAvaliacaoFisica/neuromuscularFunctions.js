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

  abdominalClassification(sexNumber, ageValue, abdominalTestResult){
  
    let classification = ''
    const unidentifiedSex = `[ERROR] Sexo não identificado!` 
    const ageBetweenTwentyAndTwentyNine = ageValue >= 20 && ageValue <= 29
    const ageBetweenThirtyAndThirtyNine = ageValue >= 30 && ageValue <= 39
    const ageBetweenFortyAndFortyNine = ageValue >= 40 && ageValue <= 49
    const ageBetweenFiftyAndFiftyNine = ageValue >= 50 && ageValue <= 59
    const ageBetweenSixtyAndSixtyNine = ageValue >= 60 && ageValue <= 69
    const veryPoorRating = `Muito Fraco`
    const weakRating = `Fraco`
    const regularRating = `Regular`
    const goodRating = `Bom`
    const excellentRating = `Excelente`
    const classificationNotAppliedToAge = `Esta classificação não se aplica a sua idade!`
  
    switch (sexNumber) {
      
      // men
      case 1:
        
        if(ageBetweenTwentyAndTwentyNine){
          
          if(abdominalTestResult < 30){
            classification = veryPoorRating
          } else if(abdominalTestResult < 35){
            classification = weakRating
          } else if(abdominalTestResult < 40){
            classification = regularRating
          } else if(abdominalTestResult < 45){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenThirtyAndThirtyNine){
          
          if(abdominalTestResult < 22){
            classification = veryPoorRating
          } else if(abdominalTestResult < 27){
            classification = weakRating
          } else if(abdominalTestResult < 32){
            classification = regularRating
          } else if(abdominalTestResult < 37){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFortyAndFortyNine){
          
          if(abdominalTestResult < 17){
            classification = veryPoorRating
          } else if(abdominalTestResult < 21){
            classification = weakRating
          } else if(abdominalTestResult < 26){
            classification = regularRating
          } else if(abdominalTestResult < 32){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFiftyAndFiftyNine){
          
          if(abdominalTestResult < 12){
            classification = veryPoorRating
          } else if(abdominalTestResult < 17){
            classification = weakRating
          } else if(abdominalTestResult < 23){
            classification = regularRating
          } else if(abdominalTestResult < 29){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenSixtyAndSixtyNine){
          
          if(abdominalTestResult < 9){
            classification = veryPoorRating
          } else if(abdominalTestResult < 13){
            classification = weakRating
          } else if(abdominalTestResult < 19){
            classification = regularRating
          } else if(abdominalTestResult < 25){
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
  
        if(ageBetweenTwentyAndTwentyNine){
          
          if(abdominalTestResult < 26){
            classification = veryPoorRating
          } else if(abdominalTestResult < 30){
            classification = weakRating
          } else if(abdominalTestResult < 35){
            classification = regularRating
          } else if(abdominalTestResult < 40){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenThirtyAndThirtyNine){
          
          if(abdominalTestResult < 21){
            classification = veryPoorRating
          } else if(abdominalTestResult < 25){
            classification = weakRating
          } else if(abdominalTestResult < 30){
            classification = regularRating
          } else if(abdominalTestResult < 35){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFortyAndFortyNine){
          
          if(abdominalTestResult < 16){
            classification = veryPoorRating
          } else if(abdominalTestResult < 20){
            classification = weakRating
          } else if(abdominalTestResult < 25){
            classification = regularRating
          } else if(abdominalTestResult < 30){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFiftyAndFiftyNine){
          
          if(abdominalTestResult < 11){
            classification = veryPoorRating
          } else if(abdominalTestResult < 15){
            classification = weakRating
          } else if(abdominalTestResult < 20){
            classification = regularRating
          } else if(abdominalTestResult < 25){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenSixtyAndSixtyNine){
          
          if(abdominalTestResult < 6){
            classification = veryPoorRating
          } else if(abdominalTestResult < 10){
            classification = weakRating
          } else if(abdominalTestResult < 15){
            classification = regularRating
          } else if(abdominalTestResult < 20){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else {
          classification = classificationNotAppliedToAge
        }
  
        break;
    
      default:
  
        classification = unidentifiedSex
  
        break;
    }
  
    return classification
  
  },

  flexArmTest(){

    let testResult = ''
    const regexTwoDigits = /(^[0-9]$)|(^[0-9]{2}$)/
    let validNumber = true
  
    do{
      console.log('Teste de Flexão de Braço')
      testResult = input.question('Digite a quantidade de repetições [00]: ')
      validNumber = validationFunctions.isRegularExpression(testResult, regexTwoDigits)
      validationFunctions.incorrectValue(false, !validNumber,'Neuromuscular' )
  
    }while(!validNumber)
    
    return Number(testResult)
  
  },

  flexArmClassification(sexNumber, ageValue, flexArmTestResult){
  
    let classification = ''
    const unidentifiedSex = `[ERROR] Sexo não identificado!` 
    const ageBetweenTwentyAndTwentyNine = ageValue >= 20 && ageValue <= 29
    const ageBetweenThirtyAndThirtyNine = ageValue >= 30 && ageValue <= 39
    const ageBetweenFortyAndFortyNine = ageValue >= 40 && ageValue <= 49
    const ageBetweenFiftyAndFiftyNine = ageValue >= 50 && ageValue <= 59
    const ageBetweenSixtyAndSixtyNine = ageValue >= 60 && ageValue <= 69
    const veryPoorRating = `Muito Fraco`
    const weakRating = `Fraco`
    const regularRating = `Regular`
    const goodRating = `Bom`
    const excellentRating = `Excelente`
    const classificationNotAppliedToAge = `Esta classificação não se aplica a sua idade!`
  
    switch (sexNumber) {
      
      // men
      case 1:
        
        if(ageBetweenTwentyAndTwentyNine){
          
          if(flexArmTestResult < 17){
            classification = veryPoorRating
          } else if(flexArmTestResult < 30){
            classification = weakRating
          } else if(flexArmTestResult < 40){
            classification = regularRating
          } else if(flexArmTestResult < 50){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenThirtyAndThirtyNine){
          
          if(flexArmTestResult < 14){
            classification = veryPoorRating
          } else if(flexArmTestResult < 22){
            classification = weakRating
          } else if(flexArmTestResult < 31){
            classification = regularRating
          } else if(flexArmTestResult < 40){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFortyAndFortyNine){
          
          if(flexArmTestResult < 11){
            classification = veryPoorRating
          } else if(flexArmTestResult < 18){
            classification = weakRating
          } else if(flexArmTestResult < 27){
            classification = regularRating
          } else if(flexArmTestResult < 35){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFiftyAndFiftyNine){
          
          if(flexArmTestResult < 8){
            classification = veryPoorRating
          } else if(flexArmTestResult < 15){
            classification = weakRating
          } else if(flexArmTestResult < 24){
            classification = regularRating
          } else if(flexArmTestResult < 30){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenSixtyAndSixtyNine){
          
          if(flexArmTestResult < 5){
            classification = veryPoorRating
          } else if(flexArmTestResult < 10){
            classification = weakRating
          } else if(flexArmTestResult < 17){
            classification = regularRating
          } else if(flexArmTestResult < 25){
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
  
        if(ageBetweenTwentyAndTwentyNine){
          
          if(flexArmTestResult < 7){
            classification = veryPoorRating
          } else if(flexArmTestResult < 16){
            classification = weakRating
          } else if(flexArmTestResult < 27){
            classification = regularRating
          } else if(flexArmTestResult < 38){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenThirtyAndThirtyNine){
          
          if(flexArmTestResult < 5){
            classification = veryPoorRating
          } else if(flexArmTestResult < 13){
            classification = weakRating
          } else if(flexArmTestResult < 24){
            classification = regularRating
          } else if(flexArmTestResult < 35){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFortyAndFortyNine){
          
          if(flexArmTestResult < 4){
            classification = veryPoorRating
          } else if(flexArmTestResult < 10){
            classification = weakRating
          } else if(flexArmTestResult < 21){
            classification = regularRating
          } else if(flexArmTestResult < 32){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFiftyAndFiftyNine){
          
          if(flexArmTestResult < 3){
            classification = veryPoorRating
          } else if(flexArmTestResult < 8){
            classification = weakRating
          } else if(flexArmTestResult < 18){
            classification = regularRating
          } else if(flexArmTestResult < 29){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenSixtyAndSixtyNine){
          
          if(flexArmTestResult < 2){
            classification = veryPoorRating
          } else if(flexArmTestResult < 6){
            classification = weakRating
          } else if(flexArmTestResult < 13){
            classification = regularRating
          } else if(flexArmTestResult < 20){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else {
          classification = classificationNotAppliedToAge
        }
  
        break;
    
      default:
  
        classification = unidentifiedSex
  
        break;
    }
  
    return classification
  
  },

}

module.exports = {
  neuromuscularFunctions
}