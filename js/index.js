import * as btn from '/js/components/buttons/buttons.js';
import * as playHandler from '/js/actions/playhandlers.js';

function initPage() {
    const target = document.querySelector('.play');

    const btnPlayStep1Prop = ["paper", "rock", "scissors"],
        btnPlayStep1ClList = [
            'main-play-row-1 button-paper',
            'main-play-row-1 button-scissors',
            'main-play-row-2 button-rock'
        ];


    //const step1Buld = new playHandler.BuilPlay(btnPlayStep1Prop, btnPlayStep1ClList).step1();
    const step1 = () => playHandler.step1(
        target, 
        ['main-play-container', 'main-play-step1'],
        btnPlayStep1Prop,
        btnPlayStep1ClList
        );
    
    //step1();

    window.addEventListener("DOMContentLoaded", () => {
        step1();
    });
    

    let btnActive = document.querySelectorAll(".play button");
    playHandler.btnPicker(btnActive);
    
    //debugger;
}

initPage();