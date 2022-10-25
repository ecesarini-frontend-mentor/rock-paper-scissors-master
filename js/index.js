import * as buttons from '/js/components/buttons/buttons.js';
import * as playhandlers from '/js/actions/playhandlers.js';

function initPage() {
    //const buttonsPlay = new buttons.ButtonsPlay().buttonsPlayBuilder(),
    const buttonsPlay = new buttons.ButtonsPlay().buttonsPlayBuilder();
        //actionsPlay = new playhandlers.ActionsPlay();

    //window.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("load", () => {
        //actionsPlay.initSectionPlay(buttonsPlay)
        //const ap = playhandlers.ActionsPlay.initSectionPlay(buttonsPlay); 
        //return await ap;
        playhandlers.ActionsPlay.initSectionPlay(buttonsPlay); 
        });
    /*
    let btnActive = document.querySelectorAll(".play button");
    btnActive.forEach(btn => {
        btn.addEventListener("click", () => {
            ["paper", "scissors", "rock"].forEach(tag => {
                const tagBtn = `.${tag}-button`;
                if(btn.contains(tagBtn)) alert(tag);
            });
        })
    });
    */
    //console.log('ciao');
    //debugger;
}

initPage();