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

  if (userNameValue === ''){
    setErrorFor(userName, 'O nome de usuário é obrigatório!')
  } else {
    setSuccessFor(userName)
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

  // Add class success
  formControl.className = 'form-control success'
}