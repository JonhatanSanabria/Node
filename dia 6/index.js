const prompt = require('prompt-sync')()
const dataBase = 'package.json'
const fs = require('fs')


function saveKoders(koders) {
    fs.writeFileSync(dataBase, JSON.stringify(koders, null, 2), 'utf8')
}

function addKoder(koders) {
    const koder = prompt('Ingresa el nombre del koder: ')
    koders.push(koder)
    saveKoders(koders)
    console.log(`Se agrego "${koder}" a la Lista de koders.`)
}

function listKoders() {
  const readFile = fs.readFileSync(dataBase, 'utf-8')
  console.log('Lista de koders: ', readFile)
}

function removeKoder () {
  while (true) {
      let koder = prompt("Ingresa el nombre del koder: ")

      if (`${[dataBase]}`.includes(koder)) {
          `${[dataBase]}`.filter((koder) => koder != `${[dataBase]}`.length)
          console.log('El koder no se encuentra en la lista')
          break
      }
  }
}

function resetKoders() {
    fs.writeFileSync(dataBase, '[]', 'utf8')
    console.log('Se ha borrado la lista')
}

function loadKoders() {
    const data = fs.readFileSync(dataBase, 'utf8')
    return JSON.parse(data)
}

function main() {
    const koders = loadKoders()
  
    while (true) {
      const response = prompt('Que quieres hacer? Añadir Koder: "add", Mostrar Lista de koders: "ls", Borrar a un koder: "rm", Borrar Lista de koders: "reset", Salir: "exit": ')

      if (response === 'add') {
        addKoder(koders)
      } else if (response === 'ls') {
        listKoders(koders)
      } else if (response === 'rm') {
        removeKoder(koders)
      } else if (response === 'reset') {
        resetKoders()
      } else if (response === 'exit') {
        break
      } else {
        console.log('Intenta con uno de los comandos: "add", "ls", "rm", "reset", "exit"')
      }
    }
  }
  main()

