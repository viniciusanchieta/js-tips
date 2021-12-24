// How many days is left until my birthday
// Definindo a data do seu proximo aniversario
const dataProximoAniversario = new Date(2022, 09, 22);
// Definindo a data atual
const dataAtual = new Date();
// Calculando a diferenca entre as datas
const diferenca = dataProximoAniversario - dataAtual;
// Calculando a quantidade de dias
// Vamos utilizar o metodo Math.floor para arredondar o resultado
// O calculo sera a diferrenca dividida por 1000 milisegundos e depois dividido por 60 segundos e depois por 60 minutos e depois por 24 horas

const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
// Exibindo a quantidade de dias
console.log(dias);





