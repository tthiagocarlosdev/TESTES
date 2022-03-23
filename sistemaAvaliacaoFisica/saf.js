const { headerFunctions } = require('./headerFunctions')
const { personalData } = require('./personalData')
const { anamnesisFunctions } = require('./anamnesisFunctions')
const { cardiorespiratoryFunctions } = require('./cardiorespiratoryFunctions')
const  { anthropometryFunctions } = require('./anthropometryFunctions')
/*
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables personalData
const name = personalData.userName()
const birthdayInBrazilianFormat =  personalData.dateOfBirth()
const birthdayInISOFormat = personalData.dateInISOFormat(birthdayInBrazilianFormat)
const age = personalData.age(birthdayInISOFormat)
const sexNumber = personalData.sexNumber()
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

console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Cardiorrespiratório")

// variables cardiorespiratory
const restingHeartRate = cardiorespiratoryFunctions.restingHeartRate()
const maximumHeartRate = cardiorespiratoryFunctions.maximumHeartRate(age)
const restingBloodPressure = cardiorespiratoryFunctions.restingBloodPressure()
const bloodPressureRating = cardiorespiratoryFunctions.classificationOfBloodPressure(restingBloodPressure)
*/
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Antropometria")

// variables anthropometryFunctions
const bodyWeight = anthropometryFunctions.bodyWeight()
const bodyStature = anthropometryFunctions.stature()
const bodyMassIndex = anthropometryFunctions.bodyMassIndex(bodyWeight, bodyStature)

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

// show results cardiorespiratoryFunctions
console.log(`===============================`) 
headerFunctions.subTitle("Cardiorespiratório")
console.log(`Frequência Cardíaca de Repouso: ${restingHeartRate} bpm.`)
console.log(`Frequência Cardíaca Máxima: ${maximumHeartRate} bpm.`)
cardiorespiratoryFunctions.workingHeartRate(Number(restingHeartRate), Number(maximumHeartRate))
console.log(`Pressão Arterial de Repouso: ${restingBloodPressure.systolic}/${restingBloodPressure.diastolic} mmHg.`)
console.log(`Classificação da Pressão Arterial`)
console.log(`Sistólica: ${bloodPressureRating.systolicClassification}`)
console.log(`Diastólica: ${bloodPressureRating.diastolicClassification}`)
*/

console.clear() // temporary
headerFunctions.systemHeader() // temporary
headerFunctions.subTitle("Antropometria") // temporary
// show results anthropometryFunctions
// console.log(`===============================`) 
// headerFunctions.subTitle("Antropometria")
console.log(`Peso Corporal: ${bodyWeight} kilos.`)
console.log(`Estatura Corporal: ${bodyStature} metros.`)
console.log(`Índice de Massa Corporal - IMC: ${bodyMassIndex}`)

console.log(`===============================`)
