function header(){
    console.log('=====================')
    console.log('     COMBINAÇÕES     ')
    console.log('=====================')
}
header()
for(let numberA = 1; numberA <= 3; numberA++){
    for(let numberB = 1; numberB <= 3; numberB++){
        console.log(`${numberA} - ${numberB}`)
    }
    console.log("")
}
console.log('=====================')