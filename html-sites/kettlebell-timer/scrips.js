const form = document.querySelector('form#form')
const athleteName = document.querySelector('input#athleteName')
const athleteTest = document.querySelector('select#athleteTest')
const kettlebellWeight = document.querySelector('select#kettlebellWeight')
const timeTest = document.querySelector('select#timeTest')

form.addEventListener('submit', (event) => {
  event.preventDefault();

  checkInputs()
})

function checkInputs(){
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