const modal = document.querySelector('.modal-password')
const password = document.querySelector('#password')

password.value = `SENHA GERADA`

function closeModal() {
  modal.classList.add('closeModal')
  password.innerHTML = password.value
}

/* function button copy */
function copyToClipboard(){
  navigator.clipboard.writeText(password.value).then(() => {
    alert(`Copied text: ${password.value}`)
  }) 
}