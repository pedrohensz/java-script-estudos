//constante = uma variável que não pode ser alterada
//Calculando a circunferência de um circulo baseado em um raio

// let pi = 3.14159;
// let raio;
// let circunferência;

// raio = window.prompt("Insira o raio de um círculo: ")
// raio = Number(raio);

// circunferência = 2 * pi * raio
// console.log(circunferência)

/* no caso acima, pi é um valor constante,
isso faz com que o valor do mesmo não possa ser alterado e para isso
declareamos o mesmo com "const" */

const PI = 3.14159; //Caso a constante seja um número o booleano o ideal é colocar as letras maiúsculo (convenção)
//let raio;
//let circunferência;

//raio = window.prompt("Insira o raio de um círculo: ")
// raio = Number(raio);

document.getElementById("meuEnviar").onclick = function(){
    raio = document.getElementById("meuTexto").value;
    raio = Number(raio)
    circunferência = 2 * PI * raio
    document.getElementById("meuH3") .textContent = `A sua circunferência é ${circunferência} cm`
}

