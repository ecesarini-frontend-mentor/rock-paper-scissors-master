import { buttonBuild } from "/js/components/buttons.js";
import * as common from "/js/common/common.js";

export class BtnPlay {
  constructor(initClass) {
    this.initClass = initClass;
    this.btnCurrentList = {
      paper: undefined,
      scissors: undefined,
      rock: undefined
    };
  }

  get init() {
    this.initClass.forEach((elem, index) => { //don't use "map" because returns an array
      this.btnCurrentList[Object.keys(this.btnCurrentList)[index]] = buttonBuild(elem);
    });
    return this.btnCurrentList;
  }
}

export function btnContainerRefresh(tg, tgClass, obj) {
  tg.innerHtml = "";
  const container = document.createElement("div");
  container.classList.add(...tgClass);
  for(let p in obj) {
    container.append(obj[p]);
  }
  tg.append(container);
}



export function btnPlayObj(obj) {
  const btnObj = {};
  for(let prop in obj) {
    btnObj[prop] = buttonBuild(obj[prop]);
  }
  return btnObj;
}

export function containerObj(contCl, obj) {
  const container = document.createElement('div');
  container.classList.add(...contCl);
  for(let prop in obj) {
    container.append(obj[prop]);
  }
  return container;
  //tg.append(container);
}


