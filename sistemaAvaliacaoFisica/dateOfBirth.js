var input = require('readline-sync')

// informa se a data passada pelo usuário está no formato regex
function dateAsRegexExpression(date, regex){
  let dateAsRegexExpression = regex.test(date)
  if(dateAsRegexExpression){
    return true
  } else {
    return false
  }
}


// recebe a data como string e uma regex, retorna a data no formato brasileiro
function dateInBrazilFormat(dateInString, regex){

  let stringData = String(regex.exec(dateInString))
  let day = stringData.substring(0,2)
  let month = stringData.substring(3,5)
  let year = stringData.substring(6, 10)

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }

  let dateInPattern = new Date(Number(year), Number(month-1), Number(day))
  
  return dateInPattern.toLocaleDateString("pt-br", options)
  
}

// recebe uma data com string e uma regex. Retorna no formato ISO
function dateInISOFormat(datePasse, regex){
  var stringData = String(regex.exec(datePasse))
  let day = stringData.substring(0,2)
  let month = stringData.substring(3,5)
  let year = stringData.substring(6, 10)

  return new Date(Number(year), Number(month-1), Number(day))
}

// recebe duas datas e verifica se são iguais
function validDate(informedDate, realDate){
  if(informedDate === realDate){
    return true
  } else {
    return false
  }
}

// recebe a data de nascimento em formato ISO e retorna se é maior do que a data atual
function dateOfBirthHighestCurrentDate(dateOfBirth){
  var currentDate = new Date()

  if(dateOfBirth.getTime() > currentDate.getTime()){
    return true
  } else {
    return false
  }
}

function age(birthDate) {

  let currentDay = new Date()
  let dateInMilliseconds = Math.abs(currentDay.getTime() - birthDate.getTime())
  let age = Math.floor(dateInMilliseconds / (1000 * 60 * 60 * 24 * 365))
  
  return age

}

function dateOfBirth(){
  let dateEqualExpressionRegex = false
  const dateRegExp = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/
  let typedDate = ''
  let dateInBrazilianFormat = ''
  let dateValid = false
  let BirthHighestCurrentDate = true

  do{
    typedDate = input.question('Digite sua data de nascimento (DD/MM/AAAA): ')
    
    dateEqualExpressionRegex = dateAsRegexExpression(typedDate, dateRegExp)
    
    dateInBrazilianFormat = dateInBrazilFormat(typedDate, dateRegExp)

    dateValid = validDate(typedDate, dateInBrazilianFormat)

    let dataISO = dateInISOFormat(dateInBrazilianFormat, dateRegExp)
    
    BirthHighestCurrentDate = dateOfBirthHighestCurrentDate(dataISO)

  }while(!dateEqualExpressionRegex || !dateValid || BirthHighestCurrentDate)

  
  return dateInBrazilianFormat
  
}

let dataNascimento = dateOfBirth()
console.log(`Data de nascimento: ${dataNascimento}`)
const dateRegExp = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/
let dataNascimentoISO = dateInISOFormat(dataNascimento, dateRegExp)
let idade = age(dataNascimentoISO)
console.log(`idade: ${idade} anos.`)


