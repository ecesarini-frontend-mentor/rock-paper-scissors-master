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
    const step2InitClass = common.playPicker(ect, cpb, "main-play-row2"),
      playBtn2 = new playHandler.BtnPlay(c.step2InitProp, step2InitClass, (cpb) => step2(cpb));

    cpb = playBtn2.init;

    c.playPickedCard.player = card.cardAdder(
        common.elementCreator("p", "YOU PICKED", ["button-card-header-picked"]),
        cpb.player
        );
    c.playPickedCard.bot = card.cardAdder(
        common.elementCreator("p", "THE HOUSE PICKED", ["button-card-header-picked"]),
        cpb.bot
        );
    cpb.player.setAttribute("picker", "player");
    cpb.bot.setAttribute("picker", "bot");
    cpb.bot.classList.add(...c.btnClassBotPicker);

  const promise = new Promise((resolve, reject) => {
      playHandler.btnContainerUpdater(c.target, c.step2ContainerClass, c.playPickedCard, true);
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