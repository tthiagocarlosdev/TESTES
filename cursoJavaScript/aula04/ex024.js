function fatorial(valor){
    let fatorial = 1
    for(let contador = valor; contador > 1; contador--){
        fatorial *= contador
    }
    return fatorial
}
console.log(fatorial(5))