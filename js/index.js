import * as common from "/js/common/common.js";
import * as playHandler from "/js/actions/playhandler.js";
import * as card from "/js/components/card.js";
import * as cbEvent from "/js/actions/cbevent.js";
import * as c from "./common/constant.js";

function initPage() {
  let currentPlayBtn = {};

  const playBtn1 = new playHandler.BtnPlay(
    c.step1InitProp, 
    c.step1InitClass,
    (ect) => cbEvent.cbHandler(ect, currentPlayBtn)
    );
  currentPlayBtn = playBtn1.init;
  playHandler.btnContainerRefresh(
    c.target, c.step1ContainerClass, currentPlayBtn, true
    );
}

initPage();
