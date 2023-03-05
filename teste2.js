let nome = prompt("Qual seu nome");
let idade = prompt("Quantos anos você tem?");
let linguagem = prompt("Qual linguagem de programação você está estudando?");

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

let opcao = prompt(
  `Está gosta de estudar ${linguagem}? Responda: 1 SIM, 2 NÃO`
);

while (opcao == 1 || opcao == 2) {
  if (opcao == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso!");
    break; 
  } else if (opcao == 2) {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
    break;  
  } 
}
