//import { ButtonsCluster } from "/js/components/buttons/buttons.js";


export function initSectionPlay(tg) {
    let sectionPlay = document.querySelector(tg);
    return (playBtns) => {
        for(let prop in playBtns) {
            let gridProp = playBtns[prop];
            if(prop === "rock") {
                gridProp.classList.add("main-play-row-2");
            } else {
                gridProp.classList.add("main-play-row-1");
            }
            sectionPlay.append(gridProp);
        }
    }
}
    
export function randomPick() {
    function rand() {
        return Math.floor(Math.random() * 3) + 1;
    }
}

export function btnPicker(btnActive) {
    const youPicked = (e) => {
        const pkdClass = e.target.classList[0];
        alert(`You picked ${pkdClass} button!`);
    }
    btnActive.forEach(btn => btn.addEventListener("click", youPicked)); 
}

