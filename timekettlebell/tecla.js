var input = require('readline-sync')
let rep = 0
for ( let i = 0; i < 3; i++ ) {
  let digito = input.question(`Digite uma tecla: `)
  console.log(String.fromCharCode( digito ))
  console.log(digito.charCodeAt(0))
  if(digito.charCodeAt(0) == 49){
    rep += 1
  }
}
console.log(rep)