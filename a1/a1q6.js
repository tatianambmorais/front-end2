// 6) Escreva uma função que informe o retorno de um investimento (montante) com base nos valores do capital inicial, tempo em meses e taxa de juros mensal, fornecidos pelo usuário. Utilize obrigatoriamente a função prompt() para coletar os valores necessários. Use a fórmula: M = C * (1+i). Onde:  C = Capital inicial investido  i = Taxa de juros, em percentual  t = Tempo do investimento, em meses Exiba o resultado com duas casas decimais.

function calcularMontante() {
    let capital = parseFloat(prompt("Informe o capital inicial (em reais):"));
    let taxa = parseFloat(prompt("Informe a taxa de juros mensal (em %):"));
    let tempo = parseInt(prompt("Informe o tempo do investimento (em meses):"));
  
    let i = taxa / 100;
  
    // Calcula o montante
    let montante = capital * Math.pow(1 + i, tempo);
  
    alert("O montante final do investimento é: R$ " + montante.toFixed(2));
  }
  
  calcularMontante();
  