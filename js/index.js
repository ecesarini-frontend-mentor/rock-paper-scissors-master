import * as common from "/js/common/common.js";
import * as playHandler from "/js/actions/playhandler.js";
import * as card from "/js/components/card.js";
// import * as btn from "/js/components/buttons.js";
// import { containerObj } from "./actions/playhandlers";


function initPage() {
  let target = document.querySelector(".play");
  //let currentPlayBtn;

  const step1InitProp = ["paper", "scissors", "rock"],
    step1InitClass = [
      "main-play-row1 button-paper",
      "main-play-row1 button-scissors",
      "main-play-row2 button-rock"
    ],
    step1ContainerClass = ["main-play-container", "main-play-step1"],
    setp2InitProp = ["player", "bot"];

  const playPickedCard = {
      player: undefined, 
      bot: undefined
    };
  const playBtn1 = new playHandler.BtnPlay(step1InitProp, step1InitClass, cbst1);
  let currentPlayBtn = playBtn1.init;
  
  playHandler.btnContainerRefresh(target, step1ContainerClass, currentPlayBtn, true);
  // debugger;

  function cbst1(ect) {
    const step2InitClass = common.playPicker(ect, currentPlayBtn, "main-play-row2"),
      step2ContainerClass = ["main-play-container", "main-play-step2"],
      // playBtn2 = new playHandler.BtnPlay(setp2InitProp, step2InitClass, () => alert("ciao"));
      playBtn2 = new playHandler.BtnPlay(setp2InitProp, step2InitClass, cbst2);

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

  }

  function cbst2(ect) {

  }

}

initPage();
