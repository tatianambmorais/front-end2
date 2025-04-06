//  1) Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa anual de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.
let populacaoA = 80000;
let populacaoB = 200000;
let taxaA = 0.03;
let taxaB = 0.015;
let anos = 0;

while (populacaoA < populacaoB) {
  populacaoA += populacaoA * taxaA;
  populacaoB += populacaoB * taxaB;
  anos++;
}

console.log("QUESITO 1:");
console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a do país B.`);
