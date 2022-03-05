var input = require('readline-sync')

const { headerFunctions } = require('./headerFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')

headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

// variáveis 
const name = anamnesisFunctions.userName()
const birthdayInBrazilianFormat = anamnesisFunctions.dateOfBirth()
const birthdayInISOFormat = anamnesisFunctions.dateInISOFormat(birthdayInBrazilianFormat)
const age = anamnesisFunctions.age(birthdayInISOFormat)

console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")
console.log(`Nome: ${name}`)
console.log(`Data de nascimento: ${birthdayInBrazilianFormat}`)
console.log(`Idade: ${age} anos!`)

console.log(`===============================`)



// const gender = anamnesisFunctions.gender()

/*
 - função gênero 
*/

function sex () {
  console.log('Escolha:')
  console.log('[1] Masculino')
  console.log('[2] Feminino')
  let sex = input.question('')
  return sex
}

function showGenre(genre){
  if(genre == 1){
    console.log('Masculino')
  } else {
    console.log('Feminino')
  }
}