/* Personal Data Functions */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')


const personalData = {
      
  userName: function() {
    
    let itsNumber = true
    let itsLetters = false
    let name = ''
    
    while(itsNumber || !itsLetters){

      name = input.question('Digite seu nome: ')
      itsNumber = validationFunctions.itsNumber(name)
      itsLetters = validationFunctions.itsLetters(name)
    
      validationFunctions.incorrectValue(!itsLetters, itsNumber, "Dados Pessoais")

    }
    
    return name
  
  },

  // cria a data de nascimento do usuário
  dateOfBirth: function(){
    let dateInBrazilianFormat = ''
    let typedDate = ''
    const dateRegExp = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/
    let dateEqualExpressionRegex = false
    let dateValid = false
    let birthHighestCurrentDate = true
  
    do{
      typedDate = input.question('Digite sua data de nascimento (DD/MM/AAAA): ')
      
      dateEqualExpressionRegex = validationFunctions.isRegularExpression(typedDate, dateRegExp)
      
      dateInBrazilianFormat = personalData.dateInBrazilFormat(typedDate)
  
      dateValid = validationFunctions.validDate(typedDate, dateInBrazilianFormat)
  
      let dateISO = personalData.dateInISOFormat(dateInBrazilianFormat)
      
      birthHighestCurrentDate = validationFunctions.dateOfBirthHighestCurrentDate(dateISO)

      validationFunctions.incorrectValue(!dateEqualExpressionRegex, !dateValid, "Dados Pessoais")
      validationFunctions.incorrectValue(false, birthHighestCurrentDate, "Dados Pessoais")
  
    }while(!dateEqualExpressionRegex || !dateValid || birthHighestCurrentDate)
    
    return dateInBrazilianFormat
    
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
  
  // Recebe a data em formato ISO e retorna a idade em anos.
  age: function(birthDate) {

      let currentDay = new Date()
      let dateInMilliseconds = Math.abs(currentDay.getTime() - birthDate.getTime())
      let age = Math.floor(dateInMilliseconds / (1000 * 60 * 60 * 24 * 365))
      
      return age
    
  },

  sexNumber: function(){
    
    let istNumber = false
    let isLessThanMinimumOrGreaterThanMaximum = true
    let sexNumber = 0
  
    do{
      console.log('Escolha Sexo:')
      console.log('[1] Masculino')
      console.log('[2] Feminino')
      sexNumber = input.question('')
  
      istNumber = validationFunctions.itsNumber(sexNumber)
  
      isLessThanMinimumOrGreaterThanMaximum = validationFunctions.isLessThanMinimumOrGreaterThanMaximum(1, 2, Number(sexNumber))
      
      validationFunctions.incorrectValue(!istNumber, isLessThanMinimumOrGreaterThanMaximum, "Dados pessoais")
  
    }while(!istNumber || isLessThanMinimumOrGreaterThanMaximum)
    
    return Number(sexNumber)
  },

  showSex: function(numberSex){

    return numberSex == 1 ? 'Masculino': 'Feminino'
    
  },

  userProfession: function() {
    
    let itsNumber = true
    let itsLetters = false
    let profession = ''
    
    while(itsNumber || !itsLetters){

      profession = input.question('Digite sua profissão: ')
      itsNumber = validationFunctions.itsNumber(profession)
      itsLetters = validationFunctions.itsLetters(profession)
    
      validationFunctions.incorrectValue(!itsLetters, itsNumber, "Dados Pessoais")

    }
    
    return profession
  
  },

  userEmail: function() {
    
    let email = ''
    let itsEmail = false

    do{
      
      email = input.question('Digite seu email: ')

      itsEmail = validationFunctions.validEmail(email)
      
      validationFunctions.incorrectValue(!itsEmail, false, "Dados Pessoais")

    }while(!itsEmail)
    
    return email

  },

  phoneNumber: function(){
  
    let phoneNumber = 0
    let regexPhone = /^([0-9]{2})[0-9]{9}$/
    let istPhoneNumber = true
  
    do{
      
      phoneNumber = input.question('Digite seu número de celular com DDD: ')
      istPhoneNumber = validationFunctions.isRegularExpression(phoneNumber, regexPhone)
      validationFunctions.incorrectValue(false, !istPhoneNumber, "Dados Pessoais")
  
    }while(!istPhoneNumber)
    
    return phoneNumber
  },

}

module.exports = {
  personalData
}