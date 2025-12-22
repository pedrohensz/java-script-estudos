//for loops- repete um loop em uma quantidade limitada de tempo
//contando até 20
/* sintaxe
for (inicio; condição; "ritmo") {
  // bloco de código a ser executado
*/
for(let i = 1; i <= 20; i++)(
    console.log(i)
)

//break - usado para sair do loop
for(let i = 1; i <= 20; i++){
    if(i == 13){
        break;
    }
    else{
        console.log(i);
    }
}