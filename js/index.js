import * as buttons from '/js/components/buttons/buttons.js';
import * as playhandlers from '/js/actions/playhandlers.js';

function initPage() {
    const buttonsPlay = new buttons.ButtonsPlay().buttonsPlayBuilder(),
        actionsPlayer = playhandlers.ActionsPlay,
        initSectionPlay = actionsPlayer.initSectionPlay(".play");
    //let btnActive = initSectionPlay(buttonsPlay);
    initSectionPlay(buttonsPlay);
    window.addEventListener("DOMContentLoaded", () => {
        initSectionPlay(buttonsPlay);
    });
    let btnActive = document.querySelectorAll(".play button");
    actionsPlayer.btnPicker(btnActive);

    //debugger;
}

initPage();