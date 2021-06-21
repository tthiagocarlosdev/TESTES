var idade = 67
var naoVota = idade < 16
var votoOpcional = idade < 18 || idade > 65
console.log(`Você tem ${idade} anos.`)
if (naoVota){
    console.log('Não vota!')
} else if (votoOpcional){
    console.log('Voto Opcional!')
} else {
    console.log('Voto Obrigatório!')
}