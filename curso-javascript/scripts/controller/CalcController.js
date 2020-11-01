class CalcController {


    
    constructor(){

         this._displayCalc = "0";
         this._currentDate;
         this.initialize();
    }


    initialize(){

       let displayCalcEl =  document.querySelector("#display");
       let dateEl =  document.querySelector("#data");
       let timeEl = document.querySelector("#hora");
       
       displayCalcEl.innerHTML = "456";
       dateEl.innerHTML = "01/11/2020";
       timeEl.innerHTML = "10:08";
    }

    get displayCalc(){

        return this._displayCalc;
    }

    set displayCalc(valor){

        this._displayCalc = valor;
    }

    get currentDate(){

        return this._dataAtual;
    }

    set currentDate(novaData){
        this._currentDate = novaData;

    } 
}