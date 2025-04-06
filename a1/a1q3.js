//  3) Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores

const numeros = [2, 4, 6, 8, 10, 2]

const maiorValor = Math.max(...numeros);
console.log("O maior valor é: " + maiorValor);

const menorValor = Math.min(...numeros);
console.log("O menor valor é: " + menorValor);

const somaValores = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log("A soma dos valores é: " + somaValores);