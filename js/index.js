import * as common from "/js/common/common.js";
import * as playHandler from "/js/actions/playhandlers.js";
// import * as btn from "/js/components/buttons.js";
// import { containerObj } from "./actions/playhandlers";


function initPage() {
  let target = document.querySelector(".play");
  //let currentPlayBtn;

  // const step1Map = common.objMapper(
  //     ["paper", "rock", "scissors"],
  //     [
  //       "main-play-row1 button-paper",
  //       "main-play-row1 button-scissors",
  //       "main-play-row2 button-rock",
  //     ]
  //   ),
  const step1InitProp = ["paper", "scissors", "rock"],
    step1InitClass = [
      "main-play-row1 button-paper",
      "main-play-row1 button-scissors",
      "main-play-row2 button-rock"
    ],
    step1ContainerClass = ["main-play-container", "main-play-step1"];

  // const playBtn = new playHandler.BtnPlay(step1InitProp, step1InitClass, () => alert('ciao'));
  const playBtn1 = new playHandler.BtnPlay(step1InitProp, step1InitClass, cbst1);
  let currentPlayBtn = playBtn1.init;
  playHandler.btnContainerRefresh(target, step1ContainerClass, currentPlayBtn);
  // debugger;

  function cbst1(ect) {
    const setp2InitProp = ["player", "bot"],
      step2InitClass = common.playPicker(ect, currentPlayBtn, "main-play-row2"),
      step2ContainerClass = ["main-play-container", "main-play-step2"],
      playBtn2 = new playHandler.BtnPlay(setp2InitProp, step2InitClass, () => alert("ciao"));
    
    currentPlayBtn = playBtn2.init;    
    debugger;
    playHandler.btnContainerRefresh(target, step2ContainerClass, currentPlayBtn);

  }



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
