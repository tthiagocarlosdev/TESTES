var agora = new Date()
var hora = agora.getHours()
var bomDia = hora < 12
var boaTarde = hora < 18
console.log(`Agora são exatamente ${hora} horas.`)
if (bomDia){
    console.log('Bom Dia!')
} else if (boaTarde){
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}