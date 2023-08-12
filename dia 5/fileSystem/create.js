const fs = require('fs')

const os = require("os")

fs.mkdirSync('Carpeta de prueba')

fs.mkdirSync(os.homedir + '/Carpeta de prueba')

console.log("Carpeta creada!")