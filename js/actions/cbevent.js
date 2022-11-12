import * as common from "/js/common/common.js";
import * as playHandler from "/js/actions/playhandler.js";
import * as card from "/js/components/card.js";
import * as constant from "/js/common/constant.js";

let target = document.querySelector(".play");
//let currentPlayBtn = playBtn1.init;
//let currentPlayBtn;


export function cbHandler(e) {
    cbst1(e.currentTarget).then(r => r);
}

function cbst1(ect) {
  const promise1 = new Promise((resolve, reject) => {
      const step2InitClass = common.playPicker(ect, constant.currentPlayBtn, "main-play-row2"),
        step2ContainerClass = ["main-play-container", "main-play-step2"],
        // playBtn2 = new playHandler.BtnPlay(setp2InitProp, step2InitClass, () => alert("ciao"));
        // playBtn2 = new playHandler.BtnPlay(setp2InitProp, step2InitClass);// cbst2);
        currentPlayBtn = playBtn2.init;

      playPickedCard.player = card.cardAdder(
        common.elementCreator("p", "YOU PICKED", ["button-card-header-picked"]),
        currentPlayBtn.player
        );
      playPickedCard.bot = card.cardAdder(
        common.elementCreator("p", "THE HOUSE PICKED", ["button-card-header-picked"]),
        currentPlayBtn.bot
        );
    
      // debugger;
      // playHandler.btnContainerRefresh(target, step2ContainerClass, currentPlayBtn, true);
      playHandler.btnContainerRefresh(target, step2ContainerClass, playPickedCard, true);
    resolve();
  })
  return promise1;

}