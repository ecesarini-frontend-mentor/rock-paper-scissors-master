function buildButtonPlay(btnClass) {
    const btn = document.createElement("button");        
    btn.setAttribute("type", "button");
    btn.classList.add(`button-${btnClass}`);
    return btn;
}

export class ButtonsPlay {
    constructor() {
        this.initClassList = ["paper", "scissors", "rock"];
        this.playButton = {};
    }
    
    init() {
        this.initClassList.forEach(btnClass => {
            this.playButton[btnClass] = buildButtonPlay(btnClass);
        });
        return this.playButton;
    }
}