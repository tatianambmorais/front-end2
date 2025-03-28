// Calcule o valor total da compra.
function calcularTotal(valorProduto, quantidadeComprada){
  const valorDaCompra = valorProduto * quantidadeComprada
  console.log("O valor da compra é " + valorDaCompra)
  aplicarDesconto(valorDaCompra)
}

const readlineSync = require('readline-sync');

// Crie outra função chamada aplicarDesconto que receba o valor total e retorne o valor com desconto,

function aplicarDesconto(valorDaCompra){
    if (valorDaCompra > 100){
         const valorComDesconto = valorDaCompra * 0.90
         console.log("O valor com desconto é: " + valorComDesconto)
    }
    else {console.log("O valor total da compra é: " + valorDaCompra);
    }
}

function exibirResumo(){
    let valor =  readlineSync.question("Digite o valor da compra: ")
    let quantidade =  readlineSync.question("Digite a quantidade de produtos: ")
    calcularTotal(valor, quantidade)
}

exibirResumo()
