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

}

module.exports = {
  anthropometryFunctions
}