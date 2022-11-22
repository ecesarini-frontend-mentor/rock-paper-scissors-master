import * as btn from "/js/components/button.js";

export class InitGame {

  constructor(obj) {
    this.obj = obj;
    // this._btnMap = this.btnMap();
    // this._container = this.makeContainer();
    this._btnMap = this.btnMap();
    this._container = this.playContainer;
    //this._container = undefined;
  }

  get playMap() {
    this._btnMap = this.btnMap();
  }
  set playMap(value) {
    this._btnMap = value;
  }

  get playContainer() {
    this._container = this.makeContainer();
  }
  set playContainer(value) {
    this._container = value;
  }

  btnMap() {
    const btnMap = new Map(),
      buttonClass = this.obj["buttonClass"],
      buttonAttribute = this.obj["buttonAttribute"];
    let buttonAttributeArr = [];
    
    buttonClass.forEach((foo, ind) => {
      let baa = [];
      for(let p in buttonAttribute) {
        baa.push([p, buttonAttribute[p][ind]]);
      }
      buttonAttributeArr[ind] = baa;
      //debugger;
      const currentBtn = btn.buttonBuild(
        buttonClass[ind],
        buttonAttributeArr[ind]
      );
      btnMap.set(buttonAttribute.move[ind], currentBtn);
    });
    return btnMap;
    //this.playMap(btnMap);
  }

  makeContainer() {
    const container = document.createElement("div");
    container.classList.add(...this.obj["containerClass"]);
    return this.mapContainer(container.cloneNode());
    //this.playContainer(this.mapContainer(container.cloneNode()));

  }

  mapContainer(container) {
    this._btnMap.forEach(elem => {
      container.append(elem);
    });
    return container;
  }

  addCallback(obj) {
    const btnMap = this._btnMap
    for(let p in obj) {
      const elem = this._btnMap.get(p);
      elem.addEventListener(obj[p][0], obj[p][1]);
      this._btnMap.set(p, elem);
    }
    // this._btnMap.forEach((elm, ind) => {
    //   const attr = elm.getAttribute(arg[ind]);
    // });
      // arg.forEach(())
  }


}
