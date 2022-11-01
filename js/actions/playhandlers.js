import { buttonBuild } from "../components/buttons/buttons.js";
import * as common from "../common/common.js";



export function btnPlayCluster(prop, clList) {
    const currentPlayer = {};    
    prop.forEach((p, ind) => {
        currentPlayer[p] = buttonBuild(clList[ind]);
    });
    return currentPlayer;
}

export function btnPlayContainer(contClList, prop, propClList, callback) {
    const container = document.createElement('div');
    container.classList.add(...contClList);
    const cbc = btnPlayCluster(prop, propClList);
    for(let p in cbc) {
        if(callback) cbc[p].addEventListener("click", callback);
        container.append(cbc[p]);
    }
    return container;
}

export function playUpdater(tg, container) {
    tg.append(container);
}

export function step1(e) {
    const pkdCluster = btnPlayCluster(
        ['player', 'bot'],
        ['main-play-row2 button-player', 'main-play-row-2 button-bot'],
    );
    btnPlayContainer(
        ['main-play-container', 'main-play-step2'],
        e.currentTarget, document.querySelectorAll(".play button")[common.randomPick()]],
        pkdCluster,
        ['main-play-row2 button-player', 'main-play-row-2 button-bot'],
    )

}

export function btnPicker(e) {
    const btnPlay = document.querySelectorAll(".play button");
    const prop = ['player', 'bot'],
        propClist = ['main-play-row2 button-player', 'main-play-row-2 button-bot'];

    const btnActive = btnPlayCluster(prop, propClist);

    btnActive['player'] = e.currentTarget;
    btnActive['bot'] = btnPlay[common.randomPick()];
    //debugger;
}


