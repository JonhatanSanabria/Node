const fs = require('fs')

fs.appendFileSync('hola.txt', ' hola desde append', 'utf-8')

fs.appendFileSync('destino.txt', ' y adios desde append', 'utf-8')

console.log("Agregando archivos!")
