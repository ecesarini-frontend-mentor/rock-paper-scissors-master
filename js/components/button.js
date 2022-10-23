function buildPlayButton(classList) {
    const btn = document.createElement('button');    
    btn.setAttribute("type", "button");
    classList.foreEach(val => {btn.classList.add(`button-${val}`)});
    return btn;
}

export class ButtonPlay {
    constructor() {
        this.initClassList = ["paper", "scissors", "rock"];
        this.playButton = {};
        this.init();
    }
    
    init() {
        this.initClassList.forEach(element => {
            this.playButton[element] = buildPlayButton(element);
        });
        return this.playButton;
    }
}