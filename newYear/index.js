const dataAtual = new Date();

if (dataAtual.toLocaleDateString() === '01/01/2022') {
    console.log('Aow trem! Feliz Ano Novo!');
} else {
    // Extrair a diferença entre o ano novo e a data atual
    // Extraindo teremos a diferença em milisegundos
    const diferenca = new Date(2022, 0, 1) - dataAtual;
    console.log(`Faltam ${diferenca} milisegundos para o Ano Novo!`);

    // Calcular quantos dias faltam para o ano novo e converter para inteiro
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    console.log(`Faltam ${dias} dias para o Ano Novo!`);
}

