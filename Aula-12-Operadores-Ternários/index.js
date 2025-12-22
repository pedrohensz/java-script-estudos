/*operadores ternários: são um atalho para o if else de maneira mais curta. Podem ser utilizados da seguinte maneira*/
const idade = 20
const maioridade = idade > 18 ? "maior de idade": "menor de idade";
console.log(maioridade);

const conta = 100
const desconto =  conta > 100 ? 50 : 0

console.log(`O valor a ser pago é R$ ${conta - conta * (desconto/100)}`)

const eEstudante = true 
const matriculado = eEstudante ? "Matriculado": "Não Matriculado"

console.log(matriculado)