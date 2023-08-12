const fs = require('fs')

const showList = fs.readFileSync('Lista de koders.txt, utf-8')

console.log("Lista de koders: ", showList)
