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
    //debugger;
    const crd = this.cardArr.map(
      elm => common.elementCreator(...elm)
    );
    let appender;
    crd.forEach((elm, ind) => {
      const mapElem = this._btnMap.get(Array.from(this._btnMap.keys(k => k))[ind]);
      const cA = card.cardAdder(elm, mapElem, this.cardArr[ind][2]);
      if(ind === 1) {
        const cat = common.elementCreator("div", null, ["card-adder-test"]);
        appender = cat.append(cA);
      } else {
        appender = cA;
      }
      // appender = (ind === 1)? 
      //   common.elementCreator("div", null, ["card-adder-test"]).append(cA):
      //   cA;

      // debugger;
      // container.append(card.cardAdder(elm, mapElem, this._cardArr[ind][2]));
      container.append(appender);
    });
    return container;
  }

} 