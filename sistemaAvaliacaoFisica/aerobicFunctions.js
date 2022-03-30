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
        voTwoMaxValue = aerobicFunctions.oneThousandSixHundredFromRockport() 
        break;
  
      case 4:
        voTwoMaxValue = aerobicFunctions.bankMcArdle()
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

}

module.exports = {
  aerobicFunctions
}