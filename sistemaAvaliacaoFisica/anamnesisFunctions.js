/* anamnesisFunctions.js */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')

const anamnesisFunctions = {

  choice(){

    console.log('Escolha:')
    console.log('[1] Sim')
    console.log('[2] Não')

  },

  questionnairePARQ(){

    let questionnairePARQ = [
      "Seu médico já mencionou alguma vez que você tem uma condição cardíaca e que você só deve realizar atividade física recomendada por um médico?",
      "Você sente dor no tórax quando realiza atividade física?",
      "No mês passado, você teve dor torácica quando não estava realizando atividade física?",
      "Você perdeu o equilíbrio por causa de tontura ou alguma vez perdeu a consciência?",
      "Você tem algum problema ósseo ou de articulação que poderia piorar em conseqüência de uma alteração em sua atividade física?",
      "Seu médico está prescrevendo medicamentos para sua pressão ou condição cardíaca?",
      "Você teria alguma razão para não praticar exercício físico ou outro problema que impeça?",
    ]
    let questionnairePARQAnswer = []
    let itsNumberOneOrTwo = true
    let regexNumber = /^[1]$|^[2]$/

    for(let i = 0; i < questionnairePARQ.length; i++){
      
      do{

        console.log(`${[i+1]} - ${questionnairePARQ[i]}`)
        anamnesisFunctions.choice()
        questionnairePARQAnswer[i] = input.question("")
        
        itsNumberOneOrTwo = validationFunctions.isRegularExpression(questionnairePARQAnswer[i], regexNumber)
        validationFunctions.incorrectValue(false, !itsNumberOneOrTwo, "Anamnese")

      }while(!itsNumberOneOrTwo)
      
    }
    
    if(questionnairePARQAnswer.includes("1")){
      return "Você deverá realizar um exame médico antes de iniciar suas atividades!"
    } else {
      return "Todas as respostas do questionário foram 'Sim'!"
    }

  },

  currentPhysicalState(){

    let currentPhysicalState = 0
    let itsNumberOneOrTwo = true
    const regexNumber = /^[1]$|^[2]$/
    
    do{
  
      console.log('Qual seu estado físico atualmente? ')
      console.log(`[1] Sedentário`)
      console.log(`[2] Ativo`)
      currentPhysicalState = input.question('')
     
      itsNumberOneOrTwo = validationFunctions.isRegularExpression(currentPhysicalState, regexNumber)
      validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")
  
    }while(!itsNumberOneOrTwo)
  
    return currentPhysicalState
  
  },
  
  showPhysicalState(numericValue){
  
    return Number(numericValue) === 1 ? 'Sedentário' : 'Ativo'
  
  },

  pastIllness(){

    let pastIllnessNumber = 2
    let pastIllnessText = ''
    let itsNumberOneOrTwo = true
    let regexNumber = /^[1]$|^[2]$/
    let itsLetters = true
  
    do{
  
      console.log(`Avaliado possue doença pregressa?`)
      anamnesisFunctions.choice()
      pastIllnessNumber = Number(input.question(''))
  
      itsNumberOneOrTwo = validationFunctions.isRegularExpression(pastIllnessNumber, regexNumber)
      validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")
  
      if(pastIllnessNumber === 1){
        
        do{
  
          console.log(`Qual doença?`)
          pastIllnessText = input.question('')
          itsLetters = validationFunctions.itsLetters(pastIllnessText)
          validationFunctions.incorrectValue(false, !itsLetters, "Anamnese")
  
        }while(!itsLetters)
        
      } else {
        pastIllnessText = `Sem doença pregressa.`
      }
  
    }while(!itsNumberOneOrTwo)
  
      return pastIllnessText
  
  },

  illnessesInTheFamily(){

    let illnessesFamilyNumber = 2
    let illnessesFamilyText = ''
    let itsNumberOneOrTwo = true
    let regexNumber = /^[1]$|^[2]$/
    let itsLetters = true
  
    do{
  
      console.log(`Avaliado possue alguém da família com doença pregressa?`)
      anamnesisFunctions.choice()
      illnessesFamilyNumber = Number(input.question(''))
  
      itsNumberOneOrTwo = validationFunctions.isRegularExpression(illnessesFamilyNumber, regexNumber)
      validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")
  
      if(illnessesFamilyNumber === 1){
        
        do{
  
          console.log(`Qual doença?`)
          illnessesFamilyText = input.question('')
          itsLetters = validationFunctions.itsLetters(illnessesFamilyText)
          validationFunctions.incorrectValue(false, !itsLetters, "Anamnese")
  
        }while(!itsLetters)
        
      } else {
        illnessesFamilyText = `Sem doença pregressa na família.`
      }
  
    }while(!itsNumberOneOrTwo)
  
      return illnessesFamilyText
  
  },

}

module.exports = {
  anamnesisFunctions
}