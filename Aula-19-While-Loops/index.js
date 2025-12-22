//Repetir um código enquanto uma condição é verdadeira
let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt("Insira seu nome de usuário.")
    password = window.prompt("Insira sua senha.")

    if (username === "pedro" && password == 1234){
        loggedIn = true;
        console.log("Você está logado");
    }
    else{
        console.log("Credenciais inválidas.")
        }
 }