import { InitGame } from "./initgame.js";
import * as card from "../components/card.js";

export class ShowGame extends InitGame {
  constructor(obj) {
    super(getMap);
    this.obj = obj;
    this._btnMap = this.btnMap();
    this._container = this.makeContainer();
  }

  // get getMap() {
  //   debugger;
  //   return this._btnMap;
  // }

  btnMap() {
    super.btnMap();
  }
  makeContainer() {
    const container = document.createElement("div");
    container.classList.add(...this.obj["containerClass"]);
    this._btnMap.forEach((elm) => {
      container.append(elm);
    });

    return container;
  }
}
