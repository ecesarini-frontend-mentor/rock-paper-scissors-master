import * as common from "/js/common/common.js";
import * as playHandler from "/js/actions/playhandlers.js";
// import * as btn from "/js/components/buttons.js";
// import { containerObj } from "./actions/playhandlers";


function initPage() {
  const target = document.querySelector(".play");
  //let currentPlayBtn;

  // const step1Map = common.objMapper(
  //     ["paper", "rock", "scissors"],
  //     [
  //       "main-play-row1 button-paper",
  //       "main-play-row1 button-scissors",
  //       "main-play-row2 button-rock",
  //     ]
  //   ),
  const step1 = ["main-play-row1 button-paper", "main-play-row1 button-scissors",  "main-play-row2 button-rock"],
    step1ContainerClass = ["main-play-container", "main-play-step1"],
    step2ContainerClass = ["main-play-container", "main-play-step2"];

  // currentPlayBtn = playHandler.btnPlayObj(step1Map);

  const playBtn = new playHandler.BtnPlay(step1);
  // let currentPlayBtn = new playHandler.BtnPlay(step1).init();
  let currentPlayBtn = playBtn.init;
  debugger;
  playHandler.btnContainerRefresh(target, step1ContainerClass, currentPlayBtn);
  // common.callbackAttacher(currentPlayBtn, callbackStep1);
  // debugger;
  
  // common.callbackAttacher(currentPlayBtn, callbackStep1);
  // target.append(playHandler.containerObj(step1ContainerClass, currentPlayBtn));

  function callbackStep1(e) {
    debugger;
    let step2Map = [
      ["player", "bot"],
      ["button-player", "button-bot"]
    ];
    const ect = e.currentTarget;
    step2Map = common.btnPlayPicker(
      ect,
      currentPlayBtn,
      step2Map
    );
    step2Map = common.objMapper(...step2Map);
    //debugger;
    currentPlayBtn = playHandler.btnPlayObj(step2Map);
    const toAppend = playHandler.containerObj(step2ContainerClass, currentPlayBtn);
    target.replaceWith(toAppend);
    
  }
}

initPage();
