class CalcController {

    // - Constructor:
    constructor() {

        // Atributos:
        this._operation = [];
        this._locale = "pt-BR";
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }


    // - Methods:

    // initialize():
    initialize() {

        this.setDisplayDateTime();

        setInterval(() => {

            this.setDisplayDateTime();
        }, 1000);
    }


    // addEventListenerAll() - Método para o "click" ou o "arraste" no botão:
    addEventListenerAll(element, events, fn) {

        // Separa e converte o texto recebido, dos eventos, e converte-os em array.
        events.split(" ").forEach(event => { // "event": representa o evento recebido. Sendo eles "click" ou "drag".

            element.addEventListener(event, fn, false);
        });
    }


    // clearAll()
    clearAll() {

        this._operation = [];
    }


    // clearEntry()
    clearEntry() {

        this._operation.pop();
    }


    // addOperation()
    addOperation(value) {

        this._operation.push(value);
        console.log(this._operation);
    }


    // setError()
    setError() {

        this.displayCalc = "Error";
    }


    // execBtn()
    execBtn(value) {

        switch (value) {

            // AC
            case "ac":
                this.clearAll();
                break;

            // CE
            case "ce":
                this.clearEntry();
                break;

            // SOMA
            case "soma":
                // 
                break;

            // SUBTRAÇÃO
            case "subtracao":
                // 
                break;

            // DIVISÃO
            case "divisao":
                // 
                break;

            // MILTIPLICAÇÃO
            case "multiplicacao":
                // 
                break;

            // PORCENTO
            case "porcento":
                // 
                break;

            // IGUAL
            case "igual":
                // 
                break;

            // NÚMEROS
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                this.addOperation(parseInt(value));
                break;

            // DEFAULT
            default:
                this.setError();
                break;
        }
    };


    // Iniciando os eventos dos botões: initButtonsEvents():
    initButtonsEvents() {

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        // O "forEach" será utilizado para o reconhecimento de cada botão, da calculadora, no evento de click.
        buttons.forEach((btn, index) => { // "btn": nome utilizado para o reconhecimento de cada ítem percorrido.

            this.addEventListenerAll(btn, "click drag", e => {

                let textBtn = btn.className.baseVal.replace("btn-", "");

                this.execBtn();
            })

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {

                btn.style.cursor = "pointer";
            });
        });
    }


    // setDisplayDateTime():
    setDisplayDateTime() {

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, { day: "2-digit", month: "long", year: "numeric" });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }


    // Getter and Setter - displayDate():
    get displayDate() {

        return this._dateEl.innerHTML;
    }

    set displayDate(valor) {

        this._dateEl.innerHTML = valor;
    }


    // Getter and Setter - displayTime():
    get displayTime() {

        return this._timeEl.innerHTML;
    }

    set displayTime(valor) {

        this._timeEl.innerHTML = valor;
    }


    // Getter and Setter - displayCalc():
    get displayCalc() {

        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(valor) {

        this._displayCalcEl.innerHTML = valor;
    }


    // Getter and setter - currentDate():
    get currentDate() {

        return new Date();
    }

    set currentDate(valor) {

        this._currentDate = valor;
    }
}