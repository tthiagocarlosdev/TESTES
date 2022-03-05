/* Anamnesis Functions */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')


const anamnesisFunctions = {
      
  userName: function() {
    
    let NumberOrSymbol = true
    let name = ''
    
    while(NumberOrSymbol){

      name = input.question('Digite seu nome: ')
      NumberOrSymbol = validationFunctions.hasNumberOrSymbol(name)
      validationFunctions.incorrectValue(false, NumberOrSymbol, "Anamnese")

    }
    
    return name
  
  },

  // recebe a data como string e retorna a data no formato brasileiro criada pelo Objeto Date()
  dateInBrazilFormat: function(dateInString){

    //O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.
    let arrayNumber = dateInString.split('/')
    let day = Number(arrayNumber[0])
    let month = Number(arrayNumber[1])
    let year = Number(arrayNumber[2])

    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }
    
    let dateInBrazilianFormat = new Date(year, month-1, day)
    
    // O método toLocaleDateString() retorna uma string com a representação de parte da data baseando-se no idioma. Os novos argumentos locales e options deixam as aplicações especificarem o idioma cujas convenções de formatação devem ser usadas e permitem customizar o comportamento da função.
    return dateInBrazilianFormat.toLocaleDateString("pt-br", options)
    
  },

  // recebe uma data no formato brasleiro como string. Retorna a data no formato ISO
  dateInISOFormat: function(dateInString){
    
    //O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.
    let arrayNumber = dateInString.split('/')
    let day = Number(arrayNumber[0])
    let month = Number(arrayNumber[1])
    let year = Number(arrayNumber[2])

    return new Date(year, month-1, day)

  },

  dateOfBirth: function(){
    let dateInBrazilianFormat = ''
    let typedDate = ''
    const dateRegExp = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/
    let dateEqualExpressionRegex = false
    let dateValid = false
    let birthHighestCurrentDate = true
  
    do{
      typedDate = input.question('Digite sua data de nascimento (DD/MM/AAAA): ')
      
      dateEqualExpressionRegex = validationFunctions.dateAsRegexExpression(typedDate, dateRegExp)
      
      dateInBrazilianFormat = anamnesisFunctions.dateInBrazilFormat(typedDate)
  
      dateValid = validationFunctions.validDate(typedDate, dateInBrazilianFormat)
  
      let dateISO = anamnesisFunctions.dateInISOFormat(dateInBrazilianFormat)
      
      birthHighestCurrentDate = validationFunctions.dateOfBirthHighestCurrentDate(dateISO)

      validationFunctions.incorrectValue(!dateEqualExpressionRegex, !dateValid, "Anamnese")
      validationFunctions.incorrectValue(false, birthHighestCurrentDate, "Anamnese")
  
    }while(!dateEqualExpressionRegex || !dateValid || birthHighestCurrentDate)
    
    return dateInBrazilianFormat
    
  },

  // Recebe a data em formato ISO e retorna a idade em anos.
  age: function(birthDate) {

      let currentDay = new Date()
      let dateInMilliseconds = Math.abs(currentDay.getTime() - birthDate.getTime())
      let age = Math.floor(dateInMilliseconds / (1000 * 60 * 60 * 24 * 365))
      
      return age
    
  },

}

module.exports = {
  anamnesisFunctions
}