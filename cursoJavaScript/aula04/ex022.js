function soma(valor1, valor2){
    return valor1 + valor2
}
console.log(soma(4, 6))
console.log('Caso apenas um parâmetro seja enviado:')
function somA(numeroA = 0, numeroB = 0){
    return numeroA + numeroB
}
console.log(somA(8))