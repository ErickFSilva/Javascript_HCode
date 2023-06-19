class CalcController {

    // - Constructor:
    constructor() {

        // Atributos:
        this._locale = "pt-BR";
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
    }


    // - Methods:

    // initialize()
    initialize() {

        this.setDisplayDateTime();

        setInterval(() => {

            this.setDisplayDateTime();
        }, 1000);
    }


    // setDisplayDateTime()
    setDisplayDateTime() {

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {day: '2-digit', month: 'long', year: 'numeric'});
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }


    // Getter and Setter - displayDate()
    get displayDate() {

        return this._dateEl.innerHTML;
    }

    set displayDate(valor) {

        this._dateEl.innerHTML = valor;
    }


    // Getter and Setter - displayTime()
    get displayTime() {

        return this._timeEl.innerHTML;
    }

    set displayTime(valor) {

        this._timeEl.innerHTML = valor;
    }


    // Getter and Setter - displayCalc()
    get displayCalc() {

        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(valor) {

        this._displayCalcEl.innerHTML = valor;
    }


    // Getter and setter - currentDate()
    get currentDate() {

        return new Date();
    }

    set currentDate(valor) {

        this._currentDate = valor;
    }
}