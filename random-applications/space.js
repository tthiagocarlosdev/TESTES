var input = require('readline-sync');

let text, size, espaco

text = input.question("Enter the text: ")

size = text.length
space = (30 - size) / 2

console.log(`Size: ${size}`)
console.log(`Space: ${space}`)