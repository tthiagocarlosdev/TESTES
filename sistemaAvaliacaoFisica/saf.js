const { headerFunctions } = require('./headerFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')

headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

// variables 
const name = anamnesisFunctions.userName()
const birthdayInBrazilianFormat = anamnesisFunctions.dateOfBirth()
const birthdayInISOFormat = anamnesisFunctions.dateInISOFormat(birthdayInBrazilianFormat)
const age = anamnesisFunctions.age(birthdayInISOFormat)
const sexNumber = anamnesisFunctions.sexNumber()
const sex = anamnesisFunctions.showSex(sexNumber)

// show results
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")
console.log(`Nome: ${name}`)
console.log(`Data de nascimento: ${birthdayInBrazilianFormat}`)
console.log(`Idade: ${age} anos!`)
console.log(`Sexo: ${sex}`)

console.log(`===============================`)
