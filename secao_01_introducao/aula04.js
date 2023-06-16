// *
let a = 10;
const b = '10';
let cor1 = 'azul';
let cor2 = 'verde';


// - Operadores de comparação e lógicos

// Verifica a igualdade
console.log(a == b);
console.log(a != b);

// Verifica a igualdade e o tipo
console.log(a === b);
console.log(a !== b);

// 
console.log(a == b && typeof b == 'string');
console.log(a == b || typeof a == 'string');


// - Operadores decisão
if (cor1 === 'verde') {
    console.log(`Siga, ${cor1}...`);
} 
else if (cor1 === 'amarelo') {

    console.log(`Atenção, ${cor1}...`);
} 
else if (cor1 === 'vermelho') {
    console.log(`Pare, ${cor1}...`);
}
else {
    console.log('Desconhecido...');
}

switch (cor2) {
    case 'verde':
        console.log(`Siga, ${cor2}...`);
        break;

    case 'amarelo':
        console.log(`Atenção, ${cor2}...`);
        break;

    case 'vermelho':
        console.log(`Pare, ${cor2}...`);

    default:
        console.log(`Desconhecido...`);
}
console.log('\n');

// Laços de repetição: for
for (let i = 1; i <= 10; i++) {

    for (let j = 0; j <= 10; j++) {

        console.log(`${i} x ${j} = ${i * j}`);
    }

    console.log("\n");
}

// Laço de repetiçâo: while
let cont1 = 1;

while (cont1 <= 10) {

    // if (cont1 == 5) { continue; }

    console.log(cont1);
    cont1++;
}

// Laço de repetiçâo: do while
do {

    console.log(cont1);
    
    if (cont1 == 20) { break; }

    cont1++;
} while (cont1 <= 30);

// Laço de repetição: forEatch

// Laço de repetição: forIn