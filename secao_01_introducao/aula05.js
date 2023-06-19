// - Funções em JavaScript:

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


// - Eventos:

// focus com window
window.addEventListener('focus', event => {

    console.log('Focus');
});


// focus com documents
document.addEventListener('click', event => {

    console.log('Click');
});


// - Datas:
let agora = new Date;
console.log(agora);
console.log(`${agora.getDate()}/${agora.getMonth()+1}/${agora.getFullYear()}`);
console.log(agora.toLocaleDateString('pt-BR'));


// - Array:
let carros = ['palio 98', 'toro', 'uno', 10, true, new Date(), function() {}];
console.log(carros);
console.log(carros.length);
console.log(carros[5].getFullYear());

let familia = ['Erick', 'Raquézia', 'Gabriel', 'Gabriely'];


// Percorrendo os elementos do array:
carros.forEach(function(value, index) {

    console.log(index, value);
});

familia.forEach(function(value, index) {

    console.log(index, value);
});


// - Orientação a objetos:
let celular = function() {

    this.cor = 'Prata';

    this.ligar = function() {

        console.log('Uma ligação');
        return 'Ligando';
    }
};

let objeto = new celular();
console.log(objeto);
console.log(objeto.cor);
console.log(objeto.ligar());