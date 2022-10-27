export function buttonBuild(btnClass) {
    const btn = document.createElement("button");        
    btn.setAttribute("type", "button");
    btn.classList.add(`button-${btnClass}`);
    return btn;
}

export function buttonLocate(old, newer) {
    const oldTg = document.querySelector(old),
        newTg = document.querySelector(newer);
    oldTg.replaceWith(newTg);
}

export class ButtonsCluster {
    constructor(initClassList) {
        this.initClassList = initClassList;
    }
    
    forge() {
    const playBtn = {};
    this.initClassList.forEach(cl => {
        playBtn[cl] = buttonBuild(cl);
    });
    return playBtn;
    }

}
