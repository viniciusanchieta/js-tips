// A desestruturação de objetos permite que você extraia um valor de um objeto.

const pesssoa = {
    nome: 'Ana',
    idade: 23,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
};

const { nome, idade, endereco: { logradouro, numero } } = pesssoa;

console.log(nome); // 'Ana'
console.log(idade); // 23
console.log(logradouro); // 'Rua ABC'
console.log(numero); // 1000
