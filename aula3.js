const prompt = require('prompt-sync')();

let numeroPessoas = 15;
let pessoas = [];

for (let i = 1; i <= numeroPessoas; i++) {
    let pessoa = {
        altura: parseFloat(prompt('Digite a altura: ')), 
        genero: prompt('Digite o gênero (M/F): ').toUpperCase() 
    };
    pessoas.push(pessoa);
}

let homens = pessoas.filter(p => p.genero === "M");

let numeroHomens = homens.length;
let numeroMulheres = pessoas.filter(p => p.genero === "F").length;

let maiorAltura = Math.max(...pessoas.map(p => p.altura));
let menorAltura = Math.min(...pessoas.map(p => p.altura));

let somaAlturaHomens = homens.reduce((soma, p) => soma + p.altura, 0);

let mediaAlturaHomens = numeroHomens > 0 ? (somaAlturaHomens / numeroHomens).toFixed(2) : "N/A";

console.log("A maior altura é " + maiorAltura);
console.log("A menor altura é " + menorAltura);
console.log("Número de mulheres: " + numeroMulheres);
console.log("Média da altura dos homens: " + mediaAlturaHomens);
