function parImpar(valor) {
    if(valor % 2 == 0){
        return `Par`
    } else {
        return `Impar`
    }
}
var valor = 16
console.log(`O valor ${valor} é ${parImpar(valor)}!`)