var input = require('readline-sync')

const { headerFunctions } = require('./headerFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')

headerFunctions.header()

/* variáveis */
const name = anamnesisFunctions.name()
const birthDay = Number(anamnesisFunctions.birthDay())
const birthMonth = Number(anamnesisFunctions.birthMonth())
const birthYear = Number(anamnesisFunctions.birthYear())
const informedDateOfBirth = new Date(birthYear, birthMonth - 1, birthDay)
const birthDate = anamnesisFunctions.dateBrazilianFormat(informedDateOfBirth)
const age = anamnesisFunctions.age(informedDateOfBirth)
// const gender = anamnesisFunctions.gender()

console.clear()
headerFunctions.header()
console.log(`Nome: ${name}.`)
console.log(`Data de nascimento: ${birthDate}`)
console.log(`Idade: ${age} anos!`)

console.log(`===============================`)






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