//Variaveis = Um espaço que armazena um valor

// 1 - Declaração let x;
// 2- Atribuição  x = 100;
//Cada variável deve ter o nome único.
let x;
x = 100;

console.log(x);

// let idade = 25;
//console.log(idade);
let nome = "Pedro";
let online = true;
//Utilizando uma variável no meio de uma string
//Deve ser utilizado crases ao invés de aspas simples
//console.log(`Você tem ${idade} anos de idade`);

//Exibindo o tipo da variável
//console.log(typeof idade)
console.log(typeof nome)
console.log(`Seu nome é ${nome}`)
console.log(typeof online)
console.log(`Pedro está online: ${online}`)

//exibindo variáveis na página principal
let nomeCompleto = "Pedro Henrique De Oliveira";
let idade = 25;
let estaEstudando = true;

document.getElementById('p1').textContent = `Seu nome é: ${nomeCompleto}`;
document.getElementById('p2').textContent = `Sua idade é: ${idade}`;
document.getElementById('p3').textContent = `Estudando: ${estaEstudando}`;
