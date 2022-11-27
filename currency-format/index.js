const number = 1235.45;

const currencyFormat = number.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

console.log(currencyFormat);

