import { InitGame } from "./initgame.js";
import * as card from "../components/card.js";
import * as common from "./common.js";

export class ShowGame extends InitGame {
  constructor(obj, cardArr) {
    super(obj);
    this.obj = obj;
    this._btnMap;
    this._container;
    this._cardArr = cardArr;
  }

  mapContainer(container) {
    //debugger;
    const crd = this._cardArr.map(
      elm => common.elementCreator(...elm)
    );

    crd.forEach((elm, ind) => {
      const mapElem = this._btnMap.get(Array.from(this._btnMap.keys(k => k))[ind]);
      container.append(card.cardAdder(elm, mapElem, this._cardArr[ind][2]));
    });
    return container;
  }

} 