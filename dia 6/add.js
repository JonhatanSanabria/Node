const fs = require('fs')

const dataBase = fs.readFileSync('package.json', 'utf-8')

fs.appendFileSync('Lista de koders', `${koder}`, 'utf-8')

console.log(dataBase)
