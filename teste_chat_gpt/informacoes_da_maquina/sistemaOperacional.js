const os = require('os');

// Obter o nome do computador
const nomeComputador = os.hostname();
console.log('Nome do Computador:', nomeComputador);

// Obter o endereço IP local
const interfacesRede = os.networkInterfaces();
let enderecoIPLocal;

for (const interface in interfacesRede) {
  const iface = interfacesRede[interface];
  for (let i = 0; i < iface.length; i++) {
    const { address, family, internal } = iface[i];
    if (family === 'IPv4' && !internal) {
      enderecoIPLocal = address;
      break;
    }
  }
}

console.log('Endereço IP Local:', enderecoIPLocal);
