// O método every() permite verificar se todos os elementos de um array são aprovados por um teste.

const array = [10, 10, 10];

const check = (currentValue) => currentValue == 10;
// Função que verifica se o valor é igual a 10

console.log(array.every(check));
// Retorna true, pois todos os valores são iguais a 10


