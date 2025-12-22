//Operadores logico = usados para combinar o manipular operadores booleanos
/* AND = &&
   OR = ||
   NOT = !
*/

const temp = 15;
if (temp > 0 && temp <= 30){
    console.log("A temperatura está Boa")
}
else {
    console.log("A temperatura está Ruim")
}

// Operador OU
if (temp < 0 || temp > 30){
    console.log("A temperatura está Ruim")
}
else {
    console.log("A temperatura está Boa")
}

//Operador NOT
const estaEnsolarado = true;
if (!estaEnsolarado){
    console.log("Não está ensolarado");
}
else {
    console.log("Está ensolarado.")
}

