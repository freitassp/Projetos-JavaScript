class CalcController {



    constructor() {
        this._operation = [];
        this._Locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonEvents();
    }


    initialize() {
        this.setDisplayDateTime();

        let interval = setInterval(() => {
            this.setDisplayDateTime();

        }, 1000);


    }

    addEventListenerAll(element, events, fn) {
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        })

    }

    clearAll() {
        this._operation = [];

    }

    clearEntry() {

        this._operation.pop();
    }

    getLastOperation(value) {
        return this._operation[this._operation.length - 1];
    }

    setLastOperation(value){

        this._operation[this._operation.length -1] = value;//ultimo item vai ser igual ao operador do momento
    }

    isOperator(value){
        return (['+', '-', '*', '/', '%'].indexOf(value) > -1);

    }

    addOperation(value) {
        console.log('A', isNaN(this.getLastOperation()));
        if (isNaN(this.getLastOperation())) {
            //string

            if (this.isOperator(value)){
                //troca operador
                this.setLastOperation(value);
            }else if(isNaN(value)){
                //outra coisa
                console.log(value);
            }else{
                this._operation.push(value);

            }


        } else {
            //Number
            let newValue = this.getLastOperation().toString() + value.toString;
            this.setLastOperation(parseInt(newValue));
            }

        
        console.log(this._operation);
    }

    setError() {
        this.displayCalc = "Error";

    }

    exectBtn(value) {


        switch (value) {

            case 'ac':
                this.clearAll();
                break;
            case 'ce':
                this.clearEntry();
                break;
            case 'soma':
                this.addOperation('+');
                break;
            case 'subtracao':
                this.addOperation('-');
                break;

            case 'divisao':
                this.addOperation('/');
                break;

            case 'multiplicacao':
                this.addOperation('*');
                break;
            case 'porcento':
                this.addOperation('%');
                break;
            case 'igual':

                break;
            case 'ponto':
                this.addOperation('.');
                break;

            default:
                this.setError();
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;



        }

    }

    initButtonEvents() {
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        //buttons.addEventListener('click', e =>{
        //console.log(e);
        // });

        buttons.forEach((btn, index) => {

            this.addEventListenerAll(btn, 'click drag mouseover', e => {
                let textBtn = btn.className.baseVal.replace("btn-", "");
                this.exectBtn(textBtn);

            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
                btn.style.cursor = "pointer";
            });

        });

    }

    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._Locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._Locale);


    }

    get displayTime() {
        return this._timeEl.innerHTML;

    }

    set displayTime(value) {
        return this._timeEl.innerHTML = value;

    }

    get displayDate() {
        return this._dateEl.innerHTML;

    }

    set displayDate(value) {
        return this._dateEl.innerHTML = value;

    }



    get displayCalc() {

        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value) {

        this._displayCalcEl.innerHTML = value;
    }

    get currentDate() {

        return new Date();
    }

    set currentDate(novaData) {
        this._currentDate = novaData;

    }
}