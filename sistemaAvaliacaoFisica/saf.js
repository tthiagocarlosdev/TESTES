var input = require('readline-sync')

const { headerFunctions } = require('./headerFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')

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

/* variáveis */
headerFunctions.header()
/*
const nome = anamnesisFunctions.name()
const diaNascimento = Number(anamnesisFunctions.birthDay())
const mesNascimento = Number(anamnesisFunctions.birthMonth())
const anoNascimento = Number(anamnesisFunctions.birthYear())
const dataPassada = new Date(anoNascimento, mesNascimento, diaNascimento)
const dataNascimento = anamnesisFunctions.dateBrazilianFormat(dataPassada)
const idade = anamnesisFunctions.age(dataPassada)


console.clear()
headerFunctions.header()
console.log(`Nome: ${nome}`)
console.log(`Dia Nascimento: ${diaNascimento}`)
console.log(`Mês Nascimento: ${mesNascimento}`)
console.log(`Ano Nascimento: ${anoNascimento}`)
console.log(`Data Nascimento: ${dataNascimento}`)
console.log(`Idade: ${idade}`)

*/