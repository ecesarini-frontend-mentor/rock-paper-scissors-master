import * as common from "/js/common/common.js";
//import * as playHandler from "/js/actions/playhandler.js";
import * as card from "/js/components/card.js";
import * as cbEvent from "/js/actions/cbevent.js";
import * as c from "./common/constant.js";
import {InitGame} from "./common/initgame.js";

function initPage() {
  const sectionPlay = document.querySelector(".play");
  const initPlay = new InitGame(c.initContainer);
  const step1 = () => alert("ciao");

  sectionPlay.append(initPlay.getContainer);
  initPlay.addCallback(["click", step1]);
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
