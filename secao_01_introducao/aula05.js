// - Funções em JavaScript

// Funções simples: somar()
function somar(x1, x2) {

    return x1 + x2;
}

let resultado = somar(10, 20);
console.log(resultado);


// Funções simples: calc2()
function calc2(nun1, num2, operador) {

    return eval(`${nun1} ${operador} ${num2}`);
}

let resultado2 = calc2(1, 2, '-');
console.log(resultado2);


// Funções anônimas: ()
(function(num1, num2, operador) {

    return eval(num1, num2, operador);
}) (1, 2, '*');


// Função Arrow: calc3()
let calc3 = (num1, num2, operador) => {

    return eval(`${num1} ${operador} ${num2}`);
}

let resultado3 = calc3(432, 18, '+');
console.log(resultado3);