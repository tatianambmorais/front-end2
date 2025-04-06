 //4) Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
 //  a. Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
//b. Em 1996 recebeu aumento de 0,15% sobre seu salário inicial;
//c. A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao dobro do percentual do ano anterior. 
// Faça um programa que determine o salário atual desse funcionário. 
// d. Após concluir isto, faça uma segunda versão do seu código que permita o usuário informar o salário inicial do funcionário. Utilize obrigatoriamente a função prompt() para coletar o salário inicial.

let salario = parseFloat(prompt("Digite o salário inicial do funcionário:"));
let aumento = 0.15;

// Aumento de 1996
salario += salario * aumento;

// De 1997 até 2025
for (let ano = 1997; ano <= 2025; ano++) {
  aumento *= 2;
  salario += salario * aumento;
}

alert("Salário atual em 2025: R$ " + salario.toFixed(2));
