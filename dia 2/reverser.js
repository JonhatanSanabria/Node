const palabra = process.argv[2];

const volteada = palabra.split("").reverse().join("");

console.log(volteada);

process.exit(0);