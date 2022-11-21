import { InitGame } from "./initgame.js";
import * as card from "../components/card.js";

export class ShowGame extends InitGame {
  constructor(obj) {
    //super(getMap);
    super(obj);
    this.obj = obj;
    this._btnMap = this.btnMap();
    this._container = this.makeContainer();
  }


  mapContainer(container) {
    const hPlayer = document.createElement("div"),
      hBot = document.createElement("div");

    hPlayer.innerHTML = "<p>Player</p>";
    hBot.innerHTML = "<p>Bot</p>";

    const crd = [hPlayer, hBot];

    this._btnMap.forEach((elem, ind) => {
      container.append(card.cardAdder(crd[ind], elem));
    });

    debugger;
    return container;

    //debugger;

  }
  // get getMap() {
  //   debugger;
  //   return this._btnMap;
  // }

  /*btnMap() {
    super.btnMap();
  }*/
  // makeContainer() {
  //   let container = super.makeContainer();
  //   debugger;

  //   //this._container = super.makeContainer();
  //   const container = document.createElement("div");
  //   container.classList.add(...this.obj["containerClass"]);
  //   this._btnMap.forEach((elm) => {
  //     container.append(elm);
  //   });


  //   return container;
  //}
}
