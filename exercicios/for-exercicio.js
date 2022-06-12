const notas = [5.1, 0.1, 6.2, 0.6, 7.4, 10];

console.log(notas.length);

for (let i = 0; i <= notas.length; i++) {
    console.log(notas[i]);

    if(notas === 10) {
        notas.push(9.0);
        console.log(notas);
    }
}




