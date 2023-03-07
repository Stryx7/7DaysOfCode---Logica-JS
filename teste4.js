let valor_secreto = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let resposta = 0;
let contador = 0; 
let chances = 2;

for (contador = 0; valor_secreto != resposta && contador < 3; contador ++) {
    resposta = prompt ("Adivinhe um valor entre 0 e 10, digite-o abaixo:");
    if ( resposta == valor_secreto){
        alert ("Parabéns! Você é praticamente um Tecnopata!");
        break;
    } else {
        alert (`Hum ... Não foi desta vez, você tem mais ${chances} chances`);
        chances -=1; 
    }
}
alert (`O numero que eu estava pensando era ${valor_secreto}`);
