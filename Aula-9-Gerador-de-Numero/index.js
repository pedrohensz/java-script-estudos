//Gerador de número aletorios

//Criar um número aleatório entre 0 e 1 
// let randomNum = Math.random();

//Criar um número aleatório entre 0 e 6 
//Quando múltiplicamos o math.random() por 6 temos um "máximo" estabelecido
//let randomNum = Math.floor(Math.random() * 6) + 1;
//console.log(randomNum)

//estabelecendo constantes
const min = 1;
const max = 6;
const gerarBtn = document.getElementById("gerarBtn");
const numero = document.getElementById("numero")
let randomNum

gerarBtn.onclick = function(){
    randomNum = Math.floor(Math.random() * max-min ) + min;
    numero.textContent=randomNum

}
console.log(randomNum)
