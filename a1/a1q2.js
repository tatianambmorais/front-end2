// 2) Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números ímpares. Utilize obrigatoriamente a função prompt() para coletar os números.

let numerosPares = [];
let numerosImpares = [];
for (i=0; i<10; i++){
let numeroRecebido = window.prompt("Digite um número")
    if(numeroRecebido % 2 ==0){
        numerosPares.push(numeroRecebido)
    }
    else {
        numerosImpares.push(numeroRecebido)
    }
}

console.log("Quantidade de números pares é: " + numerosPares.length)
console.log("Quantidade de números impares é: " + numerosImpares.length)


