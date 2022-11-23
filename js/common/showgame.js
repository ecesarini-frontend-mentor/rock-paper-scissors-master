import { InitGame } from "./initgame.js";
import * as card from "../components/card.js";
import * as common from "./common.js";

export class ShowGame extends InitGame {
  constructor(obj, cardArr) {
    //super(playMap);
    super(obj);
    this.obj = obj;
    this._btnMap = this.btnMap();
    this._container = this.makeContainer();
    this._cardArr = this.cardArr(cardArr);
  }

  // get cardArr() {
  //   return this._cardArr;
  // }
  // set cardArr(value) {
  //   this._cardArr = value;
  // }

  // makeContainer() {
  //   const mc = super.makeContainer();
  //   const ca = this._cardArr;
  //   //debugger;

  //   this.makeContainerShow(mc, ca);//, this.cardArr());
  // }

    //alert(this.cardArr);
    // const hPlayer = common.elementCreator("p", "Player"),
    //   hBot = common.elementCreator("p", "Bot");
  mapContainer(container) {
    //debugger;
    const crd = this._cardArr.map(
      elm => common.elementCreator(...elm)
    );

    crd.forEach((elm, ind) => {
      const mapElem = this._btnMap.get(Array.from(this._btnMap.keys(k => k))[ind]);
      //container.append(card.cardAdder(elm, mapElem));
      mc.append(card.cardAdder(elm, mapElem));
    });


    //return container;

  }
} 