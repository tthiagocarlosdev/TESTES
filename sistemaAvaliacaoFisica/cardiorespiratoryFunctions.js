/* cardiorespiratory functions */

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
         
        return Number(restingHeartRate)
      
    },

    maximumHeartRate(userObject){

        return Number(220 - userObject.age)
      
    },

    workingHeartRate(userObject){

      let restingHeartRate = userObject.restingHeartRate
      let maximumHeartRate = userObject.maximumHeartRate
      let workingHeartRateValues = []
    
      for(let percentage of userObject.percentageValues){
        workingHeartRateValues.push(Math.round(((( maximumHeartRate - restingHeartRate )* (percentage / 100) ) + restingHeartRate)))
      }
    
      return workingHeartRateValues
    },

    showWorkingHeartRate(userObject){
  
      let percentage = userObject.percentageValues
      let workingHeartRate = userObject.workingHeartRate
    
      console.log(`Frequência Cardíaca de Treino:`)
      for(let i = 0; i < workingHeartRate.length; i++){
        console.log(`       ${percentage[i]}% = ${workingHeartRate[i]} bpm`)
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
      
      classificationOfBloodPressure(objectValue){

        let classification = {
          systolicClassification: '',
          diastolicClassification: '',
        }
      
        /* Systolic Classification */
        if(objectValue.systolic < 120){
          classification.systolicClassification = 'Ótima'
        } else if(objectValue.systolic < 130){
          classification.systolicClassification = 'Normal'
        } else if(objectValue.systolic < 140){
          classification.systolicClassification = 'Limítrofe'
        } else if(objectValue.systolic < 160){
          classification.systolicClassification = 'Hipertensão Estágio 1'
        } else if(objectValue.systolic < 180){
          classification.systolicClassification = 'Hipertensão Estágio 2'
        } else{
          classification.systolicClassification = 'Hipertensão Estágio 3'
        }
      
        /* Diastolic Classification */
        if(objectValue.diastolic < 80){
          classification.diastolicClassification = 'Ótima'
        } else if(objectValue.diastolic < 85){
          classification.diastolicClassification = 'Normal'
        } else if(objectValue.diastolic < 90){
          classification.diastolicClassification = 'Limítrofe'
        } else if(objectValue.diastolic < 100){
          classification.diastolicClassification = 'Hipertensão Estágio 1'
        } else if(objectValue.diastolic < 110){
          classification.diastolicClassification = 'Hipertensão Estágio 2'
        } else{
          classification.diastolicClassification = 'Hipertensão Estágio 3'
        }
      
        return classification
      
      },

}

const percentageValues = [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95]

module.exports = {
    cardiorespiratoryFunctions, percentageValues
}