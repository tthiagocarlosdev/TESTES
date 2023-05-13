const data = require('./data');

function addUser(name, email, password) {
  const newUser = {
    id: data.users.length + 1,
    name: name,
    email: email,
    password: password,
  };

  data.users.push(newUser);
}

module.exports = { addUser };
