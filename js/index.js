import * as common from "/js/common/common.js";
//import * as playHandler from "/js/actions/playhandler.js";
import * as card from "/js/components/card.js";
import * as cbe from "/js/actions/cbevent.js";
import * as c from "./common/constant.js";
import { InitGame } from "./common/initgame.js";
import * as prom from "./actions/promise.js";

function initPage() {
  //const arrStep1 = ["click", () => alert("ciao belli!")],
  //const arrStep1 = ["click", () => {debugger;}],

  const initGame = new InitGame(c.playInit);

  c.sectionPlay.append(initGame.getContainer);
  
  const buttonMap = initGame.getMap;
  const arrStep1 = ["click", (e) => prom.btnPickedEvent(e, buttonMap)];
  const objCbStep1 = {
      paper: arrStep1,
      scissors: arrStep1,
      rock: arrStep1,
    };
  initGame.addCallback(objCbStep1);
}

initPage();

// function initPageOld() {
//   let currentPlayBtn = {};

//   const playBtn1 = new playHandler.BtnPlay(
//     c.step1InitProp,
//     c.step1InitClass,
//     (ect) => cbEvent.cbHandler(ect, currentPlayBtn)
//     );
//   currentPlayBtn = playBtn1.init;
//   playHandler.btnContainerRefresh(
//     c.target, c.step1ContainerClass, currentPlayBtn, true
//     );
// }

// initPageOld();
