// 5) Escreva uma função que encontre a área e o perímetro de um círculo, de acordo com o raio fornecido. Utilize obrigatoriamente a função prompt() para coletar o raio.

let raio = parseFloat(window.prompt("Digite o raio"));
const pi = 3.14

function calculaPerimento(raio){
    const perimetro = 2* pi * raio
    console.log("O perímetro é de: " + perimetro)
}

calculaPerimento(raio)