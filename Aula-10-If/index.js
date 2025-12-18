//If = se a condição é verdadeira execute um código se não faça outra coisa.

let idade = 13;

/*if(idade >= 18){
    console.log("Você é velho o suficiente para acessar esse site. ")
}
else{
    console.log("Você não pode adentrar este site.")
}
*/
//Horas
let hora = 19;

if(hora < 12){
    console.log("Bom dia!")
}
else if(hora > 12 && hora < 18){
    console.log("Boa Tarde!")
}
else{
    console.log("Boa Noite!")
}

//exemplo com boolean- não há necessidade declarar a condição, apenas colocar a variável.
let isStudent = false;
if(isStudent){ //Resposta caso isStudent = false
    console.log("Você é um estudante.")
}
else{//Resposta caso isStudent = true
    console.log("Você não é um estudante.")
}