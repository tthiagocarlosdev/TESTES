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

  bodyMassIndexClassification(bodyMassIndexValue){

    let classification = ``
  
    if(bodyMassIndexValue < 17){
      classification = `Magreza Grau 2`
    } else if(bodyMassIndexValue < 18.5){
      classification = `Abaixo do peso`
    } else if(bodyMassIndexValue < 25){
      classification = `Peso Normal`
    } else if(bodyMassIndexValue < 30){
      classification = `Sobrepeso`
    } else if(bodyMassIndexValue < 35){
      classification = `Obesidade nível 1`
    } else if(bodyMassIndexValue < 40){
      classification = `Obesidade nível 2`
    } else{
      classification = `Obesidade Morbida`
    }
  
    return classification
  
  },

  bodyPerimetry(){

    let measurementPoints = {
      Braço: 0,
      Antebraço: 0,
      Cintura: 0,
      Quadril: 0,
      Coxa: 0,
      Panturrilha: 0
    } 
    let itsRealNumber = true
    let regexThreeWholeDigitsAndOneDecimalPlace = /(^[0-9]\.[0-9]$)|(^[0-9]{2}\.[0-9]$)|(^[0-9]{3}\.[0-9]$)/
  
    for(let bodyPart in measurementPoints){
  
      do{
  
        measurementPoints[bodyPart] = input.question(`Digite a perimetria - ${bodyPart} (cm)[000.0]: `)
  
        itsRealNumber = validationFunctions.isRegularExpression(measurementPoints[bodyPart], regexThreeWholeDigitsAndOneDecimalPlace)
        validationFunctions.incorrectValue(false, !itsRealNumber, "Antropometria")
  
      }while(!itsRealNumber)
      
    }
  
    return measurementPoints
  
  },

  showPerimeter(objectValue){
  
    console.log('Perimetria Corporal:')
    
    for(let property in objectValue){
      console.log(`${property}: ${objectValue[property]} cm`) 
    }
  
  },

  hipWaistRatio(waistPerimetry, hipPerimetry){

    return (waistPerimetry/ hipPerimetry).toFixed(2)
  
  },

  waistHipRatioClassification(sexValue, ageValue, waistHipRatioValue){

    let classification = ``
  
    switch (sexValue) {
  
      // masculine - masculine - masculine - masculine - masculine
      case 1:
        
        if(ageValue > 19 && ageValue < 30){
          
          if(waistHipRatioValue < 0.83){
            classification = `Baixo Risco`
          } else if(waistHipRatioValue < 0.89){
            classification = `Moderado Risco`
          } else if(waistHipRatioValue < 0.95){
            classification = `Alto Risco`
          } else {
            classification = `Muito Alto Risco`
          }
          
        } else if(ageValue < 40){
          
          if(waistHipRatioValue < 0.84){
            classification = `Baixo Risco`
          } else if(waistHipRatioValue < 0.92){
            classification = `Moderado Risco`
          } else if(waistHipRatioValue < 0.97){
            classification = `Alto Risco`
          } else {
            classification = `Muito Alto Risco`
          }
          
        } else if(ageValue < 50){
          
          if(waistHipRatioValue < 0.88){
            classification = `Baixo Risco`
          } else if(waistHipRatioValue < 0.96){
            classification = `Moderado Risco`
          } else if(waistHipRatioValue < 1){
            classification = `Alto Risco`
          } else {
            classification = `Muito Alto Risco`
          }
          
        } else if(ageValue < 60){
          
          if(waistHipRatioValue < 0.90){
            classification = `Baixo Risco`
          } else if(waistHipRatioValue < 0.97){
            classification = `Moderado Risco`
          } else if(waistHipRatioValue < 1.02){
            classification = `Alto Risco`
          } else {
            classification = `Muito Alto Risco`
          }
          
        } else if(ageValue < 70){
          
          if(waistHipRatioValue < 0.91){
            classification = `Baixo Risco`
          } else if(waistHipRatioValue < 0.99){
            classification = `Moderado Risco`
          } else if(waistHipRatioValue < 1.03){
            classification = `Alto Risco`
          } else {
            classification = `Muito Alto Risco`
          }
          
        } else{
          classification = `Esta classificação não se aplica a sua idade!`
        }
  
        break;
      
      // feminine - feminine - feminine - feminine - feminine
      case 2:
        if(ageValue > 19 && ageValue < 30){
          
          if(waistHipRatioValue < 0.71){
            classification = `Baixo Risco`
          } else if(waistHipRatioValue < 0.78){
            classification = `Moderado Risco`
          } else if(waistHipRatioValue < 0.82){
            classification = `Alto Risco`
          } else {
            classification = `Muito Alto Risco`
          }
          
        } else if(ageValue < 40){
          
          if(waistHipRatioValue < 0.72){
            classification = `Baixo Risco`
          } else if(waistHipRatioValue < 0.79){
            classification = `Moderado Risco`
          } else if(waistHipRatioValue < 0.84){
            classification = `Alto Risco`
          } else {
            classification = `Muito Alto Risco`
          }
          
        } else if(ageValue < 50){
          
          if(waistHipRatioValue < 0.73){
            classification = `Baixo Risco`
          } else if(waistHipRatioValue < 0.80){
            classification = `Moderado Risco`
          } else if(waistHipRatioValue < 0.87){
            classification = `Alto Risco`
          } else {
            classification = `Muito Alto Risco`
          }
          
        } else if(ageValue < 60){
          
          if(waistHipRatioValue < 0.74){
            classification = `Baixo Risco`
          } else if(waistHipRatioValue < 0.82){
            classification = `Moderado Risco`
          } else if(waistHipRatioValue < 0.88){
            classification = `Alto Risco`
          } else {
            classification = `Muito Alto Risco`
          }
          
        } else if(ageValue < 70){
          
          if(waistHipRatioValue < 0.76){
            classification = `Baixo Risco`
          } else if(waistHipRatioValue < 0.84){
            classification = `Moderado Risco`
          } else if(waistHipRatioValue < 0.90){
            classification = `Alto Risco`
          } else {
            classification = `Muito Alto Risco`
          }
          
        } else{
          classification = `Esta classificação não se aplica a sua idade!`
        }
  
        break;
  
      default:
        classification = `[ERROR] Sexo não identificado!`
        break;
    }
    
  
    return classification
  
  },

  waistCircumferenceClassification(sexValue, waistValue){

    classification = ``
  
    switch (sexValue) {
      
      case 1:
        
        if(waistValue < 94){
          classification = `Nenhum Risco`
        } else if(waistValue < 102){
          classification = `Risco Moderado`
        } else {
          classification = `Risco Alto`
        }
  
        break;
  
      case 2:
  
        if(waistValue < 80){
          classification = `Nenhum Risco`
        } else if(waistValue < 88){
          classification = `Risco Moderado`
        } else {
          classification = `Risco Alto`
        }
  
        break;
  
      default:
        classification = `[ERROR] Sexo não identificado!`
        break;
    }
  
    return classification
  
  },

  subcutaneousMeasures(){

    let subcutaneousFolds = {
      Triciptal: 0,
      Subescapular: 0,
      Peitoral: 0,
      SupraIliaca: 0,
      Abdominal: 0,
      Coxa: 0,
      Panturrilha: 0
    } 
    let validNumber = true
    let regexTwoDigits = /(^[0-9]$)|(^[0-9]{2}$)/
  
    for(let folds in subcutaneousFolds){
  
      do{
  
        subcutaneousFolds[folds] = input.question(`Digite a dobra cutânea - ${folds} (mm)[00]: `)
  
        validNumber = validationFunctions.isRegularExpression(subcutaneousFolds[folds], regexTwoDigits)
        validationFunctions.incorrectValue(false, !validNumber, "Antropometria")
  
      }while(!validNumber)
  
    }
  
    return subcutaneousFolds
  
  },

  showSubcutaneousFolds(objectValue){
  
    console.log('Dobras Cutâneas:')
    
    for(let property in objectValue){
      console.log(`${property}: ${objectValue[property]} mm`) 
    }
  
  },

  sumElements(array){

    let sumElements = 0
    
    for(let element in array){
      sumElements += Number(array[element])
    }
  
    return sumElements
  
  },

  fatPercentage(ageValue, sexValue, skinFoldObject){

    let = skinfoldArray = []
    let sumOfFolds = 0
    let bodyDensity = 0
    let fatPercentage = 0
  
    switch (sexValue) {
      
      case 1:
        
        skinfoldArray.push(skinFoldObject.Peitoral, skinFoldObject.Abdominal, skinFoldObject.Coxa)
        sumOfFolds = anthropometryFunctions.sumElements(skinfoldArray)
        bodyDensity = ((1.10938 - (0.0008267 * sumOfFolds )) + ((0.0000016 * (sumOfFolds * sumOfFolds)) - (0.0002574 * ageValue)))
        fatPercentage = (((4.95 / bodyDensity) - 4.5 ) * 100).toFixed(2)
  
        return fatPercentage
  
        break;
      
      case 2:
  
        skinfoldArray.push(skinFoldObject.Triciptal, skinFoldObject.SupraIliaca, skinFoldObject.Coxa)
        sumOfFolds = anthropometryFunctions.sumElements(skinfoldArray)
        bodyDensity = ((1.0994921-(0.0009929 * sumOfFolds)) + ((0.0000023 * (sumOfFolds * sumOfFolds)) - (0.0001392 * ageValue)))
        fatPercentage = (((5.01 / bodyDensity) - 4.57) * 100).toFixed(2)
  
        return fatPercentage
  
        break;
    
      default:
  
        return `[ERROR] Sexo não identificado!`
  
        break;
  
    }
  
  },

  fatPercentageClassification(sexValue, fatPercentageValue){

    let classification = ``
  
    switch (sexValue) {
      
      case 1:
        
        if(fatPercentageValue < 6){
          classification = `Desnutrição`
        } else if(fatPercentageValue < 15){
          classification = `Abaixo da média`
        } else if(fatPercentageValue < 16){
          classification = `Média`
        } else if(fatPercentageValue < 25){
          classification = `Sobrepeso`
        } else{
          classification = `Obesidade`
        }
  
        break;
  
      case 2:
  
        if(fatPercentageValue < 9){
          classification = `Desnutrição`
        } else if(fatPercentageValue < 23){
          classification = `Abaixo da média`
        } else if(fatPercentageValue < 24){
          classification = `Média`
        } else if(fatPercentageValue < 32){
          classification = `Sobrepeso`
        } else{
          classification = `Obesidade`
        }
  
        break;
  
      default:
        classification = `[ERROR] Sexo não identificado!`
        break;
    }
    
    return classification
  
  },

  fatBodyMass(bodyWeight, fatPercentage){

    return Number(((bodyWeight * fatPercentage) / 100).toFixed(1))
  
  },

  leanBodyMass(bodyWeight, fatBodyMass){

    return Number(bodyWeight - fatBodyMass)
  
  },

}

module.exports = {
  anthropometryFunctions
}