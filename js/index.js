import * as btn from '/js/components/buttons/buttons.js';
import * as playHandler from '/js/actions/playhandlers.js';

function initPage() {
    const btnPlayCL = ["paper", "rock", "scissors"];

    const buttonsPlay = new btn.ButtonsCluster(btnPlayCL).forge(),
        initSectionPlay = playHandler.initSectionPlay(".play");

    initSectionPlay(buttonsPlay);
    window.addEventListener("DOMContentLoaded", () => {
        initSectionPlay(buttonsPlay);
    });

    let btnActive = document.querySelectorAll(".play button");
    playHandler.btnPicker(btnActive);
    
    //debugger;
}

initPage();