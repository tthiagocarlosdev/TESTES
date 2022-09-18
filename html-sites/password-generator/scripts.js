const modal = document.querySelector('.modal-password')

function openModal() {
  modal.classList.add('active')
  console.log('click')
}

function closeModal() {
  modal.classList.remove('active')
}