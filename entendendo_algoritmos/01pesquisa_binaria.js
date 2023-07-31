function pesquisa_binaria(lista, item){
    let baixo = 0;
    let alto = lista.length - 1;

    while(baixo <= alto){
        let meio = Math.floor((baixo + alto) / 2);
        let chute = lista[meio];

        if (chute === item) {
            return meio;
        } else if (chute > item) {
            alto = meio - 1;
        } else {
            baixo  = meio + 1;
        }
    }
    return null
}

const minha_lista = [1, 3, 5, 7, 9];
console.log(pesquisa_binaria(minha_lista, 3));
console.log(pesquisa_binaria(minha_lista, -1));