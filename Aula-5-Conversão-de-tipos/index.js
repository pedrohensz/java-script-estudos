//conversão de tipo = Mudar o tipo dos dados (strings, números, booleans)

/*O problema abaixo indica que quando recebemos valores do 
usuário via window prompt, eles vem como string, 
caso você queria o manipular como um número deverá
converte-lo
*/
// let idade = window.prompt("Qual a sua idade? ")

// idade+=1;

// console.log(idade)

//Resolução
let idade = window.prompt("Qual a sua idade? ")
idade = Number(idade)
idade+=1;

console.log(idade, typeof idade);

// Outro exemplo
let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y)
z = Boolean(z)

console.log(x, typeof x)
console.log(y, typeof y)
console.log(z, typeof z)
