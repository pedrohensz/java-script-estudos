//operadores aritiméticos = operandos(valores, variáveis,etc.)
//operadores (+ = * /)
//ex 11 = x + 5

let estudantes = 30;
//estudantes = estudantes + 1; Adição
//estudantes = estudantes - 1; Subtração
//estudantes = estudantes * 2; Multiplicação
//estudantes = estudantes / 2; Divisão
//estudantes = estudantes ** 2; Potenciação
//let estudantesRestantes =  estudantes % 2; Resto (Divisão)

// Operadores de atribuição compostos
/* Uma maneira mais fácil de realizar uma operação
*/
estudantes += 1 

//Operadore de incrementação
//Como aumentar a variável em 1 unidade
estudantes++;

//Operadore de decrementação
//Como aumentar a variável em 1 unidade
estudantes--;
console.log(estudantes)

/*
precedência de operador (ORDEM QUEM UMA OPERAÇÃO É REALIZADA)7
1- Parênteses()
2- Expoentes
3- multiplicadores e divisores
4- adição e subtração
*/

let result = 1 + 2 * 3 + 4 ** 2;
/*let result = 1 + 2 * 3 + 16;
let result = 1 + 6 + 16;
let result = 23;
*/
console.log(result)