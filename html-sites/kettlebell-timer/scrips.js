

const buttonRegistration = document.getElementById('button-registration')
const buttonStart = document.getElementById('button-start')

function changeButtons(){
  buttonRegistration.classList.add('buttonRegistrationOff')
  buttonStart.classList.add('buttonStartOn')
  console.log('change ok')
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  checkInputs()
})

function checkInputs(){

  const form = document.querySelector('form#form')
  const athleteName = document.querySelector('input#athleteName')
  const athleteTest = document.querySelector('select#athleteTest')
  const kettlebellWeight = document.querySelector('select#kettlebellWeight')
  const timeTest = document.querySelector('select#timeTest')

  const dataAthlete = {
    athleteName: athleteName.value,
    athleteTest: athleteTest.value,
    kettlebellWeight: kettlebellWeight.value,
    timeTest: timeTest.value,
  }
  console.log(dataAthlete)

  if (dataAthlete.athleteName === ''){
    setErrorFor(athleteName, 'O nome do atleta é obrigatório!')
  } else {
    setSuccessFor(athleteName)
  }

  if (dataAthlete.athleteTest === ''){
    setErrorFor(athleteTest, 'A prova é obrigatória!')
  } else {
    setSuccessFor(athleteTest)
  }

  if (dataAthlete.kettlebellWeight === ''){
    setErrorFor(kettlebellWeight, 'O peso do kettlebell é obrigatório!')
  } else {
    setSuccessFor(kettlebellWeight)
  }

  if (dataAthlete.timeTest === ''){
    setErrorFor(timeTest, 'O tempo da prova é obrigatório!')
  } else {
    setSuccessFor(timeTest)
  }

  const formControls = form.querySelectorAll('.form-control')

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success"
  })

  if(formIsValid){
    console.log('O fomulário está 100% válido!')
    var data_str = JSON.stringify(dataAthlete);
    window.location.href = "time-and-reps.html?dataAthlete=" + encodeURIComponent(data_str);
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

function setSuccessFor(input){
  const formControl = input.parentElement
  const small = formControl.querySelector('small')

  // Add message success
  small.innerText = ''

  // Add class success
  formControl.className = 'form-control success'
}



