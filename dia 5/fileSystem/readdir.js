const fs = require('fs')

const readDir = fs.readdirSync('Carpeta de prueba')

console.log("Lista de contenido!", readDir)