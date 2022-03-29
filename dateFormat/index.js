const dataAtual = new Date();

const dataFormatada = dataAtual.toLocaleDateString(
  'pt-BR',
  {day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }
);

console.log(dataFormatada);