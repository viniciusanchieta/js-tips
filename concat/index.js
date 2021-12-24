// Utilizando o método concat() em strings

const rua = 'Rua ABC';
const numero = 123;

const endereco = rua.concat(', ', numero);

console.log(endereco); // Rua ABC, 123

// Utilizando o método concat() com arrays

const linguagens = ['JavaScript', 'Python', 'Java'];
const frameworks = ['React', 'Vue'];

const tecnologias = linguagens.concat(frameworks);

console.log(tecnologias); // [ 'JavaScript', 'Python', 'Java', 'React', 'Vue' ]