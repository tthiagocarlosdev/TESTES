var input = require('readline-sync')

const { headerFunctions } = require('./headerFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')

headerFunctions.header()

/* variáveis */
const name = anamnesisFunctions.name()
const birthDay = Number(anamnesisFunctions.birthDay())
const birthMonth = Number(anamnesisFunctions.birthMonth())
const birthYear = Number(anamnesisFunctions.birthYear())
const informedDateOfBirth = new Date(birthYear, birthMonth, birthDay)
const birthDate = anamnesisFunctions.dateBrazilianFormat(informedDateOfBirth)

console.clear()
headerFunctions.header()
console.log(`Nome: ${name}`)
console.log(`Data de nascimento: ${birthDate}`)




/*
const dataPassada = new Date(anoNascimento, mesNascimento, diaNascimento)
const dataNascimento = anamnesisFunctions.dateBrazilianFormat(dataPassada)
const idade = anamnesisFunctions.age(dataPassada)



console.log(`Data Nascimento: ${dataNascimento}`)
console.log(`Idade: ${idade}`)

*/

/*
 - validação datas 'máximo'
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