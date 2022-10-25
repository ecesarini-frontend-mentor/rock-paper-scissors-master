import { ButtonsPlay } from "/js/components/buttons/buttons.js";


export class ActionsPlay {
    constructor() {
        
        //this.sectionPlay = document.querySelector(".play");
    }

    static initSectionPlay(playBtns) {
        let sectionPlay =  document.querySelector(".play");
        for(let prop in playBtns) {
            let gridProp = playBtns[prop];

            if(prop === 'rock') {
                gridProp.classList.add('main-play-row-2');
            } else {
                gridProp.classList.add('main-play-row-1');
            }
            //return await this.sectionPlay.append(gridProp);
            sectionPlay.append(gridProp);
        }
    }



}