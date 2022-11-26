import { InitGame } from "./initgame.js";
import * as card from "../components/card.js";
import * as common from "./common.js";

export class ShowGame extends InitGame {
  constructor(obj, cardArr) {
    super(obj);
    this.obj = obj;
    this._btnMap;
    this._container;
    this.cardArr = cardArr;
  }

  mapContainer(container) {
    debugger;
    const crd = this.cardArr.map(
      elm => common.elementCreator(...elm)
    );
    crd.forEach((elm, ind) => {
      let cA;
      const mapElem = this._btnMap.get(Array.from(this._btnMap.keys(k => k))[ind]);
      if(ind === 1) {
        const cat = common.elementCreator("div", null, ["main-play-row2"]);
        cat.append(mapElem);
        cA = cat;
      } else {
        cA = mapElem;
      }
      let appender = card.cardBuild(elm, cA, this.cardArr[ind][2]);
      container.append(appender);
    });
    return container;
  }

} 