import * as btn from '/js/components/buttons/buttons.js';
import * as playHandler from '/js/actions/playhandlers.js';

function initPage() {
    const target = document.querySelector('.play');

    class StepObj {
        constructor(
            btnProp,
            btnClass,
        ) {
            this.btnProp = btnProp;
            this.btnClass = btnClass;
        }
    }

    const step1Obj = new StepObj(
        ["paper", "rock", "scissors"],
        ['main-play-row-1 button-paper', 'main-play-row-1 button-scissors','main-play-row-2 button-rock']
    );
    const step1cont = playHandler.btnPlayContainer(
        ['main-play-container', 'main-play-step1'],
        step1Obj.btnProp,
        step1Obj.btnClass,
        playHandler.step1Cb
    );
    playHandler.playUpdater(target, step1cont);


    //const step1Buld = new playHandler.BuilPlay(btnPlayStep1Prop, btnPlayStep1ClList).step1();
    /*const step1 = () => playHandler.stepper(
        target, 
        ['main-play-container', 'main-play-step1'],
        btnPlayStep1Prop,
        btnPlayStep1ClList
        );
    
    step1();

    window.addEventListener("DOMContentLoaded", () => {
        //step1();
    });*/
    

    //let btnActive = document.querySelectorAll(".play button");
    //playHandler.btnPicker(btnActive);
    
    //debugger;
}

initPage();