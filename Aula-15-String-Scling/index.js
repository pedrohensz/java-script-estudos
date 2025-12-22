//string slicing
let nome = "Pedro Barbosa"


//let primeiroNome = nome.substring(0,5)
//console.log(primeiroNome)
//let ultimoNome = nome.substring(6) //Se você vai pegar a string até o fim, você não precisa colocar o index da última letra. 
//console.log(ultimoNome)

//Fatiando com split
let primeiroNome = nome.split(" ")[0]
console.log(primeiroNome)
let ultimoNome = nome.split(" ")[1]
console.log(ultimoNome)

const email = "pedro@gmail.com"

//index of retorna a posição em que o caracter se encontra, útil para combinar com outros méotodos como o slice
let usuario = email.slice(0, email.indexOf("@"))
let extensão = email.slice(email.indexOf("@"))
console.log(usuario)
console.log(extensão)