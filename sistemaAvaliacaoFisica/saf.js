const { headerFunctions } = require('./headerFunctions')
const { personalData } = require('./personalData')
const { anamnesisFunctions } = require('./anamnesisFunctions')
const { cardiorespiratoryFunctions } = require('./cardiorespiratoryFunctions')
const { anthropometryFunctions } = require('./anthropometryFunctions')
const { neuromuscularFunctions } = require('./neuromuscularFunctions')
const { aerobicFunctions } = require('./aerobicFunctions')

const user = { }

/*
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables personalData
user.name = personalData.userName()*/
user.birthdayInBrazilianFormat =  personalData.dateOfBirth()
user.birthdayInISOFormat = personalData.dateInISOFormat(user.birthdayInBrazilianFormat)
user.age = personalData.age(user.birthdayInISOFormat)
user.sexNumber = personalData.sexNumber()/*
const sex = personalData.showSex(sexNumber)
const profession = personalData.userProfession()
const userEmail = personalData.userEmail()
const phoneNumber = personalData.phoneNumber()

console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

// variables anamnesisFunctions
const questionnairePARQ = anamnesisFunctions.questionnairePARQ()*/
user.currentPhysicalState = anamnesisFunctions.currentPhysicalState()/*
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
headerFunctions.subTitle("Cardiorrespiratório")*/

// variables cardiorespiratory
user.restingHeartRate = cardiorespiratoryFunctions.restingHeartRate()
user.maximumHeartRate = cardiorespiratoryFunctions.maximumHeartRate(user.age)/*
const restingBloodPressure = cardiorespiratoryFunctions.restingBloodPressure()
const bloodPressureRating = cardiorespiratoryFunctions.classificationOfBloodPressure(restingBloodPressure)

console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Antropometria")*/

// variables anthropometryFunctions
user.bodyWeight = anthropometryFunctions.bodyWeight()/*
const bodyStature = anthropometryFunctions.stature()
const bodyMassIndex = anthropometryFunctions.bodyMassIndex(bodyWeight, bodyStature)
const bodyMassIndexClassification = anthropometryFunctions.bodyMassIndexClassification(bodyMassIndex)
const bodyPerimeter = anthropometryFunctions.bodyPerimetry()
const hipWaistRatio = anthropometryFunctions.hipWaistRatio(bodyPerimeter.Cintura, bodyPerimeter.Quadril)
const waistHipRatioClassification = anthropometryFunctions.waistHipRatioClassification(sexNumber, age, hipWaistRatio)
const waistCircumference = anthropometryFunctions.waistCircumferenceClassification(sexNumber, bodyPerimeter.Cintura)
const skinFolds = anthropometryFunctions.subcutaneousMeasures()
const fatPercentage = anthropometryFunctions.fatPercentage(age, sexNumber, skinFolds)
const fatPercentageClassification = anthropometryFunctions.fatPercentageClassification(sexNumber, fatPercentage)
const fatBodyMass = anthropometryFunctions.fatBodyMass(bodyWeight, fatPercentage)
const leanBodyMass = anthropometryFunctions.leanBodyMass(bodyWeight, fatBodyMass)
const expectedIdealBodyMass = anthropometryFunctions.expectedIdealBodyMass(sexNumber, leanBodyMass)

console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Neuromuscular")

// variables neuromuscularFunctions
const wellsBenchTest = neuromuscularFunctions.wellsBenchTest()
const flexibilityRating = neuromuscularFunctions.flexibilityClassification(sexNumber, age, wellsBenchTest)
const numberOfAbs = neuromuscularFunctions.abdominalTest()
const abdominalRating = neuromuscularFunctions.abdominalClassification(sexNumber, age, numberOfAbs)
const numberOfPushUps = neuromuscularFunctions.flexArmTest()
const flexArmRating = neuromuscularFunctions.flexArmClassification(sexNumber, age, numberOfPushUps)*/

console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Aeróbico")

// variables aerobicFunctions
user.voTwoMax = aerobicFunctions.voTwoMax(user)
user.voTwoMaxExpected = aerobicFunctions.vo2maxExpected(user)
user.voTwoMaxClassification = aerobicFunctions.vo2maxClassification(user)
user.objectTrainingSpeed = aerobicFunctions.trainingSpeed(user)
user.aerobicFunctionalDeficit = aerobicFunctions.aerobicFunctionalDeficit(user)

// show results personalData
/*console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")
console.log(`Nome: ${user.name}`)
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

// show results anthropometryFunctions
console.log(`===============================`) 
headerFunctions.subTitle("Antropometria")
console.log(`Peso Corporal: ${bodyWeight} kilos`)
console.log(`Estatura Corporal: ${bodyStature} metros`)
console.log(`Índice de Massa Corporal - IMC: ${bodyMassIndex}`)
console.log(`Classificação IMC: ${bodyMassIndexClassification}`)
anthropometryFunctions.showPerimeter(bodyPerimeter)
console.log(`Relação Cintura Quadril- RCQ: ${hipWaistRatio}`)
console.log(`Classificação RCQ: ${waistHipRatioClassification}`)
console.log(`Circunfência cintura - Classificação: ${waistCircumference}`)
anthropometryFunctions.showSubcutaneousFolds(skinFolds)
console.log(`Percentual de gordura: ${fatPercentage}%`)
console.log(`Classificação % Gordura: ${fatPercentageClassification}`)
console.log(`Massa Corporal Gorda: ${fatBodyMass} kilos`)
console.log(`Massa Corporal Magra: ${leanBodyMass} kilos`)
console.log(`Massa Corporal Ideal Prevista: ${expectedIdealBodyMass} kilos`)

// show results neuromuscularFunctions
console.log(`===============================`) 
headerFunctions.subTitle("Neuromuscular")
console.log(`Resultado teste Flexibilidade Banco de Wells: ${wellsBenchTest} cm`)
console.log(`Classificação Flexibilidade: ${flexibilityRating}`)
console.log(`Quantidade de flexões abdominais: ${numberOfAbs}`)
console.log(`Classificação Abdominais: ${abdominalRating}`)
console.log(`Quantidade de flexões de braço: ${numberOfPushUps}`)
console.log(`Classificação flexões de braço: ${flexArmRating}`)*/

console.clear() // temporary
headerFunctions.systemHeader() // temporary
headerFunctions.subTitle("Aeróbico") //temporary
// show results aerobicFunctions
// console.log(`===============================`) 
// headerFunctions.subTitle("Aeróbico")
console.log(`VO²máx (mL(kg.min): ${user.voTwoMax}`)
console.log(`VO²máx Previsto(mL(kg.min): ${user.voTwoMaxExpected}`)
console.log(`Classificação do VO²máx: ${user.voTwoMaxClassification}`)
headerFunctions.showArray(user.objectTrainingSpeed.titleTrainSpeed, user.objectTrainingSpeed.showTrainingSpeed)
console.log(`Déficit Funcional Aeróbio: ${user.aerobicFunctionalDeficit.toFixed(2)}`)

console.log(`===============================`) 
// headerFunctions.baseboard()
console.log(user)