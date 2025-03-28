// Criando lista
nomes = ["Ana", "João", "Júlia", "Caio", "Cícero"]

// Imprimir 3o nome da lista
console.log(nomes[2]);

// Adicionando nome no início do array
nomes.unshift("Lucas");
console.log(nomes)


// Adicionando nome no final do array
nomes.push("Maria");
console.log(nomes)

// Remover último nome
nomes.pop()
console.log(nomes)

// Use map() para criar um novo array dobrando os valores de [2, 4, 6, 8]
valores = [2, 4, 6, 8]
const valoresDobrados = valores.map(valor => valor * 2)
console.log(valoresDobrados)

// Use filter() para criar um novo array apenas com números maiores que 5 em [1, 3, 5, 7, 9]
valores = [1, 3, 5, 7, 9];
const maiorQueCinco = valores.filter(val => val > 5);
console.log(maiorQueCinco)