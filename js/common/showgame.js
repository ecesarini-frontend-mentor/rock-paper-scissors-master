import { InitGame } from "./initgame.js";
import * as card from "../components/card.js";
import * as common from "./common.js";

export class ShowGame extends InitGame {
  constructor(obj, cardArr) {
    //super(playMap);
    super(obj, cardArr);
    this.obj = obj;
    this._map
    this._btnMap = this.btnMap();
    this._container = this.makeContainer();
  }


  mapContainer(container, cardArr) {
    //alert(this.cardArr);
    // const hPlayer = common.elementCreator("p", "Player"),
    //   hBot = common.elementCreator("p", "Bot");
    //debugger;
    const crd = cardArr.map(
      elm => common.elementCreator(...elm)
    )

    crd.forEach((elm, ind) => {
      const mapElem = this._btnMap.get(Array.from(this._btnMap.keys(k => k))[ind]);
      container.append(card.cardAdder(elm, mapElem));
    });


    //return container;

  }
} 