//Como aceitar inputs do usuário

//1 = Caminho fácil = Janela de prompt
//2 = Caminho profissional = HTML textbox

//1 = Caminho fácil
//let usuario;

//usuario = window.prompt("Qual seu usuário");

//console.log(usuario)

//2 = Caminho profissional
let usuario
document.getElementById("meuEnviar").onclick = function(){
    usuario = document.getElementById("meuTexto").value;
    document.getElementById("meuH1") .textContent = `Bem vindo ${usuario}!`
    console.log(usuario);
}
