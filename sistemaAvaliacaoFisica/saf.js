/* physical assessment system */

const { headerFunctions } = require('./headerFunctions')
const { personalDataFunctions } = require('./personalDataFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')
const { anamnesisQuestions } = require('./anamnesisFunctions')
/*
const { cardiorespiratoryFunctions } = require('./cardiorespiratoryFunctions')
const { anthropometryFunctions } = require('./anthropometryFunctions')
const { neuromuscularFunctions } = require('./neuromuscularFunctions')
const { aerobicFunctions } = require('./aerobicFunctions')*/

const user = { }

/*
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables personalDataFunctions
user.name = personalDataFunctions.userName()

user.birthdayInBrazilianFormat =  personalDataFunctions.dateOfBirth()
user.birthdayInISOFormat = personalDataFunctions.dateInISOFormat(user.birthdayInBrazilianFormat)
user.age = personalDataFunctions.age(user)
user.sexNumber = personalDataFunctions.sexNumber()
user.sex = personalDataFunctions.showSex(user)
user.profession = personalDataFunctions.userProfession()
user.userEmail = personalDataFunctions.userEmail()
user.phoneNumber = personalDataFunctions.phoneNumber()
*/
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

// variables anamnesisFunctions
user.questionnairePARQ = anamnesisFunctions.questionnairePARQ()
user.currentPhysicalState = anamnesisFunctions.currentPhysicalState()
user.pastIllness = anamnesisFunctions.questions(anamnesisQuestions.pastIllness)
user.illnessesFamily = anamnesisFunctions.questions(anamnesisQuestions.illnessesInTheFamily)
user.surgeryPerformed = anamnesisFunctions.questions(anamnesisQuestions.surgeryPerformed)
user.useMedication = anamnesisFunctions.questions(anamnesisQuestions.useMedication)
user.sportsInjuries = anamnesisFunctions.questions(anamnesisQuestions.sportsInjuries)
/*
user.trainingObjective = anamnesisFunctions.trainingObjective()
user.daysAvailableForTraining = anamnesisFunctions.daysAvailableForTraining()
user.timeAvailablePerTraining = anamnesisFunctions.timeAvailablePerTraining()

console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Cardiorrespiratório")

// variables cardiorespiratory
user.restingHeartRate = cardiorespiratoryFunctions.restingHeartRate()
user.maximumHeartRate = cardiorespiratoryFunctions.maximumHeartRate(user.age)
user.restingBloodPressure = cardiorespiratoryFunctions.restingBloodPressure()
user.bloodPressureRating = cardiorespiratoryFunctions.classificationOfBloodPressure(user.restingBloodPressure)

console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Antropometria")

// variables anthropometryFunctions
user.bodyWeight = anthropometryFunctions.bodyWeight()
user.bodyStature = anthropometryFunctions.stature()
user.bodyMassIndex = anthropometryFunctions.bodyMassIndex(user.bodyWeight, user.bodyStature)
user.bodyMassIndexClassification = anthropometryFunctions.bodyMassIndexClassification(user.bodyMassIndex)
user.bodyPerimeter = anthropometryFunctions.bodyPerimetry()
user.hipWaistRatio = anthropometryFunctions.hipWaistRatio(user.bodyPerimeter.Cintura, user.bodyPerimeter.Quadril)
user.waistHipRatioClassification = anthropometryFunctions.waistHipRatioClassification(user.sexNumber, user.age, user.hipWaistRatio)
user.waistCircumference = anthropometryFunctions.waistCircumferenceClassification(user.sexNumber, user.bodyPerimeter.Cintura)
user.skinFolds = anthropometryFunctions.subcutaneousMeasures()
user.fatPercentage = anthropometryFunctions.fatPercentage(user.age, user.sexNumber, user.skinFolds)
user.fatPercentageClassification = anthropometryFunctions.fatPercentageClassification(user.sexNumber, user.fatPercentage)
user.fatBodyMass = anthropometryFunctions.fatBodyMass(user.bodyWeight, user.fatPercentage)
user.leanBodyMass = anthropometryFunctions.leanBodyMass(user.bodyWeight, user.fatBodyMass)
user.expectedIdealBodyMass = anthropometryFunctions.expectedIdealBodyMass(user.sexNumber, user.leanBodyMass)

console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Neuromuscular")

// variables neuromuscularFunctions
user.wellsBenchTest = neuromuscularFunctions.wellsBenchTest()
user.flexibilityRating = neuromuscularFunctions.flexibilityClassification(user.sexNumber, user.age, user.wellsBenchTest)
user.numberOfAbs = neuromuscularFunctions.abdominalTest()
user.abdominalRating = neuromuscularFunctions.abdominalClassification(user.sexNumber, user.age, user.numberOfAbs)
user.numberOfPushUps = neuromuscularFunctions.flexArmTest()
user.flexArmRating = neuromuscularFunctions.flexArmClassification(user.sexNumber, user.age, user.numberOfPushUps)

console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Aeróbico")

// variables aerobicFunctions
user.voTwoMax = aerobicFunctions.voTwoMax(user)
user.voTwoMaxExpected = aerobicFunctions.vo2maxExpected(user)
user.voTwoMaxClassification = aerobicFunctions.vo2maxClassification(user)
user.objectTrainingSpeed = aerobicFunctions.trainingSpeed(user)
user.aerobicFunctionalDeficit = aerobicFunctions.aerobicFunctionalDeficit(user)
user.aerobicFunctionalDeficitClassification = aerobicFunctions.aerobicFunctionalDeficitClassification(user)

// variables personalDataFunctions
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Observações")
user.comments = personalDataFunctions.comments()*/
/*
// show results personalDataFunctions
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")
console.log(`Nome: ${user.name}`)
console.log(`Data de nascimento: ${user.birthdayInBrazilianFormat}`)
console.log(`Idade: ${user.age} anos`)
console.log(`Sexo: ${user.sex}`)
console.log(`Profissão: ${user.profession}`)
console.log(`E-mail: ${user.userEmail}`)
console.log(`Celular: ${user.phoneNumber}`)*/

