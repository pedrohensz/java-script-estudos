/*Switches: Uma maneira de substituir if elses com muitas condições
Detalhe: é necessári o uso do break, caso não use o switch vai percorrer todas as condições*/
const dia = 1

switch(dia){
    case 1:
    console.log("Hoje é Segunda-Feira")
    break;

    case 2:
    console.log("Hoje é Terça-Feira")
    break;
    
    case 3:
    console.log("Hoje é Quarta-Feira")
    break;

    case 4:
    console.log("Hoje é Quinta-Feira")
    break;

    case 5:
    console.log("Hoje é Sexta-Feira")
    break;

    case 6:
    console.log("Hoje é Sábado")
    break;

    case 7:
    console.log("Hoje é Domingo")
    break;

    default:
    console.log(`${dia} não é um dia da semana`)
    break;
}