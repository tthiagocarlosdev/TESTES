const form = document.querySelector('form#form');
const userName = document.querySelector('input#userName')
const email = document.querySelector('input#email')
const password = document.querySelector('input#password')
const passwordConfirmation = document.querySelector('input#passwordConfirmation')

form.addEventListener('submit', (event) => {
  event.preventDefault();

  checkInputs()
})

function checkInputs(){
  
  const userNameValue = userName.value
  const emailValue = email.value
  const passwordValue = password.value
  const passwordConfirmationValue = passwordConfirmation.value
  const minimumCharactersInPassword = 5


  if (userNameValue === ''){
    setErrorFor(userName, 'O nome do usuário é obrigatório!')
  } else {
    setSuccessFor(userName)
  }

  if(emailValue === ''){
    setErrorFor(email, 'O e-mail do usuário é obrigatório!')
  } else {
    setSuccessFor(email)
  }

  if(passwordValue === ''){
    setErrorFor(password, 'A senha do usuário é obrigatória!')
  } else if ( passwordValue.length <= minimumCharactersInPassword) {
    setErrorFor(password, 'A senha deve ter no mínimo 6 caracteres.')
  } else {
    setSuccessFor(password)
  }

  if(passwordConfirmationValue === ''){
    setErrorFor(passwordConfirmation, 'É obrigatório confirmar a senha!')
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, 'As senhas não conferem!')
  } else {
    setSuccessFor(passwordConfirmation)
  }

  const formControls = form.querySelectorAll('.form-control')

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success"
  })

  if(formIsValid){
    alert('O fomulário está 100% válido!')
  }
}

function setErrorFor(input, message){
  const formControl = input.parentElement
  const small = formControl.querySelector('small')

  // Add message error
  small.innerText = message

  // Add class error
  formControl.className = 'form-control error'
}

function setSuccessFor(input, message){
  const formControl = input.parentElement
  const small = formControl.querySelector('small')

  // Add message success
  small.innerText = ''

  // Add class success
  formControl.className = 'form-control success'
}
