import * as buttons from '/js/components/buttons/buttons.js';
import * as playhandlers from '/js/actions/playhandlers.js';

function initPage() {
    const buttonsPlay = new buttons.ButtonsPlay().buttonsPlayBuilder();
    const pai = () => {
        return playhandlers.ActionsPlay.initSectionPlay(buttonsPlay);
    };
    let btnActive = pai();
    window.addEventListener("DOMContentLoaded", () => {
        pai();
    });

    //debugger;
}

initPage();