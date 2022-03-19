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

}

module.exports = {
    cardiorespiratoryFunctions
}