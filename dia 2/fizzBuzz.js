const arg = process.argv[2]
const num = parseInt(arg)

if (isNaN(num)){
    console.error("Para iniciar programa, entra a retirar isNaN")
    process.exit(1)
}

const fizzBuzz = (num) =>{
    for(let i = 1; i <= 100; i++){
     if(i % 3 == 0 && i % 5 == 0){
      console.log(`${i} FizzBuzz`)
     } else if(i % 3 == 0){
      console.log(`${i} Fizz`)
     } else if(i % 5 == 0){
      console.log(`${i} Buzz`)
     } else {console.log(`${i}`)}
    }
}
fizzBuzz()

const variable_fizz = () => {
    for (i=1;i<=100;++i){
    if ((i%3==0?"fizz":"")&&(i%5==0?"Buzz":""))
    return i
}
}