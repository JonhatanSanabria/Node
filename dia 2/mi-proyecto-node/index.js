const prompt = require("prompt-sync")()

let names = []
let shortName = ""
let largeName = ""

function getNames () {
    while (true) {
        var name = prompt("Agrega nombres: ")

        if (names.includes(name)) {
            names.push(name)
        }

        if (name.length > largeName.length) {
            largeName = name
        }

        if (shortName.length === 0 || name.length < shortName.length) {
            shortName = name
        } 

        const option = prompt("Quieres continuar? (s/n): ")
        if (option !== "s") {
            break
        }
    }
}

const namesList = getNames()
console.log("Nombre mas largo", largeName)
console.log("Nombre mas corto", shortName)







switch (koders) {
    case "ls":
        fs.readdirSync('package.json')
      break;
    case "add":
        fs.appendFileSync('Lista de koders.txt', `${koder['']}`, 'utf-8')
      break;
    case "rm":
        fs.unlinkSync(`${koder['']}`)
      break;
    case "reset":
        fs.writeFileSync(dataBase, '[]', 'utf-8')
      break;
    default:
      console.log('Comando invalido. Intenta con: "ls", "add", "rm", "reset"');
  }
  
  console.log("¿Hay mas koders que quieras agregar?");