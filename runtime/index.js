// Iniciando o cronômetro e atribuindo o nome "timer" a ele:
console.time('timer');

let array = [];
for (let i = 0; i <= 5; i++) {
    array.push({
        "id": i,
    });
}

// Finalizando o cronômetro "timer":
console.timeEnd('timer');

