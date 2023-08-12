const fs = require('fs')

const exists = fs.existsSync('hola.txt')

console.log(`El archivo existe?`, exists)

