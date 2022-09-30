/* variable declaration */
const modal = document.querySelector('.modal-password')
const password = document.querySelector('#password')
const numberOfCharacters = document.querySelector('#number_of_characters')

let regexNumber = /\d/gi
let itsNumber = false

/* functions declaration */
//function close modal
function closeModal() {
  modal.classList.add('closeModal')
}

//function open modal
function openModal(){
  modal.classList.add('openModal')
  modal.classList.remove('closeModal')
}

/* function button copy */
function copyToClipboard(){
  navigator.clipboard.writeText(password.value).then(() => {
    alert(`Copied text: ${password.value}`)
  }) 
}

/* function regular expression */
function isRegularExpression(stringValue, regex){
  return regex.test(stringValue) ? true : false
}

function passwordGenerator(){
  console.log(numberOfCharacters.value)
  itsNumber = isRegularExpression(numberOfCharacters.value, regexNumber)
  console.log(itsNumber)

  if (!itsNumber) {
    alert('[ATENÇÃO!] Valor incorreto! Digite um número!')
  } else if (Number(numberOfCharacters.value) < 8 || Number(numberOfCharacters.value) > 40) {
    alert('[ATENÇÃO!] Valor incorreto! Digite um valor entre 8 e 40!')  
  } else if (itsNumber && Number(numberOfCharacters.value) >= 8 && Number(numberOfCharacters.value) <= 40) {
    password.innerHTML = numberOfCharacters.value
    openModal()
  }
  
}

   
   
  /* variables */
   
   
   

   /*validations */
  //  if(!itsNumber){
  //    alert()
  //  } else if (Number(numberOfCharacters) < 8 || Number(numberOfCharacters) > 40){
  
  //  } else {
  //    modal.classList.add('active')
  //    console.log(modal)
  //    console.log(numberOfCharacters)
  //  }