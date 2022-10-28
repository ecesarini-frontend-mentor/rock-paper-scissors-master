//import { ButtonsCluster } from "/js/components/buttons/buttons.js";

const mainTarget = document.querySelector(".main-play");
const btnPicked = {};

export function initSectionPlay(tg) {
    let sectionPlay = document.querySelector(tg);
    return (playBtns) => {
        for(let prop in playBtns) {
            let gridProp = playBtns[prop];
            if(prop === "rock") {
                gridProp.classList.add("main-play-grid-row-2");
            } else {
                gridProp.classList.add("main-play-grid-row-1");
            }
            sectionPlay.append(gridProp);
        }
    }
}
    
export function randomPick() {
    return Math.floor(Math.random() * 3);
}

function step1() {
    mainTarget.classList.remove("main-play-grid");
    mainTarget.classList.add("main-play-fb");
    mainTarget.innerHTML = ("");
    mainTarget.append(btnPicked['player']);
}

export function btnPicker(btnActive) {
    const picker = (e) => {
        btnPicked['player'] = e.currentTarget;
        btnPicked['bot'] = btnActive[randomPick()];
        setTimeout(step1 , 1000);
        //debugger;
        //const pkdClass = e.target.classList[0];
        //alert(`You picked ${pkdClass} button!`);

    }
    btnActive.forEach(btn => btn.addEventListener("click", picker)); 
}

