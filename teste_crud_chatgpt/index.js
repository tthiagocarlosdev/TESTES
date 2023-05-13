const { addUser } = require('./users');

const form = document.querySelector('#user-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  // adiciona o novo usuário ao objeto "data"
  addUser(name, email, password);
  
  // exibe uma mensagem de sucesso
  alert("Usuário cadastrado com sucesso!");
  
  // reseta o formulário
  form.reset();
});
