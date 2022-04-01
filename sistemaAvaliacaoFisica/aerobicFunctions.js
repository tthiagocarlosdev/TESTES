/* aerobic functions */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')

const aerobicFunctions = {

  menuVoTwoMax(){
  
    let choise = 0
    let validChoise = false
    const regexFromOneToFour = /(^[1]$)|(^[2]$)|(^[3]$)|(^[4]$)/
  
    do{
      
      console.log(`Escolha um teste: `)
      console.log(`[1] Cicloergômetro - Astrand-Rhyming`)
      console.log(`[2] Cooper - 12 min`)
      console.log(`[3] Caminhada de 1600 - Rockport`)
      console.log(`[4] Banco - McArdle`)
      choise = input.question(``)
  
      validChoise = validationFunctions.isRegularExpression(choise, regexFromOneToFour)
      validationFunctions.incorrectValue(false, !validChoise, "Aeróbico")
  
    }while(!validChoise)
  
    return Number(choise)
  
  },

  voTwoMax(userObject){

    let voTwoMaxValue = 0
    let protocol = aerobicFunctions.menuVoTwoMax()
  
    switch (protocol) {
  
      case 1:
        voTwoMaxValue = aerobicFunctions.cycleErgometerAstrandRhyming(userObject)
        break;
      
      case 2:
        voTwoMaxValue = aerobicFunctions.cooperTwelveMin()
        break;
  
      case 3:
        voTwoMaxValue = aerobicFunctions.oneThousandSixHundredFromRockport(userObject) 
        break;
  
      case 4:
        voTwoMaxValue = aerobicFunctions.bankMcArdle(userObject)
        break;
    
      default:
        voTwoMaxValue = 0
        break;
    }
  
    return Number(voTwoMaxValue)
  
  },

  validHeartRate(regex, minute){

    let heartRateValue = 0
    let validHeartRate = false
  
    do{
  
      console.log(`Cicloergômetro - Astrand-Rhyming:`)
      heartRateValue = input.question(`Digite a frequência cardíaca do ${minute}º minuto de teste (bpm): `)
      validHeartRate = validationFunctions.isRegularExpression(heartRateValue, regex)
      validationFunctions.incorrectValue(false, !validHeartRate, "Aeróbico")
  
    }while(!validHeartRate)
  
    return Number(heartRateValue)
  },

  chargeCycleErgometerAstrandRhyming(regex){

    let charge = 0
    let validCharge = false
  
    do{
  
      console.log(`Cicloergômetro - Astrand-Rhyming:`)
      charge = input.question(`Digite a carga utilizada no teste (W): `)
      validCharge = validationFunctions.isRegularExpression(charge, regex)
      validationFunctions.incorrectValue(false, !validCharge, "Aeróbico")
  
    }while(!validCharge)
  
    return Number(charge)
  },

  cycleErgometerAstrandRhyming(userObject){
  
    const regexFromOneToTwoHundred = /(^[0-9]$)|(^[0-9]{2}$)|(^[1][0-9]{2}$)|(^[2][0][0])/
    const fifthMinuteValue = aerobicFunctions.validHeartRate(regexFromOneToTwoHundred, 5)
    const sixthMinuteValue = aerobicFunctions.validHeartRate(regexFromOneToTwoHundred, 6)
    const chargeValue = aerobicFunctions.chargeCycleErgometerAstrandRhyming(regexFromOneToTwoHundred)
    const exertionalHeartRate = Number(((fifthMinuteValue + sixthMinuteValue) / 2))
    const loadVO2 = Number((0.129 + ( 0.014 * chargeValue )))
    const VO2max_L_min =  Number(((( userObject.maximumHeartRate - userObject.restingHeartRate ) / ( exertionalHeartRate - userObject.restingHeartRate )) * loadVO2))
    const VO2max_mL_Kg_min = Number(((1000 * VO2max_L_min ) / userObject.bodyWeight).toFixed(2))
  
    return VO2max_mL_Kg_min
  
  },

  cooperTwelveMin(){

    let distance = 0
    let validDistance = false
    let VO2max_mL_Kg_min = 0
    let regexFourDigits = /(^[0-9]$)|(^[0-9]{2}$)|(^[0-9]{3}$)|(^[0-9]{4}$)/
  
    do{
  
      console.log(`Teste de Cooper - 12 min:`)
      distance = input.question(`Digite a distância atingida pelo usuário (m): `)
      validDistance = validationFunctions.isRegularExpression(distance, regexFourDigits)
      validationFunctions.incorrectValue(false, !validDistance, "Aeróbico")
  
    }while(!validDistance)
  
    VO2max_mL_Kg_min = Number(((distance - 504.9) / 44.73).toFixed(2))
  
    return VO2max_mL_Kg_min
  
  },

  rockportTestTime(){

    let rockportTestTime = 0
    let minutes = 0
    let seconds = 0
    let validMinutes = false
    let validSeconds = false
    let regexMinutesAndSeconds = /(^[0-9]$)|(^[0-5][0-9]$)/ 
  
    do{
  
      console.log(`Teste de Caminhada Rockport`)
      minutes = input.question(`Tempo que levou para chegar (minutos): `)
      seconds = input.question(`Tempo que levou para chegar (segundos): `)
      validMinutes = validationFunctions.isRegularExpression(minutes, regexMinutesAndSeconds)
      validSeconds = validationFunctions.isRegularExpression(seconds, regexMinutesAndSeconds)
      validationFunctions.incorrectValue(!validMinutes, !validSeconds, "Aeróbico")
  
    }while(!validMinutes || !validSeconds)
  
    rockportTestTime = (Number(minutes) + (Number(seconds) / 60))
    
    return rockportTestTime
  },

  testHeartRate(testName){

    let testHeartRate = 0
    let validTestHeartRate = false
    let isNumberFromZeroToTwoHundredAndTwenty = /(^[0-9]$)|(^[0-9]{2}$)|(^[1][0-9]{2}$)|(^[2][0-1][0-9]$)|(^[2][2][0]$)/ 
  
    do{
  
      console.log(`${testName}`)
      testHeartRate = input.question(`Frequência Cardíaca ao final do teste (bpm): `)
      validTestHeartRate = validationFunctions.isRegularExpression(testHeartRate, isNumberFromZeroToTwoHundredAndTwenty)
      validationFunctions.incorrectValue(false, !validTestHeartRate, "Aeróbico")
  
    }while(!validTestHeartRate)
    
    return Number(testHeartRate)
  
  },

  oneThousandSixHundredFromRockport(userObject){

    let testTime = aerobicFunctions.rockportTestTime()
    let heartRate = aerobicFunctions.testHeartRate('Teste de Caminhada Rockport')
    let weightInPounds = Number(userObject.bodyWeight / 0.454)
    let VO2max_mL_Kg_min = 0
  
    if(userObject.sexNumber === 1){
      VO2max_mL_Kg_min = Number((132.853 - (0.0769 * weightInPounds) - (0.3877 * userObject.age) + (6.315 * 1) - (3.2649 * testTime) - (0.1565 * heartRate)).toFixed(2))
    } else {
      VO2max_mL_Kg_min = Number((132.853 - (0.0769 * weightInPounds) - (0.3877 * userObject.age) + (6.315 * 0) - (3.2649 * testTime) - (0.1565 * heartRate)).toFixed(2))
    }
    
    return VO2max_mL_Kg_min
  
  },

  bankMcArdle(userObject){

    let VO2max_mL_Kg_min = 0
    let heartRate = aerobicFunctions.testHeartRate('Teste Banco - McArdle')
    
    if(userObject.sexNumber === 1){
  
      VO2max_mL_Kg_min = Number((111.33 - ( 0.42 * heartRate )).toFixed(2))
  
    } else {
  
      VO2max_mL_Kg_min = Number(( 65.81 - ( 0.1847 * heartRate)).toFixed(2))
    }
  
    return VO2max_mL_Kg_min
  },

  vo2maxExpected(userObject){

    let VO2max_mL_Kg_min_Expected = 0
  
    if(userObject.sexNumber === 1){
  
      VO2max_mL_Kg_min_Expected = Number(( 60 - ( 0.55 * userObject.age)).toFixed(2))
  
    } else {
  
      VO2max_mL_Kg_min_Expected = Number(( 48 - (0.37 * userObject.age)).toFixed(2))
  
    }
  
    return VO2max_mL_Kg_min_Expected
  
  },

  vo2maxClassification(userObject){
  
    let classification = ''
    const unidentifiedSex = `[ERROR] Sexo não identificado!` 
    const ageBetweenTwentyAndTwentyNine = userObject.age >= 20 && userObject.age <= 29
    const ageBetweenThirtyAndThirtyNine = userObject.age >= 30 && userObject.age <= 39
    const ageBetweenFortyAndFortyNine = userObject.age >= 40 && userObject.age <= 49
    const ageBetweenFiftyAndFiftyNine = userObject.age >= 50 && userObject.age <= 59
    const ageBetweenSixtyAndSixtyNine = userObject.age >= 60 && userObject.age <= 69
    const veryPoorRating = `Muito Fraco`
    const weakRating = `Fraco`
    const regularRating = `Regular`
    const goodRating = `Bom`
    const excellentRating = `Excelente`
    const classificationNotAppliedToAge = `Esta classificação não se aplica a sua idade!`
  
    switch (userObject.sexNumber) {
      
      // men
      case 1:
        
        if(ageBetweenTwentyAndTwentyNine){
          
          if(userObject.voTwoMax < 25){
            classification = veryPoorRating
          } else if(userObject.voTwoMax < 34){
            classification = weakRating
          } else if(userObject.voTwoMax < 43){
            classification = regularRating
          } else if(userObject.voTwoMax < 54){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenThirtyAndThirtyNine){
          
          if(userObject.voTwoMax < 23){
            classification = veryPoorRating
          } else if(userObject.voTwoMax < 31){
            classification = weakRating
          } else if(userObject.voTwoMax < 39){
            classification = regularRating
          } else if(userObject.voTwoMax < 49){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFortyAndFortyNine){
          
          if(userObject.voTwoMax < 20){
            classification = veryPoorRating
          } else if(userObject.voTwoMax < 27){
            classification = weakRating
          } else if(userObject.voTwoMax < 36){
            classification = regularRating
          } else if(userObject.voTwoMax < 45){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFiftyAndFiftyNine){
          
          if(userObject.voTwoMax < 18){
            classification = veryPoorRating
          } else if(userObject.voTwoMax < 25){
            classification = weakRating
          } else if(userObject.voTwoMax < 34){
            classification = regularRating
          } else if(userObject.voTwoMax < 43){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenSixtyAndSixtyNine){
          
          if(userObject.voTwoMax < 16){
            classification = veryPoorRating
          } else if(userObject.voTwoMax < 23){
            classification = weakRating
          } else if(userObject.voTwoMax < 31){
            classification = regularRating
          } else if(userObject.voTwoMax < 41){
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
          
          if(userObject.voTwoMax < 24){
            classification = veryPoorRating
          } else if(userObject.voTwoMax < 31){
            classification = weakRating
          } else if(userObject.voTwoMax < 38){
            classification = regularRating
          } else if(userObject.voTwoMax < 49){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenThirtyAndThirtyNine){
          
          if(userObject.voTwoMax < 20){
            classification = veryPoorRating
          } else if(userObject.voTwoMax < 28){
            classification = weakRating
          } else if(userObject.voTwoMax < 34){
            classification = regularRating
          } else if(userObject.voTwoMax < 45){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFortyAndFortyNine){
          
          if(userObject.voTwoMax < 17){
            classification = veryPoorRating
          } else if(userObject.voTwoMax < 24){
            classification = weakRating
          } else if(userObject.voTwoMax < 31){
            classification = regularRating
          } else if(userObject.voTwoMax < 42){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFiftyAndFiftyNine){
          
          if(userObject.voTwoMax < 15){
            classification = veryPoorRating
          } else if(userObject.voTwoMax < 21){
            classification = weakRating
          } else if(userObject.voTwoMax < 28){
            classification = regularRating
          } else if(userObject.voTwoMax < 38){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenSixtyAndSixtyNine){
          
          if(userObject.voTwoMax < 13){
            classification = veryPoorRating
          } else if(userObject.voTwoMax < 18){
            classification = weakRating
          } else if(userObject.voTwoMax < 24){
            classification = regularRating
          } else if(userObject.voTwoMax < 35){
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

  trainingSpeed(userObject){

    let objectTrainingSpeed = {
      METs: 0,
      percentage: [],
      trainingFrequency: [],
      trainingSpeed: [],
      titleTrainSpeed: `Velocidade de Treino:`, 
      showTrainingSpeed: [],
    }
  
    objectTrainingSpeed.METs = Number((userObject.voTwoMax / 3.5)) // Calculate METs
  
    // Calculate Percentage
    for(let i = 40; i <= 95; i+=5){
      objectTrainingSpeed.percentage.push(Number([i]))
    }
  
    // Calculate Training Frequency
    for(let i = 0; i < objectTrainingSpeed.percentage.length; i++){
      
      if(userObject.currentPhysicalState === 1){
        objectTrainingSpeed.trainingFrequency.push(Number((objectTrainingSpeed.percentage[i] / 100)))
      } else if(userObject.currentPhysicalState === 2){
        objectTrainingSpeed.trainingFrequency.push(Number(((objectTrainingSpeed.METs + objectTrainingSpeed.percentage[i]) / 100)))
      }
  
    }
    
    // Calculate Training Speed
    for(let i = 0; i < objectTrainingSpeed.trainingFrequency.length; i++){
  
      objectTrainingSpeed.trainingSpeed.push(Number((objectTrainingSpeed.METs * objectTrainingSpeed.trainingFrequency[i]).toFixed(2)))
  
    }
  
    // Show Training Speed
    for(let i = 0; i < objectTrainingSpeed.trainingSpeed.length; i++){
      objectTrainingSpeed.showTrainingSpeed.push(`${objectTrainingSpeed.percentage[i]}% = ${objectTrainingSpeed.trainingSpeed[i]} km/h`)
    }
  
    return objectTrainingSpeed
  
  },

}

module.exports = {
  aerobicFunctions
}