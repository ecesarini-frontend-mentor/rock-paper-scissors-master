import * as componentsButton from "../components/button";

export function start() {
    let playSection = document.querySelector(".main-play");
    const buttonPlay = new componentsButton.ButtonPlay(),
        playSec = buttonPlay.init(),
    for (let i in playSec) {
        playSection.append(i);
    } 
    
}