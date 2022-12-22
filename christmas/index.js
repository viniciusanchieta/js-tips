const now = new Date();
const month = now.getMonth() + 1;
const day = now.getDate();

const isChristmas = month === 12 && day === 25;

if (!isChristmas) {
  return console.log('Hoje não é Natal :(');
}

console.log('Feliz Natal!');

