import { InitGame } from "./initgame.js";

export class ShowGame extends InitGame {
  constructor(obj) {
    super(
      this.obj,
      this._btnMap,
      this._container  
    )
    this.obj = obj;
    this._btnMap = this.btnMap();
    this._container = this.makeContainer();
  }

  // get getContainer() {
  //   return this._container;
  // }

  btnMap() {
    const btnMap = new Map(),
      buttonClass = this.obj["buttonClass"],
      buttonAttribute = this.obj["buttonAttribute"];

    buttonClass.forEach((foo, ind) => {
      const currentBtn = btn.buttonBuild(
        buttonClass[ind],
        buttonAttribute[ind]
      );
      btnMap.set(buttonAttribute[ind], currentBtn);
    });
    return btnMap;
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
