import { buttonBuild } from "../components/buttons/buttons.js";
import * as common from "../common/common.js";

const mainTarget = document.querySelector(".main-play");
//const btnPicked = {};


export function currentBtnCluster(prop, clList) {
    const currentPlayer = {};    
    prop.forEach((p, ind) => {
        currentPlayer[p] = buttonBuild(clList[ind]);
    });
    return currentPlayer;
}

export function stepper(tg, contCL, prop, propClList) {
    const container = document.createElement('div');
    container.classList.add(...contCL);
    const cbc = currentBtnCluster(prop, propClList);
    for(let p in cbc) {
        cbc[p].addEventListener("click", btnPicker);
        container.append(cbc[p]);
    }
    tg.append(container);
}

export function btnPicker(e) {
    const btnPlay = document.querySelectorAll(".play button");
    const prop = ['player', 'bot'],
        propClist = ['main-play-row2 button-player', 'main-play-row-2 button-bot'];

    const btnActive = currentBtnCluster(prop, propClist);

    btnActive['player'] = e.currentTarget;
    btnActive['bot'] = btnPlay[common.randomPick()];
    debugger;
}



export function step2() {
    const btnActive = document.querySelector(".play button");
    const container = document.createElement('div');
    container.classList.add(...contCL);
    const cbc = currentBtnCluster(prop, propClList);
    for(let p in cbc) {
        cbc[p].addEventListener("click", btnPicker);
        container.append(cbc[p]);
    }
    tg.append(container);
}
//export function step2() {

    //alert('hello');
    /*mainTarget.classList.remove("main-play-grid");
    mainTarget.classList.add("main-play-fb");
    mainTarget.innerHTML = ("");
    mainTarget.append(btnPicked['player']);*/
//}


/*export function btnPicker(btnCluster) {
    debugger;
    const btnActive = document.querySelector(".play button");
    btnActive.forEach(btn => btn.addEventListener("click", () =>  { 
        common.btnPlayPicker(btnPicked);
        step2();
    }));
}*/

