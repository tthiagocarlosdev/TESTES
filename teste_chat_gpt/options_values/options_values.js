const fs = require('fs');

const inputString = `
<tr>
    <td align="left" valign="middle" height="17">GABPCPE - GABINETE DO CHEFE DE POLÍCIA</td>
    <td align="left" valign="middle">Endereço: Rua da Aurora, 405 - Boa Vista – Recife/PE - CEP: 50.050-000</td>
    <td align="left" valign="bottom">(81) 3184-3802 / (81) 3184-3803 / (81) 3184-3800 / (81) 3184-3805</td>
</tr>
<tr>
    <td align="left" valign="middle" height="17">SUBCP/GABPCPE - SUBCHEFIA DE POLÍCIA</td>
    <td align="left" valign="middle">Endereço: Rua da Aurora, 405 - Boa Vista – Recife/PE - CEP: 50.050-000</td>
    <td align="left" valign="bottom">(81) 3184-3814 / (81) 3184-3811</td>
</tr>
<tr>
    <td align="left" valign="middle" height="17">SEGAB/GABPCPE - SECRETARIA DO GABINETE</td>
    <td align="left" valign="middle">Endereço: Rua da Aurora, 405 - Boa Vista – Recife/PE - CEP: 50.050-000</td>
    <td align="left" valign="bottom">(81) 3184-3813 / (81) 3184-3809</td>
</tr>
`;

const regex = /<tr>.*?<td[^>]*>(.*?)<\/td>/gs;
const matches = inputString.matchAll(regex);

const unitNames = [];

for (const match of matches) {
    const tdContent = match[1];
    unitNames.push(`"${tdContent.trim()}"`);
}

// Agora, escreva o array em um arquivo
fs.writeFileSync('unitNames.txt', unitNames.join(',\n'), 'utf-8');
