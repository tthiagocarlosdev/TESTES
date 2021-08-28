var readlineSync = require('readline-sync')
console.log("=========================")
console.log("    CRIANÇA ESPERANÇA    ")
console.log("=========================")
console.log("Muito Obrigado por ajudar ")
console.log("[1] para doar R$10")
console.log("[2] para doar R$25")
console.log("[3] para doas R$50")
console.log("[4] para doar outros valores")
console.log("[5] para cancelar")
var opcao = Number(readlineSync.question("Escolha uma opção: "))
var doacao = 0
console.clear()
switch (opcao) {
    case 1:
        doacao = 10
        break;
    case 2:
        doacao = 25
        break;
    case 3:
        doacao = 50
        break;
    case 4:
        doacao = Number(readlineSync.question("Digite o valor da doação R$"))
        break;
    case 5:
        doacao = 0
        break;
    default:
        console.log("[ERRO] Opção errada!")
        break;
}
console.log("=========================")
console.log("    CRIANÇA ESPERANÇA    ")
console.log("=========================")
console.log("Obrigado por sua doação!")
console.log(`Sua doação foi ${doacao.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
console.log("=========================")