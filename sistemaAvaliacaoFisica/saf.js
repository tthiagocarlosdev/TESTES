const { headerFunctions } = require('./headerFunctions')
const { personalData } = require('./personalData')
const { anamnesisFunctions } = require('./anamnesisFunctions')
const { cardiorespiratoryFunctions } = require('./cardiorespiratoryFunctions')

headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables personalData
/*const name = personalData.userName()*/
const birthdayInBrazilianFormat =  personalData.dateOfBirth()
const birthdayInISOFormat = personalData.dateInISOFormat(birthdayInBrazilianFormat)
const age = personalData.age(birthdayInISOFormat)
/*const sexNumber = personalData.sexNumber()
const sex = personalData.showSex(sexNumber)
const profession = personalData.userProfession()
const userEmail = personalData.userEmail()
const phoneNumber = personalData.phoneNumber()

console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

// variables anamnesisFunctions
const questionnairePARQ = anamnesisFunctions.questionnairePARQ()
const currentPhysicalState = anamnesisFunctions.currentPhysicalState()
const pastIllness = anamnesisFunctions.pastIllness()
const illnessesFamily = anamnesisFunctions.illnessesInTheFamily()
const surgeryPerformed = anamnesisFunctions.surgeryPerformed()
const useMedication = anamnesisFunctions.useMedication()
const sportsInjuries = anamnesisFunctions.sportsInjuries()
const trainingObjective = anamnesisFunctions.trainingObjective()
const daysAvailableForTraining = anamnesisFunctions.daysAvailableForTraining()
const timeAvailablePerTraining = anamnesisFunctions.timeAvailablePerTraining()
*/
// variables cardiorespiratory
const restingHeartRate = cardiorespiratoryFunctions.restingHeartRate()
const maximumHeartRate = cardiorespiratoryFunctions.maximumHeartRate(age)
/*
// show results personalData
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")
console.log(`Nome: ${name}`)
console.log(`Data de nascimento: ${birthdayInBrazilianFormat}`)
console.log(`Idade: ${age} anos!`)
console.log(`Sexo: ${sex}`)
console.log(`Profissão: ${profession}`)
console.log(`E-mail: ${userEmail}`)
console.log(`Celular: ${phoneNumber}`)

// show results anamnesisFunctions
console.log(`===============================`) 
headerFunctions.subTitle("Anamnese")

console.log(`Questionário PAR-Q: ${questionnairePARQ}`)
console.log(`Estado físico: ${anamnesisFunctions.showPhysicalState(currentPhysicalState)}`)
console.log(`Doença Pregressa: ${pastIllness}`)
console.log(`Doença Pregressa na Família: ${illnessesFamily}`)
console.log(`Cirurgia: ${surgeryPerformed}`)
console.log(`Uso de Medicamento: ${useMedication}`)
console.log(`Lesão Desportiva: ${sportsInjuries}`)
console.log(`Objetivo do treino: ${trainingObjective}`)
console.log(`Dias disponíveis para treinar: ${daysAvailableForTraining} dias.`)
console.log(`Tempo disponível para treino: ${timeAvailablePerTraining} minutos.`)
*/
// show results cardiorespiratoryFunctions
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Cardiorespiratório")
console.log(`Frequência Cardíaca de Repouso: ${restingHeartRate} bpm.`)
console.log(`Frequência Cardíaca Máxima: ${maximumHeartRate} bpm.`)

console.log(`===============================`)
