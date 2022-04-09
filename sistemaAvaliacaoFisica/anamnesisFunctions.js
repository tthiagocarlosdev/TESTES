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
      return "Todas as respostas do questionário foram 'Não'!"
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
  
    return Number(currentPhysicalState)
  
  },
  
  showPhysicalState(user){

    return user.currentPhysicalState === 1 ? 'Sedentário' : 'Ativo'
  
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

  surgeryPerformed(){

    let surgeryPerformedNumber = 2
    let surgeryPerformedText = ''
    let itsNumberOneOrTwo = true
    let regexNumber = /^[1]$|^[2]$/
    let itsLetters = true
  
    do{
  
      console.log(`Avaliado já realizou precedimento cirúrgico?`)
      anamnesisFunctions.choice()
      surgeryPerformedNumber = Number(input.question(''))
  
      itsNumberOneOrTwo = validationFunctions.isRegularExpression(surgeryPerformedNumber, regexNumber)
      validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")
  
      if(surgeryPerformedNumber === 1){
        
        do{
  
          console.log(`Qual cirurgia?`)
          surgeryPerformedText = input.question('')
          itsLetters = validationFunctions.itsLetters(surgeryPerformedText)
          validationFunctions.incorrectValue(false, !itsLetters, "Anamnese")
  
        }while(!itsLetters)
        
      } else {
        surgeryPerformedText = `Nunca realizou procedimento cirúrgico.`
      }
  
    }while(!itsNumberOneOrTwo)
  
      return surgeryPerformedText
  
  },

  useMedication(){

    let useMedicationNumber = 2
    let useMedicationText = ''
    let itsNumberOneOrTwo = true
    let regexNumber = /^[1]$|^[2]$/
    let itsLetters = true
  
    do{
  
      console.log(`Avaliado faz uso de medicamentos?`)
      anamnesisFunctions.choice()
      useMedicationNumber = Number(input.question(''))
  
      itsNumberOneOrTwo = validationFunctions.isRegularExpression(useMedicationNumber, regexNumber)
      validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")
  
      if(useMedicationNumber === 1){
        
        do{
  
          console.log(`Qual medicamento?`)
          useMedicationText = input.question('')
          itsLetters = validationFunctions.itsLetters(useMedicationText)
          validationFunctions.incorrectValue(false, !itsLetters, "Anamnese")
  
        }while(!itsLetters)
        
      } else {
        useMedicationText = `Não faz uso de medicamento.`
      }
  
    }while(!itsNumberOneOrTwo)
  
      return useMedicationText
  
  },

  sportsInjuries(){
  
    let sportsInjuriesNumber = 2
    let sportsInjuriesText = ''
    let itsNumberOneOrTwo = true
    let regexNumber = /^[1]$|^[2]$/
    let itsLetters = true
  
    do{
  
      console.log(`Avaliado já sofreu alguma lesão desportiva?`)
      anamnesisFunctions.choice()
      sportsInjuriesNumber = Number(input.question(''))
  
      itsNumberOneOrTwo = validationFunctions.isRegularExpression(sportsInjuriesNumber, regexNumber)
      validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")
  
      if(sportsInjuriesNumber === 1){
        
        do{
  
          console.log(`Qual lesão?`)
          sportsInjuriesText = input.question('')
          itsLetters = validationFunctions.itsLetters(sportsInjuriesText)
          validationFunctions.incorrectValue(false, !itsLetters, "Anamnese")
  
        }while(!itsLetters)
        
      } else {
        sportsInjuriesText = `Nunca sofreu lesão desportiva.`
      }
  
    }while(!itsNumberOneOrTwo)
  
      return sportsInjuriesText
  
  },

  trainingObjective(){

    let trainingObjectiveAnswer = ''
    let regexNumber = /^[1-5]$/
    let isNumberOneToFive = true
  
    do{
  
      console.log('Qual é o objetivo do seu treino?')
      console.log(`[1] Estético`)
      console.log(`[2] Bem-estar e Saúde`)
      console.log(`[3] Terapêutico`)
      console.log(`[4] Recreativo`)
      console.log(`[5] Desportivo`)
      trainingObjectiveAnswer = Number(input.question(''))
  
      isNumberOneToFive = validationFunctions.isRegularExpression(trainingObjectiveAnswer, regexNumber)
      validationFunctions.incorrectValue(!isNumberOneToFive, false, "Anamnese")
  
    }while(!isNumberOneToFive)
    
    switch (trainingObjectiveAnswer) {
      case 1:
        return `Estético`
        break
      case 2:
        return `Bem-estar e Saúde`
        break
      case 3:
        return `Terapêutico`
        break
      case 4:
        return `Recreativo`  
        break
      default:
        return `Desportivo`
        break
    }
  
  },

  daysAvailableForTraining(){

    let daysAvailableForTraining = 0
    let isNumberOneToSeven = true
    let regexNumber = /^[1-7]$/
    
    do{
   
     daysAvailableForTraining = input.question('Digite a quantidade de dias disponíveis para treinar: ')
   
     isNumberOneToSeven = validationFunctions.isRegularExpression(daysAvailableForTraining, regexNumber)
     validationFunctions.incorrectValue(!isNumberOneToSeven, false, "Anamnese")
   
    }while(!isNumberOneToSeven)
   
    return daysAvailableForTraining
   
   },

   timeAvailablePerTraining(){

    let timeAvailablePerTraining = 0
    let isNumberFromOneToThreeHundred = true
    let regexNumber = /(^[1-9]$)|(^[1-9][0-9]$)|(^[1-2][0-9]{2}$)|(^[3][0][0]$)/
  
    do{
  
      timeAvailablePerTraining = input.question('Digite o tempo disponível para treino (min): ')
      isNumberFromOneToThreeHundred = validationFunctions.isRegularExpression(timeAvailablePerTraining, regexNumber)
      validationFunctions.incorrectValue(!isNumberFromOneToThreeHundred, false, "Anamnese")
   
    }while(!isNumberFromOneToThreeHundred)
     
  
    return timeAvailablePerTraining
  
  },

}

module.exports = {
  anamnesisFunctions
}