// show results anamnesisFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

console.log(`Questionário PAR-Q: ${user.questionnairePARQ}`)
console.log(`Estado físico: ${anamnesisFunctions.showPhysicalState(user)}`)
console.log(`Doença Pregressa: ${user.pastIllness}`)
console.log(`Doença Pregressa na Família: ${user.illnessesFamily}`)
console.log(`Cirurgia: ${user.surgeryPerformed}`)
console.log(`Uso de Medicamento: ${user.useMedication}`)
console.log(`Lesão Desportiva: ${user.sportsInjuries}`)
headerFunctions.baseboard()/*



console.log(`Objetivo do treino: ${user.trainingObjective}`)
console.log(`Dias disponíveis para treinar: ${user.daysAvailableForTraining} dias.`)
console.log(`Tempo disponível para treino: ${user.timeAvailablePerTraining} minutos.`)

// show results cardiorespiratoryFunctions
headerFunctions.baseboard()
headerFunctions.subTitle("Cardiorespiratório")

console.log(`Frequência Cardíaca de Repouso: ${user.restingHeartRate} bpm.`)
console.log(`Frequência Cardíaca Máxima: ${user.maximumHeartRate} bpm.`)
cardiorespiratoryFunctions.workingHeartRate(Number(user.restingHeartRate), Number(user.maximumHeartRate))
console.log(`Pressão Arterial de Repouso: ${user.restingBloodPressure.systolic}/${user.restingBloodPressure.diastolic} mmHg.`)
console.log(`Classificação da Pressão Arterial`)
console.log(`Sistólica: ${user.bloodPressureRating.systolicClassification}`)
console.log(`Diastólica: ${user.bloodPressureRating.diastolicClassification}`)

// show results anthropometryFunctions
headerFunctions.baseboard()
headerFunctions.subTitle("Antropometria")

console.log(`Peso Corporal: ${user.bodyWeight} kilos`)
console.log(`Estatura Corporal: ${user.bodyStature} metros`)
console.log(`Índice de Massa Corporal - IMC: ${user.bodyMassIndex}`)
console.log(`Classificação IMC: ${user.bodyMassIndexClassification}`)
anthropometryFunctions.showPerimeter(user.bodyPerimeter)
console.log(`Relação Cintura Quadril- RCQ: ${user.hipWaistRatio}`)
console.log(`Classificação RCQ: ${user.waistHipRatioClassification}`)
console.log(`Circunfência cintura - Classificação: ${user.waistCircumference}`)
anthropometryFunctions.showSubcutaneousFolds(user.skinFolds)
console.log(`Percentual de gordura: ${user.fatPercentage}%`)
console.log(`Classificação % Gordura: ${user.fatPercentageClassification}`)
console.log(`Massa Corporal Gorda: ${user.fatBodyMass} kilos`)
console.log(`Massa Corporal Magra: ${user.leanBodyMass} kilos`)
console.log(`Massa Corporal Ideal Prevista: ${user.expectedIdealBodyMass} kilos`)

// show results neuromuscularFunctions
headerFunctions.baseboard()
headerFunctions.subTitle("Neuromuscular")

console.log(`Resultado teste Flexibilidade Banco de Wells: ${user.wellsBenchTest} cm`)
console.log(`Classificação Flexibilidade: ${user.flexibilityRating}`)
console.log(`Quantidade de flexões abdominais: ${user.numberOfAbs}`)
console.log(`Classificação Abdominais: ${user.abdominalRating}`)
console.log(`Quantidade de flexões de braço: ${user.numberOfPushUps}`)
console.log(`Classificação flexões de braço: ${user.flexArmRating}`)

// show results aerobicFunctions
headerFunctions.baseboard()
headerFunctions.subTitle("Aeróbico")

console.log(`VO²máx (mL(kg.min): ${user.voTwoMax}`)
console.log(`VO²máx Previsto(mL(kg.min): ${user.voTwoMaxExpected}`)
console.log(`Classificação do VO²máx: ${user.voTwoMaxClassification}`)
headerFunctions.showArray(user.objectTrainingSpeed.titleTrainSpeed, user.objectTrainingSpeed.showTrainingSpeed)
console.log(`Déficit Funcional Aeróbio: ${user.aerobicFunctionalDeficit.toFixed(2)}`)
console.log(`Classificação do Déficit Funcional Aeróbio: ${user.aerobicFunctionalDeficitClassification}`)

headerFunctions.baseboard()
headerFunctions.subTitle("Observações")
console.log(user.comments)

headerFunctions.baseboard()*/
console.log(user)