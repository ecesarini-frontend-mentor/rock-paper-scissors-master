import * as common from "/js/common/common.js";
import * as playHandler from "/js/actions/playhandlers.js";
//import { Listener } from "./common/common";

function initPage() {
  const target = document.querySelector(".play");
  let playObj;

  const step1Obj = new common.StepObj(
      ["paper", "rock", "scissors"],
      [
        "main-play-row-1 button-paper",
        "main-play-row-1 button-scissors",
        "main-play-row-2 button-rock",
      ]
    ),
    step2Obj = new common.StepObj(
      ["player", "bot"],
      ["main-play-row2 button-player", "main-play-row-2 button-bot"]
    );

  playObj = playHandler.btnPlayContainer(
      ["main-play-container", "main-play-step1"],
      step1Obj.btnProp,
      step1Obj.btnClass
    );
    // step2cont = playHandler.btnPlayContainer(
    //   ["main-play-container", "main-play-step2"],
    //   step2Obj.btnProp,
    //   step2Obj.btnClass
    // );
  
  const listener1 = new common.Listener(
    (a) => alert(a),
    ['ciao']
  );

  //playHandler.playUpdater(target, step1cont, (a) => alert(a), ["ciao"]);
  playHandler.playUpdater(target, step1cont, listener1);

  function step1Action(a) {
    //const btnPlay = document.querySelectorAll(".play button");
    //playHandler.btnPlayContainer(step2cont);
  }
}

initPage();
