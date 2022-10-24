import { ButtonsPlay } from "/js/components/buttons/buttons.js";

export class ActionInitPlay {
    constructor() {
        this.sectionPlay = document.querySelector(".play");
        this.buttonsPlay = new ButtonsPlay();
        //this.init();
    }

    /*init() {
        window.addEventListener("load", this);
        this.eventsHandler();
    }
    eventsHandler() {
        //this.buttonsPlayActions.forEach(btn => btn.addEventListener("DOMContentLoaded", this));
    }

    handleEvent(event) {
        switch(event) {
            //case "DOMContentLoaded":
            case "load":
            this.initSectionPlay();
            break;
        }
    }*/

    initSectionPlay() {
        const playBtns = this.buttonsPlay.init();
        
        for(let prop in playBtns) {
            let gridProp = playBtns[prop];

            if(prop === 'rock') {
                gridProp.classList.add('main-play-row-2');
            } else {
                gridProp.classList.add('main-play-row-1');
            }

            //debugger;
            
            //this.sectionPlay.append(playBtns[prop]);
            this.sectionPlay.append(gridProp);
        }
        //debugger;
    }


}