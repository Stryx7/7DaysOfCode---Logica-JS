let disciplina = prompt ("Qual disciplina você deseja cursar? Respónda: 1- Front-End 2-Back-End");
let materia;
let especializacao = ["React","Vue","C#","Java"];
let x = 0;
let resposta=0;
let tecnologia;
let contador;

if (disciplina == 1) {
    materia = prompt ("Qual matéria do Front-End você deseja aprender? Responda: 1-React 2-Vue");
    if(materia == 1){
        x = 0;
    } else if (materia == 2){
        x = 1;
    }
} else if (disciplina == 2) {
    materia = prompt ("Qual matéria do Back-End você deseja aprender? Responda: 1-C# 2-Java");
    if(materia == 1){
        x = 2;
    } else if (materia ==2){
        x = 3;
    }
} else {
    alert("Você não digitou uma resposta válida, encerraremos o programa.");
}

resposta = prompt (`Você prefere se especializar em ${especializacao[x]} ou se tornar um FullStack? Responda: 1 ${especializacao[x]} ou 2-FullStack`);

if(resposta == 1){
alert(`Muito bem! Boa sorte com sua especialização em ${especializacao[x]}`);
} else {
alert(`Parabéns! Boa sorte na sua jornada como FullStack!`);
}

while(contador != 0){
tecnologia = prompt ("Tem mais alguma tecnologia que você gostaria de aprender? Escreva abaixo:");
alert(`Muito bem! Continue assim! Boa sorte com ${tecnologia}`);
contador = prompt ("Tem mais alguma tecnologia? Digite 1- Continuar ou digite 0-Encerrar o programa");
}
