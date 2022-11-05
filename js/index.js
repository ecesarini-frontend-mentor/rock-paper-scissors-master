import * as common from "/js/common/common.js";
import * as playHandler from "/js/actions/playhandlers.js";
// import * as btn from "/js/components/buttons/buttons.js";
// import { containerObj } from "./actions/playhandlers";
//import { Listener } from "./common/common";

function initPage() {
  const target = document.querySelector(".play");
  let currentPlayBtn;

  const step1Map = common.objMapper(
      ["paper", "rock", "scissors"],
      [
        "main-play-row-1 button-paper",
        "main-play-row-1 button-scissors",
        "main-play-row-2 button-rock",
      ]
    ),
    step1ContainerClass = ["main-play-container", "main-play-step1"],
    step2Map = common.objMapper(
      ["player", "bot"],
      ["main-play-row2 button-player", "main-play-row-2 button-bot"]
    ),
    step2ContainerClass = ["main-play-container", "main-play-step2"];

  currentPlayBtn = playHandler.btnPlayObj(step1Map);
  playHandler.callbackAttacher(currentPlayBtn, callbackStep1);
  target.append(playHandler.containerObj(step1ContainerClass, currentPlayBtn));
  
  function callbackStep1(e) {
    const ect = e.currentTarget;
    currentPlayBtn = common.btnPlayPicker(ect, currentPlayBtn, step2ContainerClass);
    const currentContainer = playHandler.containerObj(step2ContainerClass, currentPlayBtn);
    debugger;
    //   let btnTempObj = playHandler.btnPlayObj()
    //   currentPlayBtn = playHandler.btnPlayObj(btnPlayTmp);
    //playHandler.containerObj(target, step2ContainerClass, currentPlayBtn);
    //target.firstElementChild.replaceWith(playHandler.containerObj(step2ContainerClass, currentPlayBtn));
  }
}

initPage();
