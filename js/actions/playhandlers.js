import { buttonBuild } from "../components/buttons/buttons.js";
import * as common from "../common/common.js";

const mainTarget = document.querySelector(".main-play");
const btnPicked = {};


export function currentBtnCluster(prop, clList) {
    const currentPlayer = {};    
    prop.forEach((p, ind) => {
        currentPlayer[p] = buttonBuild(clList[ind]);
    });
    return currentPlayer;
}

export function step1(tg, contCL, prop, propClList) {
    const container = document.createElement('div');
    container.classList.add(...contCL);
    const cbc = currentBtnCluster(prop, propClList);
    for(let p in cbc) {
        cbc[p].addEventListener("click", btnPicked);
        container.append(cbc[p]);
    }
    tg.append(container);
}

export function step2() {
    const btnActive = document.querySelector('.play button')
    const picker = (e) => {
        btnPicked['player'] = e.currentTarget;
        btnPicked['bot'] = btnActive[common.randomPick()];
        setTimeout(step2 , 1000);
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

export function btnPicker() {
    const btnActive = document.querySelector('.play button');
    const picker = (e) => {
        btnPicked['player'] = e.currentTarget;
        btnPicked['bot'] = btnActive[common.randomPick()];
        //setTimeout(step2 , 1000);
        //debugger;
        //const pkdClass = e.target.classList[0];
        //alert(`You picked ${pkdClass} button!`);

    }
    btnActive.forEach(btn => btn.addEventListener("click", picker)); 
}

