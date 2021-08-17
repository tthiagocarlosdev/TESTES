function header(){
    console.log('===================')
    console.log('     FIBONACCI     ')
    console.log('===================')
}
var numberA = 0
var numberB = 1
var numberC = 0
var string = ""
header()
string += numberA + " " + numberB
//console.log(`${numberA}, ${numberB}`)
for(contador = 1; contador <= 8; contador++){
    numberC = numberA + numberB
    string += " " + numberC
    numberA = numberB
    numberB = numberC
}
console.log(string)