const { headerFunctions } = require('./headerFunctions')
const { personalData } = require('./personalData')

headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables 
const name = personalData.userName()
const birthdayInBrazilianFormat = personalData.dateOfBirth()
const birthdayInISOFormat = personalData.dateInISOFormat(birthdayInBrazilianFormat)
const age = personalData.age(birthdayInISOFormat)
const sexNumber = personalData.sexNumber()
const sex = personalData.showSex(sexNumber)
const profession = personalData.userProfession()

// show results
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")
console.log(`Nome: ${name}`)
console.log(`Data de nascimento: ${birthdayInBrazilianFormat}`)
console.log(`Idade: ${age} anos!`)
console.log(`Sexo: ${sex}`)
console.log(`Profissão: ${profession}`)

console.log(`===============================`)
