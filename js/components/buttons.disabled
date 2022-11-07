export class BuildButtons {
    constructor() {        
    }

    static buildButton(btnClass) {
        const btn = document.createElement("button");        
        btn.setAttribute("type", "button");
        btn.classList.add(`button-${btnClass}`);
        return btn;
    }
}

export class ButtonsPlay {
    constructor() {
        this.initClassList = ["paper", "scissors", "rock"];
        //this.playButton = {};
    }
    
    buttonsPlayBuilder() {
        const playBtn = {};
        this.initClassList.forEach(cl => {
            playBtn[cl] = BuildButtons.buildButton(cl);
        });
        return playBtn;
    }
}