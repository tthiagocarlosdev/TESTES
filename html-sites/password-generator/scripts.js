/* variable declaration */
const modal = document.querySelector('.modal-password')
const password = document.querySelector('#password')
const numberOfCharacters = document.querySelector('#number_of_characters')


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



/* function regular expression */
function isRegularExpression(stringValue, regex){
  return regex.test(stringValue) ? true : false
}

// // function generating a random integer between two values, inclusive
function getRandomIntInclusive(min, max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function passwordGenerator(){
  let regexNumber = /\d/gi
  let itsNumber = isRegularExpression(String(numberOfCharacters.value), regexNumber)

  if (!itsNumber) {
    alert('[ATENÇÃO!] Valor incorreto! Digite um número!')
  } else if (Number(numberOfCharacters.value) < 8 || Number(numberOfCharacters.value) > 40) {
    alert('[ATENÇÃO!] Valor incorreto! Digite um valor entre 8 e 40!')  
  } else if (itsNumber && Number(numberOfCharacters.value) >= 8 && Number(numberOfCharacters.value) <= 40) {

    // definição da resposta e variáveis
    let quantidadeCaracteres = Math.floor(numberOfCharacters.value)
    console.log(`Quantidade caracteres: ${quantidadeCaracteres}`)
    let mininoTipoCaractere = Number.parseInt(quantidadeCaracteres / 4) // Cada tipo caractere terá que apresentar uma quantidade mínima na senha.
    console.log(`Minimo caracteres: ${mininoTipoCaractere}`)
    let senhaEmNumero = []
    let senhaEmCaractere = ''
    let mininoCaracteres = false
    let simbolo = 0
    let numeros = 0
    let letraMinusculas = 0
    let letraMaiusculas = 0

    //sorteio do valores da escala ascii
    while(mininoCaracteres == false){
      //sorteio do valores da escala ascii
      for(let contador = 0; contador < quantidadeCaracteres; contador++) {
        senhaEmNumero[contador] = getRandomIntInclusive(33, 126)
      }

      //validação para não repetir caracteres na senha
      for (let a = 0; a < quantidadeCaracteres - 1; a++){
        for (let b = a+1; b < quantidadeCaracteres; b++){
          while (senhaEmNumero[a] == senhaEmNumero[b]){
            senhaEmNumero[b] = getRandomIntInclusive(33, 126)
            a = 0
            b = 1
          }
        }
      }


      //validação quantidade dos tipos de caracteres
      for (let contador = 0; contador < quantidadeCaracteres; contador++){
        if (senhaEmNumero[contador] >= 33 && senhaEmNumero[contador] <= 47 || senhaEmNumero[contador] >= 58 && senhaEmNumero[contador] <= 64 || senhaEmNumero[contador] >= 91 && senhaEmNumero[contador] <= 96 || senhaEmNumero[contador] >= 122 && senhaEmNumero[contador] <= 126){
          simbolo++
        } else if (senhaEmNumero[contador] >= 48 && senhaEmNumero[contador] <=57){
          numeros++
        } else if (senhaEmNumero[contador] >= 97 && senhaEmNumero[contador] <=122){
          letraMinusculas++
        } else if (senhaEmNumero[contador] >= 65 && senhaEmNumero[contador] <=90){
          letraMaiusculas++
        }
      }

      if (simbolo < mininoTipoCaractere || numeros < mininoTipoCaractere || letraMinusculas < mininoTipoCaractere || letraMaiusculas < mininoTipoCaractere){
        mininoCaracteres = false
        simbolo = 0
        numeros = 0
        letraMinusculas = 0
        letraMaiusculas = 0
      } else {
        mininoCaracteres = true
      }
    }

    //confecção de senha a partir da tabela ascii em caracteres
		for (let contador = 0; contador < quantidadeCaracteres; contador++){
			senhaEmCaractere += String.fromCharCode(senhaEmNumero[contador])
		}

    password.innerHTML = senhaEmCaractere
    console.log(password.innerHTML)
    console.log(senhaEmCaractere)
    console.log(senhaEmCaractere.length)
    openModal()
  }
  
}

   /* function button copy */
  function copyToClipboard(){
    navigator.clipboard.writeText(password.innerHTML).then(() => {
      alert(`Copied text: ${password.innerHTML}`)
    }) 
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