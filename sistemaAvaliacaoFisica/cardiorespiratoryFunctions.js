/* cardiorespiratory */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')

const cardiorespiratoryFunctions = {
    
    restingHeartRate(){

        let restingHeartRate = 0
        let isANumberFromZeroToTwoHundredAndTwenty = true
        let regexNumber = /(^[0-9]$)|(^[1-9][0-9]$)|(^[1][0-9]{2}$)|(^[2][0][0]$)/
      
        do{
      
          restingHeartRate = input.question('Digite a Frequência Cardíaca de Repouso (bpm): ')
          isANumberFromZeroToTwoHundredAndTwenty = validationFunctions.isRegularExpression(restingHeartRate, regexNumber)
          validationFunctions.incorrectValue(!isANumberFromZeroToTwoHundredAndTwenty, false, "Cardiorrespiratório")
       
        }while(!isANumberFromZeroToTwoHundredAndTwenty)
         
        return restingHeartRate
      
    },

    maximumHeartRate(ageValue){

        return 220 - Number(ageValue)
      
    },

    workingHeartRate(restingHeartRateValue, maximumHeartRateValue){

        let workingHeartRate = []
        let percentage = []
      
        for(let i = 40; i <= 95; i+=5){
          workingHeartRate.push(Math.round(((( maximumHeartRateValue - restingHeartRateValue )* (i / 100) ) + restingHeartRateValue)))
          percentage.push(i)
        }
      
        console.log(`Frequência Cardíaca de Treino:`)
        for(let i = 0; i < workingHeartRate.length; i++){
          console.log(`        ${percentage[i]}% = ${workingHeartRate[i]} bpm`)
        } 
      
      },

      restingBloodPressure(){

        let bloodPressure = {
          systolic: 0, 
          diastolic: 0
        }
        let systolicIsNumber = true
        let diastolicIsNumber = true
      
      
        do{
      
          bloodPressure.systolic = input.question('Digite a pressão sistólica (mmHg): ')
          bloodPressure.diastolic = input.question('Digite a pressão diastólica (mmHg): ')
      
          systolicIsNumber = validationFunctions.itsNumber(bloodPressure.systolic)
          diastolicIsNumber = validationFunctions.itsNumber(bloodPressure.diastolic)
          validationFunctions.incorrectValue(!systolicIsNumber, !diastolicIsNumber, "Cardiorrespiratório")
      
        }while(!systolicIsNumber || !diastolicIsNumber)
      
         return bloodPressure
      
      },

}

module.exports = {
    cardiorespiratoryFunctions
}