import * as common from "/js/common/common.js";
import * as playHandler from "/js/actions/playhandler.js";
import * as card from "/js/components/card.js";
import * as c from "/js/common/constant.js";

let target = document.querySelector(".play");

export function cbHandler(ect, cpb) {
  step1(ect, cpb)
    .then(r => r);
    // .then(r => r);
}

function step1(ect, cpb) {
  // debugger;
    const step2InitClass = common.playPicker(ect, cpb, "main-play-row2"),
        //playBtn2 = new playHandler.BtnPlay(c.step2InitProp, step2InitClass, () => alert("ciao"));
        // playBtn2 = new playHandler.BtnPlay(setp2InitProp, step2InitClass);// cbst2);
        playBtn2 = new playHandler.BtnPlay(c.step2InitProp, step2InitClass, (cbp) => step2(cbp));

    cpb = playBtn2.init;

    c.playPickedCard.player = card.cardAdder(
        common.elementCreator("p", "YOU PICKED", ["button-card-header-picked"]),
        cpb.player
        );
    // c.playPickedCard.bot = card.cardAdder(
    //     common.elementCreator("p", "THE HOUSE PICKED", ["button-card-header-picked"]),
    //     cpb.bot
    //     );
    
      // debugger;
      // playHandler.btnContainerRefresh(target, step2ContainerClass, currentPlayBtn, true);
  const promise = new Promise((resolve, reject) => {
      playHandler.btnContainerRefresh(c.target, c.step2ContainerClass, c.playPickedCard, true);
    resolve();
  })
  return promise;
}

function step2(cbp) {
  c.playPickedCard.bot = card.cardAdder(
      common.elementCreator("p", "THE HOUSE PICKED", ["button-card-header-picked"]),
      cpb.bot
      );
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      playHandler.btnContainerRefresh(c.target, c.step2ContainerClass, c.playPickedCard);
    }, '2000');
    resolve();
  });
  return promise;
}