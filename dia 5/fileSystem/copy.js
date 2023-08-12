const fs = require('fs')

//fs.copyFileSync('hola.txt', 'destino.txt')

//console.log("Texto copiado!")

const readFile = fs.readFileSync('destino.txt', 'utf-8')

console.log(readFile)