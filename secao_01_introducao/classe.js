class Celular {

    // - Construtor:
    constructor() {

        // Atributos:
        this.cor = 'Prata';

    }

    // - Métodos:
    ligar() {

        console.log('Uma ligação');
        return 'Ligando';
    }
}

let objeto = new Celular();
console.log(objeto);
console.log(objeto.cor);
console.log(objeto.ligar());