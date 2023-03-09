let resultado = 0;
let x = 0;
let y = 0;
let opcao = 1;

function adicao (x, y) {
    return x + y  
}
function subtracao (x,y){
    return x - y
}
function multiplicacao (x,y){
    return x * y
}
function divisao (x,y){
    return x / y
}

while(opcao > 0 && opcao < 5) {
    opcao = Number (prompt (`Qual operação deseja realizar? Digite um numero correspondente abaixo: \n 1-Adição 2-Subtração 3-Multiplicação 4-Divisão 5-Sair`))

    switch(opcao){
        case 1:
            x = Number (prompt (`Digite o 1º parcela:`));
            y = Number (prompt (`Digite o 2º parcela:`));
            resultado = adicao(x,y);
            alert(`Soma: ${resultado}`);
            break;
        case 2:
            x = Number (prompt (`Digite o Aditivo:`));
            y = Number (prompt (`Digite o Subtrativo:`));
            resultado = subtracao(x,y);
            alert(`Diferença: ${resultado}`);
            break;
        case 3:
            x = Number (prompt (`Digite o 1º fator`));
            y = Number (prompt (`Digite o 2º fator`));
            resultado = multiplicacao(x,y);
            alert(`Produto ${resultado}`);
            break;
        case 4:
            x = Number (prompt (`Digite o 1º dividendo:`));
            y = Number (prompt (`Digite o 2º divisor:`));
            resultado = divisao(x,y);
            alert(`Quociente: ${resultado}`);
            break;
        default:
        alert("Até a próxima!");
            break;
    }
}