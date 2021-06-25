var nome = []
nome[0] = 'Thiago'
nome[1] = 'Carlos'
nome[2] = 'Limeira'
nome[3] = 'da'
nome[4] = 'Silva'
for(let contador = 0; contador <= 4; contador++){
    console.log(nome)
}
console.log(`Meu array tem o tamanho ${nome.length}`)
nome.push('moreno')
for(let contador = 0; contador <= 4; contador++){
    console.log(nome)
}
console.log(`Meu array tem o tamanho ${nome.length}`)
var tamanho = nome.length
for(let contador = 0; contador < tamanho; contador++){
    console.log(`Posição ${contador}: ${nome[contador]}`)
}
console.log(`--------------------`)
nome.sort()
for (let contador in nome){
    console.log(nome[contador])
}
let posicao = nome.indexOf('Carlos')
if(posicao == -1){
    console.log(`Valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição: ${posicao}`)    
}
