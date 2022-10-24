import * as actions from '/js/actions/playhandler.js';

function initPage() {
    //const buttonPlay = new componentButtons.ButtonPlay(),
    //    buttonList = buttonPlay.init();
    //debugger;
    const aip = new actions.ActionInitPlay();

    window.addEventListener("DOMContentLoaded", () => aip.initSectionPlay());
    //aip.init();
    //debugger;

}

initPage();