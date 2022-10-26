import { ButtonsPlay } from "/js/components/buttons/buttons.js";


export class ActionsPlay {
    constructor() {
        
        //this.sectionPlay = document.querySelector(".play");
    }

    static initSectionPlay(tg) {
        let sectionPlay = document.querySelector(tg);
        return (playBtns) => {
            for(let prop in playBtns) {
                let gridProp = playBtns[prop];
                if(prop === 'rock') {
                    gridProp.classList.add('main-play-row-2');
                } else {
                    gridProp.classList.add('main-play-row-1');
                }
                sectionPlay.append(gridProp);
            }
        }
        //return sectionPlay;            
    }
    static btnPicker(btnActive) {
        btnActive.forEach(btn => btn.onclick = () => {
            alert(` I'm ${btn.classList[0]} button!`);
        });

    }
    
    static step1() {
        function rand() {
            return Math.floor(Math.random() * 3) + 1;
        }
    }

}

