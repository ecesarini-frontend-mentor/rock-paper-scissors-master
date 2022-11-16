import * as btn from "/js/components/button.js";

export class InitGame {
  constructor(obj) {
    this.obj = obj;
    this._btnMap = this.btnMap();
    this._container = this.makeContainer();
  }

  get getContainer() {
    return this._container;
  }

  btnMap() {
    const btnMap = new Map(),
      buttonClass = this.obj["buttonClass"],
      buttonAttribute = this.obj["buttonAttribute"];
    // buttonCallback = this.obj["buttonCallback"];

    buttonClass.forEach((foo, ind) => {
      const currentBtn = btn.buttonBuild(
        buttonClass[ind],
        buttonAttribute[ind]
        //buttonCallback[ind]
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

  addCallback(arg) {
    debugger;
    this._btnMap.forEach((elm, ind) => {
      const attr = elm.getAttribute(arg[ind]);
    });
      // arg.forEach(())
  }
}
