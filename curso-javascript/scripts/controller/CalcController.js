class CalcController {


    
    constructor(){
        this._Locale = 'pt-BR';
        this._displayCalcEl =  document.querySelector("#display");
        this._dateEl =  document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonEvents();
    }


    initialize(){
        this.setDisplayDateTime();

        let interval = setInterval(() => {
            this.setDisplayDateTime();
            
        }, 1000);
      
        
    }

    addEventListenerAll(element, events,  fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        })

    }

    initButtonEvents(){
       let buttons = document.querySelectorAll("#buttons > g, #parts > g");

       //buttons.addEventListener('click', e =>{
            //console.log(e);
      // });

      buttons.forEach((btn, index)=>{

        this.addEventListenerAll(btn, 'click drag mouseover', e =>{
            console.log(btn.className.baseVal.replace("btn-",""));
      });

        this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
            btn.style.cursor = "pointer";
        });

      });

    }

    setDisplayDateTime(){
        this.displayDate =  this.currentDate.toLocaleDateString(this._Locale);
        this.displayTime =  this.currentDate.toLocaleTimeString(this._Locale);


    } 

    get displayTime(){
        return this._timeEl.innerHTML;

    }

    set displayTime(value){
        return this._timeEl.innerHTML =  value;

    }

    get displayDate(){
        return this._dateEl.innerHTML;

    }

    set displayDate(value){
        return this._dateEl.innerHTML =  value;

    }



    get displayCalc(){

        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){

        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){

        return new Date();
    }

    set currentDate(novaData){
        this._currentDate = novaData;

    } 
}