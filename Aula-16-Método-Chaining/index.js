//Method Chainig = Chamar um método após o outro em uma linha de código
//--------- Sem Method Chaining ----------
let usuario = window.prompt("Insira seu nome de usuário")
/* usuario = usuario.trim();
let letter = usuario.charAt(0);
letter = letter.toUpperCase();
let extraChars = usuario.slice(1);
extraChars = extraChars.toLowerCase();
usuario = letter + extraChars
console.log(usuario)*/

//----------Com method chaining----------
usuario = usuario.trim().charAt(0).toUpperCase() + usuario.trim().slice(1).toLowerCase()
console.log(usuario)