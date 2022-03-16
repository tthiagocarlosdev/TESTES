const { headerFunctions } = require('./headerFunctions')
const { personalData } = require('./personalData')
const { anamnesisFunctions } = require('./anamnesisFunctions')

headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables personalData
const name = personalData.userName()
const birthdayInBrazilianFormat = personalData.dateOfBirth()
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

console.log(`===============================`)